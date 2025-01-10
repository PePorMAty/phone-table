import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { PhonesService } from 'api/services/PhonesService';
import {
  changeDisplayPhonesCount,
  selectDisplayedPhones,
  selectDisplayPhonesCount,
  selectTableRows,
} from 'store/slices/phonesSlice/phonesSlice';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const displayedPhones = useAppSelector(selectDisplayedPhones);
  const tableRows = useAppSelector(selectTableRows);
  const displayCount = useAppSelector(selectDisplayPhonesCount);

  const dispatch = useAppDispatch();

  const handleOnChangeCount = (count: number) => {
    dispatch(changeDisplayPhonesCount(count));
  };

  useEffect(() => {
    dispatch(PhonesService.getPhones());
  }, []);

  return (
    <div className={styles.content}>
      <PageContainer>
        <Table
          data={displayedPhones}
          tableRows={tableRows}
          displayCount={displayCount}
          handleOnChangeCount={handleOnChangeCount}
        />
      </PageContainer>
    </div>
  );
};
