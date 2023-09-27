function Book(props) {
    return (
        <li>
            <article>
                <h3>Title: {props.title}</h3>
                <h3>Price: {props.price}</h3>
            </article>
        </li>
    );
}

export default Book;