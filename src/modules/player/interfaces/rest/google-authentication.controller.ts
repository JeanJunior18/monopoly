import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthenticationService } from 'src/modules/player/core/services/google-authentication.service';
import { GoogleTokenDto } from 'src/modules/player/interfaces/dto/google-token.dto';

@Controller('google-authentication')
export class GoogleAuthenticationRest {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  async authenticate(@Body() tokenData: GoogleTokenDto, @Req() req: Request) {
    const data = await this.googleAuthenticationService.execute(
      tokenData.token,
    );

    req.res.setHeader('Set-Cookie', []);

    return null;
  }
}
