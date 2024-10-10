// 
// [処理概要]
//   フッダーを作成する
// 
class FooterProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        this.footer_frame            = null     ;                                                   // フッタの要素
        this.footer_height           = 150      ;                                                   // フッタの 縦幅
        this.footer_background_color = "#000000";                                                   // フッタの 背景色
        
        this.button_width            = 200      ;                                                   // ボタンの 横幅
        this.button_height           = 50       ;                                                   // ボタンの 縦幅
        this.button_font_size        = 15       ;                                                   // ボタンの フォントサイズ
        this.button_shape            = "100vh"  ;
        this.padding                 = 10       ;                                                   // ボタンの 余白
        this.max_button_width        = 0        ;                                                   // リサイズ時に使用するボタンの最大横幅保存用
        
        this.SH_button               = null     ;                                                   // 表示・非表示ボタンの 要素
        this.SH_button_over_width    = 35       ;                                                   // 表示・非表示ボタンの 追加横幅
        this.SH_button_height        = 50       ;                                                   // 表示・非表示ボタンの 縦幅
        this.SH_button_font_color    = "ffffff" ;                                                   // 表示・非表示ボタンの フォントカラー
        
        this.button_data             = []       ;                                                   // ボタンの 作成に必要なデータを格納
        this.button_list             = []       ;                                                   // ボタンの 要素を格納
        
        // ボタン作成クラスインスタンス化
        this.ButtonProcessing            = new ButtonProcessing();
        

        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターを作成する                                                   *
    // ************************************************************************
    create(){
        
        // フレーム作成
        this.create_frame();
        
        // ボタン作成クラスに作成したボタンを入れ込む要素を登録
        this.ButtonProcessing.set_parent_elem(this.footer_frame);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターフレームを作成                                               *
    // ************************************************************************
    create_frame(){
        
        // グラデーションカラーを取得
        let gradation = this.ButtonProcessing.ChangeColor(this.footer_background_color,64);
        
        // フッターフレーム作成
        this.footer_frame                       = document.createElement("div")                                      ;
        this.footer_frame.style.width           = "100%"                                                             ;
        this.footer_frame.style.height          = this.footer_height                                                 ;
        this.footer_frame.style.background      = `linear-gradient(0deg,${this.footer_background_color},${gradation}`;
        this.footer_frame.style.position        = "absolute"                                                         ;
        this.footer_frame.style.bottom          = 0                                                                  ;
        this.footer_frame.style.zIndex          = 1                                                                  ;
        
        // 要素入れ込み
        document.body.appendChild(this.footer_frame);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ボタン作成                                                           *
    // ************************************************************************
    create_button(){
        
        let body_width        = document.body.clientWidth                                           ; // ボディのwidth
        let button_num        = this.button_data.length                                             ; // 作成するボタンの数を取得
        let button_max_length = this.get_ButtonMaxLength()                                          ; // 作成するボタンの最大文字数を取得
        let length_width      = (button_max_length * this.button_font_size) + this.padding          ; // 最大文字列分のボタンサイズ
        let button_width      = length_width > this.button_width ?  length_width : this.button_width; // 指定されたボタンの横幅より最大文字列分のボタンサイズの方が大きい場合は最大文字列分のボタンサイズにする
        let button_font_size  = this.button_font_size                                               ; // ボタンのフォントサイズ
        this.max_button_width = button_width                                                        ; // リサイズ時に使用する
        let protruding    = 0                                                                       ; // リサイズでボタンが重なっときの横幅調整用
        let font_plus     = 0                                                                       ; // リサイズでボタンが重なった時のフォントサイズ変更用
        
        // ボタンが重なってしまう場合
        if(button_width * button_num > body_width){
            
            protruding     =            body_width   - button_width * button_num;                   // 画面の横幅 - ボタンの最大横幅 * ボタンの数 = ボタンが重なっている幅(負の値)
            protruding     = Math.ceil( protruding   / button_num              );                   // 小数点以下切り上げ
            button_width   =            button_width + protruding               ;                   // ボタンの最大横幅       - ボタンが重なっている幅(負の値) = 重ならないボタンの横幅
            font_plus      = parseInt ( protruding   / 100                     );                   // ボタンが重なったいる幅 / フォントサイズを下げる基準値   = 重なった時のフォントサイズ
            
        }
        
        // ボタンデータをもとにボタンを作成
        for(let i = 0; i <button_num ;i++){
            
            // テキスト・座標取得
            let text = this.button_data[i]["text"]                                                                                         ; // ボタンに表示するテキスト
            let top  = this.footer_height / 2 - this.button_height / 2                                                                     ; // フッタの縦幅 / 2 - ボタンの縦幅 / 2 = ボタンの縦座標(中心座標)
            let left = ((body_width / button_num) * (i+1) ) - (((body_width / button_num) + button_width) / 2)                             ; // ボタンの横座標
            // 作成するボタンの配列番号を取得
            let No = this.button_list.length;
            
            // ボタンを作成する
            this.ButtonProcessing                       .set_width           (button_width                     );
            this.ButtonProcessing                       .set_height          (this.button_height               );
            this.ButtonProcessing                       .set_font_size       (this.button_font_size            );
            this.ButtonProcessing                       .set_shape           (this.button_shape                );
            this.ButtonProcessing                       .set_font_color      (this.button_data[i]["font_color"]);
            this.ButtonProcessing                       .set_background_color(this.button_data[i]["back_color"]);
            this.button_list[No] = this.ButtonProcessing.create              (text,top,left                    );
            this.button_list[No]                    .set_event           (this.button_data[i]["callback"]  );
            
        }
        
        // 要素入れ込み
        window.addEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   作成するボタンの最大文字数を取得                                     *
    // [返り値]                                                               *
    //   最大文字数                                                           *
    // ************************************************************************
    get_ButtonMaxLength(){
        
        // 最大文字数格納用
        let max_length = 0;
        
        // ボタンの最大文字数を取得
        for(let button of this.button_data){
            
            max_length = max_length > button["text"].length ? max_length : button["text"].length;
            
        }
        
        // 値を返す
        return max_length;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッタを表示・非表示にするボタンを作成する                           *
    // ************************************************************************
    CreateSHButton(text = null){
        
        // 初期化
        if(this.SH_button != null){this.SH_button.remove()};
        
        // グラデーションカラー取得
        let gradation = this.ButtonProcessing.ChangeColor(this.footer_background_color,64);
        
        // ボタンのテキスト・座標・横幅計算
        let body_width    = document.body.clientWidth                                                           ; // 画面の横幅
        let body_height   = document.body.clientHeight                                                          ; // 画面の縦幅
        let footer_height = parseInt(this.footer_frame.style.height) + parseInt(this.footer_frame.style.bottom) ; // フッタの縦幅 + フッタの縦座標(フッタが表示・非表示によって座標が変わるように)
        let top           = (body_height - (footer_height + this.SH_button_height)) + 2                         ; // 画面の縦幅 + フッタの縦幅 + 表示・非表示ボタンの縦幅 = 表示・非表示ボタンの縦座標
        let left          = -(this.SH_button_over_width / 2)                                                    ; // 表示・非表示ボタンの横追加座標 / 2 = 表示・非表示ボタンの横座標
        let width         = this.SH_button_over_width + body_width                                              ; // 表示・非表示ボタンの横追加座標 + 画面の横幅 = 表示・非表示ボタンの横幅
        
        // 表示・非表示ボタン作成
        this.ButtonProcessing                       .set_parent_elem     (document.body                           );
        this.ButtonProcessing                       .set_width           (width                                   );
        this.ButtonProcessing                       .set_height          (this.SH_button_height                   );
        this.ButtonProcessing                       .set_font_color      (this.SH_button_font_color               );
        this.ButtonProcessing                       .set_background_color(this.footer_background_color            );
        this.SH_button                  = this.ButtonProcessing.create   (text,top,left                           );
        this.SH_button                          .set_event           (this.SHButtonEvent                      );
        this.SH_button.style.background = `linear-gradient(0deg,${gradation},${this.footer_background_color})` ;
        this.SH_button.style.zIndex     = 0                                                                    ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   表示・非表示ボタンのイベント                                         *
    // ************************************************************************
    SHButtonEvent = () =>{
        
        // フッタの座標取得
        let bottom = parseInt(this.footer_frame.style.bottom);
        
        // フッタの座標で表示非表示を切り替え
        if(bottom < 0){
            
            this.ShowFooter();                                                                      // ボタンを表示する
            
        }else{
            
            this.HideFooter();                                                                      // ボタンを非表示にする
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッタを表示                                                         *
    // ************************************************************************
    ShowFooter = () =>{
        
        this.footer_frame.style.bottom = 0;                                                         // フッタを上げる
        this.CreateSHButton("▼");                                                                  // 表示・非表示ボタンを作り直す
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッタを非表示                                                       *
    // ************************************************************************
    HideFooter = () =>{
        
        this.footer_frame.style.bottom = -(this.footer_height);                                     // フッタを下げる
        this.CreateSHButton("▲");                                                                  // 表示・非表示ボタンを作り直す
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面リサイズ時の処理                                                 *
    // ************************************************************************
    resize = () => {
        
        // 値取得
        let button_num    = this.button_list .length                  ;                             // ボタンの数
        let body_width    = document.body.clientWidth                 ;                             // 画面の横幅
        let body_height   = document.body.clientHeight                ;                             // 画面の縦幅
        let button_width  = this.max_button_width                     ;                             // ボタンの最大横幅
        let protruding    = 0                                         ;                             // リサイズでボタンが重なっときの横幅調整用
        let font_plus     = 0                                         ;                             // リサイズでボタンが重なった時のフォントサイズ変更用
        
        // ボタンが重なってしまう場合
        if(button_width * button_num > body_width){
            
            protruding     =            body_width   - button_width * button_num;                   // 画面の横幅 - ボタンの最大横幅 * ボタンの数 = ボタンが重なっている幅(負の値)
            protruding     = Math.ceil( protruding   / button_num              );                   // 小数点以下切り上げ
            button_width   =            button_width + protruding               ;                   // ボタンの最大横幅       - ボタンが重なっている幅(負の値) = 重ならないボタンの横幅
            font_plus      = parseInt ( protruding   / 100                     );                   // ボタンが重なったいる幅 / フォントサイズを下げる基準値   = 重なった時のフォントサイズ
            
        }
        
        // 作成されたボタンをリサイズ
        for(let i = 0;i < button_num ;i++){
            
            // 座標取得
            let top  =     this.footer_height / 2 - this.button_height / 2                                                ;
            let left = ( ( body_width / button_num ) * ( i + 1 ) ) - ( ( ( body_width / button_num ) + button_width) / 2 );
            
            // ボタンリサイズ
            this.button_list[i].style.top                = top                              ;       // ボタンの縦座標
            this.button_list[i].style.left               = left                             ;       // ボタンの横座標
            this.button_list[i].style.width              = button_width                     ;       // ボタンの横幅
            this.button_list[i].text_elem.style.fontSize = this.button_font_size + font_plus;       // ボタンのフォントサイズ
            this.button_list[i].text_elem.style.width    = button_width                     ;       // ボタンのテキストの横幅
            this.button_list[i].event_elem.style.width   = button_width                     ;       // ボタンのイベントの横幅
            
        }
        
        // 表示・非表示ボタンが作成されている場合は作り直してリサイズする
        if(this.SH_button != null){this.CreateSHButton(this.SH_button.innerText);};
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () =>{
        
        this.footer_frame.remove();
        if(this.SH_button != null){this.SH_button.remove();};
        window.removeEventListener("resize",this.resize);
        
    }
    
// ============================================== [ 
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   作成するボタンのデータ                                               *
    // ************************************************************************
    set_button_data(text,font_color,back_color,callback,initialization = false){
        
        if(initialization){this.button_data = [];};
        
        // 入れ込みデータの配列番号を取得
        let No = this.button_data.length;
        
        // ボタンデータ入れ込み
        this.button_data[No]               = {}        ;
        this.button_data[No]["text"      ] = text      ;
        this.button_data[No]["font_color"] = font_color;
        this.button_data[No]["back_color"] = back_color;
        this.button_data[No]["callback"  ] = callback  ;
        
    }
    
    

    
    set_button_width     = (set) => { this.button_width           = (set); };                             // ボタンの 横幅
    set_button_height    = (set) => { this.button_height          = (set); };                             // ボタンの 縦幅
    set_button_font_size = (set) => { this.button_font_size       = (set); };                             // ボタンの フォントサイズ
    set_button_shape     = (set) => { this.button_shape           = (set); };                             // ボタンの 形
    set_footer_HTML      = (set) => { this.footer_frame.innerHTML =  set ; };
    
    set_footer_height    = (set) => { this.footer_height = set;};
    
    get_footer = () => {return this.footer_frame;};
    
    // 
    // [処理概要]
    //   ボタンデータを取得
    // 
    get_button_data(){
        
        return this.button_data;
        
    }
    
}






