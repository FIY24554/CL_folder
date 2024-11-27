//
//
//
class IndividualGradingChartScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem,employees){
        
        // クラス
        this.TableHandler                        = new TableHandler()                                        ;
        this.FooterProcessing_obj                = new FooterProcessing()                                        ;
        
        this.HeaderProcessing = new HeaderProcessing();
        this.header_height = this.HeaderProcessing.get_header_height();
        
        
        // [処理概要]
        // 
        // 
        this.individual_grading_chart_frame_back = null;
        this.individual_grading_chart_frame_back_height = 730;
        
        this.individual_grading_chart_frame = null;
        this.individual_grading_chart_frame_front
        
        this.employees = employees;
        
        // ---------------------------+
        // フッター                   |
        // ---------------------------+
        this.company_evaluation_button_event     = null                                                      ;
        this.self_evaluation_button_event        = null                                                      ;
        this.finish_button_event                 = null                                                      ;
        this.footer_height                       = 100                                                       ;
        this.right_arrow_button                  = null;
        this.left_arrow_button                   = null;
        
        this.FooterProcessing_obj.set_button_width    ( 250   )                                                  ;
        this.FooterProcessing_obj.set_button_height   ( 50    )                                                  ;
        this.FooterProcessing_obj.set_button_font_size( 18    )                                                  ;
        this.FooterProcessing_obj.set_button_shape    ( "1vh" )                                                  ;
        
        // ---------------------------+
        // メインフレーム             |
        // ---------------------------+
        this.maine_frame                         = elem                                                      ;
        this.maine_frame_width                   = parseInt(elem.style.width )                               ;
        this.maine_frame_height                  = parseInt(elem.style.height)                               ;
        
        this.td_height                           = 30                                                        ;
        this.padding                             = 20                                                        ;
        
        this.set_table_td_odd_color              = "#f0f8ff"                                                 ;
        this.set_table_td_even_color             = "#ffff89"                                                 ;
        
        this.clone_column                        = null                                                      ;
        
        // ---------------------------+
        // 社員テーブル               |
        // ---------------------------+
        this.employees_table_frame               = null                                                      ;
        this.employees_table                     = null                                                      ;
        this.employees_table_width               = 1200                                                      ;
        this.employees_table_hieght              = ""                                                        ;
        this.salary_background_color             = "#f09199"                                                 ;
        
        // ---------------------------+
        // 評価テーブル               |
        // ---------------------------+
        this.evaluation_table_frame              = null                                                      ;
        this.evaluation_table                    = null                                                      ;
        this.evaluation_table_width              = this.employees_table_width / 2 - (this.padding / 2)       ;
        this.evaluation_table_height             = 300                                                       ;
        
        // ---------------------------+
        // 経験テーブル               |
        // ---------------------------+
        this.experience_table_frame              = null                                                      ;
        this.experience_frame_width              = this.employees_table_width / 2 - (this.padding / 2)       ;
        this.experience_frame_height             = 300                                                       ;
        this.experience_data                     = null                                                      ;
        
        // ---------------------------+
        // IT経験・IT以外経験テーブル |
        // ---------------------------+
        this.IT_non_It_table                     = null                                                      ;
        this.IT_non_It_table_width               = 250                                                       ;
        this.IT_non_It_table_height              = ""                                                        ;
        
        // ---------------------------+
        // IT経験テーブル             |
        // ---------------------------+
        this.IT_table                            = null                                                      ;
        this.IT_table_width                      = 250                                                       ;
        this.IT_table_height                     = ""                                                        ;
        
        // ---------------------------+
        // IT以外経験テーブル         |
        // ---------------------------+
        this.non_IT_table                        = null                                                      ;
        this.non_IT_table_width                  = 250                                                       ;
        this.non_IT_table_height                 = ""                                                        ;
        
        // ---------------------------+
        // 現在経験テーブル           |
        // ---------------------------+
        this.current_table                       = null                                                      ;
        this.current_table_width                 = 250                                                       ;
        this.current_table_height                = ""                                                        ;
        
        this.IT_background_color                 = "#98d98e"                                                 ;
        this.non_IT_background_color             = "#a4a8d4"                                                 ;
        
        // ---------------------------+
        // 最終評価テーブル           |
        // ---------------------------+
        this.final_verdict_table_frame           = null                                                      ;
        this.final_verdict_table_table           = null                                                      ;
        this.final_verdict_table_table_width     = this.employees_table_width / 2 - (this.padding / 2)       ;
        this.final_verdict_table_table_heigth    = ""                                                        ;
        this.final_verdict_data                  = null                                                      ;
        
    }
    
    // 画面名を返す
    getScreenName = () => {return "個人成績評価表";}; 
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面作成                                                             *
    // ************************************************************************
    CreateScreen(){
        
        // ---------------------------+
        // テーブル設定初期化         |
        // ---------------------------+
        this.TableHandler.set_table_data_mousedown_event(null );
        this.TableHandler.set_table_data_mouseup_event  (null );
        this.TableHandler.set_table_data_mouseover_event(null );
        this.TableHandler.set_table_data_mouseout_event (null );
        this.TableHandler.set_select_table              (false);
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.CreateFrame            ();
        this.CreateEmployeesTable   ();
        this.CreateEvaluationTable  ();
        this.CreateExperienceTable  ();
        this.CreateFinalVerdictTable();
        
        this.FooterProcessing();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレーム作成                                                         *
    // ************************************************************************
    CreateFrame(){
        
        if(this.individual_grading_chart_frame != null){return}
        
        // -------------------------------------------------+
        // 要素作成                                         |
        // -------------------------------------------------+
        this.individual_grading_chart_frame_maine    = document.createElement("div");
        this.individual_grading_chart_frame          = document.createElement("div");
        this.individual_grading_chart_frame_margin   = document.createElement("div");
        this.individual_grading_chart_frame_design   = document.createElement("div");
        this.Legend_frame                            = document.createElement("div");
        this.employees_table_frame                   = document.createElement("div");
        this.evaluation_table_frame                  = document.createElement("div");
        this.experience_table_frame                  = document.createElement("div");
        this.final_verdict_table_frame               = document.createElement("div");
        
        // -------------------------------------------------+
        // id登録                                           |
        // -------------------------------------------------+
        this.individual_grading_chart_frame       .classList.add ( 'Maine-Screen-Frame'                                        );
        this.individual_grading_chart_frame_margin.classList.add ( 'Maine-Screen-Frame-margin'                                 );
        this.individual_grading_chart_frame_design.classList.add ( 'Maine-Screen-Frame-Design'                                 );
        this.individual_grading_chart_frame_maine .id            = "IndividualGradingChartScreenModel-Frame"                    ;
        this.Legend_frame                         .id            = "IndividualGradingChartScreenModel-Legend-Frame"             ;
        this.employees_table_frame                .id            = "IndividualGradingChartScreenModel-Employees-Table-Frame"    ;
        this.evaluation_table_frame               .id            = "IndividualGradingChartScreenModel-Evaluation-Table-Frame"   ;
        this.experience_table_frame               .id            = "IndividualGradingChartScreenModel-Experience-Table-Frame"   ;
        this.final_verdict_table_frame            .id            = "IndividualGradingChartScreenModel-Final-Verdict-Table-Frame";
        
        // -------------------------------------------------+
        // 要素入れ込み                                     |
        // -------------------------------------------------+
        this.maine_frame                         .appendChild(this.Legend_frame                         );
        this.Legend_frame                        .appendChild(this.individual_grading_chart_frame_maine );
        this.individual_grading_chart_frame_maine.appendChild(this.individual_grading_chart_frame_margin);
        this.individual_grading_chart_frame_maine.appendChild(this.individual_grading_chart_frame       );
        this.individual_grading_chart_frame      .appendChild(this.individual_grading_chart_frame_design);
        this.individual_grading_chart_frame      .appendChild(this.employees_table_frame                );
        this.individual_grading_chart_frame      .appendChild(this.evaluation_table_frame               );
        this.individual_grading_chart_frame      .appendChild(this.experience_table_frame               );
        this.individual_grading_chart_frame      .appendChild(this.final_verdict_table_frame            );
        
    }
    
// ================================================================================================================================================== //
// ============================================== [ ↓社員テーブル↓ ] ============================================================================== //
// ================================================================================================================================================== //
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブル作成                                                     *
    // ************************************************************************
    CreateEmployeesTable(){
        
        // ---------------------------+
        // 社員テーブルのデータ取得   |
        // ---------------------------+
        let data = this.getSelectEmployeesData();
        
        // ---------------------------+
        // 社員テーブル作成           |
        // ---------------------------+
        this.TableHandler.set_table_width                 ( this.employees_table_width                  );
        this.TableHandler.set_table_height                ( this.employees_table_hieght                 );
        this.TableHandler.set_table_td_odd_color          ( this.set_table_td_odd_color                 );
        this.TableHandler.set_table_td_even_color         ( this.set_table_td_odd_color                 );
        this.TableHandler.set_create_table_column_callback( this.EmployeesTableColumnCreateCallBack     );
        this.TableHandler.set_create_table_data_callback  ( this.EmployeesTableDataCreateCallBack       );
        this.TableHandler.TableProcessing                 ( data,this.employees_table_frame,"Employees" );
        this.employees_table                = this.TableHandler.get_table()                              ;
        this.employees_table.style.position = ""                                                         ;
        this.employees_table.style.margin   = ` auto auto auto auto `                                    ;
        
    }
    

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルに表示するデータを取得する                               *
    // ************************************************************************
    //getEmployeesData(){
    //    
    //    let data = [];
    //    data[0]  = {
    //                "社員番号" : "T001",
    //                "氏名"     : "あいうえおかきくけこさしすせそたちつてと",
    //                "生年月日" : "2024年04月10日",
    //                "年齢"     : "51歳",
    //                "入社日"   : "2033年07月12日",
    //                "勤続年数" : "10年",
    //                "学歴"     : "専門卒(2年)",
    //                "基本給"   : "23000",
    //                "ポイント" : "",
    //    }
    //    
    //    return data;
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルのカラム作成時のコールバック処理                         *
    // ************************************************************************
    EmployeesTableColumnCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            // -----------------------+
            // データの並び順         |
            // -----------------------+
            case "No":
                
                return null;
                
            break;
            
            // -----------------------+
            // 社員番号               |
            // -----------------------+
            case "社員番号":
                
                elem.style.width = 100;
                
            break;
            
            // -----------------------+
            // 氏名                   |
            // -----------------------+
            case "氏名":
                
                elem.style.width = 320;
                
            break;
            
            // -----------------------+
            // 生年月日               |
            // -----------------------+
            case "生年月日":
                
                elem.style.width = 130;
                
            break;
            
            // -----------------------+
            // 年齢                   |
            // -----------------------+
            case "年齢":
                
                elem.style.width = 70;
                
            break;
            
            // -----------------------+
            // 入社日                 |
            // -----------------------+
            case "入社日":
                
                elem.style.width = 130;
                
            break;
            
            // -----------------------+
            // 勤続年数               |
            // -----------------------+
            case "勤続年数":
                
                elem.style.width = 70;
                
            break;
            
            // -----------------------+
            // 学歴                   |
            // -----------------------+
            case "学歴":
                
                elem.style.width = 150;
                
            break;
            
            // -----------------------+
            // 基本給                 |
            // -----------------------+
            case "基本給":
                
                elem.style.width   = 150;
                
            break;
            
            // -----------------------+
            // ポイント               |
            // -----------------------+
            case "ポイント":
                
                elem.id           = ""              ;
                this.clone_column = elem.cloneNode();
                let pt            = elem.cloneNode();
                let Expt          = elem.cloneNode();
                pt.innerText      = "pt"            ;
                Expt.innerText    = "Expt"          ;
                elem.rowSpan      = 2               ;
                
                tr.appendChild(elem);
                tr.appendChild(pt  );
                tr.appendChild(Expt);
                
                return null;
                
            break;
            
        }
        
        elem.style.height =  this.td_height
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルのテーブルデータ作成後のコールバック処理                 *
    // ************************************************************************
    EmployeesTableDataCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "No":
                return null;
            break;
            
            case "基本給":
                elem.style.backgroundColor = this.salary_background_color;
            break;
            
            case "ポイント":
                
                let pt   = elem.cloneNode();
                let Expt = elem.cloneNode();
                tr.appendChild(pt  );
                tr.appendChild(Expt);
                return null;
                
            break;
            
        }
        
        elem.style.height =  this.td_height;
        
        return elem;
        
    }
    
// ================================================================================================================================================== //
// ============================================== [ ↑社員テーブル↑ ] ============================================================================== //
// ================================================================================================================================================== //
    
    
// ================================================================================================================================================== //
// ============================================== [ ↓評価テーブル↓ ] ============================================================================== //
// ================================================================================================================================================== //
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価テーブル作成                                                     *
    // ************************************************************************
    CreateEvaluationTable(){
        
        let data = this.getEvaluationData();
        let employees_table_rect      = this.employees_table.getBoundingClientRect();
        
        //this.TableHandler.set_table_width                 ( this.evaluation_table_width                   )                           ;
        //this.TableHandler.set_table_height                ( this.evaluation_table_height                  )                           ;
        
        this.TableHandler.direct_table().set_table_css("IndividualGradingChartScreenModel-Evaluation-Table");
        
        this.TableHandler.set_table_td_odd_color          ( this.set_table_td_odd_color                   )                           ;
        this.TableHandler.set_table_td_even_color         ( this.set_table_td_even_color                  )                           ;
        this.TableHandler.set_create_table_column_callback( this.EvaluationTableColumnCreateCallBack      )                           ;
        this.TableHandler.set_create_table_data_callback  ( this.EvaluationTableDataCreateCallBack        )                           ;
        this.TableHandler.TableProcessing                 ( data,this.evaluation_table_frame,"Evaluation" )                           ;
        this.evaluation_table                = this.TableHandler.get_table()                                                          ;
        this.evaluation_table.style.position = ""                                                                             ;
        //this.evaluation_table.style.top      = (employees_table_rect["top"] + this.padding  + this.td_height * 2) - this.header_height;
        this.evaluation_table.style.overFlow = "scroll"                          
        this.TableHandler.direct_table().set_table_css(null);                                                     ;
        
    }
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価テーブルに表示するデータを取得する                               *
    // ************************************************************************
    //getEvaluationData(){
    //    
    //    let data = [];
    //    
    //    for(let i=0;i<15;i++){
    //    data[i]  = {
    //                    "取得タイトル" : "基本情報",
    //                    "pt"           : "1",
    //                    "Expt"         : "1",
    //                    
    //        }
    //    }
    //    return data;
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価テーブルのカラム作成時のコールバック処理                         *
    // ************************************************************************
    EvaluationTableColumnCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "社員番号":
                
                elem.style.width = 100;
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価テーブルのテーブルデータ作成後のコールバック処理                 *
    // ************************************************************************
    EvaluationTableDataCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "取得タイトル":
                
                elem.style.width     = 510    ;
                
            break;
            
            case "pt":
                elem.style.width     = 40     ;
                elem.style.textAlign = "right";
            break;
            
            case "Expt":
                elem.style.width     = 40     ;
                elem.style.textAlign = "right";
            break;
            
        }
        
        return elem;
        
    }
    
    
// ================================================================================================================================================== //
// ============================================== [ ↑評価テーブル↑ ] ============================================================================== //
// ================================================================================================================================================== //
    
    
// ================================================================================================================================================== //
// ============================================== [ ↓経験テーブル↓ ] ============================================================================== //
// ================================================================================================================================================== //
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   経験テーブル作成                                                     *
    // ************************************************************************
    CreateExperienceTable(){
        
        this.experience_data = this.getExperienceData();
        
        // ----------------------------+
        // IT・IT年数テーブル          |
        // ----------------------------+
        this.TableHandler.set_table_width                   ( this.IT_non_It_table_width                  )                                ;
        this.TableHandler.set_table_height                  ( this.IT_non_It_table_height                 )                                ;
        this.TableHandler.set_table_td_odd_color            ( this.set_table_td_odd_color                 )                                ;
        this.TableHandler.set_table_td_even_color           ( this.set_table_td_odd_color                 )                                ;
        this.TableHandler.set_create_table_column_callback  ( this.ExperienceTableColumnCreateCallBack    )                                ;
        this.TableHandler.set_create_table_data_callback    ( this.ExperienceTableDataCreateCallBack      )                                ;
        this.TableHandler.TableProcessing                   ( this.experience_data["it_non_it"],this.experience_table_frame,"Experience")  ;
        this.IT_non_It_table = this.TableHandler.get_table  ();
        
        // ---------------------------+
        // ITポイントテーブル         |
        // ---------------------------+
        this.TableHandler.set_table_width                   ( this.IT_table_width                         )                                ;
        this.TableHandler.set_table_height                  ( this.IT_table_height                        )                                ;
        this.TableHandler.TableProcessing                   ( this.experience_data["IT"],this.experience_table_frame,"Experience")         ;
        this.IT_table                                      = this.TableHandler.get_table()                                                 ;
        this.IT_table.style.left                           = ""                                                                            ;
        this.IT_table.style.right                          = 0                                                                             ;
        this.IT_table.style.top                            = this.td_height                                                                ;
        
        // ---------------------------+
        // IT右矢印                   |
        // ---------------------------+
        let IT_right_arrow                                 = document.createElement("div")                                                 ;
        IT_right_arrow.innerText                           = "➡"                                                                          ;
        IT_right_arrow.style.color                         = this.IT_background_color                                                      ;
        IT_right_arrow.style.font                          = "bold 50px Avenir"                                                            ;
        IT_right_arrow.style.userSelect                    = "none"                                                                        ;
        IT_right_arrow.style.position                      = "absolute"                                                                    ;
        IT_right_arrow.style.top                           = this.td_height                                                                ;
        IT_right_arrow.style.left                          = this.IT_non_It_table_width + this.padding                                     ;
        this.experience_table_frame.appendChild             (IT_right_arrow)                                                               ;
        
        // ---------------------------+
        // IT以外ポイントテーブル     |
        // ---------------------------+
        this.TableHandler.set_table_width                   ( this.non_IT_table_width                     )                                ;
        this.TableHandler.set_table_height                  ( this.non_IT_table_height                    )                                ;
        this.TableHandler.TableProcessing                       ( this.experience_data["nonIT"],this.experience_table_frame,"Experience")      ;
        this.IT_table                                      = this.TableHandler.get_table()                                                 ;
        this.IT_table.style.top                            = this.td_height * 4 + 50 + this.padding * 2                                    ;
        
        // ---------------------------+
        // IT以外下矢印               |
        // ---------------------------+
        let non_IT_down_arrow                              = document.createElement("div")                                                 ;
        non_IT_down_arrow.innerText                        = "➡"                                                                          ;
        non_IT_down_arrow.style.color                      = this.non_IT_background_color                                                  ;
        non_IT_down_arrow.style.font                       = "bold 50px Avenir"                                                            ;
        non_IT_down_arrow.style.userSelect                 = "none"                                                                        ;
        non_IT_down_arrow.style.position                   = "absolute"                                                                    ;
        non_IT_down_arrow.style.top                        = this.td_height * 3 + this.padding                                             ;
        non_IT_down_arrow.style.left                       = (this.non_IT_table_width - 50 )/ 2                                            ;
        non_IT_down_arrow.style.transform                  =  "rotate(90deg)"                                                              ;
        this.experience_table_frame.appendChild             (non_IT_down_arrow)                                                            ;
        
        // ---------------------------+
        // IT以外右矢印               |
        // ---------------------------+
        let non_IT_right_arrow                             = document.createElement("div")                                                 ;
        non_IT_right_arrow.innerText                       = "➡"                                                                          ;
        non_IT_right_arrow.style.color                     = this.non_IT_background_color                                                  ;
        non_IT_right_arrow.style.font                      = "bold 50px Avenir"                                                            ;
        non_IT_right_arrow.style.userSelect                = "none"                                                                        ;
        non_IT_right_arrow.style.position                  = "absolute"                                                                    ;
        non_IT_right_arrow.style.top                       = this.td_height * 4 + 50 + this.padding * 2                                    ;
        non_IT_right_arrow.style.left                      = this.IT_non_It_table_width + this.padding                                     ;
        this.experience_table_frame.appendChild             (non_IT_right_arrow)                                                           ;
        
        // ---------------------------+
        // 現在テーブル               |
        // ---------------------------+
        this.TableHandler.set_table_width                   ( this.current_table_width                    )                                ;
        this.TableHandler.set_table_height                  ( this.current_table_height                   )                                ;
        this.TableHandler.TableProcessing                       ( this.experience_data["current"],this.experience_table_frame,"Experience")    ;
        this.current_table                                 = this.TableHandler.get_table()                                                 ;
        this.current_table.style.left                      = ""                                                                            ;
        this.current_table.style.right                     = 0                                                                             ;
        this.current_table.style.top                       = this.td_height * 3 + 50 + this.padding * 2                                    ;
        
    }
    

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   経験テーブルに表示するデータを取得する                               *
    // ************************************************************************
    //getExperienceData(){
    //    
    //    let it_non_it = [];
    //    it_non_it[0]  = {
    //                "IT経験"     : "1年",
    //                
    //                
    //                
    //                
    //                
    //    }
    //    
    //    it_non_it[1]  = {
    //                
    //                "IT以外"     : "2年",
    //                
    //                
    //                
    //                
    //    }
    //    
    //    
    //    let it_experience_pt     = [];
    //    it_experience_pt[0] = {"IT経験(pt)":"12pt"};
    //    
    //    let non_it_experience_pt = [];
    //    non_it_experience_pt[0] = {"IT以外(pt)":"4pt" } ;
    //    
    //    let current = [];
    //    current[0] = {"入社年数" : "3年"
    //                 
    //    };
    //    current[1] = { "入社年代" : "20代"}
    //    
    //    let current_pt = 4;
    //    
    //    return {"it_non_it" : it_non_it, "IT" : it_experience_pt, "nonIT" : non_it_experience_pt, "current" : current,"current_pt":current_pt};
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   経験テーブルのカラム作成時のコールバック処理                         *
    // ************************************************************************
    ExperienceTableColumnCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "IT経験":
                
                elem.colSpan = 2;
                elem.innerText = "社会人歴(中途)";
                elem.style.height = this.td_height;
                
            break;
            
            case "IT経験(pt)":
                
                elem.style.backgroundColor = this.IT_background_color;
                elem.style.width = 250;
                elem.style.height = this.td_height;
                
            break;
            
            case "IT以外(pt)":
                
                elem.style.backgroundColor = this.non_IT_background_color;
                elem.style.width = 250;
                elem.style.height = this.td_height;
                
            break;
            
            case "入社年数":
                
                elem.colSpan = 2;
                elem.innerText = "現在";
                elem.style.width = 250;
                elem.style.backgroundColor = this.non_IT_background_color;
                
                
            break;
            
            case "入社年代":
                return null
            break;
            
        }
        
        elem.style.height = this.td_height;
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   経験テーブルのテーブルデータ作成後のコールバック処理                 *
    // ************************************************************************
    ExperienceTableDataCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "IT経験":
                
                let IT = this.clone_column.cloneNode();
                IT.style.backgroundColor = this.IT_background_color;
                IT.style.width = 150;
                IT.innerText = "IT経験";
                tr.appendChild(IT)
                
                elem.style.width  = 150;
                elem.style.height = this.td_height
                
            break;
            
            case "IT以外":
                
                
                let non_IT = this.clone_column.cloneNode();
                non_IT.style.backgroundColor = this.non_IT_background_color;
                non_IT.style.width = 150;
                non_IT.innerText = "IT以外経験";
                tr.appendChild(non_IT)
                
                elem.style.width = 100;
                elem.style.height = this.td_height
                
            break;
            
            case "IT経験(pt)":
                
                //elem.style.backgroundColor = this.IT_background_color;
                elem.style.width = 100;
                elem.style.height = this.td_height;
                
            break;
            
            case "IT以外(pt)":
                
                //elem.style.backgroundColor = this.IT_background_color;
                elem.style.width = 100;
                elem.style.height = this.td_height;
                
            break;
            
            case "入社年数":
                
                let joined_tr = tr.cloneNode();
                let joined_year = elem.innerText;
                
                let heading_th = this.clone_column.cloneNode();
                let joined_th  = this.clone_column.cloneNode();
                
                heading_th.innerText = "入社";
                heading_th.style.backgroundColor = this.non_IT_background_color;
                heading_th.style.width = 125;
                heading_th.style.height = this.td_height;
                tr.appendChild(heading_th);
                
                joined_th.innerText = `${joined_year}目`;
                joined_th.style.backgroundColor = this.non_IT_background_color;
                joined_th.style.width           = 125;
                joined_th.style.height = this.td_height;
                tr.appendChild(joined_th);
                
                //frame.appendChild(joined_tr);
                
                
                return null;
                
            break;
            
            case "入社年代":
                
                //let joined_tr = tr.cloneNode();
                let age = elem.innerText;
                //
                //let heading_th = this.clone_column.cloneNode();
                let age_th  = this.clone_column.cloneNode();
                //
                age_th.innerText = `${age}`;
                age_th.style.backgroundColor = this.non_IT_background_color;
                age_th.style.width = 125;
                age_th.style.height = this.td_height;
                tr.appendChild(age_th);
                
                elem.innerText = this.experience_data["current_pt"];
                elem.style.width = 125;
                elem.style.height = this.td_height;
                //
                //joined_th.innerText = `${joined_year}目`;
                //joined_th.style.backgroundColor = this.non_IT_background_color;
                //joined_th.style.width           = 125;
                //joined_th.style.height = this.td_height;
                //joined_tr.appendChild(joined_th);
                //
                //frame.appendChild(joined_tr);
                
                
            break;
            
        }
        
        elem.style.height = this.td_height;
        
        return elem;
        
    }
    
    
// ================================================================================================================================================== //
// ============================================== [ ↑経験テーブル↑ ] ============================================================================== //
// ================================================================================================================================================== //
    
    
// ================================================================================================================================================== //
// ============================================== [ ↓最終評価テーブル↓] =========================================================================== //
// ================================================================================================================================================== //    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   最終評価テーブル作成                                                 *
    // ************************************************************************
    CreateFinalVerdictTable(){
        
        this.final_verdict_data = this.getFinalVerdictData();
        
        this.TableHandler.set_table_width                 ( this.final_verdict_table_table_width                 );
        this.TableHandler.set_table_height                ( this.final_verdict_table_table_heigth                         );
        this.TableHandler.set_create_table_column_callback( this.FinalVerdictTableColumnCreateCallBack    );
        this.TableHandler.set_create_table_data_callback  ( this.FinalVerdictTableDataCreateCallBack      );
        this.TableHandler.TableProcessing                     ( this.final_verdict_data,this.final_verdict_table_frame,"FinalVerdict" );
        this.final_verdict_table_table = this.TableHandler.get_table(                                                                       );
        
    }
    

    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルに表示するデータを取得する                               *
    // ************************************************************************
    //getFinalVerdictData(){
    //    
    //    let data = [];
    //    data[0]  = {"第一カラム" : ""};
    //    data[1]  = {
    //                "前々年度-前期-年月"   : "2022年1月" ,
    //                "前々年度-前期-pt"     : "1"         ,
    //                "前々年度-前期-Expt"   : "12日"      ,
    //                "前年度-前期-年月"     : "2023年1月" ,
    //                "前年度-前期-pt"       : "3"         ,
    //                "前年度-前期-Expt"     : "12"        ,
    //                "今年度-前期-年月"     : "2024年1月" ,
    //                "今年度-前期-pt"       : "2"         ,
    //                "今年度-前期-Expt"     : "9"         ,
    //    }
    //    data[2]={
    //                "前々年度-後期-年月"   : "2022年10月",
    //                "前々年度-後期-pt"     : "1"         ,
    //                "前々年度-後期-Expt"   : "12日"      ,
    //                "前年度-後期-年月"     : "2023年10月",
    //                "前年度-後期-pt"       : "3"         ,
    //                "前年度-後期-Expt"     : "12"        ,
    //                "今年度-後期-年月"     : "2024年1月" ,
    //                "今年度-後期-pt"       : "2"         ,
    //                "今年度-後期-Expt"     : "9"         ,
    //
    //
    //    }
    //    
    //    data[3] = {
    //                "過去前々年度以前-pt"  :"1"          ,
    //                "過去前々年度以前-Expt":"3"          ,
    //                "総合計-pt"            :"12"         ,
    //                "総合計-Expt"          :"1"          ,
    //    }
    //    
    //    
    //    
    //    return data;
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルのカラム作成時のコールバック処理                         *
    // ************************************************************************
    FinalVerdictTableColumnCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "第一カラム":
                
                let heading_th   = this.clone_column.cloneNode();
                let two_years_ago_th = this.clone_column.cloneNode();
                let last_year_th     = this.clone_column.cloneNode();
                let year_th          = this.clone_column.cloneNode();
                
                heading_th.innerText    = "";
                heading_th.style.width  = 140;
                heading_th.style.height = this.td_height;
                heading_th.rowSpan      = 2;
                tr.appendChild(heading_th);
                
                two_years_ago_th.innerText    = "前々年度";
                two_years_ago_th.style.width  = 150;
                two_years_ago_th.style.height = this.td_height;
                two_years_ago_th.colSpan      = 3;
                tr.appendChild(two_years_ago_th);
                
                last_year_th.innerText    = "前年度";
                last_year_th.style.width  = 150;
                last_year_th.style.height = this.td_height;
                last_year_th.colSpan      = 3;
                tr.appendChild(last_year_th);
                
                year_th.innerText         = "今年度";
                year_th.style.width       = 150;
                year_th.style.height      = this.td_height;
                year_th.colSpan           = 3;
                tr.appendChild(year_th);
                
                tr.style.borderBottom = "";
                
                return null;
                
            break;
            
            case "第二カラム":

                
                
                
                
            break;
            

            
            case "ポイント":
                
                return null;
                
            break;
            

        }
        
        elem.style.height =  this.td_height
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員テーブルのテーブルデータ作成後のコールバック処理                 *
    // ************************************************************************
    FinalVerdictTableDataCreateCallBack = (elem,key,frame,tr) =>{
        
        switch(key){
            
            case "第一カラム":
                let year_th          = this.clone_column.cloneNode();
                let pt_th            = this.clone_column.cloneNode();
                let Expt_th          = this.clone_column.cloneNode();
                
                year_th.innerText = "年月";
                year_th.style.width  = 70;
                year_th.style.height = this.td_height;
                
                pt_th.innerText = "pt";
                pt_th.style.width  = 40;
                pt_th.style.height = this.td_height;
                
                Expt_th.innerText = "Expt";
                Expt_th.style.width  = 40;
                Expt_th.style.height = this.td_height;
                
                tr.appendChild(year_th.cloneNode(true));
                tr.appendChild(pt_th.cloneNode(true)  );
                tr.appendChild(Expt_th.cloneNode(true));
                tr.appendChild(year_th.cloneNode(true));
                tr.appendChild(pt_th.cloneNode(true)  );
                tr.appendChild(Expt_th.cloneNode(true));
                tr.appendChild(year_th.cloneNode(true));
                tr.appendChild(pt_th.cloneNode(true)  );
                tr.appendChild(Expt_th.cloneNode(true));
                
                return null;
            break;
            
            case "第二カラム":

                
            break;
            
            case "前々年度-前期-年月":
                
                let early_th          = this.clone_column.cloneNode();
                
                early_th.innerText    = "前期";
                early_th.style.width  = 140;
                early_th.style.height = this.td_height;
                tr.appendChild(early_th);
                
                
            break;
            
            case "前々年度-後期-年月":
                
                let final_th          = this.clone_column.cloneNode();
                
                final_th.innerText    = "後期";
                final_th.style.width  = 140;
                final_th.style.height = this.td_height;
                tr.appendChild(final_th);
                
                
            break;
            
            case "過去前々年度以前-pt":
                
                let past_th          = this.clone_column.cloneNode();
                
                past_th.innerText    = "過去前々年度以前";
                past_th.style.height = this.td_height;
                past_th.colSpan = 2;
                tr.appendChild(past_th);
                
            break;
            
            case "総合計-pt":
                
                let grandcount_th          = this.clone_column.cloneNode();
                
                grandcount_th.innerText    = "総合計";
                grandcount_th.style.height = this.td_height;
                grandcount_th.colSpan = 4;
                tr.appendChild(grandcount_th);
                
            break;
            
        }
        
        elem.style.height =  this.td_height;
        
        return elem;
        
    }
    
    
    
    
    
    
    
    
    
    
// ================================================================================================================================================== //
// ============================================== [ ↑最終評価テーブル↑] =========================================================================== //
// ================================================================================================================================================== //    
    
    
//    // ************************************************************************
//    // [処理概要]                                                             *
//    //   フッターを作成する                                                   *
//    // ************************************************************************
//    FooterProcessing = () =>{
//        
//        if(
//           this.company_evaluation_button_event == null &&
//           this.self_evaluation_button_event    == null &&
//           this.finish_button_event             == null
//        )
//        {
//            this.FooterProcessing_obj.set_button_data("","#ffffff","#aaaaaa",this.finish_button_event,true            );
//            this.FooterProcessing_obj.set_button_data("データ出力"    ,"#ffffff","#5a4abd",this.export_button_event            );
//            this.FooterProcessing_obj.set_button_data("","#ffffff","#aaaaaa",this.finish_button_event            );
//        }else{
//            
//            if(this.company_evaluation_button_event != null){this.FooterProcessing_obj.set_button_data("会社評価に戻る","#ffffff","#bf2f2f",this.company_evaluation_button_event,true);};
//            if(this.self_evaluation_button_event    != null){this.FooterProcessing_obj.set_button_data("自己評価に戻る","#ffffff","#7f2fbf",this.self_evaluation_button_event   );};
//                                                             this.FooterProcessing_obj.set_button_data("データ出力"    ,"#ffffff","#5a4abd",this.export_button_event            );
//            if(this.finish_button_event             != null){this.FooterProcessing_obj.set_button_data("評価を終了する","#ffffff","#bf4c00",this.finish_button_event            );};
//            
//        }
//        
//        this.FooterProcessing_obj.set_footer_height(this.footer_height);
//        this.FooterProcessing_obj.create();
//        this.FooterProcessing_obj.create_button();
//        
//        if(
//           this.company_evaluation_button_event == null &&
//           this.self_evaluation_button_event    == null &&
//           this.finish_button_event             == null
//        )
//        {
//            
//            window.removeEventListener("resize",this.FooterProcessing_obj.resize);
//            
//            let button = this.FooterProcessing_obj.get_footer().children;
//            this.left_arrow_button = button[0];
//            let export_button      = button[1];
//            this.right_arrow_button  = button[2];
//            
//            this.left_arrow_button.style.clipPath = "polygon(0 50%, 100%  0 , 100% 100%)";
//            this.left_arrow_button.style.width = 80;
//            this.right_arrow_button.style.clipPath = "polygon(0  0 , 100% 50%,   0  100%)";
//            this.right_arrow_button.style.width = 80;
//            
//            let export_button_rect = export_button.getBoundingClientRect();
//            
//            export_button.style.left = (document.body.clientWidth - export_button_rect["width"]) / 2;
//            this.left_arrow_button.style.left = parseInt(export_button.style.left) - 80 - 20;
//            this.right_arrow_button.style.left  = parseInt(export_button.style.left) + 20 + export_button_rect["width"];
//            
//            
//            this.right_arrow_button.addEventListener("mouseup",this.RightArrowEvent);
//            this.left_arrow_button .addEventListener("mouseup",this.LeftArrowEvent );
//            window.addEventListener("resize",this.resize);
//        }
//        
//    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価出力                                                             *
    // ************************************************************************
    ExportButtonEvent = () =>{
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   右矢印ボタンの処理                                                   *
    // ************************************************************************
    RightArrowEvent = () =>{
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   左矢印ボタンの処理                                                   *
    // ************************************************************************
    LeftArrowEvent = () =>{
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズ時の処理                                                     *
    // ************************************************************************
    resize(){
        
        this.individual_grading_chart_frame_front.style.width  = document.body.clientWidth;
        this.individual_grading_chart_frame_front.style.height = document.body.clientHeight - (this.header_height+this.footer_height);
        
        //this.individual_grading_chart_frame.style.width  = this.maine_frame_width;
        //this.individual_grading_chart_frame.style.height = this.individual_grading_chart_frame_height//document.body.clientHeight - (this.header_height+this.footer_height);
        if((parseInt(this.maine_frame.style.height) - parseInt(this.individual_grading_chart_frame_back.style.height)) / 2 >= 0){
            this.individual_grading_chart_frame_back.style.top = (parseInt(this.maine_frame.style.height) - parseInt(this.individual_grading_chart_frame_back.style.height)) / 2
            let employees_table_rect                           = this.employees_table.getBoundingClientRect();
            this.evaluation_table.style.top                    = (employees_table_rect["top"] + this.padding  + this.td_height * 2) - this.header_height;
        };
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish(){
        this.maine_frame.innerHTML = "";
        window.removeEventListener("resize",this.resize);
    }
    
// ============================================
    
    set_company_evaluation_button_event = (set) => { this.company_evaluation_button_event = set; };
    set_self_evaluation_button_event    = (set) => { this.self_evaluation_button_event    = set; };
    set_finish_button_event             = (set) => { this.finish_button_event             = set; };
    
    
    
}
