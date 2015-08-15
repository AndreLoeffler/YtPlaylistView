var toggle = false;
var videos = [ ];

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
 // Replace all rules ...
 chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
   // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com/playlist' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.pageAction.setIcon({path: "on.png", tabId:tab.id});
    chrome.tabs.sendMessage(tab.id, { text: "hide" },
            doStuffWithDOM);
  }
  else{
    chrome.pageAction.setIcon({path: "of.png", tabId:tab.id});
    chrome.tabs.sendMessage(tab.id, { text: "show" },
            doStuffWithDOM);
  }
});

function doStuffWithDOM(domContent) {
    console.log("I received the following DOM content:\n" + domContent);
}