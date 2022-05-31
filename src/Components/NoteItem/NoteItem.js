import React from 'react';
import './NoteItem.css';

const NoteItem = (props) => {
	return (
		<>
			<div className='NoteItemWrapper'>
				<button className='pin pinAndTrashBtn'>
					<i class='fa-solid fa-thumbtack'></i>
				</button>
				<div>
					<h3>{props.title}</h3>
					<h6>{props.text}</h6>
				</div>
				<button className='trash pinAndTrashBtn'>
					<i class='fa-solid fa-trash'></i>
				</button>
			</div>
		</>
	);
};

export default NoteItem;
