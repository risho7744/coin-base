import React from 'react';
import './Trust.css';
import tr_img_1 from '../img/tr_img_1.svg';
import tr_img_2 from '../img/tr_img_2.svg';
import tr_img_3 from '../img/tr_img_3.svg';
import tr_img_4 from '../img/tr_img_4.svg';

function Trust() {
	return (
		<div className='trust'>
			<div className='trust__left'>
				<h2 style={{ marginBottom: '16px', lineHeight: '3rem' }}>
					Earn up to $28 worth <br />
					of crypto
				</h2>
				<p style={{ fontSize: '14px' }}>
					Discover how specific cryptocurrencies work — and{' '}
					<br />
					get a bit of each crypto to try out for yourself.
				</p>
				<div>
					<button className='btn btn-primary'>
						Start earning
					</button>
				</div>
			</div>
			<div className='trust__right'>
				<div className='right__details'>
					<div>
						<img src={tr_img_1} alt='' />

						<span className='h4'>BarnBridge</span>
						<span
							style={{
								fontSize: '18px',
								marginLeft: '18px',
							}}
						>
							BOND
						</span>
					</div>
					<div>
						<span className='earn text-success'>
							Earn $3 BOND
						</span>
					</div>
				</div>
				<div className='right__details'>
					<div>
						<img src={tr_img_2} alt='' />

						<span className='h4'>
							Amp{' '}
							<span
								style={{
									fontSize: '18px',
									marginLeft: '18px',
								}}
							>
								AMP
							</span>
						</span>
					</div>
					<div>
						<span className='earn text-success'>
							Earn $3 AMP
						</span>
					</div>
				</div>
				<div className='right__details'>
					<div>
						<img src={tr_img_3} alt='' />

						<span className='h4'>
							The Graph
							<span
								style={{
									fontSize: '18px',
									marginLeft: '18px',
								}}
							>
								GRT
							</span>
						</span>
					</div>
					<div>
						<span className='earn text-success'>
							Earn $3 GRT
						</span>
					</div>
				</div>
				<div className='right__details'>
					<div>
						<img src={tr_img_4} alt='' />

						<span className='h4'>
							Stellar Lumens{' '}
							<span
								style={{
									fontSize: '18px',
									marginLeft: '18px',
								}}
							>
								XLM
							</span>
						</span>
					</div>
					<div>
						<span className='earn text-success'>
							Earn $10 XLM
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trust;
