import logo from './logo.svg';
import './App.css';
import Header from './components/blocks/Header/component';
import MainBlock from './components/blocks/MainBlock/component';
import Footer from './components/blocks/Footer/component';


function App() {
	return (
	<div className="App">
		<Header />
		<MainBlock />
		<Footer />
	</div>
	);
}

export default App;
