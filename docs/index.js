function firstOffer() {
    document.getElementById('offer-title').innerText = "Seafood Lo Mein";
    document.getElementById('offer-desc').innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio modi commodi ipsam iure porro sed aliquid autem maiores reiciendis, repellat id at, cum quis quia fugiat amet tenetur. Obcaecati.";
    document.getElementById('offer-price').innerText = "£7.50";
}

function secondOffer() {
    document.getElementById('offer-title').innerText = "Beef Chow Mein";
    document.getElementById('offer-desc').innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio modi commodi ipsam iure porro sed aliquid autem maiores reiciendis, repellat id at, cum quis quia fugiat amet tenetur. Obcaecati.";
    document.getElementById('offer-price').innerText = "£6.50";
}

function thirdOffer() {
    document.getElementById('offer-title').innerText = "Starter Snack Mix";
    document.getElementById('offer-desc').innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio modi commodi ipsam iure porro sed aliquid autem maiores reiciendis, repellat id at, cum quis quia fugiat amet tenetur. Obcaecati.";
    document.getElementById('offer-price').innerText = "£5.00";
}

var burger_checkbox = document.getElementById('burger');
var navbar = document.querySelector('.mobile-navbar');

burger_checkbox.addEventListener("change", function() {
    navbar.classList.toggle('active')
});

