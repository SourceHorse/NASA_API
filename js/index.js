var APIKey = 'iqHppK0iBR8GtqeraOchWgF7wLC4dSVBNZWY1wf1';
var weekArray = [];
for (var i = 0; i < 8; i++) {
  var date = new Date();
  date.setDate(date.getDate()+i);
  var thisWeek = date.getFullYear() + '-' +
  ((date.getMonth()+1)<10 ? '0' : '') + (date.getMonth()+1) + '-' +
  ((date.getDate())<10 ? '0' : '') + (date.getDate());
  weekArray.push(thisWeek);
}
var todaysDate = weekArray[0];
var nextWeek = weekArray[7];
function getFeed() {
  $.getJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + nextWeek + '&end_date=' + todaysDate + '&api_key=' + APIKey, function(data) {
    $('#feed').html('<p>Total number of near Earth objects this week: ' + data.element_count + '</p><p>Total objects today: ' + data.near_earth_objects[weekArray[0]].length);
  });
};