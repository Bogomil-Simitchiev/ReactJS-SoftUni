import Book from "./Book";
import styles from "./BookList.module.css"


function BookList(props) {

    let books = props.books.map(book =>
        <Book {...book}/>
    )

    return (
        <ul className={`${styles['remove-dots']} ${styles['set-backgroundColor']}`}>
            {books}
        </ul>
    );
}

export default BookList;