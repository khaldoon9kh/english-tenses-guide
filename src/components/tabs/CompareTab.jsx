import { colors } from "../../data/colors";
import { COMPARISONS } from "../../data/comparisons";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { ComparisonDetail } from "../ComparisonDetail";

export function CompareTab({ activeComparison, setActiveComparison, showAnswers, toggleAnswer }) {
  return (
    <div>
      {!activeComparison ? (
        <>
          <SectionTitle>⚔️ Compare Confusing Tenses</SectionTitle>
          <p style={{ color: colors.textMuted, marginBottom: 20 }}>These pairs are the most common sources of mistakes. Master these comparisons and your English will jump to a higher level.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {COMPARISONS.map(c => (
              <Card key={c.id} style={{ borderColor: c.color, cursor: "pointer" }} onClick={() => setActiveComparison(c.id)}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.emoji}</div>
                <div style={{ color: c.color, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                <div style={{ color: colors.textMuted, fontSize: 12 }}>{c.left.name} · vs · {c.right.name}</div>
                <div style={{ marginTop: 10, color: c.color, fontSize: 12, fontWeight: 600 }}>Study comparison →</div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <ComparisonDetail comparison={COMPARISONS.find(c => c.id === activeComparison)} onBack={() => setActiveComparison(null)} showAnswers={showAnswers} toggleAnswer={toggleAnswer} />
      )}
    </div>
  );
}
