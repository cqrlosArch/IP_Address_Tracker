import L from "leaflet/dist/leaflet.js";
import axios from "axios";
import icon from "../images/icon-location.svg";

const $form = document.getElementById("form");
const mapDiv = document.querySelector(".display-map");
const $ipAddress = document.querySelector(".box__address p");
const $location = document.querySelector(".box__location  p");
const $timezone = document.querySelector(".box__timezone  p");
const $isp = document.querySelector(".box__isp p");

const ACCESS_TOKEN =
  "pk.eyJ1IjoiY3FybG9zYXJjaCIsImEiOiJja2VoYnhjMWkxdXVyMnltaWJqeDFsbTI1In0.sEpMjS7bCB_-KFODVpRfwQ";

const API_KEY = "at_KUae5hsltFfSyvXQy6bDaxXvd2WiZ";
const URL = "https://geo.ipify.org/api/v1";

const getCoordinates = async (ipAddress = "100.38.151.146") => {
  const proxy_url = 'https://cors.bridged.cc/';
  try {
    const response = await axios.get(
      `${proxy_url}${URL}?apiKey=${API_KEY}&domain=${ipAddress}`
    );
    const json = response.data;
    $ipAddress.textContent = json.ip;
    $location.textContent = `${json.location.city}, ${json.location.region} ${json.location.postalCode}`;
    $timezone.textContent = `UTC ${json.location.timezone}`;
    $isp.textContent = `${json.isp}`;
    let lng = Number(json.location.lng);
    let lat = Number(json.location.lat);
    mapDiv.innerHTML = "";

    createMap(lat, lng);
  } catch (error) {
    //console.log(error);
  }
};

const createMap = (lat = 40.71427, lng = -74.00597) => {
  let zoom = true;
  if (window.innerWidth < 900) zoom = false;
  mapDiv.innerHTML = "<div id='map' class='map'></div>";
  const mymap = L.map("map", {
    zoomControl: zoom,
  }).setView([lat, lng], 13);
  const myIcon = L.icon({
    iconUrl: `${icon}`,
    iconSize: [46, 56],
    iconAnchor: [23, 0],
  });
  L.marker([lat, lng], { icon: myIcon }).addTo(mymap);
  L.tileLayer(
    `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: `${ACCESS_TOKEN}`,
    }
  ).addTo(mymap);
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoordinates(e.target.address.value.trim());
});

const main = () => {
  getCoordinates();
};

export default main;
