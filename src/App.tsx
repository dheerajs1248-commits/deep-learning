import React, { useState } from "react";
import { DL_SECTIONS, SectionContent } from "./data/dlContent";
import { Layout } from "./components/Layout";
import { PerceptronDiagram } from "./components/PerceptronDiagram";
import { ForwardPassDiagram } from "./components/ForwardPassDiagram";
import { BackpropagationDiagram } from "./components/BackpropagationDiagram";
import { CnnDiagram } from "./components/CnnDiagram";
import { RnnDiagram } from "./components/RnnDiagram";
import { ArrowLeft, ArrowRight, BookOpen, Layers, Settings, Award } from "lucide-react";

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>("home");

  // Find the active section from our structured data file
  const activeSection = DL_SECTIONS.find((s) => s.id === activeSectionId) || DL_SECTIONS[0];
  const activeIndex = DL_SECTIONS.findIndex((s) => s.id === activeSectionId);

  // Chronological navigation handlers
  const handleNextSection = () => {
    if (activeIndex < DL_SECTIONS.length - 1) {
      setActiveSectionId(DL_SECTIONS[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevSection = () => {
    if (activeIndex > 0) {
      setActiveSectionId(DL_SECTIONS[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helper to render representation abstraction levels for Home
  const renderHomeIntroGraphic = () => {
    return (
      <div className="diagram-container" id="representation-learning-intro">
        <h3 className="diagram-title">Hierarchical Abstraction</h3>
        <p className="diagram-subtitle">
          Watch raw pixels abstract into edges, parts, and objects as signals traverse deeper.
        </p>
        <div className="svg-wrapper">
          <svg viewBox="0 0 500 240" className="interactive-svg" id="intro-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Background connecting guide lines */}
            <line x1="60" y1="120" x2="160" y2="120" className="intro-line-link" />
            <line x1="160" y1="120" x2="280" y2="120" className="intro-line-link" />
            <line x1="280" y1="120" x2="420" y2="120" className="intro-line-link" />

            {/* Level 1: Raw Input Pixels */}
            <g transform="translate(60, 120)" className="intro-level-group level-1">
              <circle r="36" className="intro-level-bg" />
              <g className="pixel-grid-anim">
                <rect x="-15" y="-15" width="8" height="8" className="pixel-dot" />
                <rect x="-5" y="-15" width="8" height="8" className="pixel-dot active" />
                <rect x="5" y="-15" width="8" height="8" className="pixel-dot" />
                <rect x="-15" y="-5" width="8" height="8" className="pixel-dot active" />
                <rect x="-5" y="-5" width="8" height="8" className="pixel-dot active" />
                <rect x="5" y="-5" width="8" height="8" className="pixel-dot" />
                <rect x="-15" y="5" width="8" height="8" className="pixel-dot" />
                <rect x="-5" y="5" width="8" height="8" className="pixel-dot" />
                <rect x="5" y="5" width="8" height="8" className="pixel-dot active" />
              </g>
              <text className="intro-level-lbl font-mono" y="52" textAnchor="middle">LEVEL 1</text>
              <text className="intro-level-name font-bold" y="66" textAnchor="middle">Raw Pixels</text>
            </g>

            {/* Level 2: Edge Detectors */}
            <g transform="translate(160, 120)" className="intro-level-group level-2">
              <circle r="36" className="intro-level-bg" />
              <g className="edges-anim" strokeWidth="3" strokeLinecap="round">
                <line x1="-12" y1="-12" x2="12" y2="12" className="edge-line-1" />
                <line x1="12" y1="-12" x2="-12" y2="12" className="edge-line-2" />
                <line x1="-15" y1="0" x2="15" y2="0" className="edge-line-3" />
              </g>
              <text className="intro-level-lbl font-mono" y="52" textAnchor="middle">LEVEL 2</text>
              <text className="intro-level-name font-bold" y="66" textAnchor="middle">Edges / Textures</text>
            </g>

            {/* Level 3: Part Assemblies */}
            <g transform="translate(280, 120)" className="intro-level-group level-3">
              <circle r="36" className="intro-level-bg" />
              <g className="parts-anim" strokeWidth="2.5" fill="none">
                <path d="M-15,-10 Q0,-25 15,-10" className="part-arc-1" />
                <circle cx="0" cy="5" r="10" className="part-circle" />
                <rect x="-8" y="-4" width="16" height="8" rx="2" className="part-box" />
              </g>
              <text className="intro-level-lbl font-mono" y="52" textAnchor="middle">LEVEL 3</text>
              <text className="intro-level-name font-bold" y="66" textAnchor="middle">Object Parts</text>
            </g>

            {/* Level 4: Complete Object Classification */}
            <g transform="translate(420, 120)" className="intro-level-group level-4">
              <circle r="36" className="intro-level-bg" />
              <g className="object-anim">
                <path d="M-14,8 L-6,-12 L6,-12 L14,8 Z" className="car-body" fill="none" strokeWidth="2.5" />
                <circle cx="-7" cy="12" r="5" className="car-wheel-1" />
                <circle cx="7" cy="12" r="5" className="car-wheel-2" />
              </g>
              <text className="intro-level-lbl font-mono" y="52" textAnchor="middle">LEVEL 4</text>
              <text className="intro-level-name font-bold" y="66" textAnchor="middle">Identified Class</text>
            </g>

            {/* Continuous travelling scanning line */}
            <circle r="4" className="scanner-bead" />
          </svg>
        </div>
        <div className="math-legend mt-2">
          <div className="legend-item text-center">
            <span className="legend-value font-mono">
              Raw Input ➔ Pixel Intensity ➔ Gabor Edges ➔ Node Combinations ➔ Label Prediction
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Helper to render architecture convergence visual for Recap
  const renderSummaryGraphic = () => {
    return (
      <div className="diagram-container" id="recap-flow">
        <h3 className="diagram-title">The Unified Deep Learning Map</h3>
        <p className="diagram-subtitle">
          How different neural styles synthesize under a single mathematical framework.
        </p>
        <div className="svg-wrapper">
          <svg viewBox="0 0 500 240" className="interactive-svg" id="summary-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Highways */}
            <path d="M 60,60 C 150,60 180,120 250,120" className="recap-highway highway-1" />
            <path d="M 60,120 C 150,120 180,120 250,120" className="recap-highway highway-2" />
            <path d="M 60,180 C 150,180 180,120 250,120" className="recap-highway highway-3" />
            <path d="M 250,120 L 420,120" className="recap-highway highway-4" />

            {/* Neural nodes in recap map */}
            <g transform="translate(60, 60)" className="recap-node-group">
              <rect x="-45" y="-15" width="90" height="30" rx="6" className="recap-node-rect" />
              <text className="recap-node-text font-bold" dy="4" textAnchor="middle">Feedforward</text>
            </g>

            <g transform="translate(60, 120)" className="recap-node-group">
              <rect x="-45" y="-15" width="90" height="30" rx="6" className="recap-node-rect cnn-tag-rect" />
              <text className="recap-node-text font-bold" dy="4" textAnchor="middle">Spatial CNN</text>
            </g>

            <g transform="translate(60, 180)" className="recap-node-group">
              <rect x="-45" y="-15" width="90" height="30" rx="6" className="recap-node-rect rnn-tag-rect" />
              <text className="recap-node-text font-bold" dy="4" textAnchor="middle">Temporal LSTM</text>
            </g>

            <g transform="translate(250, 120)" className="recap-center-group">
              <circle r="32" className="recap-center-circle" />
              <text className="recap-center-text font-bold" dy="-4" textAnchor="middle">Loss</text>
              <text className="recap-center-sub" dy="12" textAnchor="middle">Grads</text>
            </g>

            <g transform="translate(420, 120)" className="recap-end-group">
              <circle r="32" className="recap-end-circle" />
              <text className="recap-end-text font-bold" dy="-4" textAnchor="middle">Backprop</text>
              <text className="recap-end-sub" dy="12" textAnchor="middle">Optimize</text>
            </g>

            {/* Pulse beads along highways */}
            <circle r="5" className="recap-bead recap-bead-1" />
            <circle r="5" className="recap-bead recap-bead-2" />
            <circle r="5" className="recap-bead recap-bead-3" />
            <circle r="5" className="recap-bead recap-bead-4" />
          </svg>
        </div>
        <div className="math-legend mt-2">
          <div className="legend-item text-center">
            <span className="legend-value font-mono">
              Diverse Inputs ➔ Specialized Hidden Encoders ➔ Loss Evaluation ➔ Backward Corrections
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Switcher to output the correct diagram based on active section id
  const renderSectionVisualizer = () => {
    switch (activeSectionId) {
      case "home":
        return renderHomeIntroGraphic();
      case "perceptron":
        return <PerceptronDiagram />;
      case "learning":
        return (
          <div className="learning-combined-wrapper">
            <ForwardPassDiagram />
            <div className="combined-divider"></div>
            <BackpropagationDiagram />
          </div>
        );
      case "cnn":
        return <CnnDiagram />;
      case "rnn":
        return <RnnDiagram />;
      case "summary":
        return renderSummaryGraphic();
      default:
        return null;
    }
  };

  return (
    <Layout activeSectionId={activeSectionId} onSectionSelect={setActiveSectionId}>
      <article className="learning-section-card" id={`section-card-${activeSectionId}`}>
        {/* Header Metadata */}
        <header className="section-header">
          <span className="concept-badge font-mono">{activeSection.conceptName}</span>
          <h2 className="section-title font-sans">{activeSection.title}</h2>
          <p className="section-subtitle">{activeSection.subtitle}</p>
        </header>

        {/* Two Column Layout: Text Details & Continuous Loop Visualizer */}
        <div className="section-body">
          {/* Left Column: Explanatory Content */}
          <div className="text-column">
            {activeSection.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="explanation-paragraph">
                {para}
              </p>
            ))}

            {/* Monospace Formula Card if available */}
            {activeSection.formula && (
              <div className="formula-card font-mono" id={`formula-${activeSectionId}`}>
                <span className="formula-heading font-sans">MATHEMATICAL FORMULATION</span>
                <div className="formula-body">
                  <code>{activeSection.formula}</code>
                </div>
              </div>
            )}

            {/* Key Term Definitions */}
            <div className="key-concepts-section">
              <h4 className="concepts-header font-sans">Key Terminology</h4>
              <div className="concepts-grid">
                {activeSection.keyConcepts.map((concept, cIdx) => (
                  <div key={cIdx} className="concept-card">
                    <span className="concept-card-label font-sans">{concept.label}</span>
                    <p className="concept-card-desc">{concept.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visualization Panel (glowing borders) */}
          <div className="visualizer-column">
            <div className="visualizer-frame">
              <div className="visualizer-status font-mono">
                <span className="status-dot animate-ping"></span>
                <span className="status-text text-xs font-semibold">LIVE CONTINUOUS SIMULATION</span>
              </div>
              <div className="visual-content">
                {renderSectionVisualizer()}
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation Footer */}
        <footer className="section-nav-footer">
          <button
            onClick={handlePrevSection}
            disabled={activeIndex === 0}
            className="prev-btn font-sans"
            id="prev-sec-btn"
          >
            <ArrowLeft size={16} />
            <span>Previous: {activeIndex > 0 ? DL_SECTIONS[activeIndex - 1].title.split(":")[0] : "Intro"}</span>
          </button>

          <button
            onClick={handleNextSection}
            disabled={activeIndex === DL_SECTIONS.length - 1}
            className="next-btn font-sans"
            id="next-sec-btn"
          >
            <span>Next: {activeIndex < DL_SECTIONS.length - 1 ? DL_SECTIONS[activeIndex + 1].title.split(":")[0] : "Recap"}</span>
            <ArrowRight size={16} />
          </button>
        </footer>
      </article>
    </Layout>
  );
}
