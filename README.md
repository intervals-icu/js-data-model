# js-data-model

Data model for Javascript code for custom Intervals.icu fields, charts, streams etc. Generated from the 
Intervals.icu source code. [Intervals.icu](https://intervals.icu/) is an online service for sports analytics and 
planning with [Javascript extension points](https://forum.intervals.icu/t/extending-intervals-icu/46565) and an 
[open API](https://forum.intervals.icu/t/intervals-icu-integration-cookbook/80090).

This package just contains types and no code. Use it to write Intervals.icu scripts in your favourite IDE with code 
completion. You still need to cut and paste the JS code into the Intervals.icu web app to run it.

## Getting Started

You need to have [Nodejs](https://nodejs.org/) installed:
- Follow the instructions on the website to download and install it
- OR install [nvm](https://github.com/nvm-sh/nvm) (Node version manager) a tool that makes it easy to work with 
  multiple versions of Node on one machine

Create a new directory for your Intervals.icu scripts project and install this package:

    mkdir intervals-icu-scripts
    cd intervals-icu-scripts
    npm install @intervals-icu/js-data-model --save

Open that project in your IDE and create a Typescript file, Types.js:

    import {ActivityJsData, Interval} from "@intervals-icu/js-data-model"
    export var icu: ActivityJsData
    export var interval: Interval

Typescript is a strongly typed superset of Javascript. Intervals.icu does not support Typescript, but it is useful
here to let the IDE know what "icu" and "interval" are.

Now create a Javascript file for your script (PedallingTime.js):

    import {icu} from "./Types"
    
    // paste everything below into Intervals.icu to run your script
    {
      let activity = icu.activity
      let pedalling_time = activity.moving_time - activity.coasting_time
      pedalling_time
    }

You should get code completion help from your IDE for all the types.

## Intervals.icu JS extension points

These are some of the places where Intervals.icu is extensible with JS:
- [Computed activity fields](https://forum.intervals.icu/t/computed-activity-fields/25673)
- [Custom interval fields](https://forum.intervals.icu/t/custom-interval-fields/25942)
- [Custom activity streams with JS](https://forum.intervals.icu/t/custom-activity-streams-with-javascript/46416)
- [Custom activity charts](https://forum.intervals.icu/t/custom-activity-charts/28627)

