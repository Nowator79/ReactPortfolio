import React from 'react';
import ContactForm from '../../forms/ContactForm/component';

class ContactBlock extends React.Component{
	render() {
		return (
			<div className="contact_block">
				<div className="container">
					<div>
						<div className="title_block">
							<h2>
								{this.props.title}
							</h2>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}

export default ContactBlock;
