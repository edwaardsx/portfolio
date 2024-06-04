console.clear();

        gsap.registerPlugin(ScrollTrigger);
        gsap.set("#textMask", { yPercent: 110 });
        gsap.to("#textMask", {
        yPercent: -110,
        scrollTrigger: {
            trigger: ".wrapper",
            pin: ".wrapper",
            scrub: true,
            markers: false,
            start: "top top",
            end: "+=300%"
        }
        });