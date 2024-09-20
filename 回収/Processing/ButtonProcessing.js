
// *****************************************************************************************************************************************************************************************************
//                                                                                                                                                                                                     *
// [処理概要]                                                                                                                                                                                          *
//   ボタンを作成する                                                                                                                                                                                  *
//                                                                                                                                                                                                     *
// [コンストラクタ]                                                                                                                                                                                    *
//   [引数]                                                                                                                                                                                            *
//     Arg1 : 作成したボタンを入れ込む要素                                                                                                                                                             *
//       ※要素のidまたは要素を指定                                                                                                                                                                    *
//                                                                                                                                                                                                     *
// [メソッド]                                                                                                                                                                                          *
//                                                                                                                                                                                                     *
// < this.create >                                                                                                                                                                                     *
//  [処理概要]                                                                                                                                                                                         *
//    ボタンを作成する                                                                                                                                                                                 *
//  [引数]                                                                                                                                                                                             *
//    Arg1 : 作成するボタンに表示されるテキスト                                                                                                                                                        *
//    Arg2 : 作成するボタンのtop座標                                                                                                                                                                   *
//    Arg3 : 作成するボタンのleft座標                                                                                                                                                                  *
//                                                                                                                                                                                                     *
// [セッター]                                                                                                                                                                                          *
//                                                                                                                                                                                                     *
// < this.set_parent_elem       > : 作成したボタンを入れ込む要素                                                                                                                                       *
// < this.set_font_size         > : フォントサイズ                                                                                                                                                     *
// < this.set_border_size       > : ボタンの枠のサイズ                                                                                                                                                 *
// < this.set_font_color        > : フォントカラー                                                                                                                                                     *
// < this.set_background_color  > : 背景カラー                                                                                                                                                         *
// < this.set_border_color      > : ボタンの枠のカラー                                                                                                                                                 *
// < this.set_width             > : ボタンの横幅                                                                                                                                                       *
// < this.set_height            > : ボタンの縦幅                                                                                                                                                       *
// < this.set_border_color_Auto > : ボタンの枠のカラーを自動で指定する    true : 自動    false : 手動                                                                                                  *
// < this.set_shape             > : ボタンの丸みを変更する                例   : 100vh                                                                                                                 *
// < this.set_position          > : ボタンのポジション                                                                                                                                                 *
//                                                                                                                                                                                                     *
// [プロパティ]                                                                                                                                                                                        *
//   ※this.createの返り値のボタンに設定されいるプロパティ                                                                                                                                             *
//                                                                                                                                                                                                     *
//   [プロパティメソッド]                                                                                                                                                                              *
//                                                                                                                                                                                                     *
//      < this.Activity >                                                                                                                                                                              *
//       [処理概要]                                                                                                                                                                                    *
//         ボタンを活性状態にする                                                                                                                                                                      *
//       [引数]                                                                                                                                                                                        *
//         なし                                                                                                                                                                                        *
//                                                                                                                                                                                                     *
//      < this.Inactive >                                                                                                                                                                              *
//       [処理概要]                                                                                                                                                                                    *
//         ボタンを非活性にする                                                                                                                                                                        *
//       [引数]                                                                                                                                                                                        *
//         なし                                                                                                                                                                                        *
//      < this.up >                                                                                                                                                                                    *
//       [処理概要]                                                                                                                                                                                    *
//         ボタンのへこみをもとに戻す                                                                                                                                                                  *
//       [引数]                                                                                                                                                                                        *
//         なし                                                                                                                                                                                        *
//                                                                                                                                                                                                     *
//      < this.down >                                                                                                                                                                                  *
//       [処理概要]                                                                                                                                                                                    *
//         ボタンをへこませる                                                                                                                                                                          *
//       [引数]                                                                                                                                                                                        *
//         なし                                                                                                                                                                                        *
//   [プロパティセッター]                                                                                                                                                                              *
//                                                                                                                                                                                                     *
//      < this.set_event             > : ボタンにイベントを登録                                                                                                                                        *
//      < this.set_text              > : ボタンのテキスト変更                                                                                                                                          *
//      < this.set_background_color  > : ボタンの背景色変更                                                                                                                                            *
//      < this.set_border_color      > : ボタンの枠の色変更                                                                                                                                            *
//      < this.set_font_color        > : ボタンのフォントの色変更                                                                                                                                      *
//      < this.set_border_color_Auto > : ボタンの枠の色を自動で取得するかのフラグをセット                                                                                                              *
//                                                                                                                                                                                                     *
//  [プロパティゲッター]                                                                                                                                                                               *
//      < this.get_background_color > : ボタンの背景色を取得                                                                                                                                           *
//                                                                                                                                                                                                     *
// *****************************************************************************************************************************************************************************************************
class ButtonProcessing{
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   コンストラクタ                                                                           *
    // [引数]                                                                                     *
    //   elem : 作成したボタンを入れ込む要素                                                      *
    // ********************************************************************************************
    constructor(elem){
        
        this.parent_elem       = typeof elem != "string" ? elem : document.getElementById(elem);    // 作成したボタンを入れ込む要素取得
        this.font_size         = 20                                                            ;    // フォントサイズ
        this.border_size       = 5                                                             ;    // ボタンの枠線のサイズ
        this.font_color        = "#ffffff"                                                     ;    // フォントのカラー 
        this.background_color  = "#32cd32"                                                     ;    // ボタンの背景カラー
        this.border_color      = "#12ad12"                                                     ;    // ボタンの枠線のカラー
        this.border_color_Auto = true                                                          ;    // ボタンの枠線のカラーを自動で指定してくれる    true : 自動    false : 手動
        this.width             = 100                                                           ;    // ボタンの横幅
        this.height            = 50                                                            ;    // ボタンの縦幅
        this.shape             = "100vh"                                                       ;    // ボタンの丸みを変更する                        例 : 100vh
        this.position          = "absolute"                                                    ;    // ボタンのポジション
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンを作成する                                                                         *
    // [引数]                                                                                     *
    //   text : 作成するボタンに表示されるテキスト                                                *
    //   top  : 作成するボタンのtop座標                                                           *
    //   left : 作成するボタンのleft座標                                                          *
    // ********************************************************************************************
    create(text,top,left){
        
        // 自動でボタンの枠の色を作成する
        if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
        
        // グラデーション用のボタンの背景色を取得
        let gradation = this.ChangeColor(this.background_color,64);
        
        // 要素作成
        let button_elem                   = document.createElement("div"                           );
        let text_elem                     = document.createElement("div"                           );
        let Event_elem                    = document.createElement("div"                           );
        
        // ボタンのスタイル
        button_elem.style.borderRadius    = this.shape                                              ;
        button_elem.style.width           = this.width                                              ;
        button_elem.style.height          = this.height                                             ;
        button_elem.style.background      = `linear-gradient(0deg,${this.background_color},${gradation})`;
        button_elem.style.borderBottom    = `${this.border_size}px solid ${this.border_color}`      ;
        button_elem.style.position        = this.position                                           ;
        button_elem.style.top             = top                                                     ;
        button_elem.style.left            = left                                                    ;
        button_elem.style.boxShadow       = "0 1px 3px 0 black"                                     ;
        
        // テキストのスタイル
        text_elem.innerText               = text                                                    ;
        text_elem.style.width             = this.width                                              ;
        text_elem.style.textAlign         = "center"                                                ;
        text_elem.style.color             = this.font_color                                         ;
        text_elem.style.font              = `bold ${this.font_size}px Avenir`                       ;
        text_elem.style.userSelect        = "none"                                                  ;
        text_elem.style.zIndex            = 0                                                       ;
        text_elem.style.position          = "absolute"                                              ;
        text_elem.style.top               = ((this.height - this.font_size) / 2) - this.border_size ;
        text_elem.style.left              = 0                                                       ;
        
        // イベント範囲のスタイル
        Event_elem.style.width            = this.width                                              ;
        Event_elem.style.height           = this.height                                             ;
        Event_elem.style.position         = "absolute"                                              ;
        Event_elem.style.zIndex           = 1                                                       ;
        
        // イベント登録
        Event_elem.addEventListener("mousedown"   ,this.down                                       );
        Event_elem.addEventListener("mouseup"     ,this.up                                         );
        Event_elem.addEventListener("mouseover"   ,this.hover                                      );
        Event_elem.addEventListener("mouseout"    ,this.out                                        );
        Event_elem.addEventListener("contextmenu" ,this.RightClick                                 );
        
        // イベント用にプロパティに保存
        button_elem.top_ago               = top                                                     ;
        button_elem.background_color      = this.background_color                                   ;
        button_elem.border_color          = this.border_color                                       ;
        button_elem.font_color            = this.font_color                                         ;
        button_elem.border_size           = this.border_size                                        ;
        button_elem.Activity_flg          = true                                                    ;
        
        // 各ボタンにセッターをプロパティに登録
        button_elem.set_event             = this.property.set_event                                 ;
        button_elem.event                 = []                                                      ;
        button_elem.set_text              = this.property.set_text                                  ;
        button_elem.set_background_color  = this.property.set_background_color                      ;
        button_elem.set_border_color      = this.property.set_border_color                          ;
        button_elem.set_font_color        = this.property.set_font_color                            ;
        button_elem.set_border_color_Auto = this.property.set_border_color_Auto                     ;
        button_elem.border_color_Auto     = true                                                    ;
        button_elem.get_background_color  = this.property.get_background_color                      ;
        
        // 各ボタンに内部要素へのアクセスを追加する
        button_elem.text_elem             = text_elem                                               ;
        button_elem.event_elem            = Event_elem                                              ;
        
        // 自身でボタンの凹凸を変更する用
        button_elem.up                    = this.property.ManualUp                                  ;
        button_elem.down                  = this.property.ManualDown                                ;
        button_elem.ChangeColor           = this.ChangeColor                                        ;
        
        // ボタンのプロパティに活性・非活性の処理を登録
        button_elem.Activity              = this.property.Activity                                  ;
        button_elem.Inactive              = this.property.Inactive                                  ;
        
        // 要素入れ込み
        button_elem     .appendChild(text_elem                                                     );
        button_elem     .appendChild(Event_elem                                                    );
        this.parent_elem.appendChild(button_elem                                                   );
        
        return button_elem;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンにマウスホバーしたときにボタンの色を変更する                                       *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    hover = (e) => {
        
        // 要素取得
        let target = e.currentTarget              ;
        let button = target.parentElement         ;
        let text   = target.previousElementSibling;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        // 変更する色を取得
        let background_color = this.ChangeColor(button.background_color,-16);
        let border_color     = this.ChangeColor(button.border_color    ,-32);
        let font_color       = this.ChangeColor(button.font_color      ,-16);
        
        // 色を変更
        button.style.backgroundColor         = background_color                               ;
        button.style.borderBottom            = `${button.border_size}px solid ${border_color}`;
        text.style.color                     = font_color                                     ;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンにマウスアウトしたときにボタンの色と座標をもとに戻す                               *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    out = (e) => {
        
        // 要素取得
        let target = e.currentTarget              ;
        let button = target.parentElement         ;
        let text   = target.previousElementSibling;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        // 色を変更
        button.style.backgroundColor         = button.background_color                               ;
        button.style.borderBottom            = `${button.border_size}px solid ${button.border_color}`;
        text.style.color                     = button.font_color                                     ;
        
        // ボタンがへこんだ状態でマウスアウトした場合へこみを戻す
        if(button.top_ago != parseInt(button.style.top)){ button.style.top = button.top_ago; };
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンがマウスダウンされたときにボタンをへこませる                                       *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    down = (e) => {
        
        // 要素取得
        let target = e.currentTarget              ;
        let button = target.parentElement         ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        // ボタンをへこませる
        button.style.top          = button.top_ago + (button.border_size - 1);
        button.style.borderBottom = `1px solid ${button.border_color}`       ;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンがマウスアップされたときにボタンのへこみをもとに戻す                               *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    up = (e) => {
        
        // 要素取得
        let target = e.currentTarget              ;
        let button = target.parentElement         ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        // ボーダーの濃い色を取得
        let border_color     = this.ChangeColor(button.border_color   ,-32);
        
        // ボタンのへこみを直す
        button.style.top          = button.top_ago;
        button.style.borderBottom = `${button.border_size}px solid ${border_color}` ;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   右クリックの後続イベントを取り消して、右クリック時のメニューが表示されるのを防止する     *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    RightClick = (e) => { e.preventDefault(); }                                                     // 後続イベントを取り消し
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   カラーコードを濃くするまたは薄くする                                                     *
    // [引数]                                                                                     *
    //   color : カラーコード                                                                     *
    //   value : 値              正の値 : 薄くなる    負の値 : 濃くなる                           *
    // ********************************************************************************************
    ChangeColor(color,value = 0){
        
        if(color.slice(0,1) != "#"){ return "white"; };                                             // カラーコードでない場合はすべて白にする
        
        // R G B 取得
        let R = color.slice(1,3);
        let G = color.slice(3,5);
        let B = color.slice(5,7);
        
        // R G B 10進数変換
        R = parseInt(R,16);
        G = parseInt(G,16);
        B = parseInt(B,16);
        
        // 引数value分足して16進数に戻す
        R = R + value >= 0 ? (R + value).toString(16) : R;
        G = G + value >= 0 ? (G + value).toString(16) : G;
        B = B + value >= 0 ? (B + value).toString(16) : B;
        
        // 一桁の場合は0を足す
        R = R.toString().length == 1 ? "0" + R : R;
        G = G.toString().length == 1 ? "0" + G : G;
        B = B.toString().length == 1 ? "0" + B : B;
        
        // 3桁以上の場合は色を変更しない
        if(
             R.toString().length >= 3 ||
             G.toString().length >= 3 ||
             B.toString().length >= 3 
        )
        {
            return color;
        }
        
        // カラーコードを返す
        return `#${R}${G}${B}`;
        
    }
    
// ============================================== [ ↓セッター↓ ] ============================================================================================ //
    
    set_parent_elem       = (set) => {this.parent_elem       = set;};                                 // 作成したボタンを入れ込む要素
    set_font_size         = (set) => {this.font_size         = set;};                                 // フォントサイズ
    set_border_size       = (set) => {this.border_size       = set;};                                 // ボタンの枠のサイズ
    set_font_color        = (set) => {this.font_color        = set;};                                 // フォントカラー
    set_background_color  = (set) => {this.background_color  = set;};                                 // 背景カラー
    set_border_color      = (set) => {this.border_color      = set;};                                 // ボタンの枠のカラー
    set_width             = (set) => {this.width             = set;};                                 // ボタンの横幅
    set_height            = (set) => {this.height            = set;};                                 // ボタンの縦幅
    set_border_color_Auto = (set) => {this.border_color_Auto = set;};                                 // ボタンの枠のカラーを自動で指定する    true : 自動    false : 手動
    set_shape             = (set) => {this.shape             = set;};                                 // ボタンの丸みを変更する                例   : 100vh
    set_position          = (set) => {this.position          = set;};                                 // ボタンのポジション
    
// ============================================== [ ↑セッター↑ ] ============================================================================================ //
    
    
// ====================================== [ ↓各ボタンプロパティメソッド↓ ] ================================================================================== //
    
    // *************************************************************************
    // [処理概要]                                                              *
    //   各ボタンのプロパティとして追加する処理は名前空間を分ける(即時実行する)*
    // *************************************************************************
    property = (function(){
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   ボタンを活性にする                                                   *
        // ************************************************************************
        let Activity = function(){
            
            // 要素取得
            let text  = this.firstElementChild;
            let event = this.lastElementChild ;
            
            // 自動でボタンの枠の色を作成する
            if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
            
            // グラデーション用のボタンの背景色を取得
            let gradation = this.ChangeColor(this.background_color,64);
            
            // 色をもとに戻す
            this.style.background      = `linear-gradient(0deg,${this.background_color},${gradation})`;
            this.style.borderBottom    = `${this.border_size}px solid ${this.border_color}`           ;
            text.style.color           = this.font_color                                              ;
            
            // ボタンがへこんだ状態でマウスアウトした場合へこみを戻す
            this.style.top          = this.top_ago;
            
            // 削除したイベントを登録し直す
            for(let i = 0;i < this.event.length ; i++){event.addEventListener("mouseup",this.event[i]);};
            
            // 活性・非活性のフラグを活性にする
            this.Activity_flg = true;
            
        }
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   ボタンを非活性にする                                                 *
        // ************************************************************************
        let Inactive = function(){
            
            // 要素取得
            let text  = this.firstElementChild;
            let event = this.lastElementChild ;
            
            // ボタンを非活性表示にする
            this.style.top             = this.top_ago + (this.border_size - 1);
            this.style.borderBottom    = `1px solid #000000`                  ;
            this.style.backgroundColor = "#808080"                            ;
            text.style.color           = "#e0e0e0"                            ;
            
            // 登録されているイベントを削除
            for(let i = 0;i < this.event.length ; i++){event.removeEventListener("mouseup",this.event[i]);};
            
            // 活性・非活性のフラグを非活性にする
            this.Activity_flg = false;
            
        }
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   手動でボタンのへこみをもとに戻す用                                   *
        // ************************************************************************
        let ManualUp = function(){
            
            // 要素取得
            let text  = this.firstElementChild;
            
            // 自動でボタンの枠の色を作成する
            if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
            
            // 色を変更
            this.style.backgroundColor         = this.background_color                               ;
            this.style.borderBottom            = `${this.border_size}px solid ${this.border_color}`  ;
            text.style.color                   = this.font_color                                     ;
            
            // ボタンがへこんだ状態でマウスアウトした場合へこみを戻す
            if(this.top_ago != parseInt(this.style.top)){ this.style.top = this.top_ago; };
        }
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   手動でボタンをへこませる用                                           *
        // ************************************************************************
        let ManualDown = function(){
            
            // 要素取得
            let text  = this.firstElementChild;
            
            // 自動でボタンの枠の色を作成する
            if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
            
            // 変更する色を取得
            let background_color = this.ChangeColor(this.background_color,-16);
            let border_color     = this.ChangeColor(this.border_color    ,-32);
            let font_color       = this.ChangeColor(this.font_color      ,-16);
            
            // 色を変更
            this.style.backgroundColor         = background_color                               ;
            this.style.borderBottom            = `${this.border_size}px solid ${border_color}`  ;
            text.style.color                     = font_color                                   ;
            
            // ボタンをへこませる
            this.style.top          = this.top_ago + (this.border_size - 1);
            this.style.borderBottom = `1px solid ${this.border_color}`     ;
            
        }
        
        
    // ====================================== [ ↑各ボタンプロパティメソッド↑ ] ================================================================================== //
        
        
    // ====================================== [ ↓各ボタンプロパティセッター↓ ] ================================================================================== //
        
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   ボタンのイベントをセット                                             *
        // [引数]                                                                 *
        //   set : ボタンに登録したいイベント                                     *
        // ************************************************************************
        let set_event = function(set){
            
            // イベント要素取得
            let event = this.lastElementChild;
            
            // イベント要素にイベント登録
            event.addEventListener("mouseup",set);
            
            // イベント格納用プロパティに保存
            this.event[this.event.length] = set;
            
        };
        
        // ************************************************************************
        // [処理概要]                                                             *
        //   ボタンのテキストを変更する                                           *
        // [引数]                                                                 *
        //   set : ボタンに表示したいテキスト                                     *
        // ************************************************************************
        let set_text = function(set){
            
            // テキスト変更
            let text       = this.firstElementChild;
            text.innerText = set                   ;
            
        }
        
        let set_background_color  = function(set){this.background_color      = set;};               // ボタンの背景色
        let set_border_color      = function(set){this.border_color          = set;};               // ボタンの枠の色
        let set_font_color        = function(set){this.font_color            = set;};               // ボタンのフォント色
        let set_border_color_Auto = function(set){this.set_border_color_Auto = set;};               // ボタンの枠の色を自動取得するかのフラグ
        
    // ====================================== [ ↑各ボタンプロパティセッター↑ ] ================================================================================== //
    
    
    // ====================================== [ ↓各ボタンプロパティゲッター↓ ] ================================================================================== //
    
        let get_background_color = function(){return this.background_color};                        // ボタンの背景色
    
    // ====================================== [ ↑各ボタンプロパティセッター↑ ] ================================================================================== //
    
    
        // 即時実行関数式のためreturnで返す
        return {
                    Activity              : Activity             ,                                  // ボタンを活性にする
                    Inactive              : Inactive             ,                                  // ボタンを非活性にする
                    ManualUp              : ManualUp             ,                                  // 手動でボタンのへこみを直す
                    ManualDown            : ManualDown           ,                                  // 手動でボタンをへこませる
                    set_event             : set_event            ,                                  // ボタンにイベントを登録する
                    set_text              : set_text             ,                                  // ボタンのテキストを変更する
                    set_background_color  : set_background_color ,                                  // ボタンの背景色をセット
                    set_border_color      : set_border_color     ,                                  // ボタンの枠の色をセット
                    set_font_color        : set_font_color       ,                                  // ボタンのフォント色をセット
                    set_border_color_Auto : set_border_color_Auto,                                  // ボタンの枠の色を自動で取得するかのフラグをセット
                    get_background_color  : get_background_color ,                                  // ボタンの背景色をゲット
               };
        
    })();
    
}


