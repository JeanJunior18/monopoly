import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'BankAccount' })
export class BankAccount {
  @Prop()
  number: number;

  @Prop()
  user: string;

  @Prop()
  balance: number;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
