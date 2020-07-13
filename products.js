// created a XMLHttpRequest 
let request = new XMLHttpRequest();
// request for json data
request.open('GET','./products.json');
// set responsetype
request.responseType = 'json';
// send the request
request.send();


request.onload = function(){
	// getting response
    let json = request.response;
	// adding data to function to print
    weirdDeals(json);
};

function weirdDeals(json)
{
		// getting topDeals list
	    let topDeals = json.weirdDeals;
		let list = document.getElementById('weirdDeals');
		for (let i = 0; i < topDeals.length; i++) {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        img.setAttribute('src', './images/' + topDeals[i].image);
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        h3.textContent = topDeals[i].name;
        p1.textContent = 'Price ' + topDeals[i].price;
        p2.textContent = 'Features are  ' + topDeals[i].features;
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p1);
        li.appendChild(p2);
        list.appendChild(li);
    }
}