import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store/useAppDispatch/useAppDispatch';

import PhonesService from 'api/services/PhonesService';

import {
  selectDisplayedPhones,
  selectdisplayedPhonesCount,
  selectTableRows,
} from 'store/slices/phonesSlice/phonesSlice';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const displayedPhones = useSelector(selectDisplayedPhones);
  const displayedPhonesCount = useSelector(selectdisplayedPhonesCount);
  const tableRows = useSelector(selectTableRows);

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
