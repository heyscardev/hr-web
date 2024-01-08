interface Props {
  title?: string;
  subtile?: string;
  className?: string;
}
export const SectionTitle = ({ title, subtile, className }: Props) => {
  return (
    <div className={className}>
      {title && <h1 className={`hr-title `}>{title}</h1>}
      {subtile && (
        <h2 className="hr-subtitle animate-fade-down animate-delay-300">
          {subtile}
        </h2>
      )}
    </div>
  );
};
