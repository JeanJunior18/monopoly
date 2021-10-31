import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Player } from 'src/modules/player/core/domain/player.entity';

@Schema({ collection: 'GameMatch' })
export class GameMatch {
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

export const GameMatchSchema = SchemaFactory.createForClass(GameMatch);
