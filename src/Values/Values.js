import React from 'react';
import './Values.css';
import img_11 from '../img/img_11.png';
import img_12 from '../img/img_12.png';
import img_13 from '../img/img_13.png';

function Values() {
	return (
		<div className='value'>
			<div className='value__heading'>
				<h2>The most trusted cryptocurrency platform</h2>
				<p>Here are a few reasons why you should choose Coinbase</p>
			</div>
			<div className='value__body'>
				<div className='value__content'>
					<img src={img_11} alt='' />
					<h2>Secure storage</h2>
					<p>
						We store the vast majority of the digital assets
						in secure offline storage.
					</p>
					<a href='https://www.coinbase.com/'>
						Learn how Coinbase keeps your funds safe and
						secure {'>'}
					</a>
				</div>
				<div className='value__content'>
					<img src={img_12} alt='' />
					<h2>Protected by insurance</h2>
					<p>
						Cryptocurrency stored on our servers is covered by
						our insurance policy.
					</p>
					<a href='https://www.coinbase.com/'>
						Learn how your crypto is covered by our insurance
						policy {'>'}
					</a>
				</div>
				<div className='value__content'>
					<img src={img_13} alt='' />
					<h2>Industry best practices</h2>
					<p>
						Coinbase supports a variety of the most popular
						digital currencies.
					</p>
					<a href='https://www.coinbase.com/'>
						Learn how we implement industry best practices for
						account security {'>'}
					</a>
				</div>
			</div>
		</div>
	);
}

export default Values;
