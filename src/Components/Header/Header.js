import React, { useState } from 'react';
import './Header.css';

const Header = () => {
	const [isDark, setIsDark] = useState(false);

	const onToggleTheme = () => {
		const rootElement = document.querySelector('html');
		setIsDark(rootElement.classList.toggle('darkTheme'));
	};
	return (
		<div className='headerWrapper'>
			<div className='notePenWrapper'>
				<div className='titleIconWrapper'>
					<h2 className='headerTitle'>Make Note</h2>
					<span className='material-symbols-outlined noteIcon '>edit_note</span>
				</div>
			</div>
			<div className='flexBox'>
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
				<button className='themeIcon' onClick={onToggleTheme}>
					{isDark ? (
						<i class='fa-solid fa-sun '></i>
					) : (
						<i class='fa-solid fa-moon  '></i>
					)}
				</button>
			</div>
		</div>
	);
};
export default Header;
