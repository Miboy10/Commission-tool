import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commission-tool';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitzer:DomSanitizer) {
    this.matIconRegistry.addSvgIcon('discord', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/discord.svg'));
    this.matIconRegistry.addSvgIcon('twitter', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    this.matIconRegistry.addSvgIcon('twitch', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/twitch.svg'));
    this.matIconRegistry.addSvgIcon('instagram', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    this.matIconRegistry.addSvgIcon('fiverr', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/fiverr.svg'));
    this.matIconRegistry.addSvgIcon('paypal', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/paypal.svg'));
  }
}
