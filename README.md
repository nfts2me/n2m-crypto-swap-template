

# N2M Crypto Swap
An embedded widget to allow anyone to swap tokens within their website or app.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Demo

* Live demo: https://tools.nfts2me.com/demo

* Demo video:

[n2m-swap-widget-demo.webm](https://user-images.githubusercontent.com/109629895/226582688-2f8c79b7-1e6a-487a-8353-ac5bada3fa33.webm)


* Full demo video on YouTube:
https://www.youtube.com/watch?v=9lnukQYoWA8

The REPLIT TEMPLATE for a Next.js Application embedding the widget can be found here:
[Template @ Replit](https://replit.com/@agsola/n2m-crypto-swap-template) and [Template @ Github](https://github.com/nfts2me/n2m-crypto-swap-template/)

# Introduction

Introducing the **[N2M Crypto Swap Widget](https://tools.nfts2me.com/swap)**, a powerful and easy-to-use tool for exchanging cryptocurrencies right from your any website on desktop or mobile device. With support for multiple exchanges routing under the hood and a wide range of cryptocurrencies, the Crypto Swap Widget makes it simple to swap one crypto asset for another with just a few clicks.

## Features

1. Supports all the Major Networks supported by Alchemy (Mainnet and Testnets):
- Ethereum
- Polygon
- Optimism
- Arbitrum One
- Ethereum Goerli Testnet
- Polygon Mumbai Testnet

2. All wallets supported:
- Metamask
- Wallet Connect
- Coinbase
- Brave
- ...

3. Swap from native to ERC-20, from ERC-20 to native and ERC-20 to ERC-20.

4. Possibility to search for tokens or enter a custom one.

5. Show all of you balances and detects TX revertion prior to executing to get the best price with the lowest risk.

6. Checks the balance and allowance asking to approve if needed.

7. Easy to set up and integrate with just a few lines of code.

8. Customizable to your needs.

## Usage

Head to https://tools.nfts2me.com/swap and get the embeded code, which will be something like this:

```html
<iframe id='iframe-widget' src='https://tools.nfts2me.com/swap?widget=classic' style="height: 480px; width: 100%; border: none"></iframe>
```

As you can see it is pretty easy and straightforwards. You can change same values to adapt to your needs.
Furthemore, we've created an example of how to use it using NextJS and TailWinds.

Check the replit template for the Next.js Application embedding the widget:
[Template @ Replit](https://replit.com/@agsola/n2m-crypto-swap-template) and [Template @ Github](https://github.com/nfts2me/n2m-crypto-swap-template/)

## Screenshots

![image](https://user-images.githubusercontent.com/109629895/226583274-c82be4bb-66c9-40a4-ab4d-5cc521e5eb9c.png)

![image](https://user-images.githubusercontent.com/109629895/226583655-d166690c-b9b9-4728-a1e5-b20356685cda.png)

![image](https://user-images.githubusercontent.com/109629895/226583871-3ea09226-7e61-40f7-bf1c-173c4f111c1d.png)

![image](https://user-images.githubusercontent.com/109629895/226582948-2fcf1e30-f8d6-4890-aa53-f3f7525240ac.png)

![image](https://user-images.githubusercontent.com/109629895/226583384-75b72d7e-4601-414c-b511-d06fde005948.png)

![image](https://user-images.githubusercontent.com/109629895/226583517-04966bce-69d6-40ac-9e9a-e7d27173cd14.png)




## Tech Stack

**Backend:** React, NextJS

**Packages:** Alchemy SDK, Rainbowkit, Wagmi, Ethers.js

## How we built it?

As described above we've used NextJS framework as the base, levereging on Alchemy SDK and Wagmi for the Web 3 needs. 

There were several issues that we had to deal with to build the crypto swap, that we'll example in their own subsections.

### Balances
We wanted to show the user the balances of all of the ERC-20 he owned. To do that without using Alchemy, we should check an ERC-20 list and check all of them individually. Still, we couldn't assure that we were missing some of them. `alchemy_getTokenBalances` was very handy to fetch all user erc20 balances at once.

As we're using NextJS, we decided to use the hook "useSWR" to fetch the balances, which refetches as needed, and manually revalidate when a swap was done. 

### Allowance
When swapping an ERC-20 for another ERC-20 or for native we need to give permission to spend that ERC-20 on our behalf. That's called the allowance, and it's done using the "aprove" method from the ERC-20 standard. 

We've used `alchemy_getTokenAllowance` to check the allowance of the user before swapping a token, and, if needed, asked to approve the swap router. We'd to approve either if the current allowance is lower than the amount we want to swap, or if there is no current allowance at all.

### Swap
Finally, to do the swap we needed to check that everything was right before sending the TX. Using the 0x API we fetch the quote, check if the user has enough balance and allowance, show the user the current estimated price as well as the guarranted if available, and the we do another check on the dapp to ensure that it will not revert. 

If everything goes well, we allow the user to do the actual swap. We leverage wagmi to send the transaction, and, uppon completion, show the user if it succeeded. 


## Acknowledgment

- Built in Partnership with [Alchemy](https://www.alchemy.com/) and [Replit](https://replit.com/) under the [Bounty](https://replit.com/bounties/@Arjun-Alchemy/swap-crypto-widget)

- `Alchemy SDK` was very handy to fetch all user erc20 balances at once as well as the user allowance if needed. In the case of using a custom ERC20, it gave us not only the token information, but also a handy logo to show it. Regular Alchemy API was also used to query the blockchain using Wagmi. The used functions were `alchemy_getTokenBalances` ,`alchemy_getTokenMetadata` and `alchemy_getTokenAllowance`.

- This work has been done under the umbrella of [NFTs2Me](https://nfts2me.com/), a Digital Collectibles Toolkit to create, deploy and manage your NFT collection and minting page with custom subdomain for free, with No-code Art Generator, Token Gating, Credit Card Payments & much much more out of the box. 

## Authors

- [@agsola](https://www.github.com/agsola)
- [@nicolasmarin](https://github.com/nicolasmarin)

## Contributing

Contributions are always welcome!

Create a Pull request with the details of the changes made and how they could help the project improve.
