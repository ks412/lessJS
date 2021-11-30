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