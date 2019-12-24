(function () {
  var script = document.createElement('script');
  script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_KEY}`);
  document.body.appendChild(script);
})();
