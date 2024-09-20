


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
        
        super(elem);
        
        this.default_color = "#f0f8ff";
        this.drag_color = "";
        this.drag_flg = false;
        
        // 
        // オプション
        // 
        this.option_frame      = null;
        this.all_select_button = null;
        this.all_cancel_button = null;
        
        // ---------------------------+
        // テーブル設定               |
        // ---------------------------+
        this.TableHandler.set_table_data_mousedown_event(this.TableDataMouseDownEvent);
        this.TableHandler.set_table_data_mouseup_event  (this.TableDataMouseUpEvent  );
        this.TableHandler.set_table_data_mouseover_event(this.DragingStart           );
        this.TableHandler.set_table_td_odd_color        (this.default_color          );
        this.TableHandler.set_table_td_even_color       (this.default_color          );
        this.TableHandler.set_select_table              (true                        );
        
        // クラス
        this.ButtonProcessing      = new ButtonProcessing()                            ;
        this.FooterProcessing      = new FooterProcessing()                            ;
        this.PopupScreenProcessing = new PopupScreenProcessing();
        
        this.footer_height        = 100;
        this.footer_button_width  = 250                                               ;
        this.footer_button_height = 50                                                ;
        this.footer_font_size     = 18                                                ;
        this.footer_shape         = "1vh"                                             ;
        
        this.salary_No_width      = 120                                               ;
        this.name_width           = 330                                               ;
        this.latest_date_width    = 100                                               ;
        //this.output_width         = 110                                               ;
        
        this.select_color           = "#7a6add"                                         ;
        let dummy                   = document.createElement("div")                     ;
        dummy.style.backgroundColor = this.select_color                                 ;
        this.Rgb_select_color       = dummy.style.backgroundColor                       ;
        dummy.style.backgroundColor = this.default_color                                ;
        this.Rgb_default_color      = dummy.style.backgroundColor                       ;
        
        dummy.remove();
        
        this.table_width = this.salary_No_width + this.name_width + this.latest_date_width;
        
        window.addEventListener("mouseup",this.DragingFinish);
        
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
        
        super.CreateScreen();
        
        this.CreateOption();
        
        this.CreateFooter();
        
        this.SettingPopup();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブル関連の追加ボタンを作成する                                   *
    // ************************************************************************
    CreateOption = () => {
        
        // ---------------------------+
        // オプションボタンフレーム   |
        // ---------------------------+
        this.option_frame                    = document.createElement("div");
        this.option_frame.id                 = "option_frame";
        this.option_frame.style.width        = 100 ;
        this.option_frame.style.height       = 100 ;
        this.option_frame.margin             = "auto";
        this.table_frame.insertAdjacentHTML    ("afterbegin",this.option_frame.outerHTML);
        this.option_frame                    = document.getElementById("option_frame");
        
        // ---------------------------+
        // 全選択ボタン作成           |
        // ---------------------------+
        this.ButtonProcessing.set_parent_elem(this.option_frame)
        this.all_select_button = this.ButtonProcessing.create("全選択",0,0);
        //this.all_select_button.style.position = "";
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッター作成                                                         *
    // ************************************************************************
    CreateFooter = () => {
        
        // -----------------+
        // フッター作成     |
        // -----------------+
        this.FooterProcessing.set_footer_height   (this.footer_height                                   );    // フッターの縦幅
        this.FooterProcessing.set_button_width    (this.footer_button_width                             );    // フッターボタンの横幅
        this.FooterProcessing.set_button_height   (this.footer_button_height                            );    // フッターボタンの縦幅
        this.FooterProcessing.set_button_font_size(this.footer_font_size                                );    // フッターボタンのフォントサイズ
        this.FooterProcessing.set_button_shape    (this.footer_shape                                    );    // フッターボタンの形
        this.FooterProcessing.set_button_data     ("評価出力","#ffffff","#5a4abd",this.OupPutButtonEvent);    // 評価出力ボタンのステータス指定
        this.FooterProcessing.create              ()                                                     ;    // フッター作成
        this.FooterProcessing.create_button       ()                                                     ;    // フッターボタン作成
        
    }
     
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルに表示するデータを取得する                                   *
    // ************************************************************************
    getData(){
        
        let data = [];
        
        for(let i=0;i<20;i++){
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
        this.SlectRecord(target);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータをマウスアップしたときの処理                           *
    // ************************************************************************
    TableDataMouseUpEvent = (e) => {
        
        if(!this.drag_flg){return;};
        let target = e.target;
        this.SlectRecord(target,false);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータクリック時の処理                                       *
    // ************************************************************************
    SlectRecord = (target,color_chenge = true) => {
        
        // -------------------------------------+
        // クリックされた要素のデータを取得     |
        // -------------------------------------+
        let parent      = target.parentNode                                                                                                               ;
        let children    = parent.children                                                                                                                 ;
        let color       = children[0].defaultbackgroundColor;
        if(color_chenge){color = this.Rgb_select_color != children[0].defaultbackgroundColor ? this.Rgb_select_color : this.Rgb_default_color;}
        this.drag_color = color;
        
        // -------------------------------------+
        // 色変更                               |
        // -------------------------------------+
        for(let elem of children){
            elem.defaultbackgroundColor = color;
            elem.style.backgroundColor = color;
            
        }
        
        this.drag_flg = true;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータドラッグスタート                                       *
    // ************************************************************************
    DragingStart = (e) => {
        
        if(!this.drag_flg){return;};
        
        let target      = e.target                                                                                                                        ;
        let parent      = target.parentNode                                                                                                               ;
        let children    = parent.children                                                                                                                 ;
        
        // -------------------------------------+
        // 色変更                               |
        // -------------------------------------+
        for(let elem of children){
            elem.defaultbackgroundColor = this.drag_color;
            
        }
        
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
        
        let dummy                   = document.createElement("div");
        dummy.style.backgroundColor = this.select_color            ;
        
        for(let elem of child){
            
            if(elem.children[0].style.backgroundColor == dummy.style.backgroundColor){
                
                let No = select_employees.length;
                select_employees[No] = {};
                select_employees[No]["社員番号"] = elem.children[0].innerText;
                select_employees[No]["氏名"    ] = elem.children[1].innerText;
                
            }
            
        }
        
        if(select_employees.length == 0){this.PopupScreenProcessing.show();return;};
        
        this.Transition(select_employees);
        
    }
    
    // 
    // [処理概要]
    //   ポップアップの設定
    // 
    SettingPopup = () => {
        
        
        this.PopupScreenProcessing.set_text_box_text("てすとはは昇順承知いたしました。colonfjeo","#000000",20,0,1);
        this.PopupScreenProcessing.set_text_box_text("これふぉえｊぐおｇｊは","#000000",20,1,0);
        this.PopupScreenProcessing.set_text_box_text("てすげｓｇｄｄｇと","#000000",20,1,1);
        this.PopupScreenProcessing.set_text_box_text("これｂｒｐこｒｋｇは","#000000",20,2,0);
        this.PopupScreenProcessing.set_text_box_text("てｂｒｒすと","#000000",20,2,1);
        this.PopupScreenProcessing.set_text_box_text("れわかり","#000000",20,0,0);//this.PopupScreenProcessing.set_text_box_text("社員を選択してください。追加をするにはデータが必要になります。わかりましたか？OK?OR...NO！！！","000000","20");
        //this.PopupScreenProcessing.set_text_box_text("社員を選択してください。追加をするにはデータが必要になります。わかりましたか？OK?OR...NO！！！","000000","20");
        //this.PopupScreenProcessing.set_text_box_text("社員を選択してください。追加をするにはデータが必要になります。わかりましたか？OK?OR...NO！！！","000000","20");
        //this.PopupScreenProcessing.set_text_box_text("社員を選択してください。追加をするにはデータが必要になります。わかりましたか？OK?OR...NO！！！","000000","20");
        //this.PopupScreenProcessing.set_text_box_text("社員を選択してください。追加をするにはデータが必要になります。わかりましたか？OK?OR...NO！！！","000000","20");
        
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

