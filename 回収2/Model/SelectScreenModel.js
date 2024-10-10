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
        
        this.maine_frame              = elem                                   ;                    // 選択画面を表示する要素
        this.maine_frame_width        = parseInt(this.maine_frame.style.width );                    // 選択画面を表示する要素の 横幅
        this.maine_frame_height       = parseInt(this.maine_frame.style.height);                    // 選択画面を表示する要素の 縦幅
        
        //this.basis_button_frame_width  = 
        this.basis_button_frame_height = 200;
        
        this.ButtonProcessing             = new ButtonProcessing()                     ;                    // ボタン作成 オブジェクト
        this.FooterProcessing             = new FooterProcessing()                     ;                    // フッタ作成 オブジェクト
        
        this.footer_button_data   = null                                       ;                    // フッターボタンの 要素
        this.footer_button_width  = 200                                        ;                    // フッターボタンの 横幅
        this.footer_button_height = 50                                         ;                    // フッターボタンの 縦幅
        this.footer_background_color  = "#123456"                              ;                    // フッターボタンの 背景色
        
        this.basis_button_frame       = null                                   ;                    // 基本ボタンの 要素
        this.basis_button_width       = 200                                    ;                    // 基本ボタンの 横幅
        this.basis_button_height      = 50                                     ;                    // 基本ボタンの 縦幅
        this.basis_button_font_size   = 15                                     ;                    // 基本ボタンの フォントサイズ
        this.basis_button_shape       = "100vh"                                ;                    // 基本ボタンの形
        
        this.basis_button_data        = {}                                     ;                    // 基本ボタン作成に必要なデータ
        this.frame_list               = {}                                     ;                    // 基本ボタンの階層ごとのフレーム
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen(){
        
        // フレーム作成
        this.CreateFrame();
        
        // 基本ボタン作成
        this.CreateBasisButton();
        
        // フッターボタン作成
        this.CreatFooterButton();
        
        window.addEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレームを作成する                                                   *
    // ************************************************************************
    CreateFrame(){
         
         // 基本ボタンフレーム
         this.basis_button_frame              = document.createElement("div");
         this.basis_button_frame.style.width  = this.maine_frame_width       ;
         this.basis_button_frame.style.height = this.basis_button_frame_height;
         this.basis_button_frame.style.position     = "absolute"                   ;
         //this.basis_button_frame.left         = 
         this.basis_button_frame.style.top          = (this.maine_frame_height - this.basis_button_frame_height) / 2;
         
         // 要素入れ込み
         this.maine_frame.appendChild(this.basis_button_frame);
         
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンを作成する                                                 *
    // ************************************************************************
    CreateBasisButton(){
        
        // フレームの縦横幅取得
        let button_frame_width  = parseInt(this.basis_button_frame.style.width );
        let button_frame_height = parseInt(this.basis_button_frame.style.height);
        
        let tir_count = 0;                                                                          // 現在処理している列を記憶する用
        
        // 基本ボタン作成
        for(let key in this.basis_button_data){                                                     // 列で回す
            
            if(typeof this.frame_list[key] == "undefined" ){this.frame_list[key] = document.createElement("div");};     // 該当列のフレームがまだ作成されていない場合は作成
            
            let button_num = this.basis_button_data[key].length        ;                            // 列ごとのボタンの数
            let tir_num    = Object.keys(this.basis_button_data).length;                            // 列の数
            tir_count++                                                ;
            
            for(let i = 0; i < button_num;i++){                                                     // 列の中のボタンで回す
                
                // 値取得
                let text = this.basis_button_data[key][i]["text"]                                                                               ;     // ボタンテキスト
                let top  = (button_frame_height / (tir_num+1)) * tir_count - (this.basis_button_height / 2)                                           ;     // ボタンの縦座標
                let left = i * ( button_frame_width / button_num ) + ( ( ( button_frame_width / button_num ) / 2 ) - ( this.basis_button_width / 2 ) );     // ボタンの横座標
                
                // ボタン作成
                this.ButtonProcessing.set_width           ( this.basis_button_width                      );
                this.ButtonProcessing.set_height          ( this.basis_button_height                     );
                this.ButtonProcessing.set_parent_elem     ( this.frame_list    [key]                     );
                this.ButtonProcessing.set_font_color      ( this.basis_button_data[key][i]["font_color"] );
                this.ButtonProcessing.set_font_size       ( this.basis_button_font_size                  );
                this.ButtonProcessing.set_background_color( this.basis_button_data[key][i]["back_color"] );
                this.ButtonProcessing.set_shape           ( this.basis_button_shape                      );
                let button = this.ButtonProcessing.create ( text,top,left);
                
                // ボタンイベント登録
                button.set_event(this.basis_button_data[key][i]["callback"]);
                
            }
            
            // 基本ボタンフレームに入れ込み
            this.basis_button_frame.appendChild(this.frame_list[key]);
            
        }
        
        // メインフレームに入れ込み
        this.maine_frame.appendChild(this.basis_button_frame);
        
    }
    

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターボタンを作成する                                             *
    // ************************************************************************
    CreatFooterButton(){
        
        if(this.FooterProcessing.get_button_data().length == 0){return};
        
        // フッターボタン作成
        this.FooterProcessing.create()            ;
        this.FooterProcessing.create_button ()    ;
        this.FooterProcessing.CreateSHButton("▲");
        this.FooterProcessing.HideFooter    ()    ;
        
    }
    
    resize(){
        
        this.basis_button_frame.style.top          = (parseInt(this.maine_frame.style.height) - this.basis_button_frame_height) / 2;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面終了時の処理                                                     *
    // ************************************************************************
    finish = () => { 
        
        this.maine_frame.innerHTML = ""; 
        
        window.removeEventListener("resize",this.resize);
        
        if(this.FooterProcessing.get_button_data().length == 0){return};
        
        this.FooterProcessing.finish();
        
        
        
    }
    
// ============================================== [ ↓セッター↓ ] ==================================================================================== //
    
    set_basis_button_width      = (set) => { this.basis_button_width               = set ; };                 // 基本ボタンの  横幅
    set_basis_button_height     = (set) => { this.basis_button_height              = set ; };                 // 基本ボタンの  縦幅
    set_basis_button_font_size  = (set) => { this.basis_button_font_size           = set ; };                 // 基本ボタンの  フォントサイズ
    set_basis_button_shape      = (set) => { this.basis_button_shape               = set ; };                 // 基本ボタンの  形
    
    set_footer_button_width     = (set) => { this.FooterProcessing.set_button_width     (set); };                 // フッタ-ボタンの  横幅
    set_footer_button_height    = (set) => { this.FooterProcessing.set_button_height    (set); };                 // フッタ-ボタンの  縦幅
    set_footer_button_font_size = (set) => { this.FooterProcessing.set_button_font_size (set); };                 // フッタ-ボタンの  フォントサイズ
    set_footer_button_shape     = (set) => { this.FooterProcessing.set_button_shape     (set); };                 // フッタ-ボタンの  形
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンのデータ                                                   *
    // ************************************************************************
    set_basis_button_data = (tir,text,back_color,font_color,callback) => {
        
        if(typeof this.basis_button_data[tir] == "undefined"){this.basis_button_data[tir] = [];};
        
        let No = this.basis_button_data[tir].length;
        
        // ボタンデータをセット
        this.basis_button_data[tir][No]               = {}        ;
        this.basis_button_data[tir][No]["text"      ] = text      ;
        this.basis_button_data[tir][No]["back_color"] = back_color;
        this.basis_button_data[tir][No]["font_color"] = font_color;
        this.basis_button_data[tir][No]["callback"  ] = callback  ;
        
    };
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッタボタンのデータ                                                 *
    // ************************************************************************
    set_footer_button_data = (text,back_color,font_color,callback) => {this.FooterProcessing.set_button_data(text,font_color,back_color,callback);}
    
}



