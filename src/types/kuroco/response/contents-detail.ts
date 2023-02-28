import { KurocoError } from "../error";

export type ContentsDetail = {
  topics_id: number;
  contents_type: number;
  contents: string;
  subject: string;
  topics_flg: 0 | 1;
  open_flg: 0 | 1;
  regular_flg: 0 | 1;
  inst_ymdhi: string;
  update_ymdhi: string;
  topics_group_id: number;
  slug: string;
  order_no: number;
  group_nm: string;
  contents_type_cnt: number;
  group_description: string;
  group_ext_data: null | string;
  contents_type_nm: string;
  contents_type_slug: null | string;
  contents_type_parent_nm: null | string;
  category_parent_id: null | number;
  contents_type_ext_col_01: null | string;
  contents_type_ext_col_02: null | string;
  contents_type_ext_col_03: null | string;
  contents_type_ext_col_04: null | string;
  contents_type_ext_col_05: null | string;
  contents_type_list: number[];
};
export type ContentsDetailResponse<T = ContentsDetail> = {
  erorrs: KurocoError[];
  messages: any[];
  details: T;
  "x-rcms-request-id"?: string;
};
