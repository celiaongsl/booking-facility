import React from "react";
import {  cleanup, } from "@testing-library/react";
import axios from "axios";
import LandingPage from "./LandingPage";
import { renderWithState } from "../utils/renderWithState";

const rooms = [
  {
    name: "Conference Room 1",
    floor: 8,
    capacity: 30,
    room_type: "conference",
    assets: {
      projector: true,
      whiteboard: true,
      power_outlets: true,
      tv: false,
    },
  },
  {
    name: "Conference Room 2",
    floor: 8,
    capacity: 30,
    room_type: "conference",
    assets: {
      projector: true,
      whiteboard: true,
      power_outlets: true,
      tv: false,
    },
  },
];

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: { data: rooms } }));
});

afterEach(cleanup);

const initState = {
  startDateTime: null,
  endDateTime: null,
};

describe("<LandingPage />", () => {
  it("displays <CircularProgress /> while fetching rooms", async () => {
    const { getByRole } = renderWithState(<LandingPage />, { initState });
    const loading = await getByRole("progressbar");
    expect(loading).toBeTruthy();
  });
});
