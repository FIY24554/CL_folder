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
        
        this.CompanyEvaluationTransition = null;
        
        this.salary_No_width          = 120;
        this.name_width               = 330;
        this.latest_date_width        = 100;
        this.company_evaluation_width = 110;
        this.self_evaluation_width    = 110;
        
        this.table_width = this.salary_No_width + this.name_width + this.latest_date_width + this.company_evaluation_width + this.self_evaluation_width;
        
        // ここから追加
        this.employees = null;
        
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
                       "社員番号":"T01"             ,
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
                //this.ButtonProcessing.set_position        ("relative"    );
                //this.ButtonProcessing.set_width           (100           );
                //this.ButtonProcessing.set_height          (25            );
                //this.ButtonProcessing.set_shape           ("0.5vh"       );
                //this.ButtonProcessing.set_background_color("#bf2f2f"     );
                
                //this.ButtonProcessing.set_font_size       (15            );
                //this.ButtonProcessing.set_font_size       (15            );
                this.ButtonProcessing.set_CSS("","","all-remove");
                this.ButtonProcessing.set_CSS("Company-Evaluation-Button"     ,"button");
                this.ButtonProcessing.set_CSS("EvaluationPerformScreen-Company-Evaluation-Button"     ,"button");
                this.ButtonProcessing.set_CSS("Company-Evaluation-Button-Text","text");
                let company_button = this.ButtonProcessing.create ("会社評価",0,0             );
                company_button.addEventListener("mouseup",this.CompanyEvaluationEvent);
                company_button.get_frame_elem.style.position = "relative";
                
                //company_button.style.margin  = "auto";
                //company_button.style.position = "";
                //company_button.event_elem.id = elem.id;
                //company_button.event_elem.defaultbackgroundColor = this.default_color;
                
                //elem.style.width = this.company_evaluation_width;
                
                return elem;
                
            break;
            
            case "自己評価":
                
                // 自己評価ボタン設定
                this.ButtonProcessing.set_parent_elem     (elem          );
                //this.ButtonProcessing.set_CSS();
                ///this.ButtonProcessing.set_position        ("relative"    );
                ///this.ButtonProcessing.set_width           (100           );
                ///this.ButtonProcessing.set_height          (25            );
                ///this.ButtonProcessing.set_shape           ("0.5vh"       );
                ///this.ButtonProcessing.set_background_color("#7f2fbf"     );
                ///this.ButtonProcessing.set_font_size       (15            );
                
                
                this.ButtonProcessing.set_CSS("","","all-remove");
                this.ButtonProcessing.set_CSS("Self-Evaluation-Button"     ,"button");
                this.ButtonProcessing.set_CSS("EvaluationPerformScreen-Self-Evaluation-Button"     ,"button");
                this.ButtonProcessing.set_CSS("Self-Evaluation-Button-Text","text");
                
                let self_button = this.ButtonProcessing.create ("自己評価",0,0             );
                self_button.get_frame_elem.style.position = "relative";
                self_button.addEventListener("mouseup",this.SelfEvaluationEvent   );
                //self_button.style.margin = "auto";
                
                //self_button.event_elem.id = elem.id;
                //self_button.event_elem.defaultbackgroundColor = this.default_color;

                
                //elem.style.width = this.self_evaluation_width;
                
                // 最後のカラムでtrの縦幅を固定
                //tr.style.height = 35;
                
                return elem;
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   会社評価画面に移動する                                               *
    // ************************************************************************
    CompanyEvaluationEvent = (e) => {
        
        this.target = e.target   ;
        //
        //
        //let regex = /tr/;
        //let break_counter = 30;
        //let count = 0;
        //while(true){
        //    
        //    count++;
        //    if(break_counter < count  ){return;   };
        //    if(target.id == undefined ){continue; };
        //    if(regex.test(target.id)  ){break;    };
        //    target = target.parentElement;
        //    
        //}
        //
        //let No   = Array.from(target.children).filter(column => column.id.split("_")[2] == "社員番号")[0].innerText;
        //let name = Array.from(target.children).filter(column => column.id.split("_")[2] == "氏名"    )[0].innerText;
        //
        ////let 
        //
        ////let id     = e.target.id;
        ////id         = id.split("_");
        ////let parent = document.getElementById(`tr_${id[1]}_${id[3]}`);
        //
        //// 形式をそろえるためこの形
        //this.employees                = [];
        //this.employees[0]             = {};
        //this.employees[0]["社員番号"] = No;
        //this.employees[0]["氏名"    ] = name;
        
        this.CompanyEvaluationTransition(this.employees);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   自己評価画面に移動する                                               *
    // ************************************************************************
    SelfEvaluationEvent = (e) => {
        
        this.target = e.target   ;
        
        //let regex = /tr/;
        //let break_counter = 30;
        //let count = 0;
        //while(true){
        //    
        //    count++;
        //    if(break_counter < count  ){return;   };
        //    if(target.id == undefined ){continue; };
        //    if(regex.test(target.id)  ){break;    };
        //    target = target.parentElement;
        //    
        //}
        //
        //let No   = Array.from(target.children).filter(column => column.id.split("_")[2] == "社員番号")[0].innerText;
        //let name = Array.from(target.children).filter(column => column.id.split("_")[2] == "氏名"    )[0].innerText;
        //
        ////let 
        //
        ////let id     = e.target.id;
        ////id         = id.split("_");
        ////let parent = document.getElementById(`tr_${id[1]}_${id[3]}`);
        //
        //// 形式をそろえるためこの形
        //this.employees                = [];
        //this.employees[0]             = {};
        //this.employees[0]["社員番号"] = No;
        //this.employees[0]["氏名"    ] = name;
        
        this.SelfEvaluationTransition(this.employees);
        
    }
    
    // 
    // 
    // 
    pass = () => {
        
        let target = this.target;
        
        let regex = /tr/;
        let break_counter = 30;
        let count = 0;
        while(true){
            
            count++;
            if(break_counter < count  ){return;   };
            if(target.id == undefined ){continue; };
            if(regex.test(target.id)  ){break;    };
            target = target.parentElement;
            
        }
        
        let No   = Array.from(target.children).filter(column => column.id.split("_")[2] == "社員番号")[0].innerText;
        let name = Array.from(target.children).filter(column => column.id.split("_")[2] == "氏名"    )[0].innerText;
        
        //let 
        
        //let id     = e.target.id;
        //id         = id.split("_");
        //let parent = document.getElementById(`tr_${id[1]}_${id[3]}`);
        
        // 形式をそろえるためこの形
        this.employees                = [];
        this.employees[0]             = {};
        this.employees[0]["社員番号"] = No;
        this.employees[0]["氏名"    ] = name;
        
        return this.employees;
        
        //this.SelfEvaluationTransition(this.employees);
        
    }
    
    //set_CompanyEvaluationEvent = (set) =>{this.CompanyEvaluationEvent = set;};
    //set_SelfEvaluationEvent    = (set) =>{this.SelfEvaluationEvent    = set;};
    set_SelfEvaluationTransition    = (set) =>{this.SelfEvaluationTransition    = set;};
    
    set_CompanyEvaluationTransition = (set) => {this.CompanyEvaluationTransition = set;};
    
}
