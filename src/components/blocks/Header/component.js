import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props);
		let clone = Object.assign({}, props);
		this.state = clone;
		this.state.isOpen = false;
	}
	render() {
		return (
			<div>
				<div className="padding-top"></div>
				<div className="header-mobile">
					<div className='position-relative'>
						<div className='header-menu'>
							<div className={(this.state.isOpen?"active ":"")+"tab"} onClick={()=>{this.setOpenToggle()}}>
								<div className='tab-line'></div>
							</div>
						</div>
						<div className={(this.state.isOpen?"active ":"")+"header-modal"}>
							<a href="/#" className="main-log"></a>
							<div className="list-href">
								<a href="/#main" onClick={()=>{this.setClose()}} className="link">HOME</a>
								<a href="/#about" onClick={()=>{this.setClose()}} className="link">ABOUT</a>
								<a href="/#experience" onClick={()=>{this.setClose()}} className="link">EXPERIENCE</a>
								<a href="/#contact" onClick={()=>{this.setClose()}} className="link">CONTACT</a>
							</div>
						</div>
					</div>
				</div>
				<div className="header">
					<div className="container header-container">
						<div className="header-content">
							<a href="/#" className="main-log"></a>
							<div className="list-href">
								<a href="/#main" className="link">HOME</a>
								<a href="/#about" className="link">ABOUT</a>
								<a href="/#experience" className="link">EXPERIENCE</a>
								<a href="/#contact" className="link">CONTACT</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}

	setOpenToggle(){
		this.state.isOpen = !this.state.isOpen;
		this.setState(this.state);
	}
	setClose(){
		this.state.isOpen = !this.state.isOpen;
		this.setState(this.state);
	}
}
export default Header;