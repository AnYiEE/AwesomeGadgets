import {getCountryOrAreaNameList, getRegionNameList} from './name';

type CountryOrAreaNameList = ReturnType<typeof getCountryOrAreaNameList>;
type RegionNameList = ReturnType<typeof getRegionNameList>;

const countryOrAreaList: CountryOrAreaNameList = getCountryOrAreaNameList();
const regionList: RegionNameList = getRegionNameList();

const getCountryOrAreaName = <T extends keyof CountryOrAreaNameList>(key: T): CountryOrAreaNameList[T] | undefined => {
	return countryOrAreaList[key];
};

const getRegionName = <T extends keyof RegionNameList>(key: T): RegionNameList[T] | undefined => {
	return regionList[key];
};

export {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName};
