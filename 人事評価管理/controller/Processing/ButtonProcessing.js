// *****************************************************************************************************************************************************************************************************
//                                                                                                                                                                                                     *
// [処理概要]                                                                                                                                                                                          *
//   ボタンを作成する                                                                                                                                                                                  *
//                                                                                                                                                                                                     *
// [コンストラクタ]                                                                                                                                                                                    *
//   [引数]                                                                                                                                                                                            *
//     Arg1 : 作成したボタンを入れ込む                                                                                                                                                                 *
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
        
        this.css_list = {};
        
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
        
        
        
        
        
        // -------------------------------------+
        // 先にボタンのスタイルを取得する用     |
        // -------------------------------------+
        let dummy_button = document.createElement ( "div"                     );
            dummy_button  .classList.add          ( 'Button-Processing-Button');
        this.SettingCSS                           ( dummy_button , 'button'   );
        document.body.appendChild                 ( dummy_button              );
        this.button_css  = window.getComputedStyle( dummy_button              );
        
        // -------------------------------------+
        // 先にテキストのスタイルを取得する用   |
        // -------------------------------------+
        let dummy_text = document.createElement ( "div"                       );
            dummy_text  .classList.add          ( 'Button-Processing-Text'    );
        this.SettingCSS                         ( dummy_text , 'text'         );
        document.body.appendChild               ( dummy_text                  );
        this.text_css  = window.getComputedStyle( dummy_text                  );
        
        // -------------------------------------+
        // ボタンのフレーム                     |
        // -------------------------------------+
        let button_frame_elem            = document.createElement("div");
        button_frame_elem.style.width    = this.button_css.width        ;
        button_frame_elem.style.height   = this.button_css.height       ;
        button_frame_elem.style.position = "absolute"                   ;
        button_frame_elem.style.top      = top                          ;
        button_frame_elem.style.left     = left                         ;
        
        // -------------------------------------+
        // ボタンのスタイル                     |
        // -------------------------------------+
        let button_elem               = document.createElement("div"                           );
            button_elem                .classList.add         ('Button-Processing-Button'      );
        this.SettingCSS                                       ( button_elem , 'button'         );
        button_elem.style.top         = 0                                                       ;
        button_elem.style.left        = 0                                                       ;
        
        // -------------------------------------+
        // テキストのスタイル                   |
        // -------------------------------------+
        let text_elem                     = document.createElement("div"                           )          ;
        text_elem                          .classList.add         ('Button-Processing-Text'        )          ;
        this.SettingCSS                                           ( text_elem , 'text'             )          ;
        text_elem.innerText               = text                                                              ;
        let font_size                     = parseInt(window.getComputedStyle(dummy_button).getPropertyValue('font-size'          ))          ;
        let border_size                   = parseInt(window.getComputedStyle(dummy_button).getPropertyValue('border-bottom-width'))          ;
        text_elem.style.width             = this.button_css.width                                             ;
        text_elem.style.top               = ((parseInt(this.button_css.height) - font_size) / 2) - border_size;
        text_elem.style.left              = 0                                                                 ;
        
        // -------------------------------------+
        // イベント範囲のスタイル               |
        // -------------------------------------+
        let Event_elem                    = document.createElement("div"                             );
        Event_elem                         .classList.add         ('Button-Processing-Event'         );
        this.SettingCSS                                           ( Event_elem , 'event'             );
        Event_elem.style.width            = this.button_css.width                                     ;
        Event_elem.style.height           = this.button_css.height                                    ;
        
        // -------------------------------------+
        // イベント登録                         |
        // -------------------------------------+
//       ※要素のidまたは要素を指定   
        Event_elem.addEventListener("mousedown"   ,this.down                                       );
        Event_elem.addEventListener("mouseup"     ,this.up                                         );
        Event_elem.addEventListener("mouseover"   ,this.hover                                      );
        Event_elem.addEventListener("mouseout"    ,this.out                                        );
        Event_elem.addEventListener("contextmenu" ,this.RightClick                                 );
        
        button_elem.css_list   = JSON.parse(JSON.stringify(this.css_list));
        button_elem.borderSize = parseInt(window.getComputedStyle(dummy_button).getPropertyValue('border-bottom-width'));
        button_elem.remove     = function(){this.get_frame_elem.remove();};
        
        // -------------------------------------+
        // イベント用にプロパティに保存         |
        // -------------------------------------+
        
        //button_elem.Activity_flg          = true                                                    ;
        button_elem.get_text_elem   = text_elem        ;
        button_elem.get_event_elem  = Event_elem       ;
        button_elem.get_frame_elem  = button_frame_elem;
        
        button_elem.DelayTime = 1000;
        
        //button_elem.ButtonProcessing = this;
        
        // プロパティイベント
        button_elem.set_CSS    = this.set_CSS;
        button_elem.SettingCSS = this.SettingCSS;
        button_elem.OperateCSS = this.OperateCSS;
        button_elem.Operate_Type_Button      = "button";
        button_elem.Operate_Type_Button_Text = "text"  ;
        button_elem.down    = this.down;
        button_elem.up      = this.up;
        button_elem.Activity = this.Activity;
        button_elem.Inactive = this.Inactive;
        button_elem.ManualUp   = this.ManualUp  ;
        button_elem.ManualDown = this.ManualDown;
        button_elem.StopEventDelay = this.StopEventDelay;
        button_elem.Activity_flg = true;
        
        // 要素入れ込み
        button_elem     .appendChild(text_elem                                                     );
        button_elem     .appendChild(Event_elem                                                    );
        
        button_frame_elem.appendChild(button_elem);
        
        this.parent_elem.appendChild                          ( button_frame_elem                    );
        
        dummy_button.remove();
        dummy_text.remove();
        
        return button_elem;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   追加CSSを登録する                                                                        *
    // ********************************************************************************************
    SettingCSS(elem,type,delete_flg = false){
        
        if(this.css_list[type] == undefined){return;};
        
        if(!delete_flg){
            for(let css of this.css_list[type]){
                elem.classList.add(css);
            }
        }else{
            for(let css of this.css_list[type]){
                elem.classList.remove(css);
            }
        }
    }
    
    // 
    // hoverCSSを登録
    // 
    OperateCSS(elem,list,type,delete_flg = false){
        
        
        if(list == undefined){return;};
            for(let css of list){
                if(delete_flg){
                    
                    elem.classList.remove(`${css}-${type}`);
                    
                }else{
                    
                    elem.classList.add(`${css}-${type}`);
                    
                };
            }
        
        
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンにマウスホバーしたときにボタンの色を変更する                                       *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    hover(e){
        
        // 要素取得
        let button = e instanceof HTMLElement ? e : e.currentTarget.parentElement;
        let event  = button.get_event_elem                                       ;
        let frame  = button.get_frame_elem                                       ;
        let text   = button.get_text_elem                                        ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]      ,"hover");
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text] ,"hover");
        
        
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンにマウスアウトしたときにボタンの色と座標をもとに戻す                               *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    out(e){
        
        // 要素取得
        let button = e instanceof HTMLElement ? e : e.currentTarget.parentElement;
        let event  = button.get_event_elem                                       ;
        let frame  = button.get_frame_elem                                       ;
        let text   = button.get_text_elem                                        ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]       ,"hover",true);
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text]  ,"hover",true);
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]       ,"down",true);
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text]  ,"down",true);
        
        
        button.style.top = 0;;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンがマウスダウンされたときにボタンをへこませる                                       *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    down(e){
        
        // 要素取得
        let button = e instanceof HTMLElement ? e : e.currentTarget.parentElement;
        let event  = button.get_event_elem                                       ;
        let frame  = button.get_frame_elem                                       ;
        let text   = button.get_text_elem                                        ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]      ,"down");
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text] ,"down");
        
        button.style.top = button.borderSize;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ボタンがマウスアップされたときにボタンのへこみをもとに戻す                               *
    // [引数]                                                                                     *
    //   e : イベント                                                                             *
    // ********************************************************************************************
    up(e){
        
        // 要素取得
        let button = e instanceof HTMLElement ? e : e.currentTarget.parentElement;
        let event  = button.get_event_elem                                       ;
        let frame  = button.get_frame_elem                                       ;
        let text   = button.get_text_elem                                        ;
        
        // 非活性の場合は処理を抜ける
        if(!button.Activity_flg){return;};
        
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]       ,"hover",true);
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text]  ,"hover",true);
        
        button.OperateCSS(button,button.css_list[button.Operate_Type_Button]      ,"down",true);
        button.OperateCSS(text  ,button.css_list[button.Operate_Type_Button_Text] ,"down",true);
        
        button.style.top = 0 ;
        
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
        
        //if(color.slice(0,1) == "#"){ return `rgb(from ${color} calc(r + ${value}) calc(g + ${value}) calc(b + ${value}) )` };                                             // カラーコードでない場合はすべて白にする
        
        let dummy = document.createElement("div");
        dummy.style.background = color;
        document.body.appendChild(dummy);
        color = dummy.style.backgroundColor;
        dummy.remove();
        
        color = color.replace(/[A-Z]/gi,"");
        color = color.replace("("      ,"");
        color = color.replace(")"      ,"");
        color = color.split  (","         );
        
        color[0] = parseInt(color[0]) + value;
        color[1] = parseInt(color[1]) + value;
        color[2] = parseInt(color[2]) + value;
        
        return `rgb(${color[0]},${color[1]},${color[2]})`
        
        //// R G B 取得
        //let R = color.slice(1,3);
        //let G = color.slice(3,5);
        //let B = color.slice(5,7);
        //
        //// R G B 10進数変換
        //R = parseInt(R,16);
        //G = parseInt(G,16);
        //B = parseInt(B,16);
        //
        //// 引数value分足して16進数に戻す
        //R = R + value >= 0 ? (R + value).toString(16) : R;
        //G = G + value >= 0 ? (G + value).toString(16) : G;
        //B = B + value >= 0 ? (B + value).toString(16) : B;
        //
        //// 一桁の場合は0を足す
        //R = R.toString().length == 1 ? "0" + R : R;
        //G = G.toString().length == 1 ? "0" + G : G;
        //B = B.toString().length == 1 ? "0" + B : B;
        //
        //// 3桁以上の場合は色を変更しない
        //if(
        //     R.toString().length >= 3 ||
        //     G.toString().length >= 3 ||
        //     B.toString().length >= 3 
        //)
        //{
        //    return color;
        //}
        //
        //// カラーコードを返す
        //return `#${R}${G}${B}`;
        
    }
    
// ============================================== [ ↓セッター↓ ] ============================================================================================ //
    
    set_parent_elem       = (set) => {this.parent_elem       =          set ;};                                 // 作成したボタンを入れ込む要素
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   追加CSSを登録する                                                                        *
    // ********************************************************************************************
    set_CSS(css,type,mode = "add"){
        
        // モードによって処理切り替え
        switch(mode){
            
            case "add":
                
                if(this.css_list[type] == undefined){this.css_list[type] = [];};
                
                this.css_list[type][this.css_list[type].length] = css;
                
            break;
            
            case "remove":
                
                let regex = new RegExp(css,'g');
                
                for(let i = 0; i < this.css_list[type].length;i++ ){
                    
                    let hit = regex.test(this.css_list[type][i]);
                    
                    if(hit){this.css_list[type].splice(i,1)};
                    
                }
                
            break;
            
            case "type-remove":
                
                this.css_list[type] = [];
                
            break;
            
            case "all-remove":
                
                this.css_list = {};
                
            break;
            
        }
        
    }
    
// ============================================== [ ↑セッター↑ ] ============================================================================================ //
    
// ====================================== [ ↓各ボタンプロパティメソッド↓ ] ================================================================================== //
    
        

            
            // ************************************************************************
            // [処理概要]                                                             *
            //   ボタンを活性にする                                                   *
            // ************************************************************************
            Activity(){
                
                // 要素取得
                //let text  = this.firstElementChild;
                //let event = this.lastElementChild ;
                
                // 自動でボタンの枠の色を作成する
                //if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
                
                // グラデーション用のボタンの背景色を取得
                //let gradation = this.ChangeColor(this.background_color,64);
                
                // 色をもとに戻す
                //this.style.background      = `linear-gradient(0deg,${this.background_color},${gradation})`;
                //this.style.borderBottom    = `${this.border_size}px solid ${this.border_color}`           ;
                //text.style.color           = this.font_color                                              ;
                
                // ボタンがへこんだ状態でマウスアウトした場合へこみを戻す
                //this.style.top          = this.top_ago;
                
                // 削除したイベントを登録し直す
                //for(let i = 0;i < this.event.length ; i++){event.addEventListener("mouseup",this.event[i]);};
                
                this.get_event_elem.style.display = "";
                
                // 活性・非活性のフラグを活性にする
                this.Activity_flg = true;
                
                this.style.top = 0;
                
                this.SettingCSS(this              ,"Inactive-button",true);
                this.SettingCSS(this.get_text_elem,"Inactive-text"  ,true);
                
            }
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   ボタンを非活性にする                                                 *
            // ************************************************************************
            Inactive(){
                
                // 要素取得
                //let text  = this.firstElementChild;
                //let event = this.lastElementChild ;
                
                // ボタンを非活性表示にする
                //this.style.top             = this.top_ago + (this.border_size - 1);
                //this.style.borderBottom    = `1px solid #000000`                  ;
                //this.style.backgroundColor = "#808080"                            ;
                //text.style.color           = "#e0e0e0"                            ;
                
                // 登録されているイベントを削除
                //for(let i = 0;i < this.event.length ; i++){event.removeEventListener("mouseup",this.event[i]);};
                
                this.get_event_elem.style.display = "none";
                
                // 活性・非活性のフラグを非活性にする
                this.Activity_flg = false;
                this.style.top = this.borderSize;
                
                this.SettingCSS(this              ,"Inactive-button");
                this.SettingCSS(this.get_text_elem,"Inactive-text");

                
            }
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   手動でボタンのへこみをもとに戻す用                                   *
            // ************************************************************************
            ManualUp(){
                
                // 要素取得
                //let text  = this.firstElementChild;
                
                // 自動でボタンの枠の色を作成する
                //if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
                
                // 色を変更
                //this.style.backgroundColor         = this.background_color                               ;
                //this.style.borderBottom            = `${this.border_size}px solid ${this.border_color}`  ;
                //text.style.color                   = this.font_color                                     ;
                
                // ボタンがへこんだ状態でマウスアウトした場合へこみを戻す
                //if(this.top_ago != parseInt(this.style.top)){ this.style.top = this.top_ago; };
                
                this.up(this);
                
                //this.style.top = this.borderSize;
            }
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   手動でボタンをへこませる用                                           *
            // ************************************************************************
            ManualDown(){
                
                // 要素取得
                //let text  = this.firstElementChild;
                
                // 自動でボタンの枠の色を作成する
                //if(this.border_color_Auto){ this.border_color = this.ChangeColor(this.background_color,-32);};
                
                // 変更する色を取得
                //let background_color = this.ChangeColor(this.background_color,-16);
                //let border_color     = this.ChangeColor(this.border_color    ,-32);
                //let font_color       = this.ChangeColor(this.font_color      ,-16);
                
                // 色を変更
                //this.style.backgroundColor         = background_color                               ;
                //this.style.borderBottom            = `${this.border_size}px solid ${border_color}`  ;
                //text.style.color                     = font_color                                   ;
                
                // ボタンをへこませる
                //this.style.top          = this.top_ago + (this.border_size - 1);
                //this.style.borderBottom = `1px solid ${this.border_color}`     ;
                this.down(this);
                //this.style.top = this.borderSize;
            }
            
            
        // ====================================== [ ↑各ボタンプロパティメソッド↑ ] ================================================================================== //
            
            
        // ====================================== [ ↓各ボタンプロパティセッター↓ ] ================================================================================== //
            
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   ボタンのイベントをセット                                             *
            // [引数]                                                                 *
            //   set : ボタンに登録したいイベント                                     *
            // ************************************************************************
            //let set_event = function(set){
            //    
            //    // イベント要素取得
            //    let event = this.lastElementChild;
            //    
            //    // イベント要素にイベント登録
            //    event.addEventListener("mouseup",set);
            //    
            //    // イベント格納用プロパティに保存
            //    this.event[this.event.length] = set;
            //    
            //};
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   ボタンのテキストを変更する                                           *
            // [引数]                                                                 *
            //   set : ボタンに表示したいテキスト                                     *
            // ************************************************************************
            set_text = function(set){
                
                // テキスト変更
                let text       = this.firstElementChild;
                text.innerText = set                   ;
                
            }
            
            
            
            //let set_background_color  = function(set){this.background_color      = set;};               // ボタンの背景色
            //let set_border_color      = function(set){this.border_color          = set;};               // ボタンの枠の色
            //let set_font_color        = function(set){this.font_color            = set;};               // ボタンのフォント色
            //let set_border_color_Auto = function(set){this.set_border_color_Auto = set;};               // ボタンの枠の色を自動取得するかのフラグ
            
            
            // ************************************************************************
            // [処理概要]                                                             *
            //   連打による誤タップを防ぐためのイベント発火防止遅延処理               *
            // ************************************************************************
            StopEventDelay(design = false){
                
                     if(design == true ){ this.Inactive();                           }
                else if(design == false){ this.get_event_elem.style.display = "none";}
                
                setTimeout(function(){
                    
                         if(design == true ){this.Activity();}
                    else if(design == false){this.get_event_elem.style.display = "";}
                    
                }.bind(this),this.DelayTime);
                
            }
            
        // ====================================== [ ↑各ボタンプロパティセッター↑ ] ================================================================================== //
        
        
        // ====================================== [ ↓各ボタンプロパティゲッター↓ ] ================================================================================== //
        
            //let get_background_color = function(){return this.background_color};                        // ボタンの背景色
            
        
        // ====================================== [ ↑各ボタンプロパティセッター↑ ] ================================================================================== //
        
        
        
    
    
}
