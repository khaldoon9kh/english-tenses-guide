import { colors } from "../data/colors";

export function SectionTitle({ children }) {
  return (
    <h2 style={{ color: "#fff", fontSize: 22, marginBottom: 16, marginTop: 0, borderBottom: `1px solid ${colors.cardBorder}`, paddingBottom: 10 }}>
      {children}
    </h2>
  );
}
