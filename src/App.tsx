import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getPhones } from './store/slices/phonesSlice';

function App() {
  const data = useAppSelector((state) => state.phones.phone);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <div className="App">
      {data.map((item) => {
        return <div key={item.id}>{item.brand}</div>;
      })}
    </div>
  );
}

export default App;
