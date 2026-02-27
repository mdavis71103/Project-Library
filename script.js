const myLibrary = [];

class Book {
    constructor(cover, title, description, read, id) {
        this.cover = cover;
        this.title = title;
        this.description = description;
        this.read = read;
        this.id = id;
    }
}

function createCard(book) {

    const newCard = document.createElement('div');
    newCard.classList.add('card');


    const cover = document.createElement('img');
    cover.src = book.cover;
    const title = document.createElement('h2')
    title.textContent = book.title;
    const description = document.createElement('p')
    description.textContent = book.description;
    const id = document.createElement('p')
    id.textContent = `ID: ${book.id}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container')
    const readButton = document.createElement('button');
    if(book.read === true){
        readButton.textContent = "Read"
    } else {readButton.textContent = "Unread"};

    readButton.addEventListener('click', 
        function(event) {
            if(this.textContent === "Read") {
                this.textContent = "Unread";
            }else {this.textContent = "Read"}
        }
    );

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', 
        function(event) {
            if(confirm(
                "Are you sure you want to remove this book from your library?")) {
                    console.log(this.parentElement.parentElement.remove());
            }
        }
    )

    buttonContainer.append(readButton, deleteButton);

    newCard.append(cover, title, description, id, buttonContainer);

    return newCard;
    
}

function addBookToLibrary(cover, title, description, read) {
    //Adds new book to library and displays it
    const cardContainer = document.getElementsByClassName('container');

    var Id = crypto.randomUUID();
    let newBook = new Book(
        cover,
        title,
        description,
        read,
        Id
    );

    myLibrary.push(newBook);

    const bookCard = createCard(newBook);
    cardContainer[0].appendChild(bookCard);

}


function showForm() {
    const addBookForm = document.getElementsByClassName('form-container');
    addBookForm[0].style.display = "block";

}

function hideForm() {
    const addBookForm = document.getElementsByClassName('form-container');
    addBookForm[0].style.display = "none";
}

function addBookForm() {
    const addBookForm = document.getElementById("addBookForm");
    let bookInfo = []


    addBookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const arr = document.getElementsByClassName('addBookFormData');

        addBookToLibrary(arr.cover.value, arr.title.value, arr.description.value, arr.read.checked);
        Array.from(arr).forEach(input => input.value = "");
        arr.read.checked = false;
        hideForm();
    })
}

function seedLibrary(){

    addBookToLibrary(
        "https://images.penguinrandomhouse.com/cover/9780375869945",
        "The Wizard of Oz",
        "Dorthy follows the yellow brick road on an adventure, meeting friends along with way.",
        false
    );


    addBookToLibrary(
        "https://upload.wikimedia.org/wikipedia/en/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg",
        "Project Hail Mary",
        "An amnesiac astronaut, Ryland Grace, who wakes up alone on a spaceship with two dead crewmates and must piece together his mission to save Earth from an extinction-level threat.",
        false
    );

    addBookToLibrary(
        "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png",
        "Cat in the Hat",
        "A tall, mischievous cat who visits two children on a rainy day, causing chaos with his friends Thing 1 and Thing 2, much to the dismay of the family's fish.",
        true
    );

    addBookToLibrary(
        "https://m.media-amazon.com/images/I/91kBQf9rfqL._UF1000,1000_QL80_.jpg",
        "The Name of the Wind",
        "The coming-of-age story of the legendary figure Kvothe through his own first-person narration, detailing his childhood, his time as an orphan, and his entry into a magical university.",
        false
    );

    addBookToLibrary(
        "https://m.media-amazon.com/images/I/81XbhUrUsBL._UF1000,1000_QL80_.jpg",
        "Dungeon Crawler Carl",
        "A man and his ex-girlfriend's cat are forced to survive a deadly, intergalactic reality TV show dungeon crawl after Earth is destroyed",
        false
    );

}


seedLibrary();

addBookForm();




