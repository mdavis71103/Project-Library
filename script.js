const myLibrary = [];
const cardContainer = document.getElementsByClassName('container');

function Book(cover, title, description, read, id) {
    this.cover = cover;
    this.title = title;
    this.description = description;
    this.read = read;
    this.id = id;
}

function createCard(book) {

    const newCard = document.createElement('div');
    cardContainer[0].appendChild(newCard);
    newCard.classList.add('card');


    const cover = document.createElement('img');
    cover.src = book.cover;
    newCard.appendChild(cover);
    const title = document.createElement('h2')
    title.textContent = book.title;
    newCard.appendChild(title);
    const description = document.createElement('p')
    description.textContent = book.description;
    newCard.appendChild(description);
    const id = document.createElement('p')
    id.textContent = `ID: ${book.id}`;
    newCard.appendChild(id);

    const buttonContainer = document.createElement('div');
    newCard.appendChild(buttonContainer);
    const readButton = document.createElement('button');
    if(book.read === true){
        readButton.textContent = "Read"
    } else {readButton.textContent = "Unread"}
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    buttonContainer.append(readButton, deleteButton);

    // newCard.appendChild(cover, title, description, buttonContainer, id);

    
}

function addBookToLibrary(cover, title, description, read) {
    var Id = crypto.randomUUID();
    let newBook = new Book(
        cover,
        title,
        description,
        read,
        Id
    );

    myLibrary.push(newBook);

}

function displayBooks() {
    //Creates a card element for each book on the DOM
    // const cardContainer = document.getElementsByClassName('container');


    myLibrary.forEach((book) => {
        newBook = createCard(book);
        // cardContainer[0].appendChild(newBook);
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
        " An amnesiac astronaut, Ryland Grace, who wakes up alone on a spaceship with two dead crewmates and must piece together his mission to save Earth from an extinction-level threat.",
        false
    );

    console.log("My Library:");

    myLibrary.forEach((book) => {
        console.log(book.title);
    });


}


seedLibrary();

displayBooks();



