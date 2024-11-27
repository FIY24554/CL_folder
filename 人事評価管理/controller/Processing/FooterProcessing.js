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
        
        // -------------------------------------+
        // フッターフレーム                     |
        // -------------------------------------+
        this.footer_frame               = null                                      ;               // フッタの要素
        this.footer_frame_css           = null                                      ;               
        this.footer_rect                = null                                      ;               
        
        // -------------------------------------+
        // 表示・非表示ボタン                   |
        // -------------------------------------+
        this.SH_button                  = null                                      ;               // 表示・非表示ボタンの 要素
        
        // -------------------------------------+
        // フッター内ボタン                     |
        // -------------------------------------+
        this.padding                    = 10                                        ;               // ボタンの 余白
        this.max_button_width           = 0                                         ;               // リサイズ時に使用するボタンの最大横幅保存用
        this.button_data                = []                                        ;               // ボタンの 作成に必要なデータを格納
        this.button_list                = []                                        ;               // ボタンの 要素を格納
        
        this.button_frame = null;
        
        // 追加します
        this.footer_css = null;
        
        
        //// ボタン作成クラスインスタンス化
        this.ButtonProcessing           = new ButtonProcessing()                    ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターを作成する                                                   *
    // ************************************************************************
    create(){
        
        // -------------------------------------+
        // フレーム作成                         |
        // -------------------------------------+
        this.create_frame()                                     ;                                   // フッターフレーム作成
        
        //this.footer_frame_css = null;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターフレームを作成                                               *
    // ************************************************************************
    create_frame(){
        
        // -------------------------------------+
        // フッターフレーム作成                 |
        // -------------------------------------+
        this.footer_frame     = document.createElement            ( "div"             )                ;
        this.footer_frame.classList.add('Footer')                                                      ;
        if(this.footer_css != null){this.footer_frame.classList.add(this.footer_css)}                  ;
        //if(this.footer_frame_css != null){this.footer_frame.classList.add(this.footer_frame_css);};
        
        document.body          .appendChild                       ( this.footer_frame )                ;
        this.footer_frame_css = window.getComputedStyle           ( this.footer_frame )                ; // フッターフレームのCSS取得
        

        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッター内ボタン作成                                                 *
    // ************************************************************************
    create_button(){
        
        if(this.button_frame != null){this.button_frame.remove();};
        
        // -------------------------------------+
        // ダミー要素からスタイルを取得         |
        // -------------------------------------+
        let dummy                      = document.createElement ("div"          )  ;
            document.body               .appendChild            (dummy          )  ;
            dummy.classList             .add                    ('Fotter-Button')  ;
        let Fotter_button_css          = window.getComputedStyle(dummy)            ;
        
        let Fotter_button_width        = parseInt(Fotter_button_css.width    )     ;
        let Fotter_button_height       = parseInt(Fotter_button_css.height   )     ;
        let Fotter_button_font_size    = parseInt(Fotter_button_css.fontSize )     ;
        let Fotter_button_shape        =          Fotter_button_css.borderRadius   ;
        
        // ダミー要素削除
        dummy.remove();
        
        this.button_frame = document.createElement("div");
        this.footer_frame.appendChild(this.button_frame);
        
        // -------------------------------------+
        // フッター内ボタン作成用準備           |
        // -------------------------------------+
        let body_width        = document.body.clientWidth                                                                  ; // ボディのwidth
        let button_num        = this.button_data.length                                                                    ; // 作成するボタンの数を取得
        let button_max_length = this.get_ButtonMaxLength()                                                                 ; // 作成するボタンの最大文字数を取得
        let length_width      = ( button_max_length * Fotter_button_font_size ) + this.padding                        ; // 最大文字列分のボタンサイズ
        let button_width      = length_width > Fotter_button_width ?  length_width : Fotter_button_width         ; // 指定されたボタンの横幅より最大文字列分のボタンサイズの方が大きい場合は最大文字列分のボタンサイズにする
        let button_font_size  = Fotter_button_font_size                                                               ; // ボタンのフォントサイズ
        this.max_button_width = button_width                                                                               ; // リサイズ時に使用する
        let protruding        = 0                                                                                          ; // リサイズでボタンが重なっときの横幅調整用
        let font_plus         = 0                                                                                          ; // リサイズでボタンが重なった時のフォントサイズ変更用
        
        // -------------------------------------+
        // ボタンが重なってしまう場合調整       |
        // -------------------------------------+
        if(button_width * button_num > body_width){
            protruding        =            body_width   - button_width * button_num                                        ; // 画面の横幅 - ボタンの最大横幅 * ボタンの数 = ボタンが重なっている幅(負の値)
            protruding        = Math.ceil( protruding   / button_num                )                                      ; // 小数点以下切り上げ
            button_width      =            button_width + protruding                                                       ; // ボタンの最大横幅       - ボタンが重なっている幅(負の値) = 重ならないボタンの横幅
            font_plus         = parseInt ( protruding   / 100                       )                                      ; // ボタンが重なったいる幅 / フォントサイズを下げる基準値   = 重なった時のフォントサイズ
        }
        
        // -------------------------------------+
        // ボタンデータをもとにボタンを作成     |
        // -------------------------------------+
        for(let i = 0; i <button_num ;i++){ 
            
            // テキスト・座標取得
            let text = this.button_data[i]["text"]                                                                         ; // ボタンに表示するテキスト
            let top  = parseInt( this.footer_frame_css.height ) / 2 - Fotter_button_height / 2                        ; // フッタの縦幅 / 2 - ボタンの縦幅 / 2 = ボタンの縦座標(中心座標)
            let left = ( ( body_width / button_num ) * ( i + 1 ) ) - ( ( ( body_width / button_num ) + button_width ) / 2) ; // ボタンの横座標
            
            // 作成するボタンの配列番号を取得
            let No   = this.button_list.length;
            
            
            this.ButtonProcessing.set_parent_elem (this.button_frame                         );                                   // ボタン作成クラスに作成したボタンを入れ込む要素を登録
            this.ButtonProcessing.set_CSS         ("","","all-remove"                        );
            this.ButtonProcessing.set_CSS         ("Fotter-Button"      ,"button"            );
            this.ButtonProcessing.set_CSS         ("Fotter-Button-Text" ,"text"              );
            this.ButtonProcessing.set_CSS         ("Fotter-Button-Event","event"             );
            this.ButtonProcessing.set_CSS         (this.button_data[i]["button_css"],"button");
            this.ButtonProcessing.set_CSS         (this.button_data[i]["text_css"  ],"text"  );
            this.ButtonProcessing.set_CSS         (this.button_data[i]["event_css" ],"event" );
            
            this.button_list[No]                           = this.ButtonProcessing.create( text , top , left                 );
            this.button_list[No].style.width               = button_width                                                     ;
            this.button_list[No].get_text_elem.style.width = button_width                                                     ;
            this.button_list[No].get_event_elem.addEventListener( "mouseup",this.button_data[i]["callback"  ] )                              ;
            
        }
        
        // 要素入れ込み
        window.addEventListener( "resize" , this.resize )                                                                  ;
        
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
        
        // -------------------------------------+
        // 表示・非表示ボタン作成用準備         |
        // -------------------------------------+
        if( this.SH_button != null ){ this.SH_button.remove() }                 ;
        let dummy                       = document.createElement ("div")        ;
        document.body                .appendChild            (dummy)            ;
            dummy.classList.add('SH-Button')                                    ;
        let SH_button_css               = window.getComputedStyle(dummy)        ;
        
        this.SH_Button_width  = parseInt(SH_button_css.width );
        this.SH_Button_height = parseInt(SH_button_css.height);
        
        // ボタンのテキスト・座標・横幅計算
        let body_width                  = document.body.clientWidth                                                                                                                                 ; // 画面の横幅
        let body_height                 = document.body.clientHeight                                                                                                                                ; // 画面の縦幅
        let footer_height               = parseInt( this.footer_frame_css.height ) + parseInt( this.footer_frame_css.bottom )                                                                       ; // フッタの縦幅 + フッタの縦座標(フッタが表示・非表示によって座標が変わるように)
        let top                         =         ( body_height - ( parseInt( this.footer_frame_css.height ) + this.SH_Button_height) ) + 2 - parseInt( this.footer_frame_css.bottom ) ; // 画面の縦幅 + フッタの縦幅 + 表示・非表示ボタンの縦幅 = 表示・非表示ボタンの縦座標
        let left                        =       - (( this.SH_Button_width  - document.body.clientWidth)/2      )                                                                                                                  ; // 表示・非表示ボタンの横追加座標 / 2 = 表示・非表示ボタンの横座標
        this.SH_Button_frame_left = left;
        //let width                       =           SH_Button_width + body_width                                                                                                               ; // 表示・非表示ボタンの横追加座標 + 画面の横幅 = 表示・非表示ボタンの横幅
        
        // -------------------------------------+
        // 表示・非表示ボタン作成               |
        // -------------------------------------+
        this.ButtonProcessing.set_parent_elem      ( document.body                   )                                                                            ;
        this.ButtonProcessing.set_CSS("","","all-remove"        );
        this.ButtonProcessing.set_CSS("SH-Button"      ,"button");
        this.ButtonProcessing.set_CSS("SH-Button-Text" ,"text"  );
        this.ButtonProcessing.set_CSS("SH-Button-Event","event" );
        this.SH_button  = this.ButtonProcessing.create               ( text,top,left                   )                                                                            ;
        this.SH_button .get_event_elem.addEventListener           ("mouseup", this.SHButtonEvent              )                                                                            ;
        let button_frame = this.SH_button.get_frame_elem;
        button_frame.style.zIndex     = 0                                                                                                                                                         ;
        
        dummy.remove();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   表示・非表示ボタンのイベント                                         *
    // ************************************************************************
    SHButtonEvent = () =>{
        
        // フッタの座標取得
        let bottom = parseInt(this.footer_frame_css.bottom);
        
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
        
        this.footer_frame.style.bottom = -(parseInt(this.footer_frame_css.height));                                     // フッタを下げる
        this.CreateSHButton("▲");                                                                  // 表示・非表示ボタンを作り直す
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面リサイズ時の処理                                                 *
    // ************************************************************************
    resize = () => {
        
        // -------------------------------------+
        // リサイズ準備                         |
        // -------------------------------------+
        let button_num   = this.button_list .length                  ;                             // ボタンの数
        let body_width   = document.body.clientWidth                 ;                             // 画面の横幅
        let body_height  = document.body.clientHeight                ;                             // 画面の縦幅
        let button_width = this.max_button_width                     ;                             // ボタンの最大横幅
        let protruding   = 0                                         ;                             // リサイズでボタンが重なっときの横幅調整用
        let font_plus    = 0                                         ;                             // リサイズでボタンが重なった時のフォントサイズ変更用
        
        // -------------------------------------+
        // ボタンが重なってしまう場合           |
        // -------------------------------------+
        if(button_width * button_num > body_width){
            
            protruding   =            body_width   - button_width * button_num;                   // 画面の横幅 - ボタンの最大横幅 * ボタンの数 = ボタンが重なっている幅(負の値)
            protruding   = Math.ceil( protruding   / button_num              );                   // 小数点以下切り上げ
            button_width =            button_width + protruding               ;                   // ボタンの最大横幅       - ボタンが重なっている幅(負の値) = 重ならないボタンの横幅
            font_plus    = parseInt ( protruding   / 100                     );                   // ボタンが重なったいる幅 / フォントサイズを下げる基準値   = 重なった時のフォントサイズ
            
        }
        
        // -------------------------------------+
        // 作成されたボタンをリサイズ           |
        // -------------------------------------+
        for(let i = 0;i < button_num ;i++){
            
            // 座標取得
            //let top  =     this.footer_height / 2 - this.button_height / 2                                                ;
            let left = ( ( body_width / button_num ) * ( i + 1 ) ) - ( ( ( body_width / button_num ) + button_width) / 2 );
            
            // ボタンリサイズ
            //this.button_list[i]            .style.top      = top                                                            ;       // ボタンの縦座標
            this.button_list[i].get_frame_elem            .style.left     = left                                                           ;       // ボタンの横座標
            this.button_list[i]            .style.width    = button_width                                                   ;       // ボタンの横幅
            this.button_list[i].get_text_elem  .style.fontSize = this.button_font_size + font_plus                              ;       // ボタンのフォントサイズ
            this.button_list[i].get_text_elem  .style.width    = button_width                                                   ;       // ボタンのテキストの横幅
            this.button_list[i].get_event_elem .style.width    = button_width                                                   ;       // ボタンのイベントの横幅
            
        }
        
        if(this.SH_button == null){return;};
        
        let top                         =         ( body_height - ( parseInt( this.footer_frame_css.height ) + this.SH_Button_height) ) + 2 - parseInt( this.footer_frame_css.bottom ) ; // 画面の縦幅 + フッタの縦幅 + 表示・非表示ボタンの縦幅 = 表示・非表示ボタンの縦座標
        let SH_text_elem = this.SH_button.get_text_elem;
        let SH_text_css = window.getComputedStyle(SH_text_elem);
        let left                        =       - (( parseInt(SH_text_css.width)  - document.body.clientWidth)/2      ) - this.SH_Button_frame_left; // 表示・非表示ボタンの横追加座標 / 2 = 表示・非表示ボタンの横座標
        this.SH_button.get_frame_elem.style.top = top;
        this.SH_button.get_text_elem.style.left = left;
        
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
    
// ============================================== [ ↓セッター↓ ] ===================================================================================== //
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   作成するボタンのデータ                                               *
    // ************************************************************************
    set_button_data(text,button_css,text_css,event_css,callback,initialization = false){
        
        if(initialization){this.button_data = [];};
        
        // 入れ込みデータの配列番号を取得
        let No = this.button_data.length;
        
        // ボタンデータ入れ込み
        this.button_data[No]               = {}        ;
        this.button_data[No]["text"      ] = text      ;
        this.button_data[No]["button_css"] = button_css;
        this.button_data[No]["text_css"  ] = text_css  ;
        this.button_data[No]["event_css" ] = event_css ;
        this.button_data[No]["callback"  ] = callback  ;
        
    }
    
    set_CSS = (set) => {this.ButtonProcessing.set_CSS(set);};
    
    set_button_width     = (set) => { this.button_width           = (set); };                             // ボタンの 横幅
    set_button_height    = (set) => { this.button_height          = (set); };                             // ボタンの 縦幅
    set_button_font_size = (set) => { this.button_font_size       = (set); };                             // ボタンの フォントサイズ
    set_button_shape     = (set) => { this.button_shape           = (set); };                             // ボタンの 形
    set_footer_HTML      = (set) => { this.footer_frame.innerHTML =  set ; };
    //set_footer_frame_css = (set) => { 
    //this.footer_frame_css = set;
    //};
    
    
    
    //set_footer_height    = (set) => { this.footer_height = set;};   // 機能していない
    
    
    // 追加します
    set_footer_css = (set) => {this.footer_css = set;};//フッタフレームの追加CSS
    
    
    
    get_footer = () => {return this.footer_frame;};
    
    // 
    // [処理概要]
    //   ボタンデータを取得
    // 
    get_button_data(){
        
        return this.button_data;
        
    }
    
    get_button_list(){return this.button_list};
    
}
