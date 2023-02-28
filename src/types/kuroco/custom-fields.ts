export type CustomFieldsDate = string;
export type CustomFieldsImage = {
  id: string;
  url: string;
  desc: string;
  url_org: string;
};
export type CustomFieldsLink = {
  url: string;
  title: string;
};
export type CustomFieldsReferenceInfo = {
  module_id: number;
  module_type: string;
  topics_group_id: number;
};
export type CustomFieldsSelect = {
  key: string;
  label: string;
};
export type CustomFieldsMultipleSelect = CustomFieldsSelect[];
export type CustomFieldsText = string;
export type CustomFieldsTextarea = string;
