const {
  LHCI_MONITORING_PAGE_NAMES,
  getLhciUrlFromPageName,
} = require("./src/configs/lighthouse/constant.js");

const urls = LHCI_MONITORING_PAGE_NAMES.map(
  (name) => `http://localhost:3000${getLhciUrlFromPageName(name)}`
);

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: urls,
      numberOfRuns: 1,
      settings: {
        preset: "desktop", // 🍥
      },
    },

    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports/desktop", // 🍥
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
  },
};
