const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('ki khobor dosto');
    }
    
}
const askSomething =()=>{
    const decision = confirm('Are you coming pincin?');
    if(decision === true){
        alert('dosto 500tk bakash kor');
    }
    else{
        console.log('ja dure gia mor ');
    }
}
const getUserInfo = () =>{
    const name = prompt('Tell us your name');
    console.log(name);
    if(!!name){
        console.log('welcome here ',name);
    }
}