
(function() {
    function main() {
        var tabButtons = [].slice.call(document.querySelectorAll('ul.tab-nav li a.button'));

        tabButtons.map(function(button) {
            button.addEventListener('click', function() {
                document.querySelector('li a.active.button').classList.remove('active');
                button.classList.add('active');

                // Removing this line makes each tabs content stay
                document.querySelector('.tab-pane.active').classList.remove('active');

                // Removing this line makes each tabs content not appear
                document.querySelector(button.getAttribute('title')).classList.add('active');



            })
        })
    }

    if (document.readyState !== 'loading') {
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
})();
