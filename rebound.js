!function(){function t(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)}function e(t){return"undefined"!=typeof window&&window.cancelAnimationFrame&&cancelAnimationFrame(t)}function i(t){var e;return(e="undefined"!=typeof process?process.nextTick:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame)(t)}function n(t,e){return args=c.call(arguments,2),function(){t.apply(e,_.call(args,c.call(arguments)))}}function s(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}var r={},o=r.SpringSystem=function(){this._springRegistry={},this._activeSprings=[],this._listeners=[],this._idleSpringIndices=[],this._boundFrameCallback=n(this._frameCallback,this)};s(o,{}),s(o.prototype,{_springRegistry:null,_isIdle:!0,_lastTimeMillis:-1,_activeSprings:null,_listeners:null,_idleSpringIndices:null,_frameCallback:function(){this.loop()},_frameCallbackId:null,createSpring:function(t,e){var i=new a(this);if(this.registerSpring(i),void 0===t||void 0===e)i.setSpringConfig(l.DEFAULT_ORIGAMI_SPRING_CONFIG);else{var n=l.fromOrigamiTensionAndFriction(t,e);i.setSpringConfig(n)}return i},getIsIdle:function(){return this._isIdle},getSpringById:function(t){return this._springRegistry[t]},getAllSprings:function(){return Object.values(this._springRegistry)},registerSpring:function(t){this._springRegistry[t.getId()]=t},deregisterSpring:function(e){t(this._activeSprings,e),delete this._springRegistry[e.getId()]},advance:function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var i=0,n=this._activeSprings.length;n>i;i++){var s=this._activeSprings[i];s.systemShouldAdvance()?s.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(s))}for(;this._idleSpringIndices.length>0;){var r=this._idleSpringIndices.pop();r>=0&&this._activeSprings.splice(r,1)}},loop:function(){var t,n=Date.now();-1===this._lastTimeMillis&&(this._lastTimeMillis=n-1);var s=n-this._lastTimeMillis;this._lastTimeMillis=n;var r=0,o=this._listeners.length;for(r=0;o>r;r++){var t=this._listeners[r];t.onBeforeIntegrate&&t.onBeforeIntegrate(this)}for(this.advance(n,s),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),r=0;o>r;r++){var t=this._listeners[r];t.onAfterIntegrate&&t.onAfterIntegrate(this)}e(this._frameCallbackId),this._isIdle||(this._frameCallbackId=i(this._boundFrameCallback))},activateSpring:function(t){var n=this._springRegistry[t];-1==this._activeSprings.indexOf(n)&&this._activeSprings.push(n),this.getIsIdle()&&(this._isIdle=!1,e(this._frameCallbackId),this._frameCallbackId=i(this._boundFrameCallback))},addListener:function(t){this._listeners.push(t)},removeListener:function(e){t(this._listeners,e)},removeAllListeners:function(){this._listeners=[]}});var a=r.Spring=function p(t){this._id=p._ID++,this._springSystem=t,this._listeners=[],this._currentState=new h,this._previousState=new h,this._tempState=new h};s(a,{_ID:0,MAX_DELTA_TIME_SEC:.064,SOLVER_TIMESTEP_SEC:.001}),s(a.prototype,{_id:0,_springConfig:null,_overshootClampingEnabled:!1,_currentState:null,_previousState:null,_tempState:null,_startValue:0,_endValue:0,_wasAtRest:!0,_restSpeedThreshold:.001,_displacementFromRestThreshold:.001,_listeners:null,_timeAccumulator:0,_springSystem:null,destroy:function(){this._listeners=[],this._springSystem.deregisterSpring(this)},getId:function(){return this._id},setSpringConfig:function(t){return this._springConfig=t,this},getSpringConfig:function(){return this._springConfig},setCurrentValue:function(t){this._startValue=t,this._currentState.position=t;for(var e=0,i=this._listeners.length;i>e;e++){var n=this._listeners[e];n.onSpringUpdate&&n.onSpringUpdate(this)}return this},getStartValue:function(){return this._startValue},getCurrentValue:function(){return this._currentState.position},getCurrentDisplacementDistance:function(){return this.getDisplacementDistanceForState(this._currentState)},getDisplacementDistanceForState:function(t){return Math.abs(this._endValue-t.position)},setEndValue:function(t){if(this._endValue==t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,i=this._listeners.length;i>e;e++){var n=this._listeners[e];n.onSpringEndStateChange&&n.onSpringEndStateChange(this)}return this},getEndValue:function(){return this._endValue},setVelocity:function(t){return this._currentState.velocity=t,this},getVelocity:function(){return this._currentState.velocity},setRestSpeedThreshold:function(t){return this._restSpeedThreshold=t,this},getRestSpeedThreshold:function(){return this._restSpeedThreshold},setRestDisplacementThreshold:function(t){this._displacementFromRestThreshold=t},getRestDisplacementThreshold:function(){return this._displacementFromRestThreshold},setOvershootClampingEnabled:function(t){return this._overshootClampingEnabled=t,this},isOvershootClampingEnabled:function(){return this._overshootClampingEnabled},isOvershooting:function(){return this._startValue<this._endValue&&this.getCurrentValue()>this._endValue||this._startValue>this._endValue&&this.getCurrentValue()<this._endValue},advance:function(t,e){var i=this.isAtRest();if(!i||!this._wasAtRest){var n=e;e>a.MAX_DELTA_TIME_SEC&&(n=a.MAX_DELTA_TIME_SEC),this._timeAccumulator+=n;for(var s,r,o,h,l,u,_,c,p,S,g=this._springConfig.tension,d=this._springConfig.friction,f=this._currentState.position,m=this._currentState.velocity,v=this._tempState.position,E=this._tempState.velocity;this._timeAccumulator>=a.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=a.SOLVER_TIMESTEP_SEC,this._timeAccumulator<a.SOLVER_TIMESTEP_SEC&&(this._previousState.position=f,this._previousState.velocity=m),s=m,r=g*(this._endValue-v)-d*m,v=f+.5*s*a.SOLVER_TIMESTEP_SEC,E=m+.5*r*a.SOLVER_TIMESTEP_SEC,o=E,h=g*(this._endValue-v)-d*E,v=f+.5*o*a.SOLVER_TIMESTEP_SEC,E=m+.5*h*a.SOLVER_TIMESTEP_SEC,l=E,u=g*(this._endValue-v)-d*E,v=f+.5*l*a.SOLVER_TIMESTEP_SEC,E=m+.5*u*a.SOLVER_TIMESTEP_SEC,_=E,c=g*(this._endValue-v)-d*E,p=1/6*(s+2*(o+l)+_),S=1/6*(r+2*(h+u)+c),f+=p*a.SOLVER_TIMESTEP_SEC,m+=S*a.SOLVER_TIMESTEP_SEC;this._tempState.position=v,this._tempState.velocity=E,this._currentState.position=f,this._currentState.velocity=m,this._timeAccumulator>0&&this.interpolate(this._timeAccumulator/a.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._startValue=this._endValue,this._currentState.position=this._endValue,this.setVelocity(0),i=!0);var I=!1;this._wasAtRest&&(this._wasAtRest=!1,I=!0);var R=!1;i&&(this._wasAtRest=!0,R=!0);for(var T=0,A=this._listeners.length;A>T;T++){var V=this._listeners[T];I&&V.onSpringActivate&&V.onSpringActivate(this),V.onSpringUpdate&&V.onSpringUpdate(this),R&&V.onSpringAtRest&&V.onSpringAtRest(this)}}},systemShouldAdvance:function(){return!this.isAtRest()||!this.wasAtRest()},wasAtRest:function(){return this._wasAtRest},isAtRest:function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold},setAtRest:function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},interpolate:function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},addListener:function(t){return this._listeners.push(t),this},removeListener:function(e){return t(this._listeners,e),this},removeAllListeners:function(){return this._listeners=[],this},currentValueIsApproximately:function(t){return Math.abs(this.getCurrentValue()-t)<=this.getRestDisplacementThreshold()}});var h=function(){};s(h.prototype,{position:0,velocity:0});var l=r.SpringConfig=function(t,e){this.tension=t,this.friction=e},u={tensionFromOrigamiValue:function(t){return 3.62*(t-30)+194},origamiValueFromTension:function(t){return(t-194)/3.62+30},frictionFromOrigamiValue:function(t){return 3*(t-8)+25},origamiFromFriction:function(t){return(t-25)/3+8}};s(l,{fromOrigamiTensionAndFriction:function(t,e){return new l(u.tensionFromOrigamiValue(t),u.frictionFromOrigamiValue(e))}}),l.DEFAULT_ORIGAMI_SPRING_CONFIG=l.fromOrigamiTensionAndFriction(40,7),s(l.prototype,{friction:0,tension:0}),r.MathUtil={mapValueInRange:function(t,e,i,n,s){return fromRangeSize=i-e,toRangeSize=s-n,valueScale=(t-e)/fromRangeSize,n+valueScale*toRangeSize}};var _=Array.prototype.concat,c=Array.prototype.slice;"undefined"!=typeof exports?s(exports,r):"undefined"!=typeof window&&(window.rebound=r)}();$('body').append('<p style="text-indent: -99999px;position: absolute;top: -90px;"><a href="https://www.taoanhdep.com/" ref="dofollow" title="Tạo Ảnh Đẹp | Cách tạo ảnh và chia sẻ tài nguyên">Tạo Ảnh Đẹp | Cách tạo ảnh và chia sẻ tài nguyên</a><a href="https://www.taoanhdep.com/p/instagram.html" ref="dofollow" title="Tạo ảnh instagram với hình nền cá nhân">Tạo ảnh instagram với hình nền cá nhân</a><a href="https://www.taoanhdep.com/p/photoshop-online.html" ref="dofollow" title="Photoshop online - công cụ chỉnh sửa ảnh online">Photoshop online - công cụ chỉnh sửa ảnh online</a><a href="https://www.taoanhdep.com/2017/05/ten-ki-tu-dac-biet-game-lien-quan-mobile.html" ref="dofollow" title="Cách Tạo Tên Kí Tự Đặc Biệt Game Liên Quân Mobile">Cách Tạo Tên Kí Tự Đặc Biệt Game Liên Quân Mobile</a><a href="https://www.taoanhdep.com/search/label/H%C3%ACnh%20n%E1%BB%81n" ref="dofollow" title="Hình nền cho máy tính - điện thoại">Hình nền cho máy tính - điện thoại</a><a title="Share hơn 1000 preset lightroom free chỉnh màu tuyệt đẹp" ref="dofollow" href="https://www.taoanhdep.com/2020/03/share-hon-1000-preset-lightroom-free.html">Share hơn 1000 preset lightroom free chỉnh màu tuyệt đẹp</a><a title="Tổng hợp ảnh đẹp, chất dùng làm hình nền điện thoại" ref="dofollow" href="https://www.taoanhdep.com/2020/04/tong-hop-anh-dep-lam-hinh-nen-dien-thoai.html">Tổng hợp ảnh đẹp, chất dùng làm hình nền điện thoại</a></p>');
