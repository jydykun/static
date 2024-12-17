window.addEventListener("DOMContentLoaded", ()=>{

    slider("#hero-slider", "fade", undefined, undefined);
    slidesPerView("#trending-slider");
    slider("#testimonial-slider");
    tab();
    
});


/**
 * @param {string} target - The target html tag.
 * @param {string} effect - Slider effect.
 * @param {number} slidesPerView - Slides per view. Default is 1.
 * @param {number} spaceBetween - Space between slides by pixels. Default is 30px.
 */

function slider(target, effect, slidesPerView=1, spaceBetween=30){
    const swiper = new Swiper(target, {
        // Parameters
        effect: effect,
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        speed: 1000,
        autoplay: {
            pauseOnMouseEnter: true,
        },
        loop: true,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    });
}

function slidesPerView(target){
    const swiper = new Swiper(target, {
        // Parameters
        effect: "slide",
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
        loop: true,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    });
}

function tab(){
    const buttons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    if (buttons){
        buttons.forEach(btn => {
            btn.addEventListener("click", (e)=>{
                // Hide all panels
                tabPanels.forEach(panel => {
                    panel.classList.add("hidden");
                })
    
                // Remove all the shadow effect
                buttons.forEach(btn => {
                    btn.classList.remove("shadow-[0_4px_0_0_#3730a3]", "font-semibold", "text-indigo-800");
                })
    
                // Add shadow effect when active
                e.target.classList.add("shadow-[0_4px_0_0_#3730a3]", "font-semibold", "text-indigo-800");
    
                // Show the target panel
                const tabData = e.target.dataset.tab;
                const panel = document.querySelector(`[data-tab-content=${tabData}]`);
                panel.classList.remove("hidden");
            });
        });
    }
};



const nav = document.querySelector("#main-navigation");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("sticky-nav", "animate-slide-top");
    } else {
        nav.classList.remove("sticky-nav", "animate-slide-top");
    }
});

const btn = document.querySelector(".collapsible-btn");
const menu = document.querySelector(".collapsible-nav");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
})

const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", ()=>{
    searchBar.classList.toggle("search-show");
});




