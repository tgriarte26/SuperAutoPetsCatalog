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

const tierOnePets = [
  {
    name: "Ant",
    img: "tierOnePetsImages/Ant.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Beaver",
    img: "tierOnePetsImages/Beaver.png",
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Cricket",
    img: 'tierOnePetsImages/Cricket.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Duck",
    img: 'tierOnePetsImages/Duck.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Fish",
    img: 'tierOnePetsImages/Fish.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Horse",
    img: 'tierOnePetsImages/Horse.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Mosquito",
    img: 'tierOnePetsImages/Mosquito.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
  {
    name: "Otter",
    img: 'tierOnePetsImages/Otter.png',
    tierImg: "tierDiceImages/tier1dice.png",
  },
]

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < tierOnePets.length; i++) {
    let name = tierOnePets[i].name;
    let tierOnePetsImage = tierOnePets[i].img;
    let tierImg = tierOnePets[i].tierImg;

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
    */
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, tierOnePetsImage, tierImg); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

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
  */

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newName, "- html: ", card);
}

const cardContainer = document.getElementById("card-container");

function searchBar() {
  const input = document.getElementById('input');
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

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
