import React from 'react';
import './Statistics.css';

function Statistics() {
	return (
		<div className='statistics'>
			<div className='__statistics__'>
				<div className='statistics__section'>
					<h2>$335B</h2>
					<p>Quarterly volume traded</p>
				</div>
				<div className='statistics__section'>
					<h2>100+</h2>
					<p>countries supported</p>
				</div>
				<div className='statistics__section'>
					<h2>56+M</h2>
					<p>Verified users</p>
				</div>
			</div>
		</div>
	);
}

export default Statistics;
