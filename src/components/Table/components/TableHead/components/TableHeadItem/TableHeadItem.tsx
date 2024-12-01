import styles from './TableHeadItem.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';

interface Props {
  img?: string;
  name?: string;
  altImg?: string;
}

export const TableHeadItem = ({ img, name, altImg }: Props) => {
  return (
    <li className={`${styles.itemWrapper} ${commonStyles.item}`}>
      <img className={styles.img} src={img} alt={altImg} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
