import styles from './Checkbox.module.scss';

type CheckboxProps = {
  id?: string;
  additionalClassName?: string;
  isActive?: boolean;
};

export const Checkbox = ({
  id,
  additionalClassName,
  isActive,
  ...rest
}: CheckboxProps) => {
  const createClassName = () => {
    return `${styles.checkbox} ${additionalClassName} ${isActive ? styles.active : ''}`;
  };

  return (
    <input className={createClassName()} type="checkbox" id={id} {...rest} />
  );
};
