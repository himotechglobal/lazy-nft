import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const pinnedNft = async ({token,tokenAddress,tokenId}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.pinnedNft, 
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