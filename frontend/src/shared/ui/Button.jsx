const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold  text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;