import { TENSES } from "../../data/tenses";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { TenseDetail } from "../TenseDetail";

export function TensesTab({ activeTense, setActiveTense, showAnswers, toggleAnswer, userAnswers, setUserAnswers }) {
  return (
    <div>
      {!activeTense ? (
        <>
          <SectionTitle>📚 Learn Each Tense</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
            {TENSES.map(t => (
              <Card key={t.id} style={{ borderColor: t.color, cursor: "pointer" }} onClick={() => setActiveTense(t.id)}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>{t.emoji}</span>
                  <div>
                    <div style={{ color: t.color, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>{t.tag}</div>
                    <div style={{ color: "#e8eaf0", fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                  </div>
                </div>
                <div style={{ marginTop: 10, color: t.color, fontSize: 12, fontWeight: 600 }}>Open lesson →</div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <TenseDetail tense={TENSES.find(t => t.id === activeTense)} onBack={() => setActiveTense(null)} showAnswers={showAnswers} toggleAnswer={toggleAnswer} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
      )}
    </div>
  );
}
