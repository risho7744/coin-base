import React from 'react';
import './HowTo.css';
import image_1 from '../img/image_1.png';
import image_2 from '../img/image_2.png';
import image_3 from '../img/image_3.png';

function HowTo() {
	return (
		<div className='howto'>
			<div className='__howto__'>
				<div className='howto__heading'>
					<h2>Get started in a few minutes</h2>
					<p>
						Coinbase supports a variety of the most popular
						digital currencies.
					</p>
				</div>
				<div className='howto__body'>
					<div>
						<img src={image_1} alt='' />
						<p>Create an account</p>
					</div>
					<div>
						<hr></hr>
					</div>
					<div>
						<img src={image_2} alt='' />
						<p>Link your bank account</p>
					</div>
					<div>
						<hr></hr>
					</div>
					<div>
						<img src={image_3} alt='' />
						<p>Start buying & selling</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowTo;
