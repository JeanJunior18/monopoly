import { Module } from '@nestjs/common';
import { BankModule } from 'src/modules/bank/bank.module';
import { GameMatchModule } from 'src/modules/game-match/game-match.module';
import { PlayerModule } from 'src/modules/player/monopoly.module';

@Module({
  imports: [PlayerModule, GameMatchModule, BankModule],
})
export class AppModule {}
