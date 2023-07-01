export const AMAndPMTo24hours = (time) => {
  let time24hours = time;

  if (time24hours.includes("PM")) {
    const hours = +time24hours.split(":")[0];
    time24hours = time24hours.replace(/.+(?=:)/, hours + 12);
  }

  return time24hours.split(/\s/)[0];
};

export const getDifferenceBetweenTime = (firstTime, secondTime) => {
  const getDate = (string) =>
    new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
  const different = getDate(secondTime) - getDate(firstTime);
  let differentRes, hours, minutes;
  if (different > 0) {
    differentRes = different;
    hours = Math.floor((differentRes % 86400000) / 3600000);
    minutes = Math.round(((differentRes % 86400000) % 3600000) / 60000);
  } else {
    differentRes = Math.abs(getDate(firstTime) - getDate(secondTime));
    hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
    minutes = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
  }

  return [hours, minutes];
};
