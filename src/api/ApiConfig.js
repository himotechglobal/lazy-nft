// const url = "http://172.16.1.240:8008/";
const url = "http://localhost:5000";
// const url ="https://d2ugm2w8bdhvj3.cloudfront.net"

const ApiConfigs = {
  login: `${url}/api/v1/profile/login`,
  signup: `${url}/api/v1/profile/signup`,
  viewProfile: `${url}/api/v1/profile/viewProfile`,
  editProfile: `${url}/api/v1/profile/editProfile`,
  viewWallet: `${url}/api/v1/userWallet/view`,
  addWallet:`${url}/api/v1/userWallet/add`,
  removeWallet:`${url}/api/v1/userWallet/remove/`,
  updateProfilePic:`${url}/api/v1/profile/updateProfilePic`,
  addorUpdateNftCollection:`${url}/api/v1/nftCollection/addorUpdate`,
  getAllNftCollection:`${url}/api/v1/nftCollection/getAllNft`,
  getMyNftCollection:`${url}/api/v1/nftCollection/getMyNft`,
  getMyNftByTokenAddressAndTokenId:`${url}/api/v1/nftCollection/getMyNftByTokenAddressAndTokenId`,
  hideNft:`${url}/api/v1/hideNft/hide`,
  unhideNft:`${url}/api/v1/hideNft/unhide`,
  getAllHideNfts:`${url}/api/v1/hideNft/getAllHideNft`,
  pinnedNft:`${url}/api/v1/pinnedNft/pinned`,
  unpinnedNft:`${url}/api/v1/pinnedNft/unpinned`,
  getAllPinnedNfts:`${url}/api/v1/pinnedNft/getAllPinnedNft`,
  getUserNFT:`https://deep-index.moralis.io/api/v2/`
};

export default ApiConfigs;