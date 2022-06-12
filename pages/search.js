import { MongoClient } from "mongodb";
import React, { Fragment } from "react";
import Landmarks from "../components/Landmarks/Landmarks";
import Search from "../components/Search/Search";

const SearchPage = (props) => {
  return <Search landmarks={props.landmarks} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://landmarks-user:M4m4Cn7fenSaIMGc@cluster0.ac96r.mongodb.net/landmarks?retryWrites=true&w=majority"
  );
  const db = client.db();
  const landmarksCollection = db.collection("landmarks");
  const landmarks = await landmarksCollection.find().toArray();
  console.log(landmarks);

  const landmarksPrepared = landmarks.map((landmark) => {
    return {
      name: landmark.name,
      location: landmark.location,
      image: landmark.image,
      id: landmark._id.toString(),
    };
  });
  return {
    props: {
      landmarks: landmarks ? landmarksPrepared : [],
    },
    revalidate: 1,
  };
}

export default SearchPage;
