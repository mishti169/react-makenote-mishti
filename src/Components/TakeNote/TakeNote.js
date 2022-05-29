import React, { useState } from 'react';
import './TakeNote.css';

const TakeNote = () => {
	// let title = 'Title';
	// let text = 'Take a note..';
	const [titleInputVal, setTitleInputVal] = useState('');
	const [textInputVal, setTextInputVal] = useState('');

	const changeTitleInputVal = (event) => {
		setTitleInputVal(event.target.value);
	};

	const changeTextInputVal = (event) => {
		setTextInputVal(event.target.value);
	};
	return (
		<>
			<div className='takeNoteWrapper'>
				<textarea
					rows='2'
					cols='46'
					className='inputBox titleInputBox'
					value={titleInputVal}
					onChange={changeTitleInputVal}
					autoFocus
				/>
				<textarea
					rows='6'
					cols='46'
					className='inputBox noteInputBox'
					value={textInputVal}
					onChange={changeTextInputVal}
				/>
			</div>
		</>
	);
};

export default TakeNote;
