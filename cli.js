#!/usr/bin/env node

import minimist from "minimist";
import moment from "moment-timezone";
import fetch from "node-fetch";

let argv = minimist(process. argv.slice(2));

if(argv.h) {
    console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE\n\t-h            Show this help message and exit.\n\t-n, -s        Latitude: N positive; S negative.\n\t-e, -w        Longitude: E positive; W negative.\n\t-z            Time zone: uses tz.guess() from moment-timezone by default.\n\t-d 0-6        Day to retrieve weather: 0 is today; defaults to 1.\n\t-j            Echo pretty JSON from open-meteo API and exit.")
    process.exit(0);
}

let latitude, longitude

if (args.n) {
    latitude = args.n;
} else if (args.s) {
    latitude = -args.s;
} else {
    console.log("Latitude must be in range");
    process.exit(0);
}

if (args.e) {
    longitude = args.e;
} else if (args.w) {
    longitude = -args.w;
} else {
    console.log("Longitude must be in range");
    process.exit(0);
}

let timezone = moment.tz.guess();

let data = await response.json();
if (args.j) {
    console.log(data);
    process.exit(0);
}

let days = args.d 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}

let request_url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&daily=precipitation_hours&current_weather=true&timezone=" + timezone;
let response = await fetch(request_url);


if (!days) {
  if (precipitation_hours_data[1] > 0) {
      console.log('You might need your galoshes ' + day_str);
  } else {
      console.log('You will not need your galoshes ' + day_str);
  }
} else if (precipitation_hours_data[days] > 0) {
  console.log('You might need your galoshes ' + day_str);
} else {
  console.log('You will not need your galoshes ' + day_str);
}