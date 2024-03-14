/* 메인배너 */
new Swiper('.promotion .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 2000 // 5초마다슬라이드 바뀜(기본값: 3000)
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수(기본값: 1) 
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지네이션 번호 사용
    el: '.promotion .swiper-pagination', // 페이지네이션 번호 요소 선택자
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

//   navigation: {// 슬라이드 이전/다음 버튼 사용
//     nextEl: '.promotion .swiper-button-next',
//     prevEl: '.promotion .swiper-button-prev'
// },
});

// 프로모션 섹션 토글 기능
// const promotionEl =  document.querySelector('.promotion');
// const promotionToggleBtn =  document.querySelector('.toggle-promotion');
// const promotionToggleIcon =  promotionToggleBtn.querySelector('.material-icons');


// promotionToggleBtn.addEventListener('click', function ( ) {
//   if (promotionEl.classList.contains('hide')) {
//   promotionEl.classList.remove('hide');
//   promotionToggleIcon.textContent = 'upload';
//   } else {
//   promotionEl.classList.add('hide');
//   promotionToggleIcon.textContent = 'download';
//   }
// });