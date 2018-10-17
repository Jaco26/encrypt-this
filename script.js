
function MakeSuperSecretCodeWriter() {

  const alpha = [
    ['a', '!', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', '?', 'l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's'],
    ['t', 'u', 'v', '.'],
    ['w', ',', 'x'],
    ['y', 'z'],
  ];

  function base() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()\'";:/?.,';
  }

  function encode(str) {
    const encodedString = str.split('').reduce((accum, char) => {
      char = char.toLowerCase();
      accum += alpha.reduce((a, innerArr, outerI) => {
        if (innerArr.indexOf(char) > -1) {
          a += `${outerI}${innerArr.indexOf(char)}`;
        } else if (char === ' ') {
          a += char;
        }
        return a;
      }, '');
      return accum;
    }, '');
    return encodedString.split(' ').filter(item => item).join(' ');
  }

  function decode(codeStr) {
    const wordArr = codeStr.split(' ');
    let result = '';

    let i;
    for (i = 0; i < wordArr.length; i++) {
      const word = wordArr[i];
      const characterArr = word.split('');
      let j;
      for (j = 0; j < characterArr.length; j += 2) {        
        const outerI = characterArr[j];
        const innerI = characterArr[j + 1];
        result += alpha[outerI][innerI];
      }
      result += ' '; 
    }
    return result;
  }

  return {
    encode,
    decode,
  };

}

// const coder = MakeSuperSecretCodeWriter();

// const codeStr = coder.encode('Hi how are you?');

// console.log(codeStr);


// const decodedStr = coder.decode(codeStr);

// console.log(decodedStr);