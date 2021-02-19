import { assetToIconList } from "./constant";

export const findAssetKeyReturnIconList = (assets) => {
  let assetsIconList = [];
  Object.keys(assets).map((key) => {
    if (assets[key]) {
      return assetsIconList.push(assetToIconList[key].icon);
    }
    return null;
  });
  return assetsIconList;
};

export const roundTimeQuarterHour = (time) => {
  var timeToReturn = new Date(time);

  timeToReturn.setMilliseconds(
    Math.round(timeToReturn.getMilliseconds() / 1000) * 1000
  );
  timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
  timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
  return timeToReturn;
};

// Take "Thu Feb 18 2021 19:15:00 GMT+0800 (Singapore Standard Time)"
// And shorten to "19:15:00" only
export function prettyDate2(time) {
  if (typeof time === "string") time = new Date(time);
  var localeSpecificTime = time.toLocaleTimeString();
  return localeSpecificTime.replace(/:\d+ /, " ");
}

export const convertObjectIntoQueryString = ({ object, paramKey }) => {
  // if capacity[key] === true, we add capacity[]=key in the query
  // so if we have multiple capacity keys that are true, we need to chain it as such:
  // ?capacity[]=1&capacity[]=30 << return this back

  let queryString = "";
  Object.keys(object).map((key) => {
    if (object[key]) {
      queryString = queryString + `&${paramKey}=${key}`;
    }
  });

  return queryString;
};
