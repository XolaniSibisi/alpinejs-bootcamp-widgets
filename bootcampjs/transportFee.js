function transportFee(shift){
    if(shift === "morning"){
      return "R20";
    }
    else if(shift === "afternoon"){
      return "R10";
      }
    else if(shift === "nightshift"){
      return "free";
     }
     else{
      return "Can only accepts morning, afternoon, and nightshift";
     }
    }
    console.log(transportFee("afternoon"));