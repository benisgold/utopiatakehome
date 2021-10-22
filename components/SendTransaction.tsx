import { formatEther, parseEther } from "@ethersproject/units";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useState } from "react";
import Button from "./primitives/Button";
import Input from "./primitives/Input";
import Text from "./primitives/Text";

const SendTransaction: React.FC = () => {
  const { account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  var displayBalance = <Text>Couldn't get ETH balance</Text>
  if (etherBalance != undefined) {
    displayBalance = <Text>ETH Balance: {formatEther(etherBalance)}</Text>
  }
  const [recipientAddress, setReciepientAddress] = useState("");
  const [amount, setAmount] = useState("");
  //implement logic to display address of logged in wallet
  //implement logic to display eth balance of logged in wallet
  //implement logic to take in an input of a wallet address and state to hold it
  //implement logic to take in an input of a amount to send and state to hold it
  //implement logic for the button to send a transaction with the current values of the wallet
  //address state and the amount state
  const { sendTransaction } = useSendTransaction();

  const handleClick = () => {
    try {
      sendTransaction({ to: recipientAddress, value: parseEther(amount) });
    } catch {}
  };

  return (
    <>
      {" "}
      <div>
        <div style={{"textAlign": "right"}}>
          <Text>Logged in as {account}</Text>
          <Button onClick={() => deactivate()}>Disconnect Wallet</Button>
        </div>
        <div style={{"textAlign": "center"}}>
          <br/>
          {displayBalance}
          <br/>
          <Input
            type="text"
            placeholder={"ETH to send"}
            onChange={(e) => setAmount(e.target.value)}
            style={{ alignSelf: "center" }}
          />
          <br/>
          <Input
            type="text"
            placeholder={"Recipient's address"}
            onChange={(e) => setReciepientAddress(e.target.value)}
          />
          <br/>
          <Button onClick={handleClick}>Send ETH</Button>
        </div>
      </div>{" "}
    </>
  );
};

export default SendTransaction;