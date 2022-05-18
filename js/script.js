// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-03-JS/sw.js", {
    scope: "/ICS2O-Unit-6-03-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {

