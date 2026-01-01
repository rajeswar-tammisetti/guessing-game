function check(){
    let min=1;
    let max=100;
    let num= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
    let input=input_raw=1;
    let loop=true;
    let attempts=0
    while(loop){
        input_raw=window.prompt("Guess a number between 1 to 100\n(Or click Cancel to quit)");
        if  (input_raw ===null){
            window.alert("You gave up loser! 😎");
            loop=false;
            continue;
        }
        attempts++;
        input=parseInt(input_raw);
        if (isNaN(input)){
            window.alert("Thats not a number Noob!");
            continue;
        }
        else if (input>num){
            window.alert("Too HIGH! Try again.");
        }
        else if(input <num){
            window.alert("Too LOW! Try again.");
        }
        else if(input==num){
            window.alert(`Correct. It took you ${attempts} tries.`);
            loop=false;
        }
    }

}

