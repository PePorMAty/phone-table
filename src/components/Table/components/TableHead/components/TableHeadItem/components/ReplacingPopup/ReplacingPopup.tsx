import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from 'hooks';
import { PhoneType } from 'store/models/phone/phone';

import { ReplacingItem } from './components/ReplacingItem';

import styles from './ReplacingPopup.module.scss';

type ReplacingPopupProps = {
  replacingItems: PhoneType[];
  cardId: number;
  replacePhone: (payload: { id: number; cardId: number }) => void;
};

export const ReplacingPopup = ({
  replacingItems,
  cardId,
  replacePhone,
}: ReplacingPopupProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredReplacingItems, setFilteredReplacingItems] =
    useState(replacingItems);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleReplacePhone = (payload: { id: number; cardId: number }) => {
    replacePhone(payload);
  };

  const filteredItems = replacingItems.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
  );

  useEffect(() => {
    setFilteredReplacingItems(filteredItems);
  }, [replacingItems, debouncedSearchValue]);

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Поиск"
        onChange={(e) => handleOnChangeInput(e)}
        value={searchValue}
      />
      {filteredReplacingItems.map(({ id, name, image }) => (
        <ReplacingItem
          key={id}
          name={name}
          image={image}
          id={id}
          cardId={cardId}
          replacePhone={handleReplacePhone}
        />
      ))}
    </div>
  );
};
