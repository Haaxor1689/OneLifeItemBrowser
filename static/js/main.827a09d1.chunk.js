(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,r){e.exports=r(50)},36:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(19),o=(r(36),r(7)),c=r.n(o),s=r(12),i=r(11),u=r(4),l=r(9),p=r(8),d=r(10),g=r(53),h=r(51),m=r(52),f=r(15),b=r(14),E=r(16),v=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).getClass=function(e){return"trait-icon trait-icon-".concat(e?"active":"inactive")},r.render=function(){return b.b.add(E.a,E.c,E.b,E.d),n.createElement("tr",{onClick:function(){return r.props.onSelected(r.props.objectRecord)}},n.createElement("th",{scope:"row"},r.props.objectRecord.id),n.createElement("td",null,r.props.objectRecord.description),n.createElement("td",null,r.props.objectRecord.containable?String(r.props.objectRecord.containSize):"\u221e"),n.createElement("td",null,n.createElement(f.a,{icon:"apple-alt",title:"Edible",size:"2x",className:r.getClass(r.props.objectRecord.foodValue>0)}),n.createElement(f.a,{icon:"tshirt",title:"Equipable",size:"2x",className:r.getClass("n"!==r.props.objectRecord.clothing)}),n.createElement(f.a,{icon:"horse",title:"Rideable",size:"2x",className:r.getClass(r.props.objectRecord.rideable)}),n.createElement(f.a,{icon:"weight-hanging",title:"Permanent",size:"2x",className:r.getClass(r.props.objectRecord.permanent)})))},r}return Object(d.a)(t,e),t}(n.Component),j=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return n.createElement(h.a,null,n.createElement(m.a,{striped:!0,dark:!0,hover:!0},n.createElement("thead",{className:"thead-dark"},n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,"Name"),n.createElement("th",null,"Size"),n.createElement("th",null,"Traits"))),n.createElement("tbody",null,Object.values(r.props.objectRecord).sort(function(e,t){return e.id-t.id}).map(function(e){return n.createElement(v,{key:e.id,onSelected:r.props.onObjectSelected,objectRecord:e})}))))},r}return Object(d.a)(t,e),t}(n.Component),O=r(54),w=r(59),P=r(55),y=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).bgColor=function(){return r.props.progress.percent<0?"danger":"info"},r.getProgress=function(){return 100*(r.props.progress.percent<0?1:r.props.progress.percent)},r.render=function(){return n.createElement(g.a,null,n.createElement(h.a,null,n.createElement(O.a,{className:"data-loading"},n.createElement(w.a,{color:r.bgColor()},n.createElement("p",null,r.props.progress.message),n.createElement(P.a,{value:r.getProgress(),color:r.bgColor(),striped:!0,animated:!0})))))},r}return Object(d.a)(t,e),t}(n.Component),R=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).onSearchSubmit=function(e){e.preventDefault();var t=new FormData(e.target);r.props.onSearch(t.get("filter")),r.setState(function(e){return Object(s.a)({},e,{filter:t.get("filter")})})},r.render=function(){return n.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top"},n.createElement("div",{className:"container"},n.createElement("a",{className:"navbar-brand h1 text-light",href:"#"},"One life item browser"),n.createElement("form",{className:"form-inline d-none d-sm-block",onSubmit:r.onSearchSubmit},n.createElement("input",{className:"form-control mr-sm-2",type:"search",name:"filter",placeholder:"Search","aria-label":"Search"}),n.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},r}return Object(d.a)(t,e),t}(n.Component),C=r(56),D=r(57),T=r(58),x=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).isFirstPage=function(){return 0===r.props.currentPage},r.isSecondPage=function(){return 1===r.props.currentPage},r.isLastPage=function(){return r.props.currentPage===r.props.pageCount-1},r.isSecondLastPage=function(){return r.props.currentPage===r.props.pageCount-2},r.getMiddleNumber=function(){return r.isFirstPage()||r.isSecondPage()?2:r.isLastPage()||r.isSecondLastPage()?r.props.pageCount-3:r.props.currentPage},r.renderPage=function(e){return e<r.props.pageCount?n.createElement(C.a,{active:e===r.props.currentPage},n.createElement(D.a,{onClick:function(){return r.props.changePage(e)}},e+1)):null},r.renderDots=function(){return n.createElement(C.a,{disabled:!0},n.createElement(D.a,null,"..."))},r.render=function(){return n.createElement(h.a,{className:"justify-content-center"},n.createElement(O.a,{xs:"auto"},n.createElement(T.a,{className:"page-control"},n.createElement(C.a,{disabled:r.isFirstPage()},n.createElement(D.a,{previous:!0,onClick:function(){return r.props.changePage(r.props.currentPage-1)}})),r.props.currentPage>2&&r.renderPage(0),r.props.currentPage>3&&r.renderPage(1),r.props.currentPage>3&&r.renderDots(),r.renderPage(r.getMiddleNumber()-2),r.renderPage(r.getMiddleNumber()-1),r.renderPage(r.getMiddleNumber()),r.renderPage(r.getMiddleNumber()+1),r.renderPage(r.getMiddleNumber()+2),r.props.currentPage<r.props.pageCount-4&&r.renderDots(),r.props.currentPage<r.props.pageCount-4&&r.renderPage(r.props.pageCount-2),r.props.currentPage<r.props.pageCount-3&&r.renderPage(r.props.pageCount-1),n.createElement(C.a,{disabled:r.isLastPage()},n.createElement(D.a,{next:!0,onClick:function(){return r.props.changePage(r.props.currentPage+1)}})))))},r}return Object(d.a)(t,e),t}(n.Component),S=r(13),k=r.n(S),I=function e(){Object(u.a)(this,e)};I.baseUrl="https://onelifeitembrowser.herokuapp.com/api/",I.getRecords=Object(i.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://raw.githubusercontent.com/Haaxor1689/OneLifeItemBrowser/master/data/records.json");case 2:return t=e.sent,e.abrupt("return",JSON.parse(t));case 4:case"end":return e.stop()}},e,this)})),I.updateRecords=Object(i.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(I.baseUrl+"records");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));var L=function e(){Object(u.a)(this,e)};L.initialize=function(){var e=Object(i.a)(c.a.mark(function e(t,r){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({percent:1,message:"Fetching records..."}),e.prev=1,e.next=4,I.updateRecords();case 4:n=e.sent,e.t0=n.outdated,e.next=!1===e.t0?8:!0===e.t0?12:15;break;case 8:return t(void 0),e.next=11,I.getRecords();case 11:return e.abrupt("return",e.sent);case 12:return t(n.progress),L.waitForUpdate(t,r),e.abrupt("return",{});case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e.catch(1),t({percent:-1,message:"Unexpected error occured. Please refresh the page."}),e.abrupt("return",{});case 21:return e.abrupt("return",{});case 22:case"end":return e.stop()}},e,this,[[1,17]])}));return function(t,r){return e.apply(this,arguments)}}(),L.sleep=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L.waitForUpdate=function(){var e=Object(i.a)(c.a.mark(function e(t,r){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0;case 1:return e.next=3,L.sleep(3e3);case 3:return e.next=5,I.updateRecords();case 5:n=e.sent,e.t0=n.outdated,e.next=!1===e.t0?9:!0===e.t0?16:17;break;case 9:return t(void 0),e.t1=r,e.next=13,I.getRecords();case 13:return e.t2=e.sent,(0,e.t1)(e.t2),e.abrupt("return");case 16:t(n.progress);case 17:e.next=1;break;case 18:e.next=23;break;case 20:e.prev=20,e.t3=e.catch(0),t({percent:-1,message:"Unexpected error occured. Please refresh the page."});case 23:case"end":return e.stop()}},e,this,[[0,20]])}));return function(t,r){return e.apply(this,arguments)}}();var N,M,_=r(29),G=r(60),A=r(30),F=r.n(A),H=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return n.createElement("div",null,n.createElement("span",{className:"font-weight-bold key-str"},r.props.keyStr,":"),n.createElement("span",null,JSON.stringify(r.props.value)))},r}return Object(d.a)(t,e),t}(n.Component);!function(e){e[e.NO_DATA=0]="NO_DATA",e[e.INDEXED=1]="INDEXED",e[e.RGB=2]="RGB",e[e.GREY=3]="GREY",e[e.RLE_INDEXED=9]="RLE_INDEXED",e[e.RLE_RGB=10]="RLE_RGB",e[e.RLE_GREY=11]="RLE_GREY"}(N||(N={})),function(e){e[e.BOTTOM_LEFT=0]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=1]="BOTTOM_RIGHT",e[e.TOP_LEFT=2]="TOP_LEFT",e[e.TOP_RIGHT=3]="TOP_RIGHT",e[e.SHIFT=4]="SHIFT",e[e.MASK=48]="MASK"}(M||(M={}));var B=function e(){var t=this;Object(u.a)(this,e),this.header=void 0,this.palette=void 0,this.imageData=void 0,this.checkHeader=function(e){if(e.imageType===N.NO_DATA)throw new Error("Targa::checkHeader() - No data");if(e.hasColorMap){if(e.colorMapLength>256||24!==e.colorMapDepth||1!==e.colorMapType)throw new Error("Targa::checkHeader() - Invalid colormap for indexed type")}else if(e.colorMapType)throw new Error("Targa::checkHeader() - Why does the image contain a palette ?");if(e.width<=0||e.height<=0)throw new Error("Targa::checkHeader() - Invalid image size");if(8!==e.pixelDepth&&16!==e.pixelDepth&&24!==e.pixelDepth&&32!==e.pixelDepth)throw new Error('Targa::checkHeader() - Invalid pixel size "'+e.pixelDepth+'"')},this.decodeRLE=function(e,t,r,n){var a,o,c,s,i,u;for(u=new Uint8Array(n),i=new Uint8Array(r),a=0;a<n;)if(c=1+(127&(o=e[t++])),128&o){for(s=0;s<r;++s)i[s]=e[t++];for(s=0;s<c;++s)u.set(i,a),a+=r}else for(c*=r,s=0;s<c;++s)u[a++]=e[t++];return u},this.getImageData8bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d,g;for(p=0,g=a;g!==c;g+=o)for(d=s;d!==u;d+=i,p++)l=t[p],e[4*(d+n*g)+3]=255,e[4*(d+n*g)+2]=r[3*l+0],e[4*(d+n*g)+1]=r[3*l+1],e[4*(d+n*g)+0]=r[3*l+2];return e},this.getImageData16bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d,g;for(p=0,g=a;g!==c;g+=o)for(d=s;d!==u;d+=i,p+=2)l=t[p+0]|t[p+1]<<8,e[4*(d+n*g)+0]=(31744&l)>>7,e[4*(d+n*g)+1]=(992&l)>>2,e[4*(d+n*g)+2]=(31&l)>>3,e[4*(d+n*g)+3]=32768&l?0:255;return e},this.getImageData24bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d;for(l=0,d=a;d!==c;d+=o)for(p=s;p!==u;p+=i,l+=3)e[4*(p+n*d)+3]=255,e[4*(p+n*d)+2]=t[l+0],e[4*(p+n*d)+1]=t[l+1],e[4*(p+n*d)+0]=t[l+2];return e},this.getImageData32bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d;for(l=0,d=a;d!==c;d+=o)for(p=s;p!==u;p+=i,l+=4)e[4*(p+n*d)+2]=t[l+0],e[4*(p+n*d)+1]=t[l+1],e[4*(p+n*d)+0]=t[l+2],e[4*(p+n*d)+3]=t[l+3];return e},this.getImageDataGrey8bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d,g;for(p=0,g=a;g!==c;g+=o)for(d=s;d!==u;d+=i,p++)l=t[p],e[4*(d+n*g)+0]=l,e[4*(d+n*g)+1]=l,e[4*(d+n*g)+2]=l,e[4*(d+n*g)+3]=255;return e},this.getImageDataGrey16bits=function(e,t,r,n,a,o,c,s,i,u){var l,p,d;for(l=0,d=a;d!==c;d+=o)for(p=s;p!==u;p+=i,l+=2)e[4*(p+n*d)+0]=t[l+0],e[4*(p+n*d)+1]=t[l+0],e[4*(p+n*d)+2]=t[l+0],e[4*(p+n*d)+3]=t[l+1];return e},this.open=function(e,r){var n=t,a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer",a.onload=function(){200===this.status&&(n.load(new Uint8Array(a.response)),r&&r.call(n))},a.send(null)},this.load=function(e){var r=0;if(e.length<18)throw new Error("Targa::load() - Not enough data to contain header");if(t.header={idLength:e[r++],colorMapType:e[r++],imageType:e[r++],colorMapIndex:e[r++]|e[r++]<<8,colorMapLength:e[r++]|e[r++]<<8,colorMapDepth:e[r++],offsetX:e[r++]|e[r++]<<8,offsetY:e[r++]|e[r++]<<8,width:e[r++]|e[r++]<<8,height:e[r++]|e[r++]<<8,pixelDepth:e[r++],flags:e[r++]},t.header.hasEncoding=t.header.imageType===N.RLE_INDEXED||t.header.imageType===N.RLE_RGB||t.header.imageType===N.RLE_GREY,t.header.hasColorMap=t.header.imageType===N.RLE_INDEXED||t.header.imageType===N.INDEXED,t.header.isGreyColor=t.header.imageType===N.RLE_GREY||t.header.imageType===N.GREY,t.checkHeader(t.header),(r+=t.header.idLength)>=e.length)throw new Error("Targa::load() - No data");if(t.header.hasColorMap){var n=t.header.colorMapLength*(t.header.colorMapDepth>>3);t.palette=e.subarray(r,r+n),r+=n}var a=t.header.pixelDepth>>3,o=t.header.width*t.header.height,c=o*a;t.header.hasEncoding?t.imageData=t.decodeRLE(e,r,a,c):t.imageData=e.subarray(r,r+(t.header.hasColorMap?o:c))},this.getImageData=function(e){var r,n,a,o,c,s,i,u=t.header.width,l=t.header.height,p=(t.header.flags&M.MASK)>>M.SHIFT;switch(e||(e=document?document.createElement("canvas").getContext("2d").createImageData(u,l):{width:u,height:l,data:new Uint8ClampedArray(u*l*4)}),p===M.TOP_LEFT||p===M.TOP_RIGHT?(o=0,c=1,s=l):(o=l-1,c=-1,s=-1),p===M.TOP_LEFT||p===M.BOTTOM_LEFT?(r=0,n=1,a=u):(r=u-1,n=-1,a=-1),t.header.pixelDepth){case 8:i=t.header.isGreyColor?t.getImageDataGrey8bits:t.getImageData8bits;break;case 16:i=t.header.isGreyColor?t.getImageDataGrey16bits:t.getImageData16bits;break;case 24:i=t.getImageData24bits;break;case 32:i=t.getImageData32bits}return i&&i(e.data,t.imageData,t.palette,u,o,c,s,r,n,a),e},this.getCanvas=function(e){e||(e=document.createElement("canvas"));var r=e.getContext("2d"),n=r.createImageData(t.header.width,t.header.height);return e.width=t.header.width,e.height=t.header.height,r.putImageData(t.getImageData(n),0,0),e},this.getDataURL=function(e){return t.getCanvas().toDataURL(e||"image/png")}},U=function e(){Object(u.a)(this,e)};U.imgUrl="https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/sprites/",U.render=function(){var e=Object(i.a)(c.a.mark(function e(t,r){var n,a,o,s,i,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:for((n=k()(r).get()[0]).width=250,n.height=500,a=n.getContext("2d"),o=[],s=0;s<t.length;++s)o.push(U.getCanvas(t[s]));return e.next=10,Promise.all(o);case 10:for(i=e.sent,u=i.map(function(e,r){return{sprite:t[r],canvas:e}}),s=0;s<t.length;++s)U.addSprite(s,u,a);case 13:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),U.getCanvas=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,r){var n=new B;n.open(U.imgUrl+t.id+".tga",function(){e(n.getCanvas(k()("#"+t.id).get()[0]))})}).catch(function(e){throw e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),U.addSprite=function(){var e=Object(i.a)(c.a.mark(function e(t,r,n){var a,o,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=U.getPosition(r[t]),o=a.x,s=a.y,n.drawImage(r[t].canvas,125+o,400-s);case 2:case"end":return e.stop()}},e,this)}));return function(t,r,n){return e.apply(this,arguments)}}(),U.getPosition=function(e){return{x:e.sprite.position.x-e.canvas.width/2,y:e.sprite.position.y+e.canvas.height/2}};var z=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).mainCanvasId=function(){return r.props.objectRecord.id.toString()},r.renderSpriteInfo=function(e){return n.createElement(O.a,{xs:"6",md:"4",lg:"3",className:"col-6 sprite-info"},n.createElement("div",{className:"sprite-info-preview"},n.createElement("canvas",{id:e.id.toString(),className:"sprite"})),n.createElement(H,{keyStr:"Id",value:e.id}),n.createElement(H,{keyStr:"Parent",value:e.parent}),n.createElement(H,{keyStr:"Pos",value:e.position}))},r.render=function(){return n.createElement(g.a,null,n.createElement(h.a,null,n.createElement(O.a,{md:"7",lg:"8"},n.createElement(h.a,null,n.createElement(G.a,{color:"link",onClick:r.props.close},"< Back to listing")),n.createElement(h.a,null,n.createElement(O.a,null,n.createElement("h2",null,r.props.objectRecord.description),n.createElement(H,{keyStr:"Id",value:r.props.objectRecord.id})))),n.createElement(O.a,{md:"5",lg:"4"},n.createElement("div",{className:"sprite-preview"},n.createElement("canvas",{id:r.mainCanvasId(),className:"sprite"})))),n.createElement(h.a,null,n.createElement(O.a,null,n.createElement("h3",null,"All sprites:"))),n.createElement(h.a,null,F()(r.props.objectRecord.sprites,function(e){return e.id}).map(r.renderSpriteInfo)))},r}return Object(d.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){U.render(this.props.objectRecord.sprites,"#"+this.mainCanvasId())}}]),t}(n.Component),X=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={objectRecords:{},selectedRecord:void 0,filter:"",filteredCount:0,itemsPerPage:25,currentPage:0},r.componentDidMount=Object(i.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.initialize(r.onLoadingProgress,r.onLoadingDone);case 2:t=e.sent,r.setState(function(e){return Object(s.a)({},e,{objectRecords:t,filteredCount:Object.keys(t).length})});case 4:case"end":return e.stop()}},e,this)})),r.getFilteredObjects=function(){return Object.values(r.state.objectRecords).filter(function(e){return t.stringContains(e.description,r.state.filter)}).slice(r.state.currentPage*r.state.itemsPerPage,r.state.currentPage*r.state.itemsPerPage+r.state.itemsPerPage)},r.getPageControlProps=function(){return{currentPage:r.state.currentPage,pageCount:Math.ceil(r.state.filteredCount/r.state.itemsPerPage)-1,changePage:r.onChangePage}},r.showLoading=function(){return void 0!==r.state.progress},r.onSearchSubmit=function(e){r.setState(function(r){return Object(s.a)({},r,{filter:e,filteredCount:Object.values(r.objectRecords).filter(function(r){return t.stringContains(r.description,e)}).length})})},r.onChangePage=function(e){r.setState(function(t){return Object(s.a)({},t,{currentPage:e})})},r.onLoadingProgress=function(e){r.setState(function(t){return Object(s.a)({},t,{progress:e})})},r.onLoadingDone=function(e){r.setState(function(t){return Object(s.a)({},t,{objectRecords:e,filteredCount:Object.keys(e).length})})},r.onObjectSelected=function(e){r.setState(function(t){return Object(s.a)({},t,{selectedRecord:e.id})})},r.onObjectClosed=function(){r.setState(function(e){return Object(s.a)({},e,{selectedRecord:void 0})})},r.renderTabel=function(){return n.createElement(g.a,null,n.createElement(j,{objectRecord:r.getFilteredObjects(),onObjectSelected:r.onObjectSelected}),r.state.filteredCount>r.state.itemsPerPage&&n.createElement(x,r.getPageControlProps()))},r.renderObjectRecord=function(){return n.createElement(z,{objectRecord:r.state.objectRecords[r.state.selectedRecord],close:r.onObjectClosed})},r.render=function(){return n.createElement("div",null,n.createElement(R,{onSearch:r.onSearchSubmit}),n.createElement("main",{role:"main"},r.showLoading()&&n.createElement(y,{progress:r.state.progress}),r.state.selectedRecord?r.renderObjectRecord():r.renderTabel()))},r}return Object(d.a)(t,e),t}(n.Component);X.stringContains=function(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.render(n.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.827a09d1.chunk.js.map