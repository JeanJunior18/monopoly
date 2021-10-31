import { Player } from 'src/modules/player/core/domain/player.entity';

export class PlayerRepositoryPort {
  findByEmail: (email: string) => Promise<Player>;
}
