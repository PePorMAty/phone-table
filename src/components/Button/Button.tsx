import { HTMLAttributes, ReactNode, RefObject } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  additionalClassName?: string;
  btnRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({
  isActive,
  additionalClassName,
  btnRef,
  children,
  ...rest
}: ButtonProps) => {
  const createButtonClassname = () => {
    let buttonClassname = styles.button;

    if (additionalClassName) {
      buttonClassname = `${buttonClassname} ${additionalClassName}`;
    }

    if (isActive) {
      buttonClassname = `${buttonClassname} ${styles.active}`;
    }

    return buttonClassname;
  };

  return (
    <button ref={btnRef} className={createButtonClassname()} {...rest}>
      {Boolean(children) && <span>{children}</span>}
    </button>
  );
};
