// *****************************************************************************************************************************************************************************************************
// [画面名]
//   自己評価管理画面
// *****************************************************************************************************************************************************************************************************
class SelfEvaluationScreen extends ScrollScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem,employees = null){
        
        // 親クラスコンストラクタ呼び出し
        super(elem,employees);
        
        this.LegendProcessing                      = null                                          ;
        this.Legend                                = null                                          ;
        
        this.maine_fram                            = elem                                          ;          // メインフレームの要素
        this.maine_fram_width                      = parseInt(this.maine_fram.style.width )        ;          // メインフレームの横幅
        this.maine_fram_height                     = parseInt(this.maine_fram.style.height)        ;          // メインフレームの縦幅
        
        
        this.company_table_scroll_frame            = null                                          ;          // スクロールフレームの要素
        this.company_table_frame                   = null                                          ;          // 会社評価フレームの要素
        
        this.table_width                           = 1100                                          ;          // テーブルの横幅
        this.table_td_height                       = 25                                            ;          // テーブルデータの縦幅
        this.default_color                         = "#f0f8ff"                                     ;
        
        this.TableHandler                          = new TableHandler()                            ;          // テーブルハンドラクラス
        
        this.self_head                             = null                                          ;          // 自己評価テーブルヘッダ要素
        this.self_table                            = null                                          ;          // 自己評価テーブル      要素
        this.self_head_frame                       = null                                          ;          // 自己評価ヘッダフレーム要素
        this.self_head_background_color            = "#bf6fdf";
        
        this.padding                               = 40                                            ;          // 余白
        
        
        this.self_table_bottom                     = 0                                             ;          // 自己評価テーブルのbottom座標
        
        // チェックボックスの色
        this.checkbox_delete_color                 = "#bf0000"                                     ;          // すでに登録されているデータのチェックが外されたときの背景色
        this.checkbox_register_color               = "#1e50bf"                                     ;          // まだ登録されていないデータのチェックがつけられたときの背景色
        this.checkbox_selected_color               = "#12ad12"                                     ;          // すでに登録されているデータの背景色
        this.checkbox_checked_color                = "#888888"                                     ;          // チェックボックスのチェックがつけられたときの背景色
        
        this.now_create_tr_checkbox                = false                                         ;          // テーブルを作成するときの作成中レコードの登録状況を保管する
        
        this.table_heda_height                     = 30                                            ;          // テーブルヘッダの縦幅
        
        this.right_footer_button_text              = "評価結果"                                    ;
        this.right_footer_button_background_color  = "#5a4abd"                                     ;
        
        this.left_footer_button_text               = null                                          ;
        this.left_footer_button_background_color   = "#bf2f2f"                                     ;
        
        
        // ここから追加
        //this.right_footer_button_Transition = null;
        //this.employees = null;
        
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "自己評価画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen = () =>{
        
        // 画面作成
        super.CreateScreen  ();                                                               // 親クラスCreateScreen
        
        this.CreateTable(this.getData(),"自己評価","SelfEvaluationScreen-Self-Head");
        
        //this.CreateSelfTable();                                                               // 自己評価テーブル作成
        
        
        this.CreateLegend   ();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   自己評価テーブル作成                                                 *
    // ************************************************************************
    CreateSelfTable = () =>{
        
        // -------------------------------------+
        // ヘッダフレーム作成                   |
        // -------------------------------------+
        this.self_head_frame                                   = document.createElement("div")                             ;
        this.self_head_frame.style.width                       = this.maine_fram_width                                     ;
        this.self_head_frame.style.position                    = "sticky"                                                  ;
        this.self_head_frame.style.top                         = this.padding                                              ;
        this.self_head_frame.style.zIndex                      = 1                                                         ;
        this.table_frame.appendChild                           ( this.self_head_frame )                            ;
        
        // --------------------------------------+
        // 自己評価テーブルヘッダ作成              |
        // --------------------------------------+
        this.self_head                                         = document.createElement("div")                             ;
        this.self_head.style.width                             = this.table_width   -6                                     ;
        this.self_head.style.height                            = this.table_heda_height                                    ;
        this.self_head.innerText                               = "自己評価"                                                ;
        this.self_head.style.textAlign                         = "center"                                                  ;
        this.self_head.style.font                              = `bold 15px sans-serif`                                    ;
        this.self_head.style.backgroundColor                   = this.self_head_background_color                           ;
        this.self_head.style.border                            = "3px solid black"                                         ;
        this.self_head.style.borderBottom                      = "0px solid black"                                         ;
        this.self_head.style.margin                            = "auto"                                                    ;
        this.self_head.style.boxShadow                         = "0 1px 3px 0 black"                                       ;
        this.self_head.style.userSelect                        = "none"                                                    ;
        this.self_head_frame.appendChild                         ( this.self_head       )                            ;
        
        // -------------------------------------+
        // 自己評価テーブルダミーカラム作成       |
        // -------------------------------------+
        
        // データ取得
        let data                                                     = this.getData()                             ;
        let dummy_data                                               = []                                                        ;
        dummy_data[0]                                                = data[0]                                                   ;
        
        // 自己評価ダミーテーブルカラム作成
        this.TableHandler.set_table_width                              ( this.table_width                                       );
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        this.TableHandler.TableProcessing                                  ( dummy_data,this.self_head_frame,"DummySelf");
        let dummy_table = this.TableHandler.get_table()                                                                          ;
        
        // 自己評価ダミーテーブルカラムのスタイル編子
        dummy_table.firstElementChild.lastElementChild.remove()                                                                  ;
        dummy_table.style.height                                     = ""                                                        ;
        dummy_table.style.boxShadowBottom                            = ""                                                        ;
        dummy_table.style.borderBottom                               = ""                                                        ;
        dummy_table.style.position                                   = ""                                                        ;
        dummy_table.style.margin                                     = "auto"                                                    ;
        dummy_table.firstElementChild.firstElementChild.style.border = ""                                                        ;
        
        // -------------------------------------+
        // 自己評価テーブル作成                   |
        // -------------------------------------+
        this.TableHandler.set_table_width                              ( this.table_width                                       );
        this.TableHandler.set_select_table(true);
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        //this.TableHandler.TableProcessing                                  ( data,this.company_table_frame,"self"             );
        this.TableHandler.TableProcessing                                  ( data,this.table_frame,"Self"             );
        
        // 自己評価テーブルスタイル変更
        this.self_table                                        = this.TableHandler.get_table()                             ;
        this.self_table.style.width                            = this.table_width                                          ;
        this.self_table.style.height                           = ""                                                        ;
        this.self_table.style.position                         = ""                                                        ;
        this.self_table.style.margin                           = `${35 - this.table_td_height} auto ${this.padding} auto`  ;
        
        // -------------------------------------+
        // 諸所調整                             |
        // -------------------------------------+
        let table_rect                  = this.self_table.getBoundingClientRect();            // 自己評価テーブルの座標・サイズ情報取得
        this.table_scroll_frame.addEventListener("scroll",this.ScrollEvent)    ;            // スクロールイベント登録
        
        this.self_table_bottom    = table_rect["height"] +40 - 5                 ;            // テーブルbottom取得
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例を作成する                                                       *
    // ************************************************************************
    CreateLegend = () => {
        
        let rect   = this.table_scroll_frame.getBoundingClientRect();
        let odd    = this.TableHandler.get_table_td_odd_color()     ;
        let even   = this.TableHandler.get_table_td_even_color()    ;
        let width  = 430                                            ;
        let height = 100                                            ;
        let top    = rect["top"]                                    ;
        let left   = rect["width"] - (width+20)                     ;
        
        let html = `<div>                                                              `+
                   `    <span style="color:${this.checkbox_selected_color};">■</span> `+
                   `    <span> : </span>                                               `+
                   `    <span>現在登録されている評価</span>                            `+
                   `</div>                                                             `+
                   `<div>                                                              `+
                   `    <span style="color:${this.checkbox_register_color};">■</span> `+
                   `    <span> : </span>                                               `+
                   `    <span>新しく登録する評価</span>                                `+
                   `</div>                                                             `+
                   `<div>                                                              `+
                   `    <span style="color:${this.checkbox_delete_color};">■</span>   `+
                   `    <span> : </span>                                               `+
                   `    <span>現在登録されている評価を削除</span>                      `+
                   `</div>                                                             `;
                   //`<div>                                                              `+
                   //`    <span style="color:${odd};">■</span>                          `+
                   //`    <span> : </span>                                               `+
                   //`    <span>奇数レコード(レコードの境目をわかりやすくするため)</span>`+
                   //`</div>                                                             `+
                   //`<div>                                                              `+
                   //`    <span style="color:${even};">■</span>                         `+
                   //`    <span> : </span>                                               `+
                   //`    <span>偶数レコード(レコードの境目をわかりやすくするため)</span>`+
                   //`</div>                                                             `;
        
        this.LegendProcessing = new LegendProcessing            (this.table_scroll_frame);
        this.LegendProcessing.set_Legend_width                  (width   )               ;
        this.LegendProcessing.set_Legend_height                 (height  )               ;
        this.LegendProcessing.set_Legend_tag_title_text         ("凡例"  )               ;
        this.LegendProcessing.create                            (top,left)               ;
        this.LegendProcessing.set_HTML                          (html    )               ;
        this.Legend           = this.LegendProcessing.get_Legend()                       ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズイベント                                                     *
    // ************************************************************************
    resize = () =>{
        
        // 座標変更
        super.resize();
        //this.self_head_frame     .style.width  = this.maine_fram.style.width                                             ;  // 自己評価ヘッダの       横幅変更
        
        // 凡例座標変更
        let rect               = this.table_scroll_frame.getBoundingClientRect();
        let width              = 430                                            ;
        let top                = rect["top"]                                    ;
        let left               = rect["width"] - (width+20)                     ;
        this.Legend.style.top  = top                                            ;
        this.Legend.style.left = left                                           ;
    
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   スクロール時のイベント                                               *
    // ************************************************************************
    //ScrollEvent = (e) =>{
    //    
    //    // 自己評価ヘッダの座標をスクロールに合わせる
    //    let scroll                           = e.target.scrollTop                                                                                                      ; // スクロール座標
    //    let self_head_top              = this.padding  - scroll  < 0 ? 0 : (this.padding - scroll)                                                               ; // 0座標で自己評価テーブルヘッダを止める
    //    if(this.self_table_bottom - this.table_td_height - 6 < scroll){self_head_top = ( this.self_table_bottom - scroll) - this.table_td_height - 6}; // 自己評価テーブルがスクロールによって非表示になるときに一緒にテーブルヘッダもスクロール
    //    this.self_head_frame.style.top = self_head_top                                                                                                     ; // 自己評価テーブルヘッダの座標変更
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時の処理                                           *
    // ************************************************************************
    TableColumnCreateCallBack = (elem,key,frame,tr) => {
        
        // カラムごとに処理を行う
        switch(key){
            
            // -----------------------+
            // チェックボックス       |
            // -----------------------+
            case "チェックボックス":
                elem.innerText   = "";
                elem.style.width = 60;
            break;
            
            // -----------------------+
            // 評価                   |
            // -----------------------+
            case "評価":
                elem.style.width = 300;
            break;
            
            // -----------------------+
            // 備考                   |
            // -----------------------+
            case "備考":
                elem.style.width = 620;
            break;
            
            // -----------------------+
            // pt                     |
            // -----------------------+
            case "pt":
                elem.style.width = 50;
            break;
            
            // -----------------------+
            // Expt                   |
            // -----------------------+
            case "Expt":
                elem.style.width = 50;
            break;
            
        }
        
        elem.style.height = this.table_td_height;
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時の処理                                           *
    // ************************************************************************
    TableDataCreateCallBack = (elem,key,frame,tr) => {
        
        // カラムごとに処理を行う
        switch(key){
            
            // -----------------------+
            // チェックボックス       |
            // -----------------------+
            case "チェックボックス":
                
                // チェックボックス作成
                let checkbox             = document.createElement("div");
                checkbox.innerText       = ""                           ;
                checkbox.style.border    = "1px solid black"            ;
                checkbox.style.font      = `bold 15px sans-serif`       ;
                checkbox.style.color     = "#dddddd"                    ;
                checkbox.style.textAlign = "center"                     ;
                checkbox.style.width     = 20                           ;
                checkbox.style.height    = 20                           ;
                checkbox.style.margin    = "auto"                       ;
                checkbox.style.backgroundColor = "#ffffff";
                
                // テーブルデータにチェックボックス押下時のイベントを登録
                elem.addEventListener("mouseup",this.CheckBoxEvent) ;
                
                // 既に選択されているレコードの背景色変更用
                this.now_create_tr_checkbox = false;
                
                elem.check = 0;
                
                // すでに選択されているレコードの場合
                if(elem.innerText == 1){
                    
                    // すでに選択されているレコードフラグをON
                    this.now_create_tr_checkbox = true;
                    
                    // 選択されている状態に変更
                    checkbox.innerText             = "v"                         ;
                    checkbox.style.backgroundColor = this.checkbox_checked_color ;
                    elem.style.backgroundColor     = this.checkbox_selected_color;
                    elem.check = 1;
                }
                
                elem.innerText                 = ""                          ;
                
                // 要素入れ込み
                elem.appendChild(checkbox);
                
            break;
            
            // -----------------------+
            // 評価                   |
            // -----------------------+
            case "評価":
                if(this.now_create_tr_checkbox){elem.style.backgroundColor = this.checkbox_selected_color;};
            break;
            
            // -----------------------+
            // 備考                   |
            // -----------------------+
            case "備考":
                if(this.now_create_tr_checkbox){elem.style.backgroundColor = this.checkbox_selected_color;};
            break;

            
            // -----------------------+
            // pt                     |
            // -----------------------+
            case "pt":
                elem.style.textAlign = "right";
                if(this.now_create_tr_checkbox){elem.style.backgroundColor = this.checkbox_selected_color;};
            break;
            
            // -----------------------+
            // Expt                   |
            // -----------------------+
            case "Expt":
                elem.style.textAlign = "right";
                if(this.now_create_tr_checkbox){elem.style.backgroundColor = this.checkbox_selected_color;};
            break;
            
        }
        
        elem.style.height = this.table_td_height;
        
        if(this.now_create_tr_checkbox){
            elem.style.backgroundColor  = this.checkbox_selected_color;
            elem.defaultbackgroundColor = this.checkbox_selected_color;
        };
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   チェックボックスを押して時のイベント                                 *
    // ************************************************************************
    //CheckBoxEvent = (e) => {
    //    
    //    // 初期化
    //    let target      = e.target.id.includes("td") ? e.target : e.target.parentNode                         ;         // チェックボックスが入っているtd要素
    //    let checkbox    = target.firstElementChild                                                            ;         // チェックボックス要素
    //    let tr          = target.parentNode                                                                   ;         // 選択されたレコード
    //    let tr_children = tr.children                                                                         ;         // 選択されたレコードのカラムごとのデータ群
    //    let id          = target.id.split("_")                                                                ;         // チェックボックスが入っているtd要素のID名
    //    let data        = this.getData();         // データを取得する
    //    let color       = ""                                                                                  ;         // チェックボックス変更後の背景色
    //    
    //    // -------------------------------------+
    //    // チェックボックスのチェックを変更     |
    //    // -------------------------------------+
    //    if(data[id[3]]["チェックボックス"] == 0 ||data[id[3]]["チェックボックス"] == ""){
    //        
    //        if(checkbox.innerText == ""){
    //            
    //            // ---------------------------------------+
    //            // 登録                                   |
    //            // ---------------------------------------+
    //            color                          = this.checkbox_register_color ;
    //            checkbox.innerText             = "v"                          ;
    //            checkbox.style.backgroundColor = this.checkbox_checked_color  ;
    //            
    //        }else{
    //            
    //            // ---------------------------------------+
    //            // 元に戻す                               |
    //            // ---------------------------------------+
    //            color                          = this.default_color           ;
    //            checkbox.innerText             = ""                           ;
    //            checkbox.style.backgroundColor = "#ffffff"                    ;
    //            
    //        }
    //        
    //    }else{
    //        
    //        if(checkbox.innerText == ""){
    //            
    //            // ---------------------------------------+
    //            // 元に戻す(もともと選択されていた)       |
    //            // ---------------------------------------+
    //            color                          = this.checkbox_selected_color ;
    //            checkbox.innerText             = "v"                          ;
    //            checkbox.style.backgroundColor = this.checkbox_checked_color  ;
    //            
    //        }else{
    //            
    //            // ---------------------------------------+
    //            // 削除(もともと選択されていた)           |
    //            // ---------------------------------------+
    //            color                          = this.checkbox_delete_color   ;
    //            checkbox.innerText             = ""                           ;
    //            checkbox.style.backgroundColor = "#ffffff"                    ;
    //            
    //            
    //        }
    //        
    //    }
    //    
    //    // -------------------------------------+
    //    // 背景色を変更                         |
    //    // -------------------------------------+
    //    for(let td of tr_children){
    //        
    //        td.style.backgroundColor        = color;
    //        td.defaultbackgroundColor       = color;
    //        
    //    }
    //    
    //}
    

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   自己評価テーブルのデータ                                             *
    // ************************************************************************
    getData = () =>{
        
        let data = [];
        for(let i=0;i<20;i++){
            data[i] = {
                       "チェックボックス":"0",
                       "評価"            :"いいいい",
                       "備考"            :"これは備考です",
                       "pt"              :2,
                       "Expt"            :1,
                       
            };
        }
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価結果表示ボタン押下時の処理                                       *
    // ************************************************************************
    right_footer_button_event = () => {
        this.right_footer_button_Transition(this.employees);
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () =>{
        
        super.finish();
        
        window.removeEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面遷移先に受け渡す値                                               *
    // ************************************************************************
    pass = () => {
        return this.employees;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を戻るときに前画面に受け渡す値                                   *
    // ************************************************************************
    ReturnPass = () => {
        return this.employees;
    }
    
    set_left_footer_button_text = (set) => { this.left_footer_button_text = set; };
    
    set_left_footer_button_event  = (set) => { this.left_footer_button_event  = set; };
    set_right_footer_button_Transition = (set) => { this.right_footer_button_Transition = set; };
    
}
