import { ContentListPageInfo } from "../common-page-info";
import { KurocoError } from "../error";
import { ContentsDetail } from "./contents-detail";

export type ContentsListResponse<T = ContentsDetail> = {
  errors: KurocoError[];
  messages: any[];
  list: T[];
  pageInfo: ContentListPageInfo;
  "x-rcms-request-id"?: string;
};
