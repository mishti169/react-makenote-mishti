import { useAtom } from 'jotai';
import React from 'react';
import { otherNote } from '../../globalAtom';
import './NoteItem.css';

const NoteItem = (props) => {
	const [othersNotes, setOthersNote] = useAtom(otherNote);

	const onDelRemoveNoteItem = () => {
		console.log('del nI');
		// const y = othersNotes.filter((currVal, index) => {
		// 	for (let i = 0; i < otherNote.length; i++) {
		// 		return;
		// 	}
		// });
		// setOthersNote([y, ...othersNotes]);
	};
	const onPinAddNoteToPin = () => {
		console.log('add pin note ');
	};
	return (
		<>
			<div className='NoteItemWrapper'>
				<button className='pin pinAndTrashBtn' onClick={onPinAddNoteToPin}>
					<i className='fa-solid fa-thumbtack'></i>
				</button>
				<div>
					<h3>{props.title}</h3>
					<h6>{props.text}</h6>
				</div>
				<button className='trash pinAndTrashBtn' onClick={onDelRemoveNoteItem}>
					<i className='fa-solid fa-trash'></i>
				</button>
			</div>
		</>
	);
};

export default NoteItem;
