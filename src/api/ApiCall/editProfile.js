import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const editProfile = async ({token,profilePic,bio}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.editProfile, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:{
            profilePic:profilePic,
            bio:bio
        }
    });
    console.log(data);
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};