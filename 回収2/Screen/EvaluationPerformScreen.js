

// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   評価実施画面
// *****************************************************************************************************************************************************************************************************
class EvaluationPerformScreen extends TableScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        super(elem);
        
        
        
        
        
        this.default_color = "#f0f8ff";
        
        this.TableHandler.set_table_td_odd_color        (this.default_color          );
        this.TableHandler.set_table_td_even_color       (this.default_color          );
        this.TableHandler.set_select_table              (true                        );
        
        
        
        
        
        
        
        
        
        this.ButtonProcessing = new ButtonProcessing();
        
        this.CompanyEvaluationEvent = null;
        
        this.salary_No_width          = 120;
        this.name_width               = 330;
        this.latest_date_width        = 100;
        this.company_evaluation_width = 110;
        this.self_evaluation_width    = 110;
        
        this.table_width = this.salary_No_width + this.name_width + this.latest_date_width + this.company_evaluation_width + this.self_evaluation_width;
        
    }
    
    getScreenName = () =>{return "評価実績画面";};
    
    ///CreateScreen = () => {
    ///    
    ///    super.CreateScreen();
    ///    
    ///}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルに表示するデータを取得する                                   *
    // ************************************************************************
    getData(){
        
        let data = [];
        
        for(let i = 0;i<20;i++){
            data[i] = {
                       "社員番号":"T001"             ,
                       "氏名"    :"斎藤 一郎"        ,
                       "最新日"  : "2024-02-21"      ,
                       "会社評価": ""                ,
                       "自己評価": ""                ,
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
            
            case "会社評価":
                elem.innerText = "";
                tr.style.zIndex = 1;
                
            break;
            
            case "自己評価":
                elem.innerText = "";
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
            
            case "会社評価":
                
                // 会社評価ボタン設定
                this.ButtonProcessing.set_parent_elem     (elem          );
                this.ButtonProcessing.set_position        ("relative"    );
                this.ButtonProcessing.set_width           (100           );
                this.ButtonProcessing.set_height          (25            );
                this.ButtonProcessing.set_shape           ("0.5vh"       );
                this.ButtonProcessing.set_background_color("#bf2f2f"     );
                this.ButtonProcessing.set_font_size       (15            );
                
                let company_button = this.ButtonProcessing.create ("会社評価",0,0             );
                company_button.set_event                      (this.CompanyEvaluationEvent);
                company_button.style.margin  = "auto";
                company_button.event_elem.id = elem.id;
                company_button.event_elem.defaultbackgroundColor = this.default_color;
                
                elem.style.width = this.company_evaluation_width;
                
                return elem;
                
            break;
            
            case "自己評価":
                
                // 自己評価ボタン設定
                this.ButtonProcessing.set_parent_elem     (elem          );
                this.ButtonProcessing.set_position        ("relative"    );
                this.ButtonProcessing.set_width           (100           );
                this.ButtonProcessing.set_height          (25            );
                this.ButtonProcessing.set_shape           ("0.5vh"       );
                this.ButtonProcessing.set_background_color("#7f2fbf"     );
                this.ButtonProcessing.set_font_size       (15            );
                
                let self_button = this.ButtonProcessing.create ("自己評価",0,0             );
                self_button.set_event                      (this.SelfEvaluationEvent   );
                self_button.style.margin = "auto";
                
                self_button.event_elem.id = elem.id;
                self_button.event_elem.defaultbackgroundColor = this.default_color;

                
                elem.style.width = this.self_evaluation_width;
                
                // 最後のカラムでtrの縦幅を固定
                tr.style.height = 35;
                
                return elem;
                
            break;
            
        }
        
        return elem;
        
    }
    
    set_CompanyEvaluationEvent = (set) =>{this.CompanyEvaluationEvent = set;};
    set_SelfEvaluationEvent    = (set) =>{this.SelfEvaluationEvent    = set;};
    
}


