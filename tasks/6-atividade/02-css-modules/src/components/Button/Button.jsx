import classNames from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, onClick, variant = "solid", disabled = false, ...props }) => {
    return (
        <button
            className={classNames(styles.customButton, {
                [styles[variant]]: variant,
                [styles.disabled]: disabled,
            })}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
