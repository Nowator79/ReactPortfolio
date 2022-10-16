import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="header center">
				<div className="container">
					<div className="header_content">
						<a href="/#" className="main_log"></a>
						<div className="list_href fs36">
							<a href="/#" className="link" onClick={()=>{this.moveScroll("main")}}>HOME</a>
							<a href="/#" className="link" onClick={()=>{this.moveScroll("about")}}>ABOUT</a>
							<a href="/#" className="link" onClick={()=>{this.moveScroll("experience")}}>EXPERIENCE</a>
							<a href="/#" className="link" onClick={()=>{this.moveScroll("contact")}}>CONTACT</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	moveScroll(block){
		var el;
		switch (block) {
			case "main":
				el = this.props.mainRef.current;
				break;
			case "about":
				el = this.props.aboutRef.current;
				break;
			case "experience":
				el = this.props.experienceRef.current;
				break;
			case "contact":
				el = this.props.contactRef.current;
				break;
			default:
				break;
		}
		var y = el.getBoundingClientRect().top + window.scrollY
		window.scrollTo({top: y, behavior: "smooth"});
	}
}
export default Header;
