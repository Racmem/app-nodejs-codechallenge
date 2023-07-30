import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionType } from '../../../db/entities/transaction-type.entity';
import { TransactionStatus } from '../../../db/entities/transaction-status.entity';
import { FinancialTransaction } from '../../../db/entities/financial-transaction.entity';
import { FinancialTransactionsController } from '../../../../api/financial-transactions/financial-transactions.controller';
import { createFinancialTransactionAdapters } from './providers/adapter.provider';
import { CreateFinancialTransaction } from 'src/domain/financial-transactions/create/create-financial-transaction.use-case';
import { createFinancialTransactionDomainProviders } from './providers/domain.provider';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionType, TransactionStatus, FinancialTransaction])],
  controllers: [FinancialTransactionsController],
  providers: [...createFinancialTransactionAdapters, ...createFinancialTransactionDomainProviders],
  exports: [CreateFinancialTransaction],
})
export class TransactionsModule {}