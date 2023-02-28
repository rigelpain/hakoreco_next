type fetchUrlType = RequestInfo | URL;

/**
 * fetch APIのラッパー
 *
 * @param {fetchUrlType} url フェッチするURL（絶対パス）
 *
 * @return Promise | Error
 */
const fetcher = async (url: fetchUrlType) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return await res.json();
};

export type { fetchUrlType };
export { fetcher };
