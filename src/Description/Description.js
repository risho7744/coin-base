import React from 'react';
import './Description.css';
import img_1 from '../img/img_1.png';
import img_2 from '../img/img_2.png';
import img_3 from '../img/img_3.png';
import img_4 from '../img/img_4.png';
import description from '../img/description.webp';

function Description() {
	return (
		<div className='description'>
			<div className='description__heading'>
				<h2>Create your cryptocurrency portfolio today</h2>

				<p>
					Coinbase has a variety of features that make it the
					best place to start trading
				</p>
			</div>
			<div className='description__details'>
				<div className='section__left'>
					<div className='small__description'>
						<img src={img_1} alt='image_1' />
						<div className='__headings__'>
							<h2>Manage your portfolio</h2>
							<p>
								Buy and sell popular digital currencies,
								<br />
								keep track of them in the one place.
							</p>
						</div>
					</div>
					<div className='small__description'>
						<img src={img_2} alt='image_2' />
						<div className='__headings__'>
							<h2>Recurring Buys</h2>
							<p>
								Invest in cryptocurrency slowly over
								time
								<br /> by scheduling buys daily, weekly,
								or
								<br /> monthly.
							</p>
						</div>
					</div>
					<div className='small__description'>
						<img src={img_3} alt='image_3' />
						<div className='__headings__'>
							<h2>Vault protection</h2>
							<p>
								For added security, store your funds in
								a<br /> vault with time delayed
								withdrawals.
							</p>
						</div>
					</div>
					<div className='small__description'>
						<img src={img_4} alt='image_4' />
						<div className='__headings__'>
							<h2>Mobile apps</h2>
							<p>
								Stay on top of the markets with the
								<br />
								Coinbase app for{' '}
								<span className='text-primary'>
									Android
								</span>{' '}
								or{' '}
								<span className='text-primary'>
									iOS
								</span>
								.
							</p>
						</div>
					</div>
				</div>
				<div className='section__right'>
					<img src={description} alt='Portfolio' />
				</div>
			</div>
		</div>
	);
}

export default Description;
