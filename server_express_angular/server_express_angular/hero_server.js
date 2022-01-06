//node, express 로 구성한 restful webservice
const express = require('express');
const cors = require('cors');
const port = 8087;
const app = express();

let nextId = 11;

let heroes = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//hero 전체 조회
app.get('/api/heroes', (req, res) => {
  setTimeout(() => {
    res.send(heroes);
  }, 1000);
});

//hero 1개 조회
app.get('/api/heroes/:id', (req, res) => {
  const hero = heroes.find(h => h.id == req.params.id);

  if (hero) {
    res.status(200).json(hero);
  } else {
    res.status(404).send({ msg: 'Hero not found' });
  }
});

//hero 등록
app.post('/api/heroes', (req, res) => {
  const hero = { id: getNextId(), ...req.body };
  heroes = [...heroes, hero];
  console.log('post ',heroes);
  res.send(heroes);
});

//hero 전체삭제
app.delete('/api/heroes', (req, res) => {
  heroes.splice(0, heroes.length);
  res.send(heroes);
});

//hero 1개 삭제
app.delete('/api/heroes/:id', function (request, response) {
  // 변수를 선언합니다.
  var id = Number(request.params.id);
  const heroIndex = heroes.findIndex(f => f.id == id);

  if (isNaN(id)) {
    // 오류: 잘못된 경로
    response.send({
      error: '숫자를 입력하세요!'
    });
  } else if (heroes[heroIndex]) {
    // 정상: 데이터 삭제
    heroes.splice(heroIndex, 1);
    console.log('delete ',heroes);
    response.send(heroes);
  } else {
    // 오류: 요소가 없을 경우
    response.send({
      error: '존재하지 않는 데이터입니다!'
    });
  }
});

//hero 수정
app.put('/api/heroes/:id', (req, res) => {
  var id = Number(req.params.id);

  const heroIndex = heroes.findIndex(f => f.id == id);

  if (heroIndex > -1) {
    const hero = { ...heroes[heroIndex], ...req.body };
  
    heroes = [
      ...heroes.slice(0, heroIndex),
      hero,
      ...heroes.slice(heroIndex + 1),
    ];

    console.log('put ',heroes);
    res.send(heroes);
  } else {
    res.status(404).send({ msg: 'Hero not found' });
  }
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
