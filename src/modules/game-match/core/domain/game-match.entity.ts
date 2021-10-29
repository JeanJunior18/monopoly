import { Prop, Schema } from '@nestjs/mongoose';
import { Player } from 'src/modules/player/core/domain/player.entity';

@Schema({ collection: 'GameMatch' })
export class GameMatchEntity {
  @Prop()
  name: string;

  @Prop()
  players: Player[];

  @Prop()
  salary: number;

  @Prop()
  status: 'waiting' | 'started' | 'finished';

  @Prop()
  host: string;

  @Prop()
  startValue: number;
}
