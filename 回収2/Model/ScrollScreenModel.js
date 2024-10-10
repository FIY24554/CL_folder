class ScrollScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        // メインフレーム
        this.maine_frame                           = elem                       ;
        this.maine_frame_width                     = parseInt(elem.style.width );
        this.maine_frame_height                    = parseInt(elem.style.height);
        
        this.FooterProcessing_obj                      = null                       ;
        this.ButtonProcessing                          = new ButtonProcessing()         ;
        this.TableHandler                          = new TableHandler()         ;
        
        this.th_font                               = ""                         ;
        this.th_border                             = ""                         ;
        this.th_backgroundColor                    = ""                         ;
        
        this.footer_height = 100;
        
        this.HeaderProcessing                          = new HeaderProcessing()                            ;          // ヘッダクラス
        this.header_height                         = this.HeaderProcessing.get_header_height()         ;          // ヘッダの縦幅
        
        this.footer_table_width                    = 320                        ;                   // フッターテーブルの 横幅
        this.footer_table_height                   = 65                         ;                   // フッターテーブルの 縦幅
        
        this.footer_button_width                   = 200                        ;                   // フッターボタンの   横幅
        this.footer_button_height                  = 50                         ;                   // フッターボタンの   縦幅
        this.footer_button_font_size               = 15                         ;                   // フッターボタンの   フォントサイズ
        this.footer_button_shape                   = "1vh"                      ;                   // フッターボタンの   形
        
        this.right_footer_button_text              = null                       ;                   // フッター右ボタンの テキスト
        this.left_footer_button_text               = null                       ;                   // フッター左ボタンの テキスト
        this.right_footer_button_background_color  = "#123456"                  ;                   // フッター右ボタンの 背景色
        this.left_footer_button_background_color   = "#123456"                  ;                   // フッター左ボタンの 背景色
        
        this.right_footer_button_event = null;
        this.left_footer_button_event  = null;
        
        this.table_scroll_frame = null;
        //this.
        
        this.footer_table  = null;   // フッターテーブル要素
        this.table_frame   = null;
        
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen(){
        
        // フッターを作成する
        this.FooterProcessing();
        this.CreateFrame();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレーム作成                                                         *
    // ************************************************************************
    CreateFrame = () =>{
        
        // テーブルスクロールフレーム
        this.table_scroll_frame                 = document.createElement("div")                                                            ;
        this.table_scroll_frame.style.width     = "100vw"                                                                                  ;
        this.table_scroll_frame.style.height    = document.body.clientHeight - (this.header_height + this.footer_height)                   ;
        this.table_scroll_frame.style.position  = "fixed"                                                                                  ;
        this.table_scroll_frame.style.top       = this.maine_frame.getBoundingClientRect()["top"]                                          ;
        this.table_scroll_frame.style.left      = 0                                                                                        ;
        this.table_scroll_frame.style.overflowY = "scroll"                                                                                 ;
        
        // テーブルフレーム
        this.table_frame                        = document.createElement("div")                                                            ;
        this.table_frame.style.width            = this.maine_fram_width                                                                    ;
        this.table_frame.style.position         = "relative"                                                                               ;
        this.table_frame.style.margin           = "0 auto auto auto"                                                                       ;
        
        // 要素入れ込み
        this.table_scroll_frame.appendChild(this.table_frame       );
        this.maine_fram                .appendChild(this.table_scroll_frame);
        
        // リサイズイベント
        window.addEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターを作成する                                                   *
    // ************************************************************************
    FooterProcessing(){
        
        // -------------------------------------+
        // フッター作成                         |
        // -------------------------------------+
        this.FooterProcessing_obj = new FooterProcessing();
        this.FooterProcessing_obj.set_footer_height(this.footer_height)
        this.FooterProcessing_obj.create();
        let footer = this.FooterProcessing_obj.get_footer();
        
        footer.style.display = "flex";
        
        // -------------------------------------+
        // 左ボタンOR左座標調整要素作成         |
        // -------------------------------------+
        if(this.left_footer_button_text == null){
            
            let top = (this.footer_height - this.footer_button_height) / 2;
            
            // 左座標調整用要素作成
            let adjust_elem          = document.createElement("div");
            adjust_elem.style.width  = this.footer_button_width     ;
            adjust_elem.style.height = this.footer_button_height    ;
            adjust_elem.style.margin = `${top} 0 auto 20`           ;
            footer.appendChild(adjust_elem);
            
        }else{
            
            let top = (this.footer_height - this.footer_button_height) / 2;
            
            // フッターボタン作成
            this.ButtonProcessing.set_parent_elem           (footer                                   );
            this.ButtonProcessing.set_position              ("relative"                               );
            this.ButtonProcessing.set_font_size             (this.footer_button_font_size             );
            this.ButtonProcessing.set_shape                 (this.footer_button_shape                 );
            this.ButtonProcessing.set_width                 (this.footer_button_width                 );
            this.ButtonProcessing.set_height                (this.footer_button_height                );
            this.ButtonProcessing.set_background_color      (this.left_footer_button_background_color );
            let footer_button = this.ButtonProcessing.create(this.left_footer_button_text,0,0         );
            footer_button.set_event                     (this.left_footer_button_event            );
            footer_button.style.margin = `${top} 0 auto 20`;
            
        }
        
        // -------------------------------------+
        // フッターテーブル作成                 |
        // -------------------------------------+
        
        // テーブル作成用データ取得
        let table_data = this.getInfomationData();
        
        // テーブル作成
        this.TableHandler.set_create_table_data_callback  ( this.FooterTableDataCreateCallBack   );
        this.TableHandler.set_create_table_column_callback( this.FooterTableColumnCreateCallBack );
        this.TableHandler.set_table_width                 ( this.footer_table_width              );
        this.TableHandler.set_table_height                ( this.footer_table_height             );
        this.TableHandler.TableProcessing                     (table_data,footer,"Infomation"        );
        this.footer_table = this.TableHandler.get_table();
        
        let top = (this.footer_height-(this.footer_table.getBoundingClientRect()["height"])) / 2;
        
        this.footer_table.style.position = ""                     ;
        this.footer_table.style.margin   = `${top} auto auto auto`;
        
        // -------------------------------------+
        // 右ボタンOR右座標調整用要素作成       |
        // -------------------------------------+
        if(this.right_footer_button_text == null){
            
            let top = (this.footer_height - this.footer_button_height) / 2
            
            // 右座標調整用要素作成
            let adjust_elem          = document.createElement("div");
            adjust_elem.style.width  = this.footer_button_width     ;
            adjust_elem.style.height = this.footer_button_height    ;
            adjust_elem.style.margin = `${top} 20 auto 0`           ;
            footer.appendChild(adjust_elem);
            
        }else{
            
            let top = (this.footer_height - this.footer_button_height) / 2;
            
            // フッターボタン作成
            this.ButtonProcessing.set_parent_elem           (footer                                   );
            this.ButtonProcessing.set_position              ("relative"                               );
            this.ButtonProcessing.set_font_size             (this.footer_button_font_size             );
            this.ButtonProcessing.set_shape                 (this.footer_button_shape                 );
            this.ButtonProcessing.set_width                 (this.footer_button_width                 );
            this.ButtonProcessing.set_height                (this.footer_button_height                );
            this.ButtonProcessing.set_background_color      (this.right_footer_button_background_color);
            let footer_button = this.ButtonProcessing.create(this.right_footer_button_text,0,0        );
            footer_button.set_event                     (this.right_footer_button_event           );
            footer_button.style.margin = `${top} 20 auto 0`;
            
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック                                   *
    // ************************************************************************
    FooterTableColumnCreateCallBack = (elem,key,frame,tr) => {
        
        switch(key){
            
            case "氏名":
                
                // テーブルカラムのスタイル取得
                this.th_font            = elem.style.font           ;
                this.th_border          = elem.style.border         ;
                this.th_backgroundColor = elem.style.backgroundColor;
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時のコールバック                                   *
    // ************************************************************************
    FooterTableDataCreateCallBack = (elem,key,frame,tr) => {
    
        switch(key){
            
            case "合計":
                
                // テーブルデータのスタイル取得
                let td_font            = elem.style.font           ;
                let td_border          = elem.style.border         ;
                let td_backgroundColor = elem.style.backgroundColor;
                
                // テーブルデータを書き換え
                let sum_td = document.createElement("tr");
                sum_td.innerHTML = `<th style='font:${this.th_font};border-right:${this.th_border};background-color:${this.th_backgroundColor};user-select:none;width:60;'>pt</th>                `+
                                   `<td style='font:${     td_font};border-right:${     td_border};background-color:${     td_backgroundColor};user-select:none;width:60;text-align:right;'>0</td>`+
                                   `<th style='font:${this.th_font};border-right:${this.th_border};background-color:${this.th_backgroundColor};user-select:none;width:60;'>Expt</th>              `+
                                   `<td style='font:${     td_font};border-right:${     td_border};background-color:${     td_backgroundColor};user-select:none;width:60;text-align:right;'>0</td>`
                
                return sum_td;
                
            break;
            
        }
        
        return elem;
    
    
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   情報テーブルのデータ                                                 *
    // ************************************************************************
    getInfomationData(){
        
        let data = [];
        
        data[0] = {
                            "氏名":"斎藤 一郎",
                            "合計":"",
        }
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズイベント                                                     *
    // ************************************************************************
    resize(){
        
        // 座標変更
        this.table_scroll_frame.style.height = document.body.clientHeight - ( this.header_height + this.footer_height );  // スクロールフレームの 縦幅変更
        this.table_frame       .style.height = ""                                                                      ;  // 会社評価フレームの   縦幅変更
        
    }

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish(){
        
        this.maine_frame.innerHTML = "";
        this.FooterProcessing_obj.finish() ;
        window.removeEventListener("resize",this.resize);
        
    }
    
}




