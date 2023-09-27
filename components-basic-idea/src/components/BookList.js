import Book from "./Book";

function BookList(props) {
    return (
        <ul>
            <Book title={props.data[0].title} price={props.data[0].price}/>
            <Book title={props.data[1].title} price={props.data[1].price}/>
            <Book title={props.data[2].title} price={props.data[2].price}/>
        </ul>
    );
}

export default BookList;