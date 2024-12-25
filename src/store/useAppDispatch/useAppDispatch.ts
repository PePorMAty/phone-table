import { useDispatch } from 'react-redux';

<<<<<<< HEAD
import { type AppDispatch } from '../store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
=======
import type { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
>>>>>>> c1d4a06ee2153b7d93cb64373d67a9f6d3d9873f
