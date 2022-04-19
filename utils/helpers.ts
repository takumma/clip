export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

export const getFaviconSrcFromOrigin = (hostname: string) => {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
};

export const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};
