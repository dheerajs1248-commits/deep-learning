import { useEffect, useRef, useState } from "react";

export function useLoopingStep(
  maxSteps: number,
  intervalMs: number,
  isPaused: boolean = false
): number {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const lastTickRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const maxStepsRef = useRef<number>(maxSteps);
  const intervalMsRef = useRef<number>(intervalMs);
  const isPausedRef = useRef<boolean>(isPaused);

  useEffect(() => {
    maxStepsRef.current = maxSteps;
    intervalMsRef.current = intervalMs;
    isPausedRef.current = isPaused;
  }, [maxSteps, intervalMs, isPaused]);

  useEffect(() => {
    setCurrentStep(0);
    lastTickRef.current = performance.now();

    const animate = (time: number) => {
      if (isPausedRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = time - lastTickRef.current;

      if (elapsed >= intervalMsRef.current) {
        setCurrentStep((prev) => (prev + 1) % maxStepsRef.current);
        lastTickRef.current = time - (elapsed % intervalMsRef.current);
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return currentStep;
}
