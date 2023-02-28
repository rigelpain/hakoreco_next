import useSWR, { SWRConfiguration } from "swr";

import { fetcher, fetchUrlType } from "@/utils/fetcher";

type useFetchType = {
  (url: fetchUrlType, options?: SWRConfiguration): {
    data: any;
    error: Error;
  };
};

/**
 * URLを用いてSWRによるフェッチを行う
 *
 * @param {fetchUrlType} url フェッチするURL（絶対パス）
 * @param {SWRConfiguration} options SWRの設定
 *
 * @return data, error, mutate
 */
const useFetch: useFetchType = (url, options) => {
  const swrConfig: SWRConfiguration = {
    suspense: true,
    ...options,
  };
  const { data, error, mutate } = useSWR(url, fetcher, swrConfig);

  return {
    data,
    error,
    mutate,
  };
};

export type { useFetchType };
export { useFetch };
