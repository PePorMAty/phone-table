import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';
import { TableTitle } from '../../components/Table/components/TableTitle';

import style from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  return (
    <PageContainer>
      <TableTitle />
      <Table />
    </PageContainer>
  );
};
