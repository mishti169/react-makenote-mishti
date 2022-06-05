import { useAtom } from 'jotai';
import React from 'react';
import { inputText, inputTitle, otherNote, pinNote } from '../../globalAtom';
import './TakeNote.css';

const TakeNote = () => {
	const [titleVal, setTitleVal] = useAtom(inputTitle);
	const [textVal, setTextVal] = useAtom(inputText);
	const [othersNotes, setOthersNote] = useAtom(otherNote);
	const [pinnedNotes, setPinnedNotes] = useAtom(pinNote);
	const isDisable = titleVal === '' || textVal === '';

	const getCurrentTypedNote = () => {
		return {
			title: titleVal,
			text: textVal,
			id: parseInt(Math.random() * 1000),
		};
	};

	const changeTitleInputVal = (event) => {
		setTitleVal(event.target.value);
	};

	const changeTextInputVal = (event) => {
		setTextVal(event.target.value);
	};
	const onSaveNote = () => {
		const x = getCurrentTypedNote();
		setOthersNote([x, ...othersNotes]);
		setTextVal('');
		setTitleVal('');
	};
	const onPinNote = () => {
		const y = getCurrentTypedNote();
		setPinnedNotes([y, ...pinnedNotes]);
		setTextVal('');
		setTitleVal('');
	};
	const onDelEmptyMakeNote = () => {
		setTextVal('');
		setTitleVal('');
	};
	return (
		<>
			<div className='takeNoteWrapper  border borderRadius'>
				<button onClick={onPinNote} className='pinBtn pinRotate'>
					<i className='fa-solid fa-thumbtack iconColor'></i>
				</button>
				<div className='titleContainer'>
					<input
						placeholder='Title'
						className='inputBox titleInputBox'
						value={titleVal}
						onChange={changeTitleInputVal}
						autoFocus
					/>
				</div>
				<textarea
					placeholder='Make a note...'
					rows='6'
					cols='46'
					className='inputBox noteInputBox'
					value={textVal}
					onChange={changeTextInputVal}
				/>
				<div className='addNoteBtnAndTrashBtnContainer'>
					<button
						className='addNoteTrashAndPinBtn trash '
						onClick={onDelEmptyMakeNote}
					>
						<i className='fa-solid fa-trash iconColor'></i>
					</button>
					<button
						disabled={isDisable}
						onClick={onSaveNote}
						className='addNote addNoteTrashAndPinBtn border borderRadius textColor'
					>
						Add Note
					</button>
				</div>
			</div>
		</>
	);
};

export default TakeNote;
