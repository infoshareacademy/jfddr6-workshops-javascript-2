'use strict';

function renderRandomParagraph(numberOfWords) {
  function generateRandomInteger(min, max) {
    const integerMin = Math.ceil(min);
    const integerMax = Math.floor(max);
    return Math.floor(Math.random() * (integerMax - integerMin + 1) + integerMin);
  }

  function getRandomElement(array) {
    return array[generateRandomInteger(0, array.length - 1)];
  }

  const WORDS = ['var', 'const', 'let', 'function', 'class', 'return', 'for', 'while', 'do', 'switch', 'case', 'this'];

  const text = new Array(numberOfWords).fill(null).map(() => getRandomElement(WORDS)).join(' ');

  const paragraph = document.createElement('p');
  paragraph.append(text);
  document.body.append(paragraph);
}

renderRandomParagraph(5_000);
