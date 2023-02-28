import { KurocoError } from "../error";

export type MemberDetail = {
  member_id: number;
  login_id: string;
  name1: string;
  name2: string;
  tdfk_cd: null | string;
  address1: null | string;
  address2: null | string;
  tel: null | string;
  email: string;
  bikou: null | string;
  open_flg: 0 | 1;
  inst_ymdhi: string;
  update_ymdhi: string;
  login_ok_flg: 0 | 1;
  nickname: null | string;
  order_no: number;
  email_send_ng_flg: 0 | 1;
  login_ok_ymd: null | string;
  ec_point: null | string;
  api_key: string;
  identity_id: null | number;
  anonymous_token: null | string;
  zip_code: null | string;
  address3: null | string;
  tel_send_ng_flg: 0 | 1;
  payments_stripe_customer_id: null | number;
  payments_stripe_subscription_id: null | number;
  group_ids: string[];
};
export type MemberDetailResponse<T = MemberDetail> = {
  erorrs: KurocoError[];
  messages: any[];
  details: T;
  "x-rcms-request-id"?: string;
};

type RequireType = {
  required?: 1;
};
export type MemberSettings = {
  name1: {
    key_name: "name1";
    name: "Family name";
    type: "text";
    limit_item: RequireType;
  };
  name2: {
    key_name: "name2";
    name: "Given name";
    type: "text";
    limit_item: RequireType;
  };
  nickname: {
    key_name: "nickname";
    name: "Nickname";
    type: "text";
    limit_item: RequireType;
  };
  email: {
    key_name: "email";
    name: "E-mail";
    type: "text";
    limit_item: RequireType;
  };
  zip_code: {
    key_name: "zip_code";
    name: "ZIP code";
    type: "text";
    limit_item: RequireType;
  };
  tdfk_cd: {
    key_name: "tdfk_cd";
    name: "Prefecture";
    type: "option";
    options: [
      {
        key: "01";
        value: "Hokkaido";
      },
      {
        key: "02";
        value: "Aomori";
      },
      {
        key: "03";
        value: "Iwate";
      },
      {
        key: "04";
        value: "Miyagi";
      },
      {
        key: "05";
        value: "Akita";
      },
      {
        key: "06";
        value: "Yamagata";
      },
      {
        key: "07";
        value: "Fukushima";
      },
      {
        key: "08";
        value: "Ibaraki";
      },
      {
        key: "09";
        value: "Tochigi";
      },
      {
        key: "10";
        value: "Gunma";
      },
      {
        key: "11";
        value: "Saitama";
      },
      {
        key: "12";
        value: "Chiba";
      },
      {
        key: "13";
        value: "Tokyo";
      },
      {
        key: "14";
        value: "Kanagawa";
      },
      {
        key: "15";
        value: "Niigata";
      },
      {
        key: "16";
        value: "Toyama";
      },
      {
        key: "17";
        value: "Ishikawa";
      },
      {
        key: "18";
        value: "Fukui";
      },
      {
        key: "19";
        value: "Yamanashi";
      },
      {
        key: "20";
        value: "Nagano";
      },
      {
        key: "21";
        value: "Gifu";
      },
      {
        key: "22";
        value: "Shizuoka";
      },
      {
        key: "23";
        value: "Aichi";
      },
      {
        key: "24";
        value: "Mie";
      },
      {
        key: "25";
        value: "Shiga";
      },
      {
        key: "26";
        value: "Kyoto";
      },
      {
        key: "27";
        value: "Osaka";
      },
      {
        key: "28";
        value: "Hyogo";
      },
      {
        key: "29";
        value: "Nara";
      },
      {
        key: "30";
        value: "Wakayama";
      },
      {
        key: "31";
        value: "Tottori";
      },
      {
        key: "32";
        value: "Shimane";
      },
      {
        key: "33";
        value: "Okayama";
      },
      {
        key: "34";
        value: "Hiroshima";
      },
      {
        key: "35";
        value: "Yamaguchi";
      },
      {
        key: "36";
        value: "Tokushima";
      },
      {
        key: "37";
        value: "Kagawa";
      },
      {
        key: "38";
        value: "Ehime";
      },
      {
        key: "39";
        value: "Kochi";
      },
      {
        key: "40";
        value: "Fukuoka";
      },
      {
        key: "41";
        value: "Saga";
      },
      {
        key: "42";
        value: "Nagasaki";
      },
      {
        key: "43";
        value: "Kumamoto";
      },
      {
        key: "44";
        value: "Oita";
      },
      {
        key: "45";
        value: "Miyazaki";
      },
      {
        key: "46";
        value: "Kagoshima";
      },
      {
        key: "47";
        value: "Okinawa";
      },
      {
        key: "99";
        value: "Abroad";
      },
    ];
    limit_item: RequireType;
  };
  address1: {
    key_name: "address1";
    name: "Address1";
    type: "text";
    limit_item: RequireType;
  };
  address2: {
    key_name: "address2";
    name: "Address2";
    type: "text";
    limit_item: RequireType;
  };
  address3: {
    key_name: "address3";
    name: "Address3";
    type: "text";
    limit_item: RequireType;
  };
  tel: {
    key_name: "tel";
    name: "Contact number";
    type: "text";
    limit_item: RequireType;
  };
  email_send_ng_flg: {
    key_name: "email_send_ng_flg";
    name: "email_send_ng_flg";
    type: "boolean";
    limit_item: RequireType;
  };
  tel_send_ng_flg: {
    key_name: "tel_send_ng_flg";
    name: "tel_send_ng_flg";
    type: "boolean";
    limit_item: RequireType;
  };
  login_pwd: {
    key_name: "login_pwd";
    name: "login_pwd";
    type: "text";
    limit_item: RequireType;
  };
  login_id: {
    key_name: "login_id";
    name: "Login ID";
    type: "text";
    limit_item: RequireType;
  };
  login_ok_flg: {
    key_name: "login_ok_flg";
    name: "Login permission flag";
    type: "boolean";
    limit_item: RequireType;
  };
  login_ok_ymd: {
    key_name: "login_ok_ymd";
    name: "Login permission deadline";
    type: "text";
    limit_item: RequireType;
  };
};
export type MemberSettingsResponse<T = MemberSettings> = {
  erorrs: KurocoError[];
  messages: any[];
  details: T;
};
