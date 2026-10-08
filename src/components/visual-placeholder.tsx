type VisualPlaceholderProps = {
  label?: string;
  tall?: boolean;
};

export function VisualPlaceholder({ label = "Editorial image placeholder", tall = false }: VisualPlaceholderProps) {
  return (
    <div className={`visual-placeholder${tall ? " visual-placeholder--tall" : ""}`} role="img" aria-label={label}>
      <span className="visual-placeholder__mark" aria-hidden="true">T/S</span>
      <span>{label}</span>
    </div>
  );
}
