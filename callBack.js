const funA = (name ,callback) =>{
    console.log(`Welcome ${ name }we r testing call back function` )
    callback();
}

const funB =() =>{
    console.log(`successfully w have tested callback`)
}

funA("krishna",funB)