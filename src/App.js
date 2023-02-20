import React from 'react';

import logo from './logo.svg';
import Header from './components/blocks/Header/component';
import MainBlock from './components/blocks/MainBlock/component';
import AboutBlock from './components/blocks/AboutBlock/component';
import ExperienceBlock from './components/blocks/ExperienceBlock/component';
import ContactBlock from './components/blocks/ContactBlock/component';
import Footer from './components/blocks/Footer/component';
import './modules/bootstrap/scss/bootstrap.scss';
import "./fonts/Inter/stylesheet.css";
import me from "./img/novoselov_v.jpg";

class App extends React.Component{

	constructor(props)
	{
		super(props);
		
		this.MainBlock = React.createRef();
		this.AboutBlock = React.createRef();
		this.ExperienceBlock = React.createRef();
		this.ContactBlock = React.createRef();

		this.state = {
			error: null,
			isLoaded: false,
			data: []
		}
	}
	componentDidMount(){
		let url = "http://radium-tech.ru:8000/getdata/";
		fetch(url)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState(
					{
						isLoaded: true,
						data: result
					}
				);
			},
			(error) => {
				this.setState({
					isLoaded: true, 
					error 
				});
			}
		)
	}
	render() {
	
	
		document.title = "NOVOSELOV VADIM";
		const {error, isLoaded, data} = this.state;
		if(error){
			return <p>Error {error.message}</p>
		}else if(!isLoaded){
			return <p>Loading....</p>
		}else{
			let listPost = [];

			data.forEach((element) =>{
				listPost[element.ID] = 
				{
					"key": element.ID,
					"text": element.TEXT,
					"type": element.TYPE,
					"liks": element.LIKS,
					"isLike": false,
					"comments": 0,
				}
			});
			return (
				<div className="App">
					<div className='main_content'>
						<Header 
							mainRef={this.MainBlock}
							aboutRef={this.AboutBlock}
							experienceRef={this.ExperienceBlock}
							contactRef={this.ContactBlock}
						/>
						<MainBlock 
							blockRef={this.MainBlock}
							name="NOVOSELOV VADIM" 
							prof="React developer" 
							photo={me}
						/>
						<AboutBlock 
							blockRef={this.AboutBlock}
							title="ABOUT"/>
						<ExperienceBlock 
							blockRef={this.ExperienceBlock}
							title="Experience" 
							list={listPost}/>
						<ContactBlock 
							contactFormUrl={"https://localhost/"}
							blockRef={this.ContactBlock}
							title="Contact"
						/>
					</div>
					<Footer phone="+79248475764" title="NOVOSELOV VADIM" mail="dfgbolshenet@gmail.com"/>
				</div>
				);
		}

	}
}
export default App;
