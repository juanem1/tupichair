window.ga=function(){ga.q.push(arguments)},ga.q=[],ga.l=+new Date,ga("create","UA-2981464-27","auto"),ga("send","pageview"),function(){function t(t){k.set(t)}function e(t){if(100!=t.get(Xe)&&y(lt(t,Pe))%1e4>=100*ft(t,Xe))throw"abort"}function n(t){if(z(lt(t,Ne)))throw"abort"}function i(){var t=H.location.protocol;if("http:"!=t&&"https:"!=t)throw"abort"}function a(e){try{F.navigator.sendBeacon?t(42):F.XMLHttpRequest&&"withCredentials"in new F.XMLHttpRequest&&t(40)}catch(n){}e.set(ve,x(e),!0),e.set(It,ft(e,It)+1);var i=[];ut.map(function(t,n){if(n.F){var a=e.get(t);void 0!=a&&a!=n.defaultValue&&("boolean"==typeof a&&(a*=1),i.push(n.F+"="+D(""+a)))}}),i.push("z="+st()),e.set(Tt,i.join("&"),!0)}function r(t){var e=lt(t,Ye)||Z()+"/collect",n=lt(t,Lt);if(!n&&t.get(At)&&(n="beacon"),n){var i=lt(t,Tt),a=t.get(Ct),a=a||I;"image"==n?tt(e,i,a):"xhr"==n&&et(e,i,a)||"beacon"==n&&nt(e,i,a)||Q(e,i,a)}else Q(e,lt(t,Tt),t.get(Ct));e=t.get(Ne),e=at(e),n=e.hitcount,e.hitcount=n?n+1:1,e=t.get(Ne),delete at(e).pending_experiments,t.set(Ct,I,!0)}function o(t){(F.gaData=F.gaData||{}).expId&&t.set(se,(F.gaData=F.gaData||{}).expId),(F.gaData=F.gaData||{}).expVar&&t.set(ce,(F.gaData=F.gaData||{}).expVar);var e,n=t.get(Ne);if(n=at(n).pending_experiments){var i=[];for(e in n)n.hasOwnProperty(e)&&n[e]&&i.push(encodeURIComponent(e)+"."+encodeURIComponent(n[e]));e=i.join("!")}else e=void 0;e&&t.set(ue,e,!0)}function s(){if(F.navigator&&"preview"==F.navigator.loadPurpose)throw"abort"}function c(t){var e=F.gaDevIds;O(e)&&0!=e.length&&t.set("&did",e.join(","),!0)}function u(t){if(!t.get(Ne))throw"abort"}function h(e){var n=ft(e,ge);500<=n&&t(15);var i=lt(e,Ot);if("transaction"!=i&&"item"!=i){var i=ft(e,pe),a=(new Date).getTime(),r=ft(e,de);if(0==r&&e.set(de,a),r=Math.round(2*(a-r)/1e3),0<r&&(i=Math.min(i+r,20),e.set(de,a)),0>=i)throw"abort";e.set(pe,--i)}e.set(ge,++n)}function l(e,n,i,a){n[e]=function(){try{return a&&t(a),i.apply(this,arguments)}catch(n){throw it("exc",e,n&&n.name),n}}}function f(){var t,e,n;if((n=(n=F.navigator)?n.plugins:null)&&n.length)for(var i=0;i<n.length&&!e;i++){var a=n[i];-1<a.name.indexOf("Shockwave Flash")&&(e=a.description)}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(r){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(r){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version")}catch(r){}return e&&(t=e.match(/[\d]+/g))&&3<=t.length&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0}function g(t,e,n){"none"==e&&(e="");var i=[],a=B(t);t="__utma"==t?6:2;for(var r=0;r<a.length;r++){var o=(""+a[r]).split(".");o.length>=t&&i.push({hash:o[0],R:a[r],O:o})}if(0!=i.length)return 1==i.length?i[0]:d(e,i)||d(n,i)||d(null,i)||i[0]}function d(t,e){var n,i;null==t?n=i=1:(n=y(t),i=y(T(t,".")?t.substring(1):"."+t));for(var a=0;a<e.length;a++)if(e[a].hash==n||e[a].hash==i)return e[a]}function p(t){t=t.get(Pe);var e=v(t,0);return"_ga=1."+D(e+"."+t)}function v(t,e){for(var n=new Date,i=F.navigator,a=i.plugins||[],n=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],i=0;i<a.length;++i)n.push(a[i].description);return y(n.join("."))}function m(t,e){if(e==H.location.hostname)return!1;for(var n=0;n<t.length;n++)if(t[n]instanceof RegExp){if(t[n].test(e))return!0}else if(0<=e.indexOf(t[n]))return!0;return!1}function w(t){return 0<=t.indexOf(".")||0<=t.indexOf(":")}function y(t){var e,n,i=1;if(t)for(i=0,n=t.length-1;0<=n;n--)e=t.charCodeAt(n),i=(i<<6&268435455)+e+(e<<14),e=266338304&i,i=0!=e?i^e>>21:i;return i}var b=function(t){this.w=t||[]};b.prototype.set=function(t){this.w[t]=!0},b.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++)this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"};var k=new b,_=function(t,e){var n=new b(j(t));n.set(e),t.set(me,n.w)},x=function(t){t=j(t),t=new b(t);for(var e=k.w.slice(),n=0;n<t.w.length;n++)e[n]=e[n]||t.w[n];return new b(e).encode()},j=function(t){return t=t.get(me),O(t)||(t=[]),t},S=function(t){return"function"==typeof t},O=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t))},C=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String")},T=function(t,e){return 0==t.indexOf(e)},A=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},L=function(t){var e=H.createElement("img");return e.width=1,e.height=1,e.src=t,e},I=function(){},D=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e)},E=function(e,n,i,a){try{e.addEventListener?e.addEventListener(n,i,!!a):e.attachEvent&&e.attachEvent("on"+n,i)}catch(r){t(27)}},P=/^[\w\-:\/.?=&%!]+$/,V=function(t,e,n){t&&(n?(n="",e&&P.test(e)&&(n=' id="'+e+'"'),P.test(t)&&H.write("<script"+n+' src="'+t+'"></script>')):(n=H.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e),t=H.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)))},M=function(){return"https:"==H.location.protocol},N=function(t,e){var n=t.match("(?:&|#|\\?)"+D(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)");return n&&2==n.length?n[1]:""},G=function(){var t=""+H.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t},R=function(t){var e=H.referrer;if(/^https?:\/\//i.test(e)){if(t)return e;t="//"+H.location.hostname;var n=e.indexOf(t);if((5==n||6==n)&&(t=e.charAt(n+t.length),"/"==t||"?"==t||""==t||":"==t))return;return e}},U=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},i=Math.min(t.length+1,e.length),a=0;a<i;a++){if("object"==typeof e[a]){for(var r in e[a])e[a].hasOwnProperty(r)&&(n[r]=e[a][r]);break}a<t.length&&(n[t[a]]=e[a])}return n},$=function(){this.keys=[],this.values={},this.m={}};$.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e},$.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t]},$.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],i=this.get(n);i&&t(n,i)}};var F=window,H=document,q=window,z=function(t){var e=q._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===q["ga-disable-"+t])return!0;try{var n=q.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(i){}return!1},B=function(t){var e=[],n=H.cookie.split(";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n.length;i++){var a=n[i].match(t);a&&e.push(a[1])}return e},X=function(e,n,i,a,r,o){if(r=!z(r)&&!(Y.test(H.location.hostname)||"/"==i&&K.test(a)),!r)return!1;if(n&&1200<n.length&&(n=n.substring(0,1200),t(24)),i=e+"="+n+"; path="+i+"; ",o&&(i+="expires="+new Date((new Date).getTime()+o).toGMTString()+"; "),a&&"none"!=a&&(i+="domain="+a+";"),a=H.cookie,H.cookie=i,!(a=a!=H.cookie))t:{for(e=B(e),a=0;a<e.length;a++)if(n==e[a]){a=!0;break t}a=!1}return a},W=function(t){return D(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},K=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Y=/(^|\.)doubleclick\.net$/i,Z=function(){return(_t||M()?"https:":"http:")+"//www.google-analytics.com"},J=function(t){this.name="len",this.message=t+"-8192"},Q=function(t,e,n){if(n=n||I,2036>=e.length)tt(t,e,n);else{if(!(8192>=e.length))throw it("len",e.length),new J(e.length);nt(t,e,n)||et(t,e,n)||tt(t,e,n)}},tt=function(t,e,n){var i=L(t+"?"+e);i.onload=i.onerror=function(){i.onload=null,i.onerror=null,n()}},et=function(t,e,n){var i=F.XMLHttpRequest;if(!i)return!1;var a=new i;return"withCredentials"in a&&(a.open("POST",t,!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){4==a.readyState&&(n(),a=null)},a.send(e),!0)},nt=function(t,e,n){return!!F.navigator.sendBeacon&&(!!F.navigator.sendBeacon(t,e)&&(n(),!0))},it=function(t,e,n){1<=100*Math.random()||z("?")||(t=["t=error","_e="+t,"_v=j47","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+D(n.substring(0,100))),t.push("aip=1"),t.push("z="+ot()),tt(Z()+"/collect",t.join("&"),I))},at=function(t){var e=F.gaData=F.gaData||{};return e[t]=e[t]||{}},rt=function(){this.M=[]};rt.prototype.add=function(t){this.M.push(t)},rt.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&S(n)&&n.call(F,t)}}catch(i){}e=t.get(Ct),e!=I&&S(e)&&(t.set(Ct,I,!0),setTimeout(e,10))};var ot=function(){return Math.round(2147483647*Math.random())},st=function(){try{var t=new Uint32Array(1);return F.crypto.getRandomValues(t),2147483647&t[0]}catch(e){return ot()}},ct=function(){this.data=new $},ut=new $,ht=[];ct.prototype.get=function(t){var e=pt(t),n=this.data.get(t);return e&&void 0==n&&(n=S(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n};var lt=function(t,e){var n=t.get(e);return void 0==n?"":""+n},ft=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n};ct.prototype.set=function(t,e,n){if(t)if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&gt(this,i,t[i],n);else gt(this,t,e,n)};var gt=function(t,e,n,i){if(void 0!=n)switch(e){case Ne:Mn.test(n)}var a=pt(e);a&&a.o?a.o(t,e,n,i):t.data.set(e,n,i)},dt=function(t,e,n,i,a){this.name=t,this.F=e,this.Z=i,this.o=a,this.defaultValue=n},pt=function(t){var e=ut.get(t);if(!e)for(var n=0;n<ht.length;n++){var i=ht[n],a=i[0].exec(t);if(a){e=i[1](a),ut.set(e.name,e);break}}return e},vt=function(t){var e;return ut.map(function(n,i){i.F==t&&(e=i)}),e&&e.name},mt=function(t,e,n,i,a){return t=new dt(t,e,n,i,a),ut.set(t.name,t),t.name},wt=function(t,e){ht.push([new RegExp("^"+t+"$"),e])},yt=function(t,e,n){return mt(t,e,n,void 0,bt)},bt=function(){},kt=C(window.GoogleAnalyticsObject)&&A(window.GoogleAnalyticsObject)||"ga",_t=!1,xt=yt("apiVersion","v"),jt=yt("clientVersion","_v");mt("anonymizeIp","aip");var St=mt("adSenseId","a"),Ot=mt("hitType","t"),Ct=mt("hitCallback"),Tt=mt("hitPayload");mt("nonInteraction","ni"),mt("currencyCode","cu"),mt("dataSource","ds");var At=mt("useBeacon",void 0,!1),Lt=mt("transport");mt("sessionControl","sc",""),mt("sessionGroup","sg"),mt("queueTime","qt");var It=mt("_s","_s");mt("screenName","cd");var Dt=mt("location","dl",""),Et=mt("referrer","dr"),Pt=mt("page","dp","");mt("hostname","dh");var Vt=mt("language","ul"),Mt=mt("encoding","de");mt("title","dt",function(){return H.title||void 0}),wt("contentGroup([0-9]+)",function(t){return new dt(t[0],"cg"+t[1])});var Nt=mt("screenColors","sd"),Gt=mt("screenResolution","sr"),Rt=mt("viewportSize","vp"),Ut=mt("javaEnabled","je"),$t=mt("flashVersion","fl");mt("campaignId","ci"),mt("campaignName","cn"),mt("campaignSource","cs"),mt("campaignMedium","cm"),mt("campaignKeyword","ck"),mt("campaignContent","cc");var Ft=mt("eventCategory","ec"),Ht=mt("eventAction","ea"),qt=mt("eventLabel","el"),zt=mt("eventValue","ev"),Bt=mt("socialNetwork","sn"),Xt=mt("socialAction","sa"),Wt=mt("socialTarget","st"),Kt=mt("l1","plt"),Yt=mt("l2","pdt"),Zt=mt("l3","dns"),Jt=mt("l4","rrt"),Qt=mt("l5","srt"),te=mt("l6","tcp"),ee=mt("l7","dit"),ne=mt("l8","clt"),ie=mt("timingCategory","utc"),ae=mt("timingVar","utv"),re=mt("timingLabel","utl"),oe=mt("timingValue","utt");mt("appName","an"),mt("appVersion","av",""),mt("appId","aid",""),mt("appInstallerId","aiid",""),mt("exDescription","exd"),mt("exFatal","exf");var se=mt("expId","xid"),ce=mt("expVar","xvar"),ue=mt("exp","exp"),he=mt("_utma","_utma"),le=mt("_utmz","_utmz"),fe=mt("_utmht","_utmht"),ge=mt("_hc",void 0,0),de=mt("_ti",void 0,0),pe=mt("_to",void 0,20);wt("dimension([0-9]+)",function(t){return new dt(t[0],"cd"+t[1])}),wt("metric([0-9]+)",function(t){return new dt(t[0],"cm"+t[1])}),mt("linkerParam",void 0,void 0,p,bt);var ve=mt("usage","_u"),me=mt("_um");mt("forceSSL",void 0,void 0,function(){return _t},function(e,n,i){t(34),_t=!!i});var we=mt("_j1","jid");wt("\\&(.*)",function(t){var e=new dt(t[0],t[1]),n=vt(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n)},e.o=function(t,e,i,a){t.set(n,i,a)},e.F=void 0),e});var ye=yt("_oot"),be=mt("previewTask"),ke=mt("checkProtocolTask"),_e=mt("validationTask"),xe=mt("checkStorageTask"),je=mt("historyImportTask"),Se=mt("samplerTask"),Oe=mt("_rlt"),Ce=mt("buildHitTask"),Te=mt("sendHitTask"),Ae=mt("ceTask"),Le=mt("devIdTask"),Ie=mt("timingTask"),De=mt("displayFeaturesTask"),Ee=yt("name"),Pe=yt("clientId","cid"),Ve=yt("clientIdTime"),Me=mt("userId","uid"),Ne=yt("trackingId","tid"),Ge=yt("cookieName",void 0,"_ga"),Re=yt("cookieDomain"),Ue=yt("cookiePath",void 0,"/"),$e=yt("cookieExpires",void 0,63072e3),Fe=yt("legacyCookieDomain"),He=yt("legacyHistoryImport",void 0,!0),qe=yt("storage",void 0,"cookie"),ze=yt("allowLinker",void 0,!1),Be=yt("allowAnchor",void 0,!0),Xe=yt("sampleRate","sf",100),We=yt("siteSpeedSampleRate",void 0,1),Ke=yt("alwaysSendReferrer",void 0,!1),Ye=mt("transportUrl"),Ze=mt("_r","_r"),Je=function(t){this.V=t,this.fa=void 0,this.$=!1,this.oa=void 0,this.ea=1},Qe=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.oa&&ft(e,t.oa))return ft(e,t.oa);if(0==e.get(We))return 0}return 0==t.V?0:(void 0===n&&(n=st()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0)},tn=function(t){var e=Math.min(ft(t,We),100);return!(y(lt(t,Pe))%100>=e)},en=function(t){var e={};if(nn(e)||an(e)){var n=e[Kt];void 0==n||1/0==n||isNaN(n)||(0<n?(rn(e,Zt),rn(e,te),rn(e,Qt),rn(e,Yt),rn(e,Jt),rn(e,ee),rn(e,ne),t(e)):E(F,"load",function(){en(t)},!1))}},nn=function(t){var e=F.performance||F.webkitPerformance,e=e&&e.timing;if(!e)return!1;var n=e.navigationStart;return 0!=n&&(t[Kt]=e.loadEventStart-n,t[Zt]=e.domainLookupEnd-e.domainLookupStart,t[te]=e.connectEnd-e.connectStart,t[Qt]=e.responseStart-e.requestStart,t[Yt]=e.responseEnd-e.responseStart,t[Jt]=e.fetchStart-n,t[ee]=e.domInteractive-n,t[ne]=e.domContentLoadedEventStart-n,!0)},an=function(t){if(F.top!=F)return!1;var e=F.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),2147483648<n&&(n=void 0),0<n&&e.setPageReadyTime(),void 0!=n&&(t[Kt]=n,!0)},rn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},on=function(t){return function(e){if("pageview"==e.get(Ot)&&!t.I){t.I=!0;var n=tn(e);e=0<N(e.get(Dt),"gclid").length,(n||e)&&en(function(e){t.send(n?"timing":"adtiming",e)})}}},sn=!1,cn=function(e){if("cookie"==lt(e,qe)){var n=lt(e,Ge),i=ln(e),a=dn(lt(e,Ue)),r=gn(lt(e,Re)),o=1e3*ft(e,$e),s=lt(e,Ne);if("auto"!=r)X(n,i,a,r,s,o)&&(sn=!0);else{t(32);var c;if(i=[],r=G().split("."),4!=r.length||(c=r[r.length-1],parseInt(c,10)!=c)){for(c=r.length-2;0<=c;c--)i.push(r.slice(c).join("."));i.push("none"),c=i}else c=["none"];for(var u=0;u<c.length;u++)if(r=c[u],e.data.set(Re,r),i=ln(e),X(n,i,a,r,s,o))return void(sn=!0);e.data.set(Re,"auto")}}},un=function(t){if("cookie"==lt(t,qe)&&!sn&&(cn(t),!sn))throw"abort"},hn=function(e){if(e.get(He)){var n=lt(e,Re),i=lt(e,Fe)||G(),a=g("__utma",i,n);a&&(t(19),e.set(fe,(new Date).getTime(),!0),e.set(he,a.R),(n=g("__utmz",i,n))&&a.hash==n.hash&&e.set(le,n.R))}},ln=function(t){var e=W(lt(t,Pe)),n=gn(lt(t,Re)).split(".").length;return t=pn(lt(t,Ue)),1<t&&(n+="-"+t),["GA1",n,e].join(".")},fn=function(t,e,n){for(var i,a=[],r=[],o=0;o<t.length;o++){var s=t[o];s.H[n]==e?a.push(s):void 0==i||s.H[n]<i?(r=[s],i=s.H[n]):s.H[n]==i&&r.push(s)}return 0<a.length?a:r},gn=function(t){return 0==t.indexOf(".")?t.substr(1):t},dn=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/"},pn=function(t){return t=dn(t),"/"==t?1:t.split("/").length},vn=new RegExp(/^https?:\/\/([^\/:]+)/),mn=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,wn=function(e){t(48),this.target=e,this.T=!1};wn.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase())return void(t.href&&(t.href=yn(this,t.href,e)));if("form"==t.tagName.toLowerCase())return bn(this,t)}if("string"==typeof t)return yn(this,t,e)};var yn=function(t,e,n){var i=mn.exec(e);i&&3<=i.length&&(e=i[1]+(i[3]?i[2]+i[3]:"")),t=t.target.get("linkerParam");var a=e.indexOf("?"),i=e.indexOf("#");return n?e+=(-1==i?"#":"&")+t:(n=-1==a?"?":"&",e=-1==i?e+(n+t):e.substring(0,i)+n+t+e.substring(i)),e=e.replace(/&+_ga=/,"&_ga=")},bn=function(t,e){if(e&&e.action){var n=t.target.get("linkerParam").split("=")[1];if("get"==e.method.toLowerCase()){for(var i=e.childNodes||[],a=0;a<i.length;a++)if("_ga"==i[a].name)return void i[a].setAttribute("value",n);i=H.createElement("input"),i.setAttribute("type","hidden"),i.setAttribute("name","_ga"),i.setAttribute("value",n),e.appendChild(i)}else"post"==e.method.toLowerCase()&&(e.action=yn(t,e.action))}};wn.prototype.S=function(e,n,i){function a(i){try{i=i||F.event;var a;t:{var o=i.target||i.srcElement;for(i=100;o&&0<i;){if(o.href&&o.nodeName.match(/^a(?:rea)?$/i)){a=o;break t}o=o.parentNode,i--}a={}}("http:"==a.protocol||"https:"==a.protocol)&&m(e,a.hostname||"")&&a.href&&(a.href=yn(r,a.href,n))}catch(s){t(26)}}var r=this;this.T||(this.T=!0,E(H,"mousedown",a,!1),E(H,"keyup",a,!1)),i&&E(H,"submit",function(t){if(t=t||F.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(vn);n&&m(e,n[1])&&bn(r,t)}})};var kn,_n=/^(GTM|OPT)-[A-Z0-9]+$/,xn=/;_gaexp=[^;]*/g,jn=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Sn=function(t){function e(t,e){e&&(n+="&"+t+"="+D(e))}var n="https://www.google-analytics.com/gtm/js?id="+D(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("cid",t.ja),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.na&&e("m","sync"),e("cycle",t.G),n},On=function(e,n,i){this.U=we,this.aa=n,(n=i)||(n=(n=lt(e,Ee))&&"t0"!=n?In.test(n)?"_gat_"+W(lt(e,Ne)):"_gat_"+W(n):"_gat"),this.Y=n,Qe(new Je(100),e)&&(t(30),this.pa=!0)},Cn=function(t,e){var n=e.get(Ce);e.set(Ce,function(e){Tn(t,e);var i=n(e);return An(t,e),i});var i=e.get(Te);e.set(Te,function(e){var n=i(e);return Ln(t,e),n})},Tn=function(t,e){e.get(t.U)||("1"==B(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+ot(),!0))},An=function(t,e){if(e.get(t.U)){var n=6e5;t.pa&&(n/=10),X(t.Y,"1",e.get(Ue),e.get(Re),e.get(Ne),n)}},Ln=function(t,e){if(e.get(t.U)){var n=new $,i=function(t){pt(t).F&&n.set(pt(t).F,e.get(t))};i(xt),i(jt),i(Ne),i(Pe),i(Me),i(t.U),n.set(pt(ve).F,x(e));var a=t.aa;n.map(function(t,e){a+=D(t)+"=",a+=D(""+e)+"&"}),a+="z="+ot(),L(a),e.set(t.U,"",!0)}},In=/^gtm\d+$/,Dn=function(t,e){var n=t.b;if(!n.get("dcLoaded")){_(n,29),e=e||{};var i;e[Ge]&&(i=W(e[Ge])),i=new On(n,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",i),Cn(i,n),n.set("dcLoaded",!0)}},En=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get(qe)){_(t,51);var e=new On(t);Tn(e,t),An(e,t),t.get(e.U)&&(t.set(Ze,1,!0),t.set(Ye,Z()+"/r/collect",!0))}},Pn=function(){var t=F.gaGlobal=F.gaGlobal||{};return t.hid=t.hid||ot()},Vn=function(t,e,n){if(!kn){var i;i=H.location.hash;var a=F.name,r=/^#?gaso=([^&]*)/;(a=(i=(i=i&&i.match(r)||a&&a.match(r))?i[1]:B("GASO")[0]||"")&&i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(X("GASO",""+i,n,e,t,0),window._udo||(window._udo=e),window._utcp||(window._utcp=n),t=a[1],V("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+ot(),"_gasojs")),kn=!0}},Mn=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,Nn=function(t){function l(t,e){g.b.data.set(t,e)}function f(t,e){l(t,e),g.filters.add(t)}var g=this;this.b=new ct,this.filters=new rt,l(Ee,t[Ee]),l(Ne,A(t[Ne])),l(Ge,t[Ge]),l(Re,t[Re]||G()),l(Ue,t[Ue]),l($e,t[$e]),l(Fe,t[Fe]),l(He,t[He]),l(ze,t[ze]),l(Be,t[Be]),l(Xe,t[Xe]),l(We,t[We]),l(Ke,t[Ke]),l(qe,t[qe]),l(Me,t[Me]),l(Ve,t[Ve]),l(xt,1),l(jt,"j47"),f(ye,n),f(be,s),f(ke,i),f(_e,u),f(xe,un),f(je,hn),f(Se,e),f(Oe,h),f(Ae,o),f(Le,c),f(De,En),f(Ce,a),f(Te,r),f(Ie,on(this)),Gn(this.b,t[Pe]),Rn(this.b),this.b.set(St,Pn()),Vn(this.b.get(Ne),this.b.get(Re),this.b.get(Ue))},Gn=function(e,n){if("cookie"==lt(e,qe)){sn=!1;var i;t:{var a=B(lt(e,Ge));if(a&&!(1>a.length)){i=[];for(var r=0;r<a.length;r++){var o;o=a[r].split(".");var s=o.shift();("GA1"==s||"1"==s)&&1<o.length?(s=o.shift().split("-"),1==s.length&&(s[1]="1"),s[0]*=1,s[1]*=1,o={H:s,s:o.join(".")}):o=void 0,o&&i.push(o)}if(1==i.length){t(13),i=i[0].s;break t}if(0!=i.length){if(t(14),a=gn(lt(e,Re)).split(".").length,i=fn(i,a,0),1==i.length){i=i[0].s;break t}a=pn(lt(e,Ue)),i=fn(i,a,1),i=i[0]&&i[0].s;break t}t(12)}i=void 0}i||(i=lt(e,Re),a=lt(e,Fe)||G(),i=g("__utma",a,i),void 0!=i?(t(10),i=i.O[1]+"."+i.O[2]):i=void 0),i&&(e.data.set(Pe,i),sn=!0)}if(i=e.get(Be),(r=N(H.location[i?"href":"search"],"_ga"))&&(e.get(ze)?(i=r.indexOf("."),-1==i?t(22):(a=r.substring(i+1),"1"!=r.substring(0,i)?t(22):(i=a.indexOf("."),-1==i?t(22):(r=a.substring(0,i),i=a.substring(i+1),r!=v(i,0)&&r!=v(i,-1)&&r!=v(i,-2)?t(23):(t(11),e.data.set(Pe,i)))))):t(21)),n&&(t(9),e.data.set(Pe,D(n))),!e.get(Pe))if(i=(i=F.gaGlobal&&F.gaGlobal.vid)&&-1!=i.search(/^(?:utma\.)?\d+\.\d+$/)?i:void 0)t(17),e.data.set(Pe,i);else{for(t(8),i=F.navigator.userAgent+(H.cookie?H.cookie:"")+(H.referrer?H.referrer:""),a=i.length,r=F.history.length;0<r;)i+=r--^a++;e.data.set(Pe,[ot()^2147483647&y(i),Math.round((new Date).getTime()/1e3)].join("."))}cn(e)},Rn=function(e){var n=F.navigator,i=F.screen,a=H.location;if(e.set(Et,R(e.get(Ke))),a){var r=a.pathname||"";"/"!=r.charAt(0)&&(t(31),r="/"+r),e.set(Dt,a.protocol+"//"+a.hostname+r+a.search)}i&&e.set(Gt,i.width+"x"+i.height),i&&e.set(Nt,i.colorDepth+"-bit");var i=H.documentElement,o=(r=H.body)&&r.clientWidth&&r.clientHeight,s=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===H.compatMode||!o)?s=[i.clientWidth,i.clientHeight]:o&&(s=[r.clientWidth,r.clientHeight]),i=0>=s[0]||0>=s[1]?"":s.join("x"),e.set(Rt,i),e.set($t,f()),e.set(Mt,H.characterSet||H.charset),e.set(Ut,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(Vt,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),a&&e.get(Be)&&(n=H.location.hash)){for(n=n.split(/[?&#]+/),a=[],i=0;i<n.length;++i)(T(n[i],"utm_id")||T(n[i],"utm_campaign")||T(n[i],"utm_source")||T(n[i],"utm_medium")||T(n[i],"utm_term")||T(n[i],"utm_content")||T(n[i],"gclid")||T(n[i],"dclid")||T(n[i],"gclsrc"))&&a.push(n[i]);0<a.length&&(n="#"+a.join("&"),e.set(Dt,e.get(Dt)+n))}};Nn.prototype.get=function(t){return this.b.get(t)},Nn.prototype.set=function(t,e){this.b.set(t,e)};var Un={pageview:[Pt],event:[Ft,Ht,qt,zt],social:[Bt,Xt,Wt],timing:[ie,ae,oe,re]};Nn.prototype.send=function(t){if(!(1>arguments.length)){var e,n;"string"==typeof arguments[0]?(e=arguments[0],n=[].slice.call(arguments,1)):(e=arguments[0]&&arguments[0][Ot],n=arguments),e&&(n=U(Un[e]||[],n),n[Ot]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={})}},Nn.prototype.ma=function(t,e){var n=this;Kn(t,n,e)||(Zn(t,function(){Kn(t,n,e)}),Yn(String(n.get(Ee)),t,void 0,e,!0))};var $n,Fn,Hn,qn,zn=function(t){return"prerender"!=H.visibilityState&&(t(),!0)},Bn=function(e){if(!zn(e)){t(16);var n=!1,i=function(){if(!n&&zn(e)){n=!0;var t=i,a=H;a.removeEventListener?a.removeEventListener("visibilitychange",t,!1):a.detachEvent&&a.detachEvent("onvisibilitychange",t)}};E(H,"visibilitychange",i)}},Xn=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Wn=function(t){if(S(t[0]))this.u=t[0];else{var e=Xn.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(C(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C)throw"abort";if(this.i&&(!C(e)||""==e))throw"abort";if(this.g&&(!C(e)||""==e||!S(t)))throw"abort";if(w(this.c)||w(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};$n=new $,Hn=new $,qn=new $,Fn={ec:45,ecommerce:46,linkid:47};var Kn=function(t,e,n){e==ni||e.get(Ee);var i=$n.get(t);return!!S(i)&&(e.plugins_=e.plugins_||new $,!!e.plugins_.get(t)||(e.plugins_.set(t,new i(e,n||{})),!0))},Yn=function(e,n,i,a,r){if(!S($n.get(n))&&!Hn.get(n)){if(Fn.hasOwnProperty(n)&&t(Fn[n]),_n.test(n)){if(t(52),e=ni.j(e),!e)return!0;i=a||{},a={id:n,B:i.dataLayer||"dataLayer",ia:!!e.get("anonymizeIp"),na:r,G:!1},e.get("&gtm")==n&&(a.G=!0);var o=String(e.get("name"));"t0"!=o&&(a.target=o),z(String(e.get("trackingId")))||(a.ja=String(e.get(Pe)),a.ka=Number(e.get(Ve)),e=i.palindrome?jn:xn,e=(e=H.cookie.replace(/^|(; +)/g,";").match(e))?e.sort().join("").substring(1):void 0,a.la=e),e=a.B,i=(new Date).getTime(),F[e]=F[e]||[],i={"gtm.start":i},r||(i.event="gtm.js"),F[e].push(i),i=Sn(a)}!i&&Fn.hasOwnProperty(n)?(t(39),i=n+".js"):t(43),i&&(i&&0<=i.indexOf("/")||(i=(_t||M()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+i),a=ti(i),e=a.protocol,i=H.location.protocol,("https:"==e||e==i||("http:"!=e?0:"http:"==i))&&Qn(a)&&(V(a.url,void 0,r),Hn.set(n,!0)))}},Zn=function(t,e){var n=qn.get(t)||[];n.push(e),qn.set(t,n)},Jn=function(t,e){$n.set(t,e);for(var n=qn.get(t)||[],i=0;i<n.length;i++)n[i]();qn.set(t,[])},Qn=function(t){var e=ti(H.location.href);return!!T(t.url,"https://www.google-analytics.com/gtm/js?id=")||!(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))&&(t.host==e.host&&t.port==e.port||(e="http:"==t.protocol?80:443,!("www.google-analytics.com"!=t.host||(t.port||e)!=e||!T(t.path,"/plugins/"))))},ti=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase(),n=1*t.port||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",T(t,"/")||(t="/"+t),[e,""+n,t]}var n=H.createElement("a");n.href=H.location.href;var i=(n.protocol||"").toLowerCase(),a=e(n),r=n.search||"",o=i+"//"+a[0]+(a[1]?":"+a[1]:"");return T(t,"//")?t=i+t:T(t,"/")?t=o+t:!t||T(t,"?")?t=o+a[2]+(t||r):0>t.split("/")[0].indexOf(":")&&(t=o+a[2].substring(0,a[2].lastIndexOf("/"))+"/"+t),n.href=t,i=e(n),{protocol:(n.protocol||"").toLowerCase(),host:i[0],port:i[1],path:i[2],query:n.search||"",url:t||""}},ei={ga:function(){ei.f=[]}};ei.ga(),ei.D=function(t){var e=ei.J.apply(ei,arguments),e=ei.f.concat(e);for(ei.f=[];0<e.length&&!ei.v(e[0])&&(e.shift(),!(0<ei.f.length)););ei.f=ei.f.concat(e)},ei.J=function(t){for(var e=[],n=0;n<arguments.length;n++)try{var i=new Wn(arguments[n]);i.g?Jn(i.a[0],i.a[1]):(i.i&&(i.ha=Yn(i.c,i.a[0],i.X,i.W)),e.push(i))}catch(a){}return e},ei.v=function(t){try{if(t.u)t.u.call(F,ni.j("t0"));else{var e=t.c==kt?ni:ni.j(t.c);if(t.A)"t0"!=t.c||ni.create.apply(ni,t.a);else if(t.ba)ni.remove(t.c);else if(e)if(t.i){if(t.ha&&(t.ha=Yn(t.c,t.a[0],t.X,t.W)),!Kn(t.a[0],e,t.W))return!0}else if(t.K){var n=t.C,i=t.a,a=e.plugins_.get(t.K);a[n].apply(a,i)}else e[t.C].apply(e,t.a)}}catch(r){}};var ni=function(e){t(1),ei.D.apply(ei,[arguments])};ni.h={},ni.P=[],ni.L=0,ni.answer=42;var ii=[Ne,Re,Ee];ni.create=function(t){var e=U(ii,[].slice.call(arguments));e[Ee]||(e[Ee]="t0");var n=""+e[Ee];return ni.h[n]?ni.h[n]:(e=new Nn(e),ni.h[n]=e,ni.P.push(e),e)},ni.remove=function(t){for(var e=0;e<ni.P.length;e++)if(ni.P[e].get(Ee)==t){ni.P.splice(e,1),ni.h[t]=null;break}},ni.j=function(t){return ni.h[t]},ni.getAll=function(){return ni.P.slice(0)},ni.N=function(){"ga"!=kt&&t(49);var e=F[kt];if(!e||42!=e.answer){ni.L=e&&e.l,ni.loaded=!0;var n=F[kt]=ni;if(l("create",n,n.create),l("remove",n,n.remove),l("getByName",n,n.j,5),l("getAll",n,n.getAll,6),n=Nn.prototype,l("get",n,n.get,7),l("set",n,n.set,4),l("send",n,n.send),l("requireSync",n,n.ma),n=ct.prototype,l("get",n,n.get),l("set",n,n.set),!M()&&!_t){t:{for(var n=H.getElementsByTagName("script"),i=0;i<n.length&&100>i;i++){var a=n[i].src;if(a&&0==a.indexOf("https://www.google-analytics.com/analytics")){t(33),n=!0;break t}}n=!1}n&&(_t=!0)}M()||_t||!Qe(new Je(1e4))||(t(36),_t=!0),(F.gaplugins=F.gaplugins||{}).Linker=wn,n=wn.prototype,Jn("linker",wn),l("decorate",n,n.ca,20),l("autoLink",n,n.S,25),Jn("displayfeatures",Dn),Jn("adfeatures",Dn),e=e&&e.q,O(e)?ei.D.apply(ni,e):t(50)}},ni.da=function(){for(var t=ni.getAll(),e=0;e<t.length;e++)t[e].get(Ee)};var ai=ni.N,ri=F[kt];ri&&ri.r?ai():Bn(ai),Bn(function(){ei.D(["provide","render",I])})}(window);