import { colors } from "../../data/colors";
import { IRREGULAR_VERBS } from "../../data/irregularVerbs";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

export function IrregularVerbsTab() {
  return (
    <div>
      <SectionTitle>📋 Irregular Verbs Reference</SectionTitle>
      <Card style={{ marginBottom: 16, borderColor: colors.orange }}>
        <p style={{ color: colors.text, margin: 0, lineHeight: 1.7 }}>
          🧠 <strong style={{ color: colors.orange }}>How to learn them:</strong> Don't try to memorize all at once! Learn 10 per week. Group them by pattern: verbs where all 3 forms are the same (cut/cut/cut), verbs where 2 are the same (have/had/had), and completely irregular ones (go/went/gone). Say them OUT LOUD in sets of three!
        </p>
      </Card>
      <div style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: colors.cardBorder, padding: "10px 16px" }}>
          {["INFINITIVE (Base)", "PAST SIMPLE (V2)", "PAST PARTICIPLE (V3)"].map(h => (
            <div key={h} style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {IRREGULAR_VERBS.map(([inf, past, pp], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "8px 16px", background: i % 2 === 0 ? colors.card : colors.bg, borderBottom: `1px solid ${colors.cardBorder}20` }}>
            <div style={{ color: colors.blue, fontWeight: 600 }}>{inf}</div>
            <div style={{ color: colors.orange }}>{past}</div>
            <div style={{ color: colors.green }}>{pp}</div>
          </div>
        ))}
        <div style={{ padding: "10px 16px", background: colors.cardBorder, color: colors.textMuted, fontSize: 12 }}>
          + 80 more verbs in your HANDOUT__Irregular_Verbs reference sheet from class
        </div>
      </div>
    </div>
  );
}
