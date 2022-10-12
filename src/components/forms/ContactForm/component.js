import React from 'react';
class ContactForm extends React.Component{
	constructor(props) {
		super(props);
		let clone = Object.assign({}, props);
		this.state = clone;
	}
	render() {
		return (
			<div className='row justify-content-center'>
				<form className='contact_form col-lg-6'>
					<input placeholder='Full name'></input>
					<input placeholder='Email'></input>
					<input placeholder='Subject'></input>
					<textarea placeholder='Message' rows={3}></textarea>
				</form>
			</div>
		);
	}

}
export default ContactForm;
