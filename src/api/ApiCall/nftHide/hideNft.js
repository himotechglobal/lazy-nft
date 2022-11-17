import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const hideNft = async ({token,tokenAddress,tokenId}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.hideNft, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:{
            tokenAddress:tokenAddress,
            tokenId:tokenId
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};