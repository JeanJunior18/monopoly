import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Player' })
export class Player {
  @Prop()
  name: string;

  @Prop()
  uuid: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop()
  bankAccount: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
