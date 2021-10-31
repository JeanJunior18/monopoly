import { Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from 'src/modules/player/core/domain/player.entity';
import { PlayerRepositoryPort } from 'src/modules/player/core/ports';

export class PlayerRepositoryAdapter implements PlayerRepositoryPort {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<Player>,
  ) {}

  async findByEmail(email: string) {
    return this.playerModel.findOne({ email });
  }
}

export const PlayerRepositoryProvider: Provider<PlayerRepositoryPort> = {
  provide: PlayerRepositoryPort,
  useClass: PlayerRepositoryAdapter,
};
