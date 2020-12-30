# BACKEND 요약


## BACKEND

```js
node.js로 구성.
cd backend
npm init 으로 Package.json생성 (server.js로 기본)
```

```json
"script":{
    "start": "node server.js", 
    "dev": "nodemon server.js"
},

"dependencies": {
    "express": "4.17.1",
    "mysql":" 2.18.1",
    "nodemon": "2.0.6",
    "body-parser": "1.19.0"
  },
```

## 추가 완료


> **server.js**  - 필요한 모듈들 추가 및 소스코드 셋팅

> **db.js**     - mysql 소스코드 셋팅 및 풀

> **server.js** -  API 소스코딩


---------------

> **Dockerfile, Dockerfile.dev** 파일생성 및 소스코딩 
>> 작성시 **Dev(개발환경)**는 nodemon서버를 이용해 테스트
