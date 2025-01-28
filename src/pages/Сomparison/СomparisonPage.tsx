import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { PhonesService } from 'api/services/PhonesService';
import {
  changeDisplayPhonesCount,
  replacePhone,
  selectDisplayedPhones,
  selectDisplayPhonesCount,
  selectReplacingPhones,
  selectTableRows,
} from 'store/slices/phonesSlice/phonesSlice';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const displayedPhones = useAppSelector(selectDisplayedPhones);
  const tableRows = useAppSelector(selectTableRows);
  const displayCount = useAppSelector(selectDisplayPhonesCount);
  const replacingItems = useAppSelector(selectReplacingPhones);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(PhonesService.getPhones());
  }, []);

  const handleOnChangeCount = (count: number) => {
    dispatch(changeDisplayPhonesCount(count));
  };

  const handleReplacePhone = (payload: { id: number; cardId: number }) => {
    dispatch(replacePhone(payload));
  };

  return (
    <div className={styles.content}>
      <PageContainer>
        <Table
          data={displayedPhones}
          tableRows={tableRows}
          displayCount={displayCount}
          handleOnChangeCount={handleOnChangeCount}
          replacingItems={replacingItems}
          replacePhone={handleReplacePhone}
        />
      </PageContainer>
    </div>
  );
};
