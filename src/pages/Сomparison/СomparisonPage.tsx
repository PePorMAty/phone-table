import { useEffect } from 'react';

import { useAppDispatch } from 'store/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'store/useAppSelector/useAppSelector';

import { PhonesService } from 'api/services/PhonesService';

import { selectDisplayedPhones } from 'store/slices/phonesSlice/phonesSlice';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const displayedPhones = useAppSelector(selectDisplayedPhones);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(PhonesService.getPhones());
  }, []);

  return (
    <div className={styles.content}>
      <PageContainer>
        <Table />
      </PageContainer>
    </div>
  );
};
