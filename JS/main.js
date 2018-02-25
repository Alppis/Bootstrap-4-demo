$(document).ready(function() {
    var navWaypoint = $('#about-us').waypoint({
        handler: function(direction) {
            if (direction == 'down') {
                document.getElementById('navbar').style.backgroundColor = '#f8f8f8';
                document.getElementById('nav-about').style.color = '#2b2b2b';
                document.getElementById('nav-why').style.color = '#2b2b2b';
                document.getElementById('nav-references').style.color = '#2b2b2b';
                document.getElementById('nav-contact').style.color = '#2b2b2b';
                document.getElementById('navbar-brand').style.color = '#2b2b2b';
                document.getElementById('navbar').style.borderBottomWidth = '1px';
                var element = document.getElementById('navbar');
                element.classList.remove('navbar-dark');
                element.classList.add('navbar-light');
            }

            if (direction == 'up') {
                document.getElementById('navbar').style.backgroundColor = 'transparent';
                document.getElementById('nav-about').style.color = '#f9f9f9';
                document.getElementById('nav-why').style.color = '#f9f9f9';
                document.getElementById('nav-references').style.color = '#f9f9f9';
                document.getElementById('nav-contact').style.color = '#f9f9f9';
                document.getElementById('navbar-brand').style.color = '#f9f9f9';
                document.getElementById('navbar').style.borderBottomWidth = '0px';
                var element = document.getElementById('navbar');
                element.classList.remove('navbar-light');
                element.classList.add('navbar-dark');
            }
        }
    });

    var numbers = $('.odometer').waypoint({
        handler: function() {
            $('#customers').html(1000);
            $('#dailyUsers').html(10000);
            $('#employees').html(50);
        }, offset: '60%'
    });
});