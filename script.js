var nickname = "Rhyss";
var HeightinInches = 64;
var WeightinKg = 60.9;
const InchestoFeet = 0.0833333;
const kgtoLbs = 2.20462;
var HeightinFeet = Math.floor(HeightinInches * InchestoFeet);
var RemainingInches = HeightinInches % 12;
var height = `${HeightinFeet}'${RemainingInches}"`;
var WeightinLbs = WeightinKg * kgtoLbs;
alert ("Name: " + nickname + "\nHeight: " + height + "\nWeight " + WeightinLbs.toFixed(3))