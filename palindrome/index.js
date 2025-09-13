const input= document.getElementById("input")

function reverseofstring(str){
    return  str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse =reverseofstring(value)
    if(value === reverse){
        alert("yes palindrome")
    }else{
         alert("not palindrome!")
    } 
}