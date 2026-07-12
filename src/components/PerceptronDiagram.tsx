import React from "react";

export function PerceptronDiagram() {
  return (
    <div className="diagram-container" id="perceptron-diagram-wrapper">
      <h3 className="diagram-title">The Single Neuron in Action</h3>
      <p className="diagram-subtitle">
        Watch inputs flow through weighted connections, sum up in the cell body, and trigger the output pulse.
      </p>

      <div className="svg-wrapper">
        <svg
          viewBox="0 0 550 320"
          className="interactive-svg"
          id="perceptron-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for gradients and shadows */}
          <defs>
            <radialGradient id="glow-teal" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glow-magenta" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f35588" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f35588" stopOpacity="0" />
            </radialGradient>
            <filter id="shadow-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines (Background) */}
          <line x1="80" y1="60" x2="250" y2="160" className="conn-line" />
          <line x1="80" y1="160" x2="250" y2="160" className="conn-line" />
          <line x1="80" y1="260" x2="250" y2="160" className="conn-line" />
          <line x1="250" y1="50" x2="250" y2="115" className="conn-line bias-line" />
          <line x1="250" y1="160" x2="440" y2="160" className="conn-line out-line" />

          {/* Pulsing Highlight Connection Lines */}
          <line
            x1="80"
            y1="60"
            x2="250"
            y2="160"
            className="conn-pulse conn-pulse-1"
          />
          <line
            x1="80"
            y1="160"
            x2="250"
            y2="160"
            className="conn-pulse conn-pulse-2"
          />
          <line
            x1="80"
            y1="260"
            x2="250"
            y2="160"
            className="conn-pulse conn-pulse-3"
          />
          <line
            x1="250"
            y1="50"
            x2="250"
            y2="115"
            className="conn-pulse conn-pulse-bias"
          />
          <line
            x1="250"
            y1="160"
            x2="440"
            y2="160"
            className="conn-pulse conn-pulse-out"
          />

          {/* Travelling Beads */}
          <circle r="6" className="bead bead-1" />
          <circle r="6" className="bead bead-2" />
          <circle r="6" className="bead bead-3" />
          <circle r="5" className="bead bead-bias" />
          <circle r="6" className="bead bead-out" />

          {/* Weights Indicators (Labels on Connections) */}
          <g transform="translate(140, 95)" className="weight-tag">
            <rect x="-24" y="-10" width="48" height="20" rx="4" className="weight-bg" />
            <text className="weight-text" dy="4" textAnchor="middle">w₁ = +0.7</text>
          </g>
          <g transform="translate(150, 150)" className="weight-tag">
            <rect x="-24" y="-10" width="48" height="20" rx="4" className="weight-bg" />
            <text className="weight-text" dy="4" textAnchor="middle">w₂ = -0.4</text>
          </g>
          <g transform="translate(140, 225)" className="weight-tag">
            <rect x="-24" y="-10" width="48" height="20" rx="4" className="weight-bg" />
            <text className="weight-text" dy="4" textAnchor="middle">w₃ = +0.9</text>
          </g>
          <g transform="translate(250, 80)" className="weight-tag">
            <rect x="-24" y="-10" width="48" height="20" rx="4" className="weight-bg" />
            <text className="weight-text" dy="4" textAnchor="middle">b = -0.5</text>
          </g>

          {/* Input Nodes */}
          <g transform="translate(80, 60)" className="node-group">
            <circle r="22" className="node input-node" />
            <text className="node-text font-bold" dy="4" textAnchor="middle">x₁</text>
            <text className="node-subtext" dy="28" textAnchor="middle">1.0 (Size)</text>
          </g>
          <g transform="translate(80, 160)" className="node-group">
            <circle r="22" className="node input-node" />
            <text className="node-text font-bold" dy="4" textAnchor="middle">x₂</text>
            <text className="node-subtext" dy="28" textAnchor="middle">0.5 (Soft)</text>
          </g>
          <g transform="translate(80, 260)" className="node-group">
            <circle r="22" className="node input-node" />
            <text className="node-text font-bold" dy="4" textAnchor="middle">x₃</text>
            <text className="node-subtext" dy="28" textAnchor="middle">0.0 (Green)</text>
          </g>

          {/* Bias Node (Top) */}
          <g transform="translate(250, 35)" className="node-group">
            <circle r="16" className="node bias-node" />
            <text className="node-text text-xs" dy="3.5" textAnchor="middle">+1</text>
          </g>

          {/* Central Neuron Node (Sum & Activation Function) */}
          <g transform="translate(250, 160)" className="node-group main-neuron">
            <circle r="45" className="neuron-glow-pulse" />
            <circle r="40" className="node neuron-node" />
            {/* Split Line illustrating Sum vs Activation */}
            <line x1="-1" y1="-32" x2="-1" y2="32" className="neuron-split-line" />
            
            {/* Sum side */}
            <text className="neuron-math" dx="-18" dy="5" textAnchor="middle">∑</text>
            {/* Activation side */}
            <text className="neuron-math" dx="18" dy="5" textAnchor="middle">f(x)</text>
            
            <text className="neuron-label" dy="55" textAnchor="middle">Cell Body (Neuron)</text>
          </g>

          {/* Output Node */}
          <g transform="translate(440, 160)" className="node-group">
            <circle r="24" className="node-glow-pulse-out" />
            <circle r="20" className="node output-node" />
            <text className="node-text font-bold" dy="4" textAnchor="middle">y</text>
            <text className="node-subtext" dy="28" textAnchor="middle">Output (Fire!)</text>
          </g>
        </svg>
      </div>

      <div className="math-legend">
        <div className="legend-item">
          <span className="legend-label">Weighted Sum (∑):</span>
          <span className="legend-value font-mono">
            (1.0 × 0.7) + (0.5 × -0.4) + (0.0 × 0.9) + (-0.5) = <strong>+0.0</strong>
          </span>
        </div>
        <div className="legend-item">
          <span className="legend-label">Activation Function (ReLU):</span>
          <span className="legend-value font-mono">
            f(0.0) = max(0, 0.0) = <strong>0.0</strong> (Threshold met, ready to transmit!)
          </span>
        </div>
      </div>
    </div>
  );
}
