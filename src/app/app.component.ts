import { Component } from '@angular/core';
import Web3 from 'web3';
// Connect Wallet
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

// Set web3 and connector
const web3 = new Web3(window['ethereum']);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang13_web3';
}
