import React from 'react';
class MainBlock extends React.Component{
	render() {
		return (
			<div className="main_block">
				<div className="container">
					<div className="content">
						<div className="left_block">
							<div className="massage fs36">Hello! Im</div>
							<div className="name fs64">{this.props.name}</div>
							<div className="profesional fs36">{this.props.prof}</div>
						</div>
						<div className="right_block">
							<div className="cirsle_photo" style={{
								backgroundImage: `url("` + this.props.photo+`")` 
							}}>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MainBlock;
