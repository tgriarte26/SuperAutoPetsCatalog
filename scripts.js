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
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    stats: {
      damage: 2,
      health: 2,
    },
    ability: {
      levelOne: "Faint: Give a random friend +1 attack and +1 health.",
      levelTwo: "Faint: Give a random friend +2 attack and +2 health.",
      levelThree: "Faint: Give a random friend +3 attack and +3 health.",
    },
  },
  {
    name: "Beaver",
    img: "SuperAutoPetsImages/Beaver.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 3,
      health: 2,
    },
    ability: {
      levelOne: "Sell: Give two random friends +1 attack.",
      levelTwo: "Sell: Give two random friends +2 attack.",
      levelThree: "Sell: Give two random friends +3 attack.",
    },
  },
  {
    name: "Cricket",
    img: "SuperAutoPetsImages/Cricket.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 1,
      health: 3,
    },
    ability: {
      levelOne: "Faint: Summon one 1/1 Cricket.",
      levelTwo: "Faint: Summon one 2/2 Cricket.",
      levelThree: "Faint: Summon one 3/3 Cricket.",
    },
  },
  {
    name: "Duck",
    img: "SuperAutoPetsImages/Duck.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 2,
      health: 3,
    },
    ability: {
      levelOne: "Sell: Give shop pets +1 health.",
      levelTwo: "Sell: Give shop pets +2 health.",
      levelThree: "Sell: Give shop pets +3 health.",
    },
  },
  {
    name: "Fish",
    img: "SuperAutoPetsImages/Fish.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 2,
      health: 3,
    },
    ability: {
      levelOne: "Level-up: Give two friends +1 attack and +1 health.",
      levelTwo: "Level-up: Give two friends +2 attack and +2 health.",
      levelThree: "No ability.",
    },
  },
  {
    name: "Horse",
    img: "SuperAutoPetsImages/Horse.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 2,
      health: 1,
    },
    ability: {
      levelOne: "Friend summoned: Give it +1 attack until next turn.",
      levelTwo: "Friend summoned: Give it +2 attack until next turn.",
      levelThree: "Friend summoned: Give it +3 attack until next turn.",
    },
  },
  {
    name: "Mosquito",
    img: "SuperAutoPetsImages/Mosquito.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 2,
      health: 2,
    },
    ability: {
      levelOne: "Start of battle: Deal 1 damage to one random enemy.",
      levelTwo: "Start of battle: Deal 1 damage to two random enemies.",
      levelThree: "Start of battle: Deal 1 damage to three random enemies.",
    },
  },
  {
    name: "Otter",
    img: "SuperAutoPetsImages/Otter.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 1,
      health: 3,
    },
    ability: {
      levelOne: "Buy: Give one random friend +1 health.",
      levelTwo: "Buy: Give two random friends +1 health.",
      levelThree: "Buy: Give three random friends +1 health.",
    },
  },
  {
    name: "Pig",
    img: "SuperAutoPetsImages/Pig.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 4,
      health: 1,
    },
    ability: {
      levelOne: "Sell: Gain +1 Gold.",
      levelTwo: "Sell: Gain +2 Gold.",
      levelThree: "Sell: Gain +3 Gold.",
    },
  },
  {
    name: "Pigeon",
    img: "SuperAutoPetsImages/Pigeon.png",
    tierNum: 1,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier1dice.png",
    stats: {
      damage: 3,
      health: 1,
    },
    ability: {
      levelOne: "Sell: Stock one free Bread Crumbs.",
      levelTwo: "Sell: Stock two free Bread Crumbs.",
      levelThree: "Sell: Stock three free Bread Crumbs.",
    },
  },
  {
    name: "Crab",
    img: "SuperAutoPetsImages/Crab.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 4,
      health: 1,
    },
    ability: {
      levelOne:
        "Start of battle: Gain health equal to 25% of the most healthy friend.",
      levelTwo:
        "Start of battle: Gain health equal to 50% of the most healthy friend.",
      levelThree:
        "Start of battle: Gain health equal to 75% of the most healthy friend.",
    },
  },
  {
    name: "Flamingo",
    img: "SuperAutoPetsImages/Flamingo.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 3,
      health: 2,
    },
    ability: {
      levelOne:
        "Faint: Give the two nearest friends behind +1 attack and +1 health.",
      levelTwo:
        "Faint: Give the two nearest friends behind +2 attack and +2 health.",
      levelThree:
        "Faint: Give the two nearest friends behind +3 attack and +3 health.",
    },
  },
  {
    name: "Hedgehog",
    img: "SuperAutoPetsImages/Hedgehog.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 4,
      health: 2,
    },
    ability: {
      levelOne: "Faint: Deal 2 damage to ALL pets.",
      levelTwo: "Faint: Deal 4 damage to ALL pets.",
      levelThree: "Faint: Deal 6 damage to ALL pets.",
    },
  },
  {
    name: "Kangaroo",
    img: "SuperAutoPetsImages/Kangaroo.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 2,
      health: 3,
    },
    ability: {
      levelOne: "Friend ahead attacks: Gain +1 attack and +1 health.",
      levelTwo: "Friend ahead attacks: Gain +2 attack and +2 health.",
      levelThree: "Friend ahead attacks: Gain +3 attack and +3 health.",
    },
  },
  {
    name: "Peacock",
    img: "SuperAutoPetsImages/Peacock.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 2,
      health: 5,
    },
    ability: {
      levelOne: "Hurt: Gain +3 attack.",
      levelTwo: "Hurt: Gain +6 attack.",
      levelThree: "Hurt: Gain +9 attack.",
    },
  },
  {
    name: "Rat",
    img: "SuperAutoPetsImages/Rat.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 3,
      health: 6,
    },
    ability: {
      levelOne: "Faint: Summon one 1/1 Dirty Rat up front for the opponent.",
      levelTwo: "Faint: Summon two 1/1 Dirty Rat up front for the opponent.",
      levelThree:
        "Faint: Summon three 1/1 Dirty Rat up front for the opponent.",
    },
  },
  {
    name: "Snail",
    img: "SuperAutoPetsImages/Snail.png",
    tierNum: 2,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier2dice.png",
    stats: {
      damage: 2,
      health: 3,
    },
    ability: {
      levelOne:
        "End turn: If you lost last battle, give the three nearest friends ahead +1 attack.",
      levelTwo:
        "End turn: If you lost last battle, give the three nearest friends ahead +2 attack.",
      levelThree:
        "End turn: If you lost last battle, give the three nearest friends ahead +3 attack.",
    },
  },
  {
    name: "Badger",
    img: "SuperAutoPetsImages/Badger.png",
    tierNum: 3,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier3dice.png",
    stats: {
      damage: 6,
      health: 3,
    },
    ability: {
      levelOne: "Faint: Deal 50% attack damage to adjacent pets.",
      levelTwo: "Faint: Deal 100% attack damage to adjacent pets.",
      levelThree: "Faint: Deal 150% attack damage to adjacent pets.",
    },
  },
  {
    name: "Camel",
    img: "SuperAutoPetsImages/Camel.png",
    tierNum: 3,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier3dice.png",
    stats: {
      damage: 3,
      health: 4,
    },
    ability: {
      levelOne: "Hurt: Give the nearest friend behind +1 attack and +2 health.",
      levelTwo: "Hurt: Give the nearest friend behind +2 attack and +4 health.",
      levelThree:
        "Hurt: Give the nearest friend behind +3 attack and +6 health.",
    },
  },
  {
    name: "Dodo",
    img: "SuperAutoPetsImages/Dodo.png",
    tierNum: 3,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier3dice.png",
    stats: {
      damage: 4,
      health: 2,
    },
    ability: {
      levelOne: "Start of battle: Give 50% of attack to nearest friend ahead.",
      levelTwo: "Start of battle: Give 100% of attack to nearest friend ahead.",
      levelThree:
        "Start of battle: Give 150% of attack to nearest friend ahead.",
    },
  },
  {
    name: "Dog",
    img: "SuperAutoPetsImages/Dog.png",
    tierNum: 3,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier3dice.png",
    stats: {
      damage: 3,
      health: 2,
    },
    ability: {
      levelOne:
        "Friend summoned: Gain +2 attack and +1 health until end of battle.",
      levelTwo:
        "Friend summoned: Gain +4 attack and +2 health until end of battle.",
      levelThree:
        "Friend summoned: Gain +6 attack and +3 health health until end of battle.",
    },
  },
  {
    name: "Dolphin",
    img: "SuperAutoPetsImages/Dolphin.png",
    tierNum: 3,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier3dice.png",
    stats: {
      damage: 4,
      health: 3,
    },
    ability: {
      levelOne: "Start of battle: Deal 4 damage to the lowest health enemy.",
      levelTwo:
        "Start of battle: Deal 4 damage to the lowest health enemy. Triggers 2 times.",
      levelThree:
        "Start of battle: Deal 4 damage to the lowest health enemy. Triggers 3 times.",
    },
  },
  {
    name: "Bison",
    img: "SuperAutoPetsImages/Bison.png",
    tierNum: 4,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier4dice.png",
    stats: {
      damage: 4,
      health: 4,
    },
    ability: {
      levelOne:
        "End turn: If this has a level 3 friend, gain +1 attack and +2 health.",
      levelTwo:
        "End turn: If this has a level 3 friend, gain +2 attack and +4 health.",
      levelThree:
        "End turn: If this has a level 3 friend, gain +3 attack and +6 health.",
    },
  },
  {
    name: "Blowfish",
    img: "SuperAutoPetsImages/Blowfish.png",
    tierNum: 4,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier4dice.png",
    stats: {
      damage: 3,
      health: 6,
    },
    ability: {
      levelOne: "Hurt: Deal 3 damage to one random enemy.",
      levelTwo: "Hurt: Deal 6 damage to one random enemy.",
      levelThree: "Hurt: Deal 9 damage to one random enemy.",
    },
  },
  {
    name: "Deer",
    img: "SuperAutoPetsImages/Deer.png",
    tierNum: 4,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier4dice.png",
    stats: {
      damage: 3,
      health: 6,
    },
    ability: {
      levelOne: "Faint: Summon one 5/3 Bus with Chili.",
      levelTwo: "Faint: Summon one 10/6 Bus with Chili.",
      levelThree: "Faint: Summon one 15/9 Bus with Chili.",
    },
  },
  {
    name: "Armadillo",
    img: "SuperAutoPetsImages/Armadillo.png",
    tierNum: 5,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier5dice.png",
    stats: {
      damage: 4,
      health: 8,
    },
    ability: {
      levelOne: "Start of battle: Give ALL pets +8 health.",
      levelTwo: "Start of battle: Give ALL pets +16 health.",
      levelThree: "Start of battle: Give ALL pets +24 health.",
    },
  },
  {
    name: "Cow",
    img: "SuperAutoPetsImages/Cow.png",
    tierNum: 5,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier5dice.png",
    stats: {
      damage: 4,
      health: 6,
    },
    ability: {
      levelOne: "Buy: Replace shop food with two free Milk.",
      levelTwo: "Buy: Replace shop food with two free Better Milk.",
      levelThree: "Buy: Replace shop food with two free Best Milk.",
    },
  },
  {
    name: "Boar",
    img: "SuperAutoPetsImages/Boar.png",
    tierNum: 6,
    pack: "turtle",
    packImg: "packsImages/turtlepack.png",
    tierImg: "tierDiceImages/tier6dice.png",
    stats: {
      damage: 10,
      health: 6,
    },
    ability: {
      levelOne: "Before attack: Gain +4 attack and +2 health.",
      levelTwo: "Before attack: Gain +8 attack and +4 health.",
      levelThree: "Before attack: Gain +12 attack and +6 health.",
    },
  },
];

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

const cardContainer = document.querySelector(".card-container");
const statsContainer = document.querySelector(".stats-container");

const createCard = (data) => {
  return `
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
            <a href="stats.html?name=${data.name}">
              <button class="stats-button">stats</button>
            </a>
          </div>
        </div>
      </div>
    `;
};

const displayCards = (filter = "all") => {
  cardContainer.innerHTML = "";
  SuperAutoPets.filter((data) => filter === "all").forEach((data) => {
    cardContainer.innerHTML += createCard(data);
  });
};

function searchBar() {
  const input = document.getElementById("search-input").value.toLowerCase();
  document.querySelectorAll(".card").forEach((card) => {
    const nameValue = card.querySelector("h2").textContent.toLowerCase();
    if (nameValue.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function filterCards(filter, btnPressed) {
  document.querySelectorAll(".filter-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  btnPressed.classList.add("active");

  document.querySelectorAll(".card").forEach((card) => {
    const tier = card.getAttribute("data-tier");
    if (filter === "all" || tier === filter) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => displayCards());
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
