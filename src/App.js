import logo from './logo.svg';
import Header from './components/blocks/Header/component';
import MainBlock from './components/blocks/MainBlock/component';
import AboutBlock from './components/blocks/AboutBlock/component';
import ExperienceBlock from './components/blocks/ExperienceBlock/component';
import ContactBlock from './components/blocks/ContactBlock/component';
import Footer from './components/blocks/Footer/component';
import './modules/bootstrap/scss/bootstrap.scss';
import "./fonts/Inter/stylesheet.css";


function App() {
	var listPost = [
		{
			"key": 1,
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "js",
			"liks": 12,
			"isLike": true,
			"comments": 123,
		},
		{
			"key": 2,
			"text": "С php столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "php7",
			"liks": 123,
			"isLike": false,
			"comments": 123,
		},
		{
			"key": 3,
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "react",
			"liks": 123,
			"isLike": false,
			"comments": 123,
		},
		{
			"key": 4,
			"text": "С JavaScript столкнулся в 2019 году, работая фронтенд разработчиком.  С тех пор постоянно практикую в работе и совершенствую навыки. Изучил множество фреймворков.",
			"type": "sass",
			"liks": 123,
			"isLike": true,
			"comments": 123,
		}
	]
	document.title = "NOVOSELOV VADIM";
	return (
	<div className="App">
		<div className='main_content'>
			<Header />
			<MainBlock name="NOVOSELOV VADIM" 
				prof="React developer" 
				photo="https://sun9-34.userapi.com/impg/6W409-JvdTXrlaNf78loy0_ROnc7AQQEDz-ifg/wH50evYqmyU.jpg?size=1620x2160&quality=95&sign=6b470bfddde9445f4c12a85c0c20814d&type=album"
			/>
			<AboutBlock title="ABOUT"/>
			<ExperienceBlock title="Experience" list={listPost}/>
			<ContactBlock title="Contact"/>
		</div>
		<Footer title="NOVOSELOV VADIM"/>
	</div>
	);
}

export default App;
