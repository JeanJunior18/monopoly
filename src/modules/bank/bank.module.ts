import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankAccountProvider } from 'src/infrastructure/adapters/repository/bank-account.repository';
import {
  BankAccount,
  BankAccountSchema,
} from 'src/modules/bank/core/domain/bank-account.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BankAccount.name,
        schema: BankAccountSchema,
      },
    ]),
  ],
  providers: [BankAccountProvider],
})
export class BankModule {}
