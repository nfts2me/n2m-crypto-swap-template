
# N2M Crypto Swap
An embedded widget to allow anyone to swap tokens within their website or app.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Demo

![swap-widget-demo](https://)

Full demo video:
https://www.youtube.com/watch?v=9lnukQYoWA8

The REPLIT TEMPLATE for a Next.js Application embedding the widget can be found here:
[Replit-Template](https://replit.com/@agsola/n2m-crypto-swap-template)

# Introduction

Introducing the **N2M Crypto Swap Widget**, a powerful and easy-to-use tool for exchanging cryptocurrencies right from your any website on desktop or mobile device. With support for multiple exchanges routing under the hood and a wide range of cryptocurrencies, the Crypto Swap Widget makes it simple to swap one crypto asset for another with just a few clicks.

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
- Rainbow
- Wallet Connect
- Coinbase

3. Swap from native to ERC-20, from ERC-20 to native and ERC-20 to ERC-20.

4. Show all of you balances and detects TX revertion prior to executing to get the best price with the lowest risk.

5. Checks the balance and allowance asking to approve if needed.

6. Easy to set up and integrate with just a few lines of code.

7. Customizable to your needs.

## Usage

Head to https://tools.nfts2me.com/swap and get the embeded code, which will be something like this:

```html
<iframe id='iframe-widget' src='https://tools.nfts2me.com/swap?widget=classic' style="height: 480px; width: 100%; border: none"></iframe>
```

As you can see it is pretty easy and straightforwards. You can change same values to adapt to your needs.
Furthemore, we've created an example of how to use it using NextJS and TailWinds.

Check the replit template for the Next.js Application embedding the widget:
[Replit-Template](https://replit.com/@agsola/n2m-crypto-swap-template)

## Screenshots


## Tech Stack

**Backend:** React, NextJS

**Packages:** Alchemy SDK, Rainbowkit, Wagmi, Ethers.js

## How we built it ??



## Acknowledgment

- Built in Partnership with [Alchemy](https://www.alchemy.com/) and [Replit](https://replit.com/) under the [Bounty](https://replit.com/bounties/@Arjun-Alchemy/swap-crypto-widget)

- `Alchemy SDK` was very handy to fetch all user erc20 balances at once as well as the user allowance if needed. In the case of using a custom ERC20, it gave us not only the token information, but also a handy logo to show it. Regular Alchemy API was also used to query the blockchain using Wagmi. The used functions were `# alchemy_getTokenBalances` ,`# alchemy_getTokenMetadata` and `# alchemy_getTokenAllowance`.

- This work has been done under the umbrella of [NFTs2Me](https://nfts2me.com/), a Digital Collectibles Toolkit to create, deploy and manage your NFT collection and minting page with custom subdomain for free, with No-code Art Generator, Token Gating, Credit Card Payments & much much more out of the box. 

## Authors

- [@agsola](https://www.github.com/agsola)
- [@nicolasmarin](https://github.com/nicolasmarin)

## Contributing

Contributions are always welcome!

Create a Pull request with the details of the changes made and how they could help the project improve.