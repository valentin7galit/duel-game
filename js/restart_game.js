function restartGame() {

	$('.final-game').css('display', 'none');


    clearInterval(this.startGame);

    secPlayer = 0;
 
    var scorPlayerOne = 0;
    var scorPlayerTwo = 0;

    var startZero = setTimeout(function() {
    	$('.player-one').removeAttr('style');
        $('.player-two').removeAttr('style');
        $('.sound-wait')[0].play();
    	$('.player-one-attack-one').css('display', 'none');
    	$('.player-two-attack-one').css('display', 'none');
    	$('.player-one-attack-two').css('display', 'none');
    	$('.player-two-attack-two').css('display', 'none');
    	$('.player-one-hurt').css('display', 'none');
    	$('.player-two-hurt').css('display', 'none');
        $('.score-player-number-one').text(0);
        $('.score-player-number-two').text(0);
        $('.time-name').text('ATTENTION').css('color', '#ffe16c');
        $('.time-sec').text('2');
        $('.display').css('background-image', 'url("img/map-1-0.jpg")');
    }, 0);

    this.startGame = setInterval(function() {

        secPlayer++;

        if (secPlayer == 2) {
            $('.sound-run')[0].play();
        }
        if (secPlayer == 4) {
            $('.player-one').click(function() {
                $('.player-one').css('display', 'none');
                $('.player-two').css('display', 'none');
                $('.player-two-attack').removeAttr('style');
                $('.player-one-hurt').removeAttr('style');
                scorPlayerTwo++;
                $('.score-player-number-two').text(scorPlayerTwo);
                secPlayer = 5;
                $('.play-sound-two-attack')[0].play();
            });
        } else if (secPlayer == 5) {
            $('.player-one').css('display', 'none');
            $('.player-two').css('display', 'none');
            $('.player-one-attack').removeAttr('style');
            $('.player-two-hurt').removeAttr('style');
            scorPlayerOne++;
            $('.score-player-number-one').text(scorPlayerOne);
            secPlayer = 5;
            $('.play-sound-one-attack')[0].play();
        }
        if (secPlayer == 7) {
            $('.play-sound-hurt')[0].play();
        }

        if (secPlayer == 10) {
            $('.player-one-attack').css('display', 'none');
            $('.player-two-attack').css('display', 'none');
            $('.player-one-hurt').css('display', 'none');
            $('.player-two-hurt').css('display', 'none');
            $('.player-one-one').removeAttr('style');
            $('.player-two-one').removeAttr('style');
            $('.sound-wait')[0].play();
            $('.display').css('background-image', 'url("img/map-1-1.jpg")');
        }
        if (secPlayer == 12) {
            $('.sound-run')[0].play(); 
        }
        if (secPlayer == 14) {
            $('.player-one-one').click(function() {
                $('.player-one-one').css('display', 'none');
                $('.player-two-one').css('display', 'none');
                $('.player-two-attack-one').removeAttr('style');
                $('.player-one-hurt').removeAttr('style')
                scorPlayerTwo++;
                $('.score-player-number-two').text(scorPlayerTwo);
                secPlayer = 15;
                $('.play-sound-two-attack')[0].play();
            }); 
        } else if (secPlayer == 15) {
            $('.player-one-one').css('display', 'none');
            $('.player-two-one').css('display', 'none');
            $('.player-one-attack-one').removeAttr('style');
            $('.player-two-hurt').removeAttr('style');
            scorPlayerOne++;
            $('.score-player-number-one').text(scorPlayerOne);
            secPlayer = 15;
            $('.play-sound-one-attack')[0].play();
        }
        if (secPlayer == 17) {
            $('.play-sound-hurt')[0].play();
        }
        if (secPlayer == 20 && scorPlayerOne == 2 && scorPlayerTwo == 0 || secPlayer == 20 && scorPlayerOne == 0 && scorPlayerTwo == 2) {
            $('.final-game').removeAttr('style');
            $('.sound-final')[0].play();
        }

        if (secPlayer == 20 && scorPlayerOne < 2 && scorPlayerTwo < 2) {
            $('.player-one-attack-one').css('display', 'none');
            $('.player-two-attack-one').css('display', 'none');
            $('.player-one-hurt').css('display', 'none');
            $('.player-two-hurt').css('display', 'none');
            $('.player-one-two').removeAttr('style');
            $('.player-two-two').removeAttr('style');
            $('.sound-wait')[0].play();
            $('.display').css('background-image', 'url("img/map-1-2.jpg")');
        }
        if (secPlayer == 22 && scorPlayerOne < 2 && scorPlayerTwo < 2) {
            $('.sound-run')[0].play(); 
        }
        if (secPlayer == 24 && scorPlayerOne < 2 && scorPlayerTwo < 2) {
            $('.player-one-two').click(function() {
                $('.player-one-two').css('display', 'none');
                $('.player-two-two').css('display', 'none');
                $('.player-two-attack-two').removeAttr('style');
                $('.player-one-hurt').removeAttr('style')
                scorPlayerTwo++;
                $('.score-player-number-two').text(scorPlayerTwo);
                secPlayer = 25;
                $('.play-sound-two-attack-two')[0].play();
            }); 
        } else if (secPlayer == 25 && scorPlayerOne < 2 && scorPlayerTwo < 2) {
            $('.player-one-two').css('display', 'none');
            $('.player-two-two').css('display', 'none');
            $('.player-one-attack-two').removeAttr('style');
            $('.player-two-hurt').removeAttr('style');
            scorPlayerOne++;
            $('.score-player-number-one').text(scorPlayerOne);
            secPlayer = 25;
            $('.play-sound-one-attack-two')[0].play();
        }
        if (secPlayer == 27 && scorPlayerOne == 2 && scorPlayerTwo == 1 || secPlayer == 27 && scorPlayerOne == 1 && scorPlayerTwo == 2) {
            $('.play-sound-hurt')[0].play();
        }
        if (secPlayer == 30 && scorPlayerOne == 2 && scorPlayerTwo == 1 || secPlayer == 30 && scorPlayerOne == 1 && scorPlayerTwo == 2) {
            $('.final-game').removeAttr('style');
            $('.sound-final')[0].play();
        }

    },1000);


    clearInterval(this.waitTime);

    var secStart = 2;

    var secTimer = 0;

    this.waitTime = setInterval(function() {

        secStart--;

        secTimer++;

        $('.time-sec').text(secStart);

        if (secStart <= 0) {
            $('.time-name').text('START').css('color', '#338a1f');
            clearInterval(waitTime);
            secStart = 2;
            if (secTimer == 2) {
                setInterval(function() {
                    secTimer++;
                    if (secTimer == 5) {
                        if ($('.score-player-number-one').html() == 1 && $('.score-player-number-two').html() == 0) {
                            setTimeout(function() {
                                $('.time-sec').text(2);
                                $('.time-name').text('ATTENTION').css('color', '#ffe16c');
                                waitTime = setInterval(function() {
                                    secStart--;
                                    $('.time-sec').text(secStart);
                                    if (secStart <= 0) {
                                        $('.time-name').text('START').css('color', '#338a1f');
                                        clearInterval(waitTime);
                                        setTimeout(function() {
                                            if (secStart <= 0 && $('.score-player-number-one').html() == 1 && $('.score-player-number-two').html() == 1) {
                                                secStart = 2;
                                                $('.time-sec').text(2);
                                                $('.time-name').text('ATTENTION').css('color', '#ffe16c');
                                                waitTime = setInterval(function() {
                                                    secStart--;
                                                    $('.time-sec').text(secStart);
                                                    if (secStart <= 0) {
                                                        $('.time-name').text('START').css('color', '#338a1f');
                                                        clearInterval(waitTime);
                                                    }
                                                }, 1000);
                                            }
                                        }, 7000);
                                    }
                                },1000);
                            }, 5000);
                        } else if ($('.score-player-number-one').html() == 0 && $('.score-player-number-two').html() == 1) {
                            setTimeout(function() {
                                $('.time-sec').text(2);
                                $('.time-name').text('ATTENTION').css('color', '#ffe16c');
                                waitTime = setInterval(function() {
                                    secStart--;
                                    $('.time-sec').text(secStart);
                                    if (secStart <= 0) {
                                        $('.time-name').text('START').css('color', '#338a1f');
                                        clearInterval(waitTime);
                                    }
                                    setTimeout(function() {
                                        if (secStart <= 0 && $('.score-player-number-one').html() == 1 && $('.score-player-number-two').html() == 1) {
                                            secStart = 2;
                                            $('.time-sec').text(2);
                                            $('.time-name').text('ATTENTION').css('color', '#ffe16c');
                                            waitTime = setInterval(function() {
                                                secStart--;
                                                $('.time-sec').text(secStart);
                                                if (secStart <= 0) {
                                                    $('.time-name').text('START').css('color', '#338a1f');
                                                    clearInterval(waitTime);
                                                }
                                            }, 1000);
                                        }
                                    }, 9000);
                                },1000);
                            }, 4000);
                        }
                    }
                },1000);
            }
        }
    },1000);

}