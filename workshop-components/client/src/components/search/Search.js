import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const Search = () => {
    return (
        <form className="search-form">
            <h2>
                <span>Users</span>
            </h2>
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Please, select the search criteria"
                    name="search"
                />
                <button className="btn close-btn">
                <FontAwesomeIcon icon={faXmark} />

                </button>
                <button className="btn" title="Please, select the search criteria">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="filter">
                <span>Search Criteria:</span>
                <select name="criteria" className="criteria">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </form>
    )
}