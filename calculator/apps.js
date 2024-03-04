var num1=prompt("Enter Your First Digit")
var num2=prompt("Enter Your Second Digit")
var result=prompt("Enter Your Aperator")

if (result == "+") {
    alert(num1 + num2);
    
}
else if (result == "-") {
    alert(num1 - num2);
    
}
else if (result == "*") {
    alert(num1 * num2);
    
}
else if(result == "/") {
    alert(num1 / num2);
    
}
else if(result == "**") {
    alert(num1 ** num2);

}
else{
    alert("Invalid Input");

}