/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
/*
const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
*/

const SuperAutoPets = [
  {
    name: "Ant",
    img: "SuperAutoPetsImages/Ant.png",
    tierNum: 1,
    tierImg: "tierDiceImages/tier1dice.png",
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    statsLink: "stats.html"
  },
  {
    name: "Baku",
    img: 'SuperAutoPetsImages/Baku.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Beaver",
    img: "SuperAutoPetsImages/Beaver.png",
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Cricket",
    img: 'SuperAutoPetsImages/Cricket.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Duck",
    img: 'SuperAutoPetsImages/Duck.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",    
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Fish",
    img: 'SuperAutoPetsImages/Fish.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Horse",
    img: 'SuperAutoPetsImages/Horse.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Mosquito",
    img: 'SuperAutoPetsImages/Mosquito.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Otter",
    img: 'SuperAutoPetsImages/Otter.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Pig",
    img: 'SuperAutoPetsImages/Pig.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Pigeon",
    img: 'SuperAutoPetsImages/Pigeon.png',
    tierNum: 1,
    pack: 'turtle',
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
]

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
/*
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < SuperAutoPets.length; i++) {
    let name = SuperAutoPets[i].name;
    let SuperAutoPetsImage = SuperAutoPets[i].img;
    let tierImg = SuperAutoPets[i].tierImg;

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    /*
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, SuperAutoPetsImage, tierImg); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
*/
/*
function editCardContent(card, newName, newImage, newTierImg) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newName;

  const cardImage = card.querySelector("img");
  cardImage.src = newImage;

  const cardTierImage = card.querySelector("#tier-img");
  cardTierImage.src = newTierImg;

  /*
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";


  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  //console.log("new card:", newName, "- html: ", card);
}
*/

const cardContainer = document.querySelector('.card-container');
const statsContainer = document.querySelector('.stats-container');

const createCard = (data) => {
  return (
    `
      <div class="card" data-tier="${data.tierNum}">
        <div class="card-content">
          <div class="card-image">
            <img src="${data.img}"/>
          </div>
          <h2>${data.name}</h2>
          <div class="card-footer">
            <div class="img-container">
              <img id="tier-img" src="${data.tierImg}" />
              <img id="pack-img" src="${data.packImg}" />        
            </div>
            <a href="${data.statsLink}">
              <button class="stats-button">stats</button>
            </a>
          </div>
        </div>
      </div>
    `);
};


const statsCard = (data) => {
  return (
    `
          <h2>${data.name}</h2>
    `);
}

const displayCards = (filter = 'all') => {
  cardContainer.innerHTML = '';
  SuperAutoPets.filter(data => filter === 'all').forEach(data => {
    cardContainer.innerHTML += createCard(data);
  })
}


const displayStats = (filter = 'all') => {
  statsContainer.innerHTML = '';
  SuperAutoPets.filter(data => filter === 'all').forEach(data => {
  statsContainer.innerHTML += statsCard(data);
  })
}

function searchBar() {
  const input = document.getElementById('search-input').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const nameValue = card.querySelector('h2').textContent.toLowerCase();
    if (nameValue.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  })
}

function filterCards(filter) {
  document.querySelector('.button-container .filter-button').forEach(btn => {
      btn.classList.toggle('active');
  })

  document.querySelectorAll('.card').forEach(card => {
    const tier = card.getAttribute('data-tier');
    if (filter === 'all' || tier === filter) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  })
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => displayCards());
document.addEventListener("DOMContentLoaded", () => displayStats());
/*
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
*/
