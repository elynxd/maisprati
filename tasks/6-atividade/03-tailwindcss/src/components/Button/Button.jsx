export const Button = ({ children, onClick, variant = "solid", disabled = false, ...props }) => {
    const baseClasses = "inline-flex w-full items-center justify-center rounded-lg border border-transparent px-5 py-2 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--link-color)] focus:ring-offset-2";
    
    const variantClasses = {
        solid: disabled 
            ? "bg-[var(--text-secondary)] border-[var(--text-secondary)] text-[var(--bg-primary)] cursor-not-allowed opacity-60 pointer-events-none"
            : "bg-[var(--link-color)] border-[var(--link-color)] text-white hover:bg-[var(--link-hover)] hover:border-[var(--link-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_var(--shadow)]",
        outline: disabled
            ? "border-[var(--text-secondary)] text-[var(--text-secondary)] bg-transparent cursor-not-allowed opacity-60 pointer-events-none"
            : "bg-transparent text-[var(--link-color)] border-[var(--link-color)] hover:bg-[var(--link-color)] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_8px_var(--shadow)]",
        ghost: disabled
            ? "text-[var(--text-secondary)] bg-transparent cursor-not-allowed opacity-60 pointer-events-none"
            : "bg-transparent text-[var(--text-secondary)] border-transparent hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-0.5"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} mb-2`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
