import { Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameMatch } from 'src/modules/game-match/core/domain/game-match.entity';
import { GameMatchRepositoryPort } from 'src/modules/game-match/core/ports/';

export class GameMatchRepositoryAdapter implements GameMatchRepositoryPort {
  constructor(
    @InjectModel(GameMatch.name)
    private readonly gameMatchModel: Model<GameMatch>,
  ) {}
}

export const GameMatchRepositoryProvider: Provider<GameMatchRepositoryPort> = {
  provide: GameMatchRepositoryPort,
  useClass: GameMatchRepositoryAdapter,
};
