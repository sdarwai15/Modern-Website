var r2video = document.querySelector(".speed");
r2video.playbackRate = 0.65;

function customCursor() {
	const cursor = document.querySelector(".cursor");

	document.addEventListener("mousemove", (info) => {
		cursor.setAttribute(
			"style",
			"top: " + (info.pageY - 35) + "px; left: " + (info.pageX - 34) + "px;"
		);
	});
}

customCursor();

function locomotiveScroll() {
	// var locoScroll;

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".webpage"),
		smooth: true,
		getDirection: true,
	});

	locoScroll.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(".webpage", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		pinType: document.querySelector(".webpage").style.transform
			? "transform"
			: "fixed",
	});

	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	ScrollTrigger.refresh();
}

locomotiveScroll();

function gsapForMain() {
	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#imgs",
			scroller: ".webpage",
			pin: true,
			start: "top top",
			scrub: 2,
			// markers: true,
			// onUpdate: (self) => console.log(self.direction),
		},
	});

	tl.to(
		"#large",
		{
			width: "100%",
			height: "100%",
		},
		"abd"
	)
		.to(
			"#l1",
			{
				opacity: 0.5,
				left: "-40%",
			},
			"abd",
			"-=2"
		)
		.to(
			"#l2",
			{
				opacity: 0.5,
				left: "-40%",
			},
			"abd",
			"-=2"
		)
		.to(
			"#r1",
			{
				opacity: 0.5,
				right: "-40%",
			},
			"abd",
			"-=2"
		)
		.to(
			"#r2",
			{
				opacity: 0.5,
				right: "-40%",
			},
			"abd",
			"-=2"
		);
}

function textillateForMain() {
	$(".tlt").textillate({
		// the default selector to use when detecting multiple texts to animate
		selector: ".texts",

		// enable looping
		loop: false,

		// sets the minimum display time for each text before it is replaced
		minDisplayTime: 2000,

		// sets the initial delay before starting the animation
		// (note that depending on the in effect you may need to manually apply
		// visibility: hidden to the element before running this plugin)
		initialDelay: 0,

		// set whether or not to automatically start animating
		autoStart: true,

		// custom set of 'in' effects. This effects whether or not the
		// character is shown/hidden before or after an animation
		inEffects: [],

		// custom set of 'out' effects
		outEffects: ["hinge"],

		// in animation settings
		in: {
			// set the effect name
			effect: "fadeInUp",

			// set the delay factor applied to each consecutive character
			delayScale: 1.5,

			// set the delay between each character
			delay: 50,

			// set to true to animate all the characters at the same time
			sync: false,

			// randomize the character sequence
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: false,

			// reverse the character sequence
			// (note that reverse doesn't make sense with sync = true)
			reverse: false,

			// callback that executes once the animation has finished
			callback: function () {},
		},

		// out animation settings.
		out: {
			effect: "hinge",
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {},
		},

		// callback that executes once textillate has finished
		callback: function () {},

		// set the type of token to animate (available types: 'char' and 'word')
		type: "char",
	});
}

function gsapForSecond() {
	tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: "#second",
			scroller: ".webpage",
			start: "top 70%",
			// markers: true,
			// onUpdate: (self) => console.log(self.direction),
		},
	});
}

function animationForSecond() {
	tl2.to("#second .aa", {
		opacity: 1,
		duration: 1,
		onStart: function () {
			$("#second .aa").textillate({
				selector: ".texts",
				loop: false,
				minDisplayTime: 2000,
				initialDelay: 0,
				autoStart: true,
				in: {
					effect: "fadeInUp",
					delayScale: 1.3,
					delay: 50,
					sync: false,
					shuffle: false,
					reverse: false,
				},
				type: "char",
			});
		},
	});

	tl2.to(
		"#second #line",
		{
			opacity: 1,
			width: "95%",
			duration: 2,
		},
		"+=0.7"
	);

	tl2.to("#scndleft #toppara", {
		opacity: 1,
		duration: 2,
		onStart: function () {
			$("#toppara p").textillate({
				selector: ".texts",
				loop: false,
				minDisplayTime: 2000,
				initialDelay: 0,
				autoStart: true,
				in: {
					effect: "fadeInUp",
					delayScale: 1,
					delay: 30,
					sync: false,
					shuffle: false,
					reverse: false,
				},
				type: "char",
			});
		},
	});

	tl2.to(
		"#scndleft #btmpara",
		{
			opacity: 1,
			duration: 2,
			onStart: function () {
				$("#btmpara").textillate({
					selector: ".texts",
					loop: false,
					minDisplayTime: 2000,
					initialDelay: 0,
					autoStart: true,
					in: {
						effect: "fadeInUp",
						delayScale: 1,
						delay: 30,
						sync: false,
						shuffle: false,
						reverse: false,
					},
					type: "char",
				});
			},
		},
		"+=4.8"
	);

	tl2.to(
		"#second #ellipse",
		{
			opacity: 1,
			duration: 1.5,
			width: "22rem",
			height: "29rem",
			// margin: "8rem auto",
		},
		"-=6.5"
	);

	tl2.to(
		"#ellipse img",
		{
			duration: 3,
			scale: 1.2,
		},
		"-=6.5"
	);
}

function gsapForThird() {
	tl3 = gsap.timeline({
		scrollTrigger: {
			scroller: ".webpage",
			trigger: "#third",
			start: "top 50%",
			// markers: true,
			// onUpdate: (self) => console.log(self.direction),
		},
	});

	tl3.from("#content #firstelem", {
		opacity: 0,
		duration: 1,
		y: 30,
		ease: Expo.easeInOut,
	});

	tl3.from("#content #scndelem", {
		opacity: 0,
		duration: 1,
		y: 30,
		ease: Expo.easeInOut,
	});

	tl3.from("#content #thirdelem", {
		opacity: 0,
		duration: 1,
		y: 30,
		ease: Expo.easeInOut,
	});

	tl3.from("#content #fourthelem", {
		opacity: 0,
		duration: 1,
		y: 30,
		ease: Expo.easeInOut,
	});

	tl3.to(
		"#tleft #tleftimg",
		{
			opacity: 1,
			duration: 2,
			y: -20,
			ease: Expo.easeInOut,
		},
		"-=3"
	);

	tl3.to(
		"#tleftimg img",
		{
			duration: 2,
			scale: 1.5,
		},
		"-=3"
	);
}

gsapForMain();
textillateForMain();
gsapForSecond();
animationForSecond();
gsapForThird();
