function greet(name) {
    let result = 'Hello there!'
    if(name){
        if(Array.isArray(name)){
            name = name.join(', ');
        }
        result = `Hello, ${name}`;
        if(name.toUpperCase() === name){
            result = `HELLO ${name}!`;
        }
    }
    return result
  }
  