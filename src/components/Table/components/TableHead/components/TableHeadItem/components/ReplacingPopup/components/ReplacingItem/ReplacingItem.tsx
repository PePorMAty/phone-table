import { Button } from 'components/Button';
import { ReplaceIcon } from 'assets/icons';

import styles from './ReplacingItem.module.scss';

type ReplacingItemProps = {
  id: number;
  cardId: number;
  name: string;
  image: string;
  replacePhone: (payload: { id: number; cardId: number }) => void;
};

export const ReplacingItem = ({
  name,
  image,
  id,
  cardId,
  replacePhone,
}: ReplacingItemProps) => {
  const handleReplacePhone = (id: number) => {
    replacePhone({ id, cardId });
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn} onClick={() => handleReplacePhone(id)}>
        <ReplaceIcon />
      </Button>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.text}>{name}</p>
    </div>
  );
};
