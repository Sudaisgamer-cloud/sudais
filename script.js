
$(document).ready(function () {

    // CURRENT FILTER
    let currentFilter = "all";

    // MOVIE SEARCH AND FILTER
    function filterMovies() {

        let searchValue = $("#movieSearch").val().toLowerCase();
        let visibleCount = 0;

        $(".movie-item").each(function () {

            let movieName = $(this).find("h5").text().toLowerCase();
            let category = $(this).data("category");

            let matchesSearch = movieName.includes(searchValue);

            let matchesCategory =
                currentFilter === "all" ||
                category === currentFilter;

            if (matchesSearch && matchesCategory) {

                $(this).stop(true, true).fadeIn(300);
                visibleCount++;

            } else {

                $(this).stop(true, true).fadeOut(200);

            }

        });

        if (visibleCount === 0) {
            $("#noResults").show();
        } else {
            $("#noResults").hide();
        }

    }

    // LIVE SEARCH
    $("#movieSearch").on("input", function () {
        filterMovies();
    });

    // CATEGORY FILTER
    $(".filter-btn").click(function () {

        $(".filter-btn").removeClass("active");

        $(this).addClass("active");

        currentFilter = $(this).data("filter");

        filterMovies();

    });

    // WATCH MOVIE MODAL
    $(".watch-movie").click(function () {

        let movieTitle = $(this).data("title");

        $("#modalMovieTitle").text(movieTitle);

        let movieModal = new bootstrap.Modal(
            document.getElementById("movieModal")
        );

        movieModal.show();

    });

    // STOP VIDEO WHEN MODAL CLOSES
    $("#movieModal").on("hidden.bs.modal", function () {

        let video = document.getElementById("demoVideo");

        video.pause();
        video.currentTime = 0;

    });

    // LOGIN FORM
    $("#loginForm").submit(function (event) {

        event.preventDefault();

        alert("This is a demo login. Account authentication is not connected yet.");

        this.reset();

        let loginModal = bootstrap.Modal.getInstance(
            document.getElementById("loginModal")
        );

        loginModal.hide();

    });

    // SMOOTH SCROLL
    $(".navbar a, .footer-logo, footer .col-md-3 a, .view-all, .hero-buttons a, .subscription-section a").click(function (event) {

        let target = $(this).attr("href");

        if (target && target.startsWith("#") && $(target).length) {

            event.preventDefault();

            $("html, body").animate({

                scrollTop: $(target).offset().top - 75

            }, 700);

            // CLOSE MOBILE NAVBAR
            $(".navbar-collapse").collapse("hide");

        }

    });

    // NAVBAR BACKGROUND ON SCROLL
    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 50) {

            $(".navbar").css({
                "background": "rgba(8, 8, 20, 0.98)",
                "box-shadow": "0 5px 20px rgba(0,0,0,0.3)"
            });

        } else {

            $(".navbar").css({
                "background": "rgba(10, 10, 23, 0.95)",
                "box-shadow": "none"
            });

        }

    });

    // INITIAL PAGE ANIMATION
    $(".hero-content").hide().fadeIn(1200);

});
