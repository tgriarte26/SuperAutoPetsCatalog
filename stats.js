//stats.html file for each pet
const getName = new URLSearchParams(window.location.search).get("name");
const nameFound = SuperAutoPets.find(data => data.name === getName);

const statsCard = (data) => {
  return (`
    <div class="stats">
      <div class="stats-upper">
      <div>
        <img src="${data.img}"/>
      </div>
        <h1>${data.name}</h1>
      </div>
      <div class="stats-footer">
        <p>
          <img class="attackImg" src="attack.png" />
          damage: ${data.stats.damage}
        </p>
        <p>
        <img class="healthImg" src="health.png" />
        health: ${data.stats.health}</p>
      </div>
      <div class="divider"></div>
      <div class="stats-footer">
        <div class="footer-info">
          <h3>Level 1:</h3>
          <h4>${data.ability.levelOne}</h4>
        </div>
        <div class="footer-info">
          <h3>Level 2:</h3>
          <h4>${data.ability.levelTwo}</h4>
        </div>
        <div class="footer-info">
          <h3>Level 3:</h3>
          <h4>${data.ability.levelThree}</h4>
        </div>
      </div>
    </div>
    `);
}

statsContainer.innerHTML = statsCard(nameFound);