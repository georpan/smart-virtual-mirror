*/

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
                {
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Greek Holidays",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/en.greek%23holiday%40group.v.calendar.google.com/public/basic.ics",
                                                maximumEntries:4

					}
				]
			}
		},
                {
			module: "compliments",
			position: "center",
			
		},
		
                {
			module: "helloworld",
			position: "bottom_bar",
			config: {
				text: "1ο ΓΥΜΝΑΣΙΟ ΜΕΣΟΛΟΓΓΙΟΥ"
			}
		},

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Mesolongi",
				locationID: "6693122",  //ID from https://openweathermap.org/city
			appid: "dd520ada29479498512913986e73357b"
			}
		},
{
    module: 'MMM-voice',
 position: 'bottom_bar',   
config: 
{  
microphone: 1,
timeout:12,
keyword:'MIRROR',
debug: true,

        
    }
},
{
    module: 'MagicMirror-QuoteCatalog',
    header: 'The Quote Catalog',
    position: 'top_left',
    config: { timeFormat:5
                // See below for configurable options
            }
},
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				feeds: [
					                                        {
						title: "Τα νεα από NEWS.gr",
						url: "https://www.news.gr/rss.ashx?catid=7"
					}

				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
