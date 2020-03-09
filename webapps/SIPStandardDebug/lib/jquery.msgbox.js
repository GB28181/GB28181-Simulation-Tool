/**
 *    jquery.msgbox 6.0 - 2010-05-12
 *
 *  Author: pwwang
 *  Website: http://pwwang.com
 *  Note: All the stuff written by pwwang
 *        Feel free to do whatever you want with this file
 *        Please keep the distribution
 *
 **/
(function($) {

    var $msgbox = function(o) {

        if(typeof(o) == 'string'){ o = { content:{type:'text', content:o} } }   // 如果参数给出字符串， 则直接进行提示（text）
        opts = o || {};                                                         // 用于接收参数
        
        opts.width             = o.width             || 300;                    // 提示框的宽度
        opts.height            = o.height            || 150,                    // 提示框的高度
        opts.autoClose         = o.autoClose         || 0;                      // 自动关闭的时间, 0则不会自动关闭
        opts.title             = o.title             || '提示',                 // 提示框标题
        opts.wrapperClass      = o.wrapperClass      || 'msgbox_wrapper';       // 提示框外框class
        opts.titleClass        = o.titleClass        || 'msgbox_title';         // 提示框标题class
        opts.closeClass        = o.closeClass        || 'msgbox_close';         // 提示框关闭按钮class
        opts.titleWrapperClass = o.titleWrapperClass || 'msgbox_title_wrapper'; // 提示框标题行class
        opts.mainClass         = o.mainClass         || 'msgbox_main';          // 内容框class
        opts.bgClass           = o.bgClass           || 'msgbox_bg';            // 背景层class
        opts.buttonClass       = o.buttonClass       || 'msgbox_button';        // 内容框中button的class
        opts.inputboxClass     = o.inputboxClass     || 'msgbox_inputbox';      // 内容框中input box的class
        opts.content           = typeof o.content == 'string' ? {type:'text', content:o.content} : (o.content || {type:'text',content:''});
        opts.content.type      = o.content.type      || 'text';
        opts.content.content   = o.content.content   || '';
        // support:  text, url(=get,ajax), iframe, confirm, alert; confirm, alert is added in version 4.0, input added in V5.0
        opts.onClose           = o.onClose           || function(){};           // 关闭时执行的事件 
        opts.closeIcon         = typeof o.closeIcon == 'string' ? {type:'string', content:o.closeIcon} : (o.closeIcon || {type:'string',content:'×'});
        opts.closeIcon.type    = o.closeIcon.type    || 'string';
        opts.closeIcon.content = o.closeIcon.content || '×'; 
        opts.closeIcon.content = opts.closeIcon.type == 'icon' ? '<img src="' + opts.closeIcon.content + '" border="0" />' : opts.closeIcon.content;
        opts.bgOpacity         = o.bgOpacity         || 0.6;                    // from 0 to 1  背景透明度
        opts.onAjaxed          = o.onAjaxed          || function(){};           // ajax执行完之后的事件 
        opts.onInputed         = o.onInputed         || function(){};           // 输入框关闭后的事件
        opts.drag              = typeof o.drag != 'boolean' ? true : o.drag; // 默认允许拖拽
        opts.animation         = typeof o.animation != 'number' ? 1 : o.animation
        
        var returnValue = false;        // 返回值, 用于confirm和input
        var relTop      = 0;            // 提示框离窗口上边的距离
        var relLeft     = 0;            // 提示框离窗口左边的距离, 用于页面滚动时保持窗口不动
        
        var $background = $("<div>")
            .css({
                 'position' : 'absolute',
                 'top'      : '0',
                 'left'     : '0',
                 'z-index'  : '9999',
                 'opacity'  : '0'
            })
            .addClass(opts.bgClass)
            .dblclick(closeMe)          // 双击关闭提示框
            .click(function(){          // 单击闪烁提示框
                flashTitle(0.5, 4, 80);
            });

        var $wrapper = $("<div>")
            .css({
                'width'     : opts.width + 'px',
                'height'     : opts.height + 'px',
                'position'     : 'absolute',
                'z-index'    : '10000',
                'display'   : 'none'
            })
            .addClass(opts.wrapperClass)
        
        var $titleWrapper = $('<ul><li>提示</li><li>关闭</li></ul>')
            .addClass(opts.titleWrapperClass)
            .appendTo($wrapper);
            
        var $titleLi = $("li:first", $titleWrapper)
            .html(opts.title)
            .addClass(opts.titleClass);
            
        var $closeLi = $titleLi.next()
            .addClass(opts.closeClass)
            .html(opts.closeIcon.content)
            .mousedown(closeMe);
                        
        var $main = $(document.createElement("div"))
            .addClass(opts.mainClass)
            .appendTo($wrapper);
            
        $main.height( opts.height - $titleWrapper.outerHeight(true) - $main.outerHeight(true) + $main.height() ); // 计算内容框高度
        
        function animation(act, t){
            switch(t){
                case 1:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.slideDown('slow'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.slideUp('slow', $wrapper.remove);
                    }
                    break;
                case 2:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.animate({'width':'toggle'}, 'slow', 'swing'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.animate({'width':'toggle'}, 'slow', 'swing', $wrapper.remove);
                    }
                    break;
                case 3:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.animate({'width':'toggle', 'height':'toggle'}, 'slow', 'swing'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.animate({'width':'toggle', 'height':'toggle'}, 'slow', 'swing', $wrapper.remove);
                    }                
                    break;
                default:
                    if(act=='open'){
                        $background.css('opacity',opts.bgOpacity);
                        $wrapper.css('display', '');
                    } else {
                        $background.remove();
                        $wrapper.remove();
                    }
            }
        }
        
        function closeMe(){
            animation('close', opts.animation);
            opts.onClose(returnValue);                
        }
        
        function isVisible(){
            return    $background.is(":visible") &&
                    $wrapper.is(":visible");
        }

        function autoCloseMe(autoClose){            
            if( autoClose > 0 && isVisible() ){  // 防止人为关闭后,计时器还在运行
                autoCloseStr = "<font>Auto-closed after " + autoClose + "s ...</font>";
                $titleLi.html(opts.title + " &nbsp; " + autoCloseStr);        
                autoClose --;
                if( autoClose == 0 ) 
                    closeMe();    
                setTimeout(function(){ autoCloseMe(autoClose) }, 1000);    
            }        
        }
        
        function resetPosition() {
            $background.css({
                 'width'    : document.documentElement.scrollWidth + 'px',
                 'height'    : document.documentElement.scrollHeight + 'px'
            });
            relLeft = ($(window).width() - opts.width)/2;
            relTop = ($(window).height() - opts.height)/2;
            fixBox();     // 定位初始位置
        }
        
        function flashTitle(opacity, times, interval, flag){ // 闪烁标题(模拟windows)
            if( times > 0 ) {
                flag = !flag;
                op = flag ? opacity : 1;
                $titleWrapper.css('opacity',op);    
                setTimeout(function(){ flashTitle(opacity, times-1, interval, flag) }, interval);
            }
        }
        
        function fixBox(){  // 定位box
            $wrapper.css({
                'top'        : $(window).scrollTop() + relTop + 'px',
                'left'         : $(window).scrollLeft() + relLeft + 'px'             
            });    
        }
        
        function msgbox(ctt){    // 按类型填充内容
            switch(ctt.type){
                case 'input':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $inputbox = $("<input type='text' />")
                        .appendTo($main)
                        .addClass(opts.inputboxClass);
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $yesButton = $("<input type=button value=' OK '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .after(" &nbsp; &nbsp; ")
                        .click(function(){
                            opts.onInputed($inputbox.val());  // 返回输入的值
                            closeMe();
                        });
                    var $noButton = $("<input type=button value=' Cancel '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(closeMe);
                    break;
                case 'alert':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $OKButton = $("<input type=button value=' OK '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(closeMe);
                    break;
                case 'confirm':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $yesButton = $("<input type=button value=' Yes '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .after(" &nbsp; &nbsp; ")
                        .click(function(){
                            returnValue = true;
                            closeMe();
                        });
                    var $noButton = $("<input type=button value=' No '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(function(){
                            returnValue = false;
                            closeMe();
                        });
                    break;                    
                case 'get':
                case 'ajax':
                case 'url':
                    $main.html("Loading ...").load(
                        ctt.content,
                        function(data){
                            (opts.onAjaxed)(data);    
                        }
                    );
                    break;            
                case 'iframe':
                    $("<iframe frameborder=0 marginheight=0 marginwidth=0></iframe>")
                        .appendTo($main)
                        .attr({
                            'width'         : '100%',
                            'height'        : '100%',
                            'scrolling'     : 'auto',
                            'src'           : ctt.content
                        });
                    break;
                default:
                    $main.html("<p>" + ctt.content + "</p>");
            }    

        }
        
        function allowDrag(flag){
            if(flag)
                $wrapper.Drags({  // 允许拖拽
                    handler : $titleWrapper,
                    onMove: function(){ $(window).unbind('scroll') },
                    onDrop: function(){
                        relTop = $wrapper.getCss('top') - $(window).scrollTop();
                        relLeft = $wrapper.getCss('left') - $(window).scrollLeft();
                        $(window).scroll(fixBox);
                    }
                }); 
        }
        
        function showMe(){   // show the box
        
            $('body').append($background).append($wrapper);
            animation('open', opts.animation);
            
            resetPosition();
            
            $(window)
                .load(resetPosition)        // just in case user is changing size of page while loading
                .resize(resetPosition)
                .scroll(fixBox);

            msgbox(opts.content);    //填充内容
            
            if( opts.autoClose > 0 )  // 自动关闭
                autoCloseMe(opts.autoClose);
            
            allowDrag(opts.drag);

        }
        
        showMe();
        
        // public properties and functions:  
        this.value           = returnValue;
        this.close           = closeMe;    
        this.setAutoClose    = function(v){ opts.autoClose = v; autoCloseMe(v); return this; }
        this.setHeight       = function(v){ opts.height = v; $wrapper.css( 'height', v + 'px' ); return this; }
        this.setWidth        = function(v){ opts.width = v; $wrapper.css( 'width', v + 'px' ); return this; }
        this.setTitle        = function(v){ opts.title = v; $titleLi.html(v); return this; }
        this.setWrapperClass = function(v){ opts.wrapperClass = v; $wrapper.removeClass().addClass(v); return this; }
        this.setTitleClass   = function(v){ opts.titleClass = v; $titleLi.removeClass().addClass(v); return this; }
        this.setCloseClass   = function(v){ opts.closeClass = v; $closeLi.removeClass().addClass(v); return this; }
        this.setTitleWrapperClass = function(v){ opts.titleWrapperClass = v; $titleWrapper.removeClass().addClass(v); return this; }
        this.setMainClass    = function(v){ opts.mainClass = v; $main.removeClass().addClass(v); return this; }
        this.setBgClass      = function(v){ opts.bgClass = v; $background.removeClass().addClass(v); return this; }
        this.setButtonClass  = function(v){ opts.buttonClass = v; $(":input(input[type=button], input[type=submit], input[type=reset])", $main).removeClass().addClass(v); return this; }
        this.setInputboxClass= function(v){ opts.inputboxClass = v; $("input[type=text]", $main).removeClass().addClass(v); return this; }
        this.setContent      = function(v){ 
            v = typeof v == 'string' ? {type:'text', content:v} : v;
            v.type = v.type || 'text';
            v.content = v.content || opts.content.content || '';
            opts.content = v;
            msgbox(v); 
            return this; 
        }
        this.setBgOpacity    = function(v){ opts.bgOpacity = v; $background.css('opacity', v); return this; }         
        this.setOnClose      = function(v){ opts.onClose = v; return this; }
        this.setOnAjaxed     = function(v){ opts.onAjaxed = v; return this; }
        this.setOnInputed    = function(v){ opts.onInputed = v; return this; }
        this.setAnimation    = function(v){ opts.animation = v; return this; }
        this.setCloseIcon    = function(v){  
            v         = typeof v == 'string' ? {type:'string', content:v} : v;
            v.type    = v.type    || 'string';
            v.content = v.content || '×'; 
            v.content = v.type == 'icon' ? '<img src="' + v.content + '" border="0" />' : v.content;        
            opts.closeIcon = v;
            $closeLi.html(v.content);
            return this; 
        }
        
    }
    
    $.msgbox = function(o){ return new $msgbox(o); }    
    return $.msgbox;

})(jQuery);
