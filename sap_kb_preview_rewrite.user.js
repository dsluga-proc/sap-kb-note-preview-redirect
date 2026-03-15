// ==UserScript==
// @name         Redirect SAP Note Preview
// @namespace    https://github.com/dsluga-proc/sap-kb-note-preview-redirect
// @version      1.0
// @description  Redirect SAP KB preview URLs to the new me.sap.com note viewer
// @author       David Sluga
// @match        https://userapps.support.sap.com/sap/support/knowledge/*
// @updateURL    https://github.com/dsluga-proc/sap-kb-note-preview-redirect/raw/main/sap_kb_preview_rewrite.user.js
// @downloadURL  https://github.com/dsluga-proc/sap-kb-note-preview-redirect/raw/main/sap_kb_preview_rewrite.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const path = window.location.pathname;

    // Match SAP note number with optional language segment
    const match = path.match(/\/knowledge\/(?:[a-z]{2}\/)?(\d+)/i);

    if (!match) return;

    const noteNumber = match[1];

    // SAP expects 10-digit padded number
    const paddedNote = noteNumber.padStart(10, '0');

    const targetUrl = `https://me.sap.com/notes/${paddedNote}/E`;

    if (window.location.href !== targetUrl) {
        window.location.replace(targetUrl);
    }
})();
