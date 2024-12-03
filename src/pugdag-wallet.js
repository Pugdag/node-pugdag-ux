export * from './flow-ux.js';

import {PugdagWalletDesktop} from './pugdag-wallet-desktop.js';
import {PugdagWalletMobile, isMobile, dontInitiatedComponent} from './pugdag-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const PugdagWallet = isMobile ? PugdagWalletMobile : PugdagWalletDesktop;

if(!dontInitiatedComponent)
	PugdagWallet.define("pugdag-wallet");
