(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,o){},33:function(t,e,o){"use strict";o.r(e);o(13),o(14);var n=o(2),a=o.n(n),c=o(11),i=o.n(c),r=o(1),s=o.n(r),p=o(12),d=o.n(p),l="../images/icon-location.svg",m=document.getElementById("form"),u=document.querySelector(".display-map"),v=document.querySelector(".box__address p"),h=document.querySelector(".box__location  p"),w=document.querySelector(".box__timezone  p"),y=document.querySelector(".box__isp p"),b="pk.eyJ1IjoiY3FybG9zYXJjaCIsImEiOiJja2VoYnhjMWkxdXVyMnltaWJqeDFsbTI1In0.sEpMjS7bCB_-KFODVpRfwQ",f="at_KUae5hsltFfSyvXQy6bDaxXvd2WiZ",g="https://geo.ipify.org/api/v1",x=function(){var t=i()(a.a.mark((function t(){var e,o,n,c,i,r=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"100.38.151.146",console.log(e),t.prev=2,t.next=5,d.a.get("https://cors-anywhere.herokuapp.com/".concat(g,"?apiKey=").concat(f,"&domain=").concat(e));case 5:o=t.sent,n=o.data,console.log(n),v.textContent=n.ip,h.textContent="".concat(n.location.city,", ").concat(n.location.region," ").concat(n.location.postalCode),w.textContent="UTC ".concat(n.location.timezone),y.textContent="".concat(n.isp),c=Number(n.location.lng),i=Number(n.location.lat),u.innerHTML="",C(i,c),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[2,18]])})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40.71427,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-74.00597,o=!0;window.innerWidth<900&&(o=!1),console.log(windowWithd),u.innerHTML="<div id='map' class='map'></div>";var n=s.a.map("map",{zoomControl:o}).setView([t,e],13),a=s.a.icon({iconUrl:"".concat(l),iconSize:[46,56],iconAnchor:[23,0]});s.a.marker([t,e],{icon:a}).addTo(n),s.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"".concat(b)}).addTo(n)};m.addEventListener("submit",(function(t){t.preventDefault(),x(t.target.address.value.trim())}));var k=function(){x();var t=window.innerWidth;console.log(t)};document.addEventListener("DOMContentLoaded",k)}},[[33,1,2]]]);