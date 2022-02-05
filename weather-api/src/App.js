import logo from "./logo.svg";
import "./App.css";
import { getData } from "./weatherapi";
import React, { useEffect } from "react";
const { format } = require("date-fns");

function App() {
  const [city, setCity] = React.useState("");
  const [data, setData] = React.useState([]);
  useEffect(async () => {
    try {
      const temp_data = await getData(city);
      setData(temp_data);
      console.log("city", city);
    } catch (error) {
      throw error;
    }
  }, [city]);
  const [temp, setTemp] = React.useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    setTemp(data === " " ? " " : data);
    console.log(city);
    setCity("");
  };
  // setTemp("");
  console.log(temp);
  return (
    <div>
      <div className="jumbotron " style={{ background: "whitesmoke" }}>
        <div className="container mt-2 m-5">
          <form
            style={{
              border: "2px solid black ",
              borderRadius: 15,
            }}
            className="p-4 mb-5"
          >
            <div className="form-group">
              <label htmlFor="city" id="city">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

            <button type="submit" class="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </form>
          {temp ? (
            <div class="page-content page-container" id="page-content">
              <div class="padding">
                <div class="row container d-flex justify-content-center">
                  <div class="col-lg-8 grid-margin stretch-card">
                    <div
                      class="card card-weather"
                      style={{
                        border: "2px solid black ",
                        width: 619 - 1,
                        borderRadius: 10,
                      }}
                    >
                      <div class="card-body">
                        <div class="weather-date-location">
                          <span>
                            <span style={{ fontSize: 45 }}>{temp.name}</span>
                            <span
                              class="weather-location"
                              style={{ fontWeight: 500, fontSize: 38 }}
                            >
                              {`, ${temp.sys?.country}`}
                            </span>{" "}
                          </span>
                          <p class="text-gray">
                            {" "}
                            <span
                              class="weather-date"
                              style={{ fontWeight: 500 }}
                            >
                              {format(new Date(), "dd.MMMM.yyyy")}
                            </span>{" "}
                          </p>
                        </div>
                        <div class="weather-data d-flex">
                          <div class="mr-auto">
                            <h4 class="display-3">
                              {(temp.main?.temp_max - 273.15).toFixed(1)}&deg;C{" "}
                            </h4>
                            <p style={{ fontWeight: 700, fontSize: "15px" }}>
                              {temp.weather[0]?.main}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <div class="d-flex weakly-weather">
                          <div class="weakly-weather-item">
                            <p class="mb-1"> Humidity </p>{" "}
                            <i class="mdi mdi-weather-cloudy"></i>
                            <p class="mb-0"> {temp.main?.humidity}% </p>
                          </div>
                          <div class="weakly-weather-item">
                            <p class="mb-1">
                              {" "}
                              <i class="fal fa-arrow-up"></i>
                            </p>{" "}
                            <i class="mdi mdi-weather-hail"></i>
                            <p class="mb-0">
                              {" "}
                              {(temp.main?.temp_max - 273.15).toFixed(
                                1
                              )}&deg;C{" "}
                            </p>
                          </div>
                          <div class="weakly-weather-item">
                            <p class="mb-1">
                              {" "}
                              <i class="fal fa-arrow-down"></i>
                            </p>{" "}
                            <i class="mdi mdi-weather-hail"></i>
                            <p class="mb-0">
                              {" "}
                              {(temp.main?.temp_min - 273.15).toFixed(
                                1
                              )}&deg;C{" "}
                            </p>
                          </div>

                          <div class="weakly-weather-item">
                            <p class="mb-1"> Wind </p>{" "}
                            <i class="mdi mdi-weather-pouring"></i>
                            <p class="mb-0"> {temp.wind?.speed}Km/h </p>
                          </div>
                          <div class="weakly-weather-item">
                            <p class="mb-1"> Pressure </p>{" "}
                            <i class="mdi mdi-weather-pouring"></i>
                            <p class="mb-0"> {temp.main?.pressure} Pa </p>
                          </div>
                          <div class="weakly-weather-item">
                            <p class="mb-1"> Visibility </p>{" "}
                            <i class="mdi mdi-weather-snowy-rainy"></i>
                            <p class="mb-0">
                              {" "}
                              {parseInt(temp.visibility) / 1000} Km{" "}
                            </p>
                          </div>
                          <div class="weakly-weather-item">
                            <p class="mb-1">
                              <i class="fas fa-cloud"></i>
                            </p>
                            <i class="mdi mdi-weather-snowy"></i>
                            <p class="mb-0"> {temp.clouds?.all} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
