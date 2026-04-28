import { colors } from "../data/colors";

export function Header({ activeTab, setActiveTab, onTabChange }) {
  const tabs = [
    { id: "roadmap", label: "📍 Roadmap", short: "Roadmap" },
    { id: "tenses", label: "📚 Tenses", short: "Tenses" },
    { id: "compare", label: "⚔️ Compare", short: "Compare" },
    { id: "irregular", label: "📋 Irregular Verbs", short: "Verbs" },
    { id: "plan", label: "📆 7-Day Plan", short: "Plan" },
  ];

  return (
    <div style={{ background: `linear-gradient(135deg, #0f1117 0%, #1a1f2e 50%, #0f1117 100%)`, borderBottom: `2px solid ${colors.accent}`, padding: "24px 20px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 4 }}>
          <span style={{ background: colors.accent, color: "#000", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 3, fontFamily: "monospace", letterSpacing: 2 }}>RIGHT2EDUCATION · A2+/B1</span>
        </div>
        <h1 style={{ margin: "8px 0 4px", fontSize: "clamp(22px, 5vw, 38px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
          English Tenses<br />
          <span style={{ color: colors.accent }}>Master Guide</span>
        </h1>
        <p style={{ margin: "0 0 20px", color: colors.textMuted, fontSize: 14 }}>
          Built from your class materials · Elle & Mina · Classes 1–3
        </p>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 2, overflowX: "auto", paddingBottom: 0 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => {
              setActiveTab(tab.id);
              onTabChange();
            }}
              style={{ padding: "10px 16px", background: activeTab === tab.id ? colors.accent : "transparent", color: activeTab === tab.id ? "#000" : colors.textMuted, border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, borderRadius: "6px 6px 0 0", whiteSpace: "nowrap", transition: "all 0.2s" }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
