import { defineConfig } from 'drizzle-kit';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export default defineConfig({
  schema: './src/db/schema/*',
  dialect: 'mysql',
  dbCredentials: {
    host: configService.get('DATABASE_HOST') ?? '',
    user: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_DATABASE') ?? '',
  },
});
