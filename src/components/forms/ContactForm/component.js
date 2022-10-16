import React from 'react';
class ContactForm extends React.Component{
	constructor(props) {
		super(props);
		let clone = Object.assign({}, props);
		this.state = clone;

		this.state.form = [];
		this.state.form.name = "";
		this.state.form.email = "";
		this.state.form.subject = "";
		this.state.form.comment = "";

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	render() {
		return (
			<div className='row justify-content-center'>
				<form className='contact_form col-lg-6' onSubmit={this.submitForm}>
					<input placeholder='Full name' name='name' onChange={this.handleChange}></input>
					<input placeholder='Email' name='email' onChange={this.handleChange}></input>
					<input placeholder='Subject' name='subject' onChange={this.handleChange}></input>
					<textarea placeholder='Message' name='message' rows={3} onChange={this.handleChange}></textarea>
					<input 
						className='btn btn-blue'
						type={'submit'}
						value={'Send'}
					></input>
				</form>
			</div>
		);
	}
	handleChange(event) {
		let clone = Object.assign({}, this.state);
		clone.form[event.target.getAttribute("name")] = event.target.value;
		
		this.setState(clone);
	}

	submitForm(event){
		event.preventDefault();
		
		let data = new FormData();
		data.append("name", this.state.form.name);
		data.append("email", this.state.form.email);
		data.append("subject", this.state.form.subject);
		data.append("comment", this.state.form.comment);

		let url = this.state.action;
		
		fetch(url, {
			method: 'POST',
			body: data
		})
		.then((res)=>{
			console.log(res);
		});
	}

}
export default ContactForm;
