import './App.css';
import Header from './Components/Header/Header';
import TakeNote from './Components/TakeNote/TakeNote';
import NoteList from './Components/NoteList/NoteList';
import { useAtom } from 'jotai';
import { otherNote, pinNote } from './globalAtom';

function App() {
	const [pinnedNotes] = useAtom(pinNote);
	const [othersNotes] = useAtom(otherNote);
	return (
		<div className='App'>
			<Header />
			<TakeNote />
			<NoteList title='Pinned' notes={pinnedNotes} id='pinned' />
			<NoteList title='Others' notes={othersNotes} id='others' />
		</div>
	);
}

export default App;
