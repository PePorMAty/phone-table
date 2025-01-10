import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { PhonesService } from 'api/services/PhonesService';
import {
  selectDifferentTableRows,
  selectDisplayedPhones,
  selectTableRows,
} from 'store/slices/phonesSlice/phonesSlice';
import { TableRowsType } from 'store/models/phone/phone';

import { PageContainer } from '../../components/PageContainer';
import { Table } from '../../components/Table';

import styles from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  const displayedPhones = useAppSelector(selectDisplayedPhones);
  const tableRows = useAppSelector(selectTableRows);
  const differentTableRows = useAppSelector(selectDifferentTableRows);

  const dispatch = useAppDispatch();

  const filteredDifferentTableRows = differentTableRows.filter(
    Boolean,
  ) as TableRowsType[];

  useEffect(() => {
    dispatch(PhonesService.getPhones());
  }, []);

  return (
    <div className={styles.content}>
      <PageContainer>
        <Table
          data={displayedPhones}
          tableRows={tableRows}
          differentTableRows={filteredDifferentTableRows}
        />
      </PageContainer>
    </div>
  );
};
