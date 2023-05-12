import React from "react";
import useCsrfToken from "../../hooks/useCsrfToken";

import { newBookmarkHandler } from "./newBookmarkHandler";

const AddBookmarkModal = ({ setModalOpen }) => {
  const csrfToken = useCsrfToken();
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <form
        className="modal__container"
        onSubmit={(event) => newBookmarkHandler(event, csrfToken)}
      >
        <h2 className="modal__heading">New Bookmark</h2>

        {/* Inputs */}
        <label className="label-text" htmlFor="bookmark_title">
          Title
        </label>
        <input
          type="text"
          id="bookmark_title"
          className="input-text"
          name="bookmark_title"
        ></input>

        <label className="label-text" htmlFor="bookmark_link">
          Link
        </label>
        <input
          type="text"
          id="bookmark_link"
          className="input-text"
          name="bookmark_link"
        ></input>

        {/* Select collection */}
        <label className="label-text" htmlFor="choose_collection">
          Collection
        </label>
        <select id="choose_collection" placeholder="Select...">
          <option value="select">Select...</option>
          <option value="example">Example</option>
          <option value="example">Example</option>
          <option value="example">Example</option>
          <option value="example">Example</option>
        </select>

        {/* Create new collection */}
        <label className="label-text" htmlFor="new_collection">
          Create collection
        </label>
        <input
          type="text"
          id="new_collection"
          className="input-text"
          name="new_collection"
        ></input>

        {/* Buttons */}
        <div className="modal__buttons">
          <button
            type="button"
            className="modal__close close-btn"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
          <button type="submit" className="modal__submit submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookmarkModal;
