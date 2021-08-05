import Form1 from './form1.js';

class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		};
		this.checkoutClick = this.checkoutClick.bind(this);
	}

	checkoutClick() {
		this.setState({
			clicked: true,
		});
	}

	render() {
		return this.state.clicked ? (
			<Form1 />
		) : (
			<div>
				<h3>If You're Ready...</h3>
				<button type='submit' className='ui button' onClick={this.checkoutClick}>
					Checkout
				</button>
			</div>
		);
	}
}

export default Checkout;
