import React from 'react';
import banner_img_2 from '../img/banner_img_2.webp';
import './Banner.css';

function Banner() {
	return (
		<div className='banner container-fluid'>
			<div className=' banner__content row'>
				<div className='banner__left col'>
					<h2 className='mb-3'>
						Earn up to $28 worth
						<br /> of crypto
					</h2>

					<p>
						Discover how specific cryptocurrencies work — and
					</p>
					<p className='mb-3'>
						get a bit of each crypto to try out for yourself.
					</p>
					<div>
						<button type='button' className='btn'>
							Start earning
						</button>
					</div>
				</div>
				<div className='banner__right col p-0'>
					<img src={banner_img_2} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Banner;
