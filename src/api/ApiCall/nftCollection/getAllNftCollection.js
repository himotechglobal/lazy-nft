import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllNftCollection = async () => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllNftCollection, 

    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};