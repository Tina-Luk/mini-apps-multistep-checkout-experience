import Form2 from './form2.js';

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			name: '',
			email: '',
			password: '',
			insertId: null,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	}

	handleClick(e) {
		e.preventDefault();
		if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
			this.setState({
				clicked: true,
			});
			fetch('http://localhost:3000/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(this.state),
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					this.setState({
						insertId: data,
					});
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
			<Form2 insertId={this.state.insertId} />
		) : (
			<div style={{ width: '60%', marginLeft: '15px' }}>
				<form className='ui form'>
					<h2>Please Enter User Information</h2>
					<div className='field required'>
						<label>Name: </label>
						<input type='text' name='name' placeholder='First and Last Name' value={this.state.name} onChange={this.handleChange} required />
					</div>
					<div className='field required'>
						<label>Email: </label>
						<input type='text' name='email' placeholder='abcd@efgh.com' value={this.state.email} onChange={this.handleChange} required />
					</div>
					<div className='field required'>
						<label>Password: </label>
						<input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} required />
					</div>
					<button type='submit' className='ui button' onClick={this.handleClick}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

export default Form1;
