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

 > db.js에서 MYSQL_HOST등 변수들 proccess.env.$#@! 수정

 
- Elastic Beanstalk 애플리케이션생성
    - 플랫폼 브런치 Multi-container Docker로 설정

- AWS RDS 데이터베이스생성(mysql), 마스터사용자이름, 마스터암호, 초기데이터베이스이름설정
- docker-compose.yml, db.js / AWS RDS 
- 보안그룹생성(이름, 설명)
    - 인바운드규칙, 아웃바운드규칙 설정
- AWS RDS 네트워크 및 보안에서 추가한 보안그룹을 추가하고 수정사항(즉시적용)을 완료처리
- Elastic Beanstalk 구성->인스턴스 생성한 VPC보안그룹을 추가 적용해준다.
- Elastic Beanstalk 구성->소프트웨어 환경속성에 환경변수로 MYSQL_정보들과 값들을 넣어서 저장
    - RDS 엔드포인트 주소값을 가져와서 MYSQL_HOST Value로 설정


### AWS를 적용하는부분들

- .travis ci 에    deploy 소스코드 추가
   - provider -> eleasticbeanstalk
   - region ->  AWS eleasticbeanstalk 가운데 ap-northeast-#@!#$ 추가
   - app -> 어플리케이션이름
   - env -> #@!#*@#-env로 된 이름
   - bucket_name : S3 어플리케이션이름
   - bucket_path : app과 같은걸로 넣어줌
    - on->branch : master 라고 넣어줌


- traivs ci 
    - 사용자 추가 docker-fullstack-user
     -  AWSElasticBeanstalkFullAccess 보안그룹에추가해줌
    - 생성시 액세스키, AWS_ACCESS_KEY AWS_SECRET_ACCESS_KEY 비밀엑세스키(잃어버리면안됨)
    - travis ci -> settings에 비밀엑세스, 토큰키 설정