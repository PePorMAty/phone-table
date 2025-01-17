import { PhoneType } from 'store/models/phone/phone';

import { ReplacingItem } from './ReplacingItem';

import styles from './ReplacingPopup.module.scss';

type ReplacingPopupProps = {
  replacingItems: PhoneType[];
};

export const ReplacingPopup = ({ replacingItems }: ReplacingPopupProps) => {
  return (
    <div>
      <input className={styles.input} placeholder="Поиск" />
      {replacingItems.map(({ id, name, image }) => (
        <ReplacingItem key={id} name={name} image={image} />
      ))}
    </div>
  );
};
