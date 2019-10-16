'use strict';

Connector.playerSelector = '.syno-as-player-div';

Connector.getArtist = () => {
	if ($('.syno-as-player-div .syno-as-player-song-info .info-album-artist')) {
		var albumAndArtist = $('.syno-as-player-div .syno-as-player-song-info .info-album-artist').text();
		return albumAndArtist.substr(albumAndArtist.lastIndexOf('-') + 1).trim();
	}
};

Connector.getAlbum = () => {
	if ($('.syno-as-player-div .syno-as-player-song-info .info-album-artist')) {
		var albumAndArtist = $('.syno-as-player-div .syno-as-player-song-info .info-album-artist').text();
		return albumAndArtist.substr(0, albumAndArtist.lastIndexOf('-')).trim();
	}
};

Connector.trackSelector = '.syno-as-player-div .syno-as-player-song-info .info-title';