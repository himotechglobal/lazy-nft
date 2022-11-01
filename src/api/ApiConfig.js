// const url = "http://172.16.1.240:8008/";
const url = "http://localhost:5000";

const ApiConfigs = {
  login: `${url}/api/v1/profile/login`,
  signup: `${url}/api/v1/profile/signup`,
  viewProfile: `${url}/api/v1/profile/viewProfile`,
  editProfile: `${url}/api/v1/profile/editProfile`,
  uploadnft: `${url}api/v1/nft/uploadNFT`,
  addnft: `${url}api/v1/nft/addNft`,
  mynft: `${url}api/v1/nft/myNftList`,
  mycollection: `${url}api/v1/user/myCollectionList`,
  myprofile: `${url}api/v1/user/getUserProfile`,
  editprofile: `${url}api/v1/user/editProfile`,
  placeorder: `${url}api/v1/nft/placeOrder`,
  viewNftOrderById: `${url}api/v1/nft/viewNftOrderById`,
  createCollection: `${url}api/v1/user/createCollection`,
  viewnft: `${url}api/v1/nft/viewNft`,
  viewMyNft: `${url}api/v1/nft/viewMyNft`,
  orderlist: `${url}api/v1/nft/orderList`,
  collectionlist: `${url}api/v1/user/listCollection`,
  vieworder: `${url}api/v1/nft/viewOrder`,
  allcollection: `${url}api/v1/nft/listNftCollection`,
  addPhysicalnft: `${url}api/v1/nft/addPhysicalNft`,
  placebid: `${url}api/v1/nft/placeBid`,
  myorder: `${url}api/v1/nft/myOrderList`,
  placeorderwithcollection: `${url}api/v1/nft/placeOrderWithCollection`,
  placeorderwithoutcollection: `${url}api/v1/nft/placeOrderWithoutCollection`,
  sellOrder: `${url}api/v1/nft/sellOrder`,
  addStatusTracking: `${url}api/v1/user/addStatusTracking`,
  viewStatusTrackingBySeller: `${url}api/v1/user/viewStatusTrackingBySeller`,
  itemReceived: `${url}api/v1/user/itemReceived`,
  itemNotReceived: `${url}api/v1/user/itemNotReceived`,
  viewRating: `${url}api/v1/user/viewRating`,
  ratingOnNft: `${url}api/v1/user/ratingOnNft`,
  upVote: `${url}api/v1/user/upVote`, //
  downVote: `${url}api/v1/user/downVote`, //
  likeView: `${url}api/v1/nft/viewLike`,
  dislikeView: `${url}api/v1/nft/viewDisLike`,
  myBidlist: `${url}api/v1/nft/myBidList`,
  bidderList: `${url}api/v1/nft/bidderList`,
  acceptBid: `${url}api/v1/nft/acceptBid`,
  bidListByNft: `${url}api/v1/nft/bidListByNft`,
  purchasedNft: `${url}api/v1/nft/purchasedNft`,
  editStatusTracking: `${url}api/v1/user/editStatusTracking`,
  viewStatusTrackingByBuyer: `${url}api/v1/user/viewStatusTrackingByBuyer`,
  viewNftTransaction: `${url}api/v1/admin/viewNftTransaction`,
  physicalNftList: `${url}api/v1/nft/physicalNftList`,
  myOrderListOfBuyer: `${url}api/v1/nft/myOrderListOfBuyer`, ///api/v1/nft/myOrderListOfBuyer
  listCategory: `${url}/api/v1/admin/listCategory`, ///api/v1/nft/myOrderListOfBuyer/api/v1/admin/viewCategory
  viewCategory: `${url}/api/v1/admin/viewCategory`, ///api/v1/nft/myOrderListOfBuyer/api/v1/admin/viewCategory
  // /api/v1/user/listCollection
  listCollection: `${url}api/v1/user/listCollection`,
  globalSearch: `${url}api/v1/user/globalSearch`,

  listOrderNativeToken: `${url}/api/v1/nft/listOrderNativeToken`, ///api/v1/nft/myOrderListOfBuyer/api/v1/admin/viewCategory,,,category
};

export default ApiConfigs;