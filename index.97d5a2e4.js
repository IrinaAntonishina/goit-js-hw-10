const e={select:document.querySelector(".breed-select"),load:document.querySelector(".loader"),error:document.querySelector(".error"),info:document.querySelector(".cat-info")};function t({id:e,name:t}){return`<option value="${e}">${t}</option>`}function c({url:e}){return`<img src="${e}" alt="cat" width="640" class="cat-info_img">`}e.select.addEventListener("change",(function(t){o=t.target.value,(n=o,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${n}&api_key=live_rEv9nGLilDCvc0lglvJrH2rw3bUAK6aaFuCccjTCugKD7vuBlRJW6SgB1L7JOtF8`).then((e=>e.json()))).then((t=>{const n=t.map(c).join("");e.info.insertAdjacentHTML("afterbegin",n);const o=t.map((e=>e.breeds));console.log(typeof o),console.log(t)})).catch((e=>{console.log(e)}));var n;var o})),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_rEv9nGLilDCvc0lglvJrH2rw3bUAK6aaFuCccjTCugKD7vuBlRJW6SgB1L7JOtF8").then((e=>e.json())).then((c=>{const n=c.map(t).join("");e.select.insertAdjacentHTML("afterbegin",n)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.97d5a2e4.js.map
