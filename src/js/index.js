//swiper js
var swiper = new Swiper('.swiper-container', {
pagination: '.swiper-pagination',
    paginationClickable: true
});
//angular js
var app=angular.module("myApp",['infinite-scroll']);
app.controller("firstcontroller",function($scope){
			
});
app.controller("secondcontroller",function($scope,$http){
		$http.get("new_file.json").success(function(data){
			$scope.list=data[0].result;
			$scope.list2=data[1].result;
		}).error(function(){
			console.log("获取失败！")
		})
});
    var f_time=new Date("2016/11/20");
    var f_number=f_time.getTime();
app.controller("timecontroller",function($scope,$interval){
    $scope.time=$interval(function(){
     	var n_time=new Date();
     	var n_number=n_time.getTime();
     	var number=f_number-n_number;
     	if(number>0){
     	$scope.hour = parseInt(number / 1000 / 60 / 60 % 24);
        $scope.minute = parseInt(number / 1000 / 60 % 60);
        $scope.second = parseInt(number / 1000 % 60);
     	}else{
     		clearInterval(time);
     	}
     },1000);
});
    
app.controller('DemoController', function($scope, Reddit) {
           $scope.reddit = new Reddit();//调用工厂函数
           
        });
        
//工厂模式
app.factory('Reddit', function($http) {
  var Reddit = function() {
      this.items = [];//定义item为空数组
      this.busy = false;
      this.img=true;
      this.page=0;
    };

    Reddit.prototype.nextPage = function() {//原型
      if (this.busy) return;
      this.busy = true;

      var url = "http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=" + this.page;
      $http.get(url).success(function(data) {
	      var items = data.result;
	      this.items = this.items.concat(items);
	      this.busy = false;
	      this.page += 1;
	      console.log(this.items);
	      if(this.page>=4){
	      	this.busy = true;
	      	this.img=false;
	      }
        }.bind(this));

    };
    Reddit.prototype.more=function(){
    	this.busy = false;
	    this.img=true;
	    Reddit.nextPage()
    }
    
    
    return Reddit;
});






















    
//   var f_time=new Date("2016/11/20");
//   var f_number=f_time.getTime();
//   var time=setInterval(function(){
//   	var n_time=new Date();
//   	var n_number=n_time.getTime();
//   	var number=f_number-n_number;
//   	if(number>0){
//   	var hour = parseInt(number / 1000 / 60 / 60 % 24);
//      var minute = parseInt(number / 1000 / 60 % 60);
//      var second = parseInt(number / 1000 % 60);
//      $("#hour").html(hour);
//      $("#Minute").html(minute);
//      $("#second").html(second);
//   	}else{
//   		clearInterval(time);
//   	}
//   },1000);
//  
//  
//  var index = 0;
//  var _html = '';
//  ajax(showImg);
//  // 2）当滚动条滚动到接近底部时，加载更多的数据
//			$(window).on('scroll',function(){
//				var scrollTop = $(window).scrollTop();
//				// 文档内容高度
//				var docHeight = $(document).height();
//				// 窗口高度
//				var winHeight = $(window).height();
//				// 滚动条滚到底时触发
//				if(scrollTop >= docHeight - winHeight){
//					index++;
//					if(index<=3){
//						ajax(showImg);
//					}else{
//						$(".more").show();
//						$(".more h1").click(function(){
//							ajax(showImg);
//						})
//					}
//				}
//			});
//  
//  function ajax (callback) {
//				var i = (index == 1) ? index : index * 6;
//				$.ajax({
//						url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=6&cb=tempGuessLikeCallback',
//						dataType:'jsonp',
//						jsonp: 'callback',
//						jsonpCallback: 'tempGuessLikeCallback',
//						scriptCharset:'gb2312', 
//						success:function(res){
//							var data = res.data;
//							$.each(data,function(index,ele){
//								// 把json的图片路径先放在新增的data-lazy-img属性里面，等数据处理完了再替换src属性
//								_html +="<li><img class='img' src='img/load.gif' data-lazy-img=http://img13.360buyimg.com/n1/s200x200_"+ele.img+"><div class='list_box'><div class='font'>"+ele.t+"</div><div class='money'>"+ele.jp+"￥"+"</div></div></li>"
//							});
//							$("#list").html(_html);
//							
//							// 回调函数，等数据全部拼接完再执行
//							if (typeof callback == 'function') {
//								callback();
//							}
//						}
//					});
//			}
//			
//			// 用data-lazy-img属性替换src属性
//			function showImg () {
//				$(".img").each(function (){
//					$(this).animate({opacity:0.3}, 500, function() {
//						$(this).attr('src', $(this).attr('data-lazy-img')).animate({opacity: 1}, 1000);
//					});
//				})
//			}
