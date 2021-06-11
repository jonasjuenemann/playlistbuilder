import React from "react";
import './Track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}> - </button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}> + </button>
        }
    }

    addTrack() {
        const track = this.props.track;
        this.props.onAdd(track);
    }

    removeTrack() {
        const track=this.props.track;
        this.props.onRemove(track);
    }


    render() {
        const track = this.props.track;
        return (
            <div className="Track">

                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album} </p>
                </div>
                {this.renderAction()}
            </div>
        );
    }

}
export default Track;