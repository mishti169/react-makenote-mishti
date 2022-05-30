import { atom } from 'jotai';

export const inputTitle = atom('');
export const inputText = atom('');

export const pinNote = atom([
	{ title: 'title1', text: 'text1' },
	{ title: 'title2', text: 'text2' },
	{ title: 'title3', text: 'text3' },
	{ title: 'title4', text: 'text4' },
	{ title: 'title5', text: 'text5' },
	{ title: 'title6', text: 'text6' },
]);
export const otherNote = atom([
	[
		{ title: 'title1', text: 'text1' },
		{ title: 'title2', text: 'text2' },
		{ title: 'title3', text: 'text3' },
		{ title: 'title4', text: 'text4' },
		{ title: 'title5', text: 'text5' },
		{ title: 'title6', text: 'text6' },
	],
]);
