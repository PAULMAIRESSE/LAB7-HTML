document.addEventListener('DOMContentLoaded', function () {
    // get page-content element
    var pageContent = document.getElementById('page-content');

    // fetch data from json file
    api_url = 'https://paulmairesse.github.io/JSON-EXEMPLE/toronto_climbing_locations.json';

    const data = fetch(api_url).then((response) => response.json()).then((data) => {
        data?.locations.forEach((location) => {
            console.log(location);
            // create a card element
            var card = document.createElement('div');
            card.classList.add('card');

            // create a card-body element
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // create a card-title element
            var cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = location.name;

            // create a card-text element for the address and the phone number
            var cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.innerHTML = '<i class="bi bi-geo-alt-fill"></i>' + location.address + '<br>' + '<i class="bi bi-telephone-fill"></i>' + location.phone;

            // create a card-link element
            var cardLink = document.createElement('a');
            cardLink.classList.add('card-link');
            cardLink.setAttribute('href', location.website);
            cardLink.setAttribute('target', '_blank');

            // create a card-img element
            var cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.setAttribute('src', location.image_url);

            // create a list-group element
            var listGroupHeader = document.createElement('h5');
            listGroupHeader.classList.add('list-group-header');
            listGroupHeader.textContent = 'Schedule';

            var listGroup = document.createElement('ul');
            listGroup.classList.add('list-group');
            listGroup.classList.add('list-group-flush');

            // add schedule to the list-group
            // schedule is an object with keys as days and values as hours
            var schedule = location.schedule;
            for (var day in schedule) {
                var listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = day + ': ' + schedule[day];
                listGroup.appendChild(listItem);
            }

            // add all the elements to the card
            cardLink.appendChild(cardImg);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(listGroupHeader);
            cardBody.appendChild(listGroup);
            card.appendChild(cardLink);
            card.appendChild(cardBody);

            // add the card to the page-content element
            pageContent.appendChild(card);
        });
    });
});
