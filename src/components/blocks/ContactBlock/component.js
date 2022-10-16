import React from 'react';
import ContactForm from '../../forms/ContactForm/component';
import Title from '../../Title/component';

class ContactBlock extends React.Component{
	render() {
		return (
			<div className="contact_block" ref={this.props.blockRef}>
				<div className="container">
					<div>
						<Title title={this.props.title}/>
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}

export default ContactBlock;
