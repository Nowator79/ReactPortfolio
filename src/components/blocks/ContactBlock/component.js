import React from 'react';
import ContactForm from '../../forms/ContactForm/component';
import Title from '../../Title/component';

class ContactBlock extends React.Component{
	render() {
		return (
			<div className="contact-block" id="contact" ref={this.props.blockRef}>
				<div className="container">
					<div>
						<Title title={this.props.title}/>
						<ContactForm 
							action = {this.props.contactFormUrl}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactBlock;
