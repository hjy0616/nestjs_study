## 공부 내용 정리

### 실행 명령어

```bash
pnpm start:dev
```

### controller

- 사용자의 요청을 받아서 적절히 처리하고 응답을 돌려주는 역할을 함
- 인자값을 가져올때는 object 형식으로 데이터를 가져오고 받음
- 마치 웨이터 처럼

1.  손님의 주문 받기:
    - 웨이터가 손님의 주문을 받듯이, 컨트롤러는 사용자의 요청을 받아요.
    - 예를 들어, 웹사이트에서 버튼을 클릭하거나 주소를 입력하면 그 요청이 컨트롤러에게 전달돼요.
2.  주방과 소통하기:
    - 웨이터가 주문을 주방에 전달하듯이, 컨트롤러는 받은 요청을 처리할 수 있는 곳으로 보내요.
    - 이 과정에서 컨트롤러는 필요한 정보를 가져오거나 저장할 수 있어요.
3.  음식 가져다주기:
    - 웨이터가 완성된 음식을 손님에게 가져다주듯이, 컨트롤러는 처리된 결과를 사용자에게 돌려줘요.
    - 이것은 웹페이지나 데이터의 형태일 수 있어요.
4.  특별 요청 처리하기:
    - 웨이터가 손님의 특별한 요구사항을 처리하듯이, 컨트롤러는 다양한 종류의 요청을 처리할 수 있어요.
    - 예를 들어, 정보 보여주기, 정보 저장하기, 정보 수정하기 등의 요청을 처리해요.

### route

- 웹사이트의 여러 기능이나 페이지로 가는 길을 만들고 안내하는 역할을 한다.
- 마치 우리 집의 주소와 문이 특정 방으로 안내해주는 것처럼

1.  주소 지정하기:
    - 우리 집에 주소가 있듯이, 웹사이트의 각 페이지나 기능에도 주소가 있어요.
    - 예를 들어, "www.우리집.com/거실" 이런 식으로요.
2.  길 안내하기:
    - 주소를 알면 우리 집의 특정 방으로 찾아갈 수 있듯이, 라우트는 웹사이트의 특정 부분으로 안내해줘요.
    - "/거실"이라는 주소로 가면 거실 페이지가 나오는 것처럼요.
3.  다양한 방 만들기:
    - 집에 거실, 부엌, 침실이 있듯이, 웹사이트에도 여러 페이지나 기능이 있어요.
    - 라우트를 사용해 이런 다양한 "방"들을 만들 수 있어요.
4.  문 역할하기:
    - 집의 각 방에 문이 있듯이, 라우트는 웹사이트의 각 기능으로 들어가는 "문" 역할을 해요.
    - 사용자가 특정 주소로 들어오면, 그에 맞는 "방"(기능)으로 안내해주는 거예요.
5.  규칙 정하기:
    - 우리 집에 "신발을 벗고 들어오세요"라는 규칙이 있듯이, 라우트에도 규칙을 정할 수 있어요.
    - 예를 들어, 특정 라우트는 로그인한 사용자만 접근할 수 있게 할 수 있어요.

### @: 데코레이터 패턴

- 함수나 클래스에 기능 첨가를 해줘서 재사용성을 극대화 시키는것
- 반드시 붙여서 사용해야한다고 함.
- '@' 데코레이터는 이렇게 코드에 특별한 의미나 기능을 추가하는 역할을 해요. 마치 평범한 선물을 특별하고 멋진 선물로 만드는 포장지처럼요!

```ts
@Controller('cats') // 이런식으로 라우팅이 가능함.
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/cats/hello/
  @Get('hello/:id')
  getHello(@Req() req: Request, @Body() Body, @Param() Param): string {
    //body를 req에서 받는게 아닌 body를 바로 인자값으로 받아올 수 있음
    //param도 마찬가지로 req.param로 받아올 수 있지만 인자값으로 바로 받아올 수 있음 Parma의 동적라우팅이여야지 가능함 :id
    console.log(req);
    console.log(Body);
    return this.appService.getHello();
  }
}
```

![alt text](/image/image.png)

### DTO란?

- DTO는 Data Transfer Object의 약자로 이는 프로세스 간에 데이터를 전달하는 객체를 말한다.

  - 주로 다음과 같은 목적으로 사용됩니다:

    - 데이터 캡슐화: 관련된 데이터 필드를 하나의 객체로 묶습니다.
    - 데이터 검증: 입력 데이터의 유효성을 검사합니다.
    - 계층 간 데이터 전송: 예를 들어, 컨트롤러와 서비스 계층 사이에서 데이터를 주고받습니다.
    - 데이터 형식 정의: API 요청이나 응답의 데이터 구조를 명확히 정의합니다.

  - DTO는 주로 클래스로 정의되며, 데코레이터를 사용하여 데이터 검증 규칙을 추가할 수 있습니다.

- 좀 더 이해하기 쉽게 도시락 통으로 비유를 한다면,

  1. 도시락 통 (DTO):
     - 도시락 통은 여러 가지 음식을 담아 한 번에 옮길 수 있게 해주는 용기예요.
     - DTO도 마찬가지로 여러 가지 정보를 하나로 묶어서 한 번에 전달할 수 있게 해줘요.
  2. 음식 담기 (데이터 캡슐화):
     - 도시락 통에 밥, 반찬, 과일 등 여러 음식을 담듯이, DTO에는 이름, 나이, 주소 같은 여러 정보를 담아요.
  3. 뚜껑 닫기 (데이터 검증):
     - 도시락 통의 뚜껑을 잘 닫아야 음식이 쏟아지지 않듯이, DTO는 담긴 정보가 올바른지 확인해줘요.
  4. 배달하기 (계층 간 데이터 전송):
     - 도시락을 학교나 회사로 가져가듯이, DTO는 정보를 프로그램의 한 부분에서 다른 부분으로 전달해요.
  5. 도시락 메뉴판 (데이터 형식 정의):
     - 도시락 가게의 메뉴판처럼, DTO는 어떤 정보가 들어갈 수 있는지 미리 정해놓아요.

- ex) '학생 정보 DTO'라는 도시락 통이 있다고 생각해봐요.
  이 통에는 '이름', '나이', '학년' 같은 정보를 담을 수 있어요.
  이 도시락 통을 사용하면 학생의 정보를 깔끔하게 정리해서 프로그램의 여러 부분으로 쉽게 전달할 수 있답니다.

## provider와 의존성 주입(DI)

- provider는 하단의 디펜던시 인젝션에서 공급자의 역할을 등록해줄 수 있는 것

```ts
provder: [AppService]; // AppService라는 공금자를 등록한 것을 뜻함

constructor(private readonly appService: AppService) {} // 컨트롤러에서 의존성을 주입받은 것. AppService라는 공급자의 의존성을 주입한거라고 생각하면됨
```

### Dependency Injection

- 디펜던시 인젝션은 소프트웨어 디자인 패턴 중 하나로, 한 객체가 다른 객체에 의존할 때 그 의존성을 외부에서 주입하는 기법입니다. 주요 목적은 다음과 같습니다:

  - 결합도 감소: 객체 간의 의존성을 줄여 코드의 유연성과 재사용성을 높입니다.
  - 테스트 용이성: 의존성을 쉽게 교체할 수 있어 단위 테스트가 쉬워집니다.
  - 코드 관리: 의존성을 중앙에서 관리하여 코드 유지보수가 쉬워집니다.
  - 확장성: 새로운 기능을 추가하거나 기존 기능을 변경하기 쉬워집니다.

- NestJS에서는 주로 생성자 주입 방식을 사용하며, @Injectable() 데코레이터를 통해 서비스를 주입 가능한 형태로 만듭니다.

- 디펜던시 인젝션을 레고 블록 놀이에 비유해 볼게요.

  - 레고 블록 (의존성):
    - 레고 모델을 만들 때 여러 종류의 블록이 필요하죠? 이 블록들이 바로 프로그램에서의 '의존성'이에요.
  - 레고 조립 설명서 (디펜던시 인젝션):
    - 레고 세트에는 조립 설명서가 있어요. 이 설명서가 어떤 블록을 어디에 끼워 넣을지 알려주죠?
    - 디펜던시 인젝션도 마찬가지로, 어떤 부품(의존성)을 어디에 넣을지 알려주는 역할을 해요.
  - 블록 교체하기 (유연성):
    - 레고는 비슷한 크기의 다른 블록으로 쉽게 바꿀 수 있어요. 빨간 블록 대신 파란 블록을 끼울 수 있죠?
    - 디펜던시 인젝션을 사용하면, 프로그램의 부품도 이렇게 쉽게 바꿀 수 있어요.
  - 친구와 함께 조립하기 (코드 관리):
    - 큰 레고 모델을 만들 때, 친구들과 역할을 나누어 조립하면 더 쉽고 빠르게 만들 수 있어요.
    - 디펜던시 인젝션도 프로그램의 여러 부분을 쉽게 나누고 관리할 수 있게 해줘요.
  - 새로운 블록 추가하기 (확장성):

    - 레고 모델에 새로운 부분을 추가하고 싶을 때, 기존 모델을 크게 바꾸지 않고도 새 블록을 끼워 넣을 수 있어요.
    - 디펜던시 인젝션을 사용하면, 프로그램에 새로운 기능을 추가하는 것도 이렇게 쉬워져요.

  - ex) 우리가 '로봇 팔' 레고 모델을 만든다고 생각해봐요. 로봇 팔에는 '모터' 블록이 필요해요. 디펜던시 인젝션은 마치 "여기에 모터 블록을 끼우세요"라고 알려주는 조립 설명서와 같아요. 나중에 더 강한 모터가 필요하면, 기존 모터 블록만 새것으로 쉽게 교체할 수 있답니다.

## Modules & Encapsulation(캡슐화)

### Modules

- 명령어를 통해서 module을 만들 수 있음
- 모듈 명칭은 복수형태로 짓는게 좋다고 함 공식문서에도 추천함 ex) "cats"
- 컨트롤러 또한 CLI로 만들면 편함
- .spec은 테스트를 위해서 만들어지는 것
- injectable이 보이면 provider라는 의미로 보면됨

```bash
nest g mo ["만들 모듈 명칭"]
nest g co ["만들 컨트롤러 명칭"]
nest g service ["만들 컨트롤러 명칭"]
```

### 캡슐화

export(내보내기)를 module에서 해주지 않으면 캡슐화가 진행되지 않는다는 특징이 있다고한다.

```ts
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 요렇게 서비스를 내보내기 해줘야함
})
```

## Nest Middleware

### middleware 생성 cli

```bash
nest g middleware [만들 명칭]
```

logger기능은 어떤 기능으로 사용했는지 클라이언트에 대해서 추적이 가능함

```ts
export class AppModule implements NestModule {
  private logger = new Logger('HTTP'); // logger를 사용하기 위해서 씀
  configure(consumer: MiddlewareConsumer) {
    this.logger.log(req.ip, req.originalUrl); // 위 로거를 통해서 ip와 url을 확인할 수 있는 print같은 기능
    consumer.apply(LoggerMiddleware).forRoutes('*'); //별표시는 전체 엔드포인트에 대해서
  }
}
```

위 코드처럼 사용할 미들웨어를 저렇게 추가해야한다.

리스폰스에 대한 결과값도 로그를 찍어줄 수 있음.

```ts
export class AppModule implements NestModule {
  private logger = new Logger('HTTP'); // logger를 사용하기 위해서 씀
  configure(consumer: MiddlewareConsumer) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`, // 성공했는지 아닌지도 로그에 다찍히게 됨
        req.originalUrl,
      );
    });
  }
}
```

## 예외처리 방법

```ts
  @Get()
  getAllCats() {
    throw new HttpException('api is broken', 401); // nestjs 에서는 강제로 오류내는걸 이렇게냄
    return 'All Cats';
  }
```

- 강제로 에러처리를 통해 커스텀 에러를 만들어야할때도 있음

### filter

- filter로 원하는형태로 반환 가능
  /src에 http-exception.filter.ts를 보면됨

- filter도 글로벌(전역)으로 관리하는 방법과 각각 모듈별로 관리하는 방법이 있다고함

#### global관리

- global로 관리가 가능함 아래코드 참조

```ts
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
```

#### module 별로 관리

- useFilter 어노테이션을 사용해서 getAllCats의 컨트롤러를 사용할때 사용이 가능하다

```ts
  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCats() {
    throw new HttpException('api is broken', 401);
    return 'All Cats';
  }
```

- useFilters를 controller쪽에 추가하면 전체적으로 관리가 가능하다.

```ts
@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
}
```

### Pipe

- 정의 : 클라이언트 요청(req)에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 클래스
- string으로 인자값을 가져오지만 id같은 경우 type을 string이 아닌 number형태로 보내는 경우가 많다고 한다.
- 그럴경우 'ParseIntPipe'를 통해서 값을 형변환 시켜줘야한다.

```ts
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    return 'One Cat';
  }
```

## interceptors & AOP 패턴

- 인터셉터는 @injectable()"디펜던시 인젝션이 가능" 데코레이터로 주석이 달린 클래스.
  인터셉터는 NextInterceptor 인터페이스를 구현해야됨
- 인터셉터에는 (관점 지향 프로그래밍)AOP(Aspect Oriented Programming)기술에서 영감을 받은 유용한 기능 세트가 있다고함,
  - 수행가능한것:
    - 메서드 실행 전 후에 추가 논리 바인딩 가능
    - 함수에서 반환된 결과를 변환
    - 함수에서 발생한 예외를 변환
    - 기본 기능 동작 확장
    - 특정 조건 (ex: 캐싱 목적)에 따라 함수를 완전히 재정의
