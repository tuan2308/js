(function(a){a.fn.blurIt=function(c,b){this.each(function(){function h(n){var m=i.naturalWidth;var o=i.naturalHeight;d(m,o,n)}function d(m,o,n){j.style.width=m+"px";j.style.height=o+"px";j.width=m;j.height=o;k.clearRect(0,0,m,o);k.drawImage(n,0,0);l(m,o)}function l(D,S){var U=k.getImageData(0,0,D,S);var z=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1];var F=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];var J=U.data;var s,E,O,I,C,B,R,K,q,n,V,Z,N,H,m;var t=D-1;var o=S-1;var v=D*S;var L=e+1;var Q=z[e];var M=F[e];var G=[];var T=[];var X=[];var Y=[];var u=[];var A=[];var P=2;while(P-->0){N=Z=0;for(B=0;B<S;B++){s=J[N]*L;E=J[N+1]*L;O=J[N+2]*L;I=J[N+3]*L;for(R=1;R<=e;R++){K=N+(((R>t?t:R))<<2);s+=J[K++];E+=J[K++];O+=J[K++];I+=J[K]}for(C=0;C<D;C++){G[Z]=s;T[Z]=E;X[Z]=O;Y[Z]=I;if(B==0){u[C]=((K=C+L)<t?K:t)<<2;A[C]=((K=C-e)>0?K<<2:0)}q=N+u[C];n=N+A[C];s+=J[q++]-J[n++];E+=J[q++]-J[n++];O+=J[q++]-J[n++];I+=J[q]-J[n];Z++}N+=(D<<2)}for(C=0;C<D;C++){V=C;s=G[V]*L;E=T[V]*L;O=X[V]*L;I=Y[V]*L;for(R=1;R<=e;R++){V+=(R>o?0:D);s+=G[V];E+=T[V];O+=X[V];I+=Y[V]}Z=C<<2;for(B=0;B<S;B++){J[Z+3]=m=(I*Q)>>>M;if(m>0){m=255/m;J[Z]=((s*Q)>>>M)*m;J[Z+1]=((E*Q)>>>M)*m;J[Z+2]=((O*Q)>>>M)*m}else{J[Z]=J[Z+1]=J[Z+2]=0}if(C==0){u[B]=((K=B+L)<o?K:o)*D;A[B]=((K=B-e)>0?K*D:0)}q=C+u[B];n=C+A[B];s+=G[q]-G[n];E+=T[q]-T[n];O+=X[q]-X[n];I+=Y[q]-Y[n];Z+=D<<2}}}k.putImageData(U,0,0);var W=j.toDataURL("image/png");g.css({background:"center center no-repeat url("+W+")","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"})}var j=document.createElement("canvas");var k=j.getContext("2d");var f;var g=a(this);var i=new Image();i.crossOrigin="anonymous";i.src=c[0].src;i.onload=function(){h(i)};var e=b})}})(jQuery);