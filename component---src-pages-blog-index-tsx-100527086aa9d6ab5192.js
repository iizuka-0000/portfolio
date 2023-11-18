(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[643],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:u,D:d,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",y={};y[b]=g;var v="$isDayjsObject",D=function(t){return t instanceof O||!(!t||!t[v])},M=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(i=s),n&&(y[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,i=u}return!r&&i&&(b=i),i||!r&&b},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},x=w;x.l=M,x.i=D,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return x},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!x.u(e)||e,l=x.p(t),h=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,p=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case o:var b=this.$locale().weekStart||0,y=($<b?$+7:$)-b;return h(r?p-y:p+(6-y),g);case u:case d:return m(w+"Hours",0);case a:return m(w+"Minutes",1);case s:return m(w+"Seconds",2);case i:return m(w+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=x.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===f){var $=this.clone().set(d,1);$.$d[h](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[x.p(t)]()},p.add=function(r,l){var d,h=this;r=Number(r);var m=x.p(l),$=function(t){var e=S(h);return x.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===u)return $(1);if(m===o)return $(7);var g=(d={},d[s]=e,d[a]=n,d[i]=t,d)[m]||1,p=this.$d.getTime()+r*g;return x.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return x.s(s%12||12,t,"0")},m=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return u+1;case"MM":return x.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,h){var m,$=this,g=x.p(d),p=S(r),w=(p.utcOffset()-this.utcOffset())*e,b=this-p,y=function(){return x.m($,p)};switch(g){case f:m=y()/12;break;case c:m=y();break;case l:m=y()/3;break;case o:m=(b-w)/6048e5;break;case u:m=(b-w)/864e5;break;case a:m=b/n;break;case s:m=b/e;break;case i:m=b/t;break;default:m=b}return h?m:x.a(m)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return x.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),k=O.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",c],["$y",f],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=M,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=y[b],S.Ls=y,S.p={},S}()},8133:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return d},default:function(){return f}});var r=n(7294),i=n(6298),s=n(7607),a=n(1458),u=n(1883),o=n(7484),c=n.n(o),l=n(8032);function f(){const t=(0,u.useStaticQuery)("4051212714"),e=t.allFeedZennBlog.edges.concat(t.allFeedNoteBlog.edges).sort(((t,e)=>t.node.isoDate>e.node.isoDate?-1:1));return r.createElement(i.Z,null,r.createElement("div",{className:"max-w-3xl mx-auto px-4 py-24"},r.createElement(a.E.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeOut",duration:1},className:"text-6xl font-semibold text-black/80"},"Blog"),r.createElement("div",{className:"grid md:grid-cols-2 grid-cols-1 mt-8 gap-y-8"},e.map(((t,e)=>r.createElement(a.E.a,{href:t.node.guid,target:"_blank",rel:"noopener noreferrer",className:"block",key:e,initial:{y:25,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeOut",duration:.3,delay:.1*e}},r.createElement("div",{className:"w-72 h-38 rounded-lg shadow-lg overflow-hidden mx-auto"},t.node.enclosure?r.createElement("img",{src:t.node.enclosure.url,alt:"",className:"w-full h-38 object-cover",width:288,height:152}):r.createElement(l.S,{src:"../../assets/img/white-bg.jpg",alt:"",className:"w-full h-38 object-cover",width:288,height:152,__imageData:n(8224)})),r.createElement("div",{className:"mt-4"},r.createElement("p",{className:"text-lg font-semibold text-center line-clamp-1 w-full"},t.node.title),r.createElement("p",{className:"text-sm text-gray-500 text-center"},c()(new Date(t.node.isoDate)).format("YYYY / MM / DD")))))))))}function d(){return r.createElement(s.Z,{title:"BLOG",description:"iizuka0000のブログ",keywords:""})}},8224:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d8b8","images":{"fallback":{"src":"/portfolio/static/210451e7624d007810c40e025b888c9e/80c01/white-bg.jpg","srcSet":"/portfolio/static/210451e7624d007810c40e025b888c9e/74a77/white-bg.jpg 72w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/db312/white-bg.jpg 144w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/80c01/white-bg.jpg 288w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/26f46/white-bg.jpg 576w","sizes":"(min-width: 288px) 288px, 100vw"},"sources":[{"srcSet":"/portfolio/static/210451e7624d007810c40e025b888c9e/be833/white-bg.webp 72w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/69742/white-bg.webp 144w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/f0f25/white-bg.webp 288w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/e890f/white-bg.webp 576w","type":"image/webp","sizes":"(min-width: 288px) 288px, 100vw"}]},"width":288,"height":152}')}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-100527086aa9d6ab5192.js.map