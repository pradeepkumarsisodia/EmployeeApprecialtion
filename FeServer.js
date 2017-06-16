
"use strict";


//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/FeServer.js
//
var FeServer = function(module) {
	module.__server_generated_feserver_endpoint = function () {
		return "http://144.77.43.36:20959";
	}
	return module;
}(FeServer || {});

console.log(String.prototype.endsWith);
console.log(String.prototype.repeat);

// IE workarounds
if ( ! String.prototype.endsWith ) {
	String.prototype.endsWith = function (pattern) {
		var d = this.length - pattern.length;
		return d >= 0 && this.lastIndexOf(pattern) === d;
	};
}

if ( ! String.prototype.repeat ) {
	String.prototype.repeat = function (count) {
		if ( count <= 0 ) 
			return this;
		var s = "";
		for(var i = 0; i < count; ++i)
			s += this;
		return s;
	};
}

"import <FeServer.ServerProxy.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/FeServer.ServerProxy.js
//

"import <Eggs.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/Eggs.js
//
var Eggs = function(module) {
	module.__server_generated_feserver_timezone_offset = function () {
		return -420;
	}
	return module;
}(Eggs || {});


"import <Eggs.DateTime.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/Eggs.DateTime.js
//

var Eggs = function(module) {
	
	console.log("Eggs.DateTime.js");

	module.getTimezoneOffset = function() {
		return module.__server_generated_feserver_timezone_offset(); //in minutes (number)
	};

	module.parseDateTime = function(string) {
		return new module.DateTime(string);
	};

	module.DateTime = function () {

		//
		//	Overloads supported:
		//	
		//		DateTime()
		//		DateTime(year, month, day, hours, minutes, seconds, milliseconds)
		//		DateTime(DateTime)
		//		DateTime(string)
		//		DateTime(Date)
		//
		//	Note that all overloads (which accept arguments) assume the arguments in the timezone as specified by Eggs.getTimezoneOffset()
		//	Also, for any overload, all arguments are mandatory.
		//

		var offset = module.getTimezoneOffset();
		var h = offset/60;
		var m = Math.abs(offset) - Math.abs(h*60);

		if ( arguments.length === 0 ) {
			this.__date = new Date();
			this.__date.setUTCMinutes(this.__date.getUTCMinutes() + offset);
		} else if ( arguments.length == 1) {
			var arg = arguments[0];
			if (arg instanceof module.DateTime) {
				return new module.DateTime(arg.getYear(), arg.getMonth(), arg.getDate(), arg.getHours(), arg.getMinutes(), arg.getSeconds(), arg.getMilliseconds());
			} else if (typeof arg === 'string') {
				this.__date = new Date(arg);	
				this.__date.setUTCMinutes(this.__date.getUTCMinutes() + offset);
			} else if (arg instanceof Date) {
				this.__date = new Date(arg); //make a copy!	
				this.__date.setUTCMinutes(this.__date.getUTCMinutes() + offset);
			} else {
				throw "Argument `" + arg + "` of invalid type `" + typeof(arg)+ "` passed to Eggs.DateTime()";
			}
		} else if ( arguments.length == 7) {
			var args = arguments;
			this.__date = new Date(args[0], args[1] - 1, args[2], args[3], args[4], args[5], args[6]); //Javascript Date's month is zero-based.
		} else {
			throw "Invalid number of argments passed `" + Array.from(arguments) + "` to Eggs.DateTime()";
		}

		var self = this;

		this.addPadding = function(data, padding) {
			padding = padding || 2;
			var s = "" + data;
			return "0".repeat(padding - s.length) + s;
		};

		this.getOffsetHours = function() { return h; }
		this.getOffsetMinutes = function() { return m; }
		this.getOffset = function() { 
			return (h >=0 ? '+' : '-') + self.addPadding(Math.abs(h))  + ":" + self.addPadding(m); 
		}

	}

	module.DateTime._isoFormatString = function () {

		//
		// Use boost datetime format-string
		//
		//	ref: http://www.boost.org/doc/libs/1_57_0/doc/html/date_time/date_time_io.html#date_time.format_flags
		//

		return "%Y-%m-%dT%H:%M:%S%Q"; 
	}

	module.DateTime.now = function() {
		return new module.DateTime();
	}

	module.DateTime.now_iso = function() {
		return module.DateTime.now().toString();
	}

	module.now  = module.DateTime.now;

	module.now_iso  = module.DateTime.now_iso;

	return module;

}(Eggs || {});

"import <Eggs.DateTime.prototype.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/Eggs.DateTime.prototype.js
//

"import <Eggs.js>";
//ignored expanding the file Eggs.js, as it has already been expanded, or being expanded.

var Eggs = function(module) {

	console.log("Eggs.DateTime.prototype.js");

	module.DateTime.prototype = {

		constructor : module.DateTime,

		getYear : function() { return this.__date.getUTCFullYear(); },
		getMonth : function() { return this.__date.getUTCMonth() + 1; }, //Javascript's month is zero-based
		getDate : function() { return this.__date.getUTCDate(); },
		getHours : function() { return this.__date.getUTCHours(); },
		getMinutes : function() { return this.__date.getUTCMinutes(); },
		getSeconds : function() { return this.__date.getUTCSeconds(); },
		getMilliseconds : function() { return this.__date.getUTCMilliseconds(); },

		setYear : function(year) { return this.__date.setUTCFullYear(year); },
		setMonth : function(month) { return this.__date.setUTCMonth(month-1); }, //Javascript's month is zero-based
		setDate : function(date) { return this.__date.setUTCDate(date); },
		setHours : function(hours, minutes, seconds, milliseconds) { return this.__date.setUTCHours.apply(this.__date, arguments); },
		setMinutes : function(minutes, seconds, milliseconds) { return this.__date.setUTCMinutes.apply(this.__date, arguments); },
		setSeconds : function(seconds, millisecond) { return this.__date.setUTCSeconds.apply(this.__date, arguments); },
		setMilliseconds : function(value) { return this.__date.setUTCMilliseconds(value); },

		format : function (fmt) { 

			//
			// Use boost datetime format-string
			//
			//	ref: http://www.boost.org/doc/libs/1_57_0/doc/html/date_time/date_time_io.html#date_time.format_flags
			//

			var s = "";
			var short_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			var long_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var short_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var long_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			for(var i = 0, size = fmt.length; i < size; ++i) {
				if ( fmt[i] != '%' ) {
					s += fmt[i];
					continue;
				}
				else if ( ++i == size) {
					throw "DateTime format-string `" + fmt + "` unexpectedly ends.";
				}
				switch(fmt[i]) { 
					case '%': 
						s += '%';
						break;
					case 'Y':
						s += this.addPadding(this.getYear(), 4);
						break;
					case 'm':
						s += this.addPadding(this.getMonth());
						break;
					case 'd':
						s += this.addPadding(this.getDate());
						break;
					case 'H':
						s += this.addPadding(this.getHours());
						break;
					case 'M':
						s += this.addPadding(this.getMinutes());
						break;
					case 'S':
						s += this.addPadding(this.getSeconds());
						break;
					case 'Q':
						s += this.getOffset(); 
						break;
					case 'a':
						s += short_days[this.__date.getUTCDay()]; 
						break;
					case 'A':
						s += long_days[this.__date.getUTCDay()]; 
						break;
					case 'b':
						s += short_months[this.getMonth()-1]; 
						break;
					case 'B':
						s += long_months[this.getMonth()-1]; 
						break;
					default:
						throw "invalid format specifier `%"  + fmt[i] + "` in `" + fmt + "`.";
				}
			} 
			return s;
		},

		toString : function() { 
			return this.format(module.DateTime._isoFormatString()); 
		}

	};

	return module;

}(Eggs || {});





var FeServer = function(module){

	function ServerProxy(client, username, enableAudit) {

		console.log("ServerProxy is being created");

		client   = (client || "").trim();
		username = (username || "").trim();

		if ( !client || !username ) {
			throw "the arguments to ServerProxy() must not be null or falsey value.";
		}
		else if ( username != username.toLowerCase() || username.split(' ').length > 1 || username.split('@').length > 1) {
			throw "'" + username + "' is not a valid username";
		}


		var self = this;

		var _clientId = this.newGuid();
		if ( enableAudit === true )
			_clientId = "audit_" + _clientId;

		console.log("FeServer client id is", _clientId);

		var _feServerEventSource = new EventSource(this.absolute("/events/" + _clientId)); 

		_feServerEventSource.onmessage = function (e) {
			console.log(e); 
		}

		_feServerEventSource.onerror = function (e) {
			console.error(e); 
		}

		_feServerEventSource.addEventListener("ping", function(e) { 
				console.info(e.data, self.clientId()); 
				}, false);


		this._createRequest = function(task, params) {
			return {
				"id" : this.newGuid(),
					"task" : task,
					"username" : username,
					"client" : client,
					"client_id": _clientId,
					"client_time" : Eggs.now_iso(), //new Date().toISOString(),
					"params" : params
			};
		}

		//public members that accesses the private members

		this.clientId = function() {
			return _clientId;
		}
		this.resetUsername = function(newUsername) {
			username = newUsername;
		}

		this.on = function (event, handler) {
			console.log("registering for event: " + event);
			_feServerEventSource.addEventListener(event, function(e) { 
					var data = e.data;
					try{
					data = JSON.parse(data); 
					}catch(ex) {
					console.error(ex, "FeServer event-data cannot be parsed as JSON, so passing it as such as: ", e.data);
					}
					console.info("event-data: ", data);
					handler(data);
					}, false);
			return this;
		}

		//backward-compatability for cronus!
		this.addEventHandler = function (event, handler) {
			this.on(event, handler);
		}

		window.addEventListener("beforeunload", function(e) {
				var args = {
					url: "/events/" + self.clientId(),
					type: "DELETE",
					success: function(response) {
						console.log(response)
					}
				};
				$.ajax(args);
			});
	}

	module.ServerProxy = ServerProxy;

	module.createServerProxy = function(client, username, enableAudit) {
		return new ServerProxy(client, username, enableAudit);
	}

	return module;

}(FeServer || {});

"import <FeServer.ServerProxy.prototype.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/FeServer.ServerProxy.prototype.js
//


var FeServer = function(module){

	module.ServerProxy.prototype = {
	
		constructor : module.ServerProxy,
	
		newGuid : function () {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { 
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
		},
	
		adjustDateTime : function(datetime) {
			datetime.setHours(datetime.getUTCHours() - 8);
			return datetime;
		},
	
		_post : function(relativeUrl, request, onSuccess, onError) {
			if ( onSuccess === undefined ) {
				onSuccess = function(response) { 
					console.info("the call has completed succesfully.", response); 
				};
			}
			var onSuccessDecode = function(response) {
				if ( response ) {
					if (response.message) {
						response.message = decodeURIComponent(response.message);
					}
					if (response.results && response.results.message) {
						response.results.message = decodeURIComponent(response.results.message);
					}
					if ( response.results && response.results.logs ) {
						var logs = response.results.logs;
						for(var key in logs) {
							logs[key] = decodeURIComponent(logs[key]);
						}
					}
				}
				onSuccess(response);
			}
			if ( onError === undefined ) {
				onError = function() { 
					console.error("the call has failed."); 
					console.error(arguments); 
				};
			}
			var replacer = function (key, value) {
				if ( value instanceof Eggs.DateTime ) {
					return value.toString();
				}
				return value;
			};
			var args = { 
				type: "POST",
				url: this.absolute(relativeUrl),
				data: JSON.stringify(request, replacer),
				//dataType: "json",
				contentType: "application/json",
				headers: {
					"X-FeServer-Username" : request.username,
					"X-FeServer-Task" : request.task
				},
				success: onSuccessDecode,
				error: onError
			};
			$.ajax(args);
		},
	
		serverEndPoint : function() {
			return module.__server_generated_feserver_endpoint();
		},
	
		absolute : function (relativeUrl) {
			if ( !relativeUrl ) 
				return this.serverEndPoint();
			return this.serverEndPoint() + relativeUrl;
		},
						
		decode: function(s) {
			return decodeURIComponent(s);
		},
	
		submitQuery : function(task, params, onSuccess, onError) {
			if ( !(task instanceof Object) ) {
				throw new Error("the task parameter must be an object. " + JSON.stringify(task));
			}
			else if ( task.type != 'query') { //all queries are sync by design.
				throw new Error(task.name + " is not query. " + JSON.stringify(task));
			} 
			this._post("/task/sync", 
					this._createRequest(task.name, params), 
					function(response){
						if (response.status != "OK" ) {
							console.error(JSON.stringify(response));
						}
						if ( onSuccess )  {
							onSuccess(response);
						}
					}, 
					onError
			);
		},
	
		submitAction : function(task, params, onSuccess, onError, asSync) {
			if ( task.type != 'action') {
				throw new Error(task.name + " is not an action. " + JSON.stringify(task));
			}
			var action = this._createRequest(task.name, params);
			if ( asSync ) {
				if ( task.mode == 'async' ) { //task supports only async
					throw new Error(task.name + " cannot be sent as sync action. " + JSON.stringify(task));
				}
				this._post("/task/sync", this._createRequest(task.name, params), onSuccess, onError);
			} else {
				this._post("/task/async", action, function () { 
						if(onSuccess) {
							onSuccess(action["id"]); 
						}
					}, onError);
			}
		}
	
	};

	return module;

}(FeServer || {});

"import <FeServer.Events.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/ccdata_beta/runtime/feserver/5.0.0/cache/resources/js/FeServer.Events.js
//

var FeServer = function(module) {

	module.Events = {
		get status() { return "status"; },
		get action() { return "action"; },
		get traffic() { return "traffic"; }
	};
	return module;
}(FeServer || {});

"import <FeServer.Tasks.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/ccdata_beta/runtime/feserver/5.0.0/cache/resources/js/FeServer.Tasks.js
//

var FeServer = function(module) {

	module.Tasks = {
		ANALYTICS_BATCH: {
			name: 'ANALYTICS_BATCH',
			mode: 'async',
			type: 'action',
			description: null
		},
		AUTHENTICATION: {
			name: 'AUTHENTICATION',
			mode: 'sync',
			type: 'query',
			description: null
		},
		DIRECTORY_LIST: {
			name: 'DIRECTORY_LIST',
			mode: 'sync',
			type: 'query',
			description: null
		},
		FIG: {
			name: 'FIG',
			mode: 'async',
			type: 'action',
			description: null
		},
		GRM: {
			name: 'GRM',
			mode: 'async',
			type: 'action',
			description: null
		},
		HELLO_WORLD: {
			name: 'HELLO_WORLD',
			mode: 'async|sync',
			type: 'action',
			description: null
		},
		HISTORY: {
			name: 'HISTORY',
			mode: 'sync',
			type: 'query',
			description: null
		},
		JPATH: {
			name: 'JPATH',
			mode: 'sync',
			type: 'query',
			description: null
		},
		KEYS: {
			name: 'KEYS',
			mode: 'sync',
			type: 'query',
			description: null
		},
		LOG: {
			name: 'LOG',
			mode: 'sync',
			type: 'query',
			description: null
		},
		MODEL_SUMMARY: {
			name: 'MODEL_SUMMARY',
			mode: 'async',
			type: 'action',
			description: null
		},
		OTTI_RUN: {
			name: 'OTTI_RUN',
			mode: 'async',
			type: 'action',
			description: null
		},
		PURGE_CACHE: {
			name: 'PURGE_CACHE',
			mode: 'async|sync',
			type: 'action',
			description: null
		},
		REGRESSION: {
			name: 'REGRESSION',
			mode: 'async',
			type: 'action',
			description: null
		},
		RESULT: {
			name: 'RESULT',
			mode: 'sync',
			type: 'query',
			description: null
		},
		SERVER_STATS: {
			name: 'SERVER_STATS',
			mode: 'sync',
			type: 'query',
			description: null
		},
		SETTINGS: {
			name: 'SETTINGS',
			mode: 'sync',
			type: 'query',
			description: null
		},
		STATUS: {
			name: 'STATUS',
			mode: 'sync',
			type: 'query',
			description: null
		},
		TS_BACKFILLER: {
			name: 'TS_BACKFILLER',
			mode: 'async',
			type: 'action',
			description: null
		}
	};
	return module;
}(FeServer || {});

"import <EventSource.js>";

//
// the file located at the following uri is going to be expanded here.
//
// 	uri: /appl/pimbeta/technology_services/operations/fes_risk_service/5.0.3/lx-x86_64/bin/../../resources/js/EventSource.js
//


;(function (global) {

if ("EventSource" in global) return;

var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;

var EventSource = function (url) {
  var eventsource = this,  
      interval = 500, // polling interval  
      lastEventId = null,
      cache = '';

  if (!url || typeof url != 'string') {
    throw new SyntaxError('Not enough arguments');
  }

  this.URL = url;
  this.readyState = this.CONNECTING;
  this._pollTimer = null;
  this._xhr = null;
  
  function pollAgain(interval) {
    eventsource._pollTimer = setTimeout(function () {
      poll.call(eventsource);
    }, interval);
  }

  //added by snawaz
  this.pollCount = 1;
  
  function poll() {

	eventsource.pollCount += 1; //added by snawaz

    try { // force hiding of the error message... insane?
      if (eventsource.readyState == eventsource.CLOSED) return;

      // NOTE: IE7 and upwards support
      var xhr = new XMLHttpRequest();
      //xhr.open('GET', eventsource.URL, true);  //commented by snawaz
      xhr.open('GET', eventsource.URL + "/" + eventsource.pollCount, true); //added by snawaz
      xhr.setRequestHeader('Accept', 'text/event-stream');
      xhr.setRequestHeader('Cache-Control', 'no-cache');
      // we must make use of this on the server side if we're working with Android - because they don't trigger 
      // readychange until the server connection is closed
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      if (lastEventId != null) xhr.setRequestHeader('Last-Event-ID', lastEventId);
      cache = '';
    
      xhr.timeout = 50000;
      xhr.onreadystatechange = function () {
        if (this.readyState == 3 || (this.readyState == 4 && this.status == 200)) {
          // on success
          if (eventsource.readyState == eventsource.CONNECTING) {
            eventsource.readyState = eventsource.OPEN;
            eventsource.dispatchEvent('open', { type: 'open' });
          }

          var responseText = '';
          try {
            responseText = this.responseText || '';
          } catch (e) {}
        
          // process this.responseText
          var parts = responseText.substr(cache.length).split("\n"),
              eventType = 'message',
              data = [],
              i = 0,
              line = '';
            
          cache = responseText;
        
          // TODO handle 'event' (for buffer name), retry
          for (; i < parts.length; i++) {
            line = parts[i].replace(reTrim, '');
            if (line.indexOf('event') == 0) {
              eventType = line.replace(/event:?\s*/, '');
            } else if (line.indexOf('retry') == 0) {                           
              retry = parseInt(line.replace(/retry:?\s*/, ''));
              if(!isNaN(retry)) { interval = retry; }
            } else if (line.indexOf('data') == 0) {
              data.push(line.replace(/data:?\s*/, ''));
            } else if (line.indexOf('id:') == 0) {
              lastEventId = line.replace(/id:?\s*/, '');
            } else if (line.indexOf('id') == 0) { // this resets the id
              lastEventId = null;
            } else if (line == '') {
              if (data.length) {
                var event = new MessageEvent(data.join('\n'), eventsource.url, lastEventId);
                eventsource.dispatchEvent(eventType, event);
                data = [];
                eventType = 'message';
              }
            }
          }

          if (this.readyState == 4) {
			  pollAgain(interval);
		  }
          // don't need to poll again, because we're long-loading
        } else if (eventsource.readyState !== eventsource.CLOSED) {
          if (this.readyState == 4) { // and some other status
            // dispatch error
            eventsource.readyState = eventsource.CONNECTING;
            eventsource.dispatchEvent('error', { type: 'error' });
            pollAgain(interval);
          } else if (this.readyState == 0) { // likely aborted
            pollAgain(interval);
          } else {
          }
        }
      };
    
      xhr.send();
    
      setTimeout(function () {
        if (true || xhr.readyState == 3) xhr.abort();
      }, xhr.timeout);
      
      eventsource._xhr = xhr;
    
    } catch (e) { // in an attempt to silence the errors
      eventsource.dispatchEvent('error', { type: 'error', data: e.message }); // ???
    } 
  };
  
  poll(); // init now
};

EventSource.prototype = {
  close: function () {
    // closes the connection - disabling the polling
    this.readyState = this.CLOSED;
    clearInterval(this._pollTimer);
    this._xhr.abort();
  },
  CONNECTING: 0,
  OPEN: 1,
  CLOSED: 2,
  dispatchEvent: function (type, event) {
    var handlers = this['_' + type + 'Handlers'];
    if (handlers) {
      for (var i = 0; i < handlers.length; i++) {
        handlers[i].call(this, event);
      }
    }

    if (this['on' + type]) {
      this['on' + type].call(this, event);
    }
  },
  addEventListener: function (type, handler) {
    if (!this['_' + type + 'Handlers']) {
      this['_' + type + 'Handlers'] = [];
    }
    
    this['_' + type + 'Handlers'].push(handler);
  },
  removeEventListener: function (type, handler) {
    var handlers = this['_' + type + 'Handlers'];
    if (!handlers) {
      return;
    }
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
        break;
      }
    }
  },
  onerror: null,
  onmessage: null,
  onopen: null,
  readyState: 0,
  URL: ''
};

var MessageEvent = function (data, origin, lastEventId) {
  this.data = data;
  this.origin = origin;
  this.lastEventId = lastEventId || '';
};

MessageEvent.prototype = {
  data: null,
  type: 'message',
  lastEventId: '',
  origin: ''
};

if ('module' in global) module.exports = EventSource;
global.EventSource = EventSource;
 
})(this);


// "import <$resource/js/FeServer.ServerProxy.js>";
// "import <$resource/js/FeServer.ServerProxy.prototype.js>";
// "import <$resource/js/EventSource.js>";
// "import <$cache/resource/js/FeServer.Events.js>";
// "import <$cache/resource/js/FeServer.Tasks.js>";


