import { colors } from "../data/colors";
import { Card } from "./Card";
import { SectionLabel } from "./SectionLabel";

export function ComparisonDetail({ comparison, onBack, showAnswers, toggleAnswer }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${colors.cardBorder}`, color: colors.textMuted, padding: "6px 14px", borderRadius: 6, cursor: "pointer", marginBottom: 20, fontSize: 13 }}>← Back to comparisons</button>

      <h2 style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>{comparison.emoji} {comparison.title}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[comparison.left, comparison.right].map((side, i) => (
          <div key={i} style={{ background: colors.card, border: `1px solid ${comparison.color}`, borderRadius: 10, padding: 16 }}>
            <div style={{ color: comparison.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{side.name}</div>
            <div style={{ color: colors.accent, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>SIGNAL: {side.signal}</div>
            <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 10, lineHeight: 1.5 }}>{side.rule}</div>
            {side.examples.map((ex, j) => (
              <div key={j} style={{ padding: "6px 10px", margin: "3px 0", background: colors.bg, borderRadius: 5, borderLeft: `2px solid ${comparison.color}`, color: colors.text, fontSize: 12 }}>
                {ex}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
        <div style={{ color: colors.text, fontSize: 14, lineHeight: 1.7 }}>{comparison.tip}</div>
      </Card>

      <Card style={{ borderColor: comparison.color }}>
        <SectionLabel color={comparison.color}>✏️ Practice</SectionLabel>
        {comparison.exercises.map((ex, i) => {
          const key = `${comparison.id}-${i}`;
          return (
            <div key={i} style={{ marginBottom: 12, padding: "12px", background: colors.bg, borderRadius: 8 }}>
              <div style={{ color: colors.text, fontSize: 14, marginBottom: 8 }}>
                <strong style={{ color: comparison.color }}>{i + 1}.</strong> {ex.q}
              </div>
              <button onClick={() => toggleAnswer(key)}
                style={{ padding: "5px 14px", background: showAnswers[key] ? comparison.color : "transparent", color: showAnswers[key] ? "#000" : comparison.color, border: `1px solid ${comparison.color}`, borderRadius: 5, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                {showAnswers[key] ? "Hide Answer" : "Show Answer"}
              </button>
              {showAnswers[key] && (
                <div style={{ marginTop: 6, color: colors.green, fontSize: 13 }}>
                  <strong>Answer:</strong> {ex.a} — <em style={{ color: colors.textMuted }}>{ex.exp}</em>
                </div>
              )}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
