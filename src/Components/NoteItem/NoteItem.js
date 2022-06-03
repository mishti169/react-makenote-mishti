import { useAtom } from 'jotai';
import { remove } from 'lodash-es';
import React from 'react';
import { otherNote, pinNote } from '../../globalAtom';
import './NoteItem.css';

const NoteItem = (props) => {
	const [othersNotes, setOthersNote] = useAtom(otherNote);
	const [pinnedNotes, setPinnedNotes] = useAtom(pinNote);
	const { type, id } = props;

	const onDelete = () => {
		if (type === 'pinned') {
			const remainingNotes = pinnedNotes.filter((currVal) => currVal.id !== id);
			setPinnedNotes(remainingNotes);
		} else {
			const remainingNotes = othersNotes.filter((currVal) => currVal.id !== id);
			setOthersNote(remainingNotes);
		}
	};

	const onPin = () => {
		if (props.type === 'pinned') {
			const x = remove(pinnedNotes, (currVal) => currVal.id === props.id);
			setPinnedNotes([...pinnedNotes]);
			setOthersNote([...x, ...othersNotes]);
		} else {
			const x = remove(othersNotes, (currVal) => currVal.id === props.id);
			setPinnedNotes([...x, ...pinnedNotes]);
			setOthersNote([...othersNotes]);
		}
	};

	return (
		<div className='NoteItemWrapper  border borderRadius'>
			<button className='pin pinAndTrashBtn' onClick={onPin}>
				<i
					className={`fa-solid fa-thumbtack ${
						type === 'others' ? 'pinRotate' : ''
					}`}
				></i>
			</button>
			<div>
				<h3 className='noteTitle'>{props.title}</h3>
				<h6 className='noteDescription'>{props.text}</h6>
			</div>
			<button
				className='trash pinAndTrashBtn border iconColor'
				onClick={onDelete}
			>
				<i className='fa-solid fa-trash'></i>
			</button>
		</div>
	);
};

export default NoteItem;
