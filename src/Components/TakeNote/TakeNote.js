import { useAtom } from 'jotai';
import React from 'react';
import { inputText, inputTitle } from '../../globalAtom';
import './TakeNote.css';

const TakeNote = () => {
	const [titleVal, setTitleVal] = useAtom(inputTitle);
	const [textVal, setTextVal] = useAtom(inputText);

	const changeTitleInputVal = (event) => {
		setTitleVal(event.target.value);
	};

	const changeTextInputVal = (event) => {
		setTextVal(event.target.value);
	};
	return (
		<>
			<div className='takeNoteWrapper'>
				<input
					className='inputBox titleInputBox'
					value={titleVal}
					onChange={changeTitleInputVal}
					autoFocus
				/>
				<textarea
					rows='6'
					cols='46'
					className='inputBox noteInputBox'
					value={textVal}
					onChange={changeTextInputVal}
				/>
			</div>
		</>
	);
};

export default TakeNote;
