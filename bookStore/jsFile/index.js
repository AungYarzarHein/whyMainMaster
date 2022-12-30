
   // this is for fake
   let bookList=[
    {
        bookName:"Love and Thunder",
        bookId:23,
        name:"Henry Juffer"
    },
    {
        bookName:"Love and Fuck",
        bookId:63,
        name:"Henry Juffer Lorence"
    },
    {
        bookName:"Love and Hate",
        bookId:25,
        name:"Juffer"
    }
];



class Book{
    constructor(bookName,bookId,name){
        this.bookName=bookName;
        this.bookId=bookId;
        this.name=name;
    }
}


//for UI set up
class UI{
    static addBookList(book){
        let list = document.querySelector("#book-list");
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.bookName}</td>
        <td>${book.bookId}</td>
        <td>${book.name}</td>
        <td><i class="fas fa-trash-alt btn text-info delete" id="away"></i></td>`;
        list.appendChild(row);

    }



    static displayBooks(){
     
        let storedBook = bookList;

        storedBook.forEach(book =>UI.addBookList(book))
    }

    static deleteBook(booker){
        if(booker.classList.contains("delete")){
            booker.parentElement.parentElement.remove();
        }
    }

    static showAlert(message,className){
        let alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${className}`;
        alertDiv.appendChild(document.createTextNode(message));

        const formDiv = document.querySelector("#form-list");

        document.querySelector(".container").insertBefore(alertDiv,formDiv);

        setTimeout(function(){
            alertDiv.remove();
        },2000)
    }

    static clearBook(){
        document.querySelector("#bookName").value="";
        document.querySelector("#bookId").value="";
        document.querySelector("#authorName").value="";
    }

    

}



document.addEventListener("DOMContentLoaded",UI.displayBooks);
document.querySelector(".bookList").addEventListener("click",(e)=>{
    UI.deleteBook(e.target)
})

// handling form data 
let former = document.getElementById("form-list");

former.addEventListener("submit",(e) => {
    // we need to prevent default UI display otherwise document will reload 
       e.preventDefault();

    let bookName = document.querySelector("#bookName").value;
    let bookId = document.querySelector("#bookId").value;
    let name = document.querySelector("#authorName").value;
    console.log(name)
    const data = document.querySelectorAll("tr")[1].firstChild.innerHTML;
    console.log(data)

    if(bookName==="" || bookId==="" || name===""){
        const message = "You are missing something";
        UI.showAlert(message,"danger");
    }else{
        let newBook = new Book(bookName,bookId,name);
        UI.addBookList(newBook);
        UI.clearBook()
        
    }
})

