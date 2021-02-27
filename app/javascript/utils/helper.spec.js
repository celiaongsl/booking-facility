import React from "react";
import { findAssetKeyReturnIconList, roundTimeQuarterHour } from "./helper";
import { render } from "@testing-library/react";

import TvRoundedIcon from "@material-ui/icons/TvRounded";

describe("helper.js", () => {
  it("findAssetKeyReturnIconList", () => {
    const assetList = {
      tv: {
        icon: <TvRoundedIcon />,
        label: "TV",
      },
    };
    const emptyAssetList = {};
    const notEvenAList = [];
    const result = [<TvRoundedIcon />];
    const wrongResult = ["TV"];

    expect(findAssetKeyReturnIconList(assetList)).toStrictEqual(result);
    expect(findAssetKeyReturnIconList(assetList)).not.toBe(wrongResult);
    expect(findAssetKeyReturnIconList(emptyAssetList)).toStrictEqual([]);
    expect(findAssetKeyReturnIconList(notEvenAList)).toStrictEqual([]);
  });

  it("roundTimeQuarterHour", () => {
    const time = "Sat Feb 27 2021 21:33:04 GMT+0800 (Singapore Standard Time)";
    const result = "2021-02-27T13:30:00.000Z";
    // expect(roundTimeQuarterHour(time)).toEqual(result);
    expect(roundTimeQuarterHour()).toEqual("");
  });
});
