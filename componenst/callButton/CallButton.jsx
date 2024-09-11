export default function CallButton({ children }) {
  return (
    <div className={styles}>
      <a href="tel:+33 977 217 620">{children}</a>
    </div>
  );
}
