import React, { useState, useEffect } from 'react'
// import 'react-best-tabs/dist/index.css';
import Header3 from '../header3'
import createac from '../../images/createac.png'
import wallet from '../../images/wallet.png'
import share from '../../images/share.png'
import CoinComp from '../explore/CoinComp'



function Explore() {
	const [showone, setShowone] = useState(true);

	const handleshowone = () => {
		setShowone(showone ? false : true);
	}
	return (
		<div>
			<div>
				<Header3 />
			 
				<CoinComp />
			 
			</div>
		</div>
	);
}


export default Explore;