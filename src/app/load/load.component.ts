import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CryptoavatasService } from '../services/cryptoavatas.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  page: number = 0;

  @Output() avatars = new EventEmitter();

  constructor(private cryptoavatasService: CryptoavatasService) { }

  ngOnInit(): void {
  }

  async loadMoreAvatars() {
    this.page += 1;

    let avatar = await this.cryptoavatasService.getAvatars(this.page);
    this.avatars.emit(avatar); 
  }
}
