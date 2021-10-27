import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../../../node_modules/react-quill/dist/react-quill";
import "./quillApp.css";

var delta = JSON.stringify(ReactQuill.value);
console.log(ReactQuill.value);
function QuillApp() {
  const [body, setBody] = useState("");

  return (
    <div className="quillApp">
      <form>
        {/* <input
          type="text"
          className="titleBar"
          placeholder="Title your Masterpiece"
        ></input> */}
        <ReactQuill
          placeholder="Write something Amazing!..."
          modules={QuillApp.modules}
          formats={QuillApp.formats}
          // onChange={handleBody}
          value={body}
        />

        <div className="quillButtons">
          <button className="publishButton">Publish</button>
          {/* <button className="draftButton">Save Draft</button> */}
        </div>
      </form>
    </div>
  );
}

export default QuillApp;

QuillApp.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "link",
      "image",
      "video",
    ],
    [{ list: "ordered" }, { list: "bullet" }],

    [{ indent: "-1" }, { indent: "+1" }],

    [{ color: [] }, { background: [] }],

    [{ align: [] }],

    ["clean"],
    ["code-block"],
  ],
};
QuillApp.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

// onclick function for save button
// save delta to localstorage-
// stringify delta and store as key= poemID and value=poemBody
//

//load from local storage to poem display page.
// url/poemID will bring up the display page
// take poembody and parse and display it

// onclick function on a delete button uses localStorage.removeItem()

// localStorage.setItem('poemID', 'poemBody');
// const showPoem = localStorage.getItem('poemID')
