import falseIcon from '../../../../../../../../assets/icons/no.svg';
import trueIcon from '../../../../../../../../assets/icons/yes.svg';

import commonStyles from '../../../../../../TableCommonStyles.module.scss';

interface Props {
  name?: string | number | boolean;
}

export const TableRowItem = ({ name }: Props) => {
  return (
    <p className={`${commonStyles.item}`}>
      {name === true ? (
        <img src={trueIcon} />
      ) : name === false ? (
        <img src={falseIcon} />
      ) : (
        name
      )}
    </p>
  );
};
