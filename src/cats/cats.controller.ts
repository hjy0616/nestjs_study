import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    throw new HttpException('api is broken', 401);
    return 'All Cats';
  }

  @Get(':id')
  getOneCat() {
    return 'One Cat';
  }

  @Post()
  createCat() {
    return 'new Cat';
  }

  @Put(':id')
  updateCat() {
    return 'update Cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update Partial Cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete Cat';
  }
}
