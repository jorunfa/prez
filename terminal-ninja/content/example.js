$(document).ready(function () {
	$('#aDiv').toggleClass("focus");

	$('#anotherDiv').ready(function () {
		// should be ready already, but lets double check for... reasons or something.
		if ($('#aDiv').hasClass('focus')) {
			$('#anotherDiv').click(function() {
				$('#somethingElse').append('<p>Nå har den andre klassen fokus</p>');
				$('#aDiv').toggleClass('focus');
				$('#anotherDiv').toggleClass('focus');
			});
		}
	});

});




var s,
FocusWidget = {
	
	settings: {
		initialFocus: $('#aDiv'),
		toggleFocus: $('#anotherDiv'),
		outputField: $('#somethingElse'),
		focusClass: 'focus',
		focusChangedMsg: '<p>Nå har den andre klassen fokus</p>'
	},

	init: function() {
		s = this.settings;
		this.bindUIActions();
	},

	bindUIActions: function() {
		s.toggleFocus.click(function() {
			FocusWidget.toggleFocusClassBetweenInitialAndFocusElement();
			FocusWidget.notifyToggling();
		});
	},

	toggleFocusClassBetweenInitialAndFocusElement: function() {
		s.initialFocus.toggleClass(s.focusClass);
		s.toggleFocus.toggleClass(s.focusClass);
	},

	notifyToggling: function() {
		s.outputField.append(s.focusChangedMsg);
	}

};