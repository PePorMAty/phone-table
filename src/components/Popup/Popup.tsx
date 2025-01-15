import { ReactNode } from 'react';

import styles from './Popup.module.scss';

type PopupProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  additionalClassName?: string;
};

export const Popup = ({
  children,
  isOpen,
  onClose,
  additionalClassName,
}: PopupProps) => {
  console.log(isOpen);

  if (!isOpen) {
    return null;
  }

  const createPopupClassName = () => {
    const baseClassName = styles.popup;

    if (additionalClassName) {
      return `${baseClassName} ${additionalClassName}`;
    }

    return baseClassName;
  };

  const handleClosePopup = () => {
    onClose();
  };

  return (
    <div className={createPopupClassName()} onClick={handleClosePopup}>
      {children}
    </div>
  );
};
