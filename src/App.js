import './App.css';
import Header from './Components/Header/Header';
import TakeNote from './Components/TakeNote/TakeNote';
import NoteList from './Components/NoteList/NoteList';
import { useAtom } from 'jotai';
import { otherNote, pinNote } from './globalAtom';
import { useEffect } from 'react';
import { OTHERS_NOTES_LS, PINNED_NOTES_LS } from './constants';

function App() {
	const [pinnedNotes] = useAtom(pinNote);
	const [othersNotes] = useAtom(otherNote);

	useEffect(() => {
		console.log('useEffect called');
		localStorage.setItem(PINNED_NOTES_LS, JSON.stringify(pinnedNotes));
		localStorage.setItem(OTHERS_NOTES_LS, JSON.stringify(othersNotes));
	}, [pinnedNotes, othersNotes]);

	const onSavePermanent = () => {
		const strX = JSON.stringify(pinnedNotes);
		localStorage.setItem('pinNotes', strX);
	};

	return (
		<div className='App'>
			<Header />
			<div className='mainContainer letterSpacing'>
				<button className='border borderRadius' onClick={onSavePermanent}>
					Save Permanently
				</button>
				<TakeNote />
				{!!pinnedNotes.length && (
					<NoteList title='Pinned' notes={pinnedNotes} id='pinned' />
				)}
				{!!othersNotes.length && (
					<NoteList title='Others' notes={othersNotes} id='others' />
				)}
			</div>
		</div>
	);
}

export default App;
