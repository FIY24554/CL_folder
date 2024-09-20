





// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   給与テーブル画面
// *****************************************************************************************************************************************************************************************************
class SalaryTableScreen{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        //super(elem);
        
        this.maine_frame = elem;
        
        
        this.ButtonProcessing = new ButtonProcessing();
        this.TableHandler = new TableHandler();
        
        
        this.td_height = "30";
        
        
        
        this.salary_table_frame = null;
        this.salary_table_width = 1100;
        this.salary_table_height = "";
        
        this.left_grade_table = null;
        this.right_grade_table = null;
        this.grade_table_width  =70;
        this.grade_table_height ="";
        this.grade_background_color = "#ffdab9";
        
        
        this.LEVEL_name = "";
        this.LEVEL_pt_width     = 50;
        this.LEVEL_Expt_width   = 50;
        this.LEVEL_salary_width = 102;
        
        this.LEVEL1_table_width  = 152;
        this.LEVEL1_table_height = "";
        this.LEVEL1_table        = null;
        
        this.LEVEL2_table_width  = 202;
        this.LEVEL2_table_height = "";
        this.LEVEL2_table        = null;
        
        this.LEVEL3_table_width  = 202;
        this.LEVEL3_table_height = "";
        this.LEVEL3_table        = null;
        
        this.LEVEL4_table_width  = 202;
        this.LEVEL4_table_height = "";
        this.LEVEL4_table        = null;
        
        this.LEVEL5_table_width  = 202;
        this.LEVEL5_table_height = "";
        this.LEVEL5_table        = null;
        
        //this.CreateScreen();
        
    }
    
    getScreenName = () =>{return "給与テーブル画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen = () => {
        
        this.CreateFrame();
        
        this.CreateSalaryTable();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレームを作成する                                                   *
    // ************************************************************************
    CreateFrame = () => {
        
        // 
        // 
        // 
        this.salary_table_frame = document.createElement("div");
        this.salary_table_frame.style.width  = this.salary_table_width;
        this.salary_table_frame.style.height = this.salary_table_height;
        this.salary_table_frame.style.margin = "50 auto auto auto";
        this.salary_table_frame.style.position = "relative";
        this.salary_table_frame.style.display = "flex";
        this.salary_table_frame.style.border         = "3px solid black"     ;
        this.salary_table_frame.style.boxShadow      = "0 1px 3px 0 black"   ;
        this.salary_table_frame.style.borderBottom   = "5px solid #404040"   ;
        
        //this.salary_table_frame.style.backgroundColor= "#123456"
        this.maine_frame.appendChild(this.salary_table_frame);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   給与テーブル作成                                                     *
    // ************************************************************************
    CreateSalaryTable = () => {
        
        let data = this.getData();
        
        // -------------------------------------+
        // 等級テーブル                         |
        // -------------------------------------+
        this.TableHandler.set_create_table_column_callback( this.TableColumnCreateCallBack                );
        this.TableHandler.set_create_table_data_callback  ( this.TableDataCreateCallBack                  );
        this.TableHandler.set_table_width                 ( this.grade_table_width                        );
        this.TableHandler.set_table_height                ( this.grade_table_height                       );
        this.TableHandler.TableProcessing                     ( data["grade"],this.salary_table_frame,"grade" );
        this.left_grade_table = this.TableHandler.get_table();
        this.left_grade_table.style.position = "";
        this.left_grade_table.style.margin = "0 0 auto 0";
        this.left_grade_table.style.border = "";
        
        
        // -------------------------------------+
        // LEVEL1テーブル                       |
        // -------------------------------------+
        this.LEVEL_name = "レベル1";
        this.TableHandler.set_table_width                 ( this.LEVEL1_table_width                        );
        this.TableHandler.set_table_height                ( this.LEVEL1_table_height                       );
        this.TableHandler.TableProcessing                     ( data["LEVEL1"],this.salary_table_frame,"LEVEL1" );
        this.LEVEL1_table = this.TableHandler.get_table();
        this.LEVEL1_table.style.position = "";
        this.LEVEL1_table.style.margin = "0 0 auto 0";
        this.LEVEL1_table.style.border = "";
        
        // -------------------------------------+
        // LEVEL2テーブル                       |
        // -------------------------------------+
        this.LEVEL_name = "レベル2";
        this.TableHandler.set_table_width                 ( this.LEVEL2_table_width                        );
        this.TableHandler.set_table_height                ( this.LEVEL2_table_height                       );
        this.TableHandler.TableProcessing                     ( data["LEVEL2"],this.salary_table_frame,"LEVEL2" );
        this.LEVEL2_table = this.TableHandler.get_table();
        this.LEVEL2_table.style.position = "";
        this.LEVEL2_table.style.margin = "0 0 auto 0";
        this.LEVEL2_table.style.border = "";
        
        // -------------------------------------+
        // LEVEL3テーブル                       |
        // -------------------------------------+
        this.LEVEL_name = "レベル3";
        this.TableHandler.set_table_width                 ( this.LEVEL3_table_width                        );
        this.TableHandler.set_table_height                ( this.LEVEL3_table_height                       );
        this.TableHandler.TableProcessing                     ( data["LEVEL3"],this.salary_table_frame,"LEVEL3" );
        this.LEVEL3_table = this.TableHandler.get_table();
        this.LEVEL3_table.style.position = "";
        this.LEVEL3_table.style.margin = "0 0 auto 0";
        this.LEVEL3_table.style.border = "";
        
        // -------------------------------------+
        // LEVEL4テーブル                       |
        // -------------------------------------+
        this.LEVEL_name = "レベル4";
        this.TableHandler.set_table_width                 ( this.LEVEL4_table_width                        );
        this.TableHandler.set_table_height                ( this.LEVEL4_table_height                       );
        this.TableHandler.TableProcessing                     ( data["LEVEL4"],this.salary_table_frame,"LEVEL4" );
        this.LEVEL4_table = this.TableHandler.get_table();
        this.LEVEL4_table.style.position = "";
        this.LEVEL4_table.style.margin = "0 0 auto 0";
        this.LEVEL4_table.style.border = "";
        
        // -------------------------------------+
        // LEVEL5テーブル                       |
        // -------------------------------------+
        this.LEVEL_name = "レベル5";
        this.TableHandler.set_table_width                 ( this.LEVEL5_table_width                        );
        this.TableHandler.set_table_height                ( this.LEVEL5_table_height                       );
        this.TableHandler.TableProcessing                     ( data["LEVEL5"],this.salary_table_frame,"LEVEL5" );
        this.LEVEL5_table = this.TableHandler.get_table();
        this.LEVEL5_table.style.position = "";
        this.LEVEL5_table.style.margin = "0 0 auto 0";
        this.LEVEL5_table.style.border = "";
        
        // 
        // 右等級テーブル
        // 
        this.right_grade_table = this.left_grade_table.cloneNode(true);
        this.right_grade_table.style.left  = "";
        this.right_grade_table.style.right = 0;
        this.right_grade_table.style.margin = "0 0 auto 0";
        this.salary_table_frame.appendChild(this.right_grade_table);
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルに表示するデータを取得する                                   *
    // ************************************************************************
    getData(){
        
        let grade = [];
        grade[0]  = {"等級":11};
        
        let LEVEL1 = [];
        let LEVEL2 = [];
        let LEVEL3 = [];
        let LEVEL4 = [];
        let LEVEL5 = [];
        
        for(let i  = 0;i<11;i++){
            LEVEL1[i] = {
                        "pt"   :1*i,
                        "月給" :165000 + (1000*i),
            };
        }
        
        for(let i  = 0;i<11;i++){
            LEVEL2[i] = {
                        "pt"   :5 + 1*i,
                        "Expt" :1,
                        "月給" :170000 + (2000*i),
            };
        }
        
        for(let i  = 0;i<11;i++){
            LEVEL3[i] = {
                        "pt"   :10 + 2*i,
                        "Expt" : 2 + parseInt(i/3),
                        "月給" :185000 + (2500*i),
            }; 
        }
        
        for(let i  = 0;i<11;i++){
            LEVEL4[i] = {
                        "pt"   :35 + 3*i,
                        "Expt" :6 + parseInt(i/2),
                        "月給" :220000 + (12500*i),
            }; 
        }
        
        for(let i  = 0;i<11;i++){
            LEVEL5[i] = {
                        "pt"   :65 + 5*i,
                        "Expt" :15 + i ,
                        "月給" :350000 + (32500*i),
            }; 
        }
        
        return {"grade":grade,"LEVEL1":LEVEL1,"LEVEL2":LEVEL2,"LEVEL3":LEVEL3,"LEVEL4":LEVEL4,"LEVEL5":LEVEL5};
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック処理                               *
    // ************************************************************************
    TableColumnCreateCallBack = (elem,key,frame,tr) => {
        
        switch(key){
            
            // ---------------------------------+
            // 等級                             |
            // ---------------------------------+
            case "等級":
                
                elem.style.height = this.td_height * 2;
                elem.style.width  = this.grade_table_width;
                
            break;
            
            // ---------------------------------+
            // pt                               |
            // ---------------------------------+
            case "pt":
                
                let case_pt_Level_th  = elem.cloneNode();
                let case_pt_pt_th     = elem.cloneNode();
                let case_pt_salary_th = elem.cloneNode();
                let case_pt_level_tr  = tr.cloneNode();
                
                
                case_pt_Level_th.innerText = this.LEVEL_name;
                case_pt_Level_th.colSpan = 2;
                case_pt_Level_th.style.height = this.td_height;
                
                case_pt_pt_th.innerText     = "pt";
                case_pt_pt_th.style.width = this.LEVEL_pt_width;
                case_pt_pt_th.style.height = this.td_height;
                
                case_pt_salary_th.innerText = "月給";
                case_pt_salary_th.style.width = this.LEVEL_salary_width
                case_pt_salary_th.style.height = this.td_height;
                
                case_pt_level_tr.appendChild(case_pt_pt_th    );
                case_pt_level_tr.appendChild(case_pt_salary_th);
                frame.appendChild(case_pt_level_tr);
                
                return case_pt_Level_th;
                
            break;
            
            // ---------------------------------+
            // Expt                             |
            // ---------------------------------+
            case "Expt":
                
                frame.innerHTML = "";
                tr.innerHTML = "";
                
                let case_Expt_Level_th  = elem.cloneNode();
                let case_Expt_pt_th     = elem.cloneNode();
                let case_Expt_Expt_th     = elem.cloneNode();
                let case_Expt_salary_th = elem.cloneNode();
                let case_Expt_level_tr  = tr.cloneNode();
                
                
                
                case_Expt_Level_th.innerText = this.LEVEL_name;
                case_Expt_Level_th.colSpan = 3;
                case_Expt_Level_th.style.height = this.td_height;
                
                case_Expt_pt_th.innerText     = "pt";
                case_Expt_pt_th.style.width = this.LEVEL_pt_width;
                case_Expt_pt_th.style.height = this.td_height;
                
                case_Expt_Expt_th.innerText     = "Expt";
                case_Expt_Expt_th.style.width = this.LEVEL_Expt_width;
                case_Expt_Expt_th.style.height = this.td_height;
                
                case_Expt_salary_th.innerText = "月給";
                case_Expt_salary_th.style.width = this.LEVEL_salary_width
                case_Expt_salary_th.style.height = this.td_height;
                
                case_Expt_level_tr.appendChild(case_Expt_pt_th    );
                case_Expt_level_tr.appendChild(case_Expt_Expt_th    );
                case_Expt_level_tr.appendChild(case_Expt_salary_th);
                frame.appendChild(tr);
                frame.appendChild(case_Expt_level_tr);
                
                return case_Expt_Level_th;
                
            break;
            
            // ---------------------------------+
            // 月給                             |
            // ---------------------------------+
            case "月給":
                return null;
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時のコールバック処理                               *
    // ************************************************************************
    TableDataCreateCallBack = (elem,key,frame,tr) => {
        //console.log("ok")
        switch(key){
            
            case "等級":
                
                let grade_num = elem.innerText;
                let tr_clone  = tr.cloneNode();
                tr.remove();
                
                for(let i = 1;i <= grade_num;i++){
                    
                    let td = elem.cloneNode();
                    let tr = tr_clone.cloneNode();
                    td.innerText = `${i}等級`;
                    td.style.height = this.td_height;
                    td.style.backgroundColor = this.grade_background_color;
                    tr.appendChild(td);
                    frame.appendChild(tr);
                    
                }
                
                return null;
                
            break;
            
        }
        
        elem.style.height = this.td_height;
        return elem;
        
    }
    
    finish = () => {
        this.maine_frame.innerHTML = "";
    }
    
}

