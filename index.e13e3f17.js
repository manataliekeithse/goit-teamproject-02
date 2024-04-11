let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},r=t.parcelRequirebc11;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirebc11=r),r.register,r("5exDt"),r("gjiCh"),r("i3bGI"),r("2nhTy"),r("2shzp");var s=r("5exDt"),n=r("2nhTy");const o=document.querySelector(".back-to-top");function l(){document.body.scrollIntoView({behavior:"smooth"})}o.addEventListener("click",l),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?o.style.display="block":o.style.display="none"};var c=r("iNllG");const d={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")};let g=!1,u="";const p=new KeyMovieFetch;async function m(t){try{if(t.preventDefault(),t.stopPropagation(),d.paginationCont.classList.remove("is-hidden"),p.resetPage(),p.value=t.currentTarget.elements.searchQuery.value,""===p.value){d.searchMessage.classList.remove("is-hidden"),g=!1,s.requireData.page=1,(0,s.loadPage)(),d.searchMessage.innerHTML="I can`t find an empty request. Please input something.";return}if(""!==p.value){let t=await p.fetchMovie(p.value);if(e=t.total_results,t.total_results){u=p.value,p.value,d.gallery.innerHTML="",(0,n.pagination).reset(t.total_results);let{results:e}=t,a=(0,c.filmCheckImgUrl)(e);await f({...t,...a}),g=!0}}if(0===e){p.value=u,d.searchMessage.classList.remove("is-hidden"),d.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.";return}t.target.reset()}catch(e){console.log(e)}}async function h(){if(""!==p.value){let e=await p.fetchMovie(p.value),{results:t}=e,a=(0,c.filmCheckImgUrl)(t);await f({...e,...a})}}async function f(e){d.gallery.innerHTML="",d.searchMessage.classList.add("is-hidden");let t=e.results.map(({id:e,poster_path:t,title:a,release_date:i,genre_ids:r})=>{var n;let o,l,c;o=void 0!==i&&i.length>4?i.slice(0,4):"There is no info";let d=(n=s.GENRES_FULL_INFO,c=[],r.forEach(e=>{let t=n.find(t=>e===t.id);t&&c.push(t.name)}),c);if(d.length){if(d.length>2){let e=d.slice(0,2);e.push("Other"),l=e.join(", ")}else l=d.join(", ")}else l=["There is no info"];return`
      <li class="card-set__item" id="${e}">
      <a href='#' id='${e}' class="card-link">
      <picture>
                    <source srcset="
                    http://image.tmdb.org/t/p/w780/${t} 1x,
                   http://image.tmdb.org/t/p/original/${t} 2x" media="(min-width: 1280px)" type="image/jpeg" />
                    <source srcset="
                    http://image.tmdb.org/t/p/w342/${t} 1x,
                    http://image.tmdb.org/t/p/w500/${t} 2x" media="(min-width: 768px)" type="image/jpeg" />
                    <source srcset="
                    http://image.tmdb.org/t/p/w185/${t} 1x,
                    http://image.tmdb.org/t/p/w342/${t} 2x" media="(max-width: 480px)" type="image/jpeg" />
         <img id="${e}
          loading="lazy"
          src="http://image.tmdb.org/t/p/w342/${t}"
          alt="${a}"
          class="card-set__img "/>
      </picture>
     
      <h3 class="card-set__title">${a}</h3>
      <div class="card-set__description" id="${e}">
      <span class="card-set__genre" id="${e}"> ${l} &nbsp| ${o}</span>
        </div>
      </a>
      </li>
      `}).join("");(0,s.addToHTML)(t)}d.searchForm.addEventListener("submit",m),(0,n.pagination).on("afterMove",e=>{let t=e.page;if(g){let t=e.page;p.page=t,h(),l()}else(0,s.onPaginLoadMore)(t),l()}),r("gfuoZ");
//# sourceMappingURL=index.e13e3f17.js.map
