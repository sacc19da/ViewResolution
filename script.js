function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function isTablet() {
  return /iPad|Tablet|PlayBook|Silk|Android 3.0|Touch/.test(navigator.userAgent) && !/Mobile/.test(navigator.userAgent);
}

function detectDevice() {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  let deviceType = "桌上電腦或筆電";

  if (isMobileDevice()) {
      deviceType = "手機";
  } else if (isTablet()) {
      deviceType = "平板";
  }

  document.getElementById('device-type').innerText = `裝置類型: ${deviceType}`;
  document.getElementById('innerResolution').innerText = `window.inner解析度: ${innerWidth} x ${innerHeight}`;
  document.getElementById('documentClientResolution').innerText = `document.documentElement.client解析度: ${clientWidth} x ${clientHeight}`;
}

window.onload = detectDevice;
window.onresize = detectDevice;
