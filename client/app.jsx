import Checkout from './Components/checkout.js';
// import '../node_modules/semantic-ui-css/semantic.min.css';

ReactDOM.render(
	<div style={{ width: '75%', marginLeft: '25px', marginTop: '25px' }}>
		<h1>Multistep Checkout Experience</h1>
		<div>
			<span style={{ color: 'pink' }}>
				<i className='fas fa-shopping-cart fa-7x'></i>
			</span>
		</div>
		<br />
		<Checkout name='Sara' />
	</div>,
	document.getElementById('app')
);
