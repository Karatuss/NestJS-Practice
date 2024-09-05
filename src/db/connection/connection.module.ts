import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ConnectionService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  exports: [ConnectionService],
})
export class ConnectionModule {}
