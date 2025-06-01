function onGeoOk() {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 위치 좌표를 줌.
