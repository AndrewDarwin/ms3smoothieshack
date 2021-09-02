/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
    $("select").formSelect();
});





/*
    vanilla JavaScript for MaterializeCSS initialization
*/

// document.addEventListener('DOMContentLoaded', function () {
//     let sidenavs = document.querySelectorAll(".sidenav");
//     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
// });