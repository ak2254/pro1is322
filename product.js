



const cards = [
    {title: "Alstroemerias", image: "images/104735alt_view1.jpg", price: 9.99},

    { title: "Calla Lilies", image: "images/F87A5042-300x200.jpg", price: 10.00 },

    {title: "Daisies", image: "images/160080m-274x300.jpg", price: 60.00},

    {title: "Gardenias", image: "images/Gardenia-Plant-274x300.jpg", price: 75.00},

    {title: "Gerbera Daisies", image: "images/20170421013007_file_58f9609fd03ef.jpg ", price: 40.00},

    {title: "Lilies", image: "images/lilies-7-600x900.jpg", price: 55.00},

    {title: "Roses", image: "images/red-roses-5-300x200.jpg", price: 80.00},

    {title: "Peonies", image: "images/147143stjv3-274x300.jpg ", price: 75.00},
];

function renderList (results) {
    var tableBody = document.querySelector('#cards');

    // clear out inner HTML to get rid of any older results
    tableBody.innerHTML = '';
    // Map each database record to a string containing the HTML for it's row
    var tableRows = results.map((result)  =>
        `<div class="card" style="width: 260px ">
        <img src=${result.image} style=" height: 200px; width: 260px;">
        <h1>${result.title}</h1> 
        <p class ="price">  $${result.price} </p>
        <p><button>Add to Cart</button></p>
        </div> `)


    // Set the contents of the table body to the new set of rendered HTML rows
    tableRows.forEach((k) => {
        tableBody.innerHTML += k;
    });


}

renderList(cards);
