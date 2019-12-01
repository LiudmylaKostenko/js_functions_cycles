let sum_diapazons = function(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum = sum + i;
    }
}
let sumWhile = function(a, b) {
    let sum = 0;
    while (a <= b) {
        sum += a;
        a++;
    }
}

let NOD = function(a, b) {
    for (var x = a, i = 1; i < b; i++) {
        var y = i;
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
    }
    return x;
}


let Deliteli = function(n) {
    let i = 0;
    let del = '';
    while (i++ <= n) {
        if ((n != i) && (n % i == 0)) {
            del += i + ', ';
        }
    }
    del = del.substring(0, del.length - 2);
}


let kol = function getlength(number) {
    console.log('число состоит из ' + number.toString().length + ' чисел');
}

let inform = function(array) {
    let menwe = 0,
        bolwe = 0,
        chetn = 0,
        nechetn = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            bolwe++;
        } else if (array[i] < 0) {
            menwe++;
        }
        if (array[i] % 2 == 0) {
            chetn++;
        } else if (array[i] % 2 != 0) {
            nechetn++;
        }
    }
}

let calc = function(a, b, z) {
    let k = 'yes';
    let result = 0;
    while (k === 'yes') {
        let a = parseInt(prompt("введите a"));
        let b = parseInt(prompt("введите b"));
        let z = prompt("введите знак");

        if (z === '+') {
            result = a + b;
        } else if (z === '-') {
            result = a - b;
        } else if (z === '*') {
            result = a * b;
        } else if (z === '/') {
            if (b == 0) {
                console.log('На ноль делить нельзя');
            } else {
                result = a / b;
            }
        }
        k = prompt("еще раз?yes/no");
    }
}

let sdvig = function() {
    let number = prompt('Введите число');
    let right = +prompt('На сколько позиций сдвинуть');
    arr = number.split('');
    for (let i = 0; i < right; i++) {
        arr.push(arr.shift())
    }
    let result = arr.join('');
}

let whatIsday = function() {
    const daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let currentDayWeek = 0;
    let k = 'yes';
    currentDayWeek = (currentDayWeek) % daysWeek.length;
    while (k === 'yes') {
        console.log('День недели== ' + daysWeek[currentDayWeek]);
        k = prompt("Узнать следующий день?yes/no");
        currentDayWeek = (currentDayWeek + 1) % daysWeek.length;
    }
}

let table = function() {
    let result = '\n';
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            result += i * j + ' ';
        }
    }
}

let compare = function(a, b) {
    parseInt(a);
    parseInt(b);
    if (a > b) { return 1; } else if (a < b) { return -1; } else if (a = b) { return 0; }
}

let factorial = function(chislo) {
    let temp = 1;
    for (let i = 1; i <= chislo; i++) {
        temp = temp * i;
    }
    return temp;
}


let concatNumbers = function() {
    let summary = '';
    for (let i = 0; i < arguments.length; i++) {
        summary += arguments[i].toString()
    }
    console.log(summary);
}

let square = function() {
    if (arguments.length > 1) {
        return arguments[0] * arguments[1];
    } else if (arguments.length === 1) {
        return Math.pow(arguments[0], 2);
    }
}

let Deliteli = function(n) {
    let i = 0;
    let sumdel = 0;
    let message = '';
    while (i++ < n) {
        if ((n != i) && (n % i == 0)) {
            sumdel += i;
        }
    }

    function checkIdial() {
        if (sumdel === n) { message = "совершенное"; } else if (sumdel != n) { message = "число не является совершенным"; }
    }
    checkIdial();
    return message;
}

let diapazon = function(start, end) {
    start = parseInt(start);
    let n;
    let message = '';
    end = parseInt(end);
    for (n = start; n <= end; n++) {
        function Deliteli() {
            let ii = 0;
            let sumdel = 0;
            while (ii++ < n) {
                if ((n != ii) && (n % ii == 0)) {
                    sumdel += ii;
                }
            }

            function checkIdial() {
                if (sumdel === n) {
                    message += n + ', ';
                }
            }
            checkIdial();
        }
        Deliteli();
    }
    message = message.substring(0, message.length - 2);
    return ('совершенные числа из введенного диапазона: ' + message);
}

let timesSet = function(h = '00', m = '00', s = '00') {
    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);
    let timeset = new Date();
    timeset.setHours(h, m, s);
    let newSetTime = timeset.getHours() + ':' + timeset.getMinutes() + ':' + timeset.getSeconds();
    return ('now is set time: ' + newSetTime);
}

let timesSetSeconds = function(h = '00', m = '00', s = '00') {

    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);
    let timeset = new Date();
    timeset.setHours(h, m, s);
    let newSetTime = timeset.getHours() + ':' + timeset.getMinutes() + ':' + timeset.getSeconds();
    return ('now is set time: ' + newSetTime + '\n' + 'это в секундах== ' + timeset.getTime());
}

let setSeconds = function(second) {
    let dateSet = new Date();
    dateSet.setTime(second);
    let newSetTime = dateSet.getHours() + ':' + dateSet.getMinutes() + ':' + dateSet.getSeconds();
    return ('now is set time HH:MM:SS: ' + newSetTime);
}


let subtract2 = function(dateyear1, datemonth1, dateday1, dateyear2, datemonth2, dateday2) {
    let dateSetfirst = new Date(dateyear1, datemonth1, dateday1);
    let dateSetsecond = new Date(dateyear2, datemonth2, dateday2);
    let raznost = dateSetsecond.getTime() - dateSetfirst.getTime();
    return raznost.toDateString;
}