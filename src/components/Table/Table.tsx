import { useState } from 'react';

import { PhoneType } from 'store/models/phone/phone';

import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';
import { TableTitle } from './components/TableTitle';

interface TableProps {
  data: PhoneType[];
}

export const Table = ({ data }: TableProps) => {
  const [isShowDifferences, setIsShowDifferences] = useState<boolean>(false);

  return (
    <>
      <TableTitle />
      <TableHead
        data={data}
        isShowDifferences={isShowDifferences}
        setIsShowDifferences={setIsShowDifferences}
      />
      <TableBody />
    </>
  );
};
