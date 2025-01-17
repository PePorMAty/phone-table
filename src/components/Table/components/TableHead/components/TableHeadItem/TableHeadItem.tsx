import { useState } from 'react';

import { PhoneType } from 'store/models/phone/phone';
import { Button } from 'components/Button';
import { Popup } from 'components/Popup';
import { ReplacingPopup } from 'components/ReplacingPopup';
import { OpenPopup } from 'assets/icons/OpenPopup';

import styles from './TableHeadItem.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';

interface Props {
  replacingItems: PhoneType[];
  img: string;
  name: string;
  altImg?: string;
}

export const TableHeadItem = ({ img, name, altImg, replacingItems }: Props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlePopupToggle = () => {
    setIsOpenPopup((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <li className={`${styles.itemWrapper} ${commonStyles.item}`}>
        <img className={styles.img} src={img} alt={altImg} />
        <p className={styles.name}>{name}</p>
      </li>
      {isOpenPopup && (
        <Popup isOpen={isOpenPopup} onClose={handlePopupToggle}>
          <ReplacingPopup replacingItems={replacingItems} />
        </Popup>
      )}
      <Button className={styles.openPopupBtn} onClick={handlePopupToggle}>
        <OpenPopup />
      </Button>
    </div>
  );
};
