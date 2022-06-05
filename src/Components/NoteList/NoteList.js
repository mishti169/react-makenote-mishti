import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';
const NoteList = (props) => {
	const { notes, title } = props;
	if (!notes.length) return null;

	return (
		<>
			<h2>{title}</h2>
			<div className='notesWrapper '>
				{notes.map(function (currVal) {
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
