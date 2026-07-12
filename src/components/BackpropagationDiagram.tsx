import React from "react";

export function BackpropagationDiagram() {
  return (
    <div className="diagram-container" id="backprop-wrapper">
      <h3 className="diagram-title">Backpropagation: Learning from Errors</h3>
      <p className="diagram-subtitle">
        Watch the error signal propagate backwards, calculating how each weight contributed to the prediction mistake.
      </p>

      <div className="svg-wrapper">
        <svg
          viewBox="0 0 550 320"
          className="interactive-svg"
          id="backpropagation-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow-magenta-filter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

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

          <line x1="250" y1="50" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="50" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="120" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="120" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="190" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="190" x2="440" y2="210" className="conn-line-bg" />

          <line x1="250" y1="260" x2="440" y2="110" className="conn-line-bg" />
          <line x1="250" y1="260" x2="440" y2="210" className="conn-line-bg" />

          <g className="backprop-active-lines">
            <line x1="440" y1="110" x2="250" y2="50" className="back-pulse-1" />
            <line x1="440" y1="110" x2="250" y2="120" className="back-pulse-1" />
            <line x1="440" y1="110" x2="250" y2="190" className="back-pulse-1" />
            <line x1="440" y1="110" x2="250" y2="260" className="back-pulse-1" />

            <line x1="440" y1="210" x2="250" y2="50" className="back-pulse-1" />
            <line x1="440" y1="210" x2="250" y2="120" className="back-pulse-1" />
            <line x1="440" y1="210" x2="250" y2="190" className="back-pulse-1" />
            <line x1="440" y1="210" x2="250" y2="260" className="back-pulse-1" />

            <line x1="250" y1="50" x2="80" y2="80" className="back-pulse-2" />
            <line x1="250" y1="50" x2="80" y2="170" className="back-pulse-2" />
            <line x1="250" y1="50" x2="80" y2="260" className="back-pulse-2" />

            <line x1="250" y1="120" x2="80" y2="80" className="back-pulse-2" />
            <line x1="250" y1="120" x2="80" y2="170" className="back-pulse-2" />
            <line x1="250" y1="120" x2="80" y2="260" className="back-pulse-2" />

            <line x1="250" y1="190" x2="80" y2="80" className="back-pulse-2" />
            <line x1="250" y1="190" x2="80" y2="170" className="back-pulse-2" />
            <line x1="250" y1="190" x2="80" y2="260" className="back-pulse-2" />

            <line x1="250" y1="260" x2="80" y2="80" className="back-pulse-2" />
            <line x1="250" y1="260" x2="80" y2="170" className="back-pulse-2" />
            <line x1="250" y1="260" x2="80" y2="260" className="back-pulse-2" />
          </g>

          <g transform="translate(80, 80)" className="back-input-node-group">
            <circle r="18" className="back-node-ring back-node-ring-in" />
            <circle r="14" className="node back-node-in" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">I₁</text>
            <text className="back-delta font-mono" dx="-36" dy="4">w₁ -= dL/dw</text>
          </g>
          <g transform="translate(80, 170)" className="back-input-node-group">
            <circle r="18" className="back-node-ring back-node-ring-in" />
            <circle r="14" className="node back-node-in" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">I₂</text>
            <text className="back-delta font-mono" dx="-36" dy="4">w₂ -= dL/dw</text>
          </g>
          <g transform="translate(80, 260)" className="back-input-node-group">
            <circle r="18" className="back-node-ring back-node-ring-in" />
            <circle r="14" className="node back-node-in" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">I₃</text>
            <text className="back-delta font-mono" dx="-36" dy="4">w₃ -= dL/dw</text>
          </g>

          <g transform="translate(250, 50)" className="back-hidden-node-group">
            <circle r="18" className="back-node-ring back-node-ring-hid" />
            <circle r="14" className="node back-node-hid" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">H₁</text>
          </g>
          <g transform="translate(250, 120)" className="back-hidden-node-group">
            <circle r="18" className="back-node-ring back-node-ring-hid" />
            <circle r="14" className="node back-node-hid" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">H₂</text>
          </g>
          <g transform="translate(250, 190)" className="back-hidden-node-group">
            <circle r="18" className="back-node-ring back-node-ring-hid" />
            <circle r="14" className="node back-node-hid" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">H₃</text>
          </g>
          <g transform="translate(250, 260)" className="back-hidden-node-group">
            <circle r="18" className="back-node-ring back-node-ring-hid" />
            <circle r="14" className="node back-node-hid" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">H₄</text>
          </g>

          <g transform="translate(440, 110)" className="back-output-node-group">
            <circle r="22" className="back-node-ring back-node-ring-out" />
            <circle r="16" className="node back-node-out" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">O₁</text>
            <text className="back-error-label font-mono" dx="28" dy="-2">Error = -0.08</text>
            <text className="back-gradient font-mono" dx="28" dy="12">∂L/∂O₁ = 1</text>
          </g>
          <g transform="translate(440, 210)" className="back-output-node-group">
            <circle r="22" className="back-node-ring back-node-ring-out" />
            <circle r="16" className="node back-node-out" />
            <text className="back-text text-xs font-bold" dy="4" textAnchor="middle">O₂</text>
            <text className="back-error-label font-mono" dx="28" dy="-2">Error = +0.08</text>
            <text className="back-gradient font-mono" dx="28" dy="12">∂L/∂O₂ = -1</text>
          </g>

          <text className="layer-header-text" x="80" y="32" textAnchor="middle">Input Gradients</text>
          <text className="layer-header-text" x="250" y="32" textAnchor="middle">Hidden Error (Deltas)</text>
          <text className="layer-header-text" x="440" y="32" textAnchor="middle">Loss / Gradient Origin</text>
        </svg>
      </div>

      <div className="flow-explanation">
        <span className="error-badge font-mono">FLOW: LOSS ORIGIN ➔ HIDDEN ➔ INPUTS</span>
        <p className="explanation-paragraph mt-2">
          During backpropagation, the gradients are sent backward through the network. We compute the derivative of the loss function with respect to the pre-activation outputs, and distribute this 'blame' (loss delta) backward along connections. Each connection weight is adjusted slightly to make the network better suited for the next forward pass.
        </p>
      </div>
    </div>
  );
}
