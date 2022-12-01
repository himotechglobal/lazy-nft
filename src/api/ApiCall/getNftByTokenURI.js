import axios from "axios";

export const getUserNFTByTokenURI = async (tokenURI) => {
  const tokenUri=tokenURI.replace("ipfs://","https://wizard.infura-ipfs.io/ipfs/")
    try {
      const { data } = await axios({
        method:'GET',
        url:tokenUri, 
        headers:{
          origin:"http://localhost:3000"
        }
    });
    return data;
    } catch (error) {
      // console.log(error,"hk");
    }
};
