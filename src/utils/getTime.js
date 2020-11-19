const getTime = (timesTamps) => {
  const now = new Date().getTime();
  const total = (now - timesTamps) / 1000;
  const secende = Math.floor(total % 60);
  const minuts = Math.floor(total / 60) % 60;
  const houres = Math.floor(total / 3600) % 24;
  const day = Math.floor(total / 3600 / 24);
  const week = Math.floor(day / 7);
  if (week > 0) return `${week} week ago`;
  if (day > 0) return `${day} day ago`;
  if (houres > 0) return `${houres} hours ago`;
  if (minuts > 0) return `${minuts} minute ago`;
  if (secende <= 60) return "Just Now";
};

export default getTime;
