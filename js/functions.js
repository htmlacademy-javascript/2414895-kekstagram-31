const checkStringLength = (sentense='', maxLength=1) => {
  return sentense.length<=maxLength;
}

const getIsPolindrom = (string='') => {
  let sentense = string.replaceAll(' ','').toLowerCase();
  let reverseSentense='';
  for (let i=0; i<sentense.length; i++) {
    reverseSentense += sentense[sentense.length - 1 - i];
  }
  return sentense===reverseSentense;
}

function getNumbers(sentense) {
  let number = '';
  let string = String(sentense).replaceAll(' ','');
  for (let i = 0; i < string.length; i++) {
    if (+string[i]>=0) {
      number += string[i];
    }
  }
  return +number>0 ? +number : NaN;
}


