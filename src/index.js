import './style.css';
import * as logicBoard from './logicBoard';

const arrObjBoard = [
  {
    name: 'Pablo Picasso',
    score: 100,
  },
  {
    name: 'Vincent van Gogh',
    score: 20,
  },
  {
    name: 'Leonardo da Vinci',
    score: 50,
  },
  {
    name: 'Claude Monet',
    score: 78,
  },
  {
    name: 'Salvador Dali',
    score: 125,
  },
  {
    name: 'Henri Matisse',
    score: 77,
  },
  {
    name: 'Rembrandt',
    score: 42,
  },
];

logicBoard.loadScoreBoard(arrObjBoard);
