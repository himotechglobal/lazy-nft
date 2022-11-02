import React, { useState, useEffect } from 'react'
import Header3 from '../header3'
 


const HiddenNft = () => {
     
    return (
        <div>
            <div>
                <Header3 />
                <div className="myportfolio">
                    <div className="container">

                        <div className="edit-profile2 profilemr">
                            <p>@jasim's Hidden NFTs</p>
                        </div>
                        {/* <Selector/> */}
                        <div>
                            <h1>Hidden NFTs</h1>
                        </div>
                        <div className='notadd-w'>
                            <p>No hidden items available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HiddenNft;