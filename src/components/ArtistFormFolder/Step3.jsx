import React from "react";
import { questions } from "../../constants/DataFile";

function Step3({ formData, handleInputChange }) {
  console.log(formData.coverImage);
  // cover image and banner
  const coverImagePreview = formData.coverImage
    ? URL.createObjectURL(formData.coverImage)
    : null;
  const bannerPreview = formData.banner
    ? URL.createObjectURL(formData.banner)
    : null;
  const imagePreviewStyle = {
    maxWidth: "200px",
    maxHeight: "150px",
    marginTop: "10px",
  };
  return (
    <>
      {/* Step 2 Fields */}

      {/* Artist (or Group) YouTube Channel */}
      <div className="mb-3">
        <label
          htmlFor="VidLink1"
          className="form-label"
          style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
        >
          Video Link 1
        </label>
        <input
          type="text"
          className="form-control"
          id="VidLink1"
          name="vidlink1"
          style={{ fontFamily: "Oswald" }}
          value={formData.vidlink1}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="VidLink2"
          className="form-label"
          style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
        >
          Video Link 2
        </label>
        <input
          type="text"
          className="form-control"
          id="VidLink2"
          name="vidlink2"
          style={{ fontFamily: "Oswald" }}
          value={formData.vidlink2}
          onChange={handleInputChange}
        />
      </div>

      {/* New fields for cover image and banner */}
      <div className="row">
        {/* Cover Image */}
        <div className="col-md-6 mb-3">
          <label
            htmlFor="coverImage"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Upload Cover Image
          </label>
          <input
            type="file"
            className="form-control"
            id="coverImage"
            name="coverImage"
            style={{ fontFamily: "Oswald" }}
            onChange={handleInputChange}
            value={formData.coversrc}
          />
          {/* Display the cover image preview */}
          {coverImagePreview && (
            <img
              src={coverImagePreview}
              alt="Cover Image Preview"
              style={imagePreviewStyle}
            />
          )}
        </div>

        {/* Banner */}
        <div className="col-md-6 mb-3">
          <label
            htmlFor="banner"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Upload Banner
          </label>
          <input
            type="file"
            className="form-control"
            id="banner"
            name="banner"
            style={{ fontFamily: "Oswald" }}
            onChange={handleInputChange}
            value={formData.bannerimg}
          />
          {/* Display the banner image preview */}
          {bannerPreview && (
            <img
              src={bannerPreview}
              alt="Banner Preview"
              style={imagePreviewStyle}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Step3;
