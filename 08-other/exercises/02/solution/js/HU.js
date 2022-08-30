
'use strict'

const HU = {
  date(date) {
    return new Intl.DateTimeFormat("hu-HU").format(date);
  },
  currency(value) {
    return new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    }).format(value);
  },
  list(stringArr) {
    const lastEl = stringArr.pop();
    return stringArr.join(", ").concat(` és ${lastEl}`);
  },
};


export default HU
