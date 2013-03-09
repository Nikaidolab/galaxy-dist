(function(){var x=this;var t=x._;var b={};var j=Array.prototype,D=Object.prototype,G=Function.prototype;var v=j.slice,z=j.unshift,y=D.toString,p=D.hasOwnProperty;var n=j.forEach,i=j.map,B=j.reduce,e=j.reduceRight,m=j.filter,a=j.every,A=j.some,w=j.indexOf,f=j.lastIndexOf,c=Array.isArray,C=Object.keys,k=G.bind;var F=function(I){return new g(I)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=F}exports._=F}else{x._=F}F.VERSION="1.3.1";var d=F.each=F.forEach=function(N,M,L){if(N==null){return}if(n&&N.forEach===n){N.forEach(M,L)}else{if(N.length===+N.length){for(var K=0,I=N.length;K<I;K++){if(K in N&&M.call(L,N[K],K,N)===b){return}}}else{for(var J in N){if(F.has(N,J)){if(M.call(L,N[J],J,N)===b){return}}}}}};F.map=F.collect=function(L,K,J){var I=[];if(L==null){return I}if(i&&L.map===i){return L.map(K,J)}d(L,function(O,M,N){I[I.length]=K.call(J,O,M,N)});if(L.length===+L.length){I.length=L.length}return I};F.reduce=F.foldl=F.inject=function(M,L,I,K){var J=arguments.length>2;if(M==null){M=[]}if(B&&M.reduce===B){if(K){L=F.bind(L,K)}return J?M.reduce(L,I):M.reduce(L)}d(M,function(P,N,O){if(!J){I=P;J=true}else{I=L.call(K,I,P,N,O)}});if(!J){throw new TypeError("Reduce of empty array with no initial value")}return I};F.reduceRight=F.foldr=function(M,L,I,K){var J=arguments.length>2;if(M==null){M=[]}if(e&&M.reduceRight===e){if(K){L=F.bind(L,K)}return J?M.reduceRight(L,I):M.reduceRight(L)}var N=F.toArray(M).reverse();if(K&&!J){L=F.bind(L,K)}return J?F.reduce(N,L,I,K):F.reduce(N,L)};F.find=F.detect=function(L,K,J){var I;r(L,function(O,M,N){if(K.call(J,O,M,N)){I=O;return true}});return I};F.filter=F.select=function(L,K,J){var I=[];if(L==null){return I}if(m&&L.filter===m){return L.filter(K,J)}d(L,function(O,M,N){if(K.call(J,O,M,N)){I[I.length]=O}});return I};F.reject=function(L,K,J){var I=[];if(L==null){return I}d(L,function(O,M,N){if(!K.call(J,O,M,N)){I[I.length]=O}});return I};F.every=F.all=function(L,K,J){var I=true;if(L==null){return I}if(a&&L.every===a){return L.every(K,J)}d(L,function(O,M,N){if(!(I=I&&K.call(J,O,M,N))){return b}});return I};var r=F.some=F.any=function(L,K,J){K||(K=F.identity);var I=false;if(L==null){return I}if(A&&L.some===A){return L.some(K,J)}d(L,function(O,M,N){if(I||(I=K.call(J,O,M,N))){return b}});return !!I};F.include=F.contains=function(K,J){var I=false;if(K==null){return I}if(w&&K.indexOf===w){return K.indexOf(J)!=-1}I=r(K,function(L){return L===J});return I};F.invoke=function(J,K){var I=v.call(arguments,2);return F.map(J,function(L){return(F.isFunction(K)?K||L:L[K]).apply(L,I)})};F.pluck=function(J,I){return F.map(J,function(K){return K[I]})};F.max=function(L,K,J){if(!K&&F.isArray(L)){return Math.max.apply(Math,L)}if(!K&&F.isEmpty(L)){return -Infinity}var I={computed:-Infinity};d(L,function(P,M,O){var N=K?K.call(J,P,M,O):P;N>=I.computed&&(I={value:P,computed:N})});return I.value};F.min=function(L,K,J){if(!K&&F.isArray(L)){return Math.min.apply(Math,L)}if(!K&&F.isEmpty(L)){return Infinity}var I={computed:Infinity};d(L,function(P,M,O){var N=K?K.call(J,P,M,O):P;N<I.computed&&(I={value:P,computed:N})});return I.value};F.shuffle=function(K){var I=[],J;d(K,function(N,L,M){if(L==0){I[0]=N}else{J=Math.floor(Math.random()*(L+1));I[L]=I[J];I[J]=N}});return I};F.sortBy=function(K,J,I){return F.pluck(F.map(K,function(N,L,M){return{value:N,criteria:J.call(I,N,L,M)}}).sort(function(O,N){var M=O.criteria,L=N.criteria;return M<L?-1:M>L?1:0}),"value")};F.groupBy=function(K,L){var I={};var J=F.isFunction(L)?L:function(M){return M[L]};d(K,function(O,M){var N=J(O,M);(I[N]||(I[N]=[])).push(O)});return I};F.sortedIndex=function(N,M,K){K||(K=F.identity);var I=0,L=N.length;while(I<L){var J=(I+L)>>1;K(N[J])<K(M)?I=J+1:L=J}return I};F.toArray=function(I){if(!I){return[]}if(I.toArray){return I.toArray()}if(F.isArray(I)){return v.call(I)}if(F.isArguments(I)){return v.call(I)}return F.values(I)};F.size=function(I){return F.toArray(I).length};F.first=F.head=function(K,J,I){return(J!=null)&&!I?v.call(K,0,J):K[0]};F.initial=function(K,J,I){return v.call(K,0,K.length-((J==null)||I?1:J))};F.last=function(K,J,I){if((J!=null)&&!I){return v.call(K,Math.max(K.length-J,0))}else{return K[K.length-1]}};F.rest=F.tail=function(K,I,J){return v.call(K,(I==null)||J?1:I)};F.compact=function(I){return F.filter(I,function(J){return !!J})};F.flatten=function(J,I){return F.reduce(J,function(K,L){if(F.isArray(L)){return K.concat(I?L:F.flatten(L))}K[K.length]=L;return K},[])};F.without=function(I){return F.difference(I,v.call(arguments,1))};F.uniq=F.unique=function(M,L,K){var J=K?F.map(M,K):M;var I=[];F.reduce(J,function(N,P,O){if(0==O||(L===true?F.last(N)!=P:!F.include(N,P))){N[N.length]=P;I[I.length]=M[O]}return N},[]);return I};F.union=function(){return F.uniq(F.flatten(arguments,true))};F.intersection=F.intersect=function(J){var I=v.call(arguments,1);return F.filter(F.uniq(J),function(K){return F.every(I,function(L){return F.indexOf(L,K)>=0})})};F.difference=function(J){var I=F.flatten(v.call(arguments,1));return F.filter(J,function(K){return !F.include(I,K)})};F.zip=function(){var I=v.call(arguments);var L=F.max(F.pluck(I,"length"));var K=new Array(L);for(var J=0;J<L;J++){K[J]=F.pluck(I,""+J)}return K};F.indexOf=function(M,K,L){if(M==null){return -1}var J,I;if(L){J=F.sortedIndex(M,K);return M[J]===K?J:-1}if(w&&M.indexOf===w){return M.indexOf(K)}for(J=0,I=M.length;J<I;J++){if(J in M&&M[J]===K){return J}}return -1};F.lastIndexOf=function(K,J){if(K==null){return -1}if(f&&K.lastIndexOf===f){return K.lastIndexOf(J)}var I=K.length;while(I--){if(I in K&&K[I]===J){return I}}return -1};F.range=function(N,L,M){if(arguments.length<=1){L=N||0;N=0}M=arguments[2]||1;var J=Math.max(Math.ceil((L-N)/M),0);var I=0;var K=new Array(J);while(I<J){K[I++]=N;N+=M}return K};var h=function(){};F.bind=function H(L,J){var K,I;if(L.bind===k&&k){return k.apply(L,v.call(arguments,1))}if(!F.isFunction(L)){throw new TypeError}I=v.call(arguments,2);return K=function(){if(!(this instanceof K)){return L.apply(J,I.concat(v.call(arguments)))}h.prototype=L.prototype;var N=new h;var M=L.apply(N,I.concat(v.call(arguments)));if(Object(M)===M){return M}return N}};F.bindAll=function(J){var I=v.call(arguments,1);if(I.length==0){I=F.functions(J)}d(I,function(K){J[K]=F.bind(J[K],J)});return J};F.memoize=function(K,J){var I={};J||(J=F.identity);return function(){var L=J.apply(this,arguments);return F.has(I,L)?I[L]:(I[L]=K.apply(this,arguments))}};F.delay=function(J,K){var I=v.call(arguments,2);return setTimeout(function(){return J.apply(J,I)},K)};F.defer=function(I){return F.delay.apply(F,[I,1].concat(v.call(arguments,1)))};F.throttle=function(N,P){var L,I,O,M,K;var J=F.debounce(function(){K=M=false},P);return function(){L=this;I=arguments;var Q=function(){O=null;if(K){N.apply(L,I)}J()};if(!O){O=setTimeout(Q,P)}if(M){K=true}else{N.apply(L,I)}J();M=true}};F.debounce=function(I,K){var J;return function(){var N=this,M=arguments;var L=function(){J=null;I.apply(N,M)};clearTimeout(J);J=setTimeout(L,K)}};F.once=function(K){var I=false,J;return function(){if(I){return J}I=true;return J=K.apply(this,arguments)}};F.wrap=function(I,J){return function(){var K=[I].concat(v.call(arguments,0));return J.apply(this,K)}};F.compose=function(){var I=arguments;return function(){var J=arguments;for(var K=I.length-1;K>=0;K--){J=[I[K].apply(this,J)]}return J[0]}};F.after=function(J,I){if(J<=0){return I()}return function(){if(--J<1){return I.apply(this,arguments)}}};F.keys=C||function(K){if(K!==Object(K)){throw new TypeError("Invalid object")}var J=[];for(var I in K){if(F.has(K,I)){J[J.length]=I}}return J};F.values=function(I){return F.map(I,F.identity)};F.functions=F.methods=function(K){var J=[];for(var I in K){if(F.isFunction(K[I])){J.push(I)}}return J.sort()};F.extend=function(I){d(v.call(arguments,1),function(J){for(var K in J){I[K]=J[K]}});return I};F.defaults=function(I){d(v.call(arguments,1),function(J){for(var K in J){if(I[K]==null){I[K]=J[K]}}});return I};F.clone=function(I){if(!F.isObject(I)){return I}return F.isArray(I)?I.slice():F.extend({},I)};F.tap=function(J,I){I(J);return J};function E(L,K,J){if(L===K){return L!==0||1/L==1/K}if(L==null||K==null){return L===K}if(L._chain){L=L._wrapped}if(K._chain){K=K._wrapped}if(L.isEqual&&F.isFunction(L.isEqual)){return L.isEqual(K)}if(K.isEqual&&F.isFunction(K.isEqual)){return K.isEqual(L)}var O=y.call(L);if(O!=y.call(K)){return false}switch(O){case"[object String]":return L==String(K);case"[object Number]":return L!=+L?K!=+K:(L==0?1/L==1/K:L==+K);case"[object Date]":case"[object Boolean]":return +L==+K;case"[object RegExp]":return L.source==K.source&&L.global==K.global&&L.multiline==K.multiline&&L.ignoreCase==K.ignoreCase}if(typeof L!="object"||typeof K!="object"){return false}var P=J.length;while(P--){if(J[P]==L){return true}}J.push(L);var N=0,I=true;if(O=="[object Array]"){N=L.length;I=N==K.length;if(I){while(N--){if(!(I=N in L==N in K&&E(L[N],K[N],J))){break}}}}else{if("constructor" in L!="constructor" in K||L.constructor!=K.constructor){return false}for(var M in L){if(F.has(L,M)){N++;if(!(I=F.has(K,M)&&E(L[M],K[M],J))){break}}}if(I){for(M in K){if(F.has(K,M)&&!(N--)){break}}I=!N}}J.pop();return I}F.isEqual=function(J,I){return E(J,I,[])};F.isEmpty=function(J){if(F.isArray(J)||F.isString(J)){return J.length===0}for(var I in J){if(F.has(J,I)){return false}}return true};F.isElement=function(I){return !!(I&&I.nodeType==1)};F.isArray=c||function(I){return y.call(I)=="[object Array]"};F.isObject=function(I){return I===Object(I)};F.isArguments=function(I){return y.call(I)=="[object Arguments]"};if(!F.isArguments(arguments)){F.isArguments=function(I){return !!(I&&F.has(I,"callee"))}}F.isFunction=function(I){return y.call(I)=="[object Function]"};F.isString=function(I){return y.call(I)=="[object String]"};F.isNumber=function(I){return y.call(I)=="[object Number]"};F.isNaN=function(I){return I!==I};F.isBoolean=function(I){return I===true||I===false||y.call(I)=="[object Boolean]"};F.isDate=function(I){return y.call(I)=="[object Date]"};F.isRegExp=function(I){return y.call(I)=="[object RegExp]"};F.isNull=function(I){return I===null};F.isUndefined=function(I){return I===void 0};F.has=function(J,I){return p.call(J,I)};F.noConflict=function(){x._=t;return this};F.identity=function(I){return I};F.times=function(L,K,J){for(var I=0;I<L;I++){K.call(J,I)}};F.escape=function(I){return(""+I).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};F.mixin=function(I){d(F.functions(I),function(J){s(J,F[J]=I[J])})};var l=0;F.uniqueId=function(I){var J=l++;return I?I+J:J};F.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/;var q=function(I){return I.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};F.template=function(L,K){var M=F.templateSettings;var I="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+L.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(M.escape||u,function(N,O){return"',_.escape("+q(O)+"),'"}).replace(M.interpolate||u,function(N,O){return"',"+q(O)+",'"}).replace(M.evaluate||u,function(N,O){return"');"+q(O).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";var J=new Function("obj","_",I);if(K){return J(K,F)}return function(N){return J.call(this,N,F)}};F.chain=function(I){return F(I).chain()};var g=function(I){this._wrapped=I};F.prototype=g.prototype;var o=function(J,I){return I?F(J).chain():J};var s=function(I,J){g.prototype[I]=function(){var K=v.call(arguments);z.call(K,this._wrapped);return o(J.apply(F,K),this._chain)}};F.mixin(F);d(["pop","push","reverse","shift","sort","splice","unshift"],function(I){var J=j[I];g.prototype[I]=function(){var K=this._wrapped;J.apply(K,arguments);var L=K.length;if((I=="shift"||I=="splice")&&L===0){delete K[0]}return o(K,this._chain)}});d(["concat","join","slice"],function(I){var J=j[I];g.prototype[I]=function(){return o(J.apply(this._wrapped,arguments),this._chain)}});g.prototype.chain=function(){this._chain=true;return this};g.prototype.value=function(){return this._wrapped}}).call(this);