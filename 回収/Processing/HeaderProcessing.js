
// 
// [処理概要]
//   ヘッダーを作成する
// 
class HeaderProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        // -------------------------------------+
        // シングルトン                         |
        // -------------------------------------+
        if(HeaderProcessing.Singleton){ return HeaderProcessing.Singleton; };
        HeaderProcessing.Singleton            = this;
        
        // -------------------------------------+
        // 初期化                               |
        // -------------------------------------+
        this.title_frame                  = null                                          ;         // タイトルフレーム要素
        this.user_frame                   = null                                          ;         // ユーザフレーム  要素
        this.button_frame                 = null                                          ;         // ボタンフレーム  要素
        this.back_button                  = null                                          ;         // 戻るボタン      要素
        this.ButtonProcessing                 = null                                          ;         // ボタン作成オブジェクト
        
        this.height                       = 130                                           ;         // ヘッダの 縦幅
        this.font                         = "sans-serif"                                  ;         // ヘッダの フォント
        this.maine_background_color       = "#bfbfb7"                                     ;         // ヘッダの 背景色
        this.title_background_color       = "#96a2bf"                                     ;         // ヘッダの タイトル部の背景色
        this.user_background_color        = "#8cbf8c"                                     ;         // ヘッダの ユーザ部の背景色
        
        this.title_width                  = 600                                           ;
        this.title_height                 = 80                                            ;
        
        this.location_width               = 600                                           ;
        this.location_height              = 80                                            ;
        
        this.padding                      = 20                                            ;
        
        this.title_html                   = null                                          ;         // タイトルの HTML
        this.user_html                    = null                                          ;         // ユーザ  の HTML
        
        this.back_button_background_color = "#123456"                                     ;         // 戻るボタンの 背景色
        this.back_button_width            = 120                                           ;         // 戻るボタンの 横幅
        this.back_button_height           = 35                                            ;         // 戻るボタンの 縦幅
        this.back_button_radius           = "0vh"                                         ;         // 戻るボタンの 丸さ
        this.back_button_left             = 30                                            ;         // 戻るボタンの 横座標
        this.back_button_top              = this.height/2 - this.back_button_height/2 + 30;         // 戻るボタンの 縦座標
        
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダを作成する                                                     *
    // ************************************************************************
    create(){
        
        
        // ---------------------------------------------------------+
        // 要素作成                                                 |
        // ---------------------------------------------------------+
        let  maine_frame                         = document.createElement("div")                                                 ;
        let  title_user_frame                    = document.createElement("div")                                                 ;
        let user_adjust_frame                    = document.createElement("div")                                                 ;
        this.button_frame                        = document.createElement("div")                                                 ;
        this.title_frame                         = document.createElement("div")                                                 ;
        this.user_frame                          = document.createElement("div")                                                 ;
        this.location_frame                      = document.createElement("div")                                                 ;
        
        // ボディのマージンスアイル
        document.body.style.margin               = 0                                                                             ;
        // ボタン作成クラスをインスタンス化
        this.ButtonProcessing                        = new ButtonProcessing(this.button_frame)                                           ;
        
        // ---------------------------------------------------------+
        // グラデーションの用の色を取得                             |
        // ---------------------------------------------------------+
        let maine_gradation                      = this.ButtonProcessing.ChangeColor(this.maine_background_color,64)                 ;
        let title_gradation                      = this.ButtonProcessing.ChangeColor(this.title_background_color,64)                 ;
        let user_gradation                       = this.ButtonProcessing.ChangeColor(this.user_background_color ,64)                 ;
        
        // ---------------------------------------------------------+
        // メインフレームにスタイル                                 |
        // ---------------------------------------------------------+
        maine_frame.style.height                 = this.height                                                                   ;
        maine_frame.style.width                  = "100%"                                                                        ;
        maine_frame.style.background             = `linear-gradient(0deg,${this.maine_background_color},${maine_gradation})`     ;
        maine_frame.style.position               = "relative"                                                                    ;
        maine_frame.style.borderBottom           = "1px solid #696969"                                                           ;
        maine_frame.style.boxShadow              = "0 1px 1px 0 black"                                                           ;
        
        // ---------------------------------------------------------+
        // タイトルフレームとユーザフレームをまとめるためのフレーム |
        // ---------------------------------------------------------+
        title_user_frame.style.margin            = "auto 0 auto auto"                                                            ;
        title_user_frame.style.width             = this.title_width + this.back_button_width  +this.padding                      ;
        title_user_frame.style.height            = this.height                                                                   ;
        title_user_frame.style.position          = "relative"                                                                    ;
        
        // ---------------------------------------------------------+
        // ユーザフレームの座標調整用フレーム                       |
        // ---------------------------------------------------------+
        user_adjust_frame.style.position         = "absolute"                                                                    ;
        user_adjust_frame.style.width            = this.title_width+ this.back_button_width  +this.padding                       ;
        user_adjust_frame.style.height           = this.title_height                                                             ;
        user_adjust_frame.style.left             = 0                                                                             ;
        user_adjust_frame.style.top              = 0                                                                             ;
        
        // ---------------------------------------------------------+
        // ボタン用フレーム                                         |
        // ---------------------------------------------------------+
        this.button_frame.style.margin           = "auto auto auto 0"                                                            ;
        
        // ---------------------------------------------------------+
        // タイトルフレームのスタイル                               |
        // ---------------------------------------------------------+
        this.title_frame.style.width             = this.title_width                                                              ;
        this.title_frame.style.height            = this.title_height                                                             ;
        this.title_frame.style.background        = `linear-gradient(0deg,${this.title_background_color},${title_gradation})`     ;
        this.title_frame.style.borderRadius      = "0px 0px 0px 50px"                                                            ;
        this.title_frame.style.position          = "absolute"                                                                    ;
        this.title_frame.style.top               = 0                                                                             ;
        this.title_frame.style.left              = this.back_button_width  +this.padding                                         ;
        this.title_frame.style.borderBottom      = "1px solid #696969"                                                           ;
        this.title_frame.style.borderLeft        = "1px solid #696969"                                                           ;
        this.title_frame.style.boxShadow         = "0 1px 1px 0 black"                                                           ;
        
        // ---------------------------------------------------------+
        // ユーザフレームのスタイル                                 |
        // ---------------------------------------------------------+
        this.user_frame.style.width              = 400                                                                           ;
        this.user_frame.style.height             = 30                                                                            ;
        this.user_frame.style.background         = `linear-gradient(0deg,${this.user_background_color},${user_gradation}`        ;
        this.user_frame.style.transform          =  "skewX(30deg)"                                                               ;
        this.user_frame.style.position           = "absolute"                                                                    ;
        this.user_frame.style.top                = 80                                                                            ;
        this.user_frame.style.right              = -10                                                                           ;
        this.user_frame.style.borderBottom       = "1px solid #696969"                                                           ;
        this.user_frame.style.borderLeft         = "1px solid #696969"                                                           ;
        this.user_frame.style.boxShadow          = "0 1px 1px 0 black"                                                           ;
        
        // ---------------------------------------------------------+
        // ロケーションフレームのスタイル                           |
        // ---------------------------------------------------------+
        this.location_frame.style.width          = this.location_width                                                           ;
        this.location_frame.style.height         = this.location_height                                                          ;
        this.location_frame.style.position       = "absolute"                                                                    ;
        this.location_frame.style.top            = 0                                                                             ;
        this.location_frame.style.left           = 0                                                                             ;
        
        // ---------------------------------------------------------+
        // 要素入れ込み                                             |
        // ---------------------------------------------------------|
        user_adjust_frame.appendChild( this.user_frame     );
        title_user_frame .appendChild( user_adjust_frame   );
        title_user_frame .appendChild( this.title_frame    );
        maine_frame      .appendChild( this.button_frame   );
        maine_frame      .appendChild( this.location_frame );
        maine_frame      .appendChild( title_user_frame    );
        document.body    .appendChild( maine_frame         );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   戻るボタンを表示する                                                 *
    // ************************************************************************
    show_BackButton(){
        
        // 初期化
        this.hide_BackButton();
        
        // 戻るボタン作成
        this.ButtonProcessing.set_background_color     ( this.back_button_background_color                                );
        this.ButtonProcessing.set_width                ( this.back_button_width                                           );
        this.ButtonProcessing.set_height               ( this.back_button_height                                          );
        this.back_button = this.ButtonProcessing.create( this.back_button_text,this.back_button_top,this.back_button_left );
        this.back_button.set_event                 ( this.back_button_event                                           );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   戻るボタンを非表示にする                                             *
    // ************************************************************************
    hide_BackButton(){
        
        this.button_frame.innerHTML = "";
        
    }
    
    
// ================================================================================================================================================== //
// ============================================== [ ↓セッター↓ ] ================================================================================== //
// ================================================================================================================================================== //
    
    
    set_title             = (set) => {this.title_frame.innerHTML    = set;};
    set_user              = (set) => {this.user_frame. innerHTML    = set;};
    set_back_button_event = (set) => {this.back_button_event        = set;};
    set_back_button_text  = (set) => {this.back_button_text         = set;};
    
    
// ================================================================================================================================================== //
// ============================================== [ ↑セッター↑ ] ================================================================================== //
// ================================================================================================================================================== //
    
    
// ================================================================================================================================================== //
// ============================================== [ ↓ゲッター↓ ] ================================================================================== //
// ================================================================================================================================================== //
    
    
    get_title_frame    = () => {return this.title_frame   };
    get_user_frame     = () => {return this.user_frame    };
    get_location_frame = () => {return this.location_frame};
    get_header_height  = () => {return this.height        };
    
    
    
    
}




