var trainStations = {
  "Alamein":["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn","Glenferrie"],
  "Glen Waverly":["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
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


var getInterchage = function(startLine,endLine){
  var startLineStations = trainStations[startLine];
  var endLineStations = trainStations[endLine];
  var interChangeStations = getCommonValues(startLineStations,endLineStations);
  if(interChangeStations.length < 1){
    return "Catch the bus"
  }else{
    return interChangeStations[0];
  };
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
    var interChangeStation = getInterchage(startLines[0],endLines[0]);

    return oneLineTravel(startLines[0], startStation, interChangeStation) + "\nChange to the " + endLines[0] +  " line.\n" + oneLineTravel(endLines[0], interChangeStation, endStation);
  };
};



//edge case gui
//edge case not needing to know train line
