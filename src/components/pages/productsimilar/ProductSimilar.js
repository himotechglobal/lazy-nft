import { useState } from "react";
import Header2 from '../header2'
import Popup from "../home/Popup";
import Social from '../Social'

const ProductSimilar = () => {
    return (
        <div>
            <Header2 />
            <section id="similarpage">
                <div className="container">
                    <div className="poster">
                        <video class="detail-video" poster="https://lh3.googleusercontent.com/oeuXCLKDwB76hJOnSNdDYgTJOtZuQv70iLkCI7kzbemN0b8rc4ANA8ft2RpqEeTmTgcm484QkKflXasU2KjwY4IXKstCCMV1GHN1" playsinline="" controls=""><source src="https://client-metadata.ether.cards/embed/lamelo/1857" /></video>
                    </div>
                </div>
            </section>

            <section id="similarbtm-wrp">
                <div className="container">
                    <div className="similarbtm">
                        <h1>LaMelo Ball Collectibles, Type: Blue Neptune, ID:1857</h1>
                        <p>LaMelo Ball Collectibles contain supercharged NFTs tethered to NBA phenom LaMelo Ball’s statistics, awards, and highlights. Owners of the NFTs will be entered into verifiably random draws to win never-before-seen memorabilia, participate in Melo’s endorsement deals, and unlock VIP access to an exclusive chat group with Melo himself.</p>
                    </div>
                    <div className="similarbtm-butn-wrp">
                        <div className="openseabutn">
                            <a href="https://opensea.io/assets/ethereum/0x139b522955d54482e7662927653abb0bfb6f19ba/1857" target="_blank">View on OpenSea</a>
                        </div>
                        <div className="etherscanbutn">
                            <a href="https://etherscan.io/nft/0x139b522955d54482e7662927653abb0bfb6f19ba/1857" target="_blank">View on Etherscan</a>
                        </div>
                    </div>

                    <div id='ethereum-box'>
                        <div className='similar-hding'>
                            <h1>Similar NFTs 🎩</h1>
                        </div>
                        <div className='row'>

                            <div className='col-lg-4'>

                                <a href="/productSimilar">
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

                                <a href="/productSimilar">
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
                                <a href="/productSimilar">
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
                    <div className="similarbtm-butn-wrp">
                        <div className="bizarroworldbutn">
                            <a href="/bizardworld">BizarroWorld</a>
                        </div>
                    </div>
                    <Social />
                </div>
            </section>
        </div>
    )
}


export default ProductSimilar;