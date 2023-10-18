import React, { ChangeEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook/redux-hooks';
import { addValue } from '../../store/slices';

export const Input = () => {
	// const [value, setValue] = useState('');

	const value = useAppSelector(store => store.value);
	const dispatch = useAppDispatch();

	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(addValue(e.target.value));
	}

	const addClick = () => {
		console.log(value);
	}
	return (
		<div>
			<input value={value} onChange={inputChange} />
			<button onClick={addClick}>Add</button>
		</div>
	)
}
