const generateRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Получение массива случайной длины из другого массива
const getArrayRandomLength = function (someArray) {
  const someIndexArray = generateRandomNumber(1, someArray.length); // Получение рандомного индекса элемента массива
  const newRandomArray = [];
  for (let i = 0; i < someIndexArray; i++) {
    newRandomArray.push(someArray[i]);
  }
  return newRandomArray;
};

const addElementToDom = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
};

const hideElement = function (element) {
  element.classList.add('hidden');
};

const showElement = function (element) {
  element.classList.remove('hidden');
};

export { generateRandomNumber };
export { getArrayRandomLength };
export { addElementToDom };
export { hideElement };
export { showElement };
