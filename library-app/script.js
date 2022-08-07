let myLibrary = [];
const emptyLibraryText = document.getElementById('emptyText');
const mainContainer = document.getElementById('mainContainer');
const gridContainer = document.getElementById('gridContainer');

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function createBookCards(){
    myLibrary.forEach(book => {
        let tmpDiv = document.createElement('div');
        tmpDiv.classList.add('book');

        let titleText = document.createElement('p');
        let authorText = document.createElement('p');
        let pageText = document.createElement('p');
        let readText = document.createElement('p');

        titleText.textContent = 'Title: ' + book.title;
        authorText.textContent = 'Author: ' + book.author;
        pageText.textContent = 'Pages: ' + book.pages.toString();
        
        if(book.hasRead){
            readText.textContent = "Read";
        }
        else {
            readText.textContent = "Not Read";
        }

        gridContainer.appendChild(tmpDiv);
        tmpDiv.appendChild(titleText);
        tmpDiv.appendChild(authorText);
        tmpDiv.appendChild(pageText);
        tmpDiv.appendChild(readText);
    });
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const gameOfThrones = new Book("Game of Thrones", "George R. R. Martin", 700, true);
const hatchet = new Book("Hatchet", "Someguy", 300, true);

addBookToLibrary(theHobbit);
addBookToLibrary(gameOfThrones);
addBookToLibrary(hatchet);

function checkLibrary(){
    if(myLibrary.length > 0){
        emptyLibraryText.remove();
        mainContainer.classList.remove('is-empty');
        console.log("Found books!");
        createBookCards();
    }
    else if(myLibrary.length == 0 && emptyLibraryText.classList.contains("invisible")){
        emptyLibraryText.classList.remove("invisible");
        console.log("No books here!");
    }
}

Window.onload = checkLibrary();