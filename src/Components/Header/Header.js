import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='headerWrapper'>
			<div className='notePenWrapper'>
				<div className='titleIconWrapper'>
					<h3>Make Note</h3>
					<span class='material-symbols-outlined '>edit_note</span>
				</div>
			</div>
			<a href='https://github.com/mishti169' className='headerLink'>
				Git Hub
			</a>
		</div>
	);
};

export default Header;
