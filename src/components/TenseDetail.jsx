import { colors } from "../data/colors";
import { Card } from "./Card";
import { SectionLabel } from "./SectionLabel";
import { Bullet } from "./Bullet";

export function TenseDetail({ tense, onBack, showAnswers, toggleAnswer, userAnswers, setUserAnswers }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${colors.cardBorder}`, color: colors.textMuted, padding: "6px 14px", borderRadius: 6, cursor: "pointer", marginBottom: 20, fontSize: 13 }}>← Back to all tenses</button>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <span style={{ fontSize: 40 }}>{tense.emoji}</span>
        <div>
          <div style={{ color: tense.color, fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>{tense.tag}</div>
          <h2 style={{ margin: 0, color: "#fff", fontSize: 28 }}>{tense.name}</h2>
        </div>
      </div>

      {/* WHEN */}
      <Card style={{ marginBottom: 16, borderColor: tense.color }}>
        <SectionLabel color={tense.color}>📌 When to Use It</SectionLabel>
        {tense.when.map((w, i) => (
          <Bullet key={i} color={tense.color}>{w}</Bullet>
        ))}
      </Card>

      {/* FORMULA */}
      <Card style={{ marginBottom: 16, borderColor: tense.color }}>
        <SectionLabel color={tense.color}>🔧 How to Form It</SectionLabel>
        <div style={{ display: "grid", gap: 6 }}>
          {tense.formula.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "6px 10px", background: colors.bg, borderRadius: 6 }}>
              <span style={{ color: colors.textMuted, fontSize: 12, minWidth: 120, flexShrink: 0 }}>{f.label}</span>
              <span style={{ color: tense.color, fontWeight: 600, fontFamily: "monospace", fontSize: 13 }}>{f.form}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* KEYWORDS */}
      <Card style={{ marginBottom: 16 }}>
        <SectionLabel color={tense.color}>🔑 Signal Words & Keywords</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tense.keywords.map((k, i) => (
            <span key={i} style={{ background: `${tense.color}22`, color: tense.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{k}</span>
          ))}
        </div>
      </Card>

      {/* EXAMPLES */}
      <Card style={{ marginBottom: 16 }}>
        <SectionLabel color={tense.color}>💬 5 Simple Examples</SectionLabel>
        {tense.examples.map((ex, i) => (
          <div key={i} style={{ padding: "8px 12px", margin: "4px 0", background: colors.bg, borderRadius: 6, borderLeft: `3px solid ${tense.color}`, color: colors.text, fontSize: 14 }}>
            {ex}
          </div>
        ))}
      </Card>

      {/* MISTAKES */}
      <Card style={{ marginBottom: 16, borderColor: colors.red }}>
        <SectionLabel color={colors.red}>⚠️ Common Mistakes</SectionLabel>
        {tense.mistakes.map((m, i) => (
          <div key={i} style={{ marginBottom: 12, padding: "10px", background: colors.bg, borderRadius: 8 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: colors.red }}>✗</span>
              <span style={{ color: colors.red, textDecoration: "line-through", fontSize: 13 }}>{m.wrong}</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: colors.green }}>✓</span>
              <span style={{ color: colors.green, fontSize: 13 }}>{m.right}</span>
            </div>
            <div style={{ color: colors.textMuted, fontSize: 12, marginLeft: 20 }}>💡 {m.tip}</div>
          </div>
        ))}
      </Card>

      {/* MEMORY TRICK */}
      <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
        <div style={{ color: colors.text, fontSize: 14, lineHeight: 1.7 }}>{tense.trick}</div>
      </Card>

      {/* EXERCISES */}
      <Card style={{ borderColor: tense.color }}>
        <SectionLabel color={tense.color}>✏️ Practice Exercises</SectionLabel>
        {tense.exercises.map((ex, i) => {
          const key = `${tense.id}-ex-${i}`;
          return (
            <div key={i} style={{ marginBottom: 14, padding: "12px", background: colors.bg, borderRadius: 8 }}>
              <div style={{ color: colors.text, fontSize: 14, marginBottom: 8 }}>
                <strong style={{ color: tense.color }}>{i + 1}.</strong> {ex.q}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <button onClick={() => toggleAnswer(key)}
                  style={{ padding: "5px 14px", background: showAnswers[key] ? tense.color : "transparent", color: showAnswers[key] ? "#000" : tense.color, border: `1px solid ${tense.color}`, borderRadius: 5, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                  {showAnswers[key] ? "Hide Answer" : "Show Answer"}
                </button>
                {showAnswers[key] && (
                  <div style={{ color: colors.green, fontSize: 13 }}>
                    <strong>Answer:</strong> {ex.a} — <em style={{ color: colors.textMuted }}>{ex.exp}</em>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
