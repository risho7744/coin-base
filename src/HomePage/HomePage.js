import React from 'react';
import './HomePage.css';
import blue_bitcoin from '../img/blue_bitcoin.png';
import banner_img_1 from '../img/banner_img_1.png';

function HomePage() {
	return (
		<div className='home__page'>
			<div className='banner__left'>
				<div>
					<span>
						<img
							style={{
								width: '24px',
								height: '24px',
								margin: '8px',
							}}
							src={blue_bitcoin}
							alt='img'
						/>
						<a href='https://www.coinbase.com/'>
							<strong> Jump start your portfolio</strong>
						</a>
					</span>
				</div>
				<div>
					<h1>
						Jump start
						<br />
						your crypto
						<br />
						portfolio
					</h1>
				</div>
				<div>
					<p className='h5'>
						Coinbase is the easiest place to buy and sell
						<br />
						crypto currency. Sign up and get started today.
					</p>
				</div>
				<form>
					<div>
						<input
							className='form-control'
							placeholder='Email address'
							style={{
								padding: '22px',
								marginRight: '16px',
								borderRadius: '4px',
								borderColor: '#e1e4e6',
								height: '66px',
								width: '280px',
							}}
							type='text'
						/>
						<button
							style={{
								padding: '20px',
								height: '66px',
								width: '189px',
							}}
							className='btn'
						>
							Get Started
						</button>
					</div>
				</form>
			</div>
			<div className='banner__right'>
				<img src={banner_img_1} alt='banner_image' />
			</div>
		</div>
	);
}

export default HomePage;
