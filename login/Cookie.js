// 보통 쿠키는 이렇게 생겼다.
// document.cookie = 'username=; expires=Thu, 01 jan 2020 00:00:00 UTC; path=/;';

// 쿠키를 만드는 함수
function setCookie(cookieName, cookieValue, exdays) {
  // 쿠키이름, 쿠키 값, 유효기간
  let cuttentDate = new Date();
  cuttentDate.setTime(cuttentDate.getTime() + exdays * 60 * 60 * 24 * 1000); // 60 * 60 * 24 * 1000 날짜단위로 유효기간을 설정하기 위한 계산
  const expires = 'exprires=' + cuttentDate.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + 'path=/'; // 경로를 지정하면 특정 경로에서만 쿠키를 쓴다는 의미
}

setCookie('username', 'publee', 1); // 하루 동안 유효하게한다. 유효기간이 설정이 안되어있다면 브라우저를 끄면 삭제가 된다.
