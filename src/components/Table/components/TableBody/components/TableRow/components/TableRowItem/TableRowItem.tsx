import commonStyles from '../../../../../../TableCommonStyles.module.scss';

interface Props {
  name?: string;
}

export const TableRowItem = ({ name }: Props) => {
  return <p className={`${commonStyles.item}`}>{name}</p>;
};
