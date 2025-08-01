Shery.imageEffect("#back", {style: 5 ,config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":"-99969","range":[-9999999,9999999]},"aspect":{"value":2.0487540612265915},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.04,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem");

let indices = new Array(elems.length).fill(0); // Track index for each elem

var animating = false;

document.querySelector("#main").addEventListener("click", function () {
    if(!animating){
        animating = true;

    elems.forEach(function (elem, i) {
        let h1s = elem.querySelectorAll("h1");
        let index = indices[i];

        gsap.to(h1s[index], {
            top: "-100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
                gsap.set(h1s[index], { top: "100%" });
                animating = false;
            },
        });

        // Update index
        index = (index === h1s.length - 1) ? 0 : index + 1;
        indices[i] = index;

        gsap.to(h1s[index], {
            top: "0%",
            ease: Expo.easeInOut,
            duration: 1,
        });
    });
    }
});

