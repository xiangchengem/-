$(function () {
    // 注册页面移动
    // 点击从下往上移，
    // 移动的距离是自身的高度
    var asdHeight = $("aside").height();
    var bgshow = $("#register").css("margin-top", -asdHeight);
    $("#register").css("margin-top", -asdHeight);
    $(".login_up").on("click", function () {
        $("#register").animate({
            marginTop: 10 + "%"
        }, 700);
        $(".login-bg").fadeIn(700);
    })
    $("#submitA").on("click", function () {
        $("#register").animate({
            marginTop: -asdHeight
        }, 700);
        $(".login-bg").fadeOut(700);
    });
    // 表单验证
    // $("#userName").blur(function(){
    //     var nameVal = $.trim(this.value);
    //     console.log(nameVal.length);

    //     var regName = /[~#^$@%&!*()<>:;'"{}【】 ]/;
    //     if(nameVal.length<=6 || nameVal.length>=20 || regName.test(nameVal)){
    //         $(".icon1").css("display","block");
    //         $(".icon1").find("img").attr("src","images/icon7.png")
    //         $(".icon1").css("backgroundColor","#48D1CC")
    //         //判断不通过
    //     }else{
    //         $(".icon1").find("img").attr("src","images/icon8.png")
    //         $(".icon1").css("backgroundColor","#00BFFF")
    //         //判断通过
    //     }

    // })
    // 现在进行一个函数封装
    // 函数两个参数一个传元素一个传正则 调用
    // 怎么样进行判断？
    // 密码不能为空，密码长度4-10位。ok
    // 长度可以变，
    checkedReg("#userName", /^[a-zA-Z0-9_-]{4,16}$/);
    checkedReg("#pwd", /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,20}$/);
    checkedReg("#promise", /[0-9]{6}/); //验证码
    checkedReg("#phoneNum", /0?(13|14|15|17|18|19)[0-9]{9}/);

    function checkedReg(obj, reg) {
        $(obj).blur(function () {
            var nameVal = $.trim(this.value); //不为空
            // 当前获取的是input标签，改变样式的是下一个兄弟标签
            if (reg.test(this.value) || reg.test(nameVal)) {
                $(this).next().find("img").attr("src", "images/icon8.png");
                $(this).next().css("backgroundColor", "#00BFFF")
                //判断通过
            } else {
                $(this).next().css("display", "block");
                $(this).next().find("img").attr("src", "images/icon7.png");
                $(this).next().css("backgroundColor", "#48D1CC");
                //判断不通过
            }
        })
    }
    // 手机验证码
    // $("#yanzhengma").on("click",function(){

    // })
    // localStorage存储数据
    // i.	SetItem(key,value):设置数据，以键值对的方式
    // ii.	getItem(key):通过指定的键获取对应的值内容
    // iii.	removeItem(key):删除指定的key及对应的值内容
    // iv.	clear():清空所有存储内容

    $("#submitB").on("click", function () {
        var Name = $("#userName").val();
        var passWord = $("#pwd").val();
        var phonenumber = $("#phoneNum").val();
        localStorage.setItem("userName", Name);
        localStorage.setItem("userpsd", passWord);
        localStorage.setItem("userphone", phonenumber);
    })
    var name = localStorage.userName;
    var pas = localStorage.userpsd;
    var phh = localStorage.userphone;

    // 用已经储存的数据做个验证，当用户名或者手机号被注册，这个按钮不能被点击
    // 登录事件
    // $(".submit").on("click",function(event){ 
    //     if(true){
    //              //阻止默认提交事件
    //      event.preventDefault();
    //     } 
    //     })  
    //进行登录验证，从localStorange获取值，
    // 点击a标签，判断input的值
    // 如果当前input的value的值等于localStorage里面记录的值
    // 就让他登录成功，就修改a标签的herf属性值
    // 失败的话就给出提示   内容请重新确定账号或密码，或者注册一个账号
    // a标签不对，删掉a标签，给input注册点击事件结构，动态生成input连接
    $("#login").on("click", function () {
        if (true) {
            //阻止默认提交事件
            event.preventDefault();
        }
        name = localStorage.userName;
        pas = localStorage.userpsd;
        phh = localStorage.userphone;
        var ok1 = false; //这是一个判断两个条件都满足的情况采取执行样式
        var ok2 = false;
        if ($("#login_name").val() == name || $("#phoneNum").val() == phh) {
            console.log("用户名登录成功");
            ok1 = true;
        } else {
            console.log("用户米登陆失败");
        }
        if ($("#login_psd").val() == pas) {
            console.log("密码登陆成功");
            ok2 = true;
        } else {
            console.log("密码登陆失败");
        }
        if (ok1 && ok2) {
            location.href = "index.html"
        } else {
            //让.content_zg和.dianjiqueren_bg分别显示
            // alert("登录失败")
            // $(".content_zg").css("display","block");
            // $(".dianjiqueren_bg").css("display","block")
            $(".content_zg").fadeIn(1000).delay(5000).fadeOut(1000);
            $(".dianjiqueren_bg").fadeIn(1000).delay(5000).fadeOut(1000);
        }
    })
    $(".dianjiqueren").on("click", function () {
        $(".content_zg").css("display", "none")
        $(".dianjiqueren_bg").css("display", "none")
    })
})
// submit提交按钮会提交表单，并且同时刷新页面，
// 也就是说如果点击提交按钮后，还想在判断错误的时候做某些事，例如弹出一个框
// 并且这个框不在form表单内，那么之后会事件冲突，什么事也干不了

// 两种方式一种是利用事件源参数的   event.preventDefault();
// 另外一种是去判断表单内的内容是否验证通过返回return false