import { useState } from 'react';

import { Popup } from 'components/Popup';

import styles from './TableHeadItem.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';
import { Button } from 'components/Button';
import { OpenPopup } from 'assets/icons/OpenPopup';

interface Props {
  img?: string;
  name?: string;
  altImg?: string;
}

export const TableHeadItem = ({ img, name, altImg }: Props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const onClosePopup = () => {
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
      {isOpenPopup ? (
        <Popup isOpen={isOpenPopup} onClose={onClosePopup}>
          <p>{name}</p>
        </Popup>
      ) : (
        <Button className={styles.openPopupBtn} onClick={handleOpenPopup}>
          <OpenPopup />
        </Button>
      )}
    </div>
  );
};
