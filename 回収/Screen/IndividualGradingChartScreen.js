

// *****************************************************************************************************************************************************************************************************
// [画面名]
//   個人成績評価表
// *****************************************************************************************************************************************************************************************************
class IndividualGradingChartScreen extends IndividualGradingChartScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem,employees){
        
        super(elem);
        
        this.select_data = employees;
        this.select_No   = 0;
        
        this.table_data_select_color = "#5a4abd";
        this.table_data_default_color = "#f0f8ff";
        
        
        this.table_data_creating_EmployeesCode = "";
        this.table_data_select_employees = null;
        
        this.select_employees        = null;
        
        // ---------------------------+
        // 凡例                       |
        // ---------------------------+
        this.LegendProcessing = null;
        //this.Legend_frame     = null;
        this.Legend_flg       = true;
        this.Legend           = null;
        this.Legend_width     = 420;
        this.Legend_height    = this.td_height * 16 + 25;
        this.select_table     = null;
        
        this.EmployeesData    = this.getEmployeesData();
        
        //this.select_table_odd_color  = 
        //this.select_table_even_color = 
        
    }
    
    // 画面名を返す
    getScreenName = () => {return "個人成績評価表";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面作成                                                             *
    // ************************************************************************
    CreateScreen = (employees = null) => {
        
        if(employees == null){
            this.select_employees = this.EmployeesData["table"][0]         ;
        }else{
            this.select_employees = this.EmployeesData["search"][employees];
        }
        
        
        
        super.CreateScreen();
        
        this.CreateLegend(this.select_data);
        
        this.right_arrow_button.style.display = this.select_No+1 <= this.EmployeesData["table"].length-1 ? "" : "none";
        this.left_arrow_button.style.display  = this.select_No-1 >= 0                                    ? "" : "none";
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例作成                                                             *
    // ************************************************************************
    CreateLegend = (data) => {
        
        if( !this.Legend_flg || this.LegendProcessing != null){return;}; 
        
        // ---------------------------+
        // 凡例                       |
        // ---------------------------+
        this.LegendProcessing                           = new LegendProcessing( this.individual_grading_chart_frame_front     );
        this.LegendProcessing.set_Legend_width                                ( this.Legend_width     );
        this.LegendProcessing.set_Legend_height                               ( this.Legend_height    );
        this.LegendProcessing.set_Legend_tag_title_text                       ("評価出力社員一覧"     );
        this.LegendProcessing.create                                          ( this.header_height,0  );
        this.Legend                                     = this.LegendProcessing.get_Legend()           ;
        this.Legend_screen                              = this.LegendProcessing.get_Legend_screen()    ;
        this.Legend.style.left                          = ""                                           ;
        this.Legend.style.right                         = this.padding                                 ;
        
        // ---------------------------+
        // 選択社員テーブル           |
        // ---------------------------+
        this.TableHandler.set_table_width                  (420                         );
        this.TableHandler.set_table_height                 (this.td_height * 16         );
        this.TableHandler.set_select_table                 (true                        );
        this.TableHandler.set_create_table_data_callback   (this.TableDataCreateCallBack);
        this.TableHandler.set_table_data_mouseup_event     (this.SelectTableMouseUpEvent  );
        this.TableHandler.TableProcessing                  (data,this.Legend_screen     ); 
        this.select_table                                = this.TableHandler.get_table() ;
        this.select_table.style.position                 = ""                            ;
        
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
                
                let employees_No = elem.id.split("_")[3];
                
                this.table_data_creating_EmployeesCode = elem.innerText;
                
                elem.style.width  = 100           ;
                elem.style.height = this.td_height;
                
                
                this.EmployeesData["table"][employees_No]["社員番号要素"] = elem;
                
            break;
            
            // -----------------------+
            //  氏名                  |
            // -----------------------+
            case "氏名":
                
                let name_No = elem.id.split("_")[3];
                
                elem.style.width  = 320           ;
                elem.style.height = this.td_height;
                
                this.EmployeesData["table"][name_No]["氏名要素"] = elem;
                
            break;
            
        }
        
        // 現在選択されている社員のレコードは色を変える
        if(this.select_employees["社員番号"] == this.table_data_creating_EmployeesCode){
            
            elem.style.backgroundColor  = this.table_data_select_color;
            elem.defaultbackgroundColor = this.table_data_select_color;
            this.table_data_select_employees = elem;
            
        };
        
        return elem;
        
    }
    
    // ************************************************************************
    // 
    // ************************************************************************
    SelectTableMouseUpEvent = (e) => {
        
        let target = e.target;
        this.SelectEmployeesRecord(target);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例のレコードを押したときの処理                                     *
    // ************************************************************************
    SelectEmployeesRecord = (target) => {
        
        //let target       = e.target;
        let parent       = target.parentNode;
        let children     = parent.children;
        let Employees_No = "";
        
        let select_parent = this.table_data_select_employees.parentNode;
        let select_children = select_parent.children;
        
        //let default_color = 
        //let select_color = 
        
        for(let value of select_children){
            
            value.style.backgroundColor  = this.table_data_default_color;
            value.defaultbackgroundColor = this.table_data_default_color;
            
        }
        
        for(let value of children){
            
            if(value.id.split("_")[2] == "社員番号"){Employees_No = value.innerText;};
            value.style.backgroundColor  = this.table_data_select_color;
            value.defaultbackgroundColor = this.table_data_select_color;
            
        }
        
        this.table_data_select_employees = target;
        this.select_No = this.EmployeesData["search"][Employees_No]["No"];
        
        this.provisional_finish();
        this.CreateScreen(Employees_No);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルに表示するデータを取得する                               *
    // ************************************************************************
    getSelectEmployeesData = () => {
        
        let data = [];
        
        data[0] = this.select_employees;
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   選択された全社員のデータを取得する                                   *
    // ************************************************************************
    getEmployeesData(){
        
        let table_data  = [];
        let search_data = {};
        
        
        
        for(let i = 0;i<20;i++){
            let search = false;
            for(let value of this.select_data){if(value["社員番号"] == `T0${i}`){search =true;}}
            if(!search){continue};
            table_data[table_data.length]   = {
                        "社員番号" : `T0${i}`,
                        "氏名"     : "あいうえおかきくけこさしすせそたちつてと",
                        "生年月日" : "2024年04月10日",
                        "年齢"     : "51歳",
                        "入社日"   : "2033年07月12日",
                        "勤続年数" : "10年",
                        "学歴"     : "専門卒(2年)",
                        "基本給"   : "23000",
                        "ポイント" : "",
            }
        }
        
        for(let i = 0;i<table_data.length;i++){
            
            search_data[table_data[i]["社員番号"]] = {};
            search_data[table_data[i]["社員番号"]]["No"] = i
            
            for(let key in table_data[i]){
                
                search_data[table_data[i]["社員番号"]][key] = table_data[i][key];
                
            }
            
        }
        
        return {"table" : table_data,"search":search_data};
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価テーブルに表示するデータを取得する                               *
    // ************************************************************************
    getEvaluationData(){
        
        let data = [];
        
        for(let i=0;i<15;i++){
        data[i]  = {
                        "取得タイトル" : "基本情報",
                        "pt"           : "1",
                        "Expt"         : "1",
                        
            }
        }
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   経験テーブルに表示するデータを取得する                               *
    // ************************************************************************
    getExperienceData(){
        
        let it_non_it = [];
        it_non_it[0]  = {
                    "IT経験"     : "1年",
                    
                    
                    
                    
                    
        }
        
        it_non_it[1]  = {
                    
                    "IT以外"     : "2年",
                    
                    
                    
                    
        }
        
        
        let it_experience_pt     = [];
        it_experience_pt[0] = {"IT経験(pt)":"12pt"};
        
        let non_it_experience_pt = [];
        non_it_experience_pt[0] = {"IT以外(pt)":"4pt" } ;
        
        let current = [];
        current[0] = {"入社年数" : "3年"
                     
        };
        current[1] = { "入社年代" : "20代"}
        
        let current_pt = 4;
        
        return {"it_non_it" : it_non_it, "IT" : it_experience_pt, "nonIT" : non_it_experience_pt, "current" : current,"current_pt":current_pt};
        
    }
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   最終評価テーブルに表示するデータを取得する                           *
    // ************************************************************************
    getFinalVerdictData(){
        
        let data = [];
        data[0]  = {"第一カラム" : ""};
        data[1]  = {
                    "前々年度-前期-年月"   : "2022年1月" ,
                    "前々年度-前期-pt"     : "1"         ,
                    "前々年度-前期-Expt"   : "12日"      ,
                    "前年度-前期-年月"     : "2023年1月" ,
                    "前年度-前期-pt"       : "3"         ,
                    "前年度-前期-Expt"     : "12"        ,
                    "今年度-前期-年月"     : "2024年1月" ,
                    "今年度-前期-pt"       : "2"         ,
                    "今年度-前期-Expt"     : "9"         ,
        }
        data[2]={
                    "前々年度-後期-年月"   : "2022年10月",
                    "前々年度-後期-pt"     : "1"         ,
                    "前々年度-後期-Expt"   : "12日"      ,
                    "前年度-後期-年月"     : "2023年10月",
                    "前年度-後期-pt"       : "3"         ,
                    "前年度-後期-Expt"     : "12"        ,
                    "今年度-後期-年月"     : "2024年1月" ,
                    "今年度-後期-pt"       : "2"         ,
                    "今年度-後期-Expt"     : "9"         ,


        }
        
        data[3] = {
                    "過去前々年度以前-pt"  :"1"          ,
                    "過去前々年度以前-Expt":"3"          ,
                    "総合計-pt"            :"12"         ,
                    "総合計-Expt"          :"1"          ,
        }
        
        
        
        return data;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターを作成する                                                   *
    // ************************************************************************
    FooterProcessing = () =>{
        
        if(
           this.company_evaluation_button_event == null &&
           this.self_evaluation_button_event    == null &&
           this.finish_button_event             == null
        )
        {
            this.FooterProcessing_obj.set_button_data("","#ffffff","#aaaaaa",this.finish_button_event,true            );
            this.FooterProcessing_obj.set_button_data("データ出力"    ,"#ffffff","#5a4abd",this.export_button_event            );
            this.FooterProcessing_obj.set_button_data("","#ffffff","#aaaaaa",this.finish_button_event            );
        }else{
            
            if(this.company_evaluation_button_event != null){this.FooterProcessing_obj.set_button_data("会社評価に戻る","#ffffff","#bf2f2f",this.company_evaluation_button_event,true);};
            if(this.self_evaluation_button_event    != null){this.FooterProcessing_obj.set_button_data("自己評価に戻る","#ffffff","#7f2fbf",this.self_evaluation_button_event   );};
                                                             this.FooterProcessing_obj.set_button_data("データ出力"    ,"#ffffff","#5a4abd",this.export_button_event            );
            if(this.finish_button_event             != null){this.FooterProcessing_obj.set_button_data("評価を終了する","#ffffff","#bf4c00",this.finish_button_event            );};
            
        }
        
        this.FooterProcessing_obj.set_footer_height(this.footer_height);
        this.FooterProcessing_obj.create();
        this.FooterProcessing_obj.create_button();
        
        if(
           this.company_evaluation_button_event == null &&
           this.self_evaluation_button_event    == null &&
           this.finish_button_event             == null
        )
        {
            
            window.removeEventListener("resize",this.FooterProcessing_obj.resize);
            
            let button = this.FooterProcessing_obj.get_footer().children;
            this.left_arrow_button = button[0];
            let export_button      = button[1];
            this.right_arrow_button  = button[2];
            
            this.left_arrow_button.style.clipPath = "polygon(0 50%, 100%  0 , 100% 100%)";
            this.left_arrow_button.style.width = 80;
            this.right_arrow_button.style.clipPath = "polygon(0  0 , 100% 50%,   0  100%)";
            this.right_arrow_button.style.width = 80;
            
            let export_button_rect = export_button.getBoundingClientRect();
            
            export_button.style.left = (document.body.clientWidth - export_button_rect["width"]) / 2;
            this.left_arrow_button.style.left = parseInt(export_button.style.left) - 80 - 20;
            this.right_arrow_button.style.left  = parseInt(export_button.style.left) + 20 + export_button_rect["width"];
            
            
            this.right_arrow_button.addEventListener("mouseup",this.RightArrowEvent);
            this.left_arrow_button .addEventListener("mouseup",this.LeftArrowEvent );
            window.addEventListener("resize",this.resize);
        }
        
    }

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   右矢印ボタンイベント                                                 *
    // ************************************************************************
    RightArrowEvent = () =>{
        
        this.select_No = this.select_No+1 <= this.EmployeesData["table"].length-1 ?  this.select_No+1 : this.select_No;
        let Employees_No = this.EmployeesData["table"][this.select_No]["社員番号"];
        
        this.SelectEmployeesRecord(this.EmployeesData["table"][this.select_No]["社員番号要素"]);
        
        this.provisional_finish();
        this.CreateScreen(Employees_No);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   左矢印ボタンイベント                                                 *
    // ************************************************************************
    LeftArrowEvent = () => {
        
        this.select_No = this.select_No-1 >= 0 ?  this.select_No-1 : this.select_No;
        let Employees_No = this.EmployeesData["table"][this.select_No]["社員番号"];
        
        this.SelectEmployeesRecord(this.EmployeesData["table"][this.select_No]["社員番号要素"]);
        
        this.provisional_finish();
        this.CreateScreen(Employees_No);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズ処理                                                         *
    // ************************************************************************
    resize = () => {
        
        super.resize();
        
        let button                    = this.FooterProcessing_obj.get_footer().children;
        //let left_arrow_button         = button[0]                                  ;
        let export_button             = button[1]                                  ;
        //let right_arrow_button        = button[2]                                  ;
        let export_button_rect        = export_button.getBoundingClientRect()      ;
        //let employees_table_rect      = this.employees_table.getBoundingClientRect();
        
        
        export_button.style.left      = (document.body.clientWidth - export_button_rect["width"]) / 2        ;
        this.left_arrow_button.style.left  = parseInt(export_button.style.left) - 80 - 20                         ;
        this.right_arrow_button.style.left = parseInt(export_button.style.left) + 20 + export_button_rect["width"];
        
        let Legend_rect = this.Legend.getBoundingClientRect();
        
        
        if( Legend_rect["left"] > document.body.clientWidth - Legend_rect["width"]                           ){this.Legend.style.left = document.body.clientWidth - Legend_rect["width"]                           ;};
        if( Legend_rect["left"] <= 0                                                                          ){this.Legend.style.left = 0                                                                          ;};
        if( Legend_rect["top" ] > document.body.clientHeight - ( Legend_rect["height"] + this.footer_height )){this.Legend.style.top  = document.body.clientHeight - ( Legend_rect["height"] + this.footer_height );};
        if( Legend_rect["top" ] <= this.header_height                                                         ){this.Legend.style.top  = this.header_height                                                         ;};

        console.log(Legend_rect["top" ])
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   選択社員変更時の仮終了処理                                           *
    // ************************************************************************
    provisional_finish = () => {
        
        this.evaluation_table_frame   .innerHTML = "";
        this.employees_table_frame    .innerHTML = "";
        this.experience_table_frame   .innerHTML = "";
        this.final_verdict_table_frame.innerHTML = "";
        this.FooterProcessing_obj.finish();
        window.removeEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () => {
        
        super.finish();
        this.FooterProcessing_obj.finish();
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_Legend_flg = (set) => {this.Legend_flg = set;};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}




