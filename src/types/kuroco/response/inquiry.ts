import { KurocoError } from "../error";

export type InquiryDetail = {
  inquiry_id: number;
  inquiry_name: string;
  inquiry_info: string;
  mail: string;
  inst_ymdhi: string;
  update_ymdhi: string;
  thanks_text: string;
  thanks_tag: string;
  status: number;
  order_no: number;
  status_list: string[];
  ext_01: string;
  ext_02: string;
  ext_03: string;
  ext_04: string;
  ext_05: string;
};
export type InquiryResponse<T = InquiryDetail> = {
  erorrs: KurocoError[];
  messages: any[];
  details: T;
  "x-rcms-request-id"?: string;
};
