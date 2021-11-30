/*
//ebugger
 function walid() {
let i = 0;
do {
    i++
} while (i < numberN.length);
if (i < 6) {
    confirm("Число содержит меньше шести знаков")
    numberN = prompt("Введите шестизначное число")
    walid();
    
}
        if (i >= 7) {
            confirm("Число содержит больше шести знаков")
            numberN = prompt("Введите шестизначное число")
            walid();
}           if (i === 6){
                Number(numberN)
                return numberN;
}
else {
    walid();
}
}
let numberN = prompt("Введите шестизначное число")
console.log(walid(numberN))
let num1 = 0;
let num2 = 0;
let array = [];
for (let i = 0; i < 6; i++) {
   array.push(numberN[i]);
}
array = array.map(Number);
for (let j = 0; j < 3; j++) {
    num1 += array[j]
}
for (let k = 3; k <= 5; k++) {
    num2 += array[k]
}
if (num1 === num2){
}
console.log(num1, num2)
*/



//debugger
let numberN = '';
let array = [];
for (let i = 1000; i < 10000; i++) {
    numberN = String(i);

    for (let j = 0; j <=3; j++){
        array.push(numberN[j]);
        array = array.map(Number);
       if (array[0] + array[1] === array[2] + array[3]) {
            let result = "";
            for (let k = 0; k <= array.length -1; k++){
                result += array[k]
            }   console.log(result)
       }
    }
    array = [];
    

}



{
    let array = [1, 3, 5, 45, 6, 9, 0, 10, 7];
        for (let i = 0; i < array.length; i++) {
            array[i];
            if (array[i] > 3 && array[i] < 10) {
                console.log(array[i])
        }
    }
}

{

    let array = [-1, 3, -5, 45, -6, 9, 0, -10, 7];
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            array[i];
            if (array[i] > 0) {
                sum += array[i]
        }
    }
    console.log(sum)
}

{

    let array = [1, 3, 4, 45, 6, 9, 4, 10, 7];
        for (let i = 0; i < array.length; i++) {
            array[i];
            if (array[i] === 4) {
                console.log('Есть!')
        }
    }
    

}

{

    {

        let array = [40, 30, 40, 450, 60, 900, 400, 1000, 700];
        let str = "";
            for (let i = 0; i < array.length; i++) {
                str += array[i];
            }
            for (let j = 0; j < str.length; i++) {
                if (str.startsWith('4')) {
                    console.log(array[i])
            }
        }
        
    }

}