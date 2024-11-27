class ScrollScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem,employees){
        
        // メインフレーム
        this.maine_frame                           = elem                       ;
        this.maine_frame_width                     = parseInt(elem.style.width );
        this.maine_frame_height                    = parseInt(elem.style.height);
        
        this.FooterProcessing_obj                      = null                   ;
        this.ButtonProcessing                          = new ButtonProcessing() ;
        this.TableHandler                          = new TableHandler()         ;
        
        this.th_font                               = ""                         ;
        this.th_border                             = ""                         ;
        this.th_backgroundColor                    = ""                         ;
        
        this.footer_height = 100;
        
        this.HeaderProcessing                      = new HeaderProcessing()                   ;          // ヘッダクラス
        this.header_height                         = this.HeaderProcessing.get_header_height();          // ヘッダの縦幅
        
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
        
        this.right_footer_button_event             = null;
        this.left_footer_button_event              = null;
        
        this.table_scroll_frame        = null;
        
        this.footer_table              = null;   // フッターテーブル要素
        this.table_frame               = null;
        
        this.first_create_table        = true;
        
        this.employees = employees;
        
        // ここから追加
        this.right_footer_button_css_list = [];
        
        
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
        this.table_scroll_frame.classList.add("ScrollScreenModel-Table-Scroll-Frame");
        
        // テーブルフレーム
        this.table_frame                        = document.createElement("div")                                                            ;
        this.table_frame.classList.add("ScrollScreenModel-Table-Frame");
        
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
        this.FooterProcessing_obj.set_footer_css("ScrollScreenModel-Footer-Frame");
        this.FooterProcessing_obj.create();
        let footer                = this.FooterProcessing_obj.get_footer();
        
        //footer.style.display = "flex";
        
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
            this.ButtonProcessing.set_CSS("Register-Button","button");
            this.ButtonProcessing.set_CSS("Register-Button-Text","text");
            let footer_button = this.ButtonProcessing.create(this.left_footer_button_text,0,0         );
            footer_button.addEventListener                   ("mouseup",this.left_footer_button_event            );
            footer_button.style.margin = `${top} 0 auto 20`;
            
        }
        
        // -------------------------------------+
        // フッターテーブル作成                 |
        // -------------------------------------+
        
        // テーブルフレーム作成
        let table_frame = document.createElement("div");
        table_frame.classList.add("ScrollScreenModel-Information-Table-Frame");
        
        footer.appendChild(table_frame);
        // テーブル作成用データ取得
        let table_data = this.getInfomationData();
        
        // テーブル作成
        //this.TableHandler.
        this.TableHandler.set_create_table_data_callback  ( this.FooterTableDataCreateCallBack   );
        this.TableHandler.set_create_table_column_callback( this.FooterTableColumnCreateCallBack );
        this.TableHandler.set_table_width                 ( this.footer_table_width              );
        this.TableHandler.set_table_height                ( this.footer_table_height             );
        this.TableHandler.direct_table().set_isEligible_odd_even(false);
        this.TableHandler.TableProcessing                 (table_data,table_frame,"Infomation"        );
        this.footer_table = this.TableHandler.get_table();
        
        //let top = (this.footer_height-(this.footer_table.getBoundingClientRect()["height"])) / 2;
        
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
            //this.ButtonProcessing.set_position              ("relative"                               );
            //this.ButtonProcessing.set_font_size             (this.footer_button_font_size             );
            //this.ButtonProcessing.set_shape                 (this.footer_button_shape                 );
            //this.ButtonProcessing.set_width                 (this.footer_button_width                 );
            //this.ButtonProcessing.set_height                (this.footer_button_height                );
            //this.ButtonProcessing.set_background_color      (this.right_footer_button_background_color);
            
            // CSS付与
            for(let css_list of this.right_footer_button_css_list){
            
                this.ButtonProcessing.set_CSS(css_list["button"],"button");
                this.ButtonProcessing.set_CSS(css_list["text"  ],"text"  );
            
            }
            let footer_button = this.ButtonProcessing.create(this.right_footer_button_text,0,0        );
            footer_button.addEventListener                     ("mouseup",this.right_footer_button_event           );
            
            //let footer_height = window.getComputedStyle(footer_button).height
            let footer_button_height = window.getComputedStyle(footer_button).height;
            
            footer_button.get_frame_elem.style.position = "absolute";
            footer_button.get_frame_elem.style.top = footer_button_height;
            footer_button.get_frame_elem.style.right = 10;
            footer_button.get_frame_elem.style.left = "";
            //footer_button.get_frame_elem.style.margin = `${top} 20 auto 0`;
            
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック                                   *
    // ************************************************************************
    FooterTableColumnCreateCallBack = (elem,key,frame,tr) => {
        
        switch(key){
            
            case "社員番号":
                
                
                
                
                //elem.style.width = 
                
            break;
            
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
                
                let normal_class = this.TableHandler.direct_table().get_table_data_nomal_class();
                
                // テーブルデータのスタイル取得
                let td_font            = elem.style.font           ;
                let td_border          = elem.style.border         ;
                let td_backgroundColor = elem.style.backgroundColor;
                
                // テーブルデータを書き換え
                let sum_td = document.createElement("tr");
                sum_td.innerHTML = `<th class='${normal_class}' style='border-bottom: 1px solid black ;border-top: 0px solid black ;border-left: 0px solid black ;width:60;'                  >pt  </th>`+
                                   `<td class='${normal_class}' style='border-bottom: 1px solid black ;border-top: 0px solid black ;                              width:60;text-align:right;' >0   </td>`+
                                   `<th class='${normal_class}' style='border-bottom: 1px solid black ;border-top: 0px solid black ;                              width:60;'                  >Expt</th>`+
                                   `<td class='${normal_class}' style='border-bottom: 1px solid black ;border-top: 0px solid black ;                              width:60;text-align:right;' >0   </td>`
                
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
                            "社員番号":this.employees[0]["社員番号"],
                            "氏名"    :this.employees[0]["氏名"    ],
                            "合計"    :"0"         ,
        }
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルを作成する                                                   *
    // ************************************************************************
    CreateTable(data,text = "",css){
        
        this.dummy_padding = document.createElement("div");
        this.dummy_padding.classList.add("ScrollScreenModel-Padding");
        this.table_frame.appendChild(this.dummy_padding);
        
        // -------------------------------------+
        // ヘッダスクールコンテナ               |
        // -------------------------------------+
        this.table_head_scroll_container = document.createElement("div");
        this.table_head_scroll_container.classList.add("ScrollScreenModel-Sticky-Container");
        this.table_frame.appendChild( this.table_head_scroll_container );
        
      
        
        // -------------------------------------+
        // ヘッダフレーム作成                   |
        // -------------------------------------+
        this.table_head_frame                                   = document.createElement("div")                             ;
        this.table_head_frame.classList.add("ScrollScreenModel-First-Table-Header-Frame");
        this.table_head_scroll_container.appendChild                                   ( this.table_head_frame )                            ;
        
        // --------------------------------------+
        // テーブルヘッダ作成                    |
        // --------------------------------------+
        this.table_head                                         = document.createElement("div")                             ;
        this.table_head.classList.add("ScrollScreenModel-Table-Header");
        this.table_head.innerText                               = text                                                  ;
        this.table_head.classList.add(css);
        this.table_head_frame.appendChild                         ( this.table_head       )                            ;
        //this.table_head.style.border                               = "solid 0 red"                                                        ;

        
        // -------------------------------------+
        // テーブルダミーカラム作成             |
        // -------------------------------------+
        
        // データ取得
        
        let dummy_data                                               = []                                                        ;
        dummy_data[0]                                                = data[0]                                                   ;
        
        // ダミーテーブルカラム作成
        this.TableHandler.set_table_css                                ( "ScrollScreenModel-Table"                                       );
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        this.TableHandler.direct_table().set_isEligible_odd_even(true);
        this.TableHandler.TableProcessing                              ( dummy_data,this.table_head_frame,`Dummy_${text}`);
        let dummy_table = this.TableHandler.get_table()                                                                          ;
        
        // ダミーテーブルカラムのスタイル編子
        dummy_table.firstElementChild.lastElementChild.remove()                                                                  ;
        dummy_table.style.height                                     = ""                                                        ;
        dummy_table.style.boxShadowBottom                            = ""                                                        ;
        dummy_table.style.borderBottom                               = ""                                                        ;
        dummy_table.style.borderTop                               = ""                                                        ;
        dummy_table.style.position                                   = "sticky"                                                        ;
        dummy_table.style.margin                                     = "0 auto 0 auto"                                                    ;
        //dummy_table.style.top = "-500"
        dummy_table.firstElementChild.firstElementChild.style.border = "solid 0 red"                                                        ;
        
        // -------------------------------------+
        // テーブル作成                         |
        // -------------------------------------+
        this.TableHandler.set_table_css                                ( "ScrollScreenModel-Table"                                       );
        this.TableHandler.set_select_table(true);
        this.TableHandler.set_create_table_column_callback             ( this.TableColumnCreateCallBack                         );
        this.TableHandler.set_create_table_data_callback               ( this.TableDataCreateCallBack                           );
        this.TableHandler.direct_table().set_isEligible_odd_even(true);
        this.TableHandler.TableProcessing                                  ( data,this.table_head_scroll_container,`${text}`             );
        
        // テーブルスタイル変更
        this.table                                        = this.TableHandler.get_table()                             ;
        this.table.style.width                            = this.table_width                                          ;
        this.table.style.height                           = ""                                                        ;
        this.table.style.position                         = "sticky"                                                        ;
        this.table.style.display = "block";
        //this.table.style.top = 1000;
        //this.table.style.margin                           = `${35 - this.table_td_height} auto ${this.padding} auto`  ;
        this.table.style.margin = "-30 auto auto auto ";
        
        // -------------------------------------+
        // 諸所調整                             |
        // -------------------------------------+
        //let table_rect                  = this.table.getBoundingClientRect();            // テーブルの座標・サイズ情報取得
        //this.table_scroll_frame.addEventListener("scroll",this.ScrollEvent)    ;            // スクロールイベント登録
        
        //this.table_bottom    = table_rect["height"] +40 - 5                 ;            // テーブルbottom取得
        
        
        
        
        
        
        
        
        
        
        
        
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
        //let data        = id[1] == "Technology" ? this.getTechnologyTableData() : this.getPracticalTableData();         // IDから対応したデータを取得する
        let color       = ""                                                                                  ;         // チェックボックス変更後の背景色
        
        // -------------------------------------+
        // チェックボックスのチェックを変更     |
        // -------------------------------------+
        if(target.check == 0 || target.check == ""){
            
            if(checkbox.innerText == ""){
                
                // ---------------------------------------+
                // 登録                                   |
                // ---------------------------------------+
                color                          = "ScrollScreenModel-Register-Target";
                checkbox.innerText             = "v"                                ;
                checkbox.style.background      = this.checkbox_checked_color        ;
                
            }else{
                
                // ---------------------------------------+
                // 元に戻す                               |
                // ---------------------------------------+
                color                          = null                              ;
                checkbox.innerText             = ""                                ;
                checkbox.style.background      = "#ffffff"                         ;
                
            }
            
        }else{
            
            if(checkbox.innerText == ""){
                
                // ---------------------------------------+
                // 元に戻す(もともと選択されていた)       |
                // ---------------------------------------+
                color                          = "ScrollScreenModel-Selected-Target" ;
                checkbox.innerText             = "v"                                 ;
                checkbox.style.background      = this.checkbox_checked_color         ;
                
            }else{
                
                // ---------------------------------------+
                // 削除(もともと選択されていた)           |
                // ---------------------------------------+
                color                          = "ScrollScreenModel-Delete-Target"   ;
                checkbox.innerText             = ""                                  ;
                checkbox.style.background      = "#ffffff"                           ;
                
                
            }
            
        }
        
        if(color != null){
            
            // -------------------------------------+
            // 変換処理                             |
            // -------------------------------------+
            let dummy = document.createElement("div");
            dummy.classList.add(color);
            document.body.appendChild(dummy);
            
            let default_color = window.getComputedStyle(dummy).background.match(/rgb\(\d+, \d+, \d+\)/)[0];
            
            dummy.remove();
            
            // -------------------------------------+
            // 背景色を変更                         |
            // -------------------------------------+
            for(let td of tr_children){
                
                td.classList.remove("ScrollScreenModel-Register-Target");
                td.classList.remove("ScrollScreenModel-Delete-Target"  );
                td.classList.remove("ScrollScreenModel-Selected-Target");
                
                td.classList.add(color);
                
                td.defaultbackground = default_color;
                td.style.background = "";
                
            }
            
        }else{
            
            // -------------------------------------+
            // 変換処理                             |
            // -------------------------------------+
            let dummy = document.createElement("div");
            dummy.classList.add(target.classList[0]);
            document.body.appendChild(dummy);
            
            let default_color = window.getComputedStyle(dummy).background.match(/rgb\(\d+, \d+, \d+\)/)[0];
            
            dummy.remove();
            
            // -------------------------------------+
            // 背景色を変更                         |
            // -------------------------------------+
            for(let td of tr_children){
                
                td.classList.remove("ScrollScreenModel-Register-Target");
                td.classList.remove("ScrollScreenModel-Delete-Target"  );
                td.classList.remove("ScrollScreenModel-Selected-Target");
                
                td.defaultbackground = default_color;
                td.style.background  = "";
                
            }
            
        }
        
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
    
    set_right_footer_button_css_list = (button,text) =>{
        
        let No = this.right_footer_button_css_list.length;
        this.right_footer_button_css_list[No] = {};
        this.right_footer_button_css_list[No]["button"] = button ;
        this.right_footer_button_css_list[No]["text"  ] = text   ;
        
        
    }
    
}
