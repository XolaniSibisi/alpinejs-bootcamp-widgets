function enoughAirtime(projectedUsage, airtimeAvailable){
  var projectedUsageList = projectedUsage.split(",");
  var totalCost = 0;
  for(let i=0; i<projectedUsageList.length; i++){
    var projectedUsageTrimmed = projectedUsageList[i].trim();
    if(projectedUsageTrimmed.startsWith("call")){
      totalCost += 1.88
    }
    else if(projectedUsageTrimmed.startsWith("data")){
      totalCost += 12;
    }
    else if(projectedUsageTrimmed.startsWith("sms")){
      totalCost += 0.75;
    }
    
  }
  var airtimeLeft = airtimeAvailable-totalCost; 
  if(airtimeLeft > 0){
    return "R"+(airtimeLeft).toFixed(2);
  }
  else{
      //cost = 0;
      //return "R"+cost.toFixed(2);
    return "R0.00";
  }
}
console.log(enoughAirtime('data,sms,data,sms', 20));