(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["BoardActivityPinRepReactionsCommon"],{CKy5:function(e,t,n){},GsvW:function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return l}));var o=n("Ye/N");const i=656,r=464,a=60,c=170,s=e=>{const t=new Date(e),n=(new Date).getTime()-t.getTime();return Math.floor(n/1e3)<60?o.a._("now","timestamp for a comment or post that was created within the last minute"):o.a.getHumanizedTimesince(e,{isAbbreviated:!0})},l=e=>{const t=e.first_name||e.full_name||e.username;return t&&t.length>a?t.substring(0,a).trim().concat("..."):t}},"N/FO":function(e,t,n){const o="undefined"!=typeof window&&window.performance?()=>window.performance.now():()=>Date.now();t.a=({window:e,duration:t,run:n})=>{const i=o();let r=0,a=null;const c=()=>{const s=o()-i,l=s-r;if(t===1/0)n(0,s,l);else{const e=s/t;if(e>=1)return void n(1,s,l);n(e,s,l)}r=s,a=e.requestAnimationFrame(c)};return{start:()=>{a=e.requestAnimationFrame(c)},cancel:()=>{a&&(e.cancelAnimationFrame(a),a=null)}}}},N84b:function(e,t,n){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return m}));var o=n("N/FO");const i={easingFunction:"ease-in-out",extendToEdgeDistanceX:0,extendToEdgeDistanceY:0,scrollSpeedPxPerMs:1.2,minScrollDuration:200},r={linear:e=>e,"ease-in":e=>e*e,"ease-out":e=>e*(2-e),"ease-in-out":e=>e<.5?2*e*e:(4-2*e)*e-1},a=({scrollPosition:e,containerSize:t,contentSize:n,intendedDistance:o,extendToEdgeDistance:i=0})=>{const r=n-t,a=r-e,c=-e;let s=o;return s=Math.min(s,a),s=Math.max(s,c),o>0&&r-(e+s)<=i?s=r-e:o<0&&e+s<=i&&(s=-e),s},c=(e,t,n,c={})=>{const s={...i,...c},{scrollLeft:l,scrollTop:d,scrollWidth:u,scrollHeight:m,clientWidth:C,clientHeight:h}=e,f=a({scrollPosition:l,containerSize:C,contentSize:u,intendedDistance:t,extendToEdgeDistance:s.extendToEdgeDistanceX}),p=a({scrollPosition:d,containerSize:h,contentSize:m,intendedDistance:n,extendToEdgeDistance:s.extendToEdgeDistanceY}),g=Math.abs(Math.floor(f/s.scrollSpeedPxPerMs)),b=Math.abs(Math.floor(p/s.scrollSpeedPxPerMs));let E=Math.max(g,b);s.minScrollDuration&&(E=Math.max(E,s.minScrollDuration));const L=r[s.easingFunction]||r["ease-in-out"];return Object(o.a)({window,duration:E,run:t=>{e.scrollLeft=l+f*L(t),e.scrollTop=d+p*L(t),1===t&&s.onAnimationComplete&&setTimeout(s.onAnimationComplete,0)}})};function s(e){return e===window?window.innerHeight:e.clientHeight}function l(){return void 0!==window.scrollY?window.scrollY:document.documentElement&&void 0!==document.documentElement.scrollTop?document.documentElement.scrollTop:0}function d(e){return e===window&&document.documentElement?document.documentElement.scrollHeight:e.scrollHeight}function u(e){return e===window?l():e.scrollTop}function m(){window&&window.scroll(0,0)}},TbX8:function(e,t,n){n.r(t),n.d(t,"BoardActivityReactions",(function(){return v}));var o=n("q1tI"),i=n.n(o),r=n("/MKj"),a=n("Ye/N"),c=n("r7px"),s=n("3gA6"),l=n("dXUN"),d=n("jCNM"),u=n("fArA"),m=n("mHb8"),C=n("U4JR"),h=n("dtw8"),f=n("joD6"),p=n("n6mq");function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const b=24,E=16;function L({items:e}){return i.a.createElement(p.c,{display:"flex",alignItems:"center",dangerouslySetInlineStyle:{__style:{flexDirection:"row-reverse"}}},[...e].reverse().map((e,t,n)=>{const{backgroundColor:o,iconColor:r}=l.a[e],a={border:"2px solid",borderColor:n.length>1?"#ffffff":"transparent",borderRadius:"100%",...t>0?{marginRight:-9}:{}};return i.a.createElement("div",{key:e,style:a},i.a.createElement(d.a,{reactionType:e,backgroundSize:b,backgroundColor:o,iconSize:E,iconColor:r}))}))}const w=e=>Object.entries(e).reduce((e,[t,n])=>({...e,[t]:String(n)}),{}),y=e=>{const{reactionsListIsShown:t,reactionByMe:n,reactionCounts:i,pinId:r}=e;return Object(o.useEffect)(()=>{const e=w(i);Object(C.a)(13,{view:265,element:11434,objectId:r,group_boards_reaction_my_reaction:n.toString(),group_boards_reaction_counts:JSON.stringify(e)})},[t]),null};class v extends i.a.PureComponent{constructor(...e){super(...e),g(this,"state",{showLikeListModal:!1}),g(this,"logTouchChipsPile",()=>{const{viewer:e,board:t,pinId:n,reactionCount:o,reactionCounts:i}=this.props,r=w(i);t&&Object(C.a)(102,{view:5,viewParameter:Object(m.a)(e,t),element:11433,objectId:n,group_boards_reaction_counts:JSON.stringify(r),group_boards_reaction_count:o.toString()})}),g(this,"handleTouchChipsPile",({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showLikeListModal:!0}),this.logTouchChipsPile()}),g(this,"hideLikeListModal",()=>this.setState({showLikeListModal:!1}))}render(){const{activityId:e,pinId:t,commentCount:n,reactionCount:r,reactionCounts:l,showReply:d,canShowComments:u,topReactions:m,reactionByMe:C}=this.props,{showLikeListModal:h}=this.state,f=m.length>0,g=d&&u&&n>0;return f||g?i.a.createElement(o.Fragment,null,i.a.createElement(p.c,{display:"flex",direction:"row",position:"relative",alignSelf:"start",alignItems:"center"},f&&i.a.createElement(p.Q,{shape:"rounded",onTouch:this.handleTouchChipsPile,fullWidth:!1},i.a.createElement(p.c,{display:"flex",direction:"row",alignItems:"center",marginEnd:g?5:0},i.a.createElement(p.c,{marginEnd:1},i.a.createElement(L,{items:m})),i.a.createElement(p.L,{size:"sm",color:"darkGray",leading:"short"},r))),g&&i.a.createElement(s.b,{to:`/pin/${t}/`},i.a.createElement(p.c,{display:"flex",direction:"row",alignItems:"center"},i.a.createElement(p.c,{marginEnd:1},i.a.createElement(p.n,{icon:"speech",color:"darkGray",size:19,accessibilityLabel:a.a._("Icon indicating this Pin has been commented on","Accessibility label for an icon indicating that the associated Pin has one or more comments")})),i.a.createElement(p.L,{size:"sm",color:"darkGray",leading:"short"},n)))),h&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{activityId:e,hideLikeListModal:this.hideLikeListModal,reactionCount:r}),i.a.createElement(y,{reactionsListIsShown:h,reactionByMe:C,reactionCounts:l,pinId:t}))):null}}g(v,"defaultProps",{showReply:!0});t.default=Object(u.compose)(Object(r.connect)((e,t)=>{const{activityItems:n={}}=e,{[t.activityId]:o}=n;if(o){const{reaction_counts:e={},comment_count:t=0,reaction_by_me:n=0}=o,i=Object.keys(e).filter(t=>e[t]>0).sort((t,n)=>e[n]-e[t]).map(e=>parseInt(e,10)).slice(0,3);return{activityItem:o,commentCount:t,reactionCount:Object.values(e).reduce((e,t)=>"number"==typeof t?e+t:e,0),reactionCounts:e,topReactions:i,reactionByMe:n}}return{activityItem:null,commentCount:0,reactionCount:0,reactionCounts:{},topReactions:[],reactionByMe:0}}),h.withRouter,f.a)(v)},dXUN:function(e,t,n){const o={1:{reactionType:1,backgroundColor:"#ffe0e0",iconColor:"#e60023"},6:{reactionType:6,backgroundColor:"#c6eade"},7:{reactionType:7,backgroundColor:"#dceef5"},8:{reactionType:8,backgroundColor:"#fee9b6",iconColor:"#b469eb"},9:{reactionType:9,backgroundColor:"#efe1fb",iconColor:"#f9b804"}};t.a=o},jCNM:function(e,t,n){var o=n("q1tI"),i=n.n(o);n("CKy5");const r=32,a=13,c=1,s=24,l="#8e8e8e",d=40,u="transparent",m=(e="none")=>({none:"none",spring:"reactions-spring 250ms ease-in-out forwards",pop:"reactions-pop 320ms cubic-bezier(0.17, 0.89, 0.6, 1.06)"})[e];t.a=e=>{const[t,n]=Object(o.useState)(!1),{hoverProps:C={},...h}=e,{reactionType:f=c,iconSize:p=s,iconColor:g=l,backgroundSize:b=d,backgroundColor:E=u,animation:L="none",onAnimationEnd:w=(()=>{}),onTouch:y=(e=>{})}={...h,...t?C:{}},v=e=>()=>{n(e)},M=((e,t,n)=>({width:e,height:e,backgroundColor:t,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",outline:"none",cursor:"pointer",animation:m(n)}))(b,E,L),T=v(!0),_=v(!1),S=(e=>t=>{const{charCode:n=0}=t;[r,a].includes(n)&&(t.preventDefault(),e(t))})(y),x=((e,t)=>({width:e,height:e,fill:t,pointerEvents:"none"}))(p,g),I=(e=>{const t={get 1(){return i.a.createElement("svg",{viewBox:"0 0 24 24"},i.a.createElement("g",{fillRule:"evenodd"},i.a.createElement("path",{d:"M22.17775,13.37483l-9.131,8.992a1.50152,1.50152,0,0,1-2.094,0l-9.131-8.992a6.19189,6.19189,0,0,1,0-8.773,6.29509,6.29509,0,0,1,8.834,0l1.344,1.344,1.344-1.344a6.29509,6.29509,0,0,1,8.834,0,6.19189,6.19189,0,0,1,0,8.773"})))},get 6(){return i.a.createElement("svg",{viewBox:"0 0 24 24"},i.a.createElement("g",{fillRule:"evenodd"},i.a.createElement("path",{d:"M17.7642,6.4536 L20.4632,5.1946 C20.7112,5.0786 20.8192,4.7836 20.7032,4.5356 C20.5872,4.2866 20.2922,4.1796 20.0432,4.2946 L17.3442,5.5536 C17.0962,5.6696 16.9892,5.9646 17.1042,6.2136 C17.1892,6.3936 17.3682,6.4996 17.5552,6.4996 C17.6252,6.4996 17.6962,6.4846 17.7642,6.4536 M15.1962,3.4056 L16.4542,0.7056 C16.5712,0.4566 16.4632,0.1616 16.2152,0.0456 C15.9672,-0.0684 15.6712,0.0376 15.5552,0.2866 L14.2962,2.9856 C14.1812,3.2346 14.2882,3.5296 14.5362,3.6456 C14.6042,3.6766 14.6762,3.6916 14.7462,3.6916 C14.9332,3.6916 15.1122,3.5856 15.1962,3.4056 M16.1502,5.0956 C16.0232,5.0956 15.8962,5.0476 15.7992,4.9506 C15.6052,4.7566 15.6052,4.4426 15.7992,4.2486 L18.6072,1.4406 C18.8012,1.2466 19.1152,1.2466 19.3092,1.4406 C19.5032,1.6346 19.5032,1.9486 19.3092,2.1426 L16.5012,4.9506 C16.4042,5.0476 16.2772,5.0956 16.1502,5.0956",fill:"#4990E2"}),i.a.createElement("path",{d:"M4.5488,5.5176 L17.9998,18.8966 C17.6938,19.9636 17.1248,21.1626 16.2918,22.0036 C13.6548,24.6656 9.3808,24.6656 6.7438,22.0036 L5.1528,20.3976 L2.5438,17.7706 L1.5428,16.7616 C0.9568,16.1696 0.9568,15.2106 1.5428,14.6196 C2.1288,14.0276 3.0788,14.0276 3.6648,14.6196 L1.0128,11.9426 C0.3288,11.2526 0.3288,10.1336 1.0128,9.4436 C1.6958,8.7536 2.8038,8.7536 3.4878,9.4436 L2.0728,8.0166 C1.3898,7.3266 1.3898,6.2076 2.0728,5.5176 C2.7568,4.8276 3.8648,4.8276 4.5488,5.5176",fill:"#833821"}),i.a.createElement("path",{d:"M23.5,8.7241 L23.5,17.0211 L23.491,17.0211 C23.541,18.8211 22.88,20.6371 21.497,22.0111 C18.826,24.6631 14.496,24.6631 11.825,22.0111 L10.213,20.4111 L6.57,16.7921 L5.557,15.7861 C4.963,15.1971 4.963,14.2421 5.557,13.6521 C6.15,13.0631 7.112,13.0631 7.706,13.6521 L5.02,10.9851 C4.327,10.2971 4.327,9.1821 5.02,8.4951 C5.712,7.8071 6.834,7.8071 7.527,8.4951 L6.094,7.0721 C5.401,6.3851 5.401,5.2701 6.094,4.5821 C6.786,3.8951 7.909,3.8951 8.602,4.5821 L10.034,6.0051 C9.342,5.3181 9.342,4.2031 10.034,3.5161 C10.727,2.8281 11.849,2.8281 12.542,3.5161 L16.241,7.1891 L17.02,7.9611 L19.954,10.8751 L19.954,8.7241 C19.954,7.7521 20.748,6.9641 21.727,6.9641 C22.706,6.9641 23.5,7.7521 23.5,8.7241",fill:"#F9B804"})))},get 7(){return i.a.createElement("svg",{viewBox:"0 0 24 24"},i.a.createElement("g",{fillRule:"evenodd"},i.a.createElement("path",{d:"M17.6143,13.6953 L17.6253,13.6953 C16.6433,14.6703 16.0313,16.0133 16.0053,17.5003 L16.0003,17.5003 L16.0003,20.0003 L8.0003,20.0003 L8.0003,17.5003 L7.9953,17.5003 C7.9723,16.0023 7.3523,14.6513 6.3613,13.6733 C4.9033,12.2233 4.0003,10.2173 4.0003,8.0003 C4.0003,3.5813 7.5813,0.0003 12.0003,0.0003 C16.4183,0.0003 20.0003,3.5813 20.0003,8.0003 C20.0003,10.2293 19.0863,12.2443 17.6143,13.6953",fill:"#FEDB86"}),i.a.createElement("path",{d:"M8,20 L16,20 L16,22.5 C16,23.329 15.329,24 14.5,24 L9.5,24 C8.671,24 8,23.329 8,22.5 L8,20 Z",fill:"#8E8E8D"}),i.a.createElement("path",{d:"M13,10 L13,20 L11,20 L11,10 C11,9.448 11.448,9 12,9 C12.552,9 13,9.448 13,10",fill:"#F9B804"}),i.a.createElement("path",{d:"M14.7671,9.0757 C14.6391,9.2067 14.5801,9.3947 14.6111,9.5787 L14.9811,11.8347 C15.0571,12.2987 14.5911,12.6527 14.1911,12.4337 L12.2531,11.3687 C12.0951,11.2817 11.9051,11.2817 11.7471,11.3687 L9.8091,12.4337 C9.4101,12.6527 8.9431,12.2987 9.0191,11.8347 L9.3901,9.5787 C9.4201,9.3947 9.3611,9.2067 9.2331,9.0757 L7.6651,7.4787 C7.3421,7.1497 7.5201,6.5767 7.9661,6.5087 L10.1331,6.1797 C10.3101,6.1527 10.4641,6.0367 10.5431,5.8687 L11.5121,3.8167 C11.7121,3.3947 12.2881,3.3947 12.4881,3.8167 L13.4571,5.8687 C13.5361,6.0367 13.6891,6.1527 13.8671,6.1797 L16.0341,6.5087 C16.4801,6.5767 16.6581,7.1497 16.3351,7.4787 L14.7671,9.0757 Z",fill:"#4990E2"})))},get 8(){return i.a.createElement("svg",{viewBox:"0 0 24 24"},i.a.createElement("g",{fillRule:"evenodd"},i.a.createElement("path",{d:"M12,19 C10.619,19 9.5,20.119 9.5,21.5 C9.5,22.881 10.619,24 12,24 C13.381,24 14.5,22.881 14.5,21.5 C14.5,20.119 13.381,19 12,19 M18.75,6.75 C18.75,9.121 17.47,11.39 15.489,12.529 C15.034,12.791 14.348,13.857 14.348,14.87 C14.348,16.167 13.297,17.217 12,17.217 C10.703,17.217 9.652,16.167 9.652,14.87 C9.652,12.32 11.122,9.624 13.147,8.459 C13.599,8.2 14.055,7.53 14.055,6.75 C14.055,5.617 13.133,4.696 12,4.696 C10.867,4.696 9.945,5.617 9.945,6.75 C9.945,8.047 8.895,9.098 7.598,9.098 C6.301,9.098 5.25,8.047 5.25,6.75 C5.25,3.028 8.277,0 12,0 C15.723,0 18.75,3.028 18.75,6.75"})))},get 9(){return i.a.createElement("svg",{viewBox:"0 0 24 24"},i.a.createElement("g",{fillRule:"evenodd"},i.a.createElement("path",{d:"M19,12.5 C20.104,12.5 21,13.396 21,14.5 C21,15.604 20.104,16.5 19,16.5 L11.504,16.5 C12.147,18.242 12.502,20.094 12.502,22 C12.502,23.104 11.605,24 10.502,24 C9.396,24 8.502,23.104 8.502,22 C8.502,18.966 7.357,16.093 5.286,13.884 C3.878,12.521 3,10.614 3,8.5 C3,4.358 6.357,1 10.5,1 L16.75,1 C17.717,1 18.5,1.784 18.5,2.75 C18.5,3.716 17.717,4.5 16.75,4.5 L19,4.5 C20.104,4.5 21,5.396 21,6.5 C21,7.604 20.104,8.5 19,8.5 C20.104,8.5 21,9.396 21,10.5 C21,11.604 20.104,12.5 19,12.5"})))}};return t[e]||t[c]})(f);return i.a.createElement("div",{role:"button",tabIndex:0,style:M,onMouseOver:T,onFocus:T,onMouseOut:_,onBlur:_,onKeyPress:S,onClick:y,onAnimationEnd:w},i.a.createElement("div",{style:x},I))}},kwau:function(e,t,n){var o=n("/MKj");t.a=Object(o.connect)(({viewer:e})=>({viewer:e}))(({children:e,viewer:t})=>e(t))},mHb8:function(e,t,n){n.d(t,"a",(function(){return i}));const o=(e,t)=>{const n="object"==typeof t.owner?t.owner.id:t.owner;return e.isAuth&&n===e.id},i=(e,t)=>o(e,t)?3069:3070},qmTT:function(e,t,n){var o=n("q1tI"),i=n.n(o),r=n("/MKj"),a=n("zFhk"),c=n("3gA6"),s=n("dXUN"),l=n("jCNM"),d=n("GsvW"),u=n("n6mq");var m=function({user:e}){const{reactionType:t,username:n}=e;return i.a.createElement(u.c,{alignItems:"center",direction:"row",display:"flex",margin:4},i.a.createElement(u.c,null,i.a.createElement(a.a,{user:e})),i.a.createElement(u.c,{flex:"grow",paddingX:3},i.a.createElement(c.b,{to:`/${n}/`},i.a.createElement(u.L,{truncate:!0,weight:"bold"},Object(d.e)(e)),i.a.createElement(u.L,{color:"gray",size:"xs",truncate:!0},n))),i.a.createElement(u.c,null,i.a.createElement(l.a,{backgroundColor:s.a[t].backgroundColor,iconColor:s.a[t].iconColor,reactionType:t})))},C=n("kwau"),h=n("Ye/N"),f=n("DzJC"),p=n.n(f),g=n("fArA"),b=n("zLLH"),E=n("N84b");function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return _}));const w=50,y=10;class v extends o.Component{constructor(...e){super(...e),L(this,"setRef",e=>{e&&!this.list&&(this.list=e.parentElement,this.list&&this.list.addEventListener("scroll",this.handleScroll))}),L(this,"fetchMore",()=>{const{feedResource:e}=this.props;e.isFetching||(e.isAtEnd?window.removeEventListener("scroll",this.handleScroll):e.fetchMore())}),L(this,"handleScroll",p()(()=>{const{feedResource:e}=this.props;if(e.isFetching||e.isAtEnd)return;const t=Object(E.a)(this.list);Object(E.c)(this.list)-Object(E.d)(this.list)-w<t&&this.fetchMore()},y))}componentWillUnmount(){this.list.removeEventListener("scroll",this.handleScroll)}render(){const{feedResource:{data:e,isFetching:t},users:n}=this.props;if(e&&e.length>0&&!t){const t=e.map(e=>{const{user:t,reaction_type:o}=e;return{...t,...n[t.id],reactionType:o}});return i.a.createElement("div",{style:{maxHeight:"400px"},ref:this.setRef},i.a.createElement(C.a,null,e=>t.map(e=>i.a.createElement(m,{key:e.id,user:e}))))}return i.a.createElement("div",{className:"loadingSpinner"},i.a.createElement(u.H,{accessibilityLabel:h.a._("Loading user list","Accessibility lable for user list spinner"),show:!0}))}}const M=e=>({users:e.users||{}}),T=Object(g.compose)(Object(r.connect)(M,()=>({})),Object(b.c)({name:"BoardActivityReactionFeedResource",key:"feedResource",options:e=>({activityId:e.activityId,activityType:e.activityType})},{allowStale:!1}))(v),_=Object(g.compose)(Object(r.connect)(M,()=>({})),Object(b.c)({name:"BoardActivityCommentReactionFeedResource",key:"feedResource",options:e=>({activityId:e.activityId,activityType:e.activityType})}))(v)},r7px:function(e,t,n){n.d(t,"a",(function(){return d}));var o=n("q1tI"),i=n.n(o),r=n("xdpg"),a=n("Ye/N"),c=n("TiQD"),s=n("i9se"),l=n("qmTT");function d({activityId:e,hideLikeListModal:t,reactionCount:n=0}){const o=r.i(a.a.ngettext("{{headingCount}} Reaction","{{headingCount}} Reactions",n),{headingCount:n.toString()});return i.a.createElement(c.b,{accessibilityCloseLabel:a.a._("close","accessible label for button to close modal"),accessibilityModalLabel:a.a._("Users who have liked this.","Label for a modal showing a list of users who have liked a Board Activity Post or Comment"),heading:o,onDismiss:t,size:"sm"},i.a.createElement(l.b,{activityId:e,activityType:s.a.BOARD_ACTIVITY_COMMENT}))}},zFhk:function(e,t,n){var o=n("q1tI"),i=n.n(o),r=n("3gA6"),a=n("n6mq");const c={sm:24,md:40};t.a=function({user:e,size:t="md",hasOutline:n}){const{first_name:o,image_medium_url:s,username:l}=e;return i.a.createElement(r.b,{stopPropagation:!0,to:`/${l}/`},i.a.createElement(a.c,{position:"relative",width:c[t],height:c[t]},i.a.createElement(a.a,{size:t,src:s,name:o||l||"",outline:n})))}}}]);
//# sourceMappingURL=pjs-BoardActivityPinRepReactionsCommon-1d740d52fe6f28d4b36c.mjs.map
