import "./styles.scss";

function MainBlock() {
	return (
		<div className="main_block">
			<div className="container">
				<div className="content">
					<div className="left_block">
						<div className="massage fs36">Hello! Im</div>
						<div className="name fs64">NOVOSELOV VADIM</div>
						<div className="profesional fs36">React developer</div>
					</div>
					<div className="right_block">
						<div className="cirsle_photo" style={{
							backgroundImage: `url("https://sun9-34.userapi.com/impg/6W409-JvdTXrlaNf78loy0_ROnc7AQQEDz-ifg/wH50evYqmyU.jpg?size=1620x2160&quality=95&sign=6b470bfddde9445f4c12a85c0c20814d&type=album")` 
						}}>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainBlock;
