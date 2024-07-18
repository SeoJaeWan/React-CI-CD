import {
  LHCI_MONITORING_PAGE_NAMES,
  getLhciUrlFromPageName,
} from "./src/configs/lighthouse/constant.js";

const urls = LHCI_MONITORING_PAGE_NAMES.map(
  (name) => `http://localhost:3000${getLhciUrlFromPageName(name)}`
);

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: urls,
      numberOfRuns: 1,
    },

    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports/mobile", // 🍥
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
  },
};
