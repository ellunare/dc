// alert('asd');

const App = (function () {

	return {
		init: function () {

			const
				camera = document.querySelector('#camera'),
				ramka = document.querySelector('.ramka'),
				imgs = document.querySelector('.imgs'),
				bodyText = document.querySelector('.text'),
				tagList = document.querySelector('#tags')
				;

			let tagId = 1;

			camera.addEventListener('change', updateImageDisplay);

			function updateImageDisplay() {
				const curFiles = camera.files;

				for (let i = 0; i < curFiles.length; i++) {
					let image = document.createElement('img');
					image.src = window.URL.createObjectURL(curFiles[i]);

					imgs.appendChild(image);
				}
			}

			ramka.addEventListener('click', addTag);
			ramka.addEventListener('touchstart ', addTag);


			function addTag(e) {
				console.log(e);
				e.preventDefault();
				e.stopPropagation();

				if (e.target.parentElement.parentElement.classList.contains('ramka')) {
					if (!e.srcElement.classList.contains('tag')) {
						tagX = e.clientX + e.target.parentElement.parentElement.scrollLeft;
						tagY = e.layerY;
						console.log(tagX, tagY);
						bodyText.innerText = `${tagX} - ${tagY}`;

						drawTag(tagX, tagY);
					}
				}

			}

			function drawTag(x, y) {
				const tag = document.createElement('div');
				tag.classList.add('tag');
				tag.style.marginLeft = (x - 10) + 'px';
				tag.style.marginTop = (y - 10) + 'px';

				const min = 0;
				const max = 9;

				function rand() {
					return (Math.random() * (max - min) + min).toFixed();
				}

				tag.style.backgroundColor =
					'#' +
					rand() +
					rand() +
					rand() +
					rand() +
					rand() +
					rand()
					;

				tag.innerText = tagId++;

				tagList.insertAdjacentElement('beforeend', tag);

			}



		} // init

	} // return

})();

App.init();
