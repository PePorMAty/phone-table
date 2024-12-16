import { HTMLAttributes, ReactNode } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  children: ReactNode;
  additionalClassName?: string;
  isChecked?: boolean;
}

export const Checkbox = ({
  id,
  additionalClassName,
  children,
  isChecked,
  ...rest
}: CheckboxProps) => {
  const createCheckboxVariant = () => {
    return `${styles.checkbox} ${isChecked ? styles.active : ''}`;
  };

  const createCheckboxClassName = () => {
    const baseClassName = `${createCheckboxVariant()}`;

    if (additionalClassName) {
      return `${baseClassName} ${additionalClassName}`;
    }

    return baseClassName;
  };

  return (
    <>
      <input
        className={createCheckboxClassName()}
        type="checkbox"
        id={id}
        {...rest}
        checked={isChecked}
      />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
