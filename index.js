$(document).ready(function () {
  // 点击简历显示弹窗
  $('.about-me').click(function () {
    let str = `
    <p>{name: 'CSKCOOL',</p>
    <p>age: 28,</p>
    <p>gender: 'Boy',</p>
    <p>address: 'ShenZhen',</p>
    <p>email: 'cskcool@163.com'}</p>
    <p></p>
    <p></p>
    <p></p>`

    layer.open({
      content: str,
      yes: function (index, layero) {
        //do something
        layer.close(index) //如果设定了yes回调，需进行手工关闭
      }
    })
  })
})
