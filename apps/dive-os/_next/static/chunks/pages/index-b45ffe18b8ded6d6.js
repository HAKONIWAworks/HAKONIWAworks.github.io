(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(5972)}])},5972:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return M}});var n=l(5893),a=l(9008),s=function(e){var r=e.children;return(0,n.jsx)("div",{className:"flex flex-col min-h-screen bg-gray-100",children:(0,n.jsx)("div",{className:"relative flex flex-col m-auto overflow-hidden border-8 border-gray-400 rounded-2xl",children:r})})},i=l(3815),t=l(9583),o=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],c=function(){var e=(0,i.o)(),r=e.currentTime,l=(e.diverDown,e.money);return(0,n.jsxs)("div",{className:"flex w-full h-12 px-8 bg-gray-200 border-b-2 border-gray-500",children:[(0,n.jsxs)("p",{className:"p-2 border-2 border-transparent",children:[(0,n.jsx)("b",{children:"DiveOS"})," ",(0,n.jsx)("i",{children:"ver G"})," | ",o[Math.floor(r/1440)%7]," ",(Math.floor(r/60)%24).toString().padStart(2,"0"),":",(r%60).toString().padStart(2,"0")]}),(0,n.jsxs)("p",{className:"flex p-2 ml-auto border-2 border-transparent",children:[l,(0,n.jsx)("span",{className:"p-1",children:(0,n.jsx)(t.vAr,{})})]})]})},d=function(e){var r=e.title,l=e.children;return(0,n.jsxs)("div",{className:"relative flex flex-col w-full h-full overflow-hidden border-2 border-gray-400 rounded-lg bg-gray-50",children:[(0,n.jsx)("div",{className:"relative w-full p-2 bg-gray-200 border-b-2 border-b-gray-400",children:r}),(0,n.jsx)("div",{className:"relative flex-grow",children:l})]})},u=l(619);function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var l=0,n=new Array(r);l<r;l++)n[l]=e[l];return n}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,s=[],i=!0,t=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(s.push(n.value),!r||s.length!==r);i=!0);}catch(o){t=!0,a=o}finally{try{i||null==l.return||l.return()}finally{if(t)throw a}}return s}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return x(e,r);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(l);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return x(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e){var r=e.onClick,l=e.text,a=e.minutes,s=e.disabled,o=(0,i.o)().actionInProgress,c=f((0,u.Z)("/hover.wav",{volume:.4}),1)[0],d=f((0,u.Z)("/click.wav"),1)[0];return a>0?(0,n.jsxs)("div",{className:"flex w-full transition-all group",children:[(0,n.jsx)("div",{onClick:1==o||1==s?function(){}:function(e){d(),r(e)},onMouseEnter:function(){1==o||1==s||c()},className:"flex-grow p-2 transition-all border-2 rounded-l-lg "+(1==o||1==s?"border-gray-300  bg-gray-100":"border-gray-300 cursor-pointer bg-cyan-100 group-hover:bg-cyan-200 group-hover:border-gray-400"),children:l}),(0,n.jsxs)("div",{onClick:1==o||1==s?function(){}:function(e){d(),r(e)},onMouseEnter:function(){1==o||1==s||c()},className:"flex p-2 transition-all border-2 border-l-0 rounded-r-lg "+(1==o||1==s?"border-gray-300  bg-gray-100":"border-gray-300 cursor-pointer bg-gray-100 group-hover:bg-gray-200 group-hover:border-gray-400"),children:[a,(0,n.jsx)(t.fSQ,{className:"mt-1 ml-1"})]})]}):(0,n.jsx)("div",{onClick:1==o||1==s?function(){}:function(e){d(),r(e)},className:"flex-grow p-2 transition-all border-2 rounded-lg "+(1==o||1==s?"border-gray-300  bg-gray-100":"border-gray-300 cursor-pointer bg-cyan-100 group-hover:bg-cyan-200 group-hover:border-gray-400"),children:l})};m.defaultProps={disabled:!1};var g=m,h=function(e){var r=e.onClick,l=e.text,a=e.minutes,s=e.disabled,t=(0,i.o)().diverDown;return(0,n.jsx)(g,{onClick:r,text:l,minutes:a,disabled:t||s})};h.defaultProps={disabled:!1};var p=h,v=function(){for(var e=(0,i.o)(),r=e.shipXCoord,l=e.shipYCoord,a=e.currentSector,s=a.grid.length,o=a.grid[0].length,c=[],d=0;d<s;d++){for(var u=[],x=0;x<o;x++){var f=a.grid[d][x];u.push((0,n.jsxs)("div",{className:"border border-dashed border-gray-600 w-1/6 flex p-0.5 "+(0==d?"border-t-0 ":"")+(d==s-1?"border-b-0 ":"")+(0==x?"border-l-0 ":"")+(x==o-1?"border-r-0 ":""),children:[(0,n.jsx)("div",{className:"flex gap-0.5 mt-auto",children:d==l&&x==r?(0,n.jsx)("div",{className:"p-0.5 border border-gray-600 rounded-full bg-gray-50",children:(0,n.jsx)(t.SsO,{className:" fill-orange-400 "})}):null}),(0,n.jsxs)("div",{className:"flex gap-0.5 mt-auto ml-auto",children:[f.shops.map((function(e,r){return(0,n.jsx)("div",{className:"p-0.5 border border-gray-600 rounded-full bg-gray-50",children:(0,n.jsx)(t.MZI,{className:" fill-orange-400"})},r+",shop")})),f.diveSites.map((function(e,r){return e.revealed?(0,n.jsx)("div",{className:"p-0.5 border border-gray-600 rounded-full bg-gray-50",children:(0,n.jsx)(t.wQ2,{className:" fill-orange-400 "})},r+", site"):(0,n.jsx)("div",{className:"p-0.5 border border-gray-600 rounded-full bg-gray-50",children:(0,n.jsx)(t.g_g,{className:" fill-orange-400 "})},r+", site")}))]})]},x+","+d))}c.push((0,n.jsx)("div",{className:"flex h-1/6",children:u},d))}return(0,n.jsxs)("div",{className:"flex flex-col w-full h-full relative",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"594",width:"736",preserveAspectRatio:"none",className:"absolute z-0 bg-cyan-800",children:[(0,n.jsx)("path",{d:"M -10 -10 L -10 600 C 25 638 83 639 169 601 S 266 616 356 590 S 491 586 563 529 S 659 525 688 420 S 768 390 801 291 S 803 232 814 159 S 847 126 837 76 S 872 36 800 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-cyan-700",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 550 C 20 563 69 519 152 528 S 203.3333 493.3333 240 492 S 339 451 372 471 S 467 441 533 427 S 607 343 642 332 S 668 233 703 208 S 715.6667 127 726 84 S 716 29 700 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-cyan-600",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 450 C 49 432 89 424 151 414 S 222 432 266 420 S 338 430 382 419 S 476 393 519 356 S 619 328 631 271 S 636 217 633 173 S 670 119 663 61 S 633 50 600 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-cyan-500",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 350 C 54 384 82 360 128 360 S 189 385 236 340 S 282 300 341 294 S 418 272 451 265 S 497 267 522 222 S 578 186 586 146 S 557 104 550 58 S 515 36 500 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-cyan-400",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 300 C 54 313 73 353 116 348 S 213 361 224 328 S 283 291 277 258 S 329 207 333 188 S 419 163 424 144 S 460 114 462 92 S 475 55 480 42 S 446 29 450 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-cyan-300",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 275 C 55 275 87 305 119 303 S 172 295 188 268 S 258 248 269 234 S 313 190 319 172 S 372 170 389 130 S 430 107 430 93 S 407 79 397 54 S 395 1 350 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-yellow-200",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -10 250 C 65 251 59 266 111 272 S 143 255 170 241 S 213 238 225 225 S 273 206 273 182 S 308 161 312 133 S 343 125 348 95 S 354 69 329 43 S 334 33 300 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-yellow-100",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -8 165 C 62 100 48 185 96 147 S 117 190 151 152 S 193 183 200 134 S 213 113 250 100 S 281 117 296 98 S 259 71 255 42 S 193 28 200 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-green-100",strokeLinejoin:"round",strokeLinecap:"round"}),(0,n.jsx)("path",{d:"M -10 -10 L -9 75 C 74 34 54 128 89 92 S 132 159 145 130 S 189 157 179 103 S 198 107 206 83 S 266 109 252 77 S 213 71 204 35 S 192 26 130 -10 L -10 -10",className:"stroke-0.5 stroke-gray-400 fill-green-200",strokeLinejoin:"round",strokeLinecap:"round"})]}),(0,n.jsx)("div",{className:"relative h-full z-100",children:c})]})},b=function(){var e=(0,i.o)(),r=e.moveShip,l=e.sonarScan,a=e.startDive,s=e.openShop,t=e.currentSector,o=e.shipXCoord,c=e.shipYCoord;return(0,n.jsxs)("div",{className:"grid flex-grow grid-cols-5 gap-4 p-4 grid-col",children:[(0,n.jsx)("div",{className:"col-span-4 ",children:(0,n.jsx)(d,{title:t.name,children:(0,n.jsx)(v,{})})}),(0,n.jsx)(d,{title:"Actions",children:(0,n.jsxs)("div",{className:"flex flex-col w-full h-full gap-2 p-2",children:[(0,n.jsx)(p,{text:"Move N",onClick:function(){r(0,-1)},disabled:0==c,minutes:60}),(0,n.jsx)(p,{text:"Move E",onClick:function(){r(1,0)},disabled:5==o,minutes:60}),(0,n.jsx)(p,{text:"Move S",onClick:function(){r(0,1)},disabled:5==c,minutes:60}),(0,n.jsx)(p,{text:"Move W",onClick:function(){r(-1,0)},disabled:0==o,minutes:60}),(0,n.jsx)("hr",{className:"border-2 border-gray-300 rounded-xl"}),(0,n.jsx)(p,{onClick:function(){l()},text:"Sonar",minutes:60}),t.grid[c][o].diveSites.map((function(e,r){return e.revealed?(0,n.jsx)(p,{onClick:function(){a(e)},text:"Dive: "+e.name,minutes:60},r):null})),t.grid[c][o].shops.map((function(e,r){return(0,n.jsx)(p,{onClick:function(){s(e)},text:"Shop: "+e.name,minutes:30},r)}))]})})]})};function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var l=0,n=new Array(r);l<r;l++)n[l]=e[l];return n}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,s=[],i=!0,t=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(s.push(n.value),!r||s.length!==r);i=!0);}catch(o){t=!0,a=o}finally{try{i||null==l.return||l.return()}finally{if(t)throw a}}return s}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return j(e,r);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(l);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var r=e.action,l=y((0,u.Z)("/hover.wav",{volume:.4}),1)[0],a=y((0,u.Z)("/click.wav"),1)[0],s=(0,i.o)(),t=s.actionInProgress,o=s.handleDiveSitePromptAction,c=s.diverEquipment,d=r.requirements.reduce((function(e,r){return e&&r.diverFulfillsRequirement(c)}),!t);return(0,n.jsxs)("div",{onClick:d?function(){a(),o(r)}:function(){},onMouseEnter:function(){d&&l()},className:" gap-4 transition-all border-2  overflow-hidden rounded-tl-lg text-xl h-48 flex flex-col group "+(0==d?"border-gray-400  bg-gray-100":"border-gray-400 cursor-pointer bg-white hover:bg-cyan-200 hover:border-gray-400"),children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("div",{className:"p-2",children:r.actionText})}),(0,n.jsx)("div",{className:"flex flex-col gap-1 mt-auto mb-2",children:r.requirements.map((function(e,r){return(0,n.jsxs)("div",{className:"flex p-1 pr-10 ml-8 -mr-8 text-sm border-2 border-gray-400 rounded-full "+(e.diverFulfillsRequirement(c)?"bg-cyan-100":"bg-red-300"),children:[(0,n.jsx)("div",{className:"w-6 h-6 pb-2 text-center border-2 border-gray-400 rounded-full bg-cyan-50",children:e.getRequirementIcon()}),(0,n.jsx)("div",{className:"pt-0.5 ml-auto",children:e.getRequirementName()})]},r)}))})]})},N=l(5675),k=function(){var e=(0,i.o)(),r=e.diverEquipment,l=e.currentDiveSite,a=e.currentWeight,s=e.maximumWeight,o=e.remainingAir,c=(e.maximumAir,e.availableActions),u=e.diveSiteLog,x=e.ascend,f=e.diveAscendTime;return null==l||void 0==l?null:(0,n.jsxs)("div",{className:"flex flex-col flex-grow gap-4 p-4",children:[(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("div",{className:"flex-grow",children:(0,n.jsx)(d,{title:"Diver",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex w-40 bg-gray-300 border-r-2 aspect-square border-r-gray-400",children:(0,n.jsx)(N.default,{alt:"Diver Portrait Sketch",src:"/diver.png"})}),(0,n.jsx)("div",{className:"flex flex-col flex-grow gap-2 p-2",children:(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.knife?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Knife"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.flashlight?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Flashlight"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.glowsticks?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Glowsticks"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.key?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Key"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.bait?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Bait"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.flippers?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Flippers"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.sampleContainer?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Sample Container"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all "+(r.prybar?"bg-cyan-100":"bg-gray-100"),children:(0,n.jsx)("div",{className:"mx-auto",children:"Prybar"})}),(0,n.jsx)("div",{className:"flex p-1 px-4 border-2 border-gray-400 rounded-full transition-all bg-gray-100",children:(0,n.jsxs)("div",{className:"mx-auto",children:["SalvageKg: ",a,"/",s]})})]})})]})})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(d,{title:"Air Reserve",children:(0,n.jsxs)("div",{className:"flex flex-col h-full gap-2",children:[(0,n.jsxs)("div",{className:"flex flex-grow p-2",children:[(0,n.jsx)("span",{className:"mt-auto text-5xl",children:o}),(0,n.jsx)("span",{className:"ml-0.5 mr-1 mb-0.5 text-3xl mt-auto",children:(0,n.jsx)(t.qyc,{})}),(0,n.jsx)("span",{className:"mt-auto text-lg",children:"Remaining"})]}),(0,n.jsxs)("div",{className:"p-2 pl-4 pr-10 mb-4 ml-8 -mr-8 border-2 border-gray-400 rounded-full bg-cyan-100",children:[(0,n.jsxs)("p",{className:"flex",children:[f," ",(0,n.jsx)(t.qyc,{className:"mt-1 mr-1 ml-0.5"})," "]})," ",(0,n.jsx)("p",{children:"since last safe ascent"})]})]})})})]}),(0,n.jsxs)("div",{className:"flex flex-grow gap-4",children:[(0,n.jsx)("div",{className:"w-48",children:(0,n.jsx)(d,{title:"Depth Gauge",children:(0,n.jsx)("div",{className:"flex flex-col justify-end h-full p-2 ",children:(0,n.jsx)("div",{className:"mt-auto",children:(0,n.jsx)(g,{onClick:function(){x()},text:"Ascend",minutes:f})})})})}),(0,n.jsxs)("div",{className:"flex flex-col flex-grow gap-4",children:[(0,n.jsx)("div",{className:"flex-grow",children:(0,n.jsx)(d,{title:"Site Log: "+l.name,children:(0,n.jsx)("div",{className:"p-2",children:u.map((function(e,r){return(0,n.jsx)("p",{children:e},r)}))})})}),(0,n.jsxs)("div",{className:"grid h-48 grid-cols-4 gap-4",children:[Array(c?4-c.length:4).fill((0,n.jsx)("div",{className:""})).map((function(e,r){return(0,n.jsx)("div",{},r)})),c?c.map((function(e,r){return(0,n.jsx)(S,{action:e},r)})):null]})]})]})]})},w=function(){var e=(0,i.o)(),r=e.diverSalvage,l=e.endDive;return(0,n.jsx)("div",{className:"flex flex-col flex-grow gap-4 p-4",children:(0,n.jsx)(d,{title:"Dive Results",children:(0,n.jsxs)("div",{className:"flex flex-col h-full gap-2 p-2",children:[(0,n.jsx)("p",{children:"Salvage"}),(0,n.jsx)("ul",{className:"list-disc list-inside",children:r.map((function(e,r){return(0,n.jsxs)("li",{className:"",children:[e.name," (",e.value,"z): ",e.description]},r)}))}),(0,n.jsx)("div",{className:"mt-auto",children:(0,n.jsx)(g,{onClick:function(){l()},text:"Continue",minutes:0})})]})})})};function C(e,r,l){return r in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l,e}function L(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{},n=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),n.forEach((function(r){C(e,r,l[r])}))}return e}var A=function(){var e={knife:!1,flashlight:!1,key:!1,bait:!1,glowsticks:!1,flippers:!1,sampleContainer:!1,prybar:!1},r=(0,i.o)(),l=r.purchaseDiverEquipment,a=r.sellSalvage,s=r.shipSalvage,t=r.closeShop,o=r.money;return(0,n.jsxs)("div",{className:"flex flex-col flex-grow gap-4 p-4 ",children:[(0,n.jsxs)("div",{className:"flex flex-grow gap-4",children:[(0,n.jsx)(d,{title:"Buy",children:(0,n.jsxs)("div",{className:"flex flex-col w-full h-full gap-2 p-2",children:[(0,n.jsx)(g,{onClick:function(){l(L({},e,{knife:!0}))},text:"Buy Knife (20$)",minutes:5,disabled:o<20}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{flippers:!0}))},text:"Buy Flippers (25$)",minutes:5,disabled:o<25}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{flashlight:!0}))},text:"Buy Flippers (10$)",minutes:5,disabled:o<10}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{sampleContainer:!0}))},text:"Buy Sample Container (20$)",minutes:5,disabled:o<20}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{glowsticks:!0}))},text:"Buy Glowsticks (5$)",minutes:5,disabled:o<5}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{bait:!0}))},text:"Buy Bait (5$)",minutes:5,disabled:o<5}),(0,n.jsx)(g,{onClick:function(){l(L({},e,{prybar:!0}))},text:"Buy Prybar (15$)",minutes:5,disabled:o<15})]})}),(0,n.jsx)(d,{title:"Sell",children:(0,n.jsx)("div",{className:"flex flex-col w-full h-full gap-2 p-2",children:s.map((function(e,r){return(0,n.jsx)(g,{onClick:function(){a(r)},text:"Sell "+e.name+" ("+e.value+"$)",minutes:5},r)}))})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(d,{title:"Options",children:(0,n.jsx)("div",{className:"flex w-64 gap-2 p-2 ml-auto ",children:(0,n.jsx)(g,{onClick:function(){t()},text:"Exit Shop",minutes:5})})})})]})},M=function(){var e=(0,i.o)();return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:"DiveOS"})}),(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"z-0 w-[960px] h-[720px] bg-cyan-100 flex flex-col",children:[(0,n.jsx)(c,{}),"Map"==e.currentView?(0,n.jsx)(b,{}):null,"Dive Site"==e.currentView?(0,n.jsx)(k,{}):null,"Dive Results"==e.currentView?(0,n.jsx)(w,{}):null,"Shop"==e.currentView?(0,n.jsx)(A,{}):null]})})]})}}},function(e){e.O(0,[445,834,633,815,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);