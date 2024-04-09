

function validateText (textContent) {
  const text =textContent.split('');
  console.log(text);
  console.log(text.length);
  if (textContent === '') {
    return true;
  } else if (text.length > 140) {
    return false;
  } else {
    return true;
  }
}


//console.log(uniqItem('1 2 1'));
console.log(validateText(''));

//console.log(uniqItem('#ghkU #oijl k k'));
//console.log(uniqItem('1 1 2'));
//console.log(validateHashtags('#ghkU jlklm #oijl'));
//console.log(validateHashtags(''));

