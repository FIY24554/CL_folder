// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   メイン画面選択画面
// *****************************************************************************************************************************************************************************************************
class MaineSelectScreen extends SelectScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        // 親コンストラクタ呼び出し
        super(elem);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "メイン画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面作成                                                             *
    // ************************************************************************
    CreateScreen = () =>{
        
        // ---------------------------------+
        // 遷移用ボタンを作成               |
        // ---------------------------------+
        this.SettingBasisButtonData ();                                                             // 基本ボタン     データをセット
        this.SettingFooterButtonData();                                                             // フッターボタン データをセット
        
        // ---------------------------------+
        // 画面作成                         |
        // ---------------------------------+
        super.CreateScreen();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンデータセット                                               *
    // ************************************************************************
    SettingBasisButtonData(){
        
        this.set_basis_button_data(1,"評 価 実 施","Evaluation-Perform-Button","Evaluation-Perform-Button-Text","Evaluation-Perform-Button-Event",this.evaluation_perform_transition);
        this.set_basis_button_data(1,"評 価 出 力","Evaluation-Output-Button" ,"Evaluation-Output-Button-Text" ,"Evaluation-Output-Button-Event" ,this.evaluation_output_transition );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターボタンセット                                                 *
    // ************************************************************************
    SettingFooterButtonData(){
        
        this.set_footer_button_data("社 員 管 理"      ,'Employees-Admin-Button' ,'Employees-Admin-Button-Text' ,'Employees-Admin-Button-Event' ,this.employees_admin_transition );
        this.set_footer_button_data("評 価 管 理"      ,'Evaluation-Admin-Button','Evaluation-Admin-Button-Text','Evaluation-Admin-Button-Event',this.evaluation_admin_transition);
        this.set_footer_button_data("給 与 テ ー ブ ル",'Salary-Table-Button'    ,'Salary-Table-Button-Text'    ,'Salary-Table-Button-Event'    ,this.salary_table_transition    );
        this.set_footer_button_data("給 与 テ ー ブ ル管理",'Salary-Table-Button'    ,'Salary-Table-Button-Text'    ,'Salary-Table-Button-Event'    ,this.salary_table_admin_transition    );
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_evaluation_perform_transition = (set) => {this.evaluation_perform_transition = set;};       // 評価実施     画面遷移
    set_evaluation_output_transition  = (set) => {this.evaluation_output_transition  = set;};       // 評価出力     画面遷移
    set_employees_admin_transition    = (set) => {this.employees_admin_transition    = set;};       // 社員管理     画面遷移
    set_evaluation_admin_transition   = (set) => {this.evaluation_admin_transition   = set;};       // 評価管理     画面遷移
    set_salary_table_transition       = (set) => {this.salary_table_transition       = set;};       // 給与テーブル 画面遷移
    
    set_salary_table_admin_transition = (set) => {this.salary_table_admin_transition = set;};
    
}


