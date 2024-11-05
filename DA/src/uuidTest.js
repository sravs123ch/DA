import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UuidTest = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    // Generating a unique ID
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, "");
    uid += navigator_info.plugins.length;
    uid += screen_info.height || "";
    uid += screen_info.height || "";
    uid += screen_info.pixelDepth || "";

    // Setting the unique ID in state
    setId(uid);
    console.log("Generated uid:", uid);
  }, []); // Empty dependency array ensures this runs only once

  const uniqueId = uuidv4();
  console.log("UUIDv4 ID is:", uniqueId);

  return (
    <div>
      <h1>UUID: {uniqueId}</h1>
      <h1>Your unique ID: {id}</h1>
    </div>
  );
};

export default UuidTest;
