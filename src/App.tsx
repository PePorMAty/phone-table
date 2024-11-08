import { useEffect } from 'react';
import { getPhonesData } from './redux/slices/phonesSlice/phonesSlice';
import { useAppSelector } from './redux/useAppSelector/useAppSelector';
import { useAppDispatch } from './redux/hooks';

function App() {
  const data = useAppSelector((state) => state.phones.phone);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhonesData());
  }, [dispatch]);

  return (
    <div>
      {data.map((item) => {
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
