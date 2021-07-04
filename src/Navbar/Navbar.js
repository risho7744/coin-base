import React from 'react';
import logo from '../img/logo.svg';
import './Navbar.css';

function Navbar() {
	return (
		<div className='navbarr'>
			<div className='logo'>
				<img src={logo} alt='Logo' />
			</div>
			<div className='menu'>
				<nav style={{ display: 'flex' }}>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Price</span>
						</a>
					</div>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Learn</span>
						</a>
					</div>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Individuals</span>
						</a>
					</div>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Businesses</span>
						</a>
					</div>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Developers</span>
						</a>
					</div>
					<div>
						<a href='https://www.coinbase.com/'>
							<span>Company</span>
						</a>
					</div>
				</nav>
			</div>
			<div className='menu__right'>
				<span>Sign in</span>
				<button type='button' className='btn'>
					Get started
				</button>
			</div>
		</div>
	);
}

export default Navbar;
