export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
