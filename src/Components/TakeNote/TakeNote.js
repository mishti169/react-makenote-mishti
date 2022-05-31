import { useAtom } from 'jotai';
import React from 'react';
import { inputText, inputTitle, otherNote, pinNote } from '../../globalAtom';
import './TakeNote.css';

const TakeNote = () => {
	const [titleVal, setTitleVal] = useAtom(inputTitle);
	const [textVal, setTextVal] = useAtom(inputText);
	const [othersNotes, setOthersNote] = useAtom(otherNote);
	const [pinnedNotes, setPinnedNotes] = useAtom(pinNote);
	const changeTitleInputVal = (event) => {
		setTitleVal(event.target.value);
	};

	const changeTextInputVal = (event) => {
		setTextVal(event.target.value);
	};
	const onSaveNote = () => {
		const x = { title: titleVal, text: textVal };
		console.log(x);
		console.log(othersNotes);
		setOthersNote([x, ...othersNotes]);
	};
	const onPinNote = () => {
		console.log('pinneed');
		const y = { title: titleVal, text: textVal };
		setPinnedNotes([y, ...pinnedNotes]);
	};
	return (
		<>
			<div className='takeNoteWrapper'>
				<button
					onClick={onPinNote}
					className='addTakeNoteTrashAndPinBtn pinBtnOfMakeNote'
				>
					<i class='fa-solid fa-thumbtack '></i>
				</button>

				<div>
					<input
						placeholder='Title'
						className='inputBox titleInputBox'
						value={titleVal}
						onChange={changeTitleInputVal}
						autoFocus
					/>
					<textarea
						placeholder='Make a note...'
						rows='6'
						cols='46'
						className='inputBox noteInputBox'
						value={textVal}
						onChange={changeTextInputVal}
					/>
				</div>
				<div className='addNoteBtnAndTrashBtnContainer'>
					<button className='addTakeNoteTrashAndPinBtn'>
						<i class='fa-solid fa-trash'></i>
					</button>
					<button onClick={onSaveNote} className='addTakeNoteTrashAndPinBtn'>
						Add Note
					</button>
				</div>
			</div>
		</>
	);
};

export default TakeNote;
