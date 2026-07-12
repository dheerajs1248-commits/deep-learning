import React from "react";
import { useLoopingStep } from "../hooks/useLoopingStep";

export function RnnDiagram() {
  const activeStep = useLoopingStep(5, 1500);

  const cellY = 150;
  const tMinus1X = 130;
  const tX = 275;
  const tPlus1X = 420;

  return (
    <div className="diagram-container" id="rnn-diagram-wrapper">
      <h3 className="diagram-title">Sequential Memory Flow in LSTMs</h3>
      <p className="diagram-subtitle">
        Observe how memory (the horizontal conveyor belt) carries hidden state and cell state forward, merging with inputs at each tick.
      </p>

      <div className="svg-wrapper font-sans">
        <svg
          viewBox="0 0 550 320"
          className="interactive-svg"
          id="rnn-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="memory-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f5a0" />
              <stop offset="100%" stopColor="#00d9f6" />
            </linearGradient>
            <filter id="emerald-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <line x1="30" y1="130" x2="520" y2="130" className="conveyor-bg cell-state-line" />
          <line x1="30" y1="170" x2="520" y2="170" className="conveyor-bg hidden-state-line" />

          <text className="conveyor-label-tag font-mono text-[9px]" x="45" y="122">CELL STATE (Cₜ) - Long Term Memory</text>
          <text className="conveyor-label-tag font-mono text-[9px]" x="45" y="185">HIDDEN STATE (hₜ) - Short Term Memory</text>

          {activeStep === 0 && (
            <g>
              <line x1="30" y1="130" x2={tMinus1X - 35} y2="130" className="conveyor-active" />
              <line x1="30" y1="170" x2={tMinus1X - 35} y2="170" className="conveyor-active" />
              <line x1={tMinus1X} y1="265" x2={tMinus1X} y2={cellY + 35} className="conveyor-active" />
            </g>
          )}

          {activeStep === 1 && (
            <g>
              <line x1={tMinus1X} y1={cellY - 35} x2={tMinus1X} y2="55" className="conveyor-active" />
              <line x1={tMinus1X + 35} y1="130" x2={tX - 35} y2="130" className="conveyor-active" />
              <line x1={tMinus1X + 35} y1="170" x2={tX - 35} y2="170" className="conveyor-active" />
              <line x1={tX} y1="265" x2={tX} y2={cellY + 35} className="conveyor-active" />
            </g>
          )}

          {activeStep === 2 && (
            <g>
              <line x1={tX} y1={cellY - 35} x2={tX} y2="55" className="conveyor-active" />
              <line x1={tX + 35} y1="130" x2={tPlus1X - 35} y2="130" className="conveyor-active" />
              <line x1={tX + 35} y1="170" x2={tPlus1X - 35} y2="170" className="conveyor-active" />
              <line x1={tPlus1X} y1="265" x2={tPlus1X} y2={cellY + 35} className="conveyor-active" />
            </g>
          )}

          {activeStep === 3 && (
            <g>
              <line x1={tPlus1X} y1={cellY - 35} x2={tPlus1X} y2="55" className="conveyor-active" />
              <line x1={tPlus1X + 35} y1="130" x2="520" y2="130" className="conveyor-active" />
              <line x1={tPlus1X + 35} y1="170" x2="520" y2="170" className="conveyor-active" />
            </g>
          )}

          {activeStep === 4 && (
            <g>
              <line x1="30" y1="130" x2="520" y2="130" className="conveyor-active conveyor-all-glow" />
              <line x1="30" y1="170" x2="520" y2="170" className="conveyor-active conveyor-all-glow" />
              <line x1={tMinus1X} y1="265" x2={tMinus1X} y2={cellY + 35} className="conveyor-active conveyor-all-glow" />
              <line x1={tX} y1="265" x2={tX} y2={cellY + 35} className="conveyor-active conveyor-all-glow" />
              <line x1={tPlus1X} y1="265" x2={tPlus1X} y2={cellY + 35} className="conveyor-active conveyor-all-glow" />
              <line x1={tMinus1X} y1={cellY - 35} x2={tMinus1X} y2="55" className="conveyor-active conveyor-all-glow" />
              <line x1={tX} y1={cellY - 35} x2={tX} y2="55" className="conveyor-active conveyor-all-glow" />
              <line x1={tPlus1X} y1={cellY - 35} x2={tPlus1X} y2="55" className="conveyor-active conveyor-all-glow" />
            </g>
          )}

          <g transform={`translate(${tMinus1X}, ${cellY})`} className="rnn-cell-group">
            <rect
              x="-35" y="-35" width="70" height="70" rx="10"
              className={`rnn-cell-box ${activeStep === 0 || activeStep === 1 || activeStep === 4 ? "rnn-cell-box-active" : ""}`}
            />
            <text className="rnn-cell-title font-bold" dy="-6" textAnchor="middle">LSTM</text>
            <text className="rnn-cell-step font-mono" dy="12" textAnchor="middle">t - 1</text>
            <circle cx="-18" cy="-18" r="4" className="gate-notch forget-gate" />
            <circle cx="0" cy="-18" r="4" className="gate-notch input-gate" />
            <circle cx="18" cy="-18" r="4" className="gate-notch output-gate" />
          </g>

          <g transform={`translate(${tX}, ${cellY})`} className="rnn-cell-group">
            <rect
              x="-35" y="-35" width="70" height="70" rx="10"
              className={`rnn-cell-box ${activeStep === 1 || activeStep === 2 || activeStep === 4 ? "rnn-cell-box-active" : ""}`}
            />
            <text className="rnn-cell-title font-bold" dy="-6" textAnchor="middle">LSTM</text>
            <text className="rnn-cell-step font-mono" dy="12" textAnchor="middle">t</text>
            <circle cx="-18" cy="-18" r="4" className="gate-notch forget-gate" />
            <circle cx="0" cy="-18" r="4" className="gate-notch input-gate" />
            <circle cx="18" cy="-18" r="4" className="gate-notch output-gate" />
          </g>

          <g transform={`translate(${tPlus1X}, ${cellY})`} className="rnn-cell-group">
            <rect
              x="-35" y="-35" width="70" height="70" rx="10"
              className={`rnn-cell-box ${activeStep === 2 || activeStep === 3 || activeStep === 4 ? "rnn-cell-box-active" : ""}`}
            />
            <text className="rnn-cell-title font-bold" dy="-6" textAnchor="middle">LSTM</text>
            <text className="rnn-cell-step font-mono" dy="12" textAnchor="middle">t + 1</text>
            <circle cx="-18" cy="-18" r="4" className="gate-notch forget-gate" />
            <circle cx="0" cy="-18" r="4" className="gate-notch input-gate" />
            <circle cx="18" cy="-18" r="4" className="gate-notch output-gate" />
          </g>

          <g transform={`translate(${tMinus1X}, 265)`} className="rnn-input-node">
            <circle r="14" className={`node rnn-in-node ${activeStep === 0 || activeStep === 4 ? "rnn-in-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">Xₜ₋₁</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="26" textAnchor="middle">"The"</text>
          </g>
          <g transform={`translate(${tX}, 265)`} className="rnn-input-node">
            <circle r="14" className={`node rnn-in-node ${activeStep === 1 || activeStep === 4 ? "rnn-in-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">Xₜ</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="26" textAnchor="middle">"Deep"</text>
          </g>
          <g transform={`translate(${tPlus1X}, 265)`} className="rnn-input-node">
            <circle r="14" className={`node rnn-in-node ${activeStep === 2 || activeStep === 4 ? "rnn-in-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">Xₜ₊₁</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="26" textAnchor="middle">"Learning"</text>
          </g>

          <g transform={`translate(${tMinus1X}, 55)`} className="rnn-output-node">
            <circle r="14" className={`node rnn-out-node ${activeStep === 1 || activeStep === 4 ? "rnn-out-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">hₜ₋₁</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="-20" textAnchor="middle">"Noun"</text>
          </g>
          <g transform={`translate(${tX}, 55)`} className="rnn-output-node">
            <circle r="14" className={`node rnn-out-node ${activeStep === 2 || activeStep === 4 ? "rnn-out-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">hₜ</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="-20" textAnchor="middle">"Adjective"</text>
          </g>
          <g transform={`translate(${tPlus1X}, 55)`} className="rnn-output-node">
            <circle r="14" className={`node rnn-out-node ${activeStep === 3 || activeStep === 4 ? "rnn-out-active" : ""}`} />
            <text className="node-text text-[10px] font-bold" dy="3.5" textAnchor="middle">hₜ₊₁</text>
            <text className="rnn-word-tag font-mono text-[9px]" dy="-20" textAnchor="middle">"Subject"</text>
          </g>

          <g transform="translate(275, 305)" className="rnn-timeline-badge">
            <rect x="-60" y="-8" width="120" height="16" rx="4" className="timeline-badge-rect" />
            <text className="font-mono text-[9px]" dy="3" textAnchor="middle">
              {activeStep === 4 ? "FULL TIME UNROLL COMPLETE" : `PROCESSING STEP: t = ${activeStep}`}
            </text>
          </g>
        </svg>
      </div>

      <div className="flow-explanation">
        <span className="memory-badge font-mono">FLOW: HORIZONTAL TIME CONVEYOR</span>
        <p className="explanation-paragraph mt-2">
          LSTMs resolve sequential memory decay by maintaining an unhindered <strong>Cell State (Cₜ)</strong> alongside a <strong>Hidden State (hₜ)</strong>. At each step, gates inside the cell block filter out irrelevant data (Forget Gate), include new input signals (Input Gate), and release predictions (Output Gate), allowing critical patterns to persist across thousands of steps.
        </p>
      </div>
    </div>
  );
}
