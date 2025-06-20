function getResultByPath(path, obj) {
  if (!path || typeof path !== "string") return undefined;

  const keys = path
    .replace(/\[(\w+)\]/g, ".$1") // convert [key] to .key
    .replace(/^\./, "") // remove leading dot if present
    .split(".");

  return keys.reduce((acc, key) => {
    if (acc !== undefined && acc !== null && key in acc) {
      return acc[key];
    }
    return acc === null ? null : undefined;
  }, obj);
}

const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
