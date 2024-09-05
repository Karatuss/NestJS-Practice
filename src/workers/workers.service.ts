import { Injectable } from '@nestjs/common';
import { ConnectionService } from '../db/connection/connection.service';
import { workers } from '../db/schema/workers.schema';

@Injectable()
export class WorkersService {
  constructor(private connectionService: ConnectionService) {}

  async findAll(): Promise<(typeof workers)[]> {
    const db = await this.connectionService.db();

    console.log(db);

    const workersData = await db.select().from(workers);
    console.log(workersData);

    return workersData as unknown as (typeof workers)[];
  }
}
