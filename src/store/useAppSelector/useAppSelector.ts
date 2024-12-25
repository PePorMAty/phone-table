<<<<<<< HEAD
import { useSelector } from 'react-redux';

import type { RootState } from '../store';

export const useAppSelector = useSelector.withTypes<RootState>();
=======
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
>>>>>>> c1d4a06ee2153b7d93cb64373d67a9f6d3d9873f
