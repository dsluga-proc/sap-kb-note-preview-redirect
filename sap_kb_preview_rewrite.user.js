// ==UserScript==
// @name        Redirect SAP Note Preview
// @namespace   https://github.com/dsluga-proc/sap-kb-note-preview-redirect
// @downloadURL https://github.com/dsluga-proc/sap-kb-note-preview-redirect/raw/main/sap_kb_preview_rewrite.user.js
// @description Redirect SAP Knowledgebase note preview to actual note page
// @version     0.1
// @match		http*://apps.support.sap.com/sap/support/knowledge/*
// @match		http*://userapps.support.sap.com/sap/support/knowledge/*
// @match		http*://service.sap.com/sap/support/notes/*
// ==/UserScript==

const currUrl = window.location.href;
const regex = /[^/]{0,11}$/g;
const noteNr = currUrl.match(regex)[0];

window.location.replace("https://launchpad.support.sap.com/#/notes/" + noteNr);
