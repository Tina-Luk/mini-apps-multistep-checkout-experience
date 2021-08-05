import Confirmation from './confirmation.js';

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			cc: '',
			exp: '',
			cvv: '',
			billingZip: '',
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
		if (this.state.cc.length > 0 && this.state.exp.length > 0 && this.state.cvv.length > 0) {
			this.setState({
				clicked: true,
			});
			fetch('http://localhost:3000/purchase', {
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
			alert('Need correct name, email or password');
		}
	}

	render() {
		return this.state.clicked ? (
			<Confirmation insertId={this.state.insertId} />
		) : (
			<div style={{ width: '60%', marginLeft: '15px' }}>
				<form className='ui form'>
					<h2>Please Enter Billing Information</h2>
					<div className='field required'>
						<label>Credit Card #:</label>
						<input type='text' name='cc' placeholder='1234567890' value={this.state.cc} onChange={this.handleChange} required />
					</div>
					<div className='equal width fields'>
						<div className='field required'>
							<label>Expiration Date: </label>
							<input type='text' name='exp' placeholder='11/11' value={this.state.exp} onChange={this.handleChange} required />
						</div>
						<div className='field required'>
							<label>CVV: </label>
							<input type='text' name='cvv' value={this.state.cvv} onChange={this.handleChange} required />
						</div>
						<div className='field required'>
							<label>Billing Zip Code: </label>
							<input type='text' name='billingZip' value={this.state.billingZip} onChange={this.handleChange} required />
						</div>
					</div>
					<button type='submit' className='ui button' onClick={this.handleClick}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

export default Form3;
