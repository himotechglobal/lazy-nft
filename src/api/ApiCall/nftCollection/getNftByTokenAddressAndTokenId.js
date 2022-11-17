import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getNftByTokenAddressAndTokenId = async (tokenAddress,tokenId) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getNftByTokenAddressAndTokenId, 
        params:{
            tokenAddress:tokenAddress,
            tokenId:tokenId
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};