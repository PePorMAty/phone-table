import { HTMLAttributes, RefObject } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  additionalClassName?: string;
  btnRef?: RefObject<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button = ({
  isActive,
  additionalClassName,
  btnRef,
  children,
  ...rest
}: ButtonProps) => {
  const createClassName = () => {
    const className = `${additionalClassName ?? ''} ${isActive ? styles.active : ''}`;
    return className.trim() || undefined;
  };

  return (
    <button ref={btnRef} className={createClassName()} {...rest}>
      {Boolean(children) && <span>{children}</span>}
    </button>
  );
};
