var trainLines = {

  "Alamein":["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn","Glenferrie"],
  "Glen Waverly":["Flagstaff", "Melbourne Central", "Parliament", "Richmond ", "Kooyong", "Tooronga"],
  "Sandringham":["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]

};

var getStationIndex = function (lineName, station){
  return trainLines[lineName].indexOf(station);
};

var getLineandStationName = function (lineStationName){
  return lineStationName.split(" - ");
};

var oneLineTravel = function (startArray, endArray){
  var beginIndex = getStationIndex(startArray[0],startArray[1]);
  var endIndex = getStationIndex(endArray[0],endArray[1]);
  var trainLine = trainLines[startArray[0]];
  if ( beginIndex > endIndex ){
    return "Travel " + Math.abs(beginIndex - endIndex )+ " Stops on the " + startArray[0] +
      " line towards " +
      trainLine[0] + " and get off at " + endArray[1]
  }else{
    return "Travel " + Math.abs(beginIndex - endIndex )+ " Stops on the " + startArray[0] +
      " line towards " +
      trainLine[trainLine.length - 1] + " and get off at " + endArray[1]
  }
};

var planner = function (startStation, endStation){
  var startArray = getLineandStationName(startStation);
  var endArray = getLineandStationName(endStation);
  if (startArray[0] === endArray[0]){
    return oneLineTravel(startArray, endArray);
  }else {
    var offAtRichmondArray = [startArray[0], "Richmond"];
    var onAtRichmondArray = [endArray[0], "Richmond"];
    return oneLineTravel(startArray, offAtRichmondArray) + " Station. Change to the " + endArray[0] +
    " line, " + oneLineTravel(onAtRichmondArray, endArray);
    //from richmond on new line
  }
};

var startStation = "Sandringham - Windsor";

var endStation = "Alamein - Flinders Street";

//to-do edge case richmond
//edge case gui
//edge case not needing to know train line
