import "./styles.scss";

function Header() {
	return (
		<div className="header center">
			<div className="container">
				<div className="header_content">
					<a href="#" className="main_log"></a>
					<div className="list_href fs36">
						<a href="#" className="link">HOME</a>
						<a href="#" className="link">ABOUT</a>
						<a href="#" className="link">EXPERIENCE</a>
						<a href="#" className="link">CONTACT</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
