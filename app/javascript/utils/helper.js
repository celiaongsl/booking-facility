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

    timeToReturn.setMilliseconds(Math.round(timeToReturn.getMilliseconds() / 1000) * 1000);
    timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
    timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 15) * 15);
    return timeToReturn;
}

// Take "Thu Feb 18 2021 19:15:00 GMT+0800 (Singapore Standard Time)"
// And shorten to "19:15:00" only
export function prettyDate2(time){
    var localeSpecificTime = time.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ');
}