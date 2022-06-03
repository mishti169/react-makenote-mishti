import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='headerWrapper'>
			<div className='notePenWrapper'>
				<div className='titleIconWrapper'>
					<h2 className='headerTitle'>Make Note</h2>
					<span class='material-symbols-outlined noteIcon '>edit_note</span>
				</div>
			</div>
			<div className='linkWrapper'>
				<a
					href='https://github.com/mishti169'
					target='_blank'
					className='headerLink'
					rel='noreferrer'
				>
					Git Hub
				</a>
				<a
					href='https://twitter.com/Mishti169'
					target='_blank'
					className='headerLink'
					rel='noreferrer'
				>
					Twitter
				</a>
			</div>
		</div>
	);
};
export default Header;
