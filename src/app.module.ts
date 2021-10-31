import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BankModule } from 'src/modules/bank/bank.module';
import { GameMatchModule } from 'src/modules/game-match/game-match.module';
import { PlayerModule } from 'src/modules/player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    PlayerModule,
    GameMatchModule,
    BankModule,
  ],
})
export class AppModule {}
