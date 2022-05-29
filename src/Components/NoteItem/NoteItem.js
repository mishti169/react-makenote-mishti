import React from 'react';
import './NoteItem.css';

const NoteItem = (props) => {
	return (
		<>
			<div className='NoteItemWrapper'>
				<h3>{props.title}</h3>
				<h6>{props.text}</h6>
			</div>
		</>
	);
};

export default NoteItem;
