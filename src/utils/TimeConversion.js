export const calcTimeAgo = (time) => {
  const ISOTimeCreated = new Date(time);

  const miliSecTimeCreated = ISOTimeCreated.getTime();
  const timeNowInMiliSec = new Date().getTime();

  const miliSecTimeAgo = timeNowInMiliSec - miliSecTimeCreated;

  const secondsAgo = (miliSecTimeAgo / 1000).toFixed();
  const minutesAgo = (secondsAgo / 60).toFixed();
  const hoursAgo = (secondsAgo / 3600).toFixed();
  const daysAgo = (secondsAgo / (3600 * 24)).toFixed();
  const weeksAgo = (secondsAgo / (3660 * 24 * 7)).toFixed();

  const singularPlural = (ago, name) => {
    const timeAgo = ago < 2 ? ago + ` ${name} ago` : ago + ` ${name}s ago`;
    return timeAgo;
  };

  if (secondsAgo < 60) {
    return singularPlural(secondsAgo, "second");
  } else if (minutesAgo < 60) {
    return singularPlural(minutesAgo, "minute");
  } else if (hoursAgo < 24) {
    return singularPlural(hoursAgo, "hour");
  } else if (daysAgo < 7) {
    return singularPlural(daysAgo, "day");
  } else {
    return singularPlural(weeksAgo, "week");
  }
};
