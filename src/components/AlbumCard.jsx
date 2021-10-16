import React from "react";
const AlbumCard = ({ album }) => {
  return (
    <div className="album_card">
      <h3>{album.title}</h3>
    </div>
  );
};
export default AlbumCard;
