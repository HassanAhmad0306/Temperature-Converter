let cel=document.getElementById("celcius-input");
let farh=document.getElementById("farhenheit-input");

cel.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
     f=f.toFixed(1);   
    }
    farh.value=f;
});

farh.addEventListener('input',function(){
    let fahrenheit = parseFloat(farh.value);
    
    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * (5 / 9);

    if (Number.isInteger(celsius)) {
        // If it's a whole number, show no decimals
        cel.value = celsius.toString();
    } else {
        // Show up to 7 decimal places for fractional results
       cel.value = celsius.toFixed(7).replace(/\.?0+$/, '');
    }
});
