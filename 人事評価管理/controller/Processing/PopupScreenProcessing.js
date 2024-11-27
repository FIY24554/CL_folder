// **************************************************************************************************************************************************************************************************************
//                                                                                                                                                                                                              *
// [処理概要]                                                                                                                                                                                                   *
//   ポップアップを表示する                                                                                                                                                                                     *
//                                                                                                                                                                                                              *
// [コンストラクタ]                                                                                                                                                                                             *
//   [引数]                                                                                                                                                                                                     *
//     なし                                                                                                                                                                                                     *
//                                                                                                                                                                                                              *
// [メソッド]                                                                                                                                                                                                   *
//                                                                                                                                                                                                              *
//   < this.show >                                                                                                                                                                                              *
//    [処理概要]                                                                                                                                                                                                *
//      ポップアップを表示する                                                                                                                                                                                  *
//    [引数]                                                                                                                                                                                                    *
//      なし                                                                                                                                                                                                    *
//                                                                                                                                                                                                              *
//   < this.hide >                                                                                                                                                                                              *
//    [処理概要]                                                                                                                                                                                                *
//      ポップアップを非表示にする                                                                                                                                                                              *
//    [引数]                                                                                                                                                                                                    *
//      なし                                                                                                                                                                                                    *
//                                                                                                                                                                                                              *
// [セッター]                                                                                                                                                                                                   *
//                                                                                                                                                                                                              *
//   < this.set_width                   > : ポップアップスクリーンの横幅                                                                                                                                        *
//   < this.set_height                  > : ポップアップスクリーンの縦幅                                                                                                                                        *
//   < this.set_screen_color            > : ポップアップスクリーンの背景色                                                                                                                                      *
//                                                                                                                                                                                                              *
//   < this.set_create_crossmark        > : ×マークを作成するかしないかのフラグ       true : 作成             false     : 作成しない                                                                           *
//                                                                                                                                                                                                              *
//   < this.set_create_button_type      > : 作成するボタンのタイプ                     OK   : OKボタンのみ     OK_Cancel : OKボタンとキャンセルボタン    Text_Cancel : 指定テキストボタンとキャンセルボタン     *
//   < this.set_font_size               > : ボタンのフォントサイズ                                                                                                                                              *
//                                                                                                                                                                                                              *
//   < this.set_OK_font_color           > : OKボタンのフォントカラー                                                                                                                                            *
//   < this.set_OK_background_color     > : OKボタンの背景色                                                                                                                                                    *
//                                                                                                                                                                                                              *
//   < this.set_cancel_font_color       > : キャンセルボタンのフォントカラー                                                                                                                                    *
//   < this.set_cancel_background_color > : キャンセルボタンの背景色                                                                                                                                            *
//                                                                                                                                                                                                              *
//   < this.set_text_font_color         > : 指定テキストボタンのフォントカラー                                                                                                                                  *
//   < this.set_text_background_color   > : 指定テキストボタンの背景色                                                                                                                                          *
//   < this.set_text_button_text        > : 指定テキストボタンのテキスト                                                                                                                                        *
//                                                                                                                                                                                                              *
//   < this.set_Cross_font_color        > : バツマークのフォントカラー                                                                                                                                          *
//   < this.set_Cross_background_color  > : バツマークの背景色                                                                                                                                                  *
//   < this.set_Cross_width             > : バツマークの横幅                                                                                                                                                    *
//   < this.set_Cross_height            > : バツマークの縦幅                                                                                                                                                    *
//   < this.set_Cross_font_size         > : バツマークのフォントサイズ                                                                                                                                          *
//                                                                                                                                                                                                              *
//                                                                                                                                                                                                              *
//   < this.set_default_width           > : デフォルトのボタン横幅                                                                                                                                              *
//   < this.set_default_height          > : デフォルトのボタン縦幅                                                                                                                                              *
//                                                                                                                                                                                                              *
//   < this.set_ClickEvent              > : OKボタン or 指定テキストボタンを押したときのイベント                                                                                                                *
//                                                                                                                                                                                                              *
//   < this.set_text_box_text        > : テキストボックスのテキスト                                                                                                                                             *
//    [引数]                                                                                                                                                                                                    *
//      Arg1 : テキスト                                                                                                                                                                                         *
//      Arg2 : テキストカラー                                                                                                                                                                                   *
//      Arg3 : フォントサイズ                                                                                                                                                                                   *
//      Arg4 : テキストの初期化                                                        true : 初期化           false : 初期化しない         ※初期値はfalse                                                     *
//                   _______________                                                                                                                                                                            *
//    ※使い方の例 : |   これは     |                                                                                                                                                                           *
//                   | テストです   |                                                                                                                                                                           *
//                   ~~~~~~~~~~~~~~~~                                                                                                                                                                           *
//                   このように改行して表示したい場合                                                                                                                                                           *
//                      set_text_box_text("これは"    ,"#000000",20);      // 一行目                                                                                                                            *
//                      set_text_box_text("テストです","#000000",20);      // 二行目                                                                                                                            *
//                                                                                                                                                                                                              *
// [ゲッター]                                                                                                                                                                                                   *
//                                                                                                                                                                                                              *
//   < this.get_frame          > : ポップアップフレーム                                                                                                                                                         *
//   < this.get_background     > : グレーの背景                                                                                                                                                                 *
//   < this.get_Screen         > : ポップアップスクリーン                                                                                                                                                       *
//                                                                                                                                                                                                              *
// **************************************************************************************************************************************************************************************************************
class PopupScreenProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        this.frame                   = null         ;                                               // ポップアップスクリーンのフレーム要素
        this.background              = null         ;                                               // グレーの背景の要素
        this.Screen                  = null         ;                                               // ポップアップスクリーンの要素
        
        this.width                   = 800          ;                                               // ポップアップスクリーンの横幅
        this.height                  = 400          ;                                               // ポップアップスクリーンの縦幅
        this.adjust_height           = 400          ;                                               // ポップアップスクリーンの縦幅調整後の縦幅
        this.screen_color            = "#b5b5b5"    ;                                               // ポップアップスクリーンの背景色
        
        this.create_crossmark        = true         ;                                               // ×マークを作成するかしないかのフラグ       true : 作成    false : 作成しない
        
        this.create_button_type      = "OK"         ;                                               // 作成するボタンのタイプ
        this.font_size               = "15"         ;                                               // ボタンのフォントサイズ
        
        this.button_frame            = null         ;                                               // ボタンのフレーム 要素
        this.OK_font_color           = "#303030"    ;                                               // OKボタンの フォントカラー
        this.OK_background_color     = "#bfba8d"    ;                                               // OKボタンの 背景色
        
        this.cancel_font_color       = "#303030"    ;                                               // キャンセルボタンの フォントカラー
        this.cancel_background_color = "#bfba8d"    ;                                               // キャンセルボタンの 背景色
        
        this.text_font_color         = "#303030"    ;                                               // 指定テキストボタンの フォントカラー
        this.text_background_color   = "#bfba8d"    ;                                               // 指定テキストボタンの 背景色
        this.text_button_text        = ""           ;                                               // 指定テキストボタンの テキスト
        
        this.Cross_font_color        = "#ffffff"    ;                                               // バツマークの フォントカラー
        this.Cross_background_color  = "#bf0000"    ;                                               // バツマークの 背景色
        this.Cross_width             = 40         ;                                                 // バツマークの 横幅
        this.Cross_height            = 30         ;                                                 // バツマークの 縦幅
        this.Cross_font_size         = 15         ;                                                 // バツマークの フォントサイズ
        
        this.default_width           = 150          ;                                               // デフォルトの ボタン横幅
        this.default_height          = 30           ;                                               // デフォルトの ボタン縦幅
        this.button_border           = 5;
        
        this.text_box                = null         ;                                               // テキストボックスの要素
        this.text_box_text           = []           ;                                               // テキストボックスのテキスト(配列)
        
        this.ButtonProcessing        = null         ;                                               // ボタン作成クラス格納用
        
        this.ClickEvent              = null         ;                                               // OKボタン or 指定テキストボタンを押したときのイベント
        
        // ここから追加部
        //this.top_button_frame_width  = 
        this.top_button_frame_height = 80;
        
        
        
        this.bottom_button_frame_height = 80;
        
        this.text_frame_height = this.height - (this.top_button_frame_height+this.bottom_button_frame_height);
        
        this.scroll_x = false;
        this.scroll_y = false;
        
        this.create_text_type = "One";
        
        this.separator_text_size = 15;
        
        this.parentheses = true;
        
        this.text_button_css        = null;
        this.text_button_text_css   = null;
        this.cancel_button_css      = null;
        this.cancel_button_text_css = null;
        this.OK_button_css          = null;
        this.OK_button_text_css     = null;
        
        this.head_text_date =null;
        
        // ボタン作成クラスインスタンス化
        if(typeof ButtonProcessing != "undefined"){this.ButtonProcessing = new ButtonProcessing();};
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ポップアップを表示する                                               *
    // ************************************************************************
    show(){
        
        // -------------------------------------+
        // 要素作成                             |
        // -------------------------------------+
        let frame                               = document.createElement("div")                         ;
        let background                          = document.createElement("div")                         ;
        this.Screen_frame                       = document.createElement("div")                         ;
        let Screen                              = document.createElement("div")                         ;
        let top_button_frame                    = document.createElement("div")                         ;
        let text_frame                          = document.createElement("div")                         ;
        let bottom_button_frame                 = document.createElement("div")                         ;
        
        // -------------------------------------+
        // プロパティに入れ込み                 |
        // -------------------------------------+
        this.frame                              = frame                                                 ;
        this.background                         = background                                            ;
        this.Screen                             = Screen                                                ;
        
        // -------------------------------------+
        // フレームのスタイル                   |
        // -------------------------------------+
        frame.style.width                       = document.body.clientWidth                             ;
        frame.style.height                      = document.body.clientHeight                            ;
        frame.style.position                    = "absolute"                                            ;
        frame.style.top                         = 0                                                     ;
        frame.style.left                        = 0                                                     ; 
        frame.style.zIndex                      = 99                                                    ;
        
        // -------------------------------------+
        // グレーの背景                         |
        // -------------------------------------+
        background.style.width                  = document.body.clientWidth                             ;
        background.style.height                 = document.body.offsetHeight                            ;
        background.style.backgroundColor        = "#505050"                                             ;
        background.style.opacity                = 0.5                                                   ;
        
        // -------------------------------------+
        // ポップアップスクリーンフレーム       |
        // -------------------------------------+
        this.Screen_frame.style.width           = this.width                                            ;
        this.Screen_frame.style.height          = this.height                                           ;
        this.Screen_frame.style.borderBottom    = "5px solid #959595"                                   ;
        this.Screen_frame.style.borderRadius    = "1vh"                                                 ;
        this.Screen_frame.style.position        = "absolute"                                            ;
        this.Screen_frame.style.background      = `linear-gradient(0deg,${this.screen_color},#f5f5f5`   ;
        this.Screen_frame.style.top             = (document.body.clientHeight - this.height) / 2        ;
        this.Screen_frame.style.left            = (document.body.clientWidth  - this.width ) / 2        ;
        this.Screen_frame.style.zIndex          = 100                                                   ;
        
        // -------------------------------------+
        // ポップアップスクリーン               |
        // -------------------------------------+
        Screen.style.width                      = this.width                                            ;
        Screen.style.height                     = this.height                                           ;
        
        // -------------------------------------+
        // 上のボタンのフレーム                 |
        // -------------------------------------+
        top_button_frame.style.width            = this.width                                            ;
        top_button_frame.style.height           = this.top_button_frame_height                          ;
        top_button_frame.style.position         = "relative"                                            ;
        
        // -------------------------------------+
        // テキスト部のフレーム                 |
        // -------------------------------------+
        text_frame.style.width                  = this.width                                            ;
        text_frame.style.height                 = this.text_frame_height                                ;
        text_frame.style.position               = "relative"                                            ;
        
        text_frame.style.overflowX              = this.scroll_x ? "scroll" : "hidden"                   ;
        text_frame.style.overflowY              = this.scroll_y ? "scroll" : "hidden"                   ;
        
        // -------------------------------------+
        // 下のボタンのフレーム                 |
        // -------------------------------------+
        bottom_button_frame.style.width         = this.width                                            ;
        bottom_button_frame.style.height        = this.top_button_frame_height                          ;
        bottom_button_frame.style.position      = "relative"                                            ;
        
        // -------------------------------------+
        // ×マーク作成                         |
        // -------------------------------------+
        if(this.create_crossmark){this.CreateCrossMark(top_button_frame)}                               ;
        
        this.CreateHeadText(top_button_frame);
        
        
        let border                = document.createElement("div")                   ;
        border.style.width        = parseInt(top_button_frame.style.width) - 40     ;
        border.style.height       = top_button_frame.style.height                   ;
        border.style.borderBottom = "solid 1px"                                     ;
        border.style.position     = "absolute"                                      ;
        border.style.left         = 20                                              ;
        border.style.bottom       = 10                                              ;
        top_button_frame.appendChild(border)                                        ;
        
        border                    = document.createElement("div")                   ;
        border.style.width        = parseInt(bottom_button_frame.style.width) - 40  ;
        border.style.height       = bottom_button_frame.style.height                ;
        border.style.borderTop    = "solid 1px"                                     ;
        border.style.position     = "absolute"                                      ;
        border.style.left         = 20                                              ;
        border.style.top          = 10                                              ;
        bottom_button_frame.appendChild(border)                                     ;
        
        // -------------------------------------+
        // ボタンタイプ別にボタン作成           |
        // -------------------------------------+
        this.ButtonProcessingType(bottom_button_frame)                                                  ;
        
        // -------------------------------------+
        // テキストボックス作成                 |
        // -------------------------------------+
        this.CreateText(text_frame)                                                                     ;
        
        // -------------------------------------+
        // テキスト部のフレーム調整             |
        // -------------------------------------+
        text_frame.style.height                 = parseInt(text_frame.style.height) > parseInt(this.text_box.style.height) ? text_frame.style.height : this.text_box.style.height   ;
        this.text_box.style.top                 = (parseInt(text_frame.style.height) - parseInt(this.text_box.style.height)) / 2                                                    ;
        
        // -------------------------------------+
        // 要素入れ込み                         |
        // -------------------------------------+
        Screen            .appendChild(top_button_frame    );
        Screen            .appendChild(text_frame          );
        Screen            .appendChild(bottom_button_frame );
        this.Screen_frame .appendChild(Screen              );
        frame             .appendChild(this.Screen_frame   );
        frame             .appendChild(background          );
        document.body     .appendChild(frame               );
        
        // -------------------------------------+
        // ポップアップ画面のはみ出し調整       |
        // -------------------------------------+
        let Screen_frame_height                 = parseInt(this.Screen_frame.style.height)                                                                                          ;
        let Screen_height                       = parseInt(top_button_frame.style.height) + parseInt(text_frame.style.height) + parseInt(bottom_button_frame.style.height)          ;
        
        if(Screen_frame_height < Screen_height){
            this.Screen_frame.style.height      = Screen_height                                                                                                                     ;
        }
        
        // -------------------------------------+
        // 画面リサイズ時のイベントを登録       |
        // -------------------------------------+
        window.addEventListener("resize",this.resize)                                                                                                                               ;
        
        this.resize();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ポップアップを非表示にする                                           *
    // ************************************************************************
    hide = () => { 
        
        // ポップアップが表示されていない場合は処理を抜ける
        if(this.frame == null){return};
        
        // ポップアップを非表示
        this.frame.remove();
        
        // 画面リサイズイベントを削除
        window.removeEventListener("resize",this.resize);
        
        // プロパティを初期化
        this.frame                   = null;
        this.background              = null;
        this.Screen                  = null;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ×マークを作成する                                                   *
    // [引数]                                                                 *
    //   作成したボタンを入れ込む要素                                         *
    // ************************************************************************
    CreateCrossMark(elem){
        
        // 座標計算
        let top  = (parseInt(elem.style.height) - (this.Cross_height + this.button_border)) / 2;
        let left = (parseInt(elem.style.width)  - this.Cross_width ) - 20 ;
        
        // ×ボタン作成
        this.ButtonProcessing.set_parent_elem (elem                              );
        this.ButtonProcessing.set_CSS         ("","","all-remove"                );
        this.ButtonProcessing.set_CSS         ("PopUp-Cross-Button"     ,"button");
        this.ButtonProcessing.set_CSS         ("PopUp-Cross-Button-Text","text"  );
        
        let cross_button = this.ButtonProcessing.create ("×",top,left           );
        
        // ポップアップを非表示にするイベントを登録
        cross_button.addEventListener("mouseup",this.hide);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダテキストを作成する                                             *
    // [引数]                                                                 *
    //   作成したヘッダテキストを入れ込む要素                                 *
    // ************************************************************************
    CreateHeadText(elem){
        
        if(this.head_text_date == null){return};
        
        let head_text              = document.createElement("div");
        head_text.innerText        = this.head_text_date.text     ;
        head_text.style.fontSize   = this.head_text_date.size     ;
        head_text.style.color      = this.head_text_date.color    ;
        head_text.style.font       = "Avenir"                     ;
        head_text.style.userSelect = "none"                       ;
        head_text.style.position   = "absolute"                   ;
        
        let dummy = head_text.cloneNode(true);
        
        document.body.appendChild(dummy);
        elem.appendChild(head_text);
        
        let rect = dummy.getBoundingClientRect();
        let top  = (parseInt(elem.style.height) - rect.height) / 2 ;
        let left = (parseInt(elem.style.width ) - rect.width ) / 2 ;
        
        head_text.style.position = "absolute";
        head_text.style.top  = top ;
        head_text.style.left = left;
        
        dummy.remove();
        
        //let border                = document.createElement("div");
        //border.style.width        = parseInt(elem.style.width) - 40  ;
        //border.style.height       = elem.style.height ;
        //border.style.borderBottom = "solid 1px";
        //border.style.position = "absolute";
        //border.style.left = 20;
        //border.style.bottom = 10;
        //elem.appendChild(border);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   指定されたボタンタイプによってボタンを作成する                       *
    // [引数]                                                                 *
    //   作成したボタンを入れ込む要素                                         *
    // ************************************************************************
    ButtonProcessingType(elem){
        
        // ボタンタイプによって作成するボタン切り替え
        switch(this.create_button_type){
            
            // -------------------------------------+
            // OKボタンのみ                         |
            // -------------------------------------+
            case "OK":
                
                this.CreateOKButton(elem);
            
            break;
            
            // -------------------------------------+
            // OKボタンとキャンセルボタン           |
            // -------------------------------------+
            case "OK_Cancel":
            
                this.CreateOKCancelButton(elem);
            
            break;
            
            // -------------------------------------+
            // 指定テキストボタンとキャンセルボタン |
            // -------------------------------------+
            case "Text_Cancel":
            
                this.CreateTextCancelButton(elem);
            
            break;
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   OKボタンのみ作成する                                                 *
    // [引数]                                                                 *
    //   elem : 作成したボタンを入れ込む要素                                  *
    // ************************************************************************
    CreateOKButton(elem){
        
        // 座標計算
        let top  = (parseInt(elem.style.height) - (this.default_height + this.button_border)) / 2;
        let left = (parseInt(elem.style.width ) - this.default_width ) / 2 ;
        
        // フレーム作成
        let button_frame            = document.createElement("div");
        button_frame.style.position = "absolute"                   ;
        button_frame.style.top      = top                          ;
        this.button_frame           = button_frame                 ;
        
        // OKボタン作成
        this.ButtonProcessing.set_parent_elem       (button_frame            );
        this.ButtonProcessing.set_CSS("","","all-remove");
        this.ButtonProcessing.set_CSS("PopUp-OK-Button","button");
        this.ButtonProcessing.set_CSS("PopUp-OK-Button-Text","text");
        
        if(this.OK_button_css      != null){this.ButtonProcessing.set_CSS(this.OK_button_css     ,"button");};
        if(this.OK_button_text_css != null){this.ButtonProcessing.set_CSS(this.OK_button_text_css,"text"  );};
        
        let OK_button = this.ButtonProcessing.create("OK",0,left             );
        
        this.bottom_button_elem = OK_button;
        
        // ポップアップを非表示にするイベントを登録
        OK_button.addEventListener("mouseup",this.hide);
        
        // OKボタンが押されたときのイベントを登録
        if(this.ClickEvent != null){ OK_button.addEventListener("mouseup",this.ClickEvent); };
        
        elem.appendChild(button_frame);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   OKボタンとキャンセルボタンを作成する                                 *
    // [引数]                                                                 *
    //   elem : 作成したボタンを入れ込む要素                                  *
    // ************************************************************************
    CreateOKCancelButton(elem){
        
        // 座標計算
        let top  = (parseInt(elem.style.height) - (this.default_height + this.button_border)) / 2;
        let OK_left     =   (parseInt(elem.style.width ) - (this.default_width * 2)) / 3                           ;
        let cancel_left = (((parseInt(elem.style.width ) - (this.default_width * 2)) / 3) * 2) + this.default_width;
        
        // フレーム作成
        let button_frame            = document.createElement("div");
        button_frame.style.position = "absolute"                   ;
        button_frame.style.top      = top                          ;
        this.button_frame           = button_frame                 ;
        
        // OKボタン作成
        this.ButtonProcessing.set_parent_elem       (button_frame            );
        this.ButtonProcessing.set_CSS("","","all-remove");
        this.ButtonProcessing.set_CSS("PopUp-OK-Button","button");
        this.ButtonProcessing.set_CSS("PopUp-OK-Button-Text","text");
        
        if(this.OK_button_css      != null){this.ButtonProcessing.set_CSS(this.OK_button_css     ,"button");};
        if(this.OK_button_text_css != null){this.ButtonProcessing.set_CSS(this.OK_button_text_css,"text"  );};
        
        let OK_button = this.ButtonProcessing.create("OK",0,OK_left          );
        
        this.bottom_button_elem = OK_button;
        this.ButtonProcessing.set_CSS("","","all-remove");
        this.ButtonProcessing.set_CSS("PopUp-Cancel-Button","button");
        this.ButtonProcessing.set_CSS("PopUp-Cancel-Button-Text","text");
        
        if(this.cancel_button_css      != null){this.ButtonProcessing.set_CSS(this.cancel_button_css     ,"button");};
        if(this.cancel_button_text_css != null){this.ButtonProcessing.set_CSS(this.cancel_button_text_css,"text"  );};
        
        let cancel_button = this.ButtonProcessing.create("キャンセル",0,cancel_left  );
        
        // ポップアップを非表示にするイベントを登録
        OK_button    .addEventListener("mouseup",this.hide);
        cancel_button.addEventListener("mouseup",this.hide);
        
        // OKボタンが押されたときのイベントを登録
        if(this.ClickEvent != null){ OK_button.addEventListener("mouseup",this.ClickEvent); };
        
        elem.appendChild(button_frame);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   指定テキストボタンとキャンセルボタンを作成する                       *
    // [引数]                                                                 *
    //   elem : 作成したボタンを入れ込む要素                                  *
    // ************************************************************************
    CreateTextCancelButton(elem){
        
        // 座標計算
        let text_width  = (this.text_button_text.length * this.font_size) + 40                                      ;             // テキストの数に応じてボタンの横幅を計算
        text_width      = text_width > this.default_width ? text_width : this.default_width                         ;             // defaultより大きい場合は計算した横幅を使用
        let top         = (parseInt(elem.style.height) - (this.default_height + this.button_border)) / 2;
        let text_left   =   (parseInt(elem.style.width ) - (text_width * 2   )) / 3                                 ;
        let cancel_left = (((parseInt(elem.style.width ) - (text_width * 2   )) / 3) * 2) + text_width              ;
        
        let button_css      = this.text_button_css      == null ? "PopUp-OK-Button"      : this.text_button_css     ;
        let button_text_css = this.text_button_text_css == null ? "PopUp-OK-Button-Text" : this.text_button_text_css;
        
        // フレーム作成
        let button_frame            = document.createElement("div");
        button_frame.style.position = "absolute"                   ;
        button_frame.style.top      = top                          ;
        this.button_frame           = button_frame                 ;
        
        // テキストボタン作成
        this.ButtonProcessing.set_parent_elem         (button_frame                       );
        this.ButtonProcessing.set_CSS("","","all-remove");
        this.ButtonProcessing.set_CSS(button_css     ,"button");
        this.ButtonProcessing.set_CSS(button_text_css,"text"  );
        
        let text_button = this.ButtonProcessing.create(this.text_button_text,0,text_left  );
        
        this.ButtonProcessing.set_CSS("","","all-remove");
        
        this.ButtonProcessing.set_CSS("PopUp-Cancel-Button","button");
        this.ButtonProcessing.set_CSS("PopUp-Cancel-Button-Text","text");
        
        if(this.cancel_button_css      != null){this.ButtonProcessing.set_CSS(this.cancel_button_css     ,"button");};
        if(this.cancel_button_text_css != null){this.ButtonProcessing.set_CSS(this.cancel_button_text_css,"text"  );};
        
        // キャンセルボタン作成
        let cancel_button = this.ButtonProcessing.create("キャンセル",0,cancel_left  );
        
        // ポップアップを非表示にするイベントを登録
        text_button  .addEventListener("mouseup",this.hide);
        cancel_button.addEventListener("mouseup",this.hide);
        
        // OKボタンが押されたときのイベントを登録
        if(this.ClickEvent != null){ text_button.addEventListener("mouseup",this.ClickEvent); };
        
        elem.appendChild(button_frame);
        
    }
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   指定されたボタンタイプによってボタンを作成する                       *
    // [引数]                                                                 *
    //   作成したボタンを入れ込む要素                                         *
    // ************************************************************************
    CreateText(elem){
        
        // ボタンタイプによって作成するボタン切り替え
        switch(this.create_text_type){
            
            // -------------------------------------+
            // テキストが一つ                       |
            // -------------------------------------+
            case "One":
                
                this.OneColumnText(elem);
                
                
                //this.CreateOKButton(elem);
            
            break;
            
            // -------------------------------------+
            // テキストが二つ                       |
            // -------------------------------------+
            case "Two":
                
                this.TwoColumnsText(elem);
                
                //this.CreateOKCancelButton(elem);
            
            break;
            
            // -------------------------------------+
            // 指定テキストボタンとキャンセルボタン |
            // -------------------------------------+
            case "Three":
            
                this.ThreeColumnsText(elem);
            
            break;
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ポップアップスクリーンに表示されるテキストを作成                     *
    // ************************************************************************
    OneColumnText(elem){
        
        // ---------------------------+
        // テキストを改行変換         |
        // ---------------------------+
        let popup_text = [];
        if(!this.scroll_x){popup_text = this.GettingTextNewline(this.text_box_text,elem.style.width);};
        
        // ---------------------------+
        // テキストボックスの縦幅計算 |
        // ---------------------------+
        let text_box_height = this.scroll_y == true ? parseInt(elem.style.height) : this.CalculatePopupTextHeight(popup_text)  ;
        
        // ---------------------------+
        // テキストボックス作成       |
        // ---------------------------+
        this.text_box                = document.createElement("div")                      ;
        this.text_box.style.width    = elem.style.width                                   ;
        this.text_box.style.height   = this.scroll_x == true ? text_box_height + 10 : text_box_height                         ;
        this.text_box.style.position = "absolute"                                         ;
        this.text_box.style.top      = (parseInt(elem.style.height) - text_box_height) / 2;
        
        // ---------------------------+
        // テキスト作成               |
        // ---------------------------+
        for(let row in popup_text){
            
            for(let linefeed in popup_text[row][0]){
                let text                 = document.createElement("div")                      ;
                text.innerText           = popup_text[row][0][linefeed]["text" ]                     ;
                text.style.userSelect    = "none"                                             ;
                text.style.width         = elem.style.width                                   ;
                text.style.color         = popup_text[row][0][linefeed]["color"]                     ;
                text.style.font          = `bold ${popup_text[row][0][linefeed]["size" ]}px Avenir`  ;
                text.style.textAlign     = "center"                                           ;
                
                this.text_box.appendChild(text)                                               ;
            }
            
        }
        
        // 要素入れ込み
        elem.appendChild(this.text_box)                                                   ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム+テキストの表示の場合                                  *
    // ************************************************************************
    TwoColumnsText = (elem)  => {
        
        // ---------------------------+
        // コロンのサイズ取得         |
        // ---------------------------+
        let dummy            = document.createElement("div");
        dummy.innerText      = "　:　";
        dummy.style.fontSize = this.separator_text_size;
        dummy.style.position = "absolute";
        dummy.style.top      = -500;
        dummy.style.left     = -500;
        document.body.appendChild(dummy);
        let colon_width      = dummy.getBoundingClientRect()["width"];
        
        // ---------------------------+
        // 初期化+サイズ計算          |
        // ---------------------------+
        let parentheses_right_width = 0;
        let parentheses_left_width  = 0;
        let text_max_width          = 0;
        let padding                 = 0;
        let one_column_width        = (parseInt(elem.style.width) / 2) - colon_width;
        let parentheses_text_width  = 0;
        
        // ---------------------------+
        // はみ出たテキストを改行     |
        // ---------------------------+
        let popup_text = [];
        if(!this.scroll_x){popup_text = this.GettingTextNewline(this.text_box_text,one_column_width);};
        
        // ---------------------------+
        // カッコのサイズ取得         |
        // ---------------------------+
        if(this.parentheses){
            
            text_max_width  = this.GettingTextMaxWidth(this.text_box_text,0);
            
            dummy.innerText = "[　";
            parentheses_right_width = dummy.getBoundingClientRect()["width"];
            
            dummy.innerText = "　]";
            parentheses_left_width = dummy.getBoundingClientRect()["width"];
            
            if(text_max_width > one_column_width - (parentheses_left_width + parentheses_right_width)){text_max_width = one_column_width - (parentheses_left_width + parentheses_right_width)};
            
            padding = one_column_width - (text_max_width + parentheses_right_width + parentheses_left_width)
            
        }
        
        dummy.remove();
        
        // ---------------------------+
        // テキストボックスの縦幅計算 |
        // ---------------------------+
        let text_box_height = this.scroll_y == true ? parseInt(elem.style.height) : this.CalculatePopupTextHeight(popup_text)  ;
        
        // ---------------------------+
        // テキストボックス作成       |
        // ---------------------------+
        this.text_box                = document.createElement("div")                      ;
        this.text_box.style.width    = elem.style.width                                   ;
        this.text_box.style.height   = this.scroll_x == true ? text_box_height + 10 : text_box_height                         ;
        this.text_box.style.position = "absolute"                                         ;
        this.text_box.style.top      = (parseInt(elem.style.height) - text_box_height) / 2;
        
        for(let row in popup_text){
            
            let linefeed_num = Object.keys(popup_text[row][0]).length > Object.keys(popup_text[row][1]).length ? Object.keys(popup_text[row][0]).length : Object.keys(popup_text[row][1]).length;
            
            for(let linefeed = 0;linefeed < linefeed_num;linefeed++){
                
                let tr                = document.createElement("div")       ;
                let one_column_elem   = document.createElement("div")                      ;
                let two_column_elem   = document.createElement("div")                      ;
                let colon_elem        = document.createElement("div")                      ;
                let parentheses_left  = document.createElement("div")       ;
                let parentheses_right = document.createElement("div")       ;
                let padding_elem      = document.createElement("div")       ;
                    tr.style.display  = "flex"                              ;
                
                // -------------------+
                // 右側のテキスト     |
                // -------------------+
                if(popup_text[row][0] != undefined && popup_text[row][0][linefeed] != undefined){
                    
                    one_column_elem.innerText           = popup_text[row][0][linefeed]["text" ]                     ;
                    one_column_elem.style.userSelect    = "none"                                                    ;
                    one_column_elem.style.color         = popup_text[row][0][linefeed]["color"]                     ;
                    one_column_elem.style.font          = `bold ${popup_text[row][0][linefeed]["size" ]}px Avenir`  ;
                    one_column_elem.style.textAlign     = this.parentheses == true ? "center":"right"               ;
                    
                }
                
                one_column_elem.style.width         = this.parentheses == true ? text_max_width : one_column_width  ;
                
                // -------------------+
                // 左側のテキスト     |
                // -------------------+
                if(popup_text[row][1] != undefined && popup_text[row][1][linefeed] != undefined){
                    two_column_elem.innerText           = popup_text[row][1][linefeed]["text" ]                     ;
                    two_column_elem.style.userSelect    = "none"                                             ;
                    two_column_elem.style.color         = popup_text[row][1][linefeed]["color"]                     ;
                    two_column_elem.style.font          = `bold ${popup_text[row][1][linefeed]["size" ]}px Avenir`  ;
                    two_column_elem.style.textAlign     = "left"                                           ;
                }
                
                two_column_elem.style.width         = one_column_width       ;
                
                // -------------------+
                // 0改行目のテキスト  |
                // -------------------+
                if(linefeed == 0){
                    
                    // -------------------------+
                    // 真ん中のコロン           |
                    // -------------------------+
                    colon_elem.innerText        = "　:　";
                    colon_elem.style.userSelect = "none"     ;
                    colon_elem.style.fontSize   = this.separator_text_size;
                    
                    // -------------------------+
                    // 左のカッコ               |
                    // -------------------------+
                    parentheses_left.innerText = "[　";
                    
                    
                    // -------------------------+
                    // 右のカッコ               |
                    // -------------------------+
                    parentheses_right.innerText = "　]";
                    
                
                }
                
                
                colon_elem        .style.width      = colon_width
                parentheses_left  .style.width      = parentheses_left_width;
                parentheses_left  .style.userSelect = "none";
                parentheses_right .style.userSelect = "none";
                parentheses_right .style.width      = parentheses_right_width;
                padding_elem      .style.width      = padding;
                
                tr.appendChild(padding_elem     )
                tr.appendChild(parentheses_left )
                tr.appendChild(one_column_elem  )                                               ;
                tr.appendChild(parentheses_right)
                tr.appendChild(colon_elem       )
                tr.appendChild(two_column_elem  )
                this.text_box.appendChild(tr    );
                
            }
            
            
        }
        
        elem.appendChild(this.text_box)     
        
        
        
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム+テキスト+比較の場合                                   *
    // ************************************************************************
    ThreeColumnsText = (elem) => {
    
        // ---------------------------+
        // コロンのサイズ取得         |
        // ---------------------------+
        let dummy                   = document.createElement("div");
        dummy.innerText             = "　:　";
        dummy.style.fontSize        = this.separator_text_size;
        dummy.style.position        = "fixed";
        dummy.style.top             = -500;
        dummy.style.left            = -500;
        document.body.appendChild(dummy);
        let colon_width             = dummy.getBoundingClientRect()["width"];
        let parentheses_right_width = 0;
        let parentheses_left_width  = 0;
        let text_max_width          = 0;
        let padding                 = 0;
        
        
        
        let one_column_width = (parseInt(elem.style.width) / 3) - colon_width;
        
        let parentheses_text_width = 0;
        
        // ---------------------------+
        // テキストを改行変換         |
        // ---------------------------+
        let popup_text = [];
        if(!this.scroll_x){popup_text = this.GettingTextNewline(this.text_box_text,one_column_width);};        
        
        
        // ---------------------------+
        // かっこ                     |
        // ---------------------------+
        if(this.parentheses){
            
            text_max_width = this.GettingTextMaxWidth(this.text_box_text,0);
            
            dummy.innerText = "[　";
            parentheses_right_width = dummy.getBoundingClientRect()["width"];
            
            dummy.innerText = "　]";
            parentheses_left_width = dummy.getBoundingClientRect()["width"];
            
            if(text_max_width > one_column_width - (parentheses_left_width + parentheses_right_width)){text_max_width = one_column_width - (parentheses_left_width + parentheses_right_width)};
            
            padding = one_column_width - (text_max_width + parentheses_right_width + parentheses_left_width)
            
        }
        
        dummy.remove();
        
        // ---------------------------+
        // テキストボックスの縦幅計算 |
        // ---------------------------+
        let text_box_height = this.scroll_y == true ? parseInt(elem.style.height) : this.CalculatePopupTextHeight(popup_text)  ;
        
        // ---------------------------+
        // テキストボックス作成       |
        // ---------------------------+
        this.text_box                = document.createElement("div")                                    ;
        this.text_box.style.width    = elem.style.width                                                 ;
        this.text_box.style.height   = this.scroll_x == true ? text_box_height + 10 : text_box_height   ;
        this.text_box.style.position = "absolute"                                                       ;
        this.text_box.style.top      = (parseInt(elem.style.height) - text_box_height) / 2              ;
        
        for(let row in popup_text){
            
            let temporary_array    = [];
            temporary_array[0]     = Object.keys(popup_text[row][0]).length;
            temporary_array[1]     = Object.keys(popup_text[row][1]).length;
            temporary_array[2]     = Object.keys(popup_text[row][2]).length;
            
            let linefeed_num       = Math.max( ...temporary_array );
            
            let comparison_check        = false;
            
            //let linefeed_num = Object.keys(popup_text[row][0]).length > Object.keys(popup_text[row][1]).length ? Object.keys(popup_text[row][0]).length : Object.keys(popup_text[row][1]).length;
            
            for(let linefeed = 0;linefeed < linefeed_num;linefeed++){
                
                let tr = document.createElement("div");
                tr.style.display = "flex"
                
                let one_column_elem   = document.createElement("div");
                
                let two_column_elem   = document.createElement("div");
                let three_column_elem = document.createElement("div");
                let four_column_elem  = document.createElement("div");
                
                let colon_elem        = document.createElement("div");
                
                let parentheses_left  = document.createElement("div");
                let parentheses_right = document.createElement("div");
                let padding_elem      = document.createElement("div");
                
                // 文字列比較
                
                let original_text = "";
                let new_text      = "";
                
                for(let i = 0;i < linefeed_num;i++){
                    
                    original_text += popup_text[row][1][i] != undefined ? popup_text[row][1][i].text : "";
                    new_text      += popup_text[row][2][i] != undefined ? popup_text[row][2][i].text : "";
                    
                    
                }
                
                if(original_text != new_text){comparison_check = true;};
                
                
                
                // -------------------+
                // 右側のさらに右のテキスト
                // -------------------+
                if(popup_text[row][0] != undefined && popup_text[row][0][linefeed] != undefined){
                    one_column_elem.innerText           = popup_text[row][0][linefeed]["text" ]                     ;
                    one_column_elem.style.userSelect    = "none"                                             ;
                    
                    //one_column_elem.style.color         = popup_text[row][0][linefeed]["color"]                     ;
                    one_column_elem.style.color         = comparison_check == true ? "red" : popup_text[row][0][linefeed]["color"]                    ;
                    one_column_elem.style.font          = `bold ${popup_text[row][0][linefeed]["size" ]}px Avenir`  ;
                    one_column_elem.style.textAlign     = this.parentheses == true ? "center":"right"                                           ;
                }
                
                one_column_elem.style.width         = this.parentheses == true ? text_max_width : one_column_width//popup_text[row][0][linefeed]                                   ;
                
                // -------------------+
                // 右側のさらに左のテキスト
                // -------------------+
                if(popup_text[row][1] != undefined && popup_text[row][1][linefeed] != undefined){
                    two_column_elem.innerText           = popup_text[row][1][linefeed]["text" ]                     ;
                    two_column_elem.style.userSelect    = "none"                                             ;
                    
                    //two_column_elem.style.color         = popup_text[row][1][linefeed]["color"]                     ;
                    two_column_elem.style.color         = comparison_check == true ? "red" : popup_text[row][1][linefeed]["color"]                    ;
                    two_column_elem.style.font          = `bold ${popup_text[row][1][linefeed]["size" ]}px Avenir`  ;
                    two_column_elem.style.textAlign     = "left"                                           ;
                }
                
                two_column_elem.style.width         = one_column_width//popup_text                                   ;
                
                // -------------------+
                // 左側のさらに右のテキスト
                // -------------------+
                if(popup_text[row][2] != undefined && popup_text[row][2][linefeed] != undefined){
                    
                    let original_text = "";
                    
                    if(popup_text[row][1] != undefined && popup_text[row][1][linefeed] != undefined){original_text = popup_text[row][1]};
                    
                    three_column_elem.innerText           = popup_text[row][2][linefeed]["text" ]                     ;
                    three_column_elem.style.userSelect    = "none"                                             ;
                    
                    three_column_elem.style.color         = comparison_check == true ? "red" : popup_text[row][2][linefeed]["color"]                    ;
                    three_column_elem.style.font          = `bold ${popup_text[row][2][linefeed]["size" ]}px Avenir`  ;
                    three_column_elem.style.textAlign     = "left"//this.parentheses == true ? "center":"right"                                           ;
                }
                
                three_column_elem.style.width         = one_column_width//this.parentheses == true ? text_max_width : one_column_width//popup_text[row][0][linefeed]                                   ;
                
                //// -------------------+
                //// 左側のさらに左のテキスト
                //// -------------------+
                //if(popup_text[row][3][linefeed] != undefined){
                //    four_column_elem.innerText           = popup_text[row][3][linefeed]["text" ]                     ;
                //    four_column_elem.style.userSelect    = "none"                                             ;
                //    
                //    four_column_elem.style.color         = popup_text[row][3][linefeed]["color"]                     ;
                //    four_column_elem.style.font          = `bold ${popup_text[row][3][linefeed]["size" ]}px Avenir`  ;
                //    four_column_elem.style.textAlign     = "left"                                           ;
                //}
                //
                //four_column_elem.style.width         = one_column_width//popup_text                                   ;
                
                // -------------------+
                // コロン     |
                // -------------------+
                if(linefeed == 0){
                    colon_elem.innerText = "　:　";
                    
                    colon_elem.style.userSelect    = "none"               
                    colon_elem.style.fontSize      = this.separator_text_size;
                    colon_elem.style.color         = comparison_check == true ? "red" : ""                    ;
                    
                    
                    // 
                    // 左のかっこ
                    // 
                    
                    parentheses_left.innerText = "[　";
                    parentheses_left.style.color         = comparison_check == true ? "red" : ""                    ;
                    
                    // 
                    // 右のかっこ
                    // 
                    
                    parentheses_right.innerText = "　]";
                    parentheses_right.style.color         = comparison_check == true ? "red" : ""                    ;
                    
                    
                
                }
                
                colon_elem.style.width             = colon_width;
                parentheses_left.style.width       = parentheses_left_width;
                parentheses_left.style.userSelect  = "none";
                parentheses_right.style.userSelect = "none";
                parentheses_right.style.width      = parentheses_right_width;
                padding_elem.style.width           = padding;
                
                let colon_2 = colon_elem.cloneNode(true);
                let arrow   = colon_elem.cloneNode();
                arrow.innerText   = linefeed         == 0    ? "→"  : "";
                arrow.style.color = comparison_check == true ? "red" : "";
                //arrow.style.color = popup_text[row][2][linefeed]["text" ] == popup_text[row][1][linefeed]["text" ] ? "#000000" : "red"                    ;
                
                tr.appendChild(padding_elem     )
                tr.appendChild(parentheses_left )
                tr.appendChild(one_column_elem  );
                tr.appendChild(parentheses_right)
                tr.appendChild(colon_elem       )
                tr.appendChild(two_column_elem  )
                tr.appendChild(arrow       )
                //tr.appendChild(three_column_elem)
                //tr.appendChild(colon_2       )
                tr.appendChild(three_column_elem)
                
                colon_elem.cloneNode(true);
                two_column_elem.cloneNode(true);
                colon_elem.cloneNode(true);
                two_column_elem.cloneNode(true);
                

                this.text_box.appendChild(tr);
                
            }
            
            
        }
        
        elem.appendChild(this.text_box)     
        
        
        
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テキストの最大行数を取得する                                         *
    // ************************************************************************
    GettingRowNum = (text) => {
        
        let max = 0;
        
        for(let column of text){
            
            max = max > column.length ? max : column.length;
            
        }
        
        return max;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テキストの横幅最大実サイズを取得                                     *
    // ************************************************************************
    GettingTextMaxWidth = (text,column) => {
        
        let max = 0;
        let dummy       = document.createElement("div");
            dummy.style.position = "fixed";
            dummy.style.top  = -500;
            dummy.style.left = -500;
            document.body.appendChild(dummy);
        
        for(let row in text){
            
            dummy.innerText      = text[row][column]["text"];
            dummy.style.fontSize = text[row][column]["size"];
            
            let dummy_width = dummy.getBoundingClientRect()["width"] + (text[row][column]["text"].length * 0.8);
            
            max = max > dummy_width ? max : dummy_width;
            
        }
        
        dummy.remove();
        
        return max;
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ポップアップスクリーンに表示されるテキストの縦幅を計算               *
    // ************************************************************************
    CalculatePopupTextHeight = (text) => {
        
        //let test = 0;
        
        let max  = 0;
        let size = {};
        
        let dummy       = document.createElement("div");
        //dummy.innerText = text["text"];
        //dummy.style.fontSize = text["size"];
        dummy.style.position = "fixed";
        dummy.style.top  = -500;
        dummy.style.left = -500;
        document.body.appendChild(dummy);
        
        for(let row in text){
            
            //let size = 0;
            
            for(let column in text[row]){
                
                if(size[column] == undefined){size[column] = 10;};
                
                for(let linefeed in text[row][column]){
                    
                    dummy.innerText      = "あaＡ1１";//text[row][column][linefeed]["text"];
                    dummy.style.font = `bold ${text[row][column][linefeed]["size"]}px Avenir`  ;
                    //three_column_elem.style.font          = 
                    size[column] += dummy.getBoundingClientRect()["height"];
                    
                    //test++;
                    //console.log(test);
                    //console.log("[カラム]"+column);
                    //console.log("[疑似サイズ]"+dummy.getBoundingClientRect()["height"])
                    //console.log("[足しこみ]"+size[column]);
                    
                    //test += dummy.getBoundingClientRect()["height"];
                    
                    
                    
                }
                
            }
            
        }
        
        for(let column in size){
            max = max > size[column] ? max : size[column];
        }
        
        dummy.remove();
        
        //console.log(max)
        
        return max;
        
        
        
        
        
        
        
        
        //let size = 0;
        //
        //let dummy_frame             = document.createElement("div");
        //dummy_frame.style.position  = "fixed";
        //dummy_frame.style.top       = 100;
        //dummy_frame.style.left      = 100;
        //
        //for(let value of text){
        //    
        //    let dummy             = document.createElement("div");
        //    dummy.style.fontSize  = value["size"]                ;
        //    dummy.innerHTML       = "1Aaあ"                      ;
        //    dummy_frame.appendChild(dummy)                       ;
        //    
        //}
        //
        //document.body.appendChild(dummy_frame);
        //
        //size = dummy_frame.getBoundingClientRect()["height"];
        //
        //dummy_frame.remove();
        //
        //return size;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   表示するテキストがはみ出るときにはみ出ないように改行したテキストを返す(二分岐探索)       *
    // [引数]                                                                                     *
    //   value :                                                                                  *
    //   width :                                                                                  *
    // [返り値]                                                                                   *
    //   改行したテキスト(多次元配列)                                                             *
    //   Array[]       : 改行番号                                                                 *
    //   Array[][text] : 改行番号に対応したテキスト                                               *
    // ********************************************************************************************
    GettingTextNewline = (text,max_width) =>{
        
        text = Object.fromEntries(Object.entries(text).sort());
        
        
        let tier_text_list         = {}   ;
        max_width = parseInt(max_width)   ;
        
        for(let row in text){
            
            tier_text_list[row] = {};
            
            for(let column in text[row]){
                
                tier_text_list[row][column] = {};
                
                let popup_text             = text[row][column]["text"] ;
                let popup_font_size        = text[row][column]["size"]
                let popup_font_color       = text[row][column]["color"]
                let slice_text             = ""   ;
                let while_compulsion_stop  = 1000 ;
                let while_compulsion_count = 0    ;
                let tier_num               = 0    ;
                
                
                // ---------------------------------------+
                // 改行が必要なテキストは改行させる       |
                // ---------------------------------------+
                while(1){
                    
                    // 初期化
                    let tier_text              = ""   ;
                    let cutting_area_start     = 0    ;
                    let cutting_area_end       = 0    ;
                    let width_check_text       = ""   ;
                    
                    // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
                    while_compulsion_count++;
                    if(while_compulsion_count > while_compulsion_stop){break;};
                    
                    // ダミー要素を作成して実際のテキストの横幅を取得する
                    let dummy_elem            = document.createElement("div")        ;
                    dummy_elem.innerText      = popup_text                             ;
                    dummy_elem.style.font     = `bold ${popup_font_size}px Avenir`;
                    dummy_elem.style.position = "absolute";
                    dummy_elem.style.top      = -500;
                    dummy_elem.style.left     = -500;
                    document.body.appendChild(dummy_elem)                              ;
                    let text_width            = dummy_elem.getBoundingClientRect()["width"]                 ;
                    dummy_elem.remove();
                    
                                                                                         // 行を数える
                    
                    // ------------------------------------+
                    // 改行が必要ない場合OR最後の改行の場合|
                    // ------------------------------------+
                    if(text_width < max_width){
                        
                        // 改行ごとに表示するテキストを格納
                        tier_text_list[row][column][tier_num]         = {}        ;
                        tier_text_list[row][column][tier_num]["text" ] = popup_text;
                        tier_text_list[row][column][tier_num]["color"] = popup_font_color;
                        tier_text_list[row][column][tier_num]["size"] = popup_font_size;
                        tier_num++;
                        break;
                        
                    };
                    
                    slice_text = popup_text;                                                         // 現在のテキストを入れる
                    
                    // -----------------------------------+
                    // はみ出る場合は改行処理を行う       |
                    // -----------------------------------+
                    while(1){
                        
                        // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
                        while_compulsion_count++;
                        if(while_compulsion_count > while_compulsion_stop){break;};
                        
                        // 値取得
                        let cutting_area_end     = parseInt(slice_text.length / 2)                                          ;     // 二分岐探索の分岐点を取得
                        slice_text               = popup_text.slice(cutting_area_start,cutting_area_start+cutting_area_end) ;     // テキストを分岐させる
                        width_check_text         = tier_text + slice_text                                                   ;     // 二分岐探索で表示が確定したテキストと分岐させたテキストを組み合わせる
                        
                        // ダミー要素を作成して実際のテキストの横幅を取得する
                        let dummy_elem            = document.createElement("div")        ;
                        dummy_elem.innerText      = width_check_text                       ;
                        dummy_elem.style.font     = `bold ${popup_font_size}px Avenir`;
                        dummy_elem.style.position = "absolute";
                        dummy_elem.style.top      = -500;
                        dummy_elem.style.left     = -500;
                        document.body.appendChild(dummy_elem)                              ;
                        let text_width            = dummy_elem.getBoundingClientRect()["width"]                 ;
                        dummy_elem.remove();
                        
                        // -----------------------------------------+
                        // はみ出ない場合                           |
                        // -----------------------------------------+
                        if(text_width <= max_width){
                            
                            // -----------------------------------------------+
                            // 二分岐探索終了                                 |
                            // -----------------------------------------------+
                            if((cutting_area_start + cutting_area_end) - cutting_area_start <= 0 || popup_text.length <= width_check_text.length || text_width == max_width - popup_font_size){
                                
                                let slip_count = 0;
                                // -----------------------------------------------------+
                                // 二分岐探索ですり抜けたテキスト分を追加する           |
                                // -----------------------------------------------------+
                                while(1){
                                    
                                    // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
                                    while_compulsion_count++;
                                    if(while_compulsion_count > while_compulsion_stop){break;};
                                    
                                    slip_count++;
                                    let slip_text = popup_text.slice( cutting_area_start+cutting_area_end , (cutting_area_start + cutting_area_end) + slip_count );
                                    slip_text     = width_check_text + slip_text                                                                 ;
                                    
                                    // ダミー要素を作成して実際のテキストの横幅を取得する
                                    let dummy_elem            = document.createElement("div")        ;
                                    dummy_elem.innerText      = slip_text                              ;
                                    dummy_elem.style.font     = `bold ${popup_font_size}px Avenir`;
                                    dummy_elem.style.position = "absolute";
                                    dummy_elem.style.top      = -500;
                                    dummy_elem.style.left     = -500;
                                    document.body.appendChild(dummy_elem)                              ;
                                    let text_width            = dummy_elem.getBoundingClientRect()["width"]                 ;
                                    dummy_elem.remove();
                                    
                                    // ---------------------------------------------------------------------+
                                    // すり抜けたテキストを足しこんであふれたひとつ前のテキストまでを追加   |
                                    // ---------------------------------------------------------------------+
                                    if(text_width > max_width){
                                        
                                        slip_count--;
                                        slip_text        = popup_text.slice( cutting_area_start+cutting_area_end , (cutting_area_start + cutting_area_end) + slip_count );
                                        width_check_text = width_check_text + slip_text                                                                 ;
                                        break;
                                    }
                                    
                                }
                                
                                popup_text                       = popup_text.slice(cutting_area_start+cutting_area_end + slip_count) ;     // 改行後のテキストを取得
                                tier_text_list[row][column][tier_num]         = {}                                                ;
                                tier_text_list[row][column][tier_num]["text"] = width_check_text                                  ;
                                tier_text_list[row][column][tier_num]["color"] = popup_font_color;
                                tier_text_list[row][column][tier_num]["size"] = popup_font_size;
                                tier_num++;
                                
                                break;
                                
                            // -----------------------------------------------+
                            // 二分岐探索続行                                 |
                            // -----------------------------------------------+
                            }else{
                                
                                // 二分岐探索の折り返しを行う
                                cutting_area_start += cutting_area_end;                             // 折り返しの分岐点を取得
                                tier_text           = width_check_text;                             // はみ出ないことが確定したテキストを取得
                                
                            }
                        }
                        
                    }
                    
                }
                
            }
        }
        
        return tier_text_list;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面リサイズ時のイベント                                             *
    // ************************************************************************
    resize = () => {
        
        // ポップアップが作成されていないときは処理を抜ける
        if(this.frame == null){return;};
        
        // フレームのサイズ変更
        this.frame.style.width       = document.body.clientWidth                                  ;
        this.frame.style.height      = document.body.clientHeight                                 ;
        
        // グレー背景のサイズ変更
        this.background.style.width  = document.body.clientWidth                                  ;
        this.background.style.height = document.body.offsetHeight                                 ;
        
        // ポップアップスクリーンの座標変更
        this.Screen_frame.style.top             = (document.body.clientHeight - parseInt(this.Screen_frame.style.height)) / 2 ;
        this.Screen_frame.style.left            = (document.body.clientWidth  - this.width        ) / 2 ;
        
    }
    
    
    // ========================================== [ ↓ セッター ↓ ] ================================================================================ //
    
    set_width                   = (set) => {this.width                    = set};                   // ポップアップスクリーンの横幅
    set_height                  = (set) => {this.height                   = set};                   // ポップアップスクリーンの縦幅
    set_screen_color            = (set) => {this.screen_color             = set};                   // ポップアップスクリーンの背景色
    set_create_crossmark        = (set) => {this.create_crossmark         = set};                   // ×マークを作成するかしないかのフラグ       true : 作成    false : 作成しない
    set_create_button_type      = (set) => {this.create_button_type       = set};                   // 作成するボタンのタイプ
    set_font_size               = (set) => {this.font_size                = set};                   // ボタンのフォントサイズ
    set_OK_font_color           = (set) => {this.OK_font_color            = set};                   // OKボタンのフォントカラー
    set_OK_background_color     = (set) => {this.OK_background_color      = set};                   // OKボタンの背景色
    set_cancel_font_color       = (set) => {this.cancel_font_color        = set};                   // キャンセルボタンのフォントカラー
    set_cancel_background_color = (set) => {this.cancel_background_color  = set};                   // キャンセルボタンの背景色
    set_text_font_color         = (set) => {this.text_font_color          = set};                   // 指定テキストボタンのフォントカラー
    set_text_background_color   = (set) => {this.text_background_color    = set};                   // 指定テキストボタンの背景色
    set_text_button_text        = (set) => {this.text_button_text         = set};                   // 指定テキストボタンのテキスト
    set_Cross_font_color        = (set) => {this.Cross_font_color         = set};                   // バツマークのフォントカラー
    set_Cross_background_color  = (set) => {this.Cross_background_color   = set};                   // バツマークの背景色
    set_Cross_width             = (set) => {this.Cross_width              = set};                   // バツマークの横幅
    set_Cross_height            = (set) => {this.Cross_height             = set};                   // バツマークの縦幅
    set_Cross_font_size         = (set) => {this.Cross_font_size          = set};                   // バツマークのフォントサイズ
    set_default_width           = (set) => {this.default_width            = set};                   // デフォルトのボタン横幅
    set_default_height          = (set) => {this.default_height           = set};                   // デフォルトのボタン縦幅
    set_ClickEvent              = (set) => {this.ClickEvent               = set};                   // OKボタン or 指定テキストボタンを押したときのイベント
    
    // ここから
    set_scroll_x = (set) => {this.scroll_x = set;};
    set_scroll_y = (set) => {this.scroll_y = set;}; 
    
    // ************************************************************************
    // テキストボックスに表示するテキスト
    // ************************************************************************
    set_text_box_text           = (text,color,size,row,column,delete_flg = false) => {
        
        // 初期化
        if(delete_flg){this.text_box_text = null;this.text_box_text = {}};
        
        if(this.text_box_text[row] == undefined){this.text_box_text[row] = {}};
        
        if(this.text_box_text[row][column] == undefined){this.text_box_text[row][column] = {}};
        
        //let No = this.text_box_text[column].length;
        
        //this.text_box_text[row][column][No] = {};
        
        this.text_box_text[row][column]["text" ] = text ;
        this.text_box_text[row][column]["color"] = color;
        this.text_box_text[row][column]["size" ] = size ;
        
    };
    
    // 
    // 指定テキストのスタイル
    // 
    set_text_button_css      = (set) => {this.text_button_css      = set;};
    set_text_button_text_css = (set) => {this.text_button_text_css = set;};
    
    
    set_cancel_button_css      = (set) => {this.cancel_button_css      = set;};
    set_cancel_button_text_css = (set) => {this.cancel_button_text_css = set;};
    
    set_OK_button_css          = (set) => {this.OK_button_css          = set;};
    set_OK_button_text_css     = (set) => {this.OK_button_text_css     = set;};
    
    set_create_text_type = (set) => {this.create_text_type = set;};
    
    set_head_text_date = (text = "",size = "",color = "") => {
        
        if(this.head_text_date == null){this.head_text_date = {};};
        
        this.head_text_date.text  = text ;
        this.head_text_date.size  = size ;
        this.head_text_date.color = color;
        
    };
    
    // ========================================== [ ↑ セッター ↑ ] ================================================================================ //
    
    
    // ========================================== [ ↓ゲッター ↓ ] ================================================================================= //
    
    get_frame          = (set) => {return this.frame         };                                     // ポップアップフレーム
    get_background     = (set) => {return this.background    };                                     // グレーの背景
    get_Screen         = (set) => {return this.Screen        };                                     // ポップアップスクリーン
    
}
