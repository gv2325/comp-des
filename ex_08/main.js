console.log('this sorta works')

//defintion 
function getBookData(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439')
    .then(response => response.json())
    .then(data => {
        let books = data;

        console.log(books.item[0].volumeInfo.title);
});
}

getBookData()