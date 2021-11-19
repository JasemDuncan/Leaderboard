function ReorderScores(arrObjTask) {
  return arrObjTask.sort((a, b) => ((a.score > b.score) ? -1 : 1));
}
// GET
export const loadScoreBoard = async () => {
  let items;
  const msjErr = document.getElementById('lblError');
  msjErr.hidden = true;

  const ulScore = document.getElementById('ulScore');
  ulScore.innerHTML = '';
  ulScore.classList = 'list-group list-group-hover list-group-striped borderSolid';

  try {
    const URL = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z6KMDG5alGQLoPEVK1zX/scores', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    items = await URL.json();
  } catch (err) {
    ulScore.innerHTML += `Error in the API${err}`;
  }
  let arritemsResult = [];
  arritemsResult = ReorderScores(items.result);

  if (arritemsResult.length) {
    for (let j = 0; j < arritemsResult.length; j += 1) {
      const lsScore = document.createElement('li');
      lsScore.classList = 'list-group-item changeColor';
      lsScore.innerText = `${arritemsResult[j].user}:  ${arritemsResult[j].score}`;
      if (j === 0) {
        lsScore.innerHTML += '&emsp;&emsp;<span class="material-icons"> star_rate </span><span class="material-icons"> star_rate </span><span class="material-icons"> star_rate </span>  <span class="badge bg-primary rounded-pill">3</span> ';
      }
      if ((j === 1) || (j === 2)) {
        lsScore.innerHTML += '&emsp;&emsp;<span class="material-icons"> star_rate </span><span class="material-icons"> star_rate </span> <span class="badge bg-primary rounded-pill">2</span>';
      }
      if ((j === 3)) {
        lsScore.innerHTML += '&emsp;&emsp;&emsp;<span class="material-icons"> star_rate </span> <span class="badge bg-primary rounded-pill">1</span>';
      }
      if ((j === 4)) {
        lsScore.innerHTML += `&emsp;   &emsp;<span class="material-icons">
        rocket
        </span>`;
      }

      ulScore.appendChild(lsScore);
    }
  } else {
    ulScore.innerHTML
    += `
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>

      <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          No items 
        </div>
      </div>
    `;
  }
};

// POST
export const postScores = async () => {
  const name = document.getElementById('txtName');
  const score = document.getElementById('txtScore');
  const msjErr = document.getElementById('lblError');

  if (name.value.length && score.value.length) {
    try {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z6KMDG5alGQLoPEVK1zX/scores', {
        method: 'POST',
        body: JSON.stringify(
          {
            user: name.value,
            score: score.value,
          },
        ),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      score.value = '';
      name.value = '';
    } catch (err) {
      msjErr.hidden = false;
      msjErr.innerText += `Error in the API ${err}`;
    }
    loadScoreBoard();
  } else {
    msjErr.hidden = false;
    msjErr.innerText += 'Fill name and score';
  }
};
