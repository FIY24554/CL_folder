// ****************************************************************************************************************************************************************************************************
//                                                                                                                                                                                                    *
// [処理概要]                                                                                                                                                                                         *
//   選択画面を作成する                                                                                                                                                                               *
//                                                                                                                                                                                                    *
// [コンストラクタ]                                                                                                                                                                                   *
//   [引数]                                                                                                                                                                                           *
//     Arg1 : 選択画面を表示する要素                                                                                                                                                                  *
//                                                                                                                                                                                                    *
// [メソッド]                                                                                                                                                                                         *
//                                                                                                                                                                                                    *
// < this.CreateScreen >                                                                                                                                                                              *
//   [処理概要]                                                                                                                                                                                       *
//     選択画面を作成する(作成する前に基本ボタン、フッターボタンのデータをセットすること)                                                                                                             *
//   [引数]                                                                                                                                                                                           *
//     なし                                                                                                                                                                                           *
//                                                                                                                                                                                                    *
// < this.finish >                                                                                                                                                                                    *
//   [処理概要]                                                                                                                                                                                       *
//     選択画面の終了処理                                                                                                                                                                             *
//   [引数]                                                                                                                                                                                           *
//     なし                                                                                                                                                                                           *
//                                                                                                                                                                                                    *
// [セッター]                                                                                                                                                                                         *
//                                                                                                                                                                                                    *
//   < this.set_basis_button_data >                                                                                                                                                                   *
//     [処理概要]                                                                                                                                                                                     *
//       基本ボタンのデータをセット(メインフレームに表示されるボタン)                                                                                                                                 *
//     [引数]                                                                                                                                                                                         *
//       Arg1 : ボタンの 列        (何列目か ボタンは同じ名前の列に作成される)                                                                                                                        *
//       Arg2 : ボタンの テキスト                                                                                                                                                                     *
//       Arg3 : ボタンの 背景色                                                                                                                                                                       *
//       Arg4 : ボタンの フォントカラー                                                                                                                                                               *
//       Arg5 : ボタンの 押されたときのイベント                                                                                                                                                       *
//                                                                                                                                                                                                    *
//   < this.set_management_button_data >                                                                                                                                                              *
//     [処理概要]                                                                                                                                                                                     *
//       フッターボタンのデータをセット(フッタに表示されるボタン)                                                                                                                                     *
//     [引数]                                                                                                                                                                                         *
//       Arg1 : ボタンの テキスト                                                                                                                                                                     *
//       Arg2 : ボタンの 背景色                                                                                                                                                                       *
//       Arg3 : ボタンの フォントカラー                                                                                                                                                               *
//       Arg4 : ボタンの 押されたときのイベント                                                                                                                                                       *
//                                                                                                                                                                                                    *
// ****************************************************************************************************************************************************************************************************
class SelectScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        this.maine_frame               = elem                                     ;                    // 選択画面を表示する要素
                
        this.basis_button_frame_css    = null; // 基本ボタンフレームのCSSスタイル
        
        this.ButtonProcessing          = new ButtonProcessing()                     ;                    // ボタン作成 オブジェクト
        this.FooterProcessing          = new FooterProcessing()                     ;                    // フッタ作成 オブジェクト
        
        this.basis_button_frame        = null                                   ;                    // 基本ボタンの 要素
        
        this.basis_button_data         = {}                                     ;                    // 基本ボタン作成に必要なデータ
        this.frame_list                = {}                                     ;                    // 基本ボタンの階層ごとのフレーム
        
        // ここから追加
        
        
        
        
        
        // -------------------------------------+
        // 基本ボタン                           |
        // -------------------------------------+
        let dummy                    = document.createElement ("div")       ;
        dummy.classList.add            ('Select-Screen-Basis-Button')       ;
        document.body                 .appendChild            (dummy)       ;
        this.basis_button_css        = window.getComputedStyle(dummy)       ;
        this.basis_button_width      = this.basis_button_css.width          ;
        this.basis_button_height     = this.basis_button_css.height         ;
        
        // -------------------------------------+
        // フッターボタン                       |
        // -------------------------------------+
        //dummy.classList.add            ('Select-Screen-Footer-Button')      ;
        //this.basis_button_css        = window.getComputedStyle(dummy )      ;
        //this.footer_button_width     = this.basis_button_css.width          ;
        //this.footer_button_height    = this.basis_button_css.height         ;
        //this.footer_background_color = this.basis_button_css.backgroundColor;
        
        dummy.remove();
        
        
        this.Basis_Button_CSS       = 'Select-Screen-Basis-Button'      ;
        this.Basis_Button_Text_CSS  = 'Select-Screen-Basis-Button-Text' ;
        this.Basis_Button_Event_CSS = 'Select-Screen-Basis-Button-Event';
        
        this.Select_Screen_Frame_CSS        = 'Maine-Screen-Frame'       ;
        this.Select_Screen_Frame_Margin_CSS = 'Maine-Screen-Frame-margin';
        this.Select_Screen_Frame_Design_CSS = 'Maine-Screen-Frame-Design';
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen(){
        
        this.CreateFrame      ();                                                                   // フレーム       作成
        this.CreateBasisButton();                                                                   // 基本ボタン     作成
        this.CreatFooterButton();                                                                   // フッターボタン 作成
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレームを作成する                                                   *
    // ************************************************************************
    CreateFrame(){
         
         // ------------------------------------------------+
         // 要素作成                                        |
         // ------------------------------------------------+
         this.basis_button_frame        = document.createElement("div")                     ;       // 選択画面 フレーム
         this.basis_button_frame_margin = document.createElement("div")                     ;       // 選択画面 疑似マージン
         this.background_design         = document.createElement("div")                     ;       // 選択画面 デザイン
         
         // ------------------------------------------------+
         // スタイル指定                                    |
         // ------------------------------------------------+
         this.basis_button_frame_margin .classList.add(this.Select_Screen_Frame_Margin_CSS) ;       // 選択画面 疑似マージン のスタイル
         this.basis_button_frame        .classList.add(this.Select_Screen_Frame_CSS       ) ;       // 選択画面 フレーム     のスタイル
         this.background_design         .classList.add(this.Select_Screen_Frame_Design_CSS) ;       // 選択画面 デザイン     のスタイル
         
         // ------------------------------------------------+
         // 要素入れ込み                                    |
         // ------------------------------------------------+
         this.basis_button_frame        .appendChild(this.background_design        )        ;       // 「選択画面 デザイン    」→ 「選択画面 フレーム                         」に入れ込み
         this.maine_frame               .appendChild(this.basis_button_frame_margin)        ;       // 「選択画面 疑似マージン」→ 「メインフレーム(インスタンス時の引数の要素)」に入れ込み
         this.maine_frame               .appendChild(this.basis_button_frame       )        ;       // 「選択画面 フレーム    」→ 「メインフレーム(インスタンス時の引数の要素)」に入れ込み
         
         //スタイル取得
         this.basis_button_frame_css    = window.getComputedStyle(this.basis_button_frame)  ;       // 選択画面 フレーム のスタイルを取得
         
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンを作成する                                                 *
    // ************************************************************************
    CreateBasisButton(){
        
        // -------------------------------------+
        // 準備                                 |
        // -------------------------------------+
        let button_frame_width  = parseInt(this.basis_button_frame_css.width )                                                                                      ; // 選択画面 フレーム の横幅
        let button_frame_height = parseInt(this.basis_button_frame_css.height)                                                                                      ; // 選択画面 フレーム の縦幅
        let tir_count           = 0                                                                                                                                 ; // 現在処理している列を記憶する用
        
        // -------------------------------------+
        // 基本ボタン作成(行作成)               |
        // -------------------------------------+
        for(let key in this.basis_button_data){                                                                                                                       // 列で回す
            
            if(typeof this.frame_list[key] == "undefined" ){this.frame_list[key] = document.createElement("div");this.frame_list[key].style.position = "absolute";} ; // 該当列のフレームがまだ作成されていない場合は作成
             
            let button_num = this.basis_button_data[key]        .length                                                                                             ; // 列ごとのボタンの数
            let tir_num    = Object.keys(this.basis_button_data).length                                                                                             ; // 列の数
            tir_count++                                                                                                                                             ; // 何行目を作成しているかをカウントする
            
            // -------------------------------------+
            // 基本ボタン作成                       |
            // -------------------------------------+
            for(let i = 0; i < button_num;i++){                                                                                                                       // 列の中のボタンで回す
                
                // -------------------------+
                // 座標計算                 |
                // -------------------------+
                let text = this.basis_button_data[key][i]["text"]                                                                                                   ; // ボタンテキスト
                let top  = (button_frame_height / (tir_num+1)) * tir_count - (parseInt(this.basis_button_height) / 2)                                               ; // ボタンの縦座標
                let left = i * ( button_frame_width / button_num ) + (( ( ( button_frame_width / button_num ) / 2 ) - ( parseInt(this.basis_button_width) / 2 ) ))  ; // ボタンの横座標
                
                // -------------------------+
                // ボタン作成準備           |
                // -------------------------+
                this.ButtonProcessing.set_parent_elem ( this.frame_list[key]                                    )                                                   ; // 作成するボタン を入れる要素を指定
                this.ButtonProcessing.set_CSS         ("","","all-remove"                                       )                                                   ; // 作成するボタン のCSSを初期化
                
                // -------------------------+
                // 基本ボタンベーススタイル |
                // -------------------------+
                this.ButtonProcessing.set_CSS         (this.Basis_Button_CSS                        ,"button"   )                                                   ; // 作成するボタン に基本ボタンの ベースボタン          CSSを登録
                this.ButtonProcessing.set_CSS         (this.Basis_Button_Text_CSS                   ,"text"     )                                                   ; // 作成するボタン に基本ボタンの ベースボタン-テキスト CSSを登録
                this.ButtonProcessing.set_CSS         (this.Basis_Button_Event_CSS                  ,"event"    )                                                   ; // 作成するボタン に基本ボタンの ベースボタン-イベント CSSを登録(基本使わん)
                
                // -------------------------+
                // 基本ボタン指定スタイル   |
                // -------------------------+
                this.ButtonProcessing.set_CSS         (this.basis_button_data[key][i]["button_css"] ,"button"   )                                                   ; // 作成するボタン に基本ボタンの 指定ボタン          CSSを登録
                this.ButtonProcessing.set_CSS         (this.basis_button_data[key][i]["text_css"  ] ,"text"     )                                                   ; // 作成するボタン に基本ボタンの 指定ボタン-テキスト CSSを登録
                this.ButtonProcessing.set_CSS         (this.basis_button_data[key][i]["event_css" ] ,"event"    )                                                   ; // 作成するボタン に基本ボタンの 指定ボタン-イベント CSSを登録(基本使わん)
                
                // -------------------------+
                // 基本ボタン作成+イベント  |
                // -------------------------+
                let button = this.ButtonProcessing.create ( text , top , left                                     )                                                 ; // ボタンを作成する
                    button.get_event_elem.addEventListener("mouseup",this.basis_button_data[key][i]["callback"  ] )                                                 ; // 作成したボタンにマウスアップ時の指定イベントを登録
                
            }
            
            this.basis_button_frame.appendChild(this.frame_list[key])                                                                                               ; // 「基本ボタンの行フレーム」→「基本ボタンフレーム」に入れ込み
            
        }
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターボタンを作成する                                             *
    // ************************************************************************
    CreatFooterButton(){
        
        // フッターに作成するボタンがない場合はフッター作成をスキップ
        if(this.FooterProcessing.get_button_data().length == 0){return};                            // フッター に作成するボタンがない場合はフッター作成をスキップ
        
        // -------------------------------------+
        // フッターボタン作成                   |
        // -------------------------------------+
        this.FooterProcessing.create()            ;                                                 // フッター を作成する
        this.FooterProcessing.create_button ()    ;                                                 // フッター 内ボタンを作成する
        this.FooterProcessing.CreateSHButton("▲");                                                 // フッター の表示・非表示ボタンを作成する
        this.FooterProcessing.HideFooter    ()    ;                                                 // 最初はフッターを非表示にする(閉じた状態)
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面終了時の処理                                                     *
    // ************************************************************************
    finish = () => { 
        
        this.maine_frame.innerHTML = ""                                 ;                           // 画面を初期化
        
        if(this.FooterProcessing.get_button_data().length == 0){return} ;                           // フッターがある場合
        
        this.FooterProcessing.finish()                                  ;                           // フッターの終了処理を起動
        
    }
    
// ============================================== [ ↓セッター↓ ] ==================================================================================== //
    
    //// ************************************************************************
    //// [処理概要]                                                             *
    ////   基本ボタンのスタイルをセットする                                     *
    //// [引数]
    ////   set : 基本ボタンにセットする
    //// ************************************************************************
    //set_basis_button_css = (set) => {
    //    
    //    let dummy                    = document.createElement ("div")       ;                       // ダミー要素作成
    //    document.body                 .appendChild            (dummy)       ;                       // 「ダミー要素」→「ボディ要素」に入れ込み
    //    dummy.classList               .add                    (set  )       ;                       // ダミー要素に引数で指定したクラスをセット
    //    
    //    this.basis_button_css        = window.getComputedStyle(dummy)       ;
    //    this.basis_button_width      = this.basis_button_css.width          ;
    //    this.basis_button_height     = this.basis_button_css.height         ;
    //    this.basis_button_font_size  = this.basis_button_css.fontSize       ;
    //    this.basis_button_shape      = this.basis_button_css.borderRadius   ;
    //    
    //    dummy.remove();
    //    
    //}
    //
    //// ************************************************************************
    //// [処理概要]                                                             *
    ////   フッターボタンのスタイルをセットする                                 *
    //// ************************************************************************
    //set_footer_button_css = (set) => {
    //    
    //    let dummy                     = document.createElement ("div")        ;
    //    document.body                  .appendChild            (dummy)        ;
    //    dummy.classList                .add                    (set  )        ;
    //    this.footer_button_css        = window.getComputedStyle(dummy)        ;
    //    this.footer_button_width      = this.footer_button_css.width          ;
    //    this.footer_button_height     = this.footer_button_css.height         ;
    //    this.footer_button_font_size  = this.footer_button_css.fontSize       ;
    //    this.footer_button_shape      = this.footer_button_css.borderRadius   ;
    //    
    //    dummy.remove();
    //    
    //}
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンのデータをセットする                                       *
    // [引数]                                                                 *
    //   tir        : 基本ボタン  行(何行目か数値型で指定)1から始まる         *
    //   text       : 基本ボタン  テキスト                                    *
    //   button_css : 基本ボタン  指定CSS(ボタン         )                    *
    //   text_css   : 基本ボタン  指定CSS(ボタン-テキスト)                    *
    //   event_css  : 基本ボタン  指定CSS(ボタン-イベント)                    *
    //   callback   : 基本ボタン  マウスアップ時の処理                        *
    // ************************************************************************
    set_basis_button_data = (tir,text,button_css = "non_class",text_css = "non_class",event_css = "non_class",callback) => {
        
        if(typeof this.basis_button_data[tir] == "undefined"){this.basis_button_data[tir] = [];};
        
        let No = this.basis_button_data[tir].length;
        
        // ボタンデータをセット
        this.basis_button_data[tir][No]               = {}        ;
        this.basis_button_data[tir][No]["text"      ] = text      ;
        this.basis_button_data[tir][No]["button_css"] = button_css;
        this.basis_button_data[tir][No]["text_css"  ] = text_css  ;
        this.basis_button_data[tir][No]["event_css" ] = event_css ;
        this.basis_button_data[tir][No]["callback"  ] = callback  ;
        
    };
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッタボタンのデータ                                                 *
    // ************************************************************************
    set_footer_button_data = (text,button_css,text_css,event_css,callback) => {this.FooterProcessing.set_button_data(text,button_css,text_css,event_css,callback);}
    
}


