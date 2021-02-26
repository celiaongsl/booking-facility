import React from "react";
import RoomCard from "./";
import { render } from "@testing-library/react";

// import SleepingPodImage from "../../assets/images/sleeping_pod.jpg";
import { assetToIconList, roomTypeToImageList } from "../../utils/constant";
import { findAssetKeyReturnIconList } from "../../utils/helper";
const room = {
  attributes: {
    name: "Sleeping Pod 1",
    capacity: "30",
    floor: "8",
    slug: "sleeping-pod-1",
  },
};
const imageURL = roomTypeToImageList.sleeping_pod;
const iconList = findAssetKeyReturnIconList(assetToIconList);

describe("<RoomCard />", () => {
  it("renders the component", () => {
    const { asFragment } = render(
      <RoomCard room={room} imageUrl={imageURL} iconList={iconList} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
