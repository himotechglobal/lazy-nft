import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllPinnedNfts = async (token) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllPinnedNfts, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};