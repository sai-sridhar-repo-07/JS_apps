const winCombinations = {
  scissor: "paper",
  paper: "rock",
  rock: "scissor",
};

const optionObj = [
  { scissorImg: "/images/icon-scissors.svg" },
  { rockImg: "/images/icon-rock.svg" },
  { paperImg: "/images/icon-paper.svg" },
];

const gameArena = document.querySelector(".game-arena");
const actionArena = document.querySelector(".game-in-action");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");
const leftCont = document.querySelector(".left-game");
const rightCont = document.querySelector(".right-game");
const playAgainBtn = document.querySelector(".play-again");
const winPara = document.querySelector(".win");
const losePara = document.querySelector(".lose");
const winGame = document.querySelector(".wingame");
const scoreBoard = document.querySelector(".score-number");

const ruleB = document.querySelector(".rule-b");
const ruleBox = document.querySelector(".rules-box");
const closeBtn = document.querySelector(".close-btn");
const rulesBtn = document.querySelector(".rules");

let option = "";

const optionImages = document.querySelectorAll(".option");

const findIndex = () => {
  return Math.floor(Math.random() * 2);
};

const handleWinner = (first, second) => {
  if (first === "scissors" && second === "paper") {
    return 1;
  }
  if (first === "paper" && second === "rock") {
    return 1;
  }
  if (first === "rock" && second === "scissors") {
    return 1;
  }

  return 0;
};

const resultDecider = (first, second) => {
  setTimeout(() => {
    const result = handleWinner(first, second);
    winGame.classList.toggle("active");
    if (result) {
      winPara.classList.toggle("active");
      let score = Number(scoreBoard.textContent);
      score = score + 1;
      scoreBoard.textContent = score;
    } else {
      losePara.classList.toggle("active");
    }
  }, 3000);
};

const findAndFilterIndex = (seletced_option) => {
  if (seletced_option === "scissors") {
    const newOptionArray = optionObj.filter((item, index) => {
      return index != 0;
    });

    const rand_ind = findIndex();
    if (rand_ind === 0) {
      rightBox.src = newOptionArray[0].rockImg;
      rightCont.classList.add("rock");
      resultDecider(seletced_option, "rock");
    } else {
      rightBox.src = newOptionArray[1].paperImg;
      rightCont.classList.add("paper");
      resultDecider(seletced_option, "paper");
    }
  } else if (seletced_option === "rock") {
    const newOptionArray = optionObj.filter((item, index) => {
      return index != 1;
    });

    const rand_ind = findIndex();
    if (rand_ind === 0) {
      rightBox.src = newOptionArray[0].scissorImg;
      rightCont.classList.add("scissors");
      resultDecider(seletced_option, "scissors");
    } else {
      rightBox.src = newOptionArray[1].paperImg;
      rightCont.classList.add("paper");
      resultDecider(seletced_option, "paper");
    }
  } else if (seletced_option === "paper") {
    const newOptionArray = optionObj.filter((item, index) => {
      return index != 2;
    });

    const rand_ind = findIndex();
    if (rand_ind === 0) {
      rightBox.src = newOptionArray[0].scissorImg;
      rightCont.classList.add("scissors");
      resultDecider(seletced_option, "scissors");
    } else {
      rightBox.src = newOptionArray[1].rockImg;
      rightCont.classList.add("rock");
      resultDecider(seletced_option, "rock");
    }
  }
};

optionImages.forEach((item) => {
  item.addEventListener("click", () => {
    gameArena.classList.toggle("active");
    actionArena.classList.toggle("active");
    if (item.classList.contains("scissors")) {
      leftBox.src = optionObj[0].scissorImg;
      leftCont.classList.toggle("scissors");
      findAndFilterIndex("scissors");
    } else if (item.classList.contains("rock")) {
      console.log("rock 1");
      leftBox.src = optionObj[1].rockImg;
      leftCont.classList.toggle("rock");

      findAndFilterIndex("rock");
    } else if (item.classList.contains("paper")) {
      leftBox.src = optionObj[2].paperImg;
      leftCont.classList.toggle("paper");
      findAndFilterIndex("paper");
    }
  });
});

playAgainBtn.addEventListener("click", () => {
  gameArena.classList.toggle("active");
  actionArena.classList.toggle("active");
  winGame.classList.toggle("active");
  winPara.classList.remove("active");
  losePara.classList.remove("active");
  rightCont.classList = "right-game";
  leftCont.classList = "left-game";
  //   rightCont.classList.add("right-game");
});

rulesBtn.addEventListener("click", () => {
  ruleB.classList.toggle("active");
  ruleBox.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  ruleB.classList.toggle("active");
  ruleBox.classList.toggle("active");
});
