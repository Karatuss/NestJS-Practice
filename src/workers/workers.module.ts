import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../config/configuration';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { ConnectionService } from 'src/db/connection/connection.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [WorkersController],
  providers: [WorkersService, ConnectionService],
  exports: [WorkersService, ConnectionService],
})
export class WorkersModule {}
