import { CategoryListPageInfo } from "../common-page-info";
import { KurocoError } from "../error";

export type CategoryDetail = {
  topics_category_id: string;
  category_nm: string;
  parent_id: string;
  memo: string;
  inst_ymdhi: string;
  update_ymdhi: string;
  topics_group_id: string;
  category_weight: string;
  ext_col_01: string;
  ext_col_02: string;
  ext_col_03: string;
  ext_title: string;
  open_flg: string;
  ext_col_04: string;
  ext_col_05: string;
  slug: string;
  topics_category_ids: string[];
  category_nms: string[];
  child_level: number;
};
export type CategoryListResponse<T = CategoryDetail> = {
  erorrs: KurocoError[];
  messages: any[];
  list: T[];
  pageInfo: CategoryListPageInfo;
  "x-rcms-request-id"?: string;
};
