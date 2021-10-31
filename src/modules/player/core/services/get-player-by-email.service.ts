import { NotFoundException } from '@nestjs/common';
import { Player } from 'src/modules/player/core/domain/player.entity';
import { PlayerRepositoryPort } from 'src/modules/player/core/ports';

export class GetPlayerByEmail {
  constructor(private readonly playerRepository: PlayerRepositoryPort) {}

  async execute(email: string) {
    const player = await this.playerRepository.findByEmail(email);

    if (!player) throw new NotFoundException(Player);

    return player;
  }
}
