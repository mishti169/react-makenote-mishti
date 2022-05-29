import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';
const NoteList = (props) => {
	return (
		<>
			<h2>{props.title}</h2>
			<div className='notesWrapper'>
				{props.notes.map(function (currVal) {
					return <NoteItem title={currVal.title} text={currVal.text} />;
				})}
			</div>
		</>
	);
};

export default NoteList;
