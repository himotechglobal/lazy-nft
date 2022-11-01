import React, { useState, useEffect } from 'react'
// import 'react-best-tabs/dist/index.css';
import Header from '../header'
import createac from '../../images/createac.png'
import wallet from '../../images/wallet.png'
import share from '../../images/share.png'
import CoinComp from '../home/CoinComp'



function Home() {
	const [showone, setShowone] = useState(true);

	const handleshowone = () => {
		setShowone(showone ? false : true);
	}
	return (
		<div>
			<div>
				<Header />
				<section id='banner-section'>
					<div className='container'>
						<div className='bnr-hding'>
							<h1>The lazy way to show off your NFTs.</h1>
						</div>
						<div className='bnr-main-wrp'>
							<div className='row'>
								<div className='col-lg-4'>
									<div className='bnr-bx'>
										<img src={createac} />
										<h3>Create an account</h3>
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='bnr-bx bnr-bxres'>
										<img src={wallet} />
										<h3>Connect your wallets</h3>
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='bnr-bx bnr-bxres'>
										<img src={share} />
										<h3>Add your unique lazy.com URL to your Instagram and social media bios. Tell your friends!</h3>
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>
				<CoinComp />
			</div>
		</div>
	);
}


export default Home;