import "./styles.scss";
import sobesed from './img/sobesed.svg';

function AboutBlock() {
	return (
		<div className="about_block">
			<div className="container">
				<div>
					<div className="title_block">
						<h2>
							ABOUT
						</h2>
					</div>
					<div className="list_skills mb_block">
						<div className="skill skill_html5">HTML5</div>
						<div className="skill skill_css3">CSS3</div>
						<div className="skill skill_php7">PHP7</div>
						<div className="skill skill_js">JS</div>
						<div className="skill skill_jq">jQuery</div>
						<div className="skill skill_b">B</div>
						<div className="skill skill_sql">SQL</div>
						<div className="skill skill_bitrix">BITRIX</div>
						<div className="skill skill_sass">SASS</div>
						<div className="skill skill_node">NodeJS</div>
						<div className="skill skill_git">Git</div>
						<div className="skill skill_gulp">Gulp</div>
						<div className="skill skill_react">React</div>
						<div className="skill skill_redux">Redux</div>
						<div className="skill skill_angular">Angular</div>
					</div>
					<div className="content row">
						<div className="col-lg-5">
							<img className="about__left_img" src={sobesed}></img>
						</div>
						<div className="col-lg-2"></div>
						<div className="col-lg-5">
							<div className="about__right_text center fs24">Привет, меня зовут Вадим. Я Fullstack разработчик. Коротко о моих навыках. Я обладаю всеми навыками для создания сайтов любой сложности и владею опытом командной работы. </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutBlock;
