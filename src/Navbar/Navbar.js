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
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Price</span>
						</div>
					</a>
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Learn</span>
						</div>
					</a>
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Individuals</span>
						</div>
					</a>
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Businesses</span>
						</div>
					</a>
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Developers</span>
						</div>
					</a>
					<a href='https://www.coinbase.com/'>
						<div>
							<span>Company</span>
						</div>
					</a>
				</nav>
			</div>
			<div className='menu__right'>
				<span
					style={{
						padding: '18px',
						fontSize: '14px',
						fontWeight: '500',
					}}
				>
					Sign in
				</span>
				<button type='button' className='btn'>
					Get started
				</button>
			</div>
		</div>
	);
}

export default Navbar;
