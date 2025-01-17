import { useEffect, useState } from 'react';

import { PhoneType, TableRowsType } from 'store/models/phone/phone';

import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';
import { TableTitle } from './components/TableTitle';

interface TableProps {
  data: PhoneType[];
  replacingItems: PhoneType[];
  tableRows: TableRowsType[];
  handleOnChangeCount: (count: number) => void;
  displayCount: number;
}

export const Table = ({
  data,
  tableRows,
  handleOnChangeCount,
  displayCount,
  replacingItems,
}: TableProps) => {
  const [isShowDifferences, setIsShowDifferences] = useState(false);
  const [filteredRows, setFilteredRows] = useState(tableRows);

  useEffect(() => {
    if (!isShowDifferences) {
      setFilteredRows(tableRows);
    }
    if (isShowDifferences) {
      setFilteredRows(
        tableRows.filter((tableRow) => {
          const referenceChars = tableRow.rowChars[0];
          return data.some(
            (phone) => phone.chars[tableRow.rowName] !== referenceChars,
          );
        }),
      );
    }
  }, [isShowDifferences, tableRows]);

  const handleCheckboxToggle = () => {
    setIsShowDifferences((prev) => !prev);
  };

  return (
    <>
      <TableTitle
        handleOnChangeCount={handleOnChangeCount}
        displayCount={displayCount}
      />
      <TableHead
        data={data}
        isShowDifferences={isShowDifferences}
        setIsShowDifferences={handleCheckboxToggle}
        replacingItems={replacingItems}
      />
      <TableBody tableRows={filteredRows} />
    </>
  );
};
