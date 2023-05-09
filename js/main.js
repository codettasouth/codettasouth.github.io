'use strict';

var app = angular.module('codettaSouthApp', ['ngRoute', 'ngSanitize']).config(function ($httpProvider, $routeProvider, $locationProvider) {

    //    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            activePage: 'Services'
        })
        .when('/music', {
            templateUrl: 'views/music.html',
            controller: 'MainCtrl',
            activePage: 'Music'
        })
        .when('/photography', {
            templateUrl: 'views/photography.html',
            controller: 'MainCtrl',
            activePage: 'Photography'
        })
        .when('/video', {
            templateUrl: 'views/video.html',
            controller: 'MainCtrl',
            activePage: 'Video'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.controller('MainCtrl', function ($scope, $rootScope, $sce, $route) {

    $scope.$route = $route;

    // This link is separated to fool spam bots
    $scope.sendMail = 'mai' + 'lto' + ':' + 'codettasouth' + '@gmail.com';

    // Social links
    $scope.facebookUrl = 'https://www.facebook.com/CodettaSouth/';
    $scope.instagramUrl = 'https://www.instagram.com/codettasouth/';
    $scope.youTubeUrl = 'https://www.youtube.com/@codettasouth3028';
    $scope.tikTokUrl = 'https://www.tiktok.com/@codettasouth';

    // Featured Music Links
    $scope.iTunesUrl = 'https://music.apple.com/us/artist/codetta-south/1161856091?ls=1&app=itunes';
    $scope.appleMusicUrl = 'https://music.apple.com/us/artist/codetta-south/1161856091';
    $scope.appleMusicEmbedUrl = 'https://embed.music.apple.com/us/artist/codetta-south/1161856091';
    $scope.spotifyUrl = 'https://open.spotify.com/artist/1yoL03PFm0p10kDQbzjr2J';
    $scope.spotifyEmbedUrl = 'https://open.spotify.com/embed/artist/1yoL03PFm0p10kDQbzjr2J?utm_source=generator';
    $scope.amazonMusicUrl = 'https://music.amazon.com/artists/B01M1C7VNI/codetta-south';
    $scope.soundCloudUrl = 'https://soundcloud.com/codetta-south';
    $scope.youTubeMusicUrl = 'https://music.youtube.com/channel/UClYGSpjf0khUxFi7pdPOyMQ';
    $scope.bandcampUrl = 'https://codettasouth.bandcamp.com/music';

    $scope.services = [
        {
            iconPath: 'img/guitar.svg',
            title: 'Live & Studio Guitar',
            desc: 'Folk, jazz, rock, theatre, country – what’s in a genre? I collaborate with artists across the musical spectrum, helping them capture the perfect guitar sounds for their live performances and recording projects.',
            linkTitle: 'SEE EXAMPLES',
            link: '#'
        },
        {
            iconPath: 'img/mixing-board.svg',
            title: 'Mixing',
            desc: 'Choosing between quality and affordability? Choose both. I work with artists of all experience levels to create beautiful, radio-worthy mixes at rates that won’t kill their budget. Because great songs deserve great mixes.',
            linkTitle: 'SEE EXAMPLES',
            link: '#'
        },
        {
            iconPath: 'img/producing.svg',
            title: 'Producing',
            desc: 'You have a vision for your recording project. As a producer, I provide experience and guidance to get that vision onto the recording and into the world, whether you’re tracking a single or diving into a full-length album.',
            linkTitle: 'SEE EXAMPLES',
            link: '#'
        },
        {
            iconPath: 'img/lessons.svg',
            title: 'Guitar Lessons',
            desc: 'No student is the same, and I don’t treat them like it. I tailor each lesson plan to help you gain the guitar skills you want at the pace you need, so we can add to your love and knowledge of music.',
            linkTitle: 'SEE EXAMPLES',
            link: '#'
        }
    ]

    $scope.albums = [
        {
            name: 'Two People',
            year: '2022',
            image: 'img/music/two-people_by-codetta-south.jpeg',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/2FFgUQ8gn7axO4kIATNryo?si=OrfebelHQtqakoDpqCZBbA'),
            spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/2FFgUQ8gn7axO4kIATNryo?utm_source=generator'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/two-people-single/1616015278'),
            appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/two-people-single/1616015278'),
            iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/two-people-single/1616015278'),
            soundCloudUrl: undefined,
            youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kbI4SVEUPS3RtYhN4PJfR5Dd2uV68VSwU&feature=share'),
            amazonMusicUrl: $sce.trustAsResourceUrl('https://music.amazon.com/albums/B09WG41ZWJ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_jnVJ99qaO3mGWh3EhpZ1NM5a7'),
            tidalUrl: undefined,
            bandcampUrl: $sce.trustAsResourceUrl('https://codettasouth.bandcamp.com/track/two-people')
        },
        {
            name: 'First Steps of a Lifetime',
            year: '2020',
            image: 'img/music/first-steps-of-a-lifetime_by-codetta-south.jpeg',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/77NCk7XXX5Hv34vZvRxghH?si=xjcu0FM_QHmxyNVCOmaHZQ'),
            spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/77NCk7XXX5Hv34vZvRxghH?utm_source=generator'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/first-steps-of-a-lifetime-single/1493671869'),
            appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/first-steps-of-a-lifetime-single/1493671869'),
            iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/first-steps-of-a-lifetime-single/1493671869'),
            soundCloudUrl: undefined,
            youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kstlah8tiDtPCPCuREUgUmX8LTORBQ8fU&feature=share'),
            amazonMusicUrl: $sce.trustAsResourceUrl('https://music.amazon.com/albums/B083H4JT4Z?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_LXrdWfhzBYBcnJ30YwWxaLz8t'),
            tidalUrl: undefined,
            bandcampUrl: $sce.trustAsResourceUrl('https://codettasouth.bandcamp.com/track/first-steps-of-a-lifetime')
        },
        {
            name: 'A Few Regrets',
            year: '2016',
            image: 'img/music/a-few-regrets_by-codetta-south.jpeg',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/38t7HgWHNPBKfQ1Mcihj1m?si=5GJ9XvjeRmeGGJtCAfcVuw'),
            spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/38t7HgWHNPBKfQ1Mcihj1m?utm_source=generator'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/a-few-regrets/1174895787'),
            appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/a-few-regrets/1174895787'),
            iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/a-few-regrets/1174895787'),
            soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/codetta-south/sets/a-few-regrets-full-album'),
            youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_liUmutw4EBpZvzDqwpVFJlud59DUUiFbU&feature=share'),
            amazonMusicUrl: $sce.trustAsResourceUrl('https://music.amazon.com/albums/B01N8XOZMC?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_3ohiW16EGxW7c9g1LiMuqompx'),
            tidalUrl: undefined,
            bandcampUrl: $sce.trustAsResourceUrl('https://codettasouth.bandcamp.com/album/a-few-regrets-3')
        }
    ]

    $scope.photoGallery = [
        {
            name: 'Home',
            path: 'img/photography/home_credit-Brennan-White-Codetta-South.jpeg'
        },
        {
            name: 'Window',
            path: 'img/photography/window_credit-Brennan-White-Codetta-South.jpeg'
        },
        {
            name: 'Guitar',
            path: 'img/photography/brennan-white-w-guitar_horizontal.jpeg'
        },
        {
            name: 'Motorcycle',
            path: 'img/photography/motorcycle_credit-Brennan-White-Codetta-South.jpeg'
        },
        {
            name: 'Self Portrait',
            path: 'img/photography/brennan-white_wideshot.jpeg'
        },
        {
            name: 'Louise',
            path: 'img/photography/louise_credit-Brennan-White-Codetta-South.jpeg'
        },
        {
            name: 'Jordan',
            path: 'img/photography/jordan_credit-Brennan-White-Codetta-South.jpeg'
        },
        {
            name: 'Sky',
            path: 'img/photography/sky_credit-Brennan-White-Codetta-South.jpeg'
        }
    ]

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    $scope.photoGalleryGroups = sliceIntoChunks($scope.photoGallery, 3)

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const imgPath = button.getAttribute('data-bs-img-path')
            const alt = button.getAttribute('alt')
            // If necessary, you could initiate an Ajax request here
            // and then do the updating in a callback.

            // Update the modal's content.
            // const modalTitle = lightbox.querySelector('.modal-title')
            // const modalBodyInput = lightbox.querySelector('.modal-body input')
            const modalImage = lightbox.querySelector('#lightbox-img')
            modalImage.src = imgPath
            modalImage.alt = alt

            // modalTitle.textContent = `New message to ${recipient}`
            // modalBodyInput.value = recipient
        })
    }

    const leftClickBtn = document.getElementById('left-click')
    if (leftClickBtn) {
        leftClickBtn.addEventListener('click', event => {
            changeImg(-1)
        });
    }

    const rightClickBtn = document.getElementById('right-click')
    if (rightClickBtn) {
        rightClickBtn.addEventListener('click', event => {
            changeImg(1)
        });
    }

    document.onkeydown = checkKey;

    function checkKey(e) {
        if ($route.current.activePage === 'Photography') {
            e = e || window.event;
            if (e.keyCode == '38') {
                // up arrow
            } else if (e.keyCode == '40') {
                // down arrow
            } else if (e.keyCode == '37') {
                // left arrow
                console.log('left key pressed')
                changeImg(-1)
            } else if (e.keyCode == '39') {
                // right arrow
                console.log('right key pressed')
                changeImg(1)
            }
        }
    }

    function changeImg(i) {
        if (lightbox) {
            const modalImage = lightbox.querySelector('#lightbox-img')
            let currentPhotoIndex = $scope.photoGallery.findIndex(photo => photo.name === modalImage.alt);
            if (currentPhotoIndex == $scope.photoGallery.length - 1 && i == 1) {
                currentPhotoIndex = -1
            }
            if (currentPhotoIndex == 0 && i == -1) {
                currentPhotoIndex = $scope.photoGallery.length
            }
            modalImage.src = $scope.photoGallery[currentPhotoIndex + i].path
            modalImage.alt = $scope.photoGallery[currentPhotoIndex + i].name
        }
    }

    $("#offcanvasNavbar a").click(function () {
        $('.offcanvas').offcanvas('hide');
    });

    $scope.getCurrentYear = function () {
        try {
            return new Date().getFullYear();
        } catch (err) {
            console.error(err);
            return "2019";
        }
    };

    $(".navbar .nav-link").on("click", function () {
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    // $(document).ready(function() {
    //     $(".navbar").find(".active").removeClass("active");
    //     console.log(location.pathname)
    //     $('li.active').removeClass('active').removeAttr('aria-current');
    //     $('a[href="' + location. + '"]').closest('li').addClass('active').attr('aria-current', 'page');
    // });

});