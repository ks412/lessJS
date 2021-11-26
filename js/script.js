{
    //debugger
    
    let str = 'Я учу javascript';
    let result = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' ') {
            result++
        }
    }
    console.log(result)
    console.log(str.substr(0, 1));
    console.log(str.substring(0, 1));
    console.log(str.slice(0, 1));
    console.log(str.indexOf('учу'));
    }
    
    
    
    
    {
        function MaxLengthStr() {
            let n = 40;
            let result = '';
            if (str.length > n) {
                for (let i = 0; i <= n; i++) {
                    result += str[i];
                }
            } else {
                return result = str;
            }
    
            return result + '...';
        }
    
        let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam, corporis necessitatibus a repellendus quo et doloremque porro impedit est dolor facere similique modi non accusamus architecto. Distinctio, quidem eaque!";
    
        console.log(MaxLengthStr(str));
    
    }
    
    
    {
    let str = 'js'
    console.log(str);
    let UpperCase = str.toLocaleUpperCase();
    console.log(UpperCase);
    let LowerCase = UpperCase.toLocaleLowerCase();
    console.log(LowerCase);
    }
    
    {
    console.log(Math.floor(Math.random() * 100));
    
        let array = [];
    
    for (let i = 0; i < 10; i++) {
    
        let randomNum = (Math.floor(Math.random() * 10) +1);
        array.push(randomNum);
    
    }
    
    console.log(array);
    }
    {
    
    let str = 'aaa bbb ccc'
    console.log(str.substr(4, 3) = str);
    //console.log(str.substring(0, 1));
    //console.log(str.slice(0, 1));
    //console.log(str.indexOf('учу'));
    
    }