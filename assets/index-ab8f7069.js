import"./mobile-menu-793009b0.js";import"./hotel-one-btn-room-c5bbf1dc.js";import"./rest-two-btn-table-003a400c.js";import"./room-one-btn-room-4e9c940c.js";$(".swiper").slick({dots:!1,infinite:!0,speed:1e3,slidesToShow:4,slidesToScroll:1,centerMode:!0,centerPadding:"32px",autoplay:!0,autoplaySpeed:2e3,variableWidth:!0,prevArrow:$(".arrow-left"),nextArrow:$(".arrow-right"),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".swiper-menu").slick({dots:!1,infinite:!0,speed:1e3,slidesToShow:4,slidesToScroll:1,centerMode:!0,centerPadding:"32px",variableWidth:!0,prevArrow:$(".arrow-left"),nextArrow:$(".arrow-right"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});(()=>{const e={openModalBtn:document.querySelector("[data-modal-room-open-g]"),openNextModalBtn:document.querySelector("[data-modal-room-open-f]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openNextModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-table-open-d]"),openOtherModalBtn:document.querySelector("[data-modal-table-open-s]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]"),body:document.querySelector("body")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openOtherModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();
