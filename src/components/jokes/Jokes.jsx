import React, { useEffect, useState } from "react";
import getRandomJokes from "../../services/axiosService";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import "./jokes.css";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

  useEffect(() => {
    getRandomJokes().then((res) => {
      setJoke(res.data.value);
    });
  }, []);

  const getNewJoke = () => {
    getRandomJokes().then((res) => {
      setJoke(res.data.value);
    });
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };
  const handleDisLike = () => {
    setDisLikes(disLikes + 1);
  };

  return (
    <div className="jokesDiv">
      <div className="cardJoke">
        <div className="jokeText">{joke}</div>
        <div className="divBtnAndDataJ">
          <div className="btnsJK">
            <button className="likeBtn" onClick={handleLike}>
              {<ThumbUpIcon />}
            </button>
            <button className="btnNewJ" onClick={getNewJoke}>
              New joke
            </button>
            <button className="disLikeBtn" onClick={handleDisLike}>
              {<ThumbDownAltIcon />}
            </button>
          </div>
          {likes === 0 && disLikes === 0 ? null : (
            <div className="likesDiv">
              <p className="likesData">{`You like them ${likes} jokes`}</p>
              <p className="disLikesData">{`You don't like ${disLikes} jokes`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jokes;

