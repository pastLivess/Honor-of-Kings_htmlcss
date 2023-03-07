const dnf_img = document.querySelector('.top_dnf')
const ost_img = document.querySelector('.ost_img')
const imgs = document.querySelectorAll('.rank_item >img')
const rank_btn_bar = document.querySelectorAll('.rank_btn_bar')
const top_ranking = document.querySelector('.top_ranking')
const ost_rank = document.querySelector('.ost_rank')
dnf_img.addEventListener('mouseenter', function () {
  ost_img.style.display = 'block'
})
ost_img.addEventListener('mouseleave', function () {
  ost_img.style.display = 'none'
})
