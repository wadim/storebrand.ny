/*
 * Common functions for general use
/*

/* ***** SCROLL TO ***** */
function scrollTo(id,more){ 
  $('html,body').animate({scrollTop: $('#'+id).height()}, 800);
}


/* ***** Verify National Identity Number ***** */
function verifyID(theField) {
  var nr = theField.value;
  var pn = new Array();
  var v1 = new Array(3,7,6,1,8,9,4,5,2,1,0);
  var v2 = new Array(5,4,3,2,7,6,5,4,3,2,1);
  for (i=0; i<nr.length; i++) {
    pn[i] = nr.charAt(i);
  }
  var k1=0;
  for (var i=0; i<v1.length; i++) {
    k1 += pn[i]*v1[i];
  }
  var k2=0;
  for (var i=0; i<v2.length; i++) {
    k2 += pn[i]*v2[i]
  }
  if (k1%11==0 && k2%11==0 ) {
    return true;
  } else {
    return false;
  }
} 


/* ***** ENCODE AND DECODE BASE64 ***** */
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf(" chrome/") >= 0 || ua.indexOf(" firefox/") >= 0 || ua.indexOf(' gecko/') >= 0) {
  var StringMaker = function () {
    this.str = "";
    this.length = 0;
    this.append = function (s) {
      this.str += s;
      this.length += s.length;
    }
    this.prepend = function (s) {
      this.str = s + this.str;
      this.length += s.length;
    }
    this.toString = function () {
      return this.str;
    }
  }
} else {
  var StringMaker = function () {
    this.parts = [];
    this.length = 0;
    this.append = function (s) {
      this.parts.push(s);
      this.length += s.length;
    }
    this.prepend = function (s) {
      this.parts.unshift(s);
      this.length += s.length;
    }
    this.toString = function () {
      return this.parts.join('');
    }
  }
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
  var output = new StringMaker();
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output.append(keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4));
  }
  return output.toString();
} 

function decode64(input) {
  var output = new StringMaker();
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    output.append(String.fromCharCode(chr1));
    if (enc3 != 64) {
      output.append(String.fromCharCode(chr2));
    }
    if (enc4 != 64) {
      output.append(String.fromCharCode(chr3));
    }
  }
  return output.toString();
} 
/* ***** END OF BASE64 OPERATIONS ***** */


/* ***** GET URL PARAMETER BY NAME ****** */
function gup(name){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  } else {
    return results[1];
  }
}


/* ***** CREATE COOKIE ***** */
function createCookie(n,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  } else {
    var expires = "";
  }
  dom = "; domain=.storebrand.no";
  document.cookie = n+"="+value+expires+"; path=/"+dom; 
} 
  
/* ***** READ COOKIE ***** */
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

/* ***** ERASE COOKIE ***** */
function eraseCookie(name) {
  createCookie(name,"",-1);
} 
