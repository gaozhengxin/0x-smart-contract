//const Migrations = artifacts.require("Migrations");
const WETH9 = artifacts.require("WETH9");
const ZRXToken = artifacts.require("ZRXToken");
const ERC20Proxy = artifacts.require("ERC20Proxy");
const ERC721Proxy = artifacts.require("ERC721Proxy");
const Exchange = artifacts.require("Exchange");
const Forwarder = artifacts.require("Forwarder");
const OrderValidator = artifacts.require("OrderValidator");
const AssetProxyOwner = artifacts.require("AssetProxyOwner");
const OrderMatcher = artifacts.require("OrderMatcher");

module.exports = function(deployer) {

  //deployer.deploy(WETH9);

  //deployer.deploy(ZRXToken);

  //deployer.deploy(ERC20Proxy);

  //deployer.deploy(ERC721Proxy);

  // param0 zrx token address
  //deployer.deploy(Exchange, '0x1F536aaFCF840F8e83ddFbB37db955D1eBB16383');

  // param0 []
  // param1 []
  // param2
  // param3
  //deployer.deploy(AssetProxyOwner, ["0x3A1b3B81Ed061581558a81F11d63E03129347437"], ["0x0eF2aCBbe8191C2d3dDacf2fCc6560e098fF3D23","0xE3816858dd193dbC5AA3388513D7809ca3cF2259"], '1', '1');

  // param0 exchange contract address
  // param1 zrx token address
  //deployer.deploy(OrderValidator,'0x89a490a8d415a093485111813747016e9bF254B5','0x1F536aaFCF840F8e83ddFbB37db955D1eBB16383');

  // param0 exchange contract address
  // param1 zrx token address
  // param2 weth token address
  //deployer.deploy(Forwarder,'0x89a490a8d415a093485111813747016e9bF254B5', '0x1F536aaFCF840F8e83ddFbB37db955D1eBB16383','0x118460d1B9A07C7F1e1f71146EFDdE0a3F58F459');

  //deployer.deploy(Forwarder);

  // param0 exchange contract address
  //deployer.deploy(OrderMatcher, "0x89a490a8d415a093485111813747016e9bF254B5");
};
