import { ImportsEngine } from "@openzeppelin/resolver-engine-imports";

const resolver = ImportsEngine();

resolver
  .require("@openzeppelin-solidity/contracts/ownership/Ownable.sol")
  .then(console.log)
  .catch(console.error);
