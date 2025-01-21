import { useAppDispatch } from 'store';
import { replacePhone } from 'store/slices/phonesSlice/phonesSlice';
import { Button } from 'components/Button';
import ReplaceIcon from 'assets/icons/ReplaceIcon';

import styles from './ReplacingItem.module.scss';

type ReplacingItemProps = {
  id: number;
  cardId: number;
  name: string;
  image: string;
};

export const ReplacingItem = ({
  name,
  image,
  id,
  cardId,
}: ReplacingItemProps) => {
  const dispatch = useAppDispatch();

  const handleReplacePhone = (id: number) => {
    dispatch(replacePhone({ id, cardId }));
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn} onClick={() => handleReplacePhone(id)}>
        <ReplaceIcon />
      </Button>
      <img src={image} alt={name} className={styles.image} />
      <p>{name}</p>
    </div>
  );
};
