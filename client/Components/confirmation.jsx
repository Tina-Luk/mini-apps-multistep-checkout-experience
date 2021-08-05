import Checkout from './checkout.js';

class Confirmation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			name: '',
			email: '',
			address: '',
			cityState: '',
			phoneNumber: '',
			cc: '',
			billingZip: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch(`http://localhost:3000/user/${this.props.insertId}`)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					name: result[0].name,
					email: result[0].email,
					address: result[0].streetAddress,
					cityState: result[0].cityStateZip,
					phoneNumber: result[0].phoneNumber,
					cc: result[0].cc,
				});
			});
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			clicked: true,
		});
	}

	render() {
		return this.state.clicked ? (
			<Checkout />
		) : (
			<div className='ui success message'>
				<div className='header'>Confirm Information</div>
				<br />
				Name: {this.state.name} <br />
				Email: {this.state.email} <br />
				Address: {this.state.address} {this.state.cityState} <br />
				Phone Number: {this.state.phoneNumber} <br />
				Last 4-digit on Card: XXXX-{this.state.cc.toString().substr(-4)} <br />
				<br />
				<button type='submit' className='ui button' onClick={this.handleClick}>
					Purchase
				</button>
			</div>
		);
	}
}

export default Confirmation;
