import { useState } from 'react';

import { PhoneType, TableRowsType } from 'store/models/phone/phone';

import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';
import { TableTitle } from './components/TableTitle';

interface TableProps {
  data: PhoneType[];
  tableRows: TableRowsType[];
  differentTableRows: TableRowsType[];
}

export const Table = ({ data, tableRows, differentTableRows }: TableProps) => {
  const [isShowDifferences, setIsShowDifferences] = useState<boolean>(false);

  return (
    <>
      <TableTitle />
      <TableHead
        data={data}
        isShowDifferences={isShowDifferences}
        setIsShowDifferences={setIsShowDifferences}
      />
      <TableBody
        tableRows={tableRows}
        isShowDifferences={isShowDifferences}
        differentTableRows={differentTableRows}
      />
    </>
  );
};
