//callback - Function passed as argument

function greetConsole(name){
    console.log('Hey Hello',name)
}

function greetHeading(name){
    const heading = document.querySelector('h1')
    heading.innerHTML = 'Hello ' + name
}

function greet(callback){
    callback('Ram');
}

greet(greetConsole)
greet(greetHeading)

// greet(name => {
//     const heading = document.querySelector('h1')
//     heading.innerHTML = 'hello ' + name
// })