(function(f,p){function q(a,b,c){var d=u[b.type]||{};if(null==a)return c||!b.def?null:b.def;a=d.floor?~~a:parseFloat(a);return isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a}function v(a){var b=h(),c=b._rgba=[];a=a.toLowerCase();l(y,function(d,g){var e,k=g.re.exec(a);e=k&&g.parse(k);k=g.space||"rgba";if(e)return e=b[k](e),b[m[k].cache]=e[m[k].cache],c=b._rgba=e._rgba,!1});return c.length?("0,0,0,0"===c.join()&&f.extend(c,r.transparent),b):r[a]}function s(a,b,c){c=(c+1)%1;return 1>6*c?
a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var z=/^([\-+])=\s*(\d+\.?\d*)/,y=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),
parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],h=f.Color=function(a,b,c,d){return new f.Color.fn.parse(a,b,c,d)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,
type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},w=h.support={},x=f("<p>")[0],r,l=f.each;x.style.cssText="background-color:rgba(1,1,1,.5)";w.rgba=-1<x.style.backgroundColor.indexOf("rgba");l(m,function(a,b){b.cache="_"+a;b.props.alpha={idx:3,type:"percent",def:1}});h.fn=f.extend(h.prototype,{parse:function(a,b,c,d){if(a===p)return this._rgba=[null,null,null,null],this;if(a.jquery||a.nodeType)a=
f(a).css(b),b=p;var g=this,e=f.type(a),k=this._rgba=[];b!==p&&(a=[a,b,c,d],e="array");if("string"===e)return this.parse(v(a)||r._default);if("array"===e)return l(m.rgba.props,function(d,c){k[c.idx]=q(a[c.idx],c)}),this;if("object"===e)return a instanceof h?l(m,function(c,d){a[d.cache]&&(g[d.cache]=a[d.cache].slice())}):l(m,function(d,c){var b=c.cache;l(c.props,function(d,e){if(!g[b]&&c.to){if("alpha"===d||null==a[d])return;g[b]=c.to(g._rgba)}g[b][e.idx]=q(a[d],e,!0)});g[b]&&0>f.inArray(null,g[b].slice(0,
3))&&(g[b][3]=1,c.from&&(g._rgba=c.from(g[b])))}),this},is:function(a){var b=h(a),c=!0,d=this;l(m,function(a,e){var k,f=b[e.cache];f&&(k=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,d){if(null!=f[d.idx])return c=f[d.idx]===k[d.idx]}));return c});return c},_space:function(){var a=[],b=this;l(m,function(c,d){b[d.cache]&&a.push(c)});return a.pop()},transition:function(a,b){var c=h(a),d=c._space(),g=m[d],e=0===this.alpha()?h("transparent"):this,k=e[g.cache]||g.to(e._rgba),f=k.slice(),c=c[g.cache];
l(g.props,function(a,d){var g=d.idx,e=k[g],h=c[g],l=u[d.type]||{};null!==h&&(null===e?f[g]=h:(l.mod&&(h-e>l.mod/2?e+=l.mod:e-h>l.mod/2&&(e-=l.mod)),f[g]=q((h-e)*b+e,d)))});return this[d](f)},blend:function(a){if(1===this._rgba[3])return this;var b=this._rgba.slice(),c=b.pop(),d=h(a)._rgba;return h(f.map(b,function(a,b){return(1-c)*d[b]+c*a}))},toRgbaString:function(){var a="rgba(",b=f.map(this._rgba,function(a,d){return null==a?2<d?1:0:a});1===b[3]&&(b.pop(),a="rgb(");return a+b.join()+")"},toHslaString:function(){var a=
"hsla(",b=f.map(this.hsla(),function(a,d){null==a&&(a=2<d?1:0);d&&3>d&&(a=Math.round(100*a)+"%");return a});1===b[3]&&(b.pop(),a="hsl(");return a+b.join()+")"},toHexString:function(a){var b=this._rgba.slice(),c=b.pop();a&&b.push(~~(255*c));return"#"+f.map(b,function(a){a=(a||0).toString(16);return 1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}});h.fn.parse.prototype=h.fn;m.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,
null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255;a=a[3];var g=Math.max(b,c,d),e=Math.min(b,c,d),k=g-e,f=g+e,h=0.5*f,f=0===k?0:0.5>=h?k/f:k/(2-f);return[Math.round(e===g?0:b===g?60*(c-d)/k+360:c===g?60*(d-b)/k+120:60*(b-c)/k+240)%360,f,h,null==a?1:a]};m.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2];a=a[3];c=0.5>=d?d*(1+c):d+c-d*c;d=2*d-c;return[Math.round(255*s(d,c,b+1/3)),Math.round(255*s(d,c,b)),Math.round(255*s(d,c,b-1/3)),
a]};l(m,function(a,b){var c=b.props,d=b.cache,g=b.to,e=b.from;h.fn[a]=function(a){g&&!this[d]&&(this[d]=g(this._rgba));if(a===p)return this[d].slice();var b,t=f.type(a),m="array"===t||"object"===t?a:arguments,n=this[d].slice();l(c,function(a,d){var b=m["object"===t?a:d.idx];null==b&&(b=n[d.idx]);n[d.idx]=q(b,d)});return e?(b=h(e(n)),b[d]=n,b):h(n)};l(c,function(d,b){h.fn[d]||(h.fn[d]=function(c){var e=f.type(c),g="alpha"===d?this._hsla?"hsla":"rgba":a,h=this[g](),l=h[b.idx];if("undefined"===e)return l;
"function"===e&&(c=c.call(this,l),e=f.type(c));if(null==c&&b.empty)return this;"string"===e&&(e=z.exec(c))&&(c=l+parseFloat(e[2])*("+"===e[1]?1:-1));h[b.idx]=c;return this[g](h)})})});h.hook=function(a){a=a.split(" ");l(a,function(a,c){f.cssHooks[c]={set:function(a,b){var e,k="";if("transparent"!==b&&("string"!==f.type(b)||(e=v(b)))){b=h(e||b);if(!w.rgba&&1!==b._rgba[3]){for(e="backgroundColor"===c?a.parentNode:a;(""===k||"transparent"===k)&&e&&e.style;)try{k=f.css(e,"backgroundColor"),e=e.parentNode}catch(l){}b=
b.blend(k&&"transparent"!==k?k:"_default")}b=b.toRgbaString()}try{a.style[c]=b}catch(m){}}};f.fx.step[c]=function(a){a.colorInit||(a.start=h(a.elem,c),a.end=h(a.end),a.colorInit=!0);f.cssHooks[c].set(a.elem,a.start.transition(a.end,a.pos))}})};h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");f.cssHooks.borderColor={expand:function(a){var b={};l(["Top","Right","Bottom","Left"],function(c,
d){b["border"+d+"Color"]=a});return b}};r=f.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);