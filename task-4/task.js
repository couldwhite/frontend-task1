let word = prompt("Введите слово: ");

function polindromTwo(word) {
    word = word.trim();
    word = word.toUpperCase();
    let flag = true;
    console.log(word, word.length / 2);
    for (let i = 0, j = word.length - 1; i !== Math.round(word.length / 2); i++, j--) {
        console.log('word[i]', word[i]);
        if (word[i] !== word[j]) {
            flag = false;
            break;
        }
    }
    return flag
}

if (polindromTwo(word)) alert(`${word} - Палиндром!`)
else alert(`${word} -  не палиндром!`);