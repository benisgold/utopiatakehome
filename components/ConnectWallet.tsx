import { useEthers } from "@usedapp/core";
import Button from "./primitives/Button";

const ConnectWallet: React.FC = () => {
  //implement logic and button to connect wallet to dapp
  const { activateBrowserWallet } = useEthers();
  return (
    <div style={{"textAlign": "right"}}>
      <Button onClick={() => activateBrowserWallet()}>Connect Wallet</Button>
    </div>  
  );
};
export default ConnectWallet;
