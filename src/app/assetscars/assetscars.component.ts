import { Component, OnInit } from '@angular/core';

import { Asset } from '../asset';

import { OpenseaService } from '../services/opensea.service';

@Component({
  selector: 'app-assetscars',
  templateUrl: './assetscars.component.html',
  styleUrls: ['./assetscars.component.css']
})
export class AssetscarsComponent implements OnInit {

  assets: Asset[] | undefined;

  constructor(private openseaService: OpenseaService) { }

  async ngOnInit(){
    let asset = await this.openseaService.getAssets();
    this.assets = asset;
  }

}
