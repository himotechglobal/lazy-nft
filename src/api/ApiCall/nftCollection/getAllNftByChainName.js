import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllNftByChainName = async (page,chainName) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllNftByChainName, 
        params:{
            page:page,
            chainName:chainName
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};