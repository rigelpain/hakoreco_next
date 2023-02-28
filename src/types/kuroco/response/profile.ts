export type ProfileResponse = {
  name1: string;
  name2: string;
  member_id: number;
  group_ids: {
    [K: string]: string;
  };
  expiresAt: number;
  geo_country_code: string;
  geo_region: string;
  geo_conn_speed: string;
};
