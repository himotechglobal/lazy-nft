import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useState } from 'react';
import Popup from './Popup';



export default function CoinComp() {

    const [isEthereumChecked, setIsEthereumChecked] = useState(true);
    const [isPolygonChecked, setIsPolygonChecked] = useState(true);
    const [isSolanaChecked, setIsSolanaChecked] = useState(true);
    const [isWaxChecked, setIsWaxChecked] = useState(true);
    const [isTezosChecked, setIsTezosChecked] = useState(true);

    return (
      <div>
          <div className='coincomp-wrp'>

<FormGroup>
    <div className='container'>
        <div className='coin-list'>
            <FormControlLabel
                control={
                    <Checkbox onChange={() => setIsEthereumChecked(!isEthereumChecked)} checked={isEthereumChecked} />
                }
                label="Ethereum"
            />
            <FormControlLabel
                control={
                    <Checkbox onChange={() => setIsPolygonChecked(!isPolygonChecked)} checked={isPolygonChecked} />
                }
                label="Polygon"
            />
            <FormControlLabel
                control={
                    <Checkbox onChange={() => setIsSolanaChecked(!isSolanaChecked)} checked={isSolanaChecked} />
                }
                label="Solana"
            />
            <FormControlLabel
                control={
                    <Checkbox onChange={() => setIsWaxChecked(!isWaxChecked)} checked={isWaxChecked} />
                }
                label="Wax"
            />
            <FormControlLabel
                control={
                    <Checkbox onChange={() => setIsTezosChecked(!isTezosChecked)} checked={isTezosChecked} />
                }
                label="Tezos"
            />
        </div>
    </div>


    {isEthereumChecked &&
        <div>
            <section id='coin-section'>
                <div className='container'>

                    <div id='ethereum-box'>
                        <div className='ethereum-hding'>
                            <h1>Featured Ethereum NFTs</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>

                               <a href='/productSimilar'>
                               <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/oeuXCLKDwB76hJOnSNdDYgTJOtZuQv70iLkCI7kzbemN0b8rc4ANA8ft2RpqEeTmTgcm484QkKflXasU2KjwY4IXKstCCMV1GHN1" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/eXsUaCoMEsyVQqHef6h7bCjQFutUDTls3ygToKCOIzYT660QaUYUkEVogup4x1STdiiCjKqboYzZ6iPP0PhJUQ2CNHTsaGPxbRv8" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/avZaPv5vb9pAFnTfnsfyLeZgU0Pd83sZqoinB1oQ0Oidnnxov8tkGp5bou9tmuxacOjMWBvacPSKoWkkBGkjet66fJt2NFU_dfvBnYc" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                    <div id='ethereum-box'>
                         
                        <div className='row'>
                            <div className='col-lg-4'>

                               <a href='/productSimilar'>
                               <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/GYOfiGr1kmPgAAmxXGnNRV6hj9M_a0Z2Vt2zDHfDGnSE2ytLeGRX4rlEJnTt7o97s8KRkaWnst0sG4tUqJw6XCO3eSwC25Xtluy3Zw" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/ziG_pRjQfaKeWSLynRO5NkBsSTXhV2E0mCBXgUj-cirOxUyBpLDULaMtq13zWgDFKEY-O46-MCTytyvQ1D8Zl48dBKbUN6MkXznX" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/J77suY331NNIX_uaemxKgEVInhXYahCK-UI0Fx-F9FHikxS2-89sjG08Cm7kOgqJpZzd9eD42cU8U81Fctf59V0PB0Sm7yDcw--B" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }


    {isPolygonChecked &&
        <div>
            <section id='coin-section'>
                <div className='container'>

                    <div id='ethereum-box'>
                        <div className='ethereum-hding'>
                            <h1>Featured Polygon NFTs</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/nXRYmQhyreLR5FhVLSWoTowWOXJAwc0KU5F4tI6I64l-n8DvlSdI6bT8P7Lqsqj6bh1GU815WfBLCynu3Fw8lG3v7x9ikULu1gl7" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/eXsUaCoMEsyVQqHef6h7bCjQFutUDTls3ygToKCOIzYT660QaUYUkEVogup4x1STdiiCjKqboYzZ6iPP0PhJUQ2CNHTsaGPxbRv8" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/us9D6ZL5SpXa2sGq_L1hTHjylBAeOmeY9Ko6rHe2A6YJcX1npm4R7P_V_X78WPeKxKNuQN3l3ANSD-7RGwBF6FqPPUhS9cW6ekF-WA" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }

    {isSolanaChecked &&
        <div>
            <section id='coin-section'>
                <div className='container'>

                    <div id='ethereum-box'>
                        <div className='ethereum-hding'>
                            <h1>Featured Solana NFTs</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/oeuXCLKDwB76hJOnSNdDYgTJOtZuQv70iLkCI7kzbemN0b8rc4ANA8ft2RpqEeTmTgcm484QkKflXasU2KjwY4IXKstCCMV1GHN1" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/eXsUaCoMEsyVQqHef6h7bCjQFutUDTls3ygToKCOIzYT660QaUYUkEVogup4x1STdiiCjKqboYzZ6iPP0PhJUQ2CNHTsaGPxbRv8" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/avZaPv5vb9pAFnTfnsfyLeZgU0Pd83sZqoinB1oQ0Oidnnxov8tkGp5bou9tmuxacOjMWBvacPSKoWkkBGkjet66fJt2NFU_dfvBnYc" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }

    {isWaxChecked &&
        <div>
            <section id='coin-section'>
                <div className='container'>

                    <div id='ethereum-box'>
                        <div className='ethereum-hding'>
                            <h1>Featured Wax NFTs</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://ipfs.ledgerwise.io/ipfs/QmRD2ahnfvhiPViRqgmMF8MA6UYYYgt6RXwTdyysrELrcz/RF062RicFlair.png" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/HE-FSdTiXIryy0Mqhvh3vEGzYekR9xFUn1qudEsq3Kg1rAxdijg_LqPw-s7258I94W7j5sipUORWsjEnhYFX_rKvHHWOEEaJL0ZgNg" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                               <a href='/productSimilar'>
                               <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/ywJCPh8f3W2cwH70isIBHu0BhrMHUjimX5uS4_AD33og8ayZ1m1sTyf9J9l-pVnMmV0cdOJ7jzWL67GFsHO7gxEZMIk_Mc_Ep2eX8Q" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                    
                    <div id='ethereum-box'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/agM6t8PlKzh9-9usgcePDnaCBRjtL_-DIvzzQyKHbMqoGR-yfKfOfft5f45xTRxZWGks8t5J4h76oND83oyGRSol9HYuVF4NyeAQxQ" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/6f_XBgnVIgo_wow6qjjvvTqhdCvl-jnmwCE5lQO9cuFgBM-w0pVW4sdvTtfdyktlhkOjrqbeDXYO4eOmmPc5lGFJGF1_SxzmvViicg" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                               <a href='/productSimilar'>
                               <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/oCg11otfCJqo9N1rP06MgjYg4phNyjf5_tQR1jX4sHgZ839NRqCgaVHUEgr_GoCzw7uI_bFVrwCzamiGT5YN0cnyXCdbrRopC9o9Wg" alt=""></img>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }

    {isTezosChecked &&
        <div>
            <section id='coin-section'>
                <div className='container'>

                    <div id='ethereum-box'>
                        <div className='ethereum-hding'>
                            <h1>Featured Tezos NFTs</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://ipfs-resizer.ledgerwise.io/api/v1/resized?cid=zdj7WYXCumgadYWmRkYpU2RYKXmJA8LtPuUXxpuTVyiEC4qW6&amp;size=370" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">LaMelo Ball Collectibles, Type: Blue Nep...</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by ajvchuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <a href='/productSimilar'>
                                <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/ww0NCY073t8Wys8tKUUcnibLTWj7g3JWMc23CSAnR_hjECcTJ6c4XYU5vymtUxwFfbI_qq3OcvskavyDjvQNQApJUCd_I2IO1044XA" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">MG_VAULT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                               <a href='/productSimilar'>
                               <div class="NFTbox clickable">
                                    <div className='nftimg'>
                                    <img class="image" src="https://lh3.googleusercontent.com/CrOnfbs247q2on_kDGWDj0Wy3_fUOfLveCDvpecXIA-GU9VljTKB5IPHQWstLLLDl0np8LBj5N3d7NeKW2bIDDBVl7EqkP8bfzBbST0" alt=""/>
                                        <div class="info">
                                            <div className='nftbox-bcont'>
                                                <h3 class="name">BoredApeYachtClub</h3>
                                                <div className='nftbx-butn'>
                                                    <a href="#">by Dawg-Vault</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </a>
                                <Popup />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    }

</FormGroup>
</div>
      </div>
    );
}
