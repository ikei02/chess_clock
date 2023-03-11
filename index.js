function onCheckAdditionalSecondsCheck(){
  var additionalSecondsCheckElement = document.getElementById("additionalSecondsCheck");
  var additionalSecondsNumberElement = document.getElementById("additionalSecondsNumber");

  additionalSecondsNumberElement.disabled = !additionalSecondsCheckElement.checked;
}

function onCheckCountDownSecondsCheck(){
  var countDownSecondsCheckElement = document.getElementById("countDownCheck");
  var countDownSecondsNumberElement = document.getElementById("countDownNumber");

  countDownSecondsNumberElement.disabled = !countDownSecondsCheckElement.checked;
}

function checkFormat(str){
  if(str.indexOf(".") !== -1)return false;
  if(str.indexOf(".") !== -1)return false;
  return true;
}

function onClickStart(){
  console.log("start")
  var optionParams = ""

  var soundOptionCheckElement = document.getElementById("soundOptionCheck");
  console.log(`サウンドオプション:${soundOptionCheckElement.checked}`)
  var soundOption = soundOptionCheckElement.checked;
  optionParams += `&so=${soundOption}`

  
  var additionalSecondsCheckElement = document.getElementById("additionalSecondsCheck");
  console.log(`追加秒数オプション:${additionalSecondsCheckElement.checked}`)
  var AdditionalSecondsOption = additionalSecondsCheckElement.checked;
  optionParams += `&adto=${AdditionalSecondsOption}`
  
  var countDownCheckElement = document.getElementById("countDownCheck");
  console.log(`秒読みオプション:${countDownCheckElement.checked}`)
  var countDownOption = countDownCheckElement.checked;
  optionParams += `&co=${countDownOption}`
  
  if(AdditionalSecondsOption){
    var additionalSecondsNumberElement = document.getElementById("additionalSecondsNumber");
    var additionalSeconds = parseInt(additionalSecondsNumberElement.value);
    console.log(`追加秒数の長さ:${additionalSeconds}`)
    optionParams += `&adt=${additionalSeconds}`
  }
  
  if(countDownOption){
    var countDownNumberElement = document.getElementById("countDownNumber")
    var countDownSeconds = parseInt(countDownNumberElement.value)
    console.log(`秒読みの長さ:${countDownSeconds}`)
    optionParams += `&cdt=${countDownSeconds}`
  }
  
  var firstAttackTimeinputElement = document.getElementById("firstAttackTimeInput")
  var firstAttackTimeSeconds = parseInt(firstAttackTimeinputElement.value)
  console.log(`先行の持ち時間の長さ:${firstAttackTimeSeconds}`)
  
  var secondAttackTimeinputElement = document.getElementById("secondAttackTimeInput")
  var secondAttackTimeSeconds = parseInt(secondAttackTimeinputElement.value)
  console.log(`後攻の持ち時間の長さ:${secondAttackTimeSeconds}`)
  if(firstAttackTimeSeconds<0 || !checkFormat(firstAttackTimeinputElement.value)){
    //NG
    alert("先行の時間設定が不正です")
  }else if(secondAttackTimeSeconds<0 || !checkFormat(secondAttackTimeinputElement.value)){
    alert("後攻の時間設定が不正です")
  }else if(AdditionalSecondsOption==true && additionalSeconds<0){
    alert("追加秒数の時間設定が不正です")
  }else if(countDownOption==true && countDownSeconds<0){
    alert("秒読みの長さが不正です")
  }else{
    window.open(`./main.html?ft=${firstAttackTimeSeconds}&st=${secondAttackTimeSeconds}${optionParams}`, "_blank")
  }
  
}