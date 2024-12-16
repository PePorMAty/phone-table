import { RootState } from '../../../store';

const getPhonesSelector = (state: RootState) => state.phones;

export default getPhonesSelector;
