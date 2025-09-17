import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  margin-bottom: 0.5rem;

  ${props => props.variant === 'solid' && `
    background-color: var(--link-color);
    color: white;
    border-color: var(--link-color);

    &:hover {
      background-color: var(--link-hover);
      border-color: var(--link-hover);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px var(--shadow);
    }
  `}

  ${props => props.variant === 'outline' && `
    background-color: transparent;
    color: var(--link-color);
    border-color: var(--link-color);

    &:hover {
      background-color: var(--link-color);
      color: white;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px var(--shadow);
    }
  `}

  ${props => props.variant === 'ghost' && `
    background-color: transparent;
    color: var(--text-secondary);
    border-color: transparent;

    &:hover {
      background-color: var(--bg-secondary);
      color: var(--text-primary);
      transform: translateY(-1px);
    }
  `}

  &:focus,
  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }

  ${props => props.disabled && `
    opacity: 0.6;
    cursor: not-allowed !important;
    pointer-events: none;

    &:hover {
      transform: none !important;
      box-shadow: none !important;
    }

    ${props.variant === 'solid' ? `
      background-color: var(--text-secondary);
      border-color: var(--text-secondary);
      color: var(--bg-primary);
    ` : ''}

    ${props.variant === 'outline' ? `
      border-color: var(--text-secondary);
      color: var(--text-secondary);
      background-color: transparent;
    ` : ''}

    ${props.variant === 'ghost' ? `
      color: var(--text-secondary);
      background-color: transparent;
    ` : ''}
  `}
`;

export const Button = ({ children, onClick, variant = "solid", disabled = false, ...props }) => {
    return (
        <StyledButton
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
};
