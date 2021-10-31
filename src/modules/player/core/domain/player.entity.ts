import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum AuthMethod {
  google = 'google',
}
@Schema({ collection: 'Player' })
export class Player {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop()
  authMethod: AuthMethod;

  @Prop()
  bankAccount: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
