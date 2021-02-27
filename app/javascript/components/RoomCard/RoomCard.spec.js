import React from "react";
import RoomCard from "./";
import { render, fireEvent, screen } from "@testing-library/react";

import { assetToIconList, roomTypeToImageList } from "../../utils/constant";
import { findAssetKeyReturnIconList } from "../../utils/helper";

const props = {
  room: {
    attributes: {
      name: "Sleeping Pod 1",
      capacity: "30",
      floor: "8",
      slug: "sleeping-pod-1",
    },
  },
  imageURL: roomTypeToImageList.sleeping_pod,
  iconList: findAssetKeyReturnIconList(assetToIconList),
};

describe("<RoomCard />", () => {
  it("renders the component", () => {
    const { asFragment } = render(<RoomCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("onClick 'Book Now' button", () => {
    const handleClickOpen = jest.fn();
    const { getByText } = render(
      <RoomCard
        {...props}
        handleClickOpen={handleClickOpen}
      />
    );
    const bookNowButton = getByText("Book Now");
    fireEvent.click(bookNowButton);
    expect(handleClickOpen).toHaveBeenCalledTimes(1);
  });
});
