
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







function orderBy(sortValue) {
    var sortedResults;
if (sortValue === 'asc-name') {
    sortedResults = cards.sort(function (a, b) {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        var quest = nameA<nameB;
        if (quest) {
            return -1;
        }
        else {
            return 1;
        }
    });
} else {
    sortedResults = cards.sort(function (a, b) {
        return a[sortValue] - b[sortValue];
    });
}
renderList(sortedResults);
}
document.querySelector('#orderBy').addEventListener('change', function(event){
    orderBy(event.target.value);
});






function orderdec(sortValue) {
    var sortedResults;
    if (sortValue === 'dsc-name') {
        sortedResults = cards.sort(function (a, b) {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            var question = nameA>nameB;
            if (question) {
                return -1;
            }
            else{
                return 1;
            }
        });
    } else {
        sortedResults = cards.sort(function (a, b) {
            return a[sortValue] - b[sortValue];
        });
    }
    renderList(sortedResults);
}
document.querySelector('#orderBy').addEventListener('change', function(event){
    orderdec(event.target.value);
});



function PriceRange (price) {
    var priceRanges = {cheap: [1, 20], medium:[21, 40], expensive:[40, 60], exexpensive: [60, 200]};
    var range = priceRanges[price];
    var Results = cards.filter(function (row) {
        var k = row.price > range[0];
        var j = row.price< range[1];
        return k && j;
    });
    if(!priceRanges){
        return renderList(cards);
    }

    renderList(Results);
}
document.querySelector('#priceRange').addEventListener('change', function (event) {
    PriceRange(event.target.value);
});




