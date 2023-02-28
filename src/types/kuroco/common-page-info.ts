type CommonPageInfo = {
  totalCnt: number;
  perPage: number;
  totalPageCnt: number;
  pageNo: number;
  path: string;
  param: string;
  startPageNo: number;
  endPageNo: number;
};

export type ContentListPageInfo = CommonPageInfo & {
  firstIndex: number;
  lastIndex: number;
};

export type CategoryListPageInfo = CommonPageInfo & {
  first_page_param: string;
  previous_page_param: string;
  next_page_param: string;
  last_page_param: string;
  other_page_param: string;
};
