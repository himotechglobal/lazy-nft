import { useState } from "react";
import { Link } from "react-router-dom";
import Header2 from '../header2'
import Popup from "../home/Popup";
 

const BizardWorld = () => {
    return (
        <div>
            <Header2 />
            <section id="similarpage">
                <div className="container">
                    <div className="poster">
                        <img src="https://lh3.googleusercontent.com/eXsUaCoMEsyVQqHef6h7bCjQFutUDTls3ygToKCOIzYT660QaUYUkEVogup4x1STdiiCjKqboYzZ6iPP0PhJUQ2CNHTsaGPxbRv8"/>
                    </div>
                    <div className="similarbtm-butn-wrp">
                        <div className="moreinfobutn">
                            <Link to="/productSimilar">More Info</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="similarbtm-wrp">
                <div className="container">
                    <div id='ethereum-box'>
                        <div className='similar-hding'>
                            <h1>Opposite NFTs</h1>
                        </div>
                        <div className='row'>

                            <div className='col-lg-4'>

                                <Link to="/productSimilar">
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
                                </Link>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>

                            <Link to="/productSimilar">
                            <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/FPvfAcOH9uuc-zVKSAokr93t9t-UQEIdZhI_6S2nt2m2VRlKys9JOjlO1OIeUUMIqPxp-mNZQ8Yz0VNaVP9pZML3nll165Mp9Kow4w" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
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
                            </Link>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <Link to="/productSimilar">
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
                                </Link>
                                <Popup />
                            </div>

                        </div>
                    </div>
                    <div id='ethereum-box'>

                        <div className='row'>

                            <div className='col-lg-4'>

                               <Link to="/productSimilar">
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
                               </Link>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>

                                <a href="/bizardworld">
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/FPvfAcOH9uuc-zVKSAokr93t9t-UQEIdZhI_6S2nt2m2VRlKys9JOjlO1OIeUUMIqPxp-mNZQ8Yz0VNaVP9pZML3nll165Mp9Kow4w" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
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
                                <Link to="/bizardworld">
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
                                </Link>
                                <Popup />
                            </div>

                        </div>
                    </div>
                    <div id='ethereum-box'>

                        <div className='row'>

                            <div className='col-lg-4'>

                                <Link to="/bizardworld">
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
                                </Link>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>

                                <Link to="/bizardworld">
                                <div class="NFTbox clickable">
                                    <div>
                                        <video class="video" poster="https://lh3.googleusercontent.com/FPvfAcOH9uuc-zVKSAokr93t9t-UQEIdZhI_6S2nt2m2VRlKys9JOjlO1OIeUUMIqPxp-mNZQ8Yz0VNaVP9pZML3nll165Mp9Kow4w" playsinline="" autoplay="" loop=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
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
                                </Link>
                                <Popup />
                            </div>
                            <div className='col-lg-4'>
                                <Link to="/bizardworld">
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
                                </Link>
                                <Popup />
                            </div>

                        </div>
                    </div>
                    <div className="similarbtm-butn-wrp">
                        <div className="bizarroworldbutn">
                            <Link to="/productSimilar">RabbitHole</Link>
                        </div>
                    </div>
                  
                </div>
            </section>
        </div>
    )
}


export default BizardWorld;