import { colors } from "../../data/colors";
import { STUDY_PLAN } from "../../data/studyPlan";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

export function StudyPlanTab() {
  return (
    <div>
      <SectionTitle>📆 7-Day Study Plan</SectionTitle>
      <Card style={{ marginBottom: 20, borderColor: colors.accent }}>
        <p style={{ color: colors.text, margin: 0, lineHeight: 1.7 }}>
          🎯 <strong style={{ color: colors.accent }}>How to use this plan:</strong> Spend about 45–60 minutes per day. Do the activities in order. Write the homework exercises in a notebook — writing helps you remember. Don't skip to the next day until you feel comfortable with the current one.
        </p>
      </Card>
      {STUDY_PLAN.map((day, i) => (
        <Card key={i} style={{ marginBottom: 16, borderColor: i === 6 ? colors.accent : colors.cardBorder }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ background: i === 6 ? colors.accent : colors.cardBorder, color: i === 6 ? "#000" : colors.textMuted, borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
              {day.day}
            </div>
            <div>
              <div style={{ color: i === 6 ? colors.accent : colors.text, fontWeight: 700, fontSize: 16 }}>{day.emoji} {day.title}</div>
              <div style={{ color: colors.textMuted, fontSize: 12 }}>Focus: {day.focus}</div>
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ color: colors.textMuted, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>Today's Activities</div>
            {day.activities.map((a, j) => (
              <div key={j} style={{ display: "flex", gap: 8, marginBottom: 4, alignItems: "flex-start" }}>
                <span style={{ color: colors.accent, marginTop: 2 }}>✓</span>
                <span style={{ color: colors.text, fontSize: 13 }}>{a}</span>
              </div>
            ))}
          </div>
          <div style={{ background: `${colors.accentSoft}`, border: `1px solid ${colors.accentSoft2}`, borderRadius: 8, padding: 12 }}>
            <div style={{ color: colors.accent, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>✍️ HOMEWORK</div>
            <div style={{ color: colors.text, fontSize: 13 }}>{day.homework}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
