import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<AppDispatch>();

// interface Obj<T> {
//   name: T;
// }

// interface State {
//   state: {
//     data: string;
//     loading: false;
//   };
// }

// const obj: Obj<State> = {
//   name: {
//     state: {
//       data: 'abcd',
//       loading: false,
//     },
//   },
// };
