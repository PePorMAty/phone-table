import { useEffect } from 'react';

import { getPhonesData } from './redux/slices/phonesSlice/phonesSlice';
import { useAppSelector } from './redux/useAppSelector/useAppSelector';
import { useAppDispatch } from './redux/useAppDispatch/useAppDispatch';
import getPhonesSelector from './redux/slices/phonesSlice/selectors/getPhonesSelector';

function App() {
  const { phones } = useAppSelector(getPhonesSelector);
  const dispatch = useAppDispatch();
  console.log(phones);

  useEffect(() => {
    dispatch(getPhonesData());
  }, [dispatch]);

  return (
    <div>
      {phones.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <img src={item.image} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
