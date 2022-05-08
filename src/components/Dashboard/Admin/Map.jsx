/** @format */

import React, { Fragment, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Circle } from "@mui/icons-material";
import MAP_STYLE from "../../../utils/style.json";
import mapboxgl from "mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmlkYXJhZmlzeWVkIiwiYSI6ImNreTkydGE2bzAyZTQydnA0dWF1Y2xrdWQifQ.BA1u_ZGDHrpvj0WVuypIIQ";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.7577,
    longitude: -95.4376,
    zoom: 3,
  });

  return (
    <Fragment>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={MAP_STYLE}
        onViewportChange={setViewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicmlkYXJhZmlzeWVkIiwiYSI6ImNreTkydGE2bzAyZTQydnA0dWF1Y2xrdWQifQ.BA1u_ZGDHrpvj0WVuypIIQ"
        }
        style={{ zIndex: 200 }}
      >
        <Marker
          latitude={40.7128}
          longitude={-74.006}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle style={{ color: "#461594" }} />
        </Marker>
        <Marker
          latitude={47.6062}
          longitude={-74.006}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle style={{ color: "#461594" }} />
        </Marker>
        <Marker
          latitude={41.8781}
          longitude={-87.6298}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Circle style={{ color: "#461594" }} />
        </Marker>
      </ReactMapGL>
    </Fragment>
  );
};

export default Map;
