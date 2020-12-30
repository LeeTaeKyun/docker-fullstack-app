# docker-fullstack-app

### 도커는 기본적으로 실행되어야함
### **docker-compose.yml** 생성 및 작성


```
docker-compose up --build
```

> .gitignor을  **backend, mysql/mysql_data** 에 넣어줌.

```
git add .
git commit -m '메세지'
git push origin master
```


 ## travis ci <---> github 연동

 > **.travis.yml** 생성 및 소스코드 작성

 > elastic Beanstalk를 위한 **.Dockerrun.aws.json** 생성 및 소스코드 작성