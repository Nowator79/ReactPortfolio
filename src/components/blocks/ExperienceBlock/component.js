import CardPostList from "../../cards/CardPostList/component";
import Title from "../../Title/component";
import React from 'react';
class ExperienceBlock extends React.Component{
	render() {
		return (
			<div className="experience_block" ref={this.props.blockRef}>
				<div className="container">
					<div>
						<Title title={this.props.title}/>
						<CardPostList listCard={this.props.list}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceBlock;
