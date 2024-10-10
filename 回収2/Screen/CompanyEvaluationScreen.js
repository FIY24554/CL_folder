
// *****************************************************************************************************************************************************************************************************
// [画面名]
//   会社評価画面
// *****************************************************************************************************************************************************************************************************
class CompanyEvaluationScreen extends ScrollScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        // 親クラスコンストラクタ呼び出し
        super(elem);
        
        this.LegendProcessing = null;
        this.Legend = null;
        
        this.maine_fram                            = elem                                          ;          // メインフレームの要素
        this.maine_fram_width                      = parseInt(this.maine_fram.style.width )        ;          // メインフレームの横幅
        this.maine_fram_height                     = parseInt(this.maine_fram.style.height)        ;          // メインフレームの縦幅
        
        this.right_footer_button_text              = "自己評価"                                    ;          // 右のフッターボタンのテキスト
        this.right_footer_button_background_color  = "#7f2fbf"                                     ;          // 右のフッターボタンの背景色
        
        this.company_table_scroll_frame            = null                                          ;          // スクロールフレームの要素
        this.company_table_frame                   = null                                          ;          // 会社評価フレームの要素
        
        this.table_width                           = 1100                                          ;          // テーブルの横幅
        this.table_td_height                       = 25                                            ;          // テーブルデータの縦幅
        this.default_color                         = "#f0f8ff"                                     ;
        
        this.TableHandler                          = new TableHandler()                            ;          // テーブルハンドラクラス
        
        this.technology_head                       = null                                          ;          // 技術系テーブルヘッダ要素
        this.technology_table                      = null                                          ;          // 技術系テーブル      要素
        this.technology_head_frame                 = null                                          ;          // 技術系ヘッダフレーム要素
        this.technology_head_background_color      = "#40e0d0";
        
        this.practical_head                        = null                                          ;          // 実務系テーブルヘッダ要素
        this.practical_table                       = null                                          ;          // 実務系テーブル要素
        this.practical_head_background_color       = "#e62f8b"
        
        this.padding                               = 40                                            ;          // 余白
        
        this.technology_table_bottom               = 0                                             ;          // 技術系テーブルのbottom座標
        
        // チェックボックスの色
        this.checkbox_delete_color                 = "#bf0000"                                     ;          // すでに登録されているデータのチェックが外されたときの背景色
        this.checkbox_register_color               = "#1e50bf"                                     ;          // まだ登録されていないデータのチェックがつけられたときの背景色
        this.checkbox_selected_color               = "#12ad12"                                     ;          // すでに登録されているデータの背景色
        this.checkbox_checked_color                = "#888888"                                     ;          // チェックボックスのチェックがつけられたときの背景色
        
        this.now_create_tr_checkbox                = false                                         ;          // テーブルを作成するときの作成中レコードの登録状況を保管する
        
        this.table_heda_height                     = 30                                            ;          // テーブルヘッダの縦幅
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "会社評価画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen = () =>{
        
        // 画面作成
        super.CreateScreen        ();                                                               // 親クラスCreateScreen
        this.CreateTechnologyTable();                                                               // 技術系テーブル作成
        this.CreatePracticalTable ();                                                               // 実務系テーブル作成
        this.CreateLegend();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   技術系テーブル作成                                                   *
    // ************************************************************************
    CreateTechnologyTable = () =>{
        
        // -------------------------------------+
        // ヘッダフレーム作成                   |
        // -------------------------------------+
        this.technology_head_frame                                   = document.createElement("div")                             ;
        this.technology_head_frame.style.width                       = this.maine_fram_width                                     ;
        this.technology_head_frame.style.position                    = "sticky"                                                  ;
        this.technology_head_frame.style.top                         = this.padding                                              ;
        this.technology_head_frame.style.zIndex                      = 1                                                         ;
        this.table_frame.appendChild                           ( this.technology_head_frame )                            ;
        
        // --------------------------------------+
        // 技術系テーブルヘッダ作成              |
        // --------------------------------------+
        this.technology_head                                         = document.createElement("div")                             ;
        this.technology_head.style.width                             = this.table_width   -6                                     ;
        this.technology_head.style.height                            = this.table_heda_height                                    ;
        this.technology_head.innerText                               = "技術系"                                                  ;
        this.technology_head.style.textAlign                         = "center"                                                  ;
        this.technology_head.style.font                              = `bold 15px sans-serif`                                    ;
        this.technology_head.style.backgroundColor                   = this.technology_head_background_color                     ;
        this.technology_head.style.border                            = "3px solid black"                                         ;
        this.technology_head.style.borderBottom                      = "0px solid black"                                         ;
        this.technology_head.style.margin                            = "auto"                                                    ;
        this.technology_head.style.boxShadow                         = "0 1px 3px 0 black"                                       ;
        this.technology_head.style.userSelect                        = "none"                                                    ;
        this.technology_head_frame.appendChild                         ( this.technology_head       )                            ;
        
        // -------------------------------------+
        // 技術系テーブルダミーカラム作成       |
        // -------------------------------------+
        
        // データ取得
        let data                                                     = this.getTechnologyTableData()                             ;
        let dummy_data                                               = []                                                        ;
        dummy_data[0]                                                = data[0]                                                   ;
        
        // 技術系ダミーテーブルカラム作成
        this.TableHandler.set_table_width                              ( this.table_width                                       );
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        this.TableHandler.TableProcessing                                  ( dummy_data,this.technology_head_frame,"DummyTechnology");
        let dummy_table = this.TableHandler.get_table()                                                                          ;
        
        // 技術系ダミーテーブルカラムのスタイル編子
        dummy_table.firstElementChild.lastElementChild.remove()                                                                  ;
        dummy_table.style.height                                     = ""                                                        ;
        dummy_table.style.boxShadowBottom                            = ""                                                        ;
        dummy_table.style.borderBottom                               = ""                                                        ;
        dummy_table.style.position                                   = ""                                                        ;
        dummy_table.style.margin                                     = "auto"                                                    ;
        dummy_table.firstElementChild.firstElementChild.style.border = ""                                                        ;
        
        // -------------------------------------+
        // 技術系テーブル作成                   |
        // -------------------------------------+
        this.TableHandler.set_table_width                              ( this.table_width                                       );
        this.TableHandler.set_select_table(true);
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        this.TableHandler.TableProcessing                                  ( data,this.table_frame,"Technology"             );
        
        // 技術系テーブルスタイル変更
        this.technology_table                                        = this.TableHandler.get_table()                             ;
        this.technology_table.style.width                            = this.table_width                                          ;
        this.technology_table.style.height                           = ""                                                        ;
        this.technology_table.style.position                         = ""                                                        ;
        this.technology_table.style.margin                           = `${35 - this.table_td_height} auto ${this.padding} auto`  ;
        
        // -------------------------------------+
        // 諸所調整                             |
        // -------------------------------------+
        let table_rect                  = this.technology_table.getBoundingClientRect();            // 技術系テーブルの座標・サイズ情報取得
        this.table_scroll_frame.addEventListener("scroll",this.ScrollEvent)    ;            // スクロールイベント登録
        
        this.technology_table_bottom    = table_rect["height"] +40 - 5                 ;            // テーブルbottom取得
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   実務系テーブル作成                                                   *
    // ************************************************************************
    CreatePracticalTable = () =>{
        
        // -------------------------------------+
        // ヘッダフレーム作成                   |
        // -------------------------------------+
        this.practical_head_frame                                    = document.createElement("div")                             ;
        this.practical_head_frame.style.width                        = this.maine_fram_width                                     ;
        this.practical_head_frame.style.position                     = "sticky"                                                  ;
        this.practical_head_frame.style.top                          = 0                                                         ;
        this.practical_head_frame.style.zIndex                       = 1                                                         ;
        this.table_frame.appendChild                           ( this.practical_head_frame )                             ;
        
        // --------------------------------------+
        // 実務系テーブルヘッダ作成              |
        // --------------------------------------+
        this.practical_head                                          = document.createElement("div")                             ;
        this.practical_head.style.width                              = this.table_width   -6                                     ;
        this.practical_head.style.height                             = this.table_heda_height                                    ;
        this.practical_head.innerText                                = "実務系"                                                  ;
        this.practical_head.style.textAlign                          = "center"                                                  ;
        this.practical_head.style.font                               = `bold 15px sans-serif`                                    ;
        this.practical_head.style.backgroundColor                    = this.practical_head_background_color                      ;
        this.practical_head.style.border                             = "3px solid black"                                         ;
        this.practical_head.style.borderBottom                       = "0px solid black"                                         ;
        this.practical_head.style.margin                             = "auto"                                                    ;
        this.practical_head.style.boxShadow                          = "0 1px 3px 0 black"                                       ;
        this.practical_head.style.userSelect                         = "none"                                                    ;
        this.practical_head_frame.appendChild                          ( this.practical_head       )                             ;
        
        // -------------------------------------+
        // 実務系テーブルダミーカラム作成       |
        // -------------------------------------+
        
        // データ取得
        let data                                                     = this.getPracticalTableData()                              ;
        let dummy_data                                               = []                                                        ;
        dummy_data[0]                                                = data[0]                                                   ;
        
        // 実務系ダミーテーブルカラム作成
        this.TableHandler.set_table_width                              ( this.table_width                                      ) ;
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                        ) ;
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                          ) ;
        this.TableHandler.TableProcessing                                  ( dummy_data,this.practical_head_frame,"DummyPractical" ) ;
        let dummy_table = this.TableHandler.get_table()                                                                          ;
        
        // 実務系ダミーテーブルカラムのスタイル編子
        dummy_table.firstElementChild.lastElementChild.remove()                                                                  ;
        dummy_table.style.height                                     = ""                                                        ;
        dummy_table.style.boxShadowBottom                            = ""                                                        ;
        dummy_table.style.borderBottom                               = ""                                                        ;
        dummy_table.style.position                                   = ""                                                        ;
        dummy_table.style.margin                                     = "auto"                                                    ;
        dummy_table.firstElementChild.firstElementChild.style.border = ""                                                        ;
        
        // -------------------------------------+
        // 実務系テーブル作成                   |
        // -------------------------------------+
        this.TableHandler.set_table_width                              ( this.table_width                                      ) ;
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                        ) ;
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                          ) ;
        this.TableHandler.TableProcessing                                  ( data,this.table_frame,"Practical"             ) ;
        
        // 実務系テーブルスタイル変更
        this.practical_table                                         = this.TableHandler.get_table()                             ;
        this.practical_table.style.width                             = this.table_width                                          ;
        this.practical_table.style.height                            = ""                                                        ;
        this.practical_table.style.position                          = ""                                                        ;
        this.practical_table.style.margin                            = `${-this.table_td_height - 6} auto ${this.padding} auto`  ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例を作成する                                                       *
    // ************************************************************************
    CreateLegend = () => {
        
        let rect   = this.table_scroll_frame.getBoundingClientRect();
        //let odd    = this.TableHandler.get_table_td_odd_color()     ;
        //let even   = this.TableHandler.get_table_td_even_color()    ;
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
                   `</div>                                                             `+
                   `<div>                                                              `;
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
        this.technology_head_frame     .style.width  = this.maine_fram.style.width                                             ;  // 技術系ヘッダの       横幅変更
        this.practical_head_frame      .style.width  = this.maine_fram.style.width                                             ;  // 実務系ヘッダの       横幅変更
        
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
    ScrollEvent = (e) =>{
        
        // 技術系ヘッダの座標をスクロールに合わせる
        let scroll                           = e.target.scrollTop                                                                                                      ; // スクロール座標
        let technology_head_top              = this.padding  - scroll  < 0 ? 0 : (this.padding - scroll)                                                               ; // 0座標で技術系テーブルヘッダを止める
        if(this.technology_table_bottom - this.table_td_height - 6 < scroll){technology_head_top = ( this.technology_table_bottom - scroll) - this.table_td_height - 6}; // 技術系テーブルがスクロールによって非表示になるときに一緒にテーブルヘッダもスクロール
        this.technology_head_frame.style.top = technology_head_top                                                                                                     ; // 技術系テーブルヘッダの座標変更
        
    }
    
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
            // 内容                   |
            // -----------------------+
            case "内容":
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
                
                // すでに選択されているレコードの場合
                if(elem.innerText == 1){
                    
                    // すでに選択されているレコードフラグをON
                    this.now_create_tr_checkbox = true;
                    
                    // 選択されている状態に変更
                    checkbox.innerText                = "v"                         ;
                    checkbox.style.backgroundColor    = this.checkbox_checked_color ;
                    elem.style.backgroundColor        = this.checkbox_selected_color;
                    elem.defaultbackgroundColor       = this.checkbox_selected_color;
                }
                
                elem.innerText                    = ""                          ;
                
                // 要素入れ込み
                elem.appendChild(checkbox);
                
            break;
            
            // -----------------------+
            // 内容                   |
            // -----------------------+
            case "内容":
                
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
    CheckBoxEvent = (e) => {
        
        // 初期化
        let target      = e.target.id.includes("td") ? e.target : e.target.parentNode                         ;         // チェックボックスが入っているtd要素
        let checkbox    = target.firstElementChild                                                            ;         // チェックボックス要素
        let tr          = target.parentNode                                                                   ;         // 選択されたレコード
        let tr_children = tr.children                                                                         ;         // 選択されたレコードのカラムごとのデータ群
        let id          = target.id.split("_")                                                                ;         // チェックボックスが入っているtd要素のID名
        let data        = id[1] == "Technology" ? this.getTechnologyTableData() : this.getPracticalTableData();         // IDから対応したデータを取得する
        let color       = ""                                                                                  ;         // チェックボックス変更後の背景色
        
        // -------------------------------------+
        // チェックボックスのチェックを変更     |
        // -------------------------------------+
        if(data[id[3]]["チェックボックス"] == 0 ||data[id[3]]["チェックボックス"] == ""){
            
            if(checkbox.innerText == ""){
                
                // ---------------------------------------+
                // 登録                                   |
                // ---------------------------------------+
                color                          = this.checkbox_register_color ;
                checkbox.innerText             = "v"                          ;
                checkbox.style.backgroundColor = this.checkbox_checked_color  ;
                
            }else{
                
                // ---------------------------------------+
                // 元に戻す                               |
                // ---------------------------------------+
                color                          = this.default_color           ;
                checkbox.innerText             = ""                           ;
                checkbox.style.backgroundColor = "#ffffff"                    ;
                
            }
            
        }else{
            
            if(checkbox.innerText == ""){
                
                // ---------------------------------------+
                // 元に戻す(もともと選択されていた)       |
                // ---------------------------------------+
                color                          = this.checkbox_selected_color ;
                checkbox.innerText             = "v"                          ;
                checkbox.style.backgroundColor = this.checkbox_checked_color  ;
                
            }else{
                
                // ---------------------------------------+
                // 削除(もともと選択されていた)           |
                // ---------------------------------------+
                color                          = this.checkbox_delete_color   ;
                checkbox.innerText             = ""                           ;
                checkbox.style.backgroundColor = "#ffffff"                    ;
                
                
            }
            
        }
        
        // -------------------------------------+
        // 背景色を変更                         |
        // -------------------------------------+
        for(let td of tr_children){
            
            td.style.backgroundColor  = color;
            td.defaultbackgroundColor = color;
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   技術系テーブルのデータ                                               *
    // ************************************************************************
    getTechnologyTableData = () =>{
        
        let data = [];
        for(let i=0;i<20;i++){
            data[i] = {
                       "チェックボックス":"0",
                       "内容"            :"実務系",
                       "備考"            :"実務系のやつ",
                       "pt"              :1,
                       "Expt"            :2,
                       
                       
            };
        }
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   実務系テーブルのデータ                                               *
    // ************************************************************************
    getPracticalTableData = () =>{
        
        let data = [];
        
        for(let i=0;i<20;i++){
            data[i] = {
                       "チェックボックス":"",
                       "内容"            :"実務系",
                       "備考"            :"実務系のやつ",
                       "pt"              :1,
                       "Expt"            :2,
                       
                       
            };
        }
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () =>{
        
        super.finish();
        
        window.removeEventListener("resize",this.resize);
        
    }
    
    set_left_footer_button_event  = (set) => { this.left_footer_button_event  = set; };
    set_right_footer_button_event = (set) => { this.right_footer_button_event = set; };
    
    
    
}


