function getResultByPath(path, obj) {
  if (!path || typeof path !== "string") return undefined;

  const excludeChars = [".", "[", "]"];
  const keys = [];
  let current = "";

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (excludeChars.includes(char)) {
      if (current) {
        keys.push(current);
        current = "";
      }
    } else {
      current += char;
    }
  }

  if (current) {
    keys.push(current);
  }

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
