import styles from './Button.module.css';

/**
 * @param {{ 
 *   children: React.ReactNode, 
 *   variant?: 'primary'|'secondary'|'ghost',
 *   href?: string,
 *   external?: boolean,
 *   download?: boolean,
 *   onClick?: Function,
 *   className?: string,
 *   disabled?: boolean,
 *   as?: string
 * }} props
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  download = false,
  onClick,
  className = '',
  disabled = false,
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} mono ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download || undefined}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

