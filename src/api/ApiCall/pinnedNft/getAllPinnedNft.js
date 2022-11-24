import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllPinnedNft = async (token) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllPinnedNft, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};