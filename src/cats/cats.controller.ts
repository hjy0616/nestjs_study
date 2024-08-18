import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessInterceptor } from 'src/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    return 'All Cats';
  }

  @Get(':id')
  getOneCat(@Param('id') param) {
    console.log(param);
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
