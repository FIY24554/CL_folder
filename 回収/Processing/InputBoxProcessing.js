
// *****************************************************************************************************************************************************************************************************
//
// [処理概要]
//   インプットボックスを作成する
//
// [コンストラクタ]
//   [引数]
//     Arg1 : インプットボックスを作成するためのデータ
//     Arg2 : id名重複回避用
// ****************************************************************************************************************************************************************************************************
class InputBoxProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        this.class_name  = "InputBoxProcessing";                                                        // ログ出力用クラス名
        
        this.parent_elem = null            ;                                                        // 作成したインプットボックスを入れ込む要素
        
        this.width       = 100             ;                                                        // インプットボックスの 横幅
        this.height      = 25              ;                                                        // インプットボックスの 縦幅
        
        this.font_size   = 15              ;                                                        // ラベルの フォントサイズ
        this.font        = "sans-serif"    ;                                                        // ラベルの フォント
        
        this.padding     = 10              ;                                                        // 余白
        
        this.frame_list  = {}              ;                                                        // 複数列用
        
        this.callback    = null            ;                                                        // インプットボックス作成後のコールバック処理
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   インプットボックスを作成する                                         *
    // [引数]                                                                 *
    //   data : インプットボックスを作成するためのデータ                      *
    // ************************************************************************
    create(data = null,id=""){
        
        // エラー処理
        if(this.parent_elem == null){this.log("no-parent"  ,"create"                                 );return;};
        if(data             == null){this.log("versatility","create","第一引数が指定されていません。");return;};
        
        // ラベルの最大文字数を取得
        let max_length = 0;
        for(let value of data){max_length = max_length < value["data"].length ? value["data"].length : max_length ;}
        
        // インプットボックス作成
        for(let value of data){
            
            // 要素作成
            let input = document.createElement("input");
            let label = document.createElement("label");
            
            // データ取得
            let data = value["data"];
            let tier = value["tier"];
            
            // フレームリストにないタイプの場合は新しく作成
            if(typeof this.frame_list[tier] == "undefined"){ this.frame_list[tier] = document.createElement("div"); };
            
            // フレームスタイル
            this.frame_list[tier].style.width         = this.parent_elem.style.width ;
            this.frame_list[tier].style.paddingBottom = this.padding                 ;
            
            // ラベルスタイル
            label.innerText          = data                                   ;
            label.style.userSelect   = "none"                                 ;
            label.style.display      = "inline-block"                         ;
            label.style.font         = `bold ${this.font_size}px ${this.font}`;
            label.style.width        = max_length * this.font_size            ;
            label.style.paddingRight = this.padding                           ;
            label.style.paddingLeft  = this.padding                           ;
            
            // インプットボックススタイル
            input.style.width        = this.width                             ;
            input.style.height       = this.height                            ;
            input.id                 = `${id}_${data}`                        ;
            
            // コールバック処理
            if(this.create_label_callback != null){ label = this.create_label_callback(label,data,this.frame_list[tier]); };
            if(this.create_input_callback != null){ input = this.create_input_callback(input,data,this.frame_list[tier]); };
            
            // 要素入れ込み
            this.frame_list[tier]   .appendChild(label);
            this.frame_list[tier]   .appendChild(input);
            
        }
        
        // フレームを入れこみ
        for(let key in this.frame_list){this.parent_elem.appendChild(this.frame_list[key]);};
        
        // フレーム要素を返す
        return this.frame_list;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ログ出力用                                                           *
    // ************************************************************************
    log(type,method,text=""){
        
        switch(type){
            case "no-parent"   : console.error(`[警告] : 作成したインプットボックスを入れ込む要素が指定されていません。set_parent_elemを実行して要素を指定してください。\n  [場所] : <クラス> ${this.class_name} <メソッド> ${method}`);break;
            case "versatility" : console.error(`[警告] : ${text}                                                                                               \n  [場所] : <クラス> ${this.class_name} <メソッド> ${method}`         );break;
        }
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== // 

    set_parent_elem           = (set) => {this.parent_elem              = set};                     // 作成したインプットボックスを入れ込む要素
    set_create_label_callback = (set) => {this.create_label_callback    = set};                     // インプットボックス作成後のコールバック処理
    set_create_input_callback = (set) => {this.create_input_callback    = set};                     // インプットボックス作成後のコールバック処理
    set_width                 = (set) => {this.width                    = set};                     // インプットボックスの 横幅
    set_height                = (set) => {this.height                   = set};                     // インプットボックスの 縦幅
    set_font_size             = (set) => {this.font_size                = set};                     // ラベルの フォントサイズ
    set_font                  = (set) => {this.font                     = set};                     // ラベルの フォント
    set_padding               = (set) => {this.padding                  = set};                     // 余白

// ============================================== [ ↑セッター↑ ] ================================================================================== // 


// ============================================== [ ↓ゲッター↓ ] ================================================================================== // 

    get_inputbox = () => {return this.frame_list;};                                                 // 作成したインプットボックスを取得する

}





