import { Injectable } from '@angular/core';

import { Assetapiobject } from '../assetapiobject';

@Injectable({
  providedIn: 'root'
})
export class OpenseaService {

  constructor() { }

  async getAssets() {
    let response: Response = await fetch(`https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&collection=bend-mock-doodle-v2&limit=20&include_orders=false`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    let result: Assetapiobject = await response.json()

    return result.assets;
}
}
