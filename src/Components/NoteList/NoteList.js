import { useAtom } from 'jotai';
import React from 'react';
import { otherNote, pinNote } from '../../globalAtom';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';

const NoteList = (props) => {
	const [, setPinnedNotes] = useAtom(pinNote);
	const [, setOthersNote] = useAtom(otherNote);

	const onDelAll = () => {
		if (props.title === 'Pinned') {
			setPinnedNotes('');
		} else {
			setOthersNote('');
		}
	};

	return (
		<>
			<div className='nIHeadingContainer'>
				<h2>{props.title}</h2>
				<button className='border borderRadius' onClick={onDelAll}>
					<i className='fa-solid fa-trash iconColor mr10 '></i>
					Delete All
				</button>
			</div>
			<div className='notesWrapper '>
				{props.notes.map(function (currVal) {
					return (
						<NoteItem
							key={currVal.id}
							title={currVal.title}
							text={currVal.text}
							id={currVal.id}
							type={props.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default NoteList;
