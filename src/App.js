import logo from './logo.svg';
import Header from './components/blocks/Header/component';
import MainBlock from './components/blocks/MainBlock/component';
import AboutBlock from './components/blocks/AboutBlock/component';
import ExperienceBlock from './components/blocks/ExperienceBlock/component';
import Footer from './components/blocks/Footer/component';
import './modules/bootstrap/scss/bootstrap.scss';
import "./fonts/Inter/stylesheet.css";


function App() {
	var listPost = [
		{
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "js",
			"liks": 123,
			"comments": 123,
		},
		{
			"text": "С php столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "php7",
			"liks": 123,
			"comments": 123,
		},
		{
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "react",
			"liks": 123,
			"comments": 123,
		},
		{
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "sass",
			"liks": 123,
			"comments": 123,
		}
	]
	return (
	<div className="App">
		<div className='main_content'>
			<Header />
			<MainBlock />
			<AboutBlock />
			<ExperienceBlock title="Experience" list={listPost}/>
		</div>
		<Footer />
	</div>
	);
}

export default App;
