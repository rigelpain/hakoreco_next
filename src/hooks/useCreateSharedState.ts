import useSWR, { Key, KeyedMutator } from "swr";

import { isUndefined } from "@/utils/data-check";

type useCreateSharedStateType = {
  <T = any>(key: Key, initialData?: NonNullable<T>): {
    data: T | undefined;
    mutate: KeyedMutator<any>;
  };
};

/**
 * SWRを用いて共有ステートを作成する
 *
 * @param {Key} key ステートを特定するキー
 * @param {unknown} initialData 初期値データ
 *
 * @return data, mutate
 */
const useCreateSharedState: useCreateSharedStateType = (key, initialData) => {
  const { data, mutate } = useSWR(
    key,
    null,
    !isUndefined(initialData)
      ? {
          fallbackData: initialData,
        }
      : undefined,
  );

  return {
    data,
    mutate,
  };
};

export type { useCreateSharedStateType };
export { useCreateSharedState };
