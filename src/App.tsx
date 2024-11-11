import { useEffect } from 'react';

import { getPhonesData } from './redux/slices/phonesSlice/phonesSlice';
import { useAppSelector } from './redux/useAppSelector/useAppSelector';
import { useAppDispatch } from './redux/useAppDispatch/useAppDispatch';
import getPhonesSelector from './redux/slices/phonesSlice/selectors/getPhonesSelector';
import Header from './components/header/Header';

function App() {
  const { phones } = useAppSelector(getPhonesSelector);
  const dispatch = useAppDispatch();
  console.log(phones);

  useEffect(() => {
    dispatch(getPhonesData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container"></div>
    </>
  );
}

export default App;
