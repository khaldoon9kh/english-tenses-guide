import { colors } from "../data/colors";

export function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, padding: 16, ...style }}>
      {children}
    </div>
  );
}
