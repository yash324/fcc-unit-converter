/*
*
*
*       Complete the handler logic below
*       
*       
*/
const units = {
  gal: {convertsTo: "l", conversionRate: 3.78541, longSpelling: "gallons"},
  l: {convertsTo: "gal", conversionRate: 0.264172, longSpelling: "litres"},
  mi: {convertsTo: "km", conversionRate: 1.60934, longSpelling: "miles"},
  km: {convertsTo: "mi", conversionRate: 0.621371, longSpelling: "kilometres"},
  lbs: {convertsTo: "kg", conversionRate: 0.453592, longSpelling: "pounds"},
  kg: {convertsTo: "lbs", conversionRate: 2.20462, longSpelling: "kilograms"}
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let stringToParse = input.replace(/[A-Za-z]/g, "");
    if(stringToParse === "")
      return 1;
    if((stringToParse.match(/\//g) || "").length > 1){
       return false;
    }
    try{
      return eval(stringToParse);
    } catch(e) {
        return false;
    }
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-zA-Z]+/)[0];
    if(units[unit.toLowerCase()])
      return unit.toLowerCase();
    return false;
  };
  
  this.getReturnUnit = function(initUnit) {
    return units[initUnit].convertsTo;
  };

  this.spellOutUnit = function(unit) {
    return units[unit].longSpelling;
  };
  
  this.convert = function(initNum, initUnit) {
    return initNum*units[initUnit].conversionRate.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
