import Form3 from './form3.js';

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			line1: '',
			line2: '',
			city: '',
			state: '',
			zip: '',
			number: '',
			insertId: null,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			insertId: this.props.insertId,
		});
	}

	handleClick(e) {
		e.preventDefault();
		if (this.state.line1.length > 0 && this.state.city.length > 0 && this.state.state.length > 0) {
			this.setState({
				clicked: true,
			});
			fetch('http://localhost:3000/address', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(this.state),
			})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log('ERROR', err);
				});
		} else {
			alert('Need correct shipping address');
		}
	}

	render() {
		return this.state.clicked ? (
			<Form3 insertId={this.state.insertId} />
		) : (
			<div style={{ width: '60%', marginLeft: '15px' }}>
				<form className='ui form'>
					<h2>Please Enter Shipping Information</h2>
					<div className='field  required'>
						<label>Address Line 1: </label>
						<input type='text' name='line1' placeholder='1234 Some St' value={this.state.line1} onChange={this.handleChange} required />
					</div>
					<div className='field'>
						<label>Address Line 2: </label>
						<input type='text' name='line2' value={this.state.line2} onChange={this.handleChange} required />
					</div>
					<div className='field required'>
						<label>City: </label>
						<input type='text' name='city' placeholder='city' value={this.state.city} onChange={this.handleChange} required />
					</div>
					<div className='field required'>
						<label>State: </label>
						<input type='text' name='state' value={this.state.state} onChange={this.handleChange} required />
					</div>
					<div className='field'>
						<label>ZipCode: </label>
						<input type='text' name='zip' placeholder='12345' value={this.state.zip} onChange={this.handleChange} required />
					</div>
					<div className='field'>
						<label>Phone Number: </label>
						<input type='text' name='number' placeholder='(XXX)-XXX-XXXX' value={this.state.number} onChange={this.handleChange} required />
					</div>
					<button type='submit' className='ui button' onClick={this.handleClick}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

export default Form2;
