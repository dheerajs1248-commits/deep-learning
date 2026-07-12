import { useEffect, useRef, useState } from "react";

/**
 * A custom hook that creates a looping animation step counter.
 * Uses requestAnimationFrame to ensure high performance and sync with the screen's refresh rate.
 *
 * @param maxSteps The number of steps in the animation loop.
 * @param intervalMs The duration to stay on each step in milliseconds.
 * @param isPaused Whether the animation loop is currently paused.
 */
export function useLoopingStep(
  maxSteps: number,
  intervalMs: number,
  isPaused: boolean = false
): number {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const lastTickRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // We use standard refs to avoid re-triggering the effect on every render
  const maxStepsRef = useRef<number>(maxSteps);
  const intervalMsRef = useRef<number>(intervalMs);
  const isPausedRef = useRef<boolean>(isPaused);

  useEffect(() => {
    maxStepsRef.current = maxSteps;
    intervalMsRef.current = intervalMs;
    isPausedRef.current = isPaused;
  }, [maxSteps, intervalMs, isPaused]);

  useEffect(() => {
    // Reset step if dimensions or parameters change drastically
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
        // Adjust for any lag to keep timing consistent
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
  }, []); // Only run once on mount

  return currentStep;
}
