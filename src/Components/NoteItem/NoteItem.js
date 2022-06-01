import { useAtom } from 'jotai';
import { remove } from 'lodash-es';
import React from 'react';
import { otherNote, pinNote } from '../../globalAtom';
import './NoteItem.css';

const NoteItem = (props) => {
	const [othersNotes, setOthersNote] = useAtom(otherNote);
	const [pinnedNotes, setPinnedNotes] = useAtom(pinNote);

	const onDelRemoveNoteItem = () => {
		if (props.type === 'pinned') {
			const remainingNotes = pinnedNotes.filter(
				(currVal) => currVal.id !== props.id
			);
			console.log(remainingNotes);
			setPinnedNotes(remainingNotes);
		} else {
			const remainingNotes = othersNotes.filter(
				(currVal) => currVal.id !== props.id
			);
			setOthersNote(remainingNotes);
		}
	};

	const onPinAddNoteToPin = () => {
		if (props.type === 'pinned') {
			console.log('called');
			const removedNotes = remove(
				pinnedNotes,
				(currVal) => currVal.id === props.id
			);
			setPinnedNotes([...pinnedNotes]);
			setOthersNote([...removedNotes, ...othersNotes]);
		} else {
			const removedNotes = remove(
				othersNotes,
				(currVal) => currVal.id === props.id
			);
			setPinnedNotes([...removedNotes, ...pinnedNotes]);
			setOthersNote([...othersNotes]);
		}
	};

	return (
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
	);
};

export default NoteItem;
