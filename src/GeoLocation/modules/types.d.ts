import type {GeoInfo} from '~/Geo/modules/types';

type StoreGeoInfo = Omit<GeoInfo, 'city'>;

export type {StoreGeoInfo};
