import { useEffect } from 'react';

import { useAppDispatch } from 'store/useAppDispatch/useAppDispatch';
import PhonesService from 'api/services/PhonesService';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(PhonesService.getPhones());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <PageContainer>
        <Table />
      </PageContainer>
    </div>
  );
};
