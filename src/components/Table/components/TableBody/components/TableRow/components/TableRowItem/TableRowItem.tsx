import { ErrorIcon, SuccessIcon } from 'assets/icons';

import commonStyles from '../../../../../../TableCommonStyles.module.scss';

interface Props {
  name: string | number | boolean;
}

export const TableRowItem = ({ name }: Props) => {
  const outputNameData = (name: string | number | boolean) => {
    if (typeof name === 'boolean') {
      return name ? <SuccessIcon /> : <ErrorIcon />;
    }
    return name;
  };

  return <p className={`${commonStyles.item}`}>{outputNameData(name)}</p>;
};
