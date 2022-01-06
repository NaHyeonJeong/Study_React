//node, express 로 구성한 restful webservice
const express = require('express');
const cors = require('cors');
const port = 8087;
const app = express();

let nextId = 6;

let users = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@email.com' },
  { id: 2, firstName: 'Jon', lastName:'Smith', email: 'smith@email.com' },
  { id: 3, firstName: 'Will', lastName:'Craig', email: 'will@email.com' },
  { id: 4, firstName: 'Sam', lastName:'Lernorad', email: 'sam@email.com' },
  { id: 5, firstName: 'Ross', lastName:'Doe', email: 'ross@email.com' }
];

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//user 전체 조회
app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

//user 1개 조회
app.get('/api/users/:id', (req, res) => {
  const user = users.find(h => h.id == req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

//user 등록
app.post('/api/users', (req, res) => {
  //const user = { id: getNextId(), ...req.body };
  const user = { id: getNextId(), firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email };
  console.log('post', user);
  users = [...users, user];
  res.send(user);
});

//hero 1개 삭제
app.delete('/api/users/:id', function (request, response) {
  // 변수를 선언합니다.
  var id = Number(request.params.id);
  const userIndex = users.findIndex(f => f.id == id);

  if (isNaN(id)) {
    // 오류: 잘못된 경로
    response.send({
      error: '숫자를 입력하세요!'
    });
  } else if (users[userIndex]) {
    // 정상: 데이터 삭제
    users.splice(userIndex, 1);
    console.log('delete ',users);
    response.send(true);
  } else {
    // 오류: 요소가 없을 경우
    response.send({
      error: '존재하지 않는 데이터입니다!'
    });
  }
});

//hero 수정
app.put('/api/users/:id', (req, res) => {
  var id = Number(req.params.id);

  const userIndex = users.findIndex(f => f.id == id);
  console.log(userIndex);
  if (userIndex > -1) {
    const user = { ...users[userIndex], ...req.body };
    
    users = [
      ...users.slice(0, userIndex),
      user,
      ...users.slice(userIndex + 1),
    ];

    console.log('put ',user);
    res.send(user);
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
