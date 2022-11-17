import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getMyNftByTokenAddressAndTokenId = async (token,tokenAddress,tokenId) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getMyNftByTokenAddressAndTokenId, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
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