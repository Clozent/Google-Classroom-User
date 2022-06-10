// ==UserScript==
// @name         Google Classroom User
// @namespace    https://github.com/ndvarn/
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/ndvarn/Google-Classroom-User/main/Google%20Classroom%20User.user.js
// @downloadURL  https://raw.githubusercontent.com/ndvarn/Google-Classroom-User/main/Google%20Classroom%20User.user.js
// @description  Redirects to the correct user from the main user in Google Classroom.
// @author       ndvarn
// @match        http://classroom.google.com/u/0/
// @match        https://classroom.google.com/u/0/
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // If the account you use for Google Classroom is not the one you are redirected to,
    // replace the "1" with the correct account number in the relative path below.
    window.location.replace("../../u/1/");
})();