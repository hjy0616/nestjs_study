import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats') // 이런식으로 라우팅이 가능함.
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/cats/hello/
  @Get('hello/:id')
  getHello(@Req() req: Request, @Body() Body, @Param() Param): string {
    //body를 req에서 받는게 아닌 body를 바로 인자값으로 받아올 수 있음
    //param도 마찬가지로 req.param로 받아올 수 있지만 인자값으로 바로 받아올 수 있음
    console.log(req);
    console.log(Body);
    return this.appService.getHello();
  }
}
