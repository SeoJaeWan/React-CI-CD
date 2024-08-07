module.exports = {
  // Google Spreadsheet에 접근할 때 사용되는 Google Spreadsheet id
  // Google Spreadsheet 링크가 https://docs.google.com/spreadsheets/d/12345/edit?pli=1#gid=499495518 형태라면, 그 중 12345가 Google Spreadsheet id
  LHCI_GOOGLE_SPREAD_SHEET_ID: "1qsMV_Rzqk-mAKOIUDnZiQRzQIiRSw3JALDSqteRFkjA",

  // Lighthouse 점수 색상 기준
  // https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=ko#color-coding 참고
  // Lighthouse의 점수 기준을 따름
  // 0 ~ 49 (빨간색): 나쁨
  // 50 ~ 89 (주황색): 개선 필요
  // 90 ~ 100 (녹색): 좋음
  LHCI_GREEN_MIN_SCORE: 90,
  LHCI_ORANGE_MIN_SCORE: 50,
  LHCI_RED_MIN_SCORE: 0,

  // lighthouse 성능 측정할 페이지 이름 목록
  // PR Comment에 페이지 url이 아닌 페이지 이름을 노출시키기 위해 필요함
  // 페이지 url이 짧다면 괜찮지만, 길다면 가독성이 떨어질 수 있기 때문에 페이지 이름을 보여주는 것을 추천
  LHCI_MONITORING_PAGE_NAMES: ["메인페이지"],

  // lighthouse 성능 측정할 페이지 이름 - url 매핑
  LHCI_PAGE_NAME_TO_URL: {
    메인페이지: "/",
  },

  // lighthouse 성능 측정할 페이지 이름 - 시트 id 매핑
  // Google Spreadsheet 링크가 https://docs.google.com/spreadsheets/d/12345/edit#gid=123123라면, 시트 id는 123123 부분
  LHCI_PAGE_NAME_TO_SHEET_ID: {
    메인페이지: 0,
  },

  // 페이지 이름을 받아서 페이지 url을 리턴해주는 함수
  getLhciPageNameFromUrl: (url) => {
    for (const [name, path] of Object.entries(
      module.exports.LHCI_PAGE_NAME_TO_URL
    )) {
      if (decodeURIComponent(path) === decodeURIComponent(url)) return name;
    }
  },

  // 페이지 url을 받아서 페이지 이름을 리턴해주는 함수
  getLhciUrlFromPageName: (name) => {
    return module.exports.LHCI_PAGE_NAME_TO_URL[name];
  },

  // 페이지 이름을 받아서 페이지 시트 id를 리턴해주는 함수
  getLhciSheetIdFromPageName: (name) => {
    return module.exports.LHCI_PAGE_NAME_TO_SHEET_ID[name];
  },
};
