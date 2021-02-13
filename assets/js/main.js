$(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function(e) {
        if ($(window).width() <= 768) {
            $("#wrapper").removeClass("toggled");
        } else {
            $("#wrapper").addClass("toggled");
        }
    });
});

// let navItem = document.getElementsByClassName('nav-link');
// let dropdownMenu = document.querySelector('.dropdown-menu');

// $(".nav-link").hover(function() {
//     $(this).show(),
//         function() {
//             $(this).show()
//         };

// });

function openNav() {
    var x = document.getElementById("mySidenav") 
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.width = "250px"  
    } else {    
        x.style.display = "none"; 
        x.style.width = "0"
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}