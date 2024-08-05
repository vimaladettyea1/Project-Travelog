import React, { useState, useEffect, useCallback } from "react";
import "../Final-phase/Planner.css"; // Ensure this CSS is updated
import "boxicons/css/boxicons.min.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import axios from "axios";
import { debounce } from "lodash";
import Draggable from "react-draggable";
import App from "../App";
import logo from "..//assets/travelog-high-resolution-logo-transparent.png";
import Budget from "./Budget";
// Component to change the view of the map
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [yourPhoto, setYourPhoto] = useState(false);
  const [selectMenu, setSelectMenu] = useState(false);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [defaultImageUrl, setDefaultImageUrl] = useState("");
  const [defaultImageUrl1, setDefaultImageUrl1] = useState("");
  const [defaultImageUrl2, setDefaultImageUrl2] = useState("");
  const [defaultImageUrl3, setDefaultImageUrl3] = useState("");
  const [selectAddExpense, setSelectAddExpense] = useState(false);

  const [selectEditButton, setSelectEditButton] = useState(false);
  const query = "Singapore";

  const [budgetAmount, setBudgetAmount] = useState(0);

  /* ----------------*/

  /* ----------- date ========*/
  const startDate = "2024-08-01"; // Set the start date here
  const endDate = "2024-08-12"; // Set the end date here

  const getDateRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dateArray = [];

    while (startDate <= endDate) {
      dateArray.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return dateArray;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "numeric",
      day: "numeric",
    });
  };
  const formatDate2 = (date) => {
    const options = { month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const dateRange = getDateRange(startDate, endDate);
  /* ----------- date ========*/

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=25`,
          {
            headers: {
              Authorization:
                "ntfx0m9Bo8eZIomHdsn3NViEaf1vFYtOlcgGPjgr69cCeNak0qFMTARU",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setImages(data.photos);

        if (data.photos.length > 0) {
          setDefaultImageUrl(data.photos[0].src.landscape);
          setDefaultImageUrl1(data.photos[1].src.landscape);
          setDefaultImageUrl2(data.photos[4].src.landscape);
          setDefaultImageUrl3(data.photos[3].src.landscape);
        }
      } catch (error) {
        setError("Failed to fetch images. Please try again later.");
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  const handleImageClick = (id, url) => {
    setSelectedImageId(id);
    setSelectedImageUrl(url);
  };

  const [position, setPosition] = useState([51.505, -0.09]);
  const [search, setSearch] = useState("");

  const fetchLocation = async (query) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const newPosition = [parseFloat(lat), parseFloat(lon)];
        setPosition(newPosition);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const debouncedFetchLocation = useCallback(debounce(fetchLocation, 1000), []);

  useEffect(() => {
    if (search) {
      debouncedFetchLocation(search);
    }
  }, [search, debouncedFetchLocation]);

  const [heading, setHeading] = useState(`Trip To ${query}...`);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (event) => {
    setHeading(event.target.innerText);
    setIsEditing(false);
  };

  const [dates] = useState([
    "2024-08-01",
    "2024-08-02",
    "2024-08-03",
    "2024-08-04",
    "2024-08-05",
  ]);

  const [places, setPlaces] = useState(Array(dates.length).fill([]));

  const handleInputChange = (index, event) => {
    if (event.key === "Enter") {
      const newPlaces = [...places];
      newPlaces[index] = [...newPlaces[index], event.target.value];
      setPlaces(newPlaces);
      event.target.value = "";
    }
  };

  const handleRemovePlace = (dateIndex, placeIndex) => {
    const newPlaces = [...places];
    newPlaces[dateIndex] = newPlaces[dateIndex].filter(
      (_, i) => i !== placeIndex
    );
    setPlaces(newPlaces);
  };

  const selectAddExpenseclick = () => {
    setSelectAddExpense(!selectAddExpense);
  };

  const selectEditButtonclick = () => {
    setSelectEditButton(!selectEditButton);
  };
  const setBudgetAmountclick = (e) => {
    setBudgetAmount(e.target.value);
  };

  const handleSaveClick = (event) => {
    if (event.key === "Enter") {
      setBudgetAmount(event.target.value);
    }
  };

  return (
    <>
      <div className={`nav-bar ${isOpen2 ? "hidden" : ""}`}>
        <div className="navbox1" style={{ paddingLeft: "50px" }}>
          <img src={logo} alt="" className="logo" style={{ width: "200px" }} />
        </div>
        <div className="navbox2" style={{}}>
          <div className="navbutton">
            <button className="nav-home">
              <i class="bx bx-home"></i>
            </button>
          </div>
          <div className="navbutton1">
            <button className="nav-home">
              <i class="bx bx-edit"></i>
            </button>
          </div>
        </div>
        <div className="navbox3" style={{}}>
          <div className="navbutton">
            <button className="nav-home">
              <i class="bx bx-images"></i>
            </button>
          </div>
          <div className="navbutton1">
            <button className="nav-home">
              <i class="bx bx-menu"></i>
            </button>
          </div>
        </div>
        <div className="navbox4" style={{}}>
          <button className="nav-download">
            <i class="bx bxs-download"></i>
          </button>
        </div>
      </div>

      <div className="select-nav-bar" onClick={() => setIsOpen2(!isOpen2)}>
        menu
      </div>

      {selectMenu && (
        <div className="select-main-container">
          <div className="select-container">
            <div className="photo-head">
              <span>Choose Photo</span>
              <button onClick={() => setSelectMenu(false)}>&times;</button>
            </div>
            <div className="select-buttons">
              <button
                onClick={() => setYourPhoto(true)}
                className={`your-button ${yourPhoto ? "yp" : ""}`}
                style={{ borderRadius: "10px" }}
              >
                Your Photo
              </button>
              <button
                onClick={() => setYourPhoto(false)}
                className={`your-button ${yourPhoto ? "" : "yp"}`}
                style={{ borderRadius: "10px" }}
              >
                Select Photo
              </button>
            </div>

            {yourPhoto ? (
              <div className="your-photo"></div>
            ) : (
              <div className="select-photo">
                <div className="image-gallery">
                  {images.length === 0 ? (
                    <p>No images found.</p>
                  ) : (
                    images.map((image) => (
                      <div
                        className="image-container"
                        key={image.id}
                        style={{
                          backgroundImage: `url(${image.src.landscape})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          marginBottom: "10px",
                          borderRadius: "10px",
                          position: "relative",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleImageClick(image.id, image.src.landscape)
                        }
                      >
                        {selectedImageId === image.id && (
                          <button
                            style={{
                              padding: "5px 10px",
                              cursor: "pointer",
                              borderRadius: "5px",
                              border: "none",
                              position: "absolute",
                              bottom: "10px",
                              right: "10px",
                              backgroundColor: "#007bff",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImageUrl(image.src.landscape);
                            }}
                          >
                            Selected
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="app-container">
        <button
          className={`menu-btn ${isOpen ? "hidden" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bx bx-menu"></i>
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            &times;
          </button>

          <div
            className="sidebar-content"
            style={{ padding: "10px", width: "200px" }}
          >
            <div
              style={{
                padding: "15px",
                marginBottom: "10px",
                color: "white",
                width: "200px",
                position: "fixed",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                marginLeft: "-10px",
                boxShadow: "grey 5px 5px 5px",
                textAlign: "center",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setSelectMenu(!selectMenu)}
              className="edit-background-button"
            >
              Edit Background <i className="bx bxs-edit-alt"></i>
            </div>
            <div
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginTop: "50px",
                height: "450px",
                overflowY: "auto",
              }}
            >
              <h1>Itinerary</h1>
              <div style={{ marginTop: "10px", color: "white" }}>
                {dateRange.length > 0 && (
                  <div style={{ marginLeft: "35px", cursor: "pointer" }}>
                    {dateRange.map((date, index) => (
                      <div
                        key={index}
                        id={`date-${index}`}
                        style={{ padding: "10px", color: "grey" }}
                      >
                        {formatDate(date)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                padding: "10px",
                color: "white",
                width: "90%",
                borderRadius: "20px",
                height: "30px",
                marginLeft: "-30px",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
              className="expense-sidebar-button"
            >
              Expenses
            </div>
          </div>
        </div>

        <div className="full-body">
          <div className="content-section" style={{}}>
            <div className="headimage-container">
              <div
                className="headimage"
                style={{
                  backgroundImage: `url(${
                    selectedImageUrl || defaultImageUrl
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              ></div>
              <div className="headcontent">
                {isEditing ? (
                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={handleBlur}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.target.blur();
                      }
                    }}
                  >
                    {heading}
                  </h1>
                ) : (
                  <h1 onClick={handleClick}>{heading}</h1>
                )}

                <div className="headcontent-date" style={{}}>
                  <div className="hc-image">
                    <div
                      className="hc-imagebox"
                      style={{ backgroundImage: `url(${defaultImageUrl1})` }}
                    ></div>
                    <div
                      className="hc-imagebox"
                      style={{ backgroundImage: `url(${defaultImageUrl2})` }}
                    ></div>
                    <div
                      className="hc-imagebox"
                      style={{ backgroundImage: `url(${defaultImageUrl3})` }}
                    ></div>
                  </div>
                  <div className="hc-date">
                    {" "}
                    <i class="bx bxs-calendar"></i> {formatDate2(startDate)} -{" "}
                    {formatDate2(endDate)}
                  </div>
                </div>
              </div>
            </div>

            <div className="itineary-budget">
              <div className="itinerary-planner">
                <div className="itinerary-heading">
                  <h1>Itinerary</h1>
                </div>
                <div className="dates-container">
                  {dates.map((date, index) => (
                    <div key={index} className="date-item">
                      <h3>{date}</h3>

                      <div className="date"></div>
                      {places[index].map((place, placeIndex) => (
                        <div key={placeIndex} className="place">
                          <span className="place-number">
                            {placeIndex + 1}.
                          </span>{" "}
                          {place}
                          <button
                            className="remove-button"
                            onClick={() => handleRemovePlace(index, placeIndex)}
                            style={{
                              border: "none",
                              float: "right",
                              cursor: "pointer",
                            }}
                          >
                            <i class="bx bx-trash"></i>
                          </button>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="search-bar"
                        placeholder="Add a place"
                        onKeyDown={(event) => handleInputChange(index, event)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Budget />
            </div>
          </div>

          <div className="map-container">
            <div>
            <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search for a location"
  style={{
    position: "fixed",
    height: "40px",
    zIndex: 10010,
    width: '250px',
    borderRadius: "20px",
    marginLeft: "10%",
    padding: "0 15px",
    border: "2px solid red",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    fontSize: "16px",
    transition: "all 0.3s ease-in-out",
  }}
  className="map-search-input"
/>

              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "700px", width: "50%", position: "fixed" ,marginTop:'-10px'}}
              >
                <ChangeView center={position} />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy;contributors'
                />
                <Marker position={position}></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
