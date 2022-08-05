import { Injectable } from '@angular/core';

import { Avatarsapiobject } from '../avatarsapiobject';

import { AppSettings } from '../common/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CryptoavatasService {

  constructor() {}

  async getAvatars(page: number) {
      let skip = AppSettings.avatarsPerPage * page;
      let response: Response = await fetch(`https://api.cryptoavatars.io/v1/nfts/avatars/list?skip=${skip}&limit=${AppSettings.avatarsPerPage}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'API-KEY': AppSettings.apiKey
          }
      })
      let result: Avatarsapiobject = await response.json()

      return result.nfts;
  }
}
