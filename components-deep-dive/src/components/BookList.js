import Book from "./Book";

function BookList(props) {

    let books = props.books.map(book =>
        <Book {...book}/>
    )

    return (
        <ul>
            {books}
        </ul>
    );
}

export default BookList;