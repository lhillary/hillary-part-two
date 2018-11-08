var eventType = prompt ("Are you attending a casual, semi-formal, or formal event?");
var tempFahr = prompt ("What is the temperature (in degrees fahrenheit)?");
var result;

if (eventType == "casual") {
  if (tempFahr < 54) {
    result = ("something comfy and a coat.");
    console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr <= 70 && tempFahr >= 54) {
      result = ("something comfy and a jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr >70) {
      result = ("something comfy and no jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  }
} else if (eventType == "semi-formal") {
  if (tempFahr < 54) {
    result = ("a polo and a coat.");
    console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr <= 70 && tempFahr >= 54) {
      result = ("a polo and a jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr >70) {
      result = ("a polo and no jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  }
} else if (eventType == "formal") {
  if (tempFahr < 54) {
    result = ("a suit and a coat.");
    console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr <= 70 && tempFahr >= 54) {
      result = ("a suit and a jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  } else if (tempFahr >70) {
      result = ("a suit and no jacket.");
      console.log("Since it's " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result);
  }
} else {
  console.log("Since you're apparently going nowhere, you'd might as well be naked.")
}