
function convertToNumber(value) {
    return parseFloat(value);
}
function handledeposit(){
    var inputvalue = document.getElementById("input").value;
    var convin = convertToNumber(inputvalue);
    var depositamout = document.getElementById("depo").innerText;
    var convdepo = convertToNumber(depositamout);
    var sum =convin+convdepo;
    document.getElementById("depo").innerText = sum;
    document.getElementById("input").value ="";
    var total = document.getElementById("ttl").innerText;
    var convtotal = convertToNumber(total);
    document.getElementById("ttl").innerText = convtotal+convin;
}
function handlewithdraw(){
    var inputvalue = document.getElementById("with-input").value;
    var convin = convertToNumber(inputvalue);
    var withamout = document.getElementById("with").innerText;
    var convdepo = convertToNumber(withamout);
    var sum =convin+convdepo;
    document.getElementById("with").innerText = sum;
    document.getElementById("with-input").value ="";
    
    var total = document.getElementById("ttl").innerText;
    var convtotal = convertToNumber(total);
    document.getElementById("ttl").innerText = convtotal-convin;
}