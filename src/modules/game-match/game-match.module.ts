import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameMatchRepositoryProvider } from 'src/infrastructure/adapters/repository';
import {
  GameMatch,
  GameMatchSchema,
} from 'src/modules/game-match/core/domain/game-match.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: GameMatch.name,
        schema: GameMatchSchema,
      },
    ]),
  ],
  providers: [GameMatchRepositoryProvider],
})
export class GameMatchModule {}
