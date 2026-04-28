import { colors } from "../data/colors";

export function Bullet({ children, color }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
      <span style={{ color: color, marginTop: 2 }}>▸</span>
      <span style={{ color: colors.text, fontSize: 13, lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}
