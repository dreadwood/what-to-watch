import {useSelector} from 'react-redux';
import {TypedUseSelectorHook, useDispatch} from 'react-redux';
import {State} from '../types/state';

export const useAppDispatch = () => useDispatch();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
