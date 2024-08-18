import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import path from 'path';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as  // error 메시지도 볼 수 있음
      | string
      | { error: string; statusCode: number; message: string | string[] }; // 이렇게 넣어서 메시지도 반환 가능
    /*
    아래 처럼 분기처리가 가능함.
    ...error가 비구조 할당을 통해서 보내주도록 하는 것
    */

    if (typeof error === 'string') {
      res.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.url,
        error,
      });
    } else {
      res.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.url,
        ...error,
      });
    }
  }
}
