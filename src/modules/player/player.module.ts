import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerRepositoryProvider } from 'src/infrastructure/adapters/repository';
import {
  Player,
  PlayerSchema,
} from 'src/modules/player/core/domain/player.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Player.name,
        schema: PlayerSchema,
      },
    ]),
  ],
  providers: [PlayerRepositoryProvider],
})
export class PlayerModule {}
