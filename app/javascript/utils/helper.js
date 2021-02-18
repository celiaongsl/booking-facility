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
