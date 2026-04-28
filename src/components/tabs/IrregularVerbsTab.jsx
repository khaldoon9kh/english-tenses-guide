import { useState } from "react";
import { colors } from "../../data/colors";
import { IRREGULAR_VERBS } from "../../data/irregularVerbs";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AVAILABLE_LETTERS = new Set(
  IRREGULAR_VERBS.map(([inf]) => inf[0].toUpperCase())
);

export function IrregularVerbsTab() {
  const [activeLetter, setActiveLetter] = useState(null);

  const filtered = activeLetter
    ? IRREGULAR_VERBS.filter(([inf]) => inf[0].toUpperCase() === activeLetter)
    : IRREGULAR_VERBS;

  return (
    <div>
      <SectionTitle>📋 Irregular Verbs Reference</SectionTitle>
      <Card style={{ marginBottom: 16, borderColor: colors.orange }}>
        <p style={{ color: colors.text, margin: 0, lineHeight: 1.7 }}>
          🧠 <strong style={{ color: colors.orange }}>How to learn them:</strong> Don't try to memorize all at once! Learn 10 per week. Group them by pattern: verbs where all 3 forms are the same (cut/cut/cut), verbs where 2 are the same (have/had/had), and completely irregular ones (go/went/gone). Say them OUT LOUD in sets of three!
        </p>
      </Card>

      {/* A–Z filter bar */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginBottom: 16,
        padding: "12px 14px",
        background: colors.card,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: 10,
      }}>
        <button
          onClick={() => setActiveLetter(null)}
          style={{
            padding: "5px 10px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
            background: activeLetter === null ? colors.accent : colors.cardBorder,
            color: activeLetter === null ? colors.bg : colors.textMuted,
            transition: "background 0.15s, color 0.15s",
          }}
        >
          ALL
        </button>
        {ALPHABET.map(letter => {
          const available = AVAILABLE_LETTERS.has(letter);
          const isActive = activeLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => available && setActiveLetter(isActive ? null : letter)}
              disabled={!available}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: "none",
                cursor: available ? "pointer" : "default",
                fontWeight: 700,
                fontSize: 13,
                background: isActive ? colors.accent : available ? colors.cardBorder : "transparent",
                color: isActive ? colors.bg : available ? colors.text : colors.textDim,
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: colors.cardBorder, padding: "10px 16px" }}>
          {["INFINITIVE (Base)", "PAST SIMPLE (V2)", "PAST PARTICIPLE (V3)"].map(h => (
            <div key={h} style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {filtered.length > 0 ? (
          filtered.map(([inf, past, pp], i) => (
            <div key={inf} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "8px 16px", background: i % 2 === 0 ? colors.card : colors.bg, borderBottom: `1px solid ${colors.cardBorder}20` }}>
              <div style={{ color: colors.blue, fontWeight: 600 }}>{inf}</div>
              <div style={{ color: colors.orange }}>{past}</div>
              <div style={{ color: colors.green }}>{pp}</div>
            </div>
          ))
        ) : (
          <div style={{ padding: "24px 16px", color: colors.textMuted, textAlign: "center" }}>
            No verbs found for "{activeLetter}"
          </div>
        )}
        <div style={{ padding: "10px 16px", background: colors.cardBorder, color: colors.textMuted, fontSize: 12 }}>
          {activeLetter
            ? `Showing ${filtered.length} verb${filtered.length !== 1 ? "s" : ""} starting with "${activeLetter}"`
            : "+ 80 more verbs in your HANDOUT__Irregular_Verbs reference sheet from class"}
        </div>
      </div>
    </div>
  );
}
