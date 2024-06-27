function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function isTablet() {
  return /iPad|Tablet|PlayBook|Silk|Android 3.0|Touch/.test(navigator.userAgent) && !/Mobile/.test(navigator.userAgent);
}

function detectDevice() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let deviceType = "桌上電腦或筆電";

  if (isMobileDevice()) {
      deviceType = "手機";
  } else if (isTablet()) {
      deviceType = "平板";
  }

  document.getElementById('device-type').innerText = `裝置類型: ${deviceType}`;
  document.getElementById('resolution').innerText = `可視區域解析度: ${width} x ${height}`;
}

window.onload = detectDevice;
window.onresize = detectDevice;
