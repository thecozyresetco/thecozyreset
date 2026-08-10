/* =========================================
   GOOGLE ANALYTICS — SHOP CLICK TRACKING
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const shopLinks = document.querySelectorAll(
        'a[href*="shop.thecozyreset.co"]'
    );

    shopLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (typeof gtag === "function") {

                gtag("event", "shop_click", {
                    event_category: "Shop",
                    event_label: link.textContent.trim()
                });

            }

        });

    });

});
