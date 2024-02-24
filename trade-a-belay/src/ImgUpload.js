export default function ImgUpload({ handlePhoto }) {
  return (
    <div className="file-container">
      <div className="button-wrap">
        <label class="upload-button" htmlFor="input-file">
          Upload Photo
        </label>
        <input
          onChange={handlePhoto}
          type="file"
          accept="image/*"
          id="input-file"
          tabIndex="6"
          required
        />
      </div>
    </div>
  );
}
