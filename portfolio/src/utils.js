// takes relative path and we pass to it the path of the URL with the image file
export const getImageUrl = (path) => {
  return new URL(`build/${path}`, import.meta.url).href;
};