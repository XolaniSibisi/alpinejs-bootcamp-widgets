function totalPhoneBill(callsAndSmsesMade){
  var totalBill = 0;
  var callsAndSmsesMadeList = callsAndSmsesMade.split(",");
  for(let i=0; i<callsAndSmsesMadeList.length; i++){
    var callsAndSmses = callsAndSmsesMadeList[i].trim();
    if(callsAndSmses.startsWith("c")){
      totalBill += 2.75;
    }
    else if(callsAndSmses.startsWith("s")){
      totalBill += 0.65;
    }
  }
  return "R"+totalBill.toFixed(2);
}
console.log(totalPhoneBill('call, sms'));