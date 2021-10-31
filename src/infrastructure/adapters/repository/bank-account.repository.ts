import { Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankAccount } from 'src/modules/bank/core/domain/bank-account.entity';
import { BankAccountRepositoryPort } from 'src/modules/bank/core/ports/bank-account-repository.port';

export class BankAccountRepositoryAdapter {
  constructor(
    @InjectModel(BankAccount.name)
    private readonly bankAccountModel: Model<BankAccount>,
  ) {}
}

export const BankAccountProvider: Provider<BankAccountRepositoryPort> = {
  provide: BankAccountRepositoryPort,
  useClass: BankAccountRepositoryAdapter,
};
