// const url = "http://172.16.1.240:8008/";
const url = "http://localhost:5000";
// const url ="https://d2ugm2w8bdhvj3.cloudfront.net"


const ApiConfigs = {
  login: `${url}/api/v1/profile/login`,
  signup: `${url}/api/v1/profile/signup`,
  forget:`${url}/api/v1/profile/forget`,
  reset:`${url}/api/v1/profile/reset`,
  viewProfile: `${url}/api/v1/profile/viewProfile`,
  editProfile: `${url}/api/v1/profile/editProfile`,
  viewWallet: `${url}/api/v1/userWallet/view`,
  addWallet:`${url}/api/v1/userWallet/add`,
  removeWallet:`${url}/api/v1/userWallet/remove/`,
  updateProfilePic:`${url}/api/v1/profile/updateProfilePic`,
  addorUpdateNftCollection:`${url}/api/v1/nftCollection/addorUpdate`,
  updateNftNameOrDescription:`${url}/api/v1/nftCollection/updateNftNameOrDescription`,
  getAllNftCollection:`${url}/api/v1/nftCollection/getAllNft`,
  getMyNftCollection:`${url}/api/v1/nftCollection/getMyNft`,
  getNftByNftCollectionId:`${url}/api/v1/nftCollection/getNftByNftCollectionId`,
  getAllNftByUserName:`${url}/api/v1/nftCollection/getAllNftByUserName`,
  hideToggleNft:`${url}/api/v1/nftCollection/hideToggleNft`,
  getAllHideNft:`${url}/api/v1/nftCollection/getAllHideNft`,
  pinnedToggleNft:`${url}/api/v1/nftCollection/pinnedToggleNft`,
  getAllPinnedNft:`${url}/api/v1/nftCollection/getAllPinnedNft`,
  toggleLike:`${url}/api/v1/nftCollection/toggleLike`,
  mostLikeNft:`${url}/api/v1/nftCollection/mostLikeNft`,
  mostViewNft:`${url}/api/v1/nftCollection/mostViewNft`,
  recentlyListedNft:`${url}/api/v1/nftCollection/recentlyListedNft`,
  // getUserNFT:`https://deep-index.moralis.io/api/v2/`
};

export default ApiConfigs;