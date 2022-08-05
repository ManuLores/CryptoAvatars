import { Component, OnInit } from '@angular/core';

import { Avatar } from '../avatar';

import { CryptoavatasService } from '../services/cryptoavatas.service';

@Component({
  selector: 'app-avatarscards',
  templateUrl: './avatarscards.component.html',
  styleUrls: ['./avatarscards.component.css']
})
export class AvatarscardsComponent implements OnInit {

  page: number = 0;

  avatars: Avatar[] | undefined;

  constructor(private cryptoavatasService: CryptoavatasService) { }

  async ngOnInit() {
    let avatar = await this.cryptoavatasService.getAvatars(this.page);
    this.avatars = avatar;
  }

  async addMoreAvatars(items: Avatar[]) {
    this.avatars = this.avatars?.concat(items);
  }
}
