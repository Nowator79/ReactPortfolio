import React from 'react';

class Footer extends React.Component{
	render() {
		return (
			<div className="footer center">
				<div className="container">
					<div className="hw_full center content">
						<a href={"tel:" + this.props.phone}>
							{this.props.phone}
						</a>
						<div className='title'>
							{this.props.title}
						</div>
						<a href={"mailto:" + this.props.mail}>
							{this.props.mail}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
