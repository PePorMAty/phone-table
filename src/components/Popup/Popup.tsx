import { ReactNode, useRef } from 'react';

import { useOutsideClick } from 'hooks';

import styles from './Popup.module.scss';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  additionalClassName?: string;
  children: ReactNode;
};

export const Popup = ({
  children,
  isOpen,
  onClose,
  additionalClassName,
}: PopupProps) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClosePopup = () => {
    onClose();
  };

  useOutsideClick({ ref: popupRef, handler: handleClosePopup });

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

  return (
    <div ref={popupRef} className={createPopupClassName()}>
      {children}
    </div>
  );
};
