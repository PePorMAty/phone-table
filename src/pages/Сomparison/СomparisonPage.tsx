import { useEffect } from 'react';

import { useAppDispatch } from 'store/useAppDispatch/useAppDispatch';

import { PhonesService } from 'api/services/PhonesService';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';
import { selectDisplayedPhones } from 'store/slices/phonesSlice/phonesSlice';
import { useAppSelector } from 'store/useAppSelector/useAppSelector';

export const ComparisonPage = () => {
  const displayedPhones = useAppSelector(selectDisplayedPhones);
  /* const displayedPhonesCount = useSelector(selectdisplayedPhonesCount);
  const tableRows = useSelector(selectTableRows); */

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
