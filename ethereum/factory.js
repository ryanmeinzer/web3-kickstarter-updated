import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xeE6161A08c1be44e33105502daB02a76d1c673A0"
);

export default instance;
