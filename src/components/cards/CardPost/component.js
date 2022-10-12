import React from 'react';
class CardPost extends React.Component{

	render() {
		return (
			<div className="col col-lg-3 col-md-6">
				<div  className="card_post">
					<div className={this.props.type + " " + "card_post__bg border_r d-flex align-items-center justify-content-center"}></div>
					<div className="card_post__content">
						<div className="text">
							{this.props.text}
						</div>
						<div className="buttom_panel justify-content-around d-flex">
							<div className="like_block">
								<icon></icon>
								<count>{this.props.liks}</count>
							</div>
							<div className="comment_block">
								<icon></icon>
								<count>{this.props.comments}</count>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CardPost;
