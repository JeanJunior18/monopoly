import { Injectable } from '@nestjs/common';
import { TokenInfo } from 'google-auth-library';
import { Auth, google } from 'googleapis';
import { Player } from 'src/modules/player/core/domain/player.entity';
import { GetPlayerByEmail } from 'src/modules/player/core/services/get-player-by-email.service';

@Injectable()
export class GoogleAuthenticationService {
  private readonly oAuthClient: Auth.OAuth2Client;

  constructor(private readonly getPlayerByEmailService: GetPlayerByEmail) {
    const clientID = process.env.GOOGLE_AUTH_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_AUTH_CLIENT_SECRET;

    this.oAuthClient = new google.auth.OAuth2(clientID, clientSecret);
  }

  async execute(token: string) {
    const tokenInfo = await this.oAuthClient.getTokenInfo(token);

    const email = tokenInfo.email;

    try {
      const player = await this.getPlayerByEmailService.execute(email);

      this.handleRegisteredPlayer(player);
    } catch (err) {
      if (err.status !== 404) {
        throw new err();
      }

      return this.registerUser(tokenInfo);
    }
  }

  private async handleRegisteredPlayer(player: Player) {
    return player;
  }

  private async registerUser(tokenInfo: TokenInfo) {
    return tokenInfo;
  }
}
