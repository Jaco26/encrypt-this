
function MakeSuperSecretCodeWriter() {


  function grounds(shuffleFactor) {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()\'";:/?.,';
    let i;
    for (i = 0; i < shuffleFactor; i++) {
      chars = chars.split('').sort((a, b) => Math.random() > 0.5 ? 1 : -1).join('')
    }
    return chars
  }

  const chars = grounds(10);


  const alpha = [
    ['a', '!', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', '?', 'l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's'],
    ['t', 'u', 'v', '.'],
    ['w', ',', 'x'],
    ['y', 'z'],
  ];

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

const coder = MakeSuperSecretCodeWriter();

const codeStr = coder.encode('Hello Caroline. Ba ba ba. How are you?');


// console.log('\n', 'Coded String = ', codeStr, '\n');

const decodedStr = coder.decode('1005151518 030021181511170533 0200 0200 020033 101840 002105 50183114')

console.log(decodedStr)


// const decodedStr = coder.decode(codeStr);

// console.log(decodedStr);