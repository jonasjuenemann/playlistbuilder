import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            playlistName: "NewPlaylist",
            playlistTracks: []
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            alert("track already saved");
        } else {
            const tracks = this.state.playlistTracks;
            tracks.push(track);
            this.setState({ playlistTracks: tracks });
        }
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(item => item.id !== track.id);
        this.setState({ playlistTracks: tracks });
    }

    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

    savePlaylist() {
        const trackUris = this.state.playlistTracks.map(track => {
            return track.uri;
        });
        const name = this.state.playlistName;
        if (trackUris.length === 0) {
            alert("Keine Tracks angegeben");
            return;
        }
        if (!name) {
            alert("Spotify braucht einen Namen zum Speichern der Playlist");
            return;
        }
        Spotify.savePlaylist(name, trackUris).then(() => {
            this.setState({
                playlistName: "NewPlaylist"
            });
            this.setState({
                playlistTracks: []
            })
        })
    }

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({ searchResults: searchResults })
        })
    }


    render() {
        return (
            <div>
                <h1>P<span className="highlight">l</span>ay<span className="highlight">L</span>istBui<span className="highlight">l</span>der</h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist playlistName={this.state.playlistName} playlist={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
