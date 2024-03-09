const checkStringLength = (sentense = '', maxLength = 1) => sentense.length <= maxLength;

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false


const getIsPolindrom = (string = '') => {
  const sentense = string.replaceAll(' ','').toLowerCase();
  let reverseSentense = '';git pull academy master
  for (let i = 0; i < sentense.length; i++) {
    reverseSentense += sentense[sentense.length - 1 - i];
  }
  return sentense === reverseSentense;
};

getIsPolindrom('топот'); // true
getIsPolindrom('ДовОд'); // true
getIsPolindrom('Кекс'); // false
getIsPolindrom('Лёша на полке клопа нашёл '); // true

const getNumbers = (sentense) => {
  let number = '';
  const string = String(sentense).replaceAll(' ','');
  for (let i = 0; i < string.length; i++) {
    if (+string[i] >= 0) {
      number += string[i];
    }
  }
  return +number > 0 ? +number : NaN;
};


getNumbers('2023 год'); // 2023
getNumbers('ECMAScript 2022'); // 2022
getNumbers('1 кефир, 0.5 батона'); // 105
getNumbers('агент 007'); // 7
getNumbers('а я томат'); // NaN
getNumbers(2023); // 2023
getNumbers(-1); // 1
getNumbers(1.5); // 15
