import CardPost from "../CardPost/component";
import React from 'react';

class CardPostList extends React.Component{
	render(){
		return (
			<div className="list__card_post">
				<div className="row">
				
					{
						this.props.listCard.map((element)=> (
							<CardPost 
								text={element.text}
								type={element.type}
								liks={element.liks}
								comments={element.comments}
							/>
						)) 
					}
				</div>
			</div>
		);
	}
}
	

export default CardPostList;
