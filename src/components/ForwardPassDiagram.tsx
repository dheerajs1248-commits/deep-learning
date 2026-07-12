import React from "react";

export function ForwardPassDiagram() {
  return (
    <div className="diagram-container" id="forward-pass-wrapper">
      <h3 className="diagram-title">The Forward Pass: Making a Prediction</h3>
      <p className="diagram-subtitle">
        Watch data flow forward from input features, through a hidden layer of representations, to the output predictions.
      </p>

      <div className="svg-wrapper">
        <svg
          viewBox="0 0 550 320"
          className="interactive-svg"
          id="forward-pass-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for gradients, glowing filters */}
          <defs>
            <filter id="glow-teal-filter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connections (Background lines) */}
          {/* Input (x: 80) to Hidden (x: 250) */}
          <line x1="80" y1="80" x2="250" y2="50" className="conn-line-bg" />
          <line x1="80" y1="80" x2="250" y2="120" className="conn-line-bg" />
          <line x1="80" y1="80" x2="250" y2="190" className="conn-line-bg" />
          <line x1="80" y1="80" x2="250" y2="260" className="conn-line-bg" />

          <line x1="80" y1="170" x2="250" y2="50" className="conn-line-bg" />
          <line x1="80" y1="170" x2="250" y2="120" className="conn-line-bg" />
          <line x1="80" y1="170" x2="250" y2="190" className="conn-line-bg" />
          <line x1="80" y1="170" x2="250" y2="260" className="conn-line-bg" />

          <line x1="80" y1="260" x2="250" y2="50" className="conn-line-bg" />
          <line x1="80" y1="260" x2="250" y2="120" className="conn-line-bg" />
          <line x1="80" y1="260" x2="250" y2="190" className="conn-line-bg" />
          <line x1="80" y1="260" x2="250" y2="260" className="conn-line-bg" />

          {/* Hidden (x: 250) to Output (x: 440) */}
          <line x1="250" y1="50" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="50" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="120" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="120" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="190" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="190" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="260" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="260" x2="440" y2="210" className="conn-line-bg" />


          {/* Active Forward Signaling Lines (Teal) */}
          <g className="fwd-active-lines">
            {/* Input to Hidden Layer Pulses */}
            <line x1="80" y1="80" x2="250" y2="50" className="fwd-pulse-1" />
            <line x1="80" y1="80" x2="250" y2="120" className="fwd-pulse-1" />
            <line x1="80" y1="80" x2="250" y2="190" className="fwd-pulse-1" />
            <line x1="80" y1="80" x2="250" y2="260" className="fwd-pulse-1" />

            <line x1="80" y1="170" x2="250" y2="50" className="fwd-pulse-1" />
            <line x1="80" y1="170" x2="250" y2="120" className="fwd-pulse-1" />
            <line x1="80" y1="170" x2="250" y2="190" className="fwd-pulse-1" />
            <line x1="80" y1="170" x2="250" y2="260" className="fwd-pulse-1" />

            <line x1="80" y1="260" x2="250" y2="50" className="fwd-pulse-1" />
            <line x1="80" y1="260" x2="250" y2="120" className="fwd-pulse-1" />
            <line x1="80" y1="260" x2="250" y2="190" className="fwd-pulse-1" />
            <line x1="80" y1="260" x2="250" y2="260" className="fwd-pulse-1" />

            {/* Hidden to Output Layer Pulses */}
            <line x1="250" y1="50" x2="440" y2="110" className="fwd-pulse-2" />
            <line x1="250" y1="50" x2="440" y2="210" className="fwd-pulse-2" />

            <line x1="250" y1="120" x2="440" y2="110" className="fwd-pulse-2" />
            <line x1="250" y1="120" x2="440" y2="210" className="fwd-pulse-2" />

            <line x1="250" y1="190" x2="440" y2="110" className="fwd-pulse-2" />
            <line x1="250" y1="190" x2="440" y2="210" className="fwd-pulse-2" />

            <line x1="250" y1="260" x2="440" y2="110" className="fwd-pulse-2" />
            <line x1="250" y1="260" x2="440" y2="210" className="fwd-pulse-2" />
          </g>


          {/* Input Layer Nodes (x: 80) */}
          <g transform="translate(80, 80)" className="fwd-input-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-in" />
            <circle r="14" className="node fwd-node-in" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">I₁</text>
          </g>
          <g transform="translate(80, 170)" className="fwd-input-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-in" />
            <circle r="14" className="node fwd-node-in" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">I₂</text>
          </g>
          <g transform="translate(80, 260)" className="fwd-input-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-in" />
            <circle r="14" className="node fwd-node-in" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">I₃</text>
          </g>

          {/* Hidden Layer Nodes (x: 250) */}
          <g transform="translate(250, 50)" className="fwd-hidden-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-hid" />
            <circle r="14" className="node fwd-node-hid" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">H₁</text>
          </g>
          <g transform="translate(250, 120)" className="fwd-hidden-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-hid" />
            <circle r="14" className="node fwd-node-hid" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">H₂</text>
          </g>
          <g transform="translate(250, 190)" className="fwd-hidden-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-hid" />
            <circle r="14" className="node fwd-node-hid" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">H₃</text>
          </g>
          <g transform="translate(250, 260)" className="fwd-hidden-node-group">
            <circle r="18" className="fwd-node-ring fwd-node-ring-hid" />
            <circle r="14" className="node fwd-node-hid" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">H₄</text>
          </g>

          {/* Output Layer Nodes (x: 440) */}
          <g transform="translate(440, 110)" className="fwd-output-node-group">
            <circle r="22" className="fwd-node-ring fwd-node-ring-out" />
            <circle r="16" className="node fwd-node-out" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">O₁</text>
            <text className="fwd-out-val font-mono" dx="28" dy="4">0.92</text>
          </g>
          <g transform="translate(440, 210)" className="fwd-output-node-group">
            <circle r="22" className="fwd-node-ring fwd-node-ring-out" />
            <circle r="16" className="node fwd-node-out" />
            <text className="fwd-text text-xs font-bold" dy="4" textAnchor="middle">O₂</text>
            <text className="fwd-out-val font-mono" dx="28" dy="4">0.08</text>
          </g>

          {/* Layer Headers */}
          <text className="layer-header-text" x="80" y="32" textAnchor="middle">Input Layer</text>
          <text className="layer-header-text" x="250" y="32" textAnchor="middle">Hidden Layer (ReLU)</text>
          <text className="layer-header-text" x="440" y="32" textAnchor="middle">Output (Softmax)</text>
        </svg>
      </div>

      <div className="flow-explanation">
        <span className="info-badge font-mono">FLOW: INPUT ➔ HIDDEN ➔ OUTPUT</span>
        <p className="explanation-paragraph mt-2">
          During the forward pass, signals are processed step-by-step. Layer activations are computed using weights, biases, and activation functions. In this visualization, we see a feedforward neural network calculating an output score (such as classifying an image as a Cat (O₁: 92%) rather than a Dog (O₂: 8%)).
        </p>
      </div>
    </div>
  );
}
