/*
Added by Anders Losvik for Medallia to give user a feedback option
Runs an document.ready on the document
*/
var MEDALLIA;
if (MEDALLIA === undefined) {
  MEDALLIA = {};
}
MEDALLIA.Intercept = function (m_data, m_callback) {
	try {
		var m_Util = MEDALLIA._util,
			m_that = this,
			m_config = {
				qaParam : 'M_QAMODE',
				qaCookie : 'M_INTERCEPT_QAMODE',
				quarantineCookie : 'M_INTERCEPT_QUARANTINE',
				surveyURLse : 'http://survey.medallia.eu/?webintercept-spp',//This is where you enter the survey URL for the SPP survey
				surveyURL : 'http://survey.medallia.eu/?storebrandwebexperience',//This is where you enter the survey URL for the Storebrand survey
				daysToQuarantine : null, //Don't set quarantine here :)
				domainse: 'spp.se', //This is the cookie domain for spp.se. You might want to ask about this but if they don't know just put spp.se
				domain: 'storebrand.no' //Same as above but put storebrand.no if they're not sure.
			},
			sUrl = window.location.href,
			m_result = null, m_params = {};
		if (!m_data) {
			m_data = {};
		}
		if (/SWEDEN/i.test(m_data.cn)) {
			m_config.surveyURL = m_config.surveyURLse;
			m_config.domain = m_config.domainse;
		}
		if (!m_callback && MEDALLIA.Invite) {
			m_callback = MEDALLIA.Invite;
		} 
		else {
			return false;
		} 
		if (sUrl.indexOf(m_config.qaParam+'=1')>0) {
			m_Util.setCookie(m_config.qaCookie, true, 365,arguments[2] || m_config.domain);
		} 
		else if (sUrl.indexOf(m_config.qaParam+'=0')>0) {
			m_Util.setCookie(m_config.qaCookie, false, null,arguments[2] || m_config.domain);
		}
		//The following section is for QA mode, so you can ignore this.
		if (m_Util.getCookie(m_config.qaCookie) == 'true') {
			m_params = {"cn":m_data.cn, "pageName":m_data.pageName, "prodName":m_data.prodName, "custID":m_data.custID, "custName":m_data.custName, "corpID":m_data.corpID, "corpName":m_data.corpName, "serviceArea":m_data.serviceArea , "serviceType":m_data.serviceType};
			m_result = function () {
				m_config.daysToQuarantine = 180;
				// Prescaling throttle and quarantine check
				// Since we're excluding people here, not including them, we use the greater-than operator.
				if (Math.random() > 0.99) {
					return false;
				}
				// Global JavaScript Block from qa
				// Define functions and/or variables needed by trigger conditions here.
				// Triggers
				return true;
			}();
		} 
		//This is the section you need to change for the live survey. This is the part for people who have completed the survey. 
		else if (!m_Util.getCookie(m_config.quarantineCookie)) {
			m_params = {"cn":m_data.cn, "pageName":m_data.pageName, "prodName":m_data.prodName, "custID":m_data.custID, "custName":m_data.custName, "corpID":m_data.corpID, "corpName":m_data.corpName, "serviceArea":m_data.serviceArea , "serviceType":m_data.serviceType};
			m_result = function () {
				m_config.daysToQuarantine = 180.0; //This is where you set the number of days for quarantine.
				// Prescaling throttle and quarantine check
				// Since we're excluding people here, not including them, we use the greater-than operator.
				if (Math.random() > 1.0) { //This is where you set the percentage to be excluded. -- UZU: 0.1 = 10%
					return false;
			}
			// Global JavaScript Block from prod
			// Define functions and/or variables needed by trigger conditions here.
			// Triggers
			return true;
			}();
		}
		if (m_result) {
			if (m_result.params) {
				m_Util.merge(m_result.params, m_params);
			}
			setTimeout(function() {
				m_callback.call(m_that,
								{url: m_config.surveyURL + '&' + m_Util.serialize(m_params),
								data: m_data,
								 quarantine: function(domain, days) {
									m_Util.setCookie(m_config.quarantineCookie, true, days || m_config.daysToQuarantine, domain || m_config.domain);
								 }
								});
			}, m_result.delay || 0);
		}
	} catch (e) {
		return false;
	}
};
MEDALLIA._util = {
	pageSize: function () {
		var body = document.body,
			bodyOffsetWidth = body.offsetWidth,
			bodyOffsetHeight = body.offsetHeight,
			bodyScrollWidth = body.scrollWidth,
			bodyScrollHeight = body.scrollHeight,
			pageDimensions = [0, 0];
		if (typeof document.documentElement != 'undefined' && typeof document.documentElement.scrollWidth != 'undefined') {
			pageDimensions[0] = document.documentElement.scrollWidth;
			pageDimensions[1] = document.documentElement.scrollHeight;
		}
		if (bodyOffsetWidth > pageDimensions[0]) {
			pageDimensions[0] = bodyOffsetWidth;
		}
		if (bodyOffsetHeight > pageDimensions[1]) {
			pageDimensions[1] = bodyOffsetHeight;
		}
		if (bodyScrollWidth > pageDimensions[0]) {
			pageDimensions[0] = bodyScrollWidth;
		}
		if (bodyScrollHeight > pageDimensions[1]) {
			pageDimensions[1] = bodyScrollHeight;
		}
		return pageDimensions;
	},
	
	pageWidth: function () {
		return document.body.scrollWidth;
	},
	getWindowHeight: function () {
		var de = document.documentElement;
		return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
	},
	
	getWindowWidth: function () {
		var de = document.documentElement;
		return self.innerWidth || ( de && de.clientWidth ) || document.body.clientWidth;
	},
	scrollX: function () {
		var de = document.documentElement;
		return self.pageXOffset || ( de && de.scrollLeft ) || document.body.scrollLeft;
	},
	scrollY: function () {
		var de = document.documentElement;
		return self.pageYOffset || ( de && de.scrollTop ) || document.body.scrollTop;
	},
	appendStyle: function (css) {
		var el = document.createElement('style');
		el.type = 'text/css';
		if (el.styleSheet) {
			el.styleSheet.cssText = css;
		} else {
			el.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName('head')[0].appendChild(el);
	},
	hasClass: function (el,str) {
		return el.className.match(new RegExp('(\\s|^)'+str+'(\\s|$)'));
	},
	addClass: function (el,str) {
		if (!this.hasClass(el,str)) { el.className += " "+str; }
	},
	removeClass: function (el,str) {
		if (this.hasClass(el,str)) {
			var reg = new RegExp('(\\s|^)'+str+'(\\s|$)');
			el.className=el.className.replace(reg,' ');
		}
	},
	preventDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},
	getEvent: function(ev) {
		return ev || window.event;
	},
	getTarget: function(ev) {
		ev = this.getEvent(ev);
		var t = ev.target || ev.srcElement;
		
		try {
			if (3 == t.nodeType) {
				return t.parentNode;
			}
		} catch(e) { }
		return t;
	},
	on: function(elem, evt, func, bubble) {
		bubble = bubble || false;
		var el = (typeof(elem)=='string') ? this.get(elem) : elem;
		if (window.addEventListener) {
			el.addEventListener(evt,func,bubble);
			return true;
		} else if (window.attachEvent) {
			el.attachEvent('on'+evt,func);
			return true;
		} else {
			return false;
		}
	},
	removeEvent: function(elem, evt, func, bubble){
		var el = (typeof(elem)=='string') ? this.get(elem) : elem;
		if (window.removeEventListener) {
			el.removeEventListener(evt,func,bubble);
			return true;
		} else if (window.detachEvent) {
			el.detachEvent('on'+evt,func);
			return true;
		} else {
			return false;
		}
	},
	getCookie: function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)===' ') { c = c.substring(1,c.length); }
			if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length,c.length); }
		}
		return null;
	},
	setCookie: function (name, value, days, domain) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		} else {
			expires = "";
		}
		
		var cookStr = name + "=" + value + expires + "; path=/";
		if (domain) {
			cookStr += '; domain='+ domain;
		}
		document.cookie =  cookStr;
	},
	merge: function (s, r) {
		for (var p in s) {
			if (s[p].constructor == Object) {
				try {
					r[p] = arguments.callee(s[p], r[p]);
				} catch(e) {
					r[p] = s[p];
				}
			} else {
				r[p] = s[p];
			}
		}
		return r;
	},
	serialize: function (obj) {
        var str = '';
		if ( typeof(obj) == 'object' ) {
			for (var key in obj) {
				if (obj[key]) {
					str += key+'='+obj[key]+'&';
				}
			}
		}
		return str.replace(/&$/,'');
	}
};
// Script assumes inclusion with Interceptor and Util
MEDALLIA.Invite = function (o) {
	try {
		if ( !(this instanceof arguments.callee) ) {
			return new arguments.callee(o);
		}
		var M_util = MEDALLIA._util;
		var width = window.innerWidth;
		var mobile = false;
		if (width < 1024) {
			mobile = true;
		}
		var el = document.createElement('div'),
			mask = el.cloneNode(false),
			ie6 = /MSIE 6/i.test(navigator.userAgent) || (document.compatMode == 'BackCompat' && /*@cc_on!@*/false),
			config = {
				'protocol': 'https:' == document.location.protocol ? 'https://' : 'http://',
				'lang': /SE/i.test(o.data.lang) ? 'se' : 'no',
				//This section provides the text for the pop-up where you're asked to take the survey. Please note you need to use HTML codes for funny characters.
				'trans': {
					'se': {	
						'title':"Vad tycker du om v&aring;r webbplats?",
						'msg':"Hj&auml;lp oss att bli b&auml;ttre genom att svara p&aring fyra snabba fr&aringgor.</br> Klicka p&aring; 'Forts&auml;tt' f&ouml;r att svara p&aring; enk&auml;ten.</br></br> Tack f&ouml;r din medverkan!",
						'no':"Inte nu",
						'yes':"Forts&auml;tt"
					},
					'no': {	
						'title':"Vil du hjelpe oss &aring forbedre nettsidene?",
						'msg':"Vi har tre korte sp&oslashrsm&aringl til deg.",
						'no':"Ikke n&aring",
						'yes':"Fortsett"
					}
				},
				'newWindowWidth':750, //This is the size of the survey window.
				'newWindowHeight':975, //This is the size of the survey window.
				'popunder': false,
				'optOutDays': 180, //This is the number of days people won't be asked to take the survey after they say 'No thank you'. This is where you quarantine for people who have said No.
				'visible': true, 
				'useMask': true,
				'logo': /SWEDEN/i.test(o.data.cn) ? 'www2.spp.se/cms/content/themes/spp/css/img/spp_logotype.png" alt="" width="96" height="25"' : 'www.storebrand.no/_public/theme-storebrand.ny/images/StorebrandLogo_2x.png" alt="logo"', //This is where you specify the logo for the pop-up. Note that there's one logo for SPP and one for Storebrand.
				'html': function () {
					var str = '<div class="MEDALLIA_panel">';
						str += '<div class="MEDALLIA_panel_inner">';
						str += '<img class="MEDALLIA_brand" src="'+this.protocol+this.logo+'>';
						str += '<h1>'+this.trans[this.lang].title+'</h1>';
						str += '<p class="MEDALLIA_message">'+this.trans[this.lang].msg+'</p>';
						str += '<div class="MEDALLIA_actions"><a href="#" class="MEDALLIA_bt MEDALLIA_continueBtn">'+this.trans[this.lang].yes+'</a><a href="#" class="MEDALLIA_bt MEDALLIA_cancelBtn">'+this.trans[this.lang].no+'</a></div>';
						str += '<a class="MEDALLIA_power" title="Learn more about Medallia" href="http://www.medallia.com" target="_blank">Powered by Medallia</a>';
						str += '</div>';
						str += '</div>';
						return str;
				}, 
				'url': '',
				'cssMobile':  '.MEDALLIA_mask{visibility:hidden; position:fixed; top:0; left:0; filter:alpha(opacity=80); opacity:.8; background-color:#000; z-index:999990;}.MEDALLIA_overlay{visibility:hidden; font:normal 13px/1 Helvetica,Arial,sans-serif !important; margin:0; padding:0; position:fixed; z-index:999992;}.MEDALLIA_overlay *{margin:0;padding:0;border:0;vertical-align:baseline;font-size:15px !important;color:#666 !important;}.MEDALLIA_panel{position:absolute; width:300px; background-color:#fff;* border:6px solid #819f2b !important;text-align:left !important;text-align:left;zoom:1 !important;-moz-box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;-webkit-box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;-o-box-shadow:0 5px 35px #333 !important;box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;}' +
				    '.MEDALLIA_panel, x:-moz-any-link, x:default{border:6px solid #819f2b !important;}body:first-of-type .MEDALLIA_panel {border:0 !important;}@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0){head~body .MEDALLIA_panel { border:6px solid #819f2b !important;}}* html .MEDALLIA_panel{border:6px solid #819f2b !important;}.MEDALLIA_panel_inner{border:1px solid #fff !important;padding:30px !important;}.MEDALLIA_brand{margin-bottom:20px !important;}.MEDALLIA_panel p{color:#666 !important;line-height:1.33 !important;}' +
				    '.MEDALLIA_panel h1,.MEDALLIA_panel h2,.MEDALLIA_panel h3,.MEDALLIA_panel h4,.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:22px !important;font-weight:bold !important;letter-spacing:-.5px !important;line-height:1.2 !important;margin:6px 0 !important; color:#333 !important;text-transform:none !important;letter-spacing:-.025em !important;}.MEDALLIA_panel h2,.MEDALLIA_panel h3,.MEDALLIA_panel h4,.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:18px !important;font-weight:bold !important;letter-spacing:-.5px !important;line-height:1.2 !important;margin:0 0 6px !important; color:#333 !important}' +
				    '.MEDALLIA_panel h3{font-size:16px !important;}.MEDALLIA_panel h4{font-size:14px !important;}.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:13px !important;text-transform:uppercase !important;letter-spacing:0 !important;}.MEDALLIA_panel h6{font-size:11px !important;}.MEDALLIA_actions{padding:15px 0 !important;}.MEDALLIA_bt{cursor:pointer !important;display:inline-block !important;font:bold 14px/1 Helvetica,Arial,sans-serif !important;overflow:visible !important;position:relative !important;white-space:normal !important;}.MEDALLIA_bt:active{top:1px !important;}.MEDALLIA_bt::-moz-focus-inner{border:0 !important;padding:0 !important;padding-top:8px !important;}' +
				    '.MEDALLIA_actions .MEDALLIA_continueBtn{background-color:#819f2b !important;}.MEDALLIA_continueBtn{background-image:url(//nullassets/bt-grad.png !important);background-repeat:repeat-x !important;border:0 !important;color:#fff !important;margin-right:10px !important;padding:10px 15px !important;text-decoration:none !important;text-shadow:0 -1px 0 rgba(0,0,0,0.25) !important;-moz-border-radius:5px !important;-webkit-border-radius:5px !important;border-radius:5px !important;-moz-box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;}.MEDALLIA_continueBtn:hover{background-color:#819f2b !important;}' +
				    '.MEDALLIA_cancelBtn{background:none;color:#888;font-weight:normal !important;padding:10px 15px;position:relative;text-decoration:underline;}.MEDALLIA_cancelBtn:hover{color:#222 !important;background:none !important;text-decoration:underline !important;}a.MEDALLIA_power{background:transparent url(//nullassets/powered-by-medallia.png) no-repeat !important;display:block !important;height:20px !important;margin:0 0 -2px auto !important;overflow:hidden;text-decoration:none !important;text-indent:-9999px !important;width:152px !important;}a.MEDALLIA_power:hover{text-decoration:none !important;}* html .MEDALLIA_bt{background:transparent;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//nullassets/bt-grad.png",sizingMethod="scale");border-width:1px !important;border-color:transparent !important;}* ' +
				    'html a.MEDALLIA_power{background:transparent !important;cursor:pointer !important;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//nullassets/powered-by-medallia.png",sizingMethod="crop");}.MEDALLIA_Invite_on select, .MEDALLIA_Invite_on embed, .MEDALLIA_Invite_on object {visibility:hidden !important;}.MEDALLIA_Invite_on .MEDALLIA_overlay, .MEDALLIA_Invite_on .MEDALLIA_mask{visibility:visible !important;}',
				'cssDesktop':  '.MEDALLIA_mask{visibility:hidden; position:fixed; top:0; left:0; filter:alpha(opacity=80); opacity:.8; background-color:#000; z-index:999990;}.MEDALLIA_overlay{visibility:hidden; font:normal 13px/1 Helvetica,Arial,sans-serif !important; margin:0; padding:0; position:fixed; z-index:999992;}.MEDALLIA_overlay *{margin:0;padding:0;border:0;vertical-align:baseline;font-size:15px !important;color:#666 !important;}.MEDALLIA_panel{position:absolute; width:500px; background-color:#fff;* border:6px solid #819f2b !important;text-align:left !important;text-align:left;zoom:1 !important;-moz-box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;-webkit-box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;-o-box-shadow:0 5px 35px #333 !important;box-shadow:0 5px 35px rgba(0,0,0,0.8) !important;}' +
				    '.MEDALLIA_panel, x:-moz-any-link, x:default{border:6px solid #819f2b !important;}body:first-of-type .MEDALLIA_panel {border:0 !important;}@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0){head~body .MEDALLIA_panel { border:6px solid #819f2b !important;}}* html .MEDALLIA_panel{border:6px solid #819f2b !important;}.MEDALLIA_panel_inner{border:1px solid #fff !important;padding:30px !important;}.MEDALLIA_brand{margin-bottom:20px !important;}.MEDALLIA_panel p{color:#666 !important;line-height:1.33 !important;}' +
				    '.MEDALLIA_panel h1,.MEDALLIA_panel h2,.MEDALLIA_panel h3,.MEDALLIA_panel h4,.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:22px !important;font-weight:bold !important;letter-spacing:-.5px !important;line-height:1.2 !important;margin:6px 0 !important; color:#333 !important;text-transform:none !important;letter-spacing:-.025em !important;}.MEDALLIA_panel h2,.MEDALLIA_panel h3,.MEDALLIA_panel h4,.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:18px !important;font-weight:bold !important;letter-spacing:-.5px !important;line-height:1.2 !important;margin:0 0 6px !important; color:#333 !important}' +
				    '.MEDALLIA_panel h3{font-size:16px !important;}.MEDALLIA_panel h4{font-size:14px !important;}.MEDALLIA_panel h5,.MEDALLIA_panel h6{font-size:13px !important;text-transform:uppercase !important;letter-spacing:0 !important;}.MEDALLIA_panel h6{font-size:11px !important;}.MEDALLIA_actions{padding:15px 0 !important;}.MEDALLIA_bt{cursor:pointer !important;display:inline-block !important;font:bold 14px/1 Helvetica,Arial,sans-serif !important;overflow:visible !important;position:relative !important;white-space:normal !important;}.MEDALLIA_bt:active{top:1px !important;}.MEDALLIA_bt::-moz-focus-inner{border:0 !important;padding:0 !important;padding-top:8px !important;}' +
				    '.MEDALLIA_actions .MEDALLIA_continueBtn{background-color:#819f2b !important;}.MEDALLIA_continueBtn{background-image:url(//nullassets/bt-grad.png !important);background-repeat:repeat-x !important;border:0 !important;color:#fff !important;margin-right:10px !important;padding:10px 15px !important;text-decoration:none !important;text-shadow:0 -1px 0 rgba(0,0,0,0.25) !important;-moz-border-radius:5px !important;-webkit-border-radius:5px !important;border-radius:5px !important;-moz-box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;box-shadow:0 1px 2px rgba(0,0,0,0.5) !important;}.MEDALLIA_continueBtn:hover{background-color:#819f2b !important;}' +
				    '.MEDALLIA_cancelBtn{background:none;color:#888;font-weight:normal !important;padding:10px 15px;position:relative;text-decoration:underline;}.MEDALLIA_cancelBtn:hover{color:#222 !important;background:none !important;text-decoration:underline !important;}a.MEDALLIA_power{background:transparent url(//nullassets/powered-by-medallia.png) no-repeat !important;display:block !important;height:20px !important;margin:0 0 -2px auto !important;overflow:hidden;text-decoration:none !important;text-indent:-9999px !important;width:152px !important;}a.MEDALLIA_power:hover{text-decoration:none !important;}* html .MEDALLIA_bt{background:transparent;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//nullassets/bt-grad.png",sizingMethod="scale");border-width:1px !important;border-color:transparent !important;}* ' +
				    'html a.MEDALLIA_power{background:transparent !important;cursor:pointer !important;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//nullassets/powered-by-medallia.png",sizingMethod="crop");}.MEDALLIA_Invite_on select, .MEDALLIA_Invite_on embed, .MEDALLIA_Invite_on object {visibility:hidden !important;}.MEDALLIA_Invite_on .MEDALLIA_overlay, .MEDALLIA_Invite_on .MEDALLIA_mask{visibility:visible !important;}',
				'timer': -1
			};
		M_util.merge(o, config);
		
		mobile ? M_util.appendStyle(config.cssMobile) : M_util.appendStyle(config.cssDesktop);
		el.className = 'MEDALLIA_overlay';
		el.innerHTML = config.html();
		el = document.body.appendChild(el);
	
		if (ie6) {
			el.style.position = 'absolute';
		}
		if (config.useMask) {
			mask.className = 'MEDALLIA_mask';
			mask = document.body.appendChild(mask);
			if (ie6) {
				mask.style.position = 'absolute';
			}
		}
		el.onclick = config.handleClick || function(e){
			e = M_util.getEvent(e);
			var t = M_util.getTarget(e);
			if (M_util.hasClass(t, 'MEDALLIA_continueBtn')) {
				M_util.preventDefault(e);
				var left = (screen.width/2)-(config.newWindowWidth/2),
					top = (screen.height/2)-(config.newWindowHeight/2),
					opts = 'scrollbars=1,height='+config.newWindowHeight+',width='+config.newWindowWidth+',top='+top+', left='+left;
				var MEDALLIA_WINDOW = window.open(config.url, 'MEDALLIA_WINDOW', opts);
				if (config.popunder) {
					window.focus();
				} else {
					MEDALLIA_WINDOW.focus();
				}
				config.quarantine();
				hide();
			} else if (M_util.hasClass(t, 'MEDALLIA_cancelBtn')) {
				M_util.preventDefault(e);
				config.quarantine(null, config.optOutDays);
				hide();
			}
		};
		function show (o) {
			if (o) {
				M_util.merge(o, config);
			}
			M_util.on(window, 'resize', synch);
		
			if (ie6) {
				M_util.on(window, 'scroll', function(){
					if (! config.timer) {
						config.timer = -1;
					}
					clearTimeout(config.timer);
				    config.timer = setTimeout(function () {
						center();
				    }, 1);
				});
			}
			M_util.addClass(document.body, 'MEDALLIA_Invite_on');
		}
		function hide () {
			M_util.removeEvent(window, 'resize', synch);
		
			if (ie6) {
				M_util.removeEvent(window, 'scroll', center);
			}
			M_util.removeClass(document.body, 'MEDALLIA_Invite_on');
		}
	
		function resizeMask () {
			var p = ie6 ? M_util.pageSize() : [M_util.getWindowWidth(), M_util.getWindowHeight()];
			mask.style.width = p[0] + 'px';
			mask.style.height = p[1] + 'px';
		}
	
		function center () {
			var w = M_util.getWindowWidth() / 2,
				h = M_util.getWindowHeight() / 2;
			if (ie6) {
				w += M_util.scrollX();
				h += M_util.scrollY();
			}
			var window = 500; //This part specifies the size of the pop-up. Note that there's one mobile and one desktop version.
			mobile ? window = 300 : window = 500;
			p = [w - (window / 2), h - ( el.firstChild.offsetHeight / 2 )];
			el.style.left = p[0] + 'px';
			el.style.top = p[1] + 'px';
		}
		function synch () {
			if (config.useMask) {
				resizeMask();
			}
			center();
		}
		synch();
		if (config.visible) {
			show();
		}
		return {
			synch: synch,
			show: show,
			hide: hide
		};
	} catch (e) {
		return false;
	}
};/*<div id="timeSpentContainer" style="text-align: center"><div style="font-size:xx-small; text-align: left; width: 750px; margin: 0 auto; color:#bbb;">
Struts 121<br>    Process Action 119<br>    Velocity Parse 0<br>    Velocity Render 1<br>Total: 125 ms (3 other)<br>Queries: 18 / 26 ms (6 / 10 ms, 10 / 11 ms, 2 / 4 ms, 0 / 0 ms)</div></div>
*/
