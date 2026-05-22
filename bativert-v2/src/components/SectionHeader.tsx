type SectionHeaderProps = {
  subtitle: string;
  title: React.ReactNode;
  subtitleColor?: string;
  titleColor?: string;
  className?: string;
};

export default function SectionHeader({
  subtitle,
  title,
  subtitleColor = "text-(--color-primary)",
  titleColor = "text-(--color-on-surface)",
  className = "mb-16",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-4 ${subtitleColor}`}>
        {subtitle}
      </p>
      <h2 className={`serif-heading text-4xl lg:text-6xl max-w-3xl ${titleColor} leading-tight`}>
        {title}
      </h2>
    </div>
  );
}
