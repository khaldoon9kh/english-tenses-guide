import { colors } from "../../data/colors";
import { TENSES } from "../../data/tenses";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

export function RoadmapTab({ setActiveTab, setActiveTense, setActiveComparison }) {
  return (
    <div>
      <SectionTitle>🗺️ Your Learning Roadmap</SectionTitle>
      <Card style={{ marginBottom: 24, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
        <h3 style={{ color: colors.accent, margin: "0 0 12px", fontSize: 16 }}>🎯 The Big Idea: What Is a Tense?</h3>
        <p style={{ color: colors.text, lineHeight: 1.7, margin: "0 0 12px" }}>
          A tense tells you <strong style={{ color: colors.accent }}>WHEN</strong> something happens. Think of time as a line: left is the past, middle is now, right is the future. Every tense places an action somewhere on this line — and tells you whether it's finished, ongoing, or connected to another moment.
        </p>
        <p style={{ color: colors.text, lineHeight: 1.7, margin: 0 }}>
          <strong style={{ color: colors.accent }}>Good news:</strong> You don't need to learn all tenses at once. Follow this guide level by level — each tense builds on the previous one.
        </p>
      </Card>

      {/* Timeline visual */}
      <div style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, padding: 20, marginBottom: 24, overflowX: "auto" }}>
        <h3 style={{ color: colors.textMuted, fontSize: 12, letterSpacing: 2, margin: "0 0 16px", textTransform: "uppercase" }}>The Tense Timeline</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 500 }}>
          {[
            { label: "Past Perfect", sub: "had done", color: colors.red, pos: "far past" },
            { label: "Past Simple", sub: "did", color: colors.orange, pos: "past" },
            { label: "Past Continuous", sub: "was doing", color: colors.purple, pos: "past ongoing" },
            { label: "Present", sub: "now", color: colors.accent, pos: "NOW", center: true },
            { label: "Present Simple", sub: "do", color: colors.blue, pos: "routine" },
            { label: "Present Continuous", sub: "am doing", color: colors.green, pos: "now" },
            { label: "Present Perfect", sub: "have done", color: colors.teal, pos: "past→now" },
            { label: "Future", sub: "will / going to", color: colors.accent, pos: "future" },
          ].map((item, i) => (
            <div key={i} style={{ flex: item.center ? 0 : 1, minWidth: item.center ? 40 : 60, textAlign: "center" }}>
              {item.center ? (
                <div style={{ width: 3, height: 60, background: colors.accent, margin: "0 auto", borderRadius: 3 }} />
              ) : (
                <div style={{ padding: "4px 2px" }}>
                  <div style={{ fontSize: 9, color: item.color, fontWeight: 700, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 8, color: colors.textMuted }}>{item.sub}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ height: 3, background: `linear-gradient(to right, ${colors.red}, ${colors.orange}, ${colors.blue}, ${colors.accent}, ${colors.green}, ${colors.teal})`, borderRadius: 3, marginTop: 4 }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <span style={{ color: colors.textDim, fontSize: 10 }}>◀ FAR PAST</span>
          <span style={{ color: colors.accent, fontSize: 10 }}>▲ NOW</span>
          <span style={{ color: colors.textDim, fontSize: 10 }}>FUTURE ▶</span>
        </div>
      </div>

      {/* Tense cards on roadmap */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
        {TENSES.map(t => (
          <Card key={t.id} style={{ borderColor: t.color, cursor: "pointer", transition: "transform 0.15s" }}
            onClick={() => { setActiveTab("tenses"); setActiveTense(t.id); }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{t.emoji}</span>
              <div>
                <div style={{ color: t.color, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 2 }}>{t.tag}</div>
                <div style={{ color: colors.text, fontWeight: 700, fontSize: 15 }}>{t.name}</div>
              </div>
            </div>
            <div style={{ color: colors.textMuted, fontSize: 12 }}>{t.when[0]}</div>
            <div style={{ marginTop: 8, color: t.color, fontSize: 11, fontWeight: 600 }}>Study this tense →</div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 24, borderColor: colors.purple }}>
        <h3 style={{ color: colors.purple, margin: "0 0 12px" }}>💡 Quick Reference: Which Tense Do I Use?</h3>
        {[
          ["It's my routine / I do it regularly", "Present Simple 🔄"],
          ["It happened in the past and it's finished", "Past Simple 📅"],
          ["It's happening right now / It's temporary", "Present Continuous ▶️"],
          ["Something was in progress when something else interrupted", "Past Continuous ⏸️"],
          ["Past action still connected to or relevant now", "Present Perfect 🔗"],
          ["Action A happened before Action B in the past", "Past Perfect ⬅️"],
          ["I just decided / It's my opinion about the future", "Future with WILL 🔮"],
          ["I planned this already / I see evidence it will happen", "Future with GOING TO 🔮"],
        ].map(([situation, tense], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < 7 ? `1px solid ${colors.cardBorder}` : "none" }}>
            <span style={{ color: colors.text, fontSize: 13 }}>{situation}</span>
            <span style={{ color: colors.purple, fontWeight: 700, fontSize: 12, textAlign: "right", minWidth: 160 }}>{tense}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
