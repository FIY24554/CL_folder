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
        //this.ButtonProcessing             = null                                          ;         // ボタン作成オブジェクト
        
        // ボタン作成クラスをインスタンス化
        this.ButtonProcessing             = new ButtonProcessing();
        
        this.back_button_bottom  = 20;
        this.back_button_left    = 10;
        
        // -------------------------------------+
        // ボタン用CSS取得                      |
        // -------------------------------------+
        //let dummy = document.createElement("div");
        //dummy.id  = "Header-BackButton"          ;
        //document.body.appendChild(dummy)         ;
        
        //let back_button_css = window.getComputedStyle(dummy)
        
        //this.back_button_background_color = back_button_css.backgroundColor ;         // 戻るボタンの 背景色
        //this.back_button_width            = back_button_css.width           ;         // 戻るボタンの 横幅
        //this.back_button_height           = back_button_css.height          ;         // 戻るボタンの 縦幅
        //this.back_button_radius           = back_button_css.borderRadius    ;         // 戻るボタンの 丸さ
        //this.back_button_left             = back_button_css.left            ;         // 戻るボタンの 横座標
        //this.back_button_top              = back_button_css.top             ;         // 戻るボタンの 縦座標
        //
        //dummy.remove();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダを作成する                                                     *
    // ************************************************************************
    create(){
        
        // -----------------+
        // 要素作成         |
        // -----------------+
        this.maine_frame          = document.createElement("div")  ;                                // メインフレーム
        this.title_user_frame     = document.createElement("div")  ;                                // [ タイトル・ユーザ ]フレームコンテナ
        this.button_frame         = document.createElement("div")  ;                                // ボタン用フレーム
        this.title_frame          = document.createElement("div")  ;                                // タイトルフレーム
        this.user_frame           = document.createElement("div")  ;                                // ユーザフレーム
        this.location_frame       = document.createElement("div")  ;                                // ロケーションフレーム
        
        // -----------------+
        // スタイル         |
        // -----------------+
        this.maine_frame      .id = 'Header'                       ;
        this.title_user_frame .id = 'Title-User-Container'         ;
        this.button_frame     .id = 'ButtonFrame'                  ;
        this.title_frame      .id = 'TitleFrame'                   ;
        this.user_frame       .id = 'UserFrame'                    ;
        this.location_frame   .id = 'LocationFrame'                ;
        
        // -----------------+
        // 要素入れ込み     |
        // -----------------+
        this.title_user_frame .appendChild( this.user_frame       );
        this.title_user_frame .appendChild( this.title_frame      );
        this.maine_frame      .appendChild( this.button_frame     );
        this.maine_frame      .appendChild( this.location_frame   );
        this.maine_frame      .appendChild( this.title_user_frame );
        document.body         .appendChild( this.maine_frame      );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   戻るボタンを表示する                                                 *
    // ************************************************************************
    show_BackButton(){
        
        // 初期化
        this.hide_BackButton();
        
        
        
        // 戻るボタン作成
        this.ButtonProcessing.set_parent_elem          ( this.button_frame                                                );
        //this.ButtonProcessing.set_background_color     ( this.back_button_background_color                                );
        //this.ButtonProcessing.set_width                ( this.back_button_width                                           );
        //this.ButtonProcessing.set_height               ( this.back_button_height                                          );
        this.ButtonProcessing.set_CSS("Header-Back-Button","button");
        this.ButtonProcessing.set_CSS("Header-Back-Button-Text","text");
        this.back_button = this.ButtonProcessing.create( this.back_button_text,0,this.back_button_left );
        this.back_button.addEventListener("mouseup", this.back_button_event                                           );
        
        this.back_button.get_frame_elem.style.top  = "";
        this.back_button.get_frame_elem.style.bottom = this.back_button_bottom;
        //this.back_button.style.left = 10;
        
        
        
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
    get_header_height  = () => {return this.maine_frame.getBoundingClientRect()["height"];        };
    
    
    
    
}
