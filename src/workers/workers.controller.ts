import { Controller, Get } from '@nestjs/common';
import { WorkersService } from './workers.service';

@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get()
  async findAll(): Promise<void> {
    try {
      const workers = await this.workersService.findAll();
      console.log(workers);
    } catch (error) {
      console.error('워커 데이터를 가져오는 중 오류 발생:', error);
      throw new Error('워커 데이터를 가져오는 데 실패했습니다.');
    }
  }
}
