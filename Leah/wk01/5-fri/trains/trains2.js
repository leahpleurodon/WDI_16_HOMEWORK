var trainStations = {
  "Alamein":["Southern Cross", "Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn","Glenferrie"],
  "Glen Waverly":["Flinders Street", "Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  "Sandringham":["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
};

var trainLines = Object.keys(trainStations);

var startStation = "Windsor";
var endStation = "Prahran";

var getTrainLines = function(stationName){
  var stationLines = [];
    for(var i = 0; i < trainLines.length; i++){
      if (trainStations[trainLines[i]].indexOf(stationName) > -1){
        stationLines.push(trainLines[i]);
      };
    };
  return stationLines;
};

var validStations = function(start, stop){
  if (start === stop){
    return false;
  }else{
    return true;
  }
};

var getCommonValues = function (array1, array2){
  var commonValues = [];
  for (var i = 0; i < array1.length; i ++){
    var value = array1[i]
    if (array2.indexOf(value) > -1){
      commonValues.push(value);
    };
  };
  return commonValues
};

var directionsToEnglish = function(line, startIndex, endIndex){
  var lineArray = trainStations[line];
  if ( startIndex > endIndex ){
    return "Travel " + Math.abs(startIndex - endIndex )+ " Stops on the " + line +
      " line towards " +
      lineArray[0] + " and get off at " + lineArray[endIndex];
  }else{
    return "Travel " + Math.abs(startIndex - endIndex )+ " Stops on the " + line +
      " line towards " +
      lineArray[lineArray.length - 1] + " and get off at " + lineArray[endIndex];
  };
};

var directionsToArrows = function(line, startIndex, endIndex){
  var lineArray = trainStations[line];
  var stationsToPass = [];
  var minIndex = Math.min(startIndex, endIndex);
  var maxIndex = Math.max(startIndex, endIndex);
    for(var i = minIndex; i < (maxIndex + 1); i++ ){
      if ( endIndex > startIndex ){
        stationsToPass.push(lineArray[i]);
      }else{
        stationsToPass.unshift(lineArray[i]);
      };
    };
  var arrowDirections = stationsToPass.join(" ---> ")
  return arrowDirections;
};

var oneLineTravel = function (line, start, end){
  var trainLine = trainStations[line];
  var startIndex = trainLine.indexOf(start);
  var endIndex = trainLine.indexOf(end);
  return directionsToArrows(line, startIndex, endIndex) + "\n" +
    directionsToEnglish(line, startIndex, endIndex);
};


var planner = function(startStation, endStation){
  if(validStations(startStation, endStation) === false){
    return "Please select a valid journey route";
  };
  var startLines = getTrainLines(startStation);
  var endLines = getTrainLines(endStation);
  var commonLines = getCommonValues(startLines, endLines);

  if (commonLines.length > 0){
    return oneLineTravel(commonLines[0], startStation, endStation);
  }else{
    return "edge case";
    //else
      //first trip
        //one train line
        //direcitonal arrows
        //directions in english
      //new trip
  };
};




//edge case gui
//edge case not needing to know train line
