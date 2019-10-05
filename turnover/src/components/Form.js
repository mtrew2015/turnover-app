import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			truckNumber: '',
			description: '',
		};
	}
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		console.log(this.state);
		return (
			<div>
				<form className='eventForm'>
					<div className='input-combo'>
						<p>Truck Number:</p>
						<input type="number" name='truckNumber' value={this.state.truckNumber} onChange={this.onChange} />
					</div>
					<div className='input-combo'>
						<p>Driver Name:</p>
						<input type='text' name='name' value={this.state.name} onChange={this.onChange} />
					</div>
					<div className='input-combo'>
						<p>Description:</p>
						<textarea type='text' name='description' value={this.state.description} onChange={this.onChange} />
					</div>
					<button>Add Event</button>
				</form>
			</div>
		);
	}
}

export default Form;
