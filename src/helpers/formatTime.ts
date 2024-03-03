export const formatTime = (time: number): string => {
  return new Date(time * 1000).toUTCString().split(/ /)[4];
};
