import CardPostList from "../../cards/CardPostList/component";
import React from 'react';
class ExperienceBlock extends React.Component{
	render() {
		return (
			<div className="experience_block">
				<div className="container">
					<div>
						<div className="title_block">
							<h2>
								{this.props.title}
							</h2>
						</div>
						<CardPostList listCard={this.props.list}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceBlock;
