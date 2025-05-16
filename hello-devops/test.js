const greet = require('./app');

if(greet()==="Hello from Devops"){
    console.log("test passed");
    Process.exit(0);
}else{
    console.log("test failed")
    process.exit(1);
}