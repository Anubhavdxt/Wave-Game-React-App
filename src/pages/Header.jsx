import React from "react";
// import { ethers } from "ethers";
import "../App.css";

const Header = () => {
  const [currentAccount, setCurrentAccount] = React.useState("");

  // wallet connection logic
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Connect your metamask wallet with browser extension");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
	
  return (
    <>
	  <div className="mainContainer">
			<div className="dataContainer">
				<div className="header">
					Hola 👋 Amigos!
        		</div>

				<div className="bio">
					I'm <b>Anubhav</b>, a Full-stack JavaScript Developer.<br></br>Connect your Ethereum wallet and chat with me!
        		</div>
				{!currentAccount && (
			    <div className="same-row">
					<button className="waveButton" onClick={connectWallet}>
						Connect Wallet
          			</button>
				    <button className="waveButton" onClick={null}>
				      <b> Continue</b>
				    </button>
			    </div>
				)}
			</div>
		</div>
    </>
  );
};

export default Header;