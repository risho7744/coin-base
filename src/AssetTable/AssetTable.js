import React from 'react';
import './AssetTable.css';
import bitcoin from '../img/bitcoin.png';
import ethereum from '../img/ethereum.png';
import bitcoinCash from '../img/bitcoinCash.png';
import litcoin from '../img/litcoin.png';

function AssetTable() {
	return (
		<div className='asset__table'>
			<table className='table table-bordered table-hover'>
				<thead>
					<tr>
						<th className='py-3 pe-4'>#</th>
						<th className='py-3 pe-4'>Name</th>
						<th className='py-3 pe-4'>Price</th>
						<th className='py-3 pe-4'>Change</th>
						<th className='py-3 pe-4'>Chart</th>
						<th className='py-3 pe-4'>Trade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<img
								className='img'
								src={bitcoin}
								alt='bitcoin'
							/>
							<span className='px-3'>Bitcoin</span>
							<span className='px-3 text-muted'>BTC</span>
						</td>
						<td>LKR 6,630,679.47</td>
						<td className='text-danger'>2.56%</td>
						<td>chart</td>
						<td>
							<button className='btn btn-success w-100'>
								Buy
							</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							<img
								className='img'
								src={ethereum}
								alt='bitcoin'
							/>
							<span className='px-3'>Bitcoin</span>
							<span className='px-3 text-muted'>BTC</span>
						</td>
						<td>LKR 409,540.91</td>
						<td className='text-success '>2.56%</td>
						<td>chart</td>
						<td>
							<button className='btn btn-success w-100'>
								Buy
							</button>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							<img
								className='img'
								src={bitcoinCash}
								alt='bitcoin'
							/>
							<span className='px-3'>Bitcoin</span>
							<span className='px-3 text-muted'>BTC</span>
						</td>
						<td>LKR 96,526.75</td>
						<td className='text-success '>2.56%</td>
						<td>chart</td>
						<td>
							<button className='btn btn-success w-100'>
								Buy
							</button>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							<img
								className='img'
								src={litcoin}
								alt='bitcoin'
							/>
							<span className='px-3'>Bitcoin</span>
							<span className='px-3 text-muted'>BTC</span>
						</td>
						<td>LKR 26,500.33</td>
						<td className='text-danger'>2.56%</td>
						<td>chart</td>
						<td>
							<button className='btn btn-success w-100'>
								Buy
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default AssetTable;
