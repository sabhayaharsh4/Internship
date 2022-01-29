import React, { Component } from "react";

function MainComponent() {
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/1g8my4.jpg"
  );
  const [allMeme, setAllMeme] = React.useState([]);
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .then((data) => setAllMeme(data));
  }, []);
  function getMeme() {
    const allMeme1 = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * allMeme1.length) + 1;
    console.log(allMeme1[randomNumber]);
    setMemeImage(allMeme1[randomNumber].url);

    //const randomNumber = Math.floor(Math.random() * meme.length) + 1;
    // setMemeImage(meme[randomNumber].url);
    // console.log(meme[randomNumber].url);
    // const memes = memesData.data.memes;
    // setMemeImage(memes[randomNumber].url);
  }

  return (
    <div>
      <div className="row m-5 p-4">
        <div className="col-6 text-right">
          <input
            type="text"
            placeholder="Enter Meme"
            style={{ width: 460, borderRadius: 5, height: 40, textIndent: 13 }}
            onChange={(event) => {
              setTopText(event.target.value);
            }}
            value={topText}
          ></input>
        </div>
        <div className="col-6 m-6 text-left">
          <input
            type="text"
            placeholder="Enter Other Meme"
            style={{ width: 460, borderRadius: 5, height: 40, textIndent: 13 }}
            onChange={(event) => {
              setBottomText(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: 950, borderRadius: 5, height: 40 }}
            onClick={getMeme}
          >
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ marginTop: 40 }}>
          <h3 className="text-center">{topText}</h3>
          <img src={memeImage} style={{ width: 900, height: 600 }}></img>
          <h3 className="text-center">{bottomText}</h3>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
