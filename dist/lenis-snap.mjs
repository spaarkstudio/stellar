function __spreadArray(t,e,i){if(i||2===arguments.length)for(var r,n=0,o=e.length;n<o;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}function removeParentSticky(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&removeParentSticky(t.offsetParent)}function addParentSticky(t){"true"===t?.dataset?.sticky&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&addParentSticky(t.offsetParent)}function offsetTop(t,e=0){const i=e+t.offsetTop;return t.offsetParent?offsetTop(t.offsetParent,i):i}function offsetLeft(t,e=0){const i=e+t.offsetLeft;return t.offsetParent?offsetLeft(t.offsetParent,i):i}function scrollTop(t,e=0){const i=e+t.scrollTop;return t.offsetParent?scrollTop(t.offsetParent,i):i+window.scrollY}function scrollLeft(t,e=0){const i=e+t.scrollLeft;return t.offsetParent?scrollLeft(t.offsetParent,i):i+window.scrollX}"function"==typeof SuppressedError&&SuppressedError;class Slide{constructor(t,{align:e=["start"],ignoreSticky:i=!0,ignoreTransform:r=!1}={}){this.element=t,this.ignoreSticky=i,this.ignoreTransform=r,this.align=[e].flat(),this.rect={},this.wrapperResizeObserver=new ResizeObserver(this.onWrapperResize),this.wrapperResizeObserver.observe(document.body),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element)}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:t,left:e,width:i,height:r,element:n}){t=t??this.rect.top,e=e??this.rect.left,i=i??this.rect.width,r=r??this.rect.height,n=n??this.rect.element,t===this.rect.top&&e===this.rect.left&&i===this.rect.width&&r===this.rect.height&&n===this.rect.element||(this.rect.top=t,this.rect.y=t,this.rect.width=i,this.rect.height=r,this.rect.left=e,this.rect.x=e,this.rect.bottom=t+r,this.rect.right=e+i)}onWrapperResize=()=>{let t,e;if(this.ignoreSticky&&removeParentSticky(this.element),this.ignoreTransform)t=offsetTop(this.element),e=offsetLeft(this.element);else{const i=this.element.getBoundingClientRect();t=i.top+scrollTop(this.element),e=i.left+scrollLeft(this.element)}this.ignoreSticky&&addParentSticky(this.element),this.setRect({top:t,left:e})};onResize=([t])=>{const e=t.borderBoxSize[0].inlineSize,i=t.borderBoxSize[0].blockSize;this.setRect({width:e,height:i})}}var t=function(){function Snap(t,e){var i=void 0===e?{}:e,r=i.type,n=void 0===r?"mandatory":r,o=i.velocityThreshold,s=void 0===o?1:o,a=i.onSnapStart,h=i.onSnapComplete,c=this;this.onWindowResize=function(){c.viewport.width=window.innerWidth,c.viewport.height=window.innerHeight},this.onScroll=function(t,e){var i=t.scroll,r=t.limit,n=t.lastVelocity,o=t.velocity;t.isScrolling,t.isTouching;var s=e.userData;e.isSmooth,e.type;var a=Math.abs(n)>Math.abs(o),h=Math.sign(n)!==Math.sign(o)&&0!==o;if(Math.abs(o)<c.velocityThreshold&&a&&!h&&"snap"!==(null==s?void 0:s.initiator)){i=Math.ceil(i);var l=__spreadArray(__spreadArray([0],c.snaps.values(),!0),[r],!1);c.elements.forEach((function(t){var e,i=t.rect;t.align.forEach((function(t){"start"===t?e=i.top:"center"===t?e=i.top+i.height/2-c.viewport.height/2:"end"===t&&(e=i.top+i.height-c.viewport.height),void 0!==e&&l.push(Math.ceil(e))}))}));var f=(l=l.sort((function(t,e){return Math.abs(t)-Math.abs(e)}))).findLast((function(t){return t<=i}));void 0===f&&(f=l[0]);var p=Math.abs(i-f),d=l.find((function(t){return t>=i}));void 0===d&&(d=l[l.length-1]);var u=p<Math.abs(i-d)?f:d,v=Math.abs(i-u);("mandatory"===c.type||"proximity"===c.type&&v<=c.viewport.height/2)&&c.lenis.scrollTo(u,{userData:{initiator:"snap"},onStart:function(){var t;null===(t=c.onSnapStart)||void 0===t||t.call(c,u)},onComplete:function(){var t;null===(t=c.onSnapComplete)||void 0===t||t.call(c,u)}})}},this.lenis=t,this.type=n,this.elements=new Map,this.snaps=new Map,this.velocityThreshold=s,this.onSnapStart=a,this.onSnapComplete=h,this.viewport={width:window.innerWidth,height:window.innerHeight},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.lenis.on("scroll",this.onScroll)}return Snap.prototype.destroy=function(){this.lenis.off("scroll",this.onScroll),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach((function(t){return t.destroy()}))},Snap.prototype.add=function(t){var e=this,i=crypto.randomUUID();return this.snaps.set(i,t),function(){return e.remove(i)}},Snap.prototype.remove=function(t){this.snaps.delete(t)},Snap.prototype.addElement=function(t,e){var i=this;void 0===e&&(e={});var r=crypto.randomUUID();return this.elements.set(r,new Slide(t,e)),function(){return i.removeElement(r)}},Snap.prototype.removeElement=function(t){this.elements.delete(t)},Snap}();export{t as default};
//# sourceMappingURL=lenis-snap.mjs.map
