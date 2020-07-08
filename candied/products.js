const template = document.querySelector('#myTemplate').content;
let snackbar = document.querySelector('#snackbarCakes');
let btnBasket = document.querySelector('.btnBasket');
let popup = document.querySelector('.snack1');

const productListLink =
	'https://spreadsheets.google.com/feeds/list/1RE76sRsyktVIq6FLfKUIfNqtGYCq593ubbXJo8DdMlM/od6/public/values?alt=json ';
function loadJSON(link) {
	fetch(productListLink).then((e) => e.json()).then((data) => data.feed.entry.forEach(displayProducts));
}

function displayProducts(products) {
	const clone = template.cloneNode('true');
	clone.querySelector('img').setAttribute('src', `img-products/${products.gsx$img.$t}`);
	clone.querySelector('#category').textContent = products.gsx$category.$t;
	clone.querySelector('#name').textContent = products.gsx$name.$t;
	clone.querySelector('#price').textContent = products.gsx$price.$t;
	clone.querySelector('#link').setAttribute('href', `${products.gsx$link.$t}`);

	clone.querySelector('button').addEventListener('click', () => {
		popup.classList.add('show');
		/*setTimeout(function() {
			popup.snackbar = popup.snackbar.replace('show', '');
		}, 3000);*/
	});

	if (products.gsx$category.$t === 'cakes') {
		document.querySelector('#cakes').appendChild(clone);
		/* }else if (products.gsx$category.$t === 'chocolate') {
		document.querySelector('#chocolate').appendChild(clone);
	} else if (products.gsx$category.$t === 'pies') {
		document.querySelector('#pies').appendChild(clone);
	} else if (products.gsx$category.$t === 'pastry') {
		document.querySelector('#pastry').appendChild(clone);
	} else {
		document.querySelector('#other').appendChild(clone);*/
	}
}

loadJSON(productListLink);
