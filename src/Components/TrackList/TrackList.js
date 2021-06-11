import React from "react";
import './TrackList.css';
import Track from '../Track/Track'


class TrackList extends React.Component {

    //will add a map method that renders a set of Track components
    //es gibt den Fall, dass tracks gerendert wird, bevor die Komponente gerendert wird, für den Fall -> Absicherung mit ?.
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks?.map(track => {
                        return <Track key={track.id} track={track} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
                    })
                }
            </div>
        );
    }

}
export default TrackList;