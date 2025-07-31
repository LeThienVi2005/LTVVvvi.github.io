// =====================================================================================================================
// 1. Playable Piano Script
// =====================================================================================================================
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  pianoAudio = new Audio(`tunes/a.wav`); // Renamed to pianoAudio to avoid conflict

const playTune = (key) => {
  pianoAudio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  pianoAudio.play(); // playing audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
  clickedKey.classList.add("active"); // adding active class to the clicked key element
  setTimeout(() => {
    // removing active class after 150 ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
  // calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  pianoAudio.volume = e.target.value; // passing the range slider value as an audio volume
};

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

// =====================================================================================================================
// 2. Hangman Game Script
// =====================================================================================================================

// Word list for Hangman game (assuming this was in word-list.js)
const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
},
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
];

const hangmanWordDisplay = document.querySelector(".hangman-section .word-display");
const hangmanGuessesText = document.querySelector(".hangman-section .guesses-text b");
const hangmanKeyboardDiv = document.querySelector(".hangman-section .keyboard");
const hangmanImage = document.querySelector(".hangman-section .hangman-box img");
const hangmanGameModal = document.querySelector(".hangman-section .game-modal");
const hangmanPlayAgainBtn = hangmanGameModal.querySelector("button");

// Initializing game variables
let hangmanCurrentWord, hangmanCorrectLetters, hangmanWrongGuessCount;
const hangmanMaxGuesses = 6;

const resetHangmanGame = () => {
  // Ressetting game variables and UI elements
  hangmanCorrectLetters = [];
  hangmanWrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  hangmanGuessesText.innerText = `${hangmanWrongGuessCount} / ${hangmanMaxGuesses}`;
  hangmanWordDisplay.innerHTML = hangmanCurrentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  hangmanKeyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  hangmanGameModal.classList.remove("show");
};

const getRandomHangmanWord = () => {
  // Selecting a random word and hint from the wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  hangmanCurrentWord = word; // Making hangmanCurrentWord as random word
  document.querySelector(".hangman-section .hint-text b").innerText = hint;
  resetHangmanGame();
};

const hangmanGameOver = (isVictory) => {
  // After game complete.. showing modal with relevant details
  const modalText = isVictory ? `You found the word:` : "The correct word was:";
  hangmanGameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
  hangmanGameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
  hangmanGameModal.querySelector("p").innerHTML = `${modalText} <b>${hangmanCurrentWord}</b>`;
  hangmanGameModal.classList.add("show");
};

const initHangmanGame = (button, clickedLetter) => {
  // Checking if clickedLetter is exist on the hangmanCurrentWord
  if (hangmanCurrentWord.includes(clickedLetter)) {
    // Showing all correct letters on the word display
    [...hangmanCurrentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        hangmanCorrectLetters.push(letter);
        hangmanWordDisplay.querySelectorAll("li")[index].innerText = letter;
        hangmanWordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // If clicked letter doesn't exist then update the hangmanWrongGuessCount and hangman image
    hangmanWrongGuessCount++;
    hangmanImage.src = `images/hangman-${hangmanWrongGuessCount}.svg`;
  }
button.disabled = true; // Disabling the clicked button so user can't click again
  hangmanGuessesText.innerText = `${hangmanWrongGuessCount} / ${hangmanMaxGuesses}`;

  // Calling hangmanGameOver function if any of these condition meets
  if (hangmanWrongGuessCount === hangmanMaxGuesses) return hangmanGameOver(false);
  if (hangmanCorrectLetters.length === hangmanCurrentWord.length) return hangmanGameOver(true);
};

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  hangmanKeyboardDiv.appendChild(button);
  button.addEventListener("click", (e) => initHangmanGame(e.target, String.fromCharCode(i)));
}

// Initial call for Hangman game
// getRandomHangmanWord(); // This will be called in DOMContentLoaded
hangmanPlayAgainBtn.addEventListener("click", getRandomHangmanWord);

// =====================================================================================================================
// 3. Image Editor Script
// =====================================================================================================================
const imageEditorFileInput = document.querySelector(".image-editor-container .file-input"),
  imageEditorFilterOptions = document.querySelectorAll(".image-editor-container .filter button"),
  imageEditorFilterName = document.querySelector(".image-editor-container .filter-info .name"),
  imageEditorFilterValue = document.querySelector(".image-editor-container .filter-info .value"),
  imageEditorFilterSlider = document.querySelector(".image-editor-container .slider input"),
  imageEditorRotateOptions = document.querySelectorAll(".image-editor-container .rotate button"),
  imageEditorPreviewImg = document.querySelector(".image-editor-container .preview-img img"),
  imageEditorResetFilterBtn = document.querySelector(".image-editor-container .reset-filter"),
  imageEditorChooseImgBtn = document.querySelector(".image-editor-container .choose-img"),
  imageEditorSaveImgBtn = document.querySelector(".image-editor-container .save-img");

let imageEditorBrightness = "100",
  imageEditorSaturation = "100",
  imageEditorInversion = "0",
  imageEditorGrayscale = "0";
let imageEditorRotate = 0,
  imageEditorFlipHorizontal = 1,
  imageEditorFlipVertical = 1;

const loadImageEditor = () => {
  let file = imageEditorFileInput.files[0];
  if (!file) return;
  imageEditorPreviewImg.src = URL.createObjectURL(file);
  imageEditorPreviewImg.addEventListener("load", () => {
    imageEditorResetFilterBtn.click();
    document.querySelector(".image-editor-container").classList.remove("disable");
  });
};

const applyImageEditorFilter = () => {
  imageEditorPreviewImg.style.transform = `rotate(${imageEditorRotate}deg) scale(${imageEditorFlipHorizontal}, ${imageEditorFlipVertical})`;
imageEditorPreviewImg.style.filter = `brightness(${imageEditorBrightness}%) saturate(${imageEditorSaturation}%) invert(${imageEditorInversion}%) grayscale(${imageEditorGrayscale}%)`;
};

imageEditorFilterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".image-editor-container .filter .active").classList.remove("active");
    option.classList.add("active");
    imageEditorFilterName.innerText = option.innerText;

    if (option.id === "brightness") {
      imageEditorFilterSlider.max = "200";
      imageEditorFilterSlider.value = imageEditorBrightness;
      imageEditorFilterValue.innerText = `${imageEditorBrightness}%`;
    } else if (option.id === "saturation") {
      imageEditorFilterSlider.max = "200";
      imageEditorFilterSlider.value = imageEditorSaturation;
      imageEditorFilterValue.innerText = `${imageEditorSaturation}%`;
    } else if (option.id === "inversion") {
      imageEditorFilterSlider.max = "100";
      imageEditorFilterSlider.value = imageEditorInversion;
      imageEditorFilterValue.innerText = `${imageEditorInversion}%`;
    } else {
      imageEditorFilterSlider.max = "100";
      imageEditorFilterSlider.value = imageEditorGrayscale;
      imageEditorFilterValue.innerText = `${imageEditorGrayscale}%`;
    }
  });
});

const updateImageEditorFilter = () => {
  imageEditorFilterValue.innerText = `${imageEditorFilterSlider.value}%`;
  const selectedFilter = document.querySelector(".image-editor-container .filter .active");

  if (selectedFilter.id === "brightness") {
    imageEditorBrightness = imageEditorFilterSlider.value;
  } else if (selectedFilter.id === "saturation") {
    imageEditorSaturation = imageEditorFilterSlider.value;
  } else if (selectedFilter.id === "inversion") {
    imageEditorInversion = imageEditorFilterSlider.value;
  } else {
    imageEditorGrayscale = imageEditorFilterSlider.value;
  }
  applyImageEditorFilter();
};

imageEditorRotateOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.id === "left") {
      imageEditorRotate -= 90;
    } else if (option.id === "right") {
      imageEditorRotate += 90;
    } else if (option.id === "horizontal") {
      imageEditorFlipHorizontal = imageEditorFlipHorizontal === 1 ? -1 : 1;
    } else {
      imageEditorFlipVertical = imageEditorFlipVertical === 1 ? -1 : 1;
    }
    applyImageEditorFilter();
  });
});

const resetImageEditorFilter = () => {
  imageEditorBrightness = "100";
  imageEditorSaturation = "100";
  imageEditorInversion = "0";
  imageEditorGrayscale = "0";
  imageEditorRotate = 0;
  imageEditorFlipHorizontal = 1;
  imageEditorFlipVertical = 1;
  imageEditorFilterOptions[0].click();
  applyImageEditorFilter();
};

const saveImageEditor = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imageEditorPreviewImg.naturalWidth;
  canvas.height = imageEditorPreviewImg.naturalHeight;
ctx.filter = `brightness(${imageEditorBrightness}%) saturate(${imageEditorSaturation}%) invert(${imageEditorInversion}%) grayscale(${imageEditorGrayscale}%)`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (imageEditorRotate !== 0) {
    ctx.rotate((imageEditorRotate * Math.PI) / 180);
  }
  ctx.scale(imageEditorFlipHorizontal, imageEditorFlipVertical);
  ctx.drawImage(imageEditorPreviewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();
};

imageEditorFilterSlider.addEventListener("input", updateImageEditorFilter);
imageEditorResetFilterBtn.addEventListener("click", resetImageEditorFilter);
imageEditorSaveImgBtn.addEventListener("click", saveImageEditor);
imageEditorFileInput.addEventListener("change", loadImageEditor);
imageEditorChooseImgBtn.addEventListener("click", () => imageEditorFileInput.click());

// =====================================================================================================================
// DOMContentLoaded - Initialize all components after the DOM is fully loaded
// =====================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  getRandomHangmanWord(); // Initialize Hangman game
  // Any other initializations can go here
});