import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { SheregangDevMembersRepository } from './repositories/sheregang-dev-members-repository';
import { PrismaSheregangDevMembersRepository } from './repositories/prisma/prisma-sheregang-dev-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: SheregangDevMembersRepository,
      useClass: PrismaSheregangDevMembersRepository
    }
  ],
})

export class AppModule { }
