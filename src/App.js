import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import AssetTable from './AssetTable/AssetTable';
import Description from './Description/Description';
import Trust from './Trust/Trust';
import Values from './Values/Values';
import Statistics from './Statistics/Statistics';
import HowTo from './HowTo/HowTo';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function App() {
	return (
		<div className='app'>
			<div>
				<Navbar />
			</div>
			<div>
				<HomePage />
			</div>
			<div>
				<AssetTable />
			</div>
			<div>
				<Trust />
			</div>
			<div>
				<Description />
			</div>
			<div>
				<Values />
			</div>
			<div>
				<Statistics />
			</div>
			<div>
				<HowTo />
			</div>
			<div>
				<Banner />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
