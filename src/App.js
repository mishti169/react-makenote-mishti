import './App.css';
import Header from './Components/Header/Header';
import TakeNote from './Components/TakeNote/TakeNote';
import NoteList from './Components/NoteList/NoteList';

function App() {
	let pinnedNotes = [
		{ title: 'title1', text: 'text1' },
		{ title: 'title2', text: 'text2' },
		{ title: 'title3', text: 'text3' },
		{ title: 'title4', text: 'text4' },
		{ title: 'title5', text: 'text5' },
		{ title: 'title6', text: 'text6' },
	];
	let othersNotes = [
		{ title: 'title1', text: 'text1' },
		{ title: 'title2', text: 'text2' },
		{ title: 'title3', text: 'text3' },
		{ title: 'title4', text: 'text4' },
		{ title: 'title5', text: 'text5' },
		{ title: 'title6', text: 'text6' },
	];
	return (
		<div className='App'>
			<Header />
			<TakeNote />
			<NoteList title='pinned' notes={pinnedNotes} />
			<NoteList title='others' notes={othersNotes} />
		</div>
	);
}

export default App;
