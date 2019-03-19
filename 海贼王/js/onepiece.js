// $(function() {
//     FastClick.attach(document.body);
// });

$(function () {
  $(".hd_menu>li").on("click", function () {
    // $(this).find("a").css({"opacity":"1","border-bottom":"2px solid #f7f7f7"});
    // $(this).siblings("li").find("a").css({"opacity":"0.7","border-bottom":"none"});   
  })
  //  动态设置主体内容的margin-top值
  var height1 = $(".zy_header").height();
  $(".zy_body").css("margin-top", height1);

  //下拉刷新
  mui.init({
    pullRefresh: {
      container: refreshContainer, //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
      up: {
        height: 50, //可选.默认50.触发上拉加载拖动距离
        auto: false, //可选,默认false.自动上拉加载一次
        contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
        contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
        callback: function () {
          $("#testUl").append($(
            "<li>" + "<img src=images/1d.jpg>" + "</li>"));
          // $("#testUl").append($("#testUl").children)
          this.endPullupToRefresh(true);
        } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      }
    }
  });
  // // 滑动事件

  // (function($) {
  // 	$('.mui-scroll-wrapper').scroll({
  // 		bounce: false,
  // 				indicators: true, //是否显示滚动条

  // 			});
  // })(mui);
  // 获取body的高度
  // 给article注册滑动事件。
  // 滑动的距离具体实现是改变article的偏移值
  // var body_height = $("body").height()
  // var startY = 0;
  // var moveY = 0;
  // var distanceY = 0;
  // var currentY = 0;
  //     /*设置静止状态下的最大top值*/
  // var maxTop=0;
  // $("article").on("touchstart",function(e){
  //   startY = e.originalEvent.targetTouches[0].pageY;
  //   // console.log(startY);

  // });
  // $("article").on("touchend",function(e){
  //   moveY = e.originalEvent.changedTouches[0].pageY;
  //   distanceY = moveY - startY;
  //   // if(currentY+distanceY > maxBounceTop || currentY+distanceY < minBounceTop){
  //   //   return;
  //   // }
  //   console.log(distanceY);

  //   $("article").css({"top":"(currentY+distanceY)+'px'"})

  // });




  // 无用背景


  //策划菜单栏
  var width1 = $(".personal").width();
  // 菜单栏打开
  $(".personal").css("margin-left", -width1);
  $(".touxiang").on("click", function () {
    $(".personal").animate({
      marginLeft: 0
    }, 700)
  })
  // 菜单栏返回
  $(".get_back").on("click", function () {
    $(".personal").animate({
      marginLeft: -width1
    }, 700)
  })

  // 底部导航栏注册点击世界动态修改class
  // 用世界委托

  $(".fd_menu").on("click", "li", function () {
    $(this).find('a').addClass("fd_menu_class");
    $(this).siblings().find('a').removeClass("fd_menu_class");
  })

  $(".exit").on("click", function () {
    location.href = "login.html"
  })
});