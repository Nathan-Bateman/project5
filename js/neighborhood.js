
function initialize() {
  var myLatlng = new google.maps.LatLng(13.66448,100.66160);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


function Person (name, title, yearshere, location) {
 this.name = ko.observable(name);
 this.title = ko.observable(title);
 this.yearshere = ko.observable(yearshere);
 this.loc = ko.observable(location);

 }

function mapViewModel() {
	var self = this;
	self.people = ko.observableArray([
 new Person("Tony", "HS Teacher - Computers", 4, "13.665189, 100.664765"),
 new Person("Allan J", "MS Teacher - Math", 6, "13.665308, 100.664416")
 ]);

};
ko.applyBindings(new mapViewModel());