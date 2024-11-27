// *****************************************************************************************************************************************************************************************************
// [画面名]
//   会社評価画面
// *****************************************************************************************************************************************************************************************************
class CompanyEvaluationScreen extends ScrollScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem,employees = null){
        
        // 親クラスコンストラクタ呼び出し
        super(elem,employees);
        
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
        
        this.set_right_footer_button_css_list("Self-Evaluation-Button","Self-Evaluation-Button-Text");
        this.set_right_footer_button_css_list("CompanyEvaluationScreen-Self-Evaluation-Button","CompanyEvaluationScreen-Self-Evaluation-Button-Text");
        
        // 画面作成
        super.CreateScreen        ();                                                               // 親クラスCreateScreen
        
        this.CreateTable(this.getTechnologyTableData(),"技術系","CompanyEvaluationScreen-Technology-Head");
        this.CreateTable(this.getPracticalTableData() ,"実務系","CompanyEvaluationScreen-Practical-Head" );
        
        this.CreateLegend();
        
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
        //this.technology_head_frame     .style.width  = this.maine_fram.style.width                                             ;  // 技術系ヘッダの       横幅変更
        //this.practical_head_frame      .style.width  = this.maine_fram.style.width                                             ;  // 実務系ヘッダの       横幅変更
        
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
                
                elem.check = 0;
                
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
                    elem.check = 1;
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
    //   技術系テーブルのデータ                                               *
    // ************************************************************************
    getTechnologyTableData = () =>{
        
        let data = [];
        for(let i=0;i<20;i++){
            data[i] = {
                       "チェックボックス":"1",
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
    //   自己評価ボタン押下時の処理                                           *
    // ************************************************************************
    right_footer_button_event = () => {
        
        this.right_footer_button_Transition(this.employees);
        
    }
    
    // ************************************************************************
    // 
    // ************************************************************************
    pass = () => {
        
        return this.employees;
        
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
    set_right_footer_button_Transition = (set) => { this.right_footer_button_Transition = set; };
    
    
    
}
