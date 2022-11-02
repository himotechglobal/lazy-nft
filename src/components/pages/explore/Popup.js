import { useState } from "react";
import { Link } from "react-router-dom";
import cancel from '../../images/cancel.svg'
import menuoption from '../../images/menuoption.svg'


const Popup = () => {
    const [dropdownopen, setDropdownopen] = useState(false);
    const [showoption, setShowoption] = useState(true);


    const handleShow = () => {
        setDropdownopen(true)
        setShowoption(false)
    }

    const handleHide = () => {
        setDropdownopen(false)
        setShowoption(true)
    }


    return (
        <div>
            <div className='top-popup'>
                {
                    dropdownopen &&
                    <div>
                        <div className="butnbg">
                            <button onClick={handleHide}><img src={cancel} /></button>
                        </div>
                        <div>
                            <div class="NFT-menu" >
                                <ul className="nftmenulist">
                                    <li><Link to="/productSimilar">RabbitHole</Link></li>
                                    <li><Link to="/productSimilar">BizarroWorld</Link></li>
                                    <li><a href="https://opensea.io/assets/ethereum/0x139b522955d54482e7662927653abb0bfb6f19ba/1857" target="_blank">View on OpenSea</a></li>
                                    <li><a href="https://etherscan.io/nft/0x139b522955d54482e7662927653abb0bfb6f19ba/1857" target="_blank">View on Etherscan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                {
                    showoption &&
                    <div className="butnbg">
                        <button onClick={handleShow}><img src={menuoption} /></button>
                    </div>
                }
            </div>
        </div>

    )
}


export default Popup;