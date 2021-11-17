export function loadScoreBoard(arr) {
  const ulScore = document.getElementById('ulScore');
  ulScore.classList = 'list-group';
  for (let i = 0; i < arr.length; i += 1) {
    const lsScore = document.createElement('li');
    lsScore.classList = 'list-group-item';
    lsScore.innerText = `${arr[i].name}: ${arr[i].score}`;
    ulScore.appendChild(lsScore);
  }
}

export default loadScoreBoard;