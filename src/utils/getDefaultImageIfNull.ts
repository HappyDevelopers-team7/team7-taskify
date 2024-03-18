const getDefaultImageUrlIfNull = (url: string | null | undefined) => {
  return url === null ? '/assets/image/icons/bannerLogoIconS.svg' : url;
};

export default getDefaultImageUrlIfNull;
