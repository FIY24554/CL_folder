// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   評価出力画面
// *****************************************************************************************************************************************************************************************************
class EvaluationOutputScreen extends TableScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        // 継承元コンストラクタ起動
        super(elem);
        
        // 
        // ドラッグ処理用パラメータ
        // 
        this.drag_color                                 = ""                                                                            ;
        this.drag_flg                                   = false                                                                         ;
        this.click_button                               = 0                                                                             ;
        this.drag_click_row                             = 0                                                                             ;
        this.drag_previous                              = 0                                                                             ;
        this.now_row                                    = 0                                                                             ;
        this.table_id_name                              = ""                                                                            ;
        this.drag_isUp_previous                         = null                                                                          ;  // 前回上か下か
        
        // 
        // オプション
        // 
        this.option_frame                               = null                                                                          ;
        this.all_select_button                          = null                                                                          ;
        this.all_cancel_button                          = null                                                                          ;
        
        // ---------------------------+
        // テーブル設定               |
        // ---------------------------+
        this.TableHandler.set_table_data_mousedown_event (this.TableDataMouseDownEvent)                                                 ;
        this.TableHandler.set_table_data_mouseup_event   (this.TableDataMouseUpEvent  )                                                 ;
        this.TableHandler.set_table_data_mouseover_event (this.DragingStart           )                                                 ;
        this.TableHandler.set_select_table               (true                        )                                                 ;
        
        // クラス
        this.ButtonProcessing                           = new ButtonProcessing     ()                                                   ;
        this.FooterProcessing                           = new FooterProcessing     ()                                                   ;
        this.PopupScreenProcessing                      = new PopupScreenProcessing()                                                   ;
        
        // テーブルデータのスタイル(後でクラスに変更して消す)
        this.salary_No_width                            = 120                                                                           ;
        this.name_width                                 = 330                                                                           ;
        this.latest_date_width                          = 100                                                                           ;
        
        
        
        
        // ---------------------------------------------+
        // テーブル選択用クラス指定                     |
        // ---------------------------------------------+
        this.select_table_data_class                    = "EvaluationOutputScreen-Select-Record"                                        ;
        this.odd_table_data_class                       = this.TableHandler.direct_table().get_table_data_odd_class ()                  ;
        this.even_table_data_class                      = this.TableHandler.direct_table().get_table_data_even_class()                  ;
        
        // ---------------------------------------------+
        // CSSスタイルのバックグラウンドカラーを取得    |
        // ---------------------------------------------+
        let dummy                                       = document.createElement   ("div")                                              ;
                                                          document.body.appendChild(dummy)                                              ;
        
        dummy.classList.add                               (this.select_table_data_class)                                                ;
        this.select_table_data_color                    = window.getComputedStyle(dummy).background.match(/rgb\(\d+, \d+, \d+\)/)[0]    ;
        dummy.classList.remove                            (this.select_table_data_class)                                                ;
        dummy.classList.add                               (this.odd_table_data_class   )                                                ;
        this.odd_table_data_color                       = window.getComputedStyle(dummy).background.match(/rgb\(\d+, \d+, \d+\)/)[0]    ;
        dummy.classList.remove                            (this.odd_table_data_class   )                                                ;
        dummy.classList.add                               (this.even_table_data_class  )                                                ;
        this.even_table_data_color                      = window.getComputedStyle(dummy).background.match(/rgb\(\d+, \d+, \d+\)/)[0]    ;
        
        dummy.remove();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "評価出力画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面作成                                                             *
    // ************************************************************************
    CreateScreen = () =>{
        
        super.CreateScreen();                                                                       // 継承元の画面作成メソッドを呼び出し(テーブル作成)
        this.CreateOption ();                                                                       // オプションボタン作成
        this.CreateFooter ();                                                                       // フッター作成
        this.SettingPopup ();                                                                       // エラー処理用ポップアップを設定
        
        // 画面から離れたときにドラッグモードを停止させるイベントを登録
        this.table.addEventListener("mouseleave",this.TableDataMouseUpEvent);
        window    .addEventListener("mouseup"   ,this.DragingFinish        );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブル関連の追加ボタンを作成する                                   *
    // ************************************************************************
    CreateOption = () => {
        
        // ---------------------------+
        // オプションボタンフレーム   |
        // ---------------------------+
        this.option_frame                           = document.createElement("div")                                 ; // オプションボタン用フレーム 作成
        this.option_frame.id                        = "EvaluationOutputScreen-Option-Button-Frame"                  ; // オプションボタン用フレーム にスタイル適用
        this.TableScreenModel_frame.appendChild       (this.option_frame)                                           ; // 「オプションボタン用フレーム」→「テーブル画面フレーム」
        
        // ---------------------------+
        // 全選択ボタン作成           |
        // ---------------------------+
        let top  = 0                                                                                                ; // 全選択ボタン のtopを指定
        let left = 0                                                                                                ; // 全選択ボタン のleftを指定
        
        this.ButtonProcessing.set_parent_elem         (this.option_frame                                      )     ; // 全選択ボタン を入れ込む要素を指定
        this.ButtonProcessing.set_CSS                 ("EvaluationOutputScreen-All-Select-Button","button"    )     ; // 全選択ボタン のボタンスタイルを指定
        this.ButtonProcessing.set_CSS                 ("EvaluationOutputScreen-All-Select-Button-Text","text" )     ; // 全選択ボタン のテキストスタイルを指定
        this.all_select_button                      = this.ButtonProcessing.create("全選択",top,left          )     ; // 全選択ボタン を作成
        this.all_select_button.addEventListener       ("mouseup",this.AllSelectButtonEvent                    )     ; // 全選択ボタン 押下時のイベントを指定
        
        // ---------------------------+
        // 全解除ボタン作成           |
        // ---------------------------+
        let all_select_button_width = window.getComputedStyle(this.all_select_button)["width"]                      ; // 座標計算用に全選択ボタンの横幅を取得
        
        top  = 0                                                                                                    ;
        left = parseInt(all_select_button_width) +10                                                                ;
        
        this.ButtonProcessing.set_parent_elem         (this.option_frame                                        )   ;
        this.ButtonProcessing.set_CSS                 ("EvaluationOutputScreen-All-Cancel-Button","button"      )   ;
        this.ButtonProcessing.set_CSS                 ("EvaluationOutputScreen-All-Cancel-Button-Text","text"   )   ;
        this.all_cancel_button                      = this.ButtonProcessing.create("全解除",top,left            )   ;
        this.all_cancel_button.addEventListener       ("mouseup",this.AllNoSelectButtonEvent                    )   ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッター作成                                                         *
    // ************************************************************************
    CreateFooter = () => {
        
        // ---------------------+
        // フッター作成         |
        // ---------------------+
        this.FooterProcessing.set_footer_css  ("EvaluationOutputScreen-Footer"              )   ;   // 
        this.FooterProcessing.set_button_data ("評価出力","#","#","#",this.OupPutButtonEvent)   ;   // 評価出力ボタンのステータス指定
        this.FooterProcessing.create          ()                                                ;   // フッター作成
        this.FooterProcessing.create_button   ()                                                ;   // フッターボタン作成
        
    }
     
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルに表示するデータを取得する                                   *
    // ************************************************************************
    getData(){
        
        let data = [];
        
        for(let i=0;i<50;i++){
            data[i] = {
                       "社員番号":"T0"+i             ,
                       "氏名"    :"斎藤 一郎"        ,
                       "最新日"  : "2024-02-21"      ,
                       };
        }
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック処理                               *
    // ************************************************************************
    TableColumnCreateCallBack(elem,key,frame,tr){
        
        switch(key){
            
            // -----------------------+
            // 評価出力               |
            // -----------------------+
            case "評価出力":
                
                elem.innerText   = "";
                tr.style.zIndex  = 1 ;
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時のコールバック処理                               *
    // ************************************************************************
    TableDataCreateCallBack = (elem,key,frame,tr) => {
        
        switch(key){
            
            // -----------------------+
            // 社員番号               |
            // -----------------------+
            case "社員番号":
                
                elem.style.width = this.salary_No_width  ;
                tr.select        = false;
                
            break;
            
            // -----------------------+
            // 氏名                   |
            // -----------------------+
            case "氏名":
                
                elem.style.width = this.name_width       ;
                
            break;
            
            // -----------------------+
            // 最新日                 |
            // -----------------------+
            case "最新日":
                
                elem.style.width = this.latest_date_width;
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータをマウスダウンしたときの処理                           *
    // ************************************************************************
    TableDataMouseDownEvent = (e) => {
        
        let target = e.target;
        this.SlectRecord(e);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータをマウスアップしたときの処理                           *
    // ************************************************************************
    TableDataMouseUpEvent = (e) => {
        
        // 
        // 
        // 
        if(this.drag_click_row > this.now_row){
            
            for(let i = this.drag_click_row; i >= this.now_row;i--){document.getElementById(`tr_${this.table_id_name}_${i}`).select = this.click_button == 0 ? true : false;};
            
        // 
        // 
        // 
        }else if(this.drag_click_row < this.now_row){
            
            for(let i = this.drag_click_row; i <= this.now_row;i++){document.getElementById(`tr_${this.table_id_name}_${i}`).select = this.click_button == 0 ? true : false;};
            
        }
        
        this.drag_flg = false;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータクリック時の処理                                       *
    // ************************************************************************
    SlectRecord = (e) => {
        
        // -------------------------------------+
        // クリックされた要素のデータを取得     |
        // -------------------------------------+
        let target      = e.target                              ;
        let parent      = target.parentNode                     ;
        let children    = parent.children                       ;
        let row         = parseInt(children[0].id.split("_")[3]);
        let isEven      = row % 2 == 0 ? false : true           ;
        
        let class_name = null;
        let color      = null;
             if( e.button   == 0                      ){ class_name = this.select_table_data_class ; color = this.select_table_data_color ; document.getElementById(`tr_${target.id.split("_")[1]}_${row}`).select = true ; } // 左クリック
        else if( e.button   == 2   && isEven == false ){ class_name = this.odd_table_data_class    ; color = this.odd_table_data_color    ; document.getElementById(`tr_${target.id.split("_")[1]}_${row}`).select = false; } // 右クリックかつ奇数
        else if( e.button   == 2   && isEven == true  ){ class_name = this.even_table_data_class   ; color = this.even_table_data_color   ; document.getElementById(`tr_${target.id.split("_")[1]}_${row}`).select = false; } // 右クリックかつ偶数
        
        if(class_name == null || color == null){return;}        ;
        
        // -------------------------------------+
        // 色変更                               |
        // -------------------------------------+
        for(let elem of children){
            
            if(e.button == 0){
                
                elem.classList.add(this.select_table_data_class);
                
            }else if(e.button == 2){
                
                elem.classList.remove(this.select_table_data_class);
                
                
            }
            
            elem.defaultbackground = color;
            elem.style.background  = "";
            
        }
        
        // -------------------------------------+
        // ドラッグ処理に使用するデータを保管   |
        // -------------------------------------+
        this.drag_flg           = true                      ;
        this.click_button       = e.button                  ;
        this.drag_color         = color                     ;
        this.drag_click_row     = parseInt(row)             ;
        this.drag_previous      = parseInt(row)             ;
        this.now_row            = parseInt(row)             ;
        this.table_id_name      = target.id.split("_")[1]   ;
        this.drag_isUp_previous = null                      ;  // 前回上か下か
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータドラッグスタート                                       *
    // ************************************************************************
    DragingStart = (e) => {
        
        // ドラッグ以外はスキップ
        if(!this.drag_flg){return;}                                                                             ; // ドラッグしていないときはスキップ
        
        let target                  = e.target                                                                  ; // イベント発火した要素
        let parent                  = target.parentNode                                                         ; // イベント発火した要素の親要素
        let children                = parent.children                                                           ; // 親要素から子要素を取得
        this.now_row                = parseInt(children[0].id.split("_")[3])                                    ; // 発火した要素の行番号
        let isSelect                = true                                                                      ; // 処理が選択か解除かのフラグ
        let isAbove_starting_point  = null                                                                      ; // 発火時のドラッグがドラッグ開始位置より上か下か
        let isFolding               = false                                                                     ; // 折り返し状態かどうか ※ 「折り返し」: ドラッグ開始位置より上の場合に下にドラッグする処理をしたとき(逆も同じ)
        let previous_target         = []                                                                        ; // 処理を行う要素が入る配列
        previous_target[0]          = {}                                                                        ; // 配列の0番目は今回発火した要素が入る
        previous_target[0].parent   = document.getElementById(`tr_${target.id.split("_")[1]}_${this.now_row}`)  ; // 発火した行のtr要素を取得
        previous_target[0].children = previous_target[0].parent.children                                        ; // 発火した行のtd要素を取得
        
        // -------------------------------------------------+
        // ドラッグ開始地点から現在地が上か下かを判定       |
        // -------------------------------------------------+
        if(this.drag_click_row > this.now_row){                                                     // ドラッグ開始地点より上の場合
            
            isAbove_starting_point      = true                                  ;                   // ドラッグ開始地点より上
            if(this.drag_isUp_previous == null){this.drag_isUp_previous = true} ;                   // 初回ドラッグの場合は現在の動作を上ドラッグと判定する
            
        }else if(this.drag_click_row < this.now_row){                                                        // ドラッグ開始地点より下の場合
            
            isAbove_starting_point      = false                                 ;                   // ドラッグ開始地点より下
            if(this.drag_isUp_previous == null){this.drag_isUp_previous = false};                   // 初回ドラッグの場合は現在の動作を下ドラッグと判定する
            
        }
        
        // -------------------------------------------------+
        // 折り返し判定チェック                             |
        // -------------------------------------------------+
        if( (this.now_row < this.drag_previous && this.drag_isUp_previous == false) || (this.now_row > this.drag_previous && this.drag_isUp_previous == true ) ){                 // 折り返しした場合
            
            this.drag_isUp_previous = !this.drag_isUp_previous;                                     // ドラッグを折り返す場合は現在動作を反転させる             例 : 上ドラッグ状態の場合、折り返すとしたドラッグ状態と判定する。
                                                                                                    //   ※折り返し : ドラッグ開始地点から上にドラッグしていたときに途中で下にドラッグにすること
        };
        
        // -------------------------------------------------+
        // 早すぎで判定を通過した場合の補完処理             |※ここの処理は適当に書いたからみずらいかも・・・・
        // -------------------------------------------------+
        if( (this.now_row != this.drag_previous - 1 && this.drag_isUp_previous == true ) || (this.now_row != this.drag_previous + 1 && this.drag_isUp_previous == false) ){       // マウスオーバー判定をすり抜けた場合(早すぎて判定が追いつかなかった場合)
            
            // -----------------------------------------------------+
            // for文切り替え用変数                                  |
            // -----------------------------------------------------+
            let Array_No               = 1;                                                         // 配列の番号
            let plus_num                  ;                                                         // for分のループごとにプラスする数
            let start_num                 ;                                                         // for分の初期値
            let comparative_large         ;                                                         // 比較対象の値(大きい側)
            let comparative_small         ;                                                         // 比較対象の値(小さい側)
            let comparative_large_plus    ;                                                         // 比較対象の値(大きい側)にプラスする数
            let comparative_small_plus    ;                                                         // 比較対象の値(小さい側)にプラスする数
            
            // -----------------------------------------------------+
            // 現在の動作が上ドラッグの場合                         |
            // -----------------------------------------------------+
            if(this.drag_isUp_previous){
                
                plus_num               =  1                 ;                                       // 上ドラッグの場合、判定漏れした値は現在の地点よりも下のため+1
                start_num              =  1                 ;                                       // 上ドラッグの場合、判定漏れした値は現在の地点よりも下のため+1から始める
                comparative_large      =  this.drag_previous;                                       // 大きい側にドラッグ開始地点を持ってくる
                comparative_small      =  this.now_row               ;                                       // 小さい側に現在の地点を持ってくる
                comparative_large_plus =  0                 ;                                       // 上ドラッグの場合は使わない
                comparative_small_plus =  1                 ;                                       // 上ドラッグの場合、判定漏れした値は現在の地点よりも下のため+1ずつ回して現在の地点からひとつづつ下の値を見る
                
            // -----------------------------------------------------+
            // 現在の動作が下ドラッグの場合                         |
            // -----------------------------------------------------+
            }else{
                
                plus_num               =  -1                ;                                       // 下ドラッグの場合、判定漏れした値は現在の地点よりも上のため－1
                start_num              =  -1                ;                                       // 下ドラッグの場合、判定漏れした値は現在の地点よりも上のため－1から始める
                comparative_large      = this.now_row                ;                                       // 大きい側に現在の地点を持ってくる
                comparative_small      = this.drag_previous ;                                       // 小さい側にドラッグ開始地点を持ってくる
                comparative_large_plus = -1                 ;                                       // 下ドラッグの場合、判定漏れした値は現在の地点よりも上のため-1ずつ回して現在の地点からひとつづつ上の値を見る
                comparative_small_plus = 0                  ;                                       // 下ドラッグの場合は使わない
                
            }
            
            // -----------------------------------------------------+
            // 抜け漏れた箇所を取得する                             |
            // -----------------------------------------------------+
            for(let i = start_num;comparative_small + comparative_small_plus < comparative_large + comparative_large_plus;i += plus_num){
                
                // -----------------------------+
                // 動作が上か下かで分岐         |
                // -----------------------------+
                     if(this.drag_isUp_previous == true ){comparative_small_plus = i;}
                else if(this.drag_isUp_previous == false){comparative_large_plus = i;};
                
                // -----------------------------+
                // 抜け漏れた箇所を取得         |
                // -----------------------------+
                Array_No                            = previous_target.length;
                previous_target[Array_No]           = {};
                previous_target[Array_No].parent    = document.getElementById(`tr_${target.id.split("_")[1]}_${this.now_row+i}`);
                previous_target[Array_No].children  = previous_target[Array_No].parent.children;
                
            }
            
        };
        
        
        // -------------------------------------------------+
        // 折り返しモード                                   |
        // -------------------------------------------------+
        if( (isAbove_starting_point == true  && this.drag_isUp_previous == false) || (isAbove_starting_point == false && this.drag_isUp_previous == true ) || this.drag_click_row == this.now_row){
            
            let previous_num = this.drag_isUp_previous == true ? 1 : -1;
            
            //let No                       = previous_target.length                                           ;
            previous_target[0]          = []                                                               ;
            previous_target[0].parent   = document.getElementById(`tr_${target.id.split("_")[1]}_${this.now_row + previous_num}`);
            previous_target[0].children = previous_target[0].parent.children ;
            
            isFolding = true;
            isSelect  = false;
            
        }
        
        // -------------------------------------------------+
        // 右クリック・左クリックで 選択・解除切り分け      |
        // -------------------------------------------------+
        isSelect = this.click_button == 2 ? !isSelect : isSelect;
        
        // -------------------------------------------------+
        // 色変更                                           |
        // -------------------------------------------------+
        for(let i = 0; i < previous_target.length; i++){
            
            for(let j = 0; j < previous_target[i].children.length; j++){
                
                if(isSelect){
                    
                         if( isFolding                        == false ){ previous_target[i].children[j].classList.add   (this.select_table_data_class); }
                    else if( previous_target[i].parent.select == true  ){ previous_target[i].children[j].classList.add   (this.select_table_data_class); }
                    else if( previous_target[i].parent.select == false ){ previous_target[i].children[j].classList.remove(this.select_table_data_class); };
                    
                }else{
                    
                         if( isFolding                        == false ){ previous_target[i].children[j].classList.remove(this.select_table_data_class); }
                    else if( previous_target[i].parent.select == true  ){ previous_target[i].children[j].classList.add   (this.select_table_data_class); }
                    else if( previous_target[i].parent.select == false ){ previous_target[i].children[j].classList.remove(this.select_table_data_class); };
                    
                }
                previous_target[i].children[j].defaultbackground = this.drag_color;
                previous_target[i].children[j].style.background  = "";
                
            }
            
        }
        
        this.drag_previous = this.now_row;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータドラッグ終了                                           *
    // ************************************************************************
    DragingFinish = () => {
        
        this.drag_flg = false;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価出力ボタン押下時の処理                                           *
    // ************************************************************************
    OupPutButtonEvent = (e) => {
        
        let child            = this.table.children[0].children;
        let select_employees = []                             ;
        let regex            = new RegExp(this.select_table_data_class);
        
        for(let elem of child){
            
            if( Array.from(elem.children[0].classList).some( class_name => regex.test(class_name) ) ){
                
                let No                           = select_employees.length      ;
                select_employees[No]             = {}                           ;
                select_employees[No]["社員番号"] = elem.children[0].innerText   ;
                select_employees[No]["氏名"    ] = elem.children[1].innerText   ;
                
            }
            
        }
        
        if(select_employees.length == 0){this.PopupScreenProcessing.show();return;};
        
        this.select_employees = select_employees;
        
        this.Transition(select_employees);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   全選択ボタン押下時の処理                                             *
    // ************************************************************************
    AllSelectButtonEvent = () => {
        
        let tr_list = this.table.children[0].children;
        
        for(let tr of tr_list){
            
            let td_list = tr.querySelectorAll("td");
            tr.select = true;
            
            for(let td of td_list){
                
                td.classList.add(this.select_table_data_class);
                td.style.background = "";
                
            }
            
        }
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   全解除ボタン押下時の処理                                             *
    // ************************************************************************
    AllNoSelectButtonEvent = () => {
        
        let tr_list = this.table.children[0].children;
        
        for(let tr of tr_list){
            
            let td_list = tr.querySelectorAll("td");
            tr.select = false;
            
            for(let td of td_list){
                
                td.classList.remove(this.select_table_data_class);
                td.style.background = "";
                
            }
            
        }
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   エラーポップアップの設定                                             *
    // ************************************************************************
    SettingPopup = () => {
        
        this.PopupScreenProcessing.set_text_box_text("[必須] : 評価出力する社員が選択されていません。","#000000",20,0,0);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   遷移先画面に送るデータ                                               *
    // ************************************************************************
    pass = () => {
        return this.select_employees;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () => {
        
        super.finish();
        
        this.FooterProcessing.finish();
        
        window.removeEventListener("mouseup",this.DragingFinish);
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_Transition = (set) => { this.Transition = set; };
    
}
