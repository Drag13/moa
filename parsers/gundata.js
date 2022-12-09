(function parse() {
  const map = {
    0: "range",
    1: "drop",
    2: "speed",
    3: "energy",
    4: "wind drift",
    5: "time ms",
  };
  const cellMapper = (acc, val, i) => {
    acc[map[i]] = +val.innerText;
    return acc;
  };

  const trs = [...document.querySelectorAll(".balcalc-results tr")];

  const data = trs
    .slice(1)
    .map((x) => [...x.querySelectorAll("td")])
    .map((row) => row.reduce(cellMapper, {}));

  return JSON.stringify(data);
})();
