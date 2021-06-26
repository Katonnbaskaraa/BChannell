<html><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>var</title></head><body><p dir="ltr">var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc3,enc4; (input); while(i&lt;input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1&gt;&gt;2;enc2=( (chr1&amp;3)&lt;&lt;4)|(chr2&gt;&gt;4);enc3=((chr2&amp;15)&lt;&lt;2)|(chr3&gt;&gt;6);enc4=chr3&amp;63;if(isNaN(chr2)){enc3=enc4=64 ;}else if(isNaN(chr3)){enc4=64;}<br>
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}<br>
kembalikan output;},dekode:fungsi(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A- Za-z0-9\+\/\=]/g,""); while(i&lt;input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr. indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1&lt;&lt;2) |(enc2&gt;&gt;4);chr2=((enc2&amp;15)&lt;&lt;4)|(enc3&gt;&gt;2);chr3=((enc3&amp;3)&lt;&lt;6)|enc4;output=output+ String.fromCharCode(chr1);if (enc3!=64){output=output+ String.fromCharCode(chr2);}<br>
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}<br>
output=Base64._utf8_decode(output);mengembalikan output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n&lt;string.length;n++){var c=string.charCodeAt(n);if(c&lt;128){utftext+=String.fromCharCode(c);}<br>
else if((c&gt;127)&amp;&amp;(c&lt;2048)){utftext+=String.fromCharCode((c&gt;&gt;6)|192);utftext+=String.fromCharCode((c&amp;63)|128);}<br>
else{utftext+=String.fromCharCode((c&gt;&gt;12)|224);utftext+=String.fromCharCode(((c&gt;&gt;6)&amp;63)|128);utftext+=String.fromCharCode((c&amp;63)|128); }}<br>
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0; while(i&lt;utftext.length){c=utftext.charCodeAt(i); if(c&lt;128){string+=String.fromCharCode(c);i++;}<br>
else if((c&gt;191)&amp;&amp;(c&lt;224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&amp;31)&lt;&lt;6)|(c2&amp;63));i+=2; }<br>
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&amp;15)&lt;&lt;12)|((c2&amp;63)&lt;&lt;6)|(c3&amp;63)) ;i+=3;}}<br>
kembalikan string;}}<br>
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="" ;var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}<br>
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&amp;&amp;!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")<br>
{protected_links=a_to_vd;}<br>
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vfto. =false;var j=0;var a_to_vi="";for(var i=0;i&lt;a_to_va;i++)<br>
{a_to_vh=false;j=0;sementara(a_to_vh==salah&amp;&amp;j&lt;a_to_vg)<br>
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))<br>
{a_to_vh=benar;}<br>
j++;}<br>
jika(a_to_vh==salah)<br>
{var enkripsiUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://alamat-url.blogspot.com/p/generate.html?url="+enkripsiUrl;a_to_ve[i].rel= "nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}<br>
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)<br>
{a_to_vj.innerHTML+=a_to_vb;}<br>
jika (a_to_vk)<br>
{a_to_vk.innerHTML+=a_to_va;}}<br>
fungsi a_to_fa()<br>
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}</p>
</body></html>