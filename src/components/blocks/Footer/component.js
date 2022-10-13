import React from 'react';

class Footer extends React.Component{
	render() {
		return (
			<div className="footer center">
				<div className="container">
					<div className="hw_full center content">
						{this.props.title}
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
