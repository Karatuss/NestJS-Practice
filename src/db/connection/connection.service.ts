import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

@Injectable()
export class ConnectionService {
  constructor(private readonly configService: ConfigService) {}

  async connect() {
    const dbConfig = {
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      user: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_DATABASE'),
      multipleStatements: true,
    };

    if (Object.values(dbConfig).some(value => !value)) {
      throw new Error('데이터베이스 설정이 올바르지 않습니다.');
    }

    try {
      return await mysql.createConnection(dbConfig);
    } catch (error) {
      console.error('데이터베이스 연결 오류:', error);
      throw error;
    }
  }

  async db() {
    const connection = await this.connect();
    return drizzle(connection);
  }
}
