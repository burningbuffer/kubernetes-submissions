
function randomString(){
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 12;
    let result = "";

    for(let i = 0; i < length; i++){
        const pos = Math.floor(Math.random() * charList.length);
        result += charList[pos];
    }
 
    return result;
}

function displayStr(str){
    console.log(`${new Date().toISOString()}: ${str}`);

    setTimeout(() => displayStr(str), 5000);
}

let str = randomString();

displayStr(str);

