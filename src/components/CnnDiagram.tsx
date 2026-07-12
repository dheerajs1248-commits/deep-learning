import React from "react";
import { useLoopingStep } from "../hooks/useLoopingStep";

// Static inputs to show realistic values
const INPUT_IMAGE_GRID = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0]
];

const KERNEL_GRID = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1]
];

// Calculated outputs from convolving INPUT_IMAGE_GRID with KERNEL_GRID
const CONVOLVED_OUTPUT_GRID = [
  [4, 3, 4],
  [2, 4, 3],
  [2, 3, 3]
];

export function CnnDiagram() {
  // 9 positions for a 3x3 filter sliding over a 5x5 grid with stride 1
  const step = useLoopingStep(9, 1500);

  const row = Math.floor(step / 3);
  const col = step % 3;

  // Pixel grid coordinate calculations
  const cellSize = 28;
  const gap = 2;
  const gridStartX = 40;
  const gridStartY = 65;

  // Kernel center coordinates on input grid
  const highlightX = gridStartX + col * (cellSize + gap);
  const highlightY = gridStartY + row * (cellSize + gap);
  const highlightSize = 3 * cellSize + 2 * gap;

  // Output feature map coordinates
  const outputStartX = 380;
  const outputStartY = 95;
  const outputCellSize = 32;
  const outputGap = 4;

  // Dynamic coordinates for projecting lines
  const centerInputX = highlightX + highlightSize / 2;
  const centerInputY = highlightY + highlightSize / 2;

  const centerOutputX = outputStartX + col * (outputCellSize + outputGap) + outputCellSize / 2;
  const centerOutputY = outputStartY + row * (outputCellSize + outputGap) + outputCellSize / 2;

  const kernelBoxX = 245;
  const kernelBoxY = 120;
  const kernelBoxWidth = 70;
  const kernelBoxHeight = 70;

  return (
    <div className="diagram-container" id="cnn-diagram-wrapper">
      <h3 className="diagram-title">How Convolution Extracts Features</h3>
      <p className="diagram-subtitle">
        Observe a 3x3 Edge-Detection Filter slide across a 5x5 pixel image to produce a downsampled, feature-rich map.
      </p>

      <div className="svg-wrapper">
        <svg
          viewBox="0 0 550 320"
          className="interactive-svg"
          id="cnn-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic connecting projection lines */}
          <g className="projection-lines">
            {/* Top-left input corner to center kernel */}
            <line
              x1={highlightX}
              y1={highlightY}
              x2={kernelBoxX}
              y2={kernelBoxY}
              className="proj-line animate-pulse-line"
            />
            {/* Bottom-right input corner to center kernel */}
            <line
              x1={highlightX + highlightSize}
              y1={highlightY + highlightSize}
              x2={kernelBoxX + kernelBoxWidth}
              y2={kernelBoxY + kernelBoxHeight}
              className="proj-line animate-pulse-line"
            />
            {/* Center kernel to target output cell */}
            <line
              x1={kernelBoxX + kernelBoxWidth / 2}
              y1={kernelBoxY + kernelBoxHeight / 2}
              x2={centerOutputX}
              y2={centerOutputY}
              className="proj-line proj-line-out animate-pulse-line"
            />
          </g>

          {/* 1. INPUT GRID (5x5) */}
          <g>
            <text className="grid-label font-bold" x="90" y="45" textAnchor="middle">
              Input Image (5x5)
            </text>
            {INPUT_IMAGE_GRID.map((r, rIdx) =>
              r.map((val, cIdx) => {
                const cx = gridStartX + cIdx * (cellSize + gap);
                const cy = gridStartY + rIdx * (cellSize + gap);
                
                // Check if this pixel is currently covered by the 3x3 filter
                const isUnderFilter =
                  rIdx >= row && rIdx < row + 3 && cIdx >= col && cIdx < col + 3;

                return (
                  <g key={`in-${rIdx}-${cIdx}`} transform={`translate(${cx}, ${cy})`}>
                    <rect
                      width={cellSize}
                      height={cellSize}
                      rx="3"
                      className={`grid-cell input-cell ${isUnderFilter ? "active-under-filter" : ""}`}
                    />
                    <text
                      className={`cell-val font-mono ${isUnderFilter ? "active-text" : ""}`}
                      x={cellSize / 2}
                      y={cellSize / 2 + 4}
                      textAnchor="middle"
                    >
                      {val}
                    </text>
                  </g>
                );
              })
            )}

            {/* Glowing filter sliding box outline */}
            <rect
              x={highlightX - 2}
              y={highlightY - 2}
              width={highlightSize + 4}
              height={highlightSize + 4}
              rx="5"
              className="sliding-filter-frame"
            />
          </g>

          {/* 2. CONVOLUTION KERNEL BOX (3x3 represented statically in center) */}
          <g transform={`translate(${kernelBoxX}, ${kernelBoxY})`} className="kernel-box-group">
            <rect
              width={kernelBoxWidth}
              height={kernelBoxHeight}
              rx="6"
              className="kernel-container-border"
            />
            
            {/* Kernel weights diagram inside the box */}
            <text className="grid-label font-bold text-[9px]" x={kernelBoxWidth / 2} y="-12" textAnchor="middle">
              3x3 Filter (Weights)
            </text>

            <g transform="translate(8, 8)">
              {KERNEL_GRID.map((kr, krIdx) =>
                kr.map((kval, kcIdx) => {
                  const ksize = 16;
                  const kgap = 2;
                  const kx = kcIdx * (ksize + kgap);
                  const ky = krIdx * (ksize + kgap);
                  return (
                    <g key={`k-${krIdx}-${kcIdx}`} transform={`translate(${kx}, ${ky})`}>
                      <rect
                        width={ksize}
                        height={ksize}
                        rx="2"
                        className="kernel-cell"
                      />
                      <text
                        className="kernel-cell-text font-mono"
                        x={ksize / 2}
                        y={ksize / 2 + 3}
                        textAnchor="middle"
                      >
                        {kval === 1 ? "+1" : "0"}
                      </text>
                    </g>
                  );
                })
              )}
            </g>

            {/* Operator label */}
            <text className="operator-cross font-bold" x={kernelBoxWidth / 2} y={kernelBoxHeight / 2 + 5} textAnchor="middle">
              ★
            </text>
          </g>

          {/* 3. OUTPUT GRID (3x3 Feature Map) */}
          <g>
            <text className="grid-label font-bold" x="430" y="45" textAnchor="middle">
              Feature Map (3x3)
            </text>
            {CONVOLVED_OUTPUT_GRID.map((or, orIdx) =>
              or.map((oval, ocIdx) => {
                const ox = outputStartX + ocIdx * (outputCellSize + outputGap);
                const oy = outputStartY + orIdx * (outputCellSize + outputGap);

                // Is this the currently computed pixel?
                const isCurrentOutput = orIdx === row && ocIdx === col;

                return (
                  <g key={`out-${orIdx}-${ocIdx}`} transform={`translate(${ox}, ${oy})`}>
                    <rect
                      width={outputCellSize}
                      height={outputCellSize}
                      rx="4"
                      className={`grid-cell output-cell ${isCurrentOutput ? "active-output-cell" : ""}`}
                    />
                    <text
                      className={`cell-val font-bold font-mono ${isCurrentOutput ? "active-output-text" : ""}`}
                      x={outputCellSize / 2}
                      y={outputCellSize / 2 + 5}
                      textAnchor="middle"
                    >
                      {oval}
                    </text>
                  </g>
                );
              })
            )}
          </g>

          {/* Coordinate Specs */}
          <text className="cnn-coords font-mono" x="275" y="225" textAnchor="middle">
            Stride = 1 | Padding = 0
          </text>
          <text className="cnn-math-spec font-mono text-[10px]" x="275" y="242" textAnchor="middle">
            Active Patch Sum:
          </text>
          <text className="cnn-calc-line font-mono font-semibold" x="275" y="262" textAnchor="middle">
            Sum(Image_Patch × Filter) = {CONVOLVED_OUTPUT_GRID[row][col]}
          </text>
        </svg>
      </div>

      <div className="math-legend mt-4">
        <div className="legend-item">
          <span className="legend-label">How it's calculated:</span>
          <span className="legend-value font-mono">
            Multiply the image's highlighted 3x3 pixel grid element-by-element with the filter weights and sum them. This acts as an edge detector!
          </span>
        </div>
      </div>
    </div>
  );
}
