//필요한 모듈들 가져오기

const express    = require("express");
const bodyParser = require("body-parser");

const db  = require("./db");
const app = express();
//json 형태로 가져오는 요청의 본문을 해석할 수 있게 등록
app.use(bodyParser.json());


//테이블생성
// db.pool.query(`CREATE TABLE lists(
//             id INTEGER AUTO INCREMENT,
//             value TEXT,
//             PRIMARY KEY(id)
// )`, (err, results, fields)=>{
//     console.log('results', results)
// })


//DB lists 테이블에 있는 모든데이터를 프론트 서버에 보내주기
app.get('/api/values', function(req, res){
    //데이터베이스에서 모든 정보 가져오기
    db.pool.query('SELECT * FROM lists;',
    
    (err, results, fields)=>{
        if(err)
            return res.status(500).send(err)
        else
            return res.json(results);
    });
})

// 클라이언트에서 입력한값 포스트로 넘기기
app.post('/api/value', function(req, res){
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fields)=>{
        if(err)
            return res.status(500).send(err)
        else  
            return res.json({success:true, value: req.body.value})
    })
})

app.listen(5000, () =>  {
    console.log('애플리케이션 5000번 실행완료');
})