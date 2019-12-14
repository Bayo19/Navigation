TweenMax.from("#brando", .5, {
        delay: .3,
        x: -20,
        opacity: 0,
        ease: Expo.easeInOut
    })
    // navigation animation - li
TweenMax.staggerFrom(".menu li", 1, {
    delay: .35,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1);