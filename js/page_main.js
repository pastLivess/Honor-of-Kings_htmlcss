// 轮播图下面的每个a的父节点
const bannerBtn = document.querySelector('.btn')
const main_news_rotate = document.querySelector('.main_news_rotate')
// 轮播图 ->
const img_list = document.querySelector('.main_news_rotate .pic ')
const img_list_a = document.querySelectorAll('.main_news_rotate .pic a ')
let index = 0

bannerBtn.addEventListener('mouseover', function (e) {
  // e.target是每个a
  index = e.target.dataset.index
  // 判断是否有item这个class 没有的话就return
  if (!e.target.classList.contains('item')) return

  // 移除有on这个类的on类
  e.currentTarget.querySelector('.on').classList.remove('on')
  // 给触发事件的添加on
  e.target.classList.add('on')

  // img_list是整个轮播图
  img_list.style.transform = `translateX(${-604 * index}px)`
})


// 自动轮播

function autoPlay() {
  return setTimeout(function auto() {
    index++
    if (index >= img_list_a.length) index = 0
    img_list.style.transform = `translateX(${-604 * index}px)`
    bannerBtn.querySelector('.on').classList.remove('on')
    bannerBtn.children[index].classList.add('on')
    timer = setTimeout(auto, 3000)
  }, 3000)
}

let timer = autoPlay()

main_news_rotate.addEventListener('mouseenter', function () {
  clearTimeout(timer)
})
main_news_rotate.addEventListener('mouseleave', function () {
  if (timer) clearTimeout(timer)
  timer = autoPlay()
})
