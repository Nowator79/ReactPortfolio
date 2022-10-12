import React from 'react';
class CardPost extends React.Component{
	constructor(props) {
		super(props);
		let clone = Object.assign({}, props);

		this.state = clone;
	}
	render() {
		return (
			<div className="col col-lg-3 col-md-6">
				<div  className="card_post">
					<div className={this.state.type + " " + "card_post__bg border_r d-flex align-items-center justify-content-center"}></div>
					<div className="card_post__content">
						<div className="text">
							{this.state.text}
						</div>
						<div className="buttom_panel justify-content-around d-flex">
							<div className={this.state.isLike?"like_block is-like":"like_block"} onClick={() => this.like(this)}>
								<div className='icon'></div>
								<div className='count'>{this.state.liks}</div>
							</div>
							<div className="comment_block">
								<div className='icon'></div>
								<div className='count'>{this.state.comments}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	like(){
		let clone = Object.assign({}, this.state);
		if(this.state.isLike){
			clone.liks --;
			clone.isLike = false;
		}else{
			clone.liks ++;
			clone.isLike = true;
		}
		
		this.setState(clone);
	}
}
export default CardPost;
