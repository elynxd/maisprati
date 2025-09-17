export const Button = ({ children, onClick, variant = "solid", disabled = false, ...props }) => {
    return (
        <button
            className={`custom-button custom-button--${variant}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
