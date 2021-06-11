import React from "react";
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const isRemoval = false;
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} isRemoval={isRemoval} onAdd={this.props.onAdd}/>
            </div>
        );
    }

}
export default SearchResults;