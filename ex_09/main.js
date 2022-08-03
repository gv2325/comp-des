console.log('this works')

const input = document.querySelector('input')
const button = document.querySelector('button')

function getBookData(isbn){
    console.log(isbn)
    let BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`

    fetch(BOOKS_URL)
    .then(response => response.json())
    .then(data => {
        let result = data.items[0].volumeInfo;

        let image = document.createElement('img');
        let title = document.createElement('h2');
        let description = document.createElement('p');

        title.textContent = result.title;
        image.setAttribute('src', result.imageLinks.thumbnail);

        bookContainer.appendChild(title);
        bookContainer.appendChild(image);
        description.textContent = result.description;
    });
}

function getIsbn(event){
    event.preventDefault()
    let isbn = input.value
    getBookData(isbn)
}

button.addEventListener('click', getIsbn)