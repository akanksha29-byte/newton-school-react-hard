import React from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import Pagination from "./Pagination";

const ListItems = () => {
  const album = useSelector((store) => store.album);

  if (album.loading === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="album_container">
      {album.result.map((i) => {
        return <AlbumCard key={i.id} album={i} />;
      })}
      <Pagination pages={album.length / 5} />
    </div>
  );
};
export default ListItems;
