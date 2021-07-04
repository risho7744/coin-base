import React from 'react';
import logo from '../img/logo.svg';
import './Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='__footer__'>
				<div className='footer__sectionOne'>
					<img src={logo} alt='logo' />
					<select className='form-select'>
						<option value='English' selected>
							English
						</option>
						<option value='English' selected>
							English
						</option>
						<option value='English' selected>
							English
						</option>
						<option value='English' selected>
							English
						</option>
						<option value='English' selected>
							English
						</option>
					</select>
					<div className='footer__brandInfo'>
						<p>© 2021 Coinbase</p>
						<p>Blog • Twitter • Facebook</p>
					</div>
				</div>
				<div className='footer__menu'>
					<div className='footer__sectionTwo'>
						<div>
							<h2>Company</h2>
							<p>About</p>
							<p>Careers</p>
							<p>Affiliates</p>
							<p>Blog</p>
							<p>Press</p>
							<p>Investors</p>
							<p>Legal & privacy</p>
							<p>Cookie policy</p>
						</div>
						<div>
							<h2>Learn</h2>
							<p>Browse crypto prices</p>
							<p>Crypto basics</p>
							<p>Tips & tutorials</p>
							<p>Market update</p>
							<p>What is Bitcoin</p>
							<p>What is crypto</p>
							<p>What is blockchain</p>
							<p>How to setup a crypto wallet</p>
							<p>How to send crypto</p>
							<p>Taxes</p>
						</div>
					</div>
					<div className='footer__sectionThree'>
						<div>
							<h2>Individuals</h2>
							<p>Buy & sell</p>
							<p>Earn free crypto</p>
							<p>Wallet</p>
							<p>Card</p>
						</div>
						<div>
							<h2>Businesses</h2>
							<p>Prime</p>
							<p>Custody</p>
							<p>Asset Hub</p>
							<p>Commerce</p>
						</div>
						<div>
							<h2>Developers</h2>
							<p>Coinbase Cloud</p>
							<p>Connect</p>
							<p>Commerce</p>
							<p>Pro</p>
							<p>Bison Trails</p>
							<p>WalletLink</p>
							<p>Rosetta</p>
							<p>USDC</p>
						</div>
					</div>
					<div className='footer__sectionFour'>
						<div>
							<h2>Support</h2>
							<p>Help center</p>
							<p>Contact us</p>
							<p>Creat account</p>
							<p>ID verification</p>
							<p>Account information</p>
							<p>Payment methods</p>
							<p>Account access</p>
							<p>Support cypto</p>
							<p>Supported country</p>
							<p>Status</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
