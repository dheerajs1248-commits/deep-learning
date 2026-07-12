import React from "react";
import { DL_SECTIONS, SectionContent } from "../data/dlContent";
import { BookOpen, Brain, GitFork, Grid, Layers, HelpCircle, Activity } from "lucide-react";

interface LayoutProps {
  activeSectionId: string;
  onSectionSelect: (id: string) => void;
  children: React.ReactNode;
}

export function Layout({ activeSectionId, onSectionSelect, children }: LayoutProps) {
  const getSectionIcon = (id: string) => {
    switch (id) {
      case "home":
        return <BookOpen size={18} />;
      case "perceptron":
        return <Brain size={18} />;
      case "learning":
        return <GitFork size={18} />;
      case "cnn":
        return <Grid size={18} />;
      case "rnn":
        return <Activity size={18} />;
      case "summary":
        return <Layers size={18} />;
      default:
        return <HelpCircle size={18} />;
    }
  };

  const activeIndex = DL_SECTIONS.findIndex((s) => s.id === activeSectionId);
  const progressPercent = ((activeIndex + 1) / DL_SECTIONS.length) * 100;

  return (
    <div className="app-layout" id="app-root-layout">
      <aside className="app-sidebar" id="app-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo-glow">
            <Brain size={24} className="logo-icon animate-float" />
          </div>
          <div>
            <h1 className="brand-title font-sans">NeuroCraft</h1>
            <span className="brand-tagline">Deep Learning Visualizer</span>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-meta">
            <span className="progress-label font-mono">LEARNING GUIDE PROGRESS</span>
            <span className="progress-val font-mono">{Math.round(progressPercent)}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {DL_SECTIONS.map((section, idx) => {
              const isActive = section.id === activeSectionId;
              return (
                <li key={section.id} className="nav-item">
                  <button
                    onClick={() => onSectionSelect(section.id)}
                    className={`nav-button font-sans ${isActive ? "nav-button-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    id={`nav-btn-${section.id}`}
                  >
                    <span className="nav-icon">{getSectionIcon(section.id)}</span>
                    <div className="nav-label-group">
                      <span className="nav-index font-mono">0{idx + 1}.</span>
                      <span className="nav-text font-medium">{section.title}</span>
                    </div>
                    {isActive && <div className="nav-active-pip"></div>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-4 pt-4 border-t border-color">
          <div className="p-4 bg-[rgba(45,212,191,0.04)] rounded-lg border border-[rgba(45,212,191,0.1)]">
            <p className="text-[10px] text-teal-400 uppercase font-bold mb-1 tracking-wider font-mono">Engine Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
              <span className="text-[11px] text-slate-400">Visualizer Active</span>
            </div>
          </div>
          <div className="sidebar-footer font-mono text-[10px] text-muted text-center">
            <p>© 2026 NeuroCraft</p>
            <p>Created with Pure Mathematics</p>
          </div>
        </div>
      </aside>

      <main className="app-main" id="app-main-content">
        <header className="mobile-header" id="mobile-header">
          <div className="mobile-header-brand">
            <Brain size={20} className="logo-icon-mobile" />
            <span className="mobile-brand-title">NeuroCraft</span>
          </div>

          <div className="mobile-nav-scroller">
            {DL_SECTIONS.map((section, idx) => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionSelect(section.id)}
                  className={`mobile-nav-btn font-sans ${isActive ? "mobile-nav-btn-active" : ""}`}
                >
                  0{idx + 1}. {section.id === "home" ? "Intro" : section.title.split(":")[0].split(" (")[0]}
                </button>
              );
            })}
          </div>
        </header>

        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  );
}
