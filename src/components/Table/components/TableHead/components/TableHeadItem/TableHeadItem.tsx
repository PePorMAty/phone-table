import { useState } from 'react';

import { PhoneType } from 'store/models/phone/phone';
import { Button } from 'components/Button';
import { Popup } from 'components/Popup';
import { ArrowDown } from 'assets/icons';

import { ReplacingPopup } from './components/ReplacingPopup';

import styles from './TableHeadItem.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';

interface TableHeadItemProps {
  id: number;
  replacingItems: PhoneType[];
  img: string;
  name: string;
  altImg?: string;
  replacePhone: (payload: { id: number; cardId: number }) => void;
}

export const TableHeadItem = ({
  img,
  name,
  altImg,
  replacingItems,
  id,
  replacePhone,
}: TableHeadItemProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlePopupClose = () => {
    setIsOpenPopup(false);
  };

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  return (
    <div className={styles.wrapper}>
      <li className={`${styles.itemWrapper} ${commonStyles.item}`}>
        <img className={styles.img} src={img} alt={altImg} />
        <p className={styles.name}>{name}</p>
      </li>
      <Button className={styles.openPopupBtn} onClick={handleOpenPopup}>
        <ArrowDown />
      </Button>
      <Popup
        isOpen={isOpenPopup}
        onClose={handlePopupClose}
        additionalClassName={styles.replacingPopup}
      >
        <ReplacingPopup
          replacingItems={replacingItems}
          cardId={id}
          replacePhone={replacePhone}
        />
      </Popup>
    </div>
  );
};
