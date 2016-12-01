(function() {
    const pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    const items = [
        {
            src: '/img/Tupi_01.jpg',
            w: 1600,
            h: 1122
        }, {
            src: '/img/Tupi_02.jpg',
            w: 1600,
            h: 1122
        }, {
            src: '/img/Tupi_03.jpg',
            w: 1024,
            h: 718
        }, {
            src: '/img/Tupi_04.jpg',
            w: 1280,
            h: 898
        }, {
            src: '/img/Tupi_05.jpg',
            w: 800,
            h: 561
        }, {
            src: '/img/Tupi_06.jpg',
            w: 1024,
            h: 718
        }, {
            src: '/img/Tupi_07.jpg',
            w: 1363,
            h: 2048
        }, {
            src: '/img/Tupi_08.jpg',
            w: 1678,
            h: 1116
        }, {
            src: '/img/Tupi_09.jpg',
            w: 1988,
            h: 1323
        }, {
            src: '/img/Tupi_10.jpg',
            w: 1280,
            h: 898
        }, {
            src: '/img/Tupi_11.jpg',
            w: 1024,
            h: 718
        }
    ];

    // define options (if needed)
    let options = {
        index: 0,
        showHideOpacity: true, 
        getThumbBoundsFn: false
    };

    function getThumbBoundsFn(e) {
        return function() {
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            let rect = e.target.getBoundingClientRect();
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
    }

    $('.gallery a').on('click', function(e) {
        e.preventDefault();
        let id = $(this).data('id');
        options.index = id || 0;
        //options.getThumbBoundsFn = getThumbBoundsFn(e);
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
})();
