function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}


function BusinessCard() {

	info =  'Roman Yurkevych' + '\n' +
	        'romuriy@gmail.com' + '\n' +
	        'www.cemoe.com' + '\n' +
	        'KrDUIs1012' + '\n' +
			'Applied Informatics UEK' + '\n';

	navigator.notification.alert(info);
	
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);