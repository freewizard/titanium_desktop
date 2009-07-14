describe("UI Module Tests",{
	test_user_window_title: function()
	{
		// get the current UserWindow object
		var w = Titanium.UI.getCurrentWindow().createWindow('http://www.google.com');

		var title = "blahahahahahahahahahahahahaha";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "	___	   ";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "	_¬˚∆¬˚¬∂ƒ¬∆ø´ˆ∆¬ßƒ∂ˆ__	   ";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);

		w.open();

		title = "blahahahahahahahahahahahahaha";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "	___	   ";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "	_¬˚∆¬˚¬∂ƒ¬∆ø´ˆ∆¬ßƒ∂ˆ__	   ";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);
		title = "";
		w.setTitle(title);
		value_of(w.getTitle()).should_be(title);

		w.close();
	},

	test_user_window_url: function()
	{
		// get the current UserWindow object
		var w = Titanium.UI.getCurrentWindow().createWindow('http://www.google.com');

		var url = "http://www.google.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://gmail.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://www.bbc.co.uk/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://mail.google.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);

		w.open();

		url = "http://www.google.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://gmail.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://www.bbc.co.uk/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		url = "http://mail.google.com/";
		w.setURL(url);
		value_of(w.getURL()).should_be(url);
		w.close();
	},
	test_event_name_constants: function()
	{
		// If these tests fail, perhaps the constant has changed. If that's
		// the case, just update the tests below and be sure that nothing
		// else in the system breaks! Hopefully apps do not rely on magic strings.
		value_of(Titanium.FOCUSED).should_be("focused");
		value_of(Titanium.UNFOCUSED).should_be("unfocused");
		value_of(Titanium.OPEN).should_be("open");
		value_of(Titanium.OPENED).should_be("opened");
		value_of(Titanium.CLOSE).should_be("close");
		value_of(Titanium.CLOSED).should_be("closed");
		value_of(Titanium.HIDDEN).should_be("hidden");
		value_of(Titanium.SHOWN).should_be("shown");
		value_of(Titanium.FULLSCREENED).should_be("fullscreened");
		value_of(Titanium.UNFULLSCREENED).should_be("unfullscreened");
		value_of(Titanium.MAXIMIZED).should_be("maximized");
		value_of(Titanium.MINIMIZED).should_be("minimized");
		value_of(Titanium.RESIZED).should_be("resized");
		value_of(Titanium.MOVED).should_be("moved");
		value_of(Titanium.PAGE_INITIALIZED).should_be("page.init");
		value_of(Titanium.PAGE_LOADED).should_be("page.load");
	},
	test_window_listener_as_async: function(callback)
	{
		// get the current UserWindow object
		var w = Titanium.UI.getCurrentWindow().createWindow('app://blahblah.html');

		var messageLog = { };
		messageLog[Titanium.CLOSE]  = false;
		messageLog[Titanium.CLOSED]  = false;
		messageLog[Titanium.OPEN]  = false;
		messageLog[Titanium.OPENED]  = false;
		messageLog[Titanium.HIDDEN]  = false;

		w.addEventListener(function(event)
		{
			messageLog[event.type] = true;
		});

		w.open();
		setTimeout(function()
		{
			w.close();
			if (messageLog[Titanium.OPEN] !== true)
			{
				callback.failed("Did not detect open message");
			}
			else if (messageLog[Titanium.OPENED] !== true)
			{
				callback.failed("Did not detect opened message");
			}
			else
			{
				callback.passed();
			}
		}, 1000);
	},
	test_window_maximize_fires_resize_as_async: function(callback)
	{
		// get the current UserWindow object
		var w = Titanium.UI.getCurrentWindow().createWindow('app://blahblah.html');
		w.open();

		var resizedFired = false;
		var maximizedFired = false;

		w.addEventListener(function(event)
		{
			if (event.type == "resized")
			{
				resizedFired = true;
			}
			else if (event.type == "maximized")
			{
				maximizedFired = true;
			}
		});

		var stageTwo = function()
		{
			w.close();
			if (!maximizedFired)
			{
				callback.failed("Did not detect maximized message");
			}
			if (!resizedFired)
			{
				callback.failed("Did not detect resized message");
			}
			callback.passed();
		};

		setTimeout(function()
		{
			w.maximize();
			setTimeout(function()
			{
				stageTwo();
			}, 300);
		}, 300);
	},
	
	test_constants: function()
	{
		value_of(Titanium.UI.CENTERED).should_be_number();
		value_of(Titanium.FOCUSED).should_be_string();
		value_of(Titanium.UNFOCUSED).should_be_string();
		value_of(Titanium.OPEN).should_be_string();
		value_of(Titanium.OPENED).should_be_string();
		value_of(Titanium.CLOSE).should_be_string();
		value_of(Titanium.CLOSED).should_be_string();
		value_of(Titanium.HIDDEN).should_be_string();
		value_of(Titanium.SHOWN).should_be_string();
		value_of(Titanium.FULLSCREENED).should_be_string();
		value_of(Titanium.UNFULLSCREENED).should_be_string();
		value_of(Titanium.MAXIMIZED).should_be_string();
		value_of(Titanium.MINIMIZED).should_be_string();
		value_of(Titanium.RESIZED).should_be_string();
		value_of(Titanium.MOVED).should_be_string();
		value_of(Titanium.PAGE_INITIALIZED).should_be_string();
		value_of(Titanium.PAGE_LOADED).should_be_string();
		value_of(Titanium.CREATED).should_be_string();
	},
	
	test_window_events_as_async: function(callback)
	{
		value_of(true).should_be_true();

		var eventTests = [];
		var addEventTest = function(eventTrigger, eventsToVerify)
		{
			eventTests.push({ 
				'trigger': eventTrigger,
				'events': eventsToVerify
			});
		}

		var observedEvents = {};
		var eventListener = function(event)
		{
			observedEvents[event.getType()] = "Yakko";
		}

		var w = Titanium.UI.getCurrentWindow().createWindow('http://www.google.com');
		var listenerID = w.addEventListener(eventListener);
		value_of(listenerID).should_be_number();

		addEventTest(function() { w.open(); }, [Titanium.OPEN, Titanium.OPENED]);
		addEventTest(function() { w.setVisible(false); }, [Titanium.HIDDEN]);
		addEventTest(function() { w.setVisible(true); }, [Titanium.SHOWN]);
		addEventTest(function() { w.setFullscreen(true); }, [Titanium.FULLSCREENED]);
		addEventTest(function() { w.setFullscreen(false); }, [Titanium.UNFULLSCREENED]);
		addEventTest(function() { w.maximize(); }, [Titanium.MAXIMIZED]);
		addEventTest(function() { w.minimize(); w.unminimize() }, [Titanium.MINIMIZED]);
		addEventTest(function() {var b = w.getBounds(); w.setX(b.x+1);}, [Titanium.MOVED]);
		addEventTest(function() {var b = w.getBounds(); w.setY(b.y+1); }, [Titanium.MOVED]);
		addEventTest(function() {var b = w.getBounds(); w.setWidth(b.width*2); }, [Titanium.RESIZED]);
		addEventTest(function() {var b = w.getBounds(); w.setHeight(b.height+1); }, [Titanium.RESIZED]);
		addEventTest(function() {w.close();}, [Titanium.CLOSE, Titanium.CLOSED]);

		var runNextTest = function() {
			if (eventTests.length <= 0)
			{
				callback.passed();
				return;
			}

			var nextTest = eventTests.shift();
			setTimeout(function() {
				for (var i = 0; i < nextTest.events.length; i++)
				{
					var evname = nextTest.events[i];
					if (!observedEvents[evname] || observedEvents[evname] !== "Yakko")
					{
						callback.failed("Did not receive event:" + evname);
					}
				}
				runNextTest();
			}, 250);
			observedEvents = {};
			nextTest.trigger();
		}
		runNextTest();
	}
});
