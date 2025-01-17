import { Button } from 'components/Button';
import ReplaceIcon from 'assets/icons/ReplaceIcon';

import styles from './ReplacingItem.module.scss';

type ReplacingItemProps = {
  name: string;
  image: string;
};

export const ReplacingItem = ({ name, image }: ReplacingItemProps) => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn}>
        <ReplaceIcon />
      </Button>
      <img src={image} alt={name} className={styles.image} />
      <p>{name}</p>
    </div>
  );
};
