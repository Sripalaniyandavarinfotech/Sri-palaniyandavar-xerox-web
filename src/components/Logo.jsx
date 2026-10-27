// Icons come only from the Dashboard Icons catalog (dashboardicons.com), saved in public/icons.
// They sit next to text labels, so they're decorative and carry an empty alt.
export default function Logo({ name, size = 20, className = "" }) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={`logo ${className}`}
      decoding="async"
    />
  );
}
