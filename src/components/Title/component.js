import React from 'react';

class Title extends React.Component{
	constructor(props) {
		super(props);
		let clone = Object.assign({}, props);
		this.state = clone;
		this.state.open = false;
		this.myRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	
	handleScroll=(event)=>{
		var height = this.myRef.current.getBoundingClientRect().top;
		if(height < document.documentElement.clientHeight-200){
			if(this.state.open == false){
				this.state.open = true;
				this.setState(this.state)
			}
		}else{
			if(this.state.open == true){
				this.state.open = false;
				this.setState(this.state)
			}
		}
	}

	render(){
		return (
			<div ref={this.myRef} className={"title_block" + (this.state.open?" active":"")}>
				<h2>
					{this.state.title}
				</h2>
			</div>
		);
	}
}
	

export default Title;
