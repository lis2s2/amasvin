// 메인배너
new Swiper('.promotion .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다슬라이드 바뀜(기본값: 3000)
  },
});

// 이벤트
new Swiper('.event .swiper_event', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다슬라이드 바뀜(기본값: 3000)
  },
  // effect: 'fade',  
  //   effect: "cards",
  // grabCursor: true,
  pagination: { // 페이지네이션 번호 사용
    el: '.event .swiper-pagination', // 페이지네이션 번호 요소 선택자
    // clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
    type: "fraction",
  },
});

// 배달
// gsap.to(요소, 지속시간, 옵션: {})
gsap.to('.del_1', 1, {
  delay: 0.6, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: -30, // 수직으로 얼마나 움직일지 설정, transform: translateY(수치); 와 같음
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.ease // 타이밍 함수 적용, 느리게-빠르게-느리게
});
// 지속시간, delay, y를 자유롭게 변경하여 적용하기
gsap.to('.del_2', 1, {
  delay: 0.5,
  y: 30,
  repeat: -1,
  yoyo: true,
  ease: Power1.ease
});
gsap.to('.del_3', 1, {
  delay: 1,
  y: -30,
  repeat: -1,
  yoyo: true,
  ease: Power1.ease
});

// 추천메뉴
new Swiper('.best .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000 
  },
  pagination: { // 페이지네이션 번호 사용
    el: '.best .swiper-pagination', // 페이지네이션 번호 요소 선택자
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },
  slidesPerView: 5,
  centeredSlides: true,     

//   navigation: {
//     nextEl: '.best .swiper-button-next',
//     prevEl: '.best .swiper-button-prev'
// },
});

const bestEl =  document.querySelector('.best');
const bestToggleBtn =  document.querySelector('.toggle-menu');
const bestToggleIcon =  bestToggleBtn.querySelector('.material-icons');

bestToggleBtn.addEventListener('click', function ( ) {
  if (bestEl.classList.contains('hide')) {
  bestEl.classList.remove('hide');
  bestToggleIcon.textContent = 'upload';
  } else {
  bestEl.classList.add('hide');
  bestToggleIcon.textContent = 'download';
  }
});

// 창 
// function showModal() {
//   document.getElementById('modal').style.display = 'block';
// }
function hideModal() {
  document.getElementById('modal').style.display = 'none';
}