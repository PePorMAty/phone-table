import { HTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  children: React.ReactNode;
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
  const createClassName = () => {
    const className = `${styles.checkbox} ${additionalClassName ?? ''} ${isChecked ? styles.active : ''}`;
    return className.trim() || undefined;
  };

  return (
    <>
      <input
        className={createClassName()}
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
