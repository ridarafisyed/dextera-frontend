/** @format */

// var xmlHttp;
export default function serverTime() {
  // create Date object for current location
  var d = new Date();
  // convert to msec, add local time zone offsetand  get UTC time in msec
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object with supplied offset
  var nd = new Date(utc + 3600000 * 5);

  // return time as a string
  return "The Server time is " + nd.toLocaleString();
}

// var st = srvTime();
// var date = new Date(st);
