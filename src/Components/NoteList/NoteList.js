import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';
const NoteList = (props) => {
	return (
		<>
			<h2>{props.title}</h2>
			<div className='notesWrapper'>
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
