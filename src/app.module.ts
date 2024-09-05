import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // forRoot임에도 의미있는 이유는 모듈이 전역으로 사용될지 아니면 각 모듈에서 임포트해서 사용할지 결정하는 옵션
      cache: true,
    }),
    WorkersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
