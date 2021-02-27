import React from "react";
import {
  findAssetKeyReturnIconList,
  roundTimeQuarterHour,
  prettyDate2,
  convertObjectIntoQueryString,
} from "./helper";

import TvRoundedIcon from "@material-ui/icons/TvRounded";

describe("helper.js", () => {
  test("findAssetKeyReturnIconList", () => {
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

  test("roundTimeQuarterHour", () => {
    const time = "Sat Feb 27 2021 21:33:04 GMT+0800 (Singapore Standard Time)";
    const result = "2021-02-27T13:30:00.000Z";
    // expect(roundTimeQuarterHour(time)).toEqual(result);
    expect(roundTimeQuarterHour()).toEqual("");
  });

  test("prettyDate2", () => {
    const time = "Sat Feb 27 2021 21:33:04 GMT+0800 (Singapore Standard Time)";
    const result = "21:33:04";
    expect(prettyDate2(time)).toEqual(result);

    const emptyTime = "";
    const emptyResult = "";
    expect(prettyDate2(emptyTime)).toEqual(emptyResult);

    const noExplicitTime = "2/27/2021";
    const noExplicitTimeResult = "00:00:00";
    expect(prettyDate2(noExplicitTime)).toEqual(noExplicitTimeResult);

    // Might need to rethink how to handle this situation on helper.js
    const noExplicitDate = "21:33:04 GMT +0800 (Singapore Standard Time)";
    const noExplicitDateResult = "Invalid Date";
    expect(prettyDate2(noExplicitDate)).toEqual(noExplicitDateResult);
  });

  test("convertObjectIntoQueryString", () => {
    const object = { 1: false, 10: true };
    const singleFalseObject = { 1: false };
    const paramKey = "capacity";
    const result = "&capacity=10";
    const noParamKeyResult = "&=10";

    expect(convertObjectIntoQueryString({ object, paramKey })).toEqual(result);
    expect(convertObjectIntoQueryString({ object, paramKey: "" })).toEqual(
      noParamKeyResult
    );
    expect(
      convertObjectIntoQueryString({ object: singleFalseObject, paramKey })
    ).toEqual("");

    const notObject = [];
    expect(
      convertObjectIntoQueryString({ object: notObject, paramKey: "" })
    ).toEqual("");
  });
});
