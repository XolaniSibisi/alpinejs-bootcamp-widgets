var greet = function(name){
  if(name.match(/^[A-Za-z]+$/)){
    return "Hello, " + name;
  }
  else if(name.match(/^[0-9][A-Za-z]/)){
    return "Name cannot start with number";
  }
  else if(!name){
    return "Enter a valid name";
  }
  else if(name.match(/[0-9]*/)){
    return 'Invalid name';
  }
  
}
console.log(greet("Xolani"));