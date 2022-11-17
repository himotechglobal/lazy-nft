import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const unhideNft = async ({token,tokenAddress,tokenId}) => {
    try {
      const { data } = await axios({
        method:'DELETE',
        url:ApiConfigs.unhideNft, 
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