import { colors } from "../data/colors";

export function SectionLabel({ children, color }) {
  return (
    <div style={{ color: color || colors.textMuted, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
      {children}
    </div>
  );
}
