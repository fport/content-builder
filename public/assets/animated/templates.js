var data_templates = {
    name: 'Animated Sections',
    categories: [
        { id: 1, name: 'Animated' }, 
    ],
    designs: [

		{
		    'thumbnail': 'preview/anim-01.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-700 leading-14 size-18">
							<div class="row clearfix">
								<div class="column full text-center" style="min-height: 127.422px;">
									<h1 class="size-124 leading-none font-medium" data-bottom-top="transform: scale(0.8);" data-center="transform: scale(1);"></h1>
									<h1 class="heading1 text-anim1 normal-case size-60 leading-none" data-bottom-top="transform: scale(0.9);" data-center="transform: scale(1);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(1.2);">Crafter with Precision &amp; Detail.</h1>
								</div>
							</div>
							<div class="row">
								<div class="text-center column full" style="overflow: hidden; min-height: 54px;">
									<p data-bottom-top="transform: scale(0.9);" data-center="transform: scale(1);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(1.2);">We design stunning websites that really work.</p>
									<div class="spacer height-20"></div><img src="[%IMAGE_PATH%]images/pexels-karolina-grabowska-439775.jpg" alt="" data-bottom-top="transform: translateY(400px);" data-center-top="transform: translateY(0px);" data-center-bottom="transform: translateY(0px) scale(1);" data-top-bottom="transform: translateY(400px) scale(0.8);">
								</div>
							</div>
							<div class="row clearfix">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-center">
									<div>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-175" title="" style="color: rgb(0, 0, 0);">Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},


		{
		    'thumbnail': 'preview/anim-04.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins m-skrollrr-off">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-800" data-bottom-top="transform: translateX(200px) scale(0.5);" data-center="transform: translateX(0px) scale(1);">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-100 font-medium"></h1>
											<h1 class="normal-case size-96 font-semibold leading-none">Designing and building highly-crafted brands and websites.</h1>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6" data-bottom-top="transform: scale(2);" data-center="transform: scale(1);">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-rachel-claire-54903372.jpg&quot;); background-position: 50% 60%;" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-16 leading-12 is-content-500">
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},
		
		/*
		{
		    'thumbnail': 'preview/anim-03.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 leading-14 size-18 is-content-1800">
							<div class="row clearfix">
								<div class="flex flex-col justify-center items-start column third" style="width: 100%;">
									<h1 class="normal-case font-normal size-54" data-bottom-top="transform: translateX(200px) scale(0.5);" data-bottom="transform: translateX(0px) scale(1);">Designing and building highly-crafted brands and websites.</h1>
									<div class="spacer height-80"></div>
									<div data-bottom-top="transform: translateX(75px) scale(0.5);" data-bottom="transform: translateX(0px) scale(1);">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125">Get Started</a>
									</div>
								</div>
								<div class="column third" style="width: 11.2507%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 47.5144%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/pexels-karolina-grabowska-439775.jpg" alt="" data-bottom-top="transform: scale(2);" data-center="transform: scale(1);"></div>
							</div>
							<div class="row clearfix">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row clearfix">
								<div style="width: 29.9843%; flex: 0 0 auto;" class="column third">
									<div class="spacer height-80"></div>
								</div>
								<div style="width: 39.8221%; flex: 0 0 auto;" class="column third">
									<p data-bottom-top="transform: translateX(75px) scale(0.9);" data-center="transform: translateX(0px) scale(1);">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
								</div>
								<div class="column third" style="width: 18.786%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		{
		    'thumbnail': 'preview/anim-06.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-content-top is-dark-text type-poppins" style="background-color: rgb(150, 150, 150); transform: translate3d(1e-05px, 1e-05px, 1e-05px);" data-section="section-Ki7GT3M">
				<div class="is-overlay">
					<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
						<div class="section-{id}"></div>
			
						<script>
							var skrollrrReady = function(fn) {
								var stateCheck = setInterval(function() {
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
									clearInterval(stateCheck);
									try {
										fn()
									} catch (e) {}
								}, 1);
							};
							skrollrrReady(function() {
			
								let se = document.querySelector('.section-{id}').closest('.is-section');
								se.setAttribute('data-section', 'section-{id}');
								let overlay = se.querySelector('.is-overlay');
								overlay.style.transform = '';
			
								let wrapper = document.querySelector('.is-wrapper');
								const clientHeight = se.clientHeight;
								skrollrr.lax.addElements('[data-section=section-{id}]', {
			
								}, {
									onUpdate: function(driverValues, domElement) {
			
										let adj = wrapper.getBoundingClientRect().top + window.pageYOffset;
										let offsetTop = se.offsetTop - adj;
						
										const scrollY = driverValues.scrollY[0];
						
										if (scrollY >= offsetTop && scrollY <= offsetTop + clientHeight) {
											let n = (scrollY - offsetTop);
											let percentage = n / clientHeight;
											overlay.style.transform = 'translateY(' + n + 'px) scale(' + (1 + percentage / 2) + ')';
										} else {
											overlay.style.transform = 'translateY(0) scale(1)';
										}
									}
								});
			
								skrollrr.refresh();
							});
						</script>
					`)}" style="z-index: 1;">
						
					</div>
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-439775.jpg&quot;); background-position: 50% 60%;">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-top edge-y-3">
						<div class="is-container v2 size-17 leading-12 is-content-900" data-bottom-top="transform: scale(0.7);" data-center="transform: scale(1);" data-50-top="transform: scale(1);" data-top-bottom="transform: scale(0.7);">
							<div class="row">
								<div class="column full text-center" style="min-height: 132.04px;">
									<h1 class="size-124 leading-none font-medium">effortless</h1>
								</div>
							</div>
							<div class="row">
								<div class="text-center column full">
									<p>We design stunning websites that really work.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-center">
									<div>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-175" title="" style="color: rgb(0, 0, 0);">Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		*/
		{
		    'thumbnail': 'preview/anim-08.png',
		    'category': '1',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-box is-section-100 type-montserrat-roboto">
				<div class="is-overlay">
					<div class="is-overlay-bg is-scale-animated" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-7303914.jpg&quot;); background-position: 50% 60%; height: 103.757%; top: -2.25443%; left: 0%; width: 100%;" data-y="-2.2544283413848603" data-x="0" data-scale="103.75738056897477"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-right edge-x-2 is-content-900 size-17 leading-12">
							<div class="row">
								<div class="column full">
									<h1 class="size-24" data-bottom-top="transform: scale(0.6);" data-bottom="transform: scale(1);" data-50-top="transform: translateX(0px) scale(1);" data-top-bottom="transform: translateX(-125px) scale(0.5);">for your love for</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="leading-none tracking-tight size-168 font-extrabold" data-bottom-top="transform: scale(0.8);" data-bottom="transform: scale(1);" data-50-top="transform: translateX(0px) scale(1);" data-top-bottom="transform: translateX(-125px) scale(0.5);">home.</h1>
								</div>
							</div>
							<div class="row clearfix">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 31.3539%; flex: 0 0 auto;" class="column third" data-bottom-top="transform: scale(0.7);" data-center-top="transform: scale(1);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(0.5);">
									<p>Making every piece of furniture extraordinary.<br>Feel at home, relax your mind.</p>
								</div>
								<div style="width: 100%;" class="column third">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 100%;" data-bottom-top="transform: scale(0.7);" data-center-top="transform: scale(1);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(0.5);">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-right">
									<div data-bottom-top="transform: translateX(100px) scale(0.8);" data-center-top="transform: translateX(0px) scale(1);" data-center-bottom="transform: translateX(0px) scale(1);" data-top-bottom="transform: translateX(150px) scale(0.5);">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125" title="">Start Shopping</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		/*
		{
		    'thumbnail': 'preview/anim-09.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins" data-anim-start="" data-anim-end="">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-7303914.jpg&quot;); background-position: 50% 60%;"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-700 leading-14 size-18 is-content-right edge-x-4" data-bottom-top="transform: translateY(125px) scale(0.9);" data-center="transform: translateY(0px) scale(1);" data-center-bottom="transform: translateY(0px) scale(1);" data-top-bottom="transform: translateY(800px) scale(0.5);">
							<div class="row">
								<div class="column full">
									<h1 class="font-semibold text-center leading-none size-84">Keep Everything Simple.</h1>
									<div class="spacer height-20"></div>
									<p class="size-14 text-center"><span class="italic">Russel Y. Trevino </span></p>
								</div>
							</div>
							<div class="row clearfix">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row clearfix">
								<div class="column full">
									<p>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		*/
		{
		    'thumbnail': 'preview/anim-10.png',
		    'category': '1',
		    'contentCss': 'type-dosis-oldstandardtt.css',
		    'contentClass': 'type-dosis-oldstandardtt',
		    'html': `
			<div class="is-section is-section-100 type-dosis-oldstandardtt">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-4 is-content-top">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-73039090.jpg&quot;); background-position: 50% 60%; transition: all 0.6s ease-out 0s; width: 105.338%; left: -5%; top: 0%; height: 100%; transform: translate3d(1e-05px, -66px, 1e-05px) scale(1.003);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-x="-5" data-y="0" data-scale="105.33769063180827"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-2">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full">
											<h1 class="size-104" data-bottom-top="transform: translateX(-75px) translateY(-75px) scale(0.5);" data-center="transform: translateX(0px) translateY(0px) scale(1);">01</h1>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<h2 class="size-32" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);">Product Name</h2>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(150px);" data-center="transform: translateY(0px);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer.</p>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(200px);" data-center="transform: translateY(0px);"><a href="#" title="" class="font-semibold">View Details</a></p>
										</div>
			
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-4 is-content-top">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-7303798.jpg&quot;); background-position: 50% 60%; transition: all 0.6s ease-out 0s; width: 105.338%; left: -4%; transform: translate3d(1e-05px, -66px, 1e-05px) scale(1.003);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-x="-4"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-2">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full">
											<h1 class="size-104" data-bottom-top="transform: translateX(-75px) translateY(-75px) scale(0.5);" data-center="transform: translateX(0px) translateY(0px) scale(1);">02</h1>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<h2 class="size-32" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);">Product Name</h2>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(150px);" data-center="transform: translateY(0px);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer.</p>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(200px);" data-center="transform: translateY(0px);"><a href="#" title="" class="font-semibold">View Details</a></p>
										</div>
			
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-4 is-box is-dark-text is-content-top">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-6634284.jpg&quot;); background-position: 50% 60%; transition: all 0.6s ease-out 0s; width: 105.338%; left: -2.66885%; top: 0%; height: 100%; transform: translate3d(1e-05px, -66px, 1e-05px) scale(1.003);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-x="-2.668845315904136" data-y="0" data-scale="105.33769063180827"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-2">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full">
											<h1 class="size-104" data-bottom-top="transform: translateX(-75px) translateY(-75px) scale(0.5);" data-center="transform: translateX(0px) translateY(0px) scale(1);">03</h1>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<h2 class="size-32" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);">Product Name</h2>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(150px);" data-center="transform: translateY(0px);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer.</p>
										</div>
			
									</div>
									<div class="row">
										<div class="column full">
											<p data-bottom-top="transform: translateY(200px);" data-center="transform: translateY(0px);"><a href="#" title="" class="font-semibold">View Details</a></p>
										</div>
			
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		{
		    'thumbnail': 'preview/anim-11.png',
		    'category': '1',
		    'contentCss': 'type-oswald-biryani.css',
		    'contentClass': 'type-oswald-biryani',
		    'html': `
			<div class="is-section is-box is-section-100 type-oswald-biryani is-light-text">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-7303914.jpg&quot;); background-position: 50% 60%;">
						<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 leading-14 size-18 is-content-1600" data-bottom-top="transform: translateX(-60%);" data-center="transform: translateX(0px);">
							<div class="row clearfix">
								<div class="column full">
									<h1 class="title-anim text-center size-200 font-thin leading-none" style="text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px;">We create simple and effective designs.</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},
		{
		    'thumbnail': 'preview/anim-12.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-light-text type-raleway-lato is-section-100">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-4207790-2.jpg&quot;); background-position: 50% 60%;" data-in="transform: scale(1);" data-cen="transform: translateY(0px);" data-out="transform: translateY(100%) scale(1.4);" data-smooth-scrolling="off">
						<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
					</div>
				</div>
			</div>
		`},
		/*
		{
		    'thumbnail': 'preview/anim-13.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box type-poppins is-section-100">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 leading-14 size-18 is-content-1600">
							<div class="row">
								<div class="column full pt-8">
									<h1 class="text-center size-76" data-bottom-top="transform: scale(0.5);" data-center="transform: scale(1);"></h1>
									<h1 class="normal-case text-center size-96 font-semibold leading-11" data-bottom-top="transform: scale(0.8);" data-center="transform: scale(1);">Designing and building highly-crafted brands and websites.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row" data-bottom-top="transform: scale(0.7);" data-bottom="transform: scale(1);">
								<div style="width: 20.8771%; flex: 0 0 auto;" class="column third">
									<div class="spacer height-80"></div>
								</div>
								<div style="width: 100%;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third" style="width: 20.0741%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full pb-16">
									<h1 class="normal-case text-center size-96 font-semibold leading-11 underline" data-bottom-top="transform: translateY(50px);" data-center="transform: translateY(0px);">get in touch</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},
		*/

		{
		    'thumbnail': 'preview/anim-14.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
				<div class="is-section section-pin is-box is-dark-text type-poppins is-section-100 m-skrollrr-off">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container is-content-1400 v2 size-19 leading-12">
								<div class="row">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row clearfix">
									<div class="column full" data-top-bottom="transform: translateX(0px);" data-bottom-top="transform: translateX(-30%);">
										<p class="size-24 leading-none">Our</p>
										<h2 class="size-48 font-semibold size-48 is-title-lite leading-none">GALLERY</h2>
									</div>
								</div>
								<div class="row clearfix">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row clearfix">
									<div class="column third" data-bottom-top="transform: translateX(20%);" data-top-bottom="transform: translateX(0px);">
										<img alt="" src="[%IMAGE_PATH%]images/pexels-monica-turlui-821837-editRWt31PH.jpeg">
										<h3 class="leading-none"><span class="italic size-32">01</span></h3>
										<p>Lorem Ipsum is simply dummy text.</p>
									</div>
									<div class="column third" style="min-height: 557.517px;" data-bottom-top="transform: translateX(40%);" data-top-bottom="transform: translateX(0px);">
										<img alt="" src="[%IMAGE_PATH%]images/elena-putina-7b9BA_BFgcM-unsplash-editeH0HP0u.jpeg">
										<h3 class="leading-none"><span class="italic size-32">02</span></h3>
										<p>Lorem Ipsum is simply dummy text.</p>
									</div>
									<div class="column third" data-bottom-top="transform: translateX(60%);" data-top-bottom="transform: translateX(0px);">
										<img alt="" src="[%IMAGE_PATH%]images/pexels-martin-pechy-1866149800-editvDWSVfX.jpeg">
										<h3 class="leading-none"><span class="italic size-32">03</span></h3>
										<p>Lorem Ipsum is simply dummy text.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		},

		{
		    'thumbnail': 'preview/anim-16.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
				<div class="is-section section-pin is-section-100 is-box is-align-left type-poppins m-skrollrr-off">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 size-16 leading-13 is-content-1600">
								<div class="row clearfix">
									<div class="column full">
										<h2 class="size-48 leading-none" data-top-bottom="transform: translateX(0px);" data-bottom-top="transform: translateX(-40%);">Portfolio</h2>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row clearfix">
									<div class="column fifth delay-300ms" data-bottom-top="transform: translateX(-100%);" data-top-bottom="transform: translateX(0px);">
										<h3 class="tracking-wider size-24 font-semibold">Project One</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
										<img src="[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg" alt="">
									</div>
									<div class="column fifth delay-600ms" data-bottom-top="transform: translateX(-80%);" data-top-bottom="transform: translateX(0px);">
										<h3 class="tracking-wider size-24 font-semibold">Project Two</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
										<img src="[%IMAGE_PATH%]images/pexels-angela-roma-7319094-editFwaP6cp.jpeg" alt="">
									</div>
									<div class="column fifth delay-900ms" data-bottom-top="transform: translateX(-60%);" data-top-bottom="transform: translateX(0px);">
										<h3 class="tracking-wider size-24 font-semibold">Project Three</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
										<img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt="">
									</div>
									<div class="column fifth delay-1200ms" data-bottom-top="transform: translateX(-40%);" data-top-bottom="transform: translateX(0px);">
										<h3 class="tracking-wider size-24 font-semibold">Project Four</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
										<img src="[%IMAGE_PATH%]images/frank-flores-BAf3g-id7P4-unsplash-editHCGGfSS.jpeg" alt="">
									</div>
									<div class="column fifth delay-1500ms" data-bottom-top="transform: translateX(-20%);" data-top-bottom="transform: translateX(0px);">
										<h3 class="tracking-wider size-24 font-semibold">Project Five</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
										<img src="[%IMAGE_PATH%]images/pexels-ksenia-chernaya-3965520-editWV08OYD.jpeg" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		},

		{
		    'thumbnail': 'preview/anim-15.png',
		    'category': '1',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
				<div class="is-section section-pin is-section-100 type-spacemono">
					<div class="is-boxes">
						<div class="is-box is-box-6">
							<div class="is-overlay">
							</div>
							<div class="is-boxes">
								<div class="is-box-centered">
									<div class="is-container v2 is-content-820 size-16 leading-none">
										<div class="row">
											<div class="column full">
												<h1 class="leading-11 size-88" data-400-bottom="transform: translateY(-100%);" data-center="transform: translateY(0px);">With Less Stuff and More Compassion</h1>
											</div>
										</div>
										<div class="row">
											<div class="column full">
												<div class="spacer height-60"></div>
											</div>
										</div>
										<div class="row">
											<div class="column half" style="width: 47.1279%; flex: 0 0 auto;">
												<p data-bottom-top="transform: translateX(-50%);" data-center="transform: translateX(0px);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
													when an unknown printer took a galley of type.</p>
											</div>
											<div class="column half" style="width: 100%;">
												<div class="spacer height-40"></div>
											</div>
										</div>
										<div class="row">
											<div class="column full">
												<div class="spacer height-80"></div>
											</div>
										</div>
										<div class="row">
											<div class="column full">
												<div class="text-right button-group" data-bottom-top="transform: translateY(50%);" data-center="transform: translateY(0px);">
													<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 font-normal leading-relaxed border-transparent hover:border-transparent px-11 rounded-full tracking-125" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(233,2,0)" style="background-color: rgb(233, 2, 0); color: rgb(255, 255, 255);" title="">Get a Quote</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="is-box is-box-6 is-content-top is-light-text" data-top-bottom="transform: scale(0.9);" data-bottom-top="transform: scale(0.3);">
							<div class="is-overlay">
								<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/StockSnap_6NYVPE6NEB-6.jpg&quot;);">
									<div class="is-overlay-color opacity-2"></div>
								</div>
							</div>
							<div class="is-boxes">
								<div class="is-box-centered is-content-top edge-y-2">
									<div class="is-container v2 is-content-left edge-x-1 is-content-320">
										<div class="row">
											<div class="column full">
												<p class="leading-12">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		},

		{
			'thumbnail': 'preview/anim-18.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-box is-section-100 type-poppins section-pin is-align-center is-content-top">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-ksenia-chernaya-76950380.jpg&quot;); background-position: 50% 60%; height: 204.754%; top: -69%;" data-y="-69"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-top edge-y-8">
						<div class="is-container v2 leading-14 size-18 is-content-1200">
							<div class="row clearfix">
								<div class="column full">
									<h1 class="normal-case font-semibold leading-11 size-80" style="color: rgb(0, 0, 0);" data-cen-150="transform: scale(1) rotate(0);" data-out--150="transform: scale(20);" data-out="transform: scale(1) rotate(-360);">Designing and building highly-crafted brands and websites.</h1>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
			`
		},

		{
			'thumbnail': 'preview/anim-19.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-box is-section-100 type-poppins section-pin pin-space-20 is-light-text">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-7303914.jpg&quot;); background-position: 50% 60%;"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 leading-14 size-18 is-content-1000">
							<div class="row clearfix">
								<div class="column full" style="min-height: 215.85px; width: 100%; flex: 0 0 auto;">
									<h1 class="normal-case font-semibold leading-11 size-76 text-center" data-smooth-scrolling="off" data-in="transform: translateX(-100%);" data-cen--150="transform: translateX(0px) scale(1);" data-out--300="transform: scale(5);" data-out="transform: scale(1);" style="text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px;">Everything you need to create beautiful pages and share your stories.</h1>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
			'thumbnail': 'preview/anim-17.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
				<div class="is-section is-box is-section-100 type-poppins section-wide-250 section-pin">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered is-opacity-95">
							<div class="is-container v2 leading-14 size-18 is-content-none is-content-left edge-x-3" data-cen="transform: translateX(0px);" data-out="transform: translateX(-120%);" m-data-out="transform: translateX(-440%);">

								<div class="row clearfix">
									<div class="flex flex-col justify-center items-start column sixth pr-16" style="width: 19.8442%; flex: 0 0 auto;">
										<h1 class="normal-case size-96 font-semibold leading-none">With Less Stuff and More Compassion</h1>
										<div class="spacer height-20"></div>
										<p class="size-19" style="max-width: 700px;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										<div class="spacer height-40"></div>
										<div style="white-space: nowrap;">
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-1 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125">Read More</a>
										</div>
									</div>
									<div class="column sixth" style="width: 12.526%; flex: 0 0 auto;">
										<img src="[%IMAGE_PATH%]images/pexels-cup-of-couple-7657861.jpg" alt="" data-filename="pexels-cup-of-couple-7657861.jpg">
									</div>
									<div class="column sixth" style="width: 12.5449%; flex: 0 0 auto;">
										<img src="[%IMAGE_PATH%]images/pexels-cup-of-couple-7303798.jpg" alt="" style="width: 100%; height: auto;">
									</div>
									<div class="column sixth" style="width: 12.5449%; flex: 0 0 auto;">
										<img src="[%IMAGE_PATH%]images/pexels-anna-nekrashevich-7214930.jpg" alt="" data-filename="pexels-anna-nekrashevich-7214930.jpg">
									</div>
									<div class="column sixth" style="width: 12.5638%; flex: 0 0 auto;">
										<img src="[%IMAGE_PATH%]images/pexels-cup-of-couple-73039090.jpg" alt="">
									</div>
									<div class="column sixth" style="width: 12.5638%; flex: 0 0 auto;">
										<img src="[%IMAGE_PATH%]images/pexels-cottonbro-9120824.jpg" alt="" data-filename="pexels-cottonbro-9120824.jpg" style="width: 100%; height: auto;">
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			`
		},

	]
};

try {
    template_list.push(data_templates);
} catch(e) {
    //
}