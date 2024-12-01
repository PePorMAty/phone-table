import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  return (
    <div className={styles.content}>
      <PageContainer>
        <Table />
      </PageContainer>
    </div>
  );
};
