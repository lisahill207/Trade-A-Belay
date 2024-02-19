import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function ImgUpload({ handlePhoto }) {
  return (
    <div className="image-upload-container">
      <label htmlFor="input-file" id="drop-area">
        <input
          onChange={handlePhoto}
          type="file"
          accept="image/*"
          id="input-file"
          hidden
        />
        <div id="image-view">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
          <p>Click here to upload a profile photo</p>
        </div>
      </label>
    </div>
  );
}
