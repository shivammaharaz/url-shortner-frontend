import axios from "axios";
import React, { Fragment, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./Shortner.css";

const Shortner = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const handleChange = async (e) => {
    const { value } = e.target;
    setUrl(value);
    setCopy(false);
    console.log(url);
  };
  const handleClick = async () => {
    const data = await axios.post("https://shortly-six-snowy.vercel.app/", {
      url: url,
    });
    setShortUrl(data.data.url);
    console(data.data);
    if (!data.data) {
      alert("unauthorised url");
    }
  };
  return (
    <Fragment>
      <h1>URL-SHORTNER</h1>
      <div className="mainsection">
        <div className="form">
          <input
            type="url"
            name="url"
            value={url}
            id="url"
            onChange={handleChange}
          />
          <button className=" btn btn-primary" onClick={handleClick}>
            Create-ShortUrl
          </button>
        </div>
        <div className="copy">
          <h2>{shortUrl}</h2>

          <CopyToClipboard text={shortUrl} onCopy={() => setCopy(true)}>
            <button className="btn btn-success">Copy</button>
          </CopyToClipboard>
          {copy ? (
            <p className="text-success">
              {" "}
              <b> Url Copied</b>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Shortner;
