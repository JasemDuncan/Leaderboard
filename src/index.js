import './style.css';
import * as logicBoard from './logicBoard';

document.getElementById('btnRefresh').addEventListener('click', logicBoard.loadScoreBoard);

document.getElementById('btnSubmit').addEventListener('click', logicBoard.postScores);
