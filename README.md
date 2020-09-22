# comeongram
Instagram clone with Express + Prisma + React and React Native

## v0.02 *Creating GraphQl Server*
- [x] yarn add dotenv
  - src>.env 
- [x] .babelrc
- [x] yarn add @babel/{node,preset-env}
- [x] yarn add @babel/core

  
### Notice
- dotenv모듈은 모든 .env 파일을 읽음.
- .babelrc 파일을 root 폴도에 생성한다. plugins와 presets속성이 중요하다. 이는 Babel커맨드를 실행할 때마다 매번 옵션을 붙여서 설정을 해야 한다면 매우 번거롭다. 그래서 babel.config.js, .babelrc와 같은 설정파일을 통해 Babel을 설정한다. 그럼 커맨드 뒤에 옵션을 붙이지 않고 실행해도 env>preset이 적용된다.

### Refernce

