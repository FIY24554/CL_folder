// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   評価管理画面
// *****************************************************************************************************************************************************************************************************
class EvaluationAdminSelectScreen extends SelectScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        super(elem);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "評価管理画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen = () =>{
        
        // 遷移用ボタンを作成
        this.SettingBasisButtonData();
        
        // 画面作成
        super.CreateScreen();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンデータセット                                               *
    // ************************************************************************
    SettingBasisButtonData(){
        
        this.set_basis_button_data(1,"会社評価管理","Company-Evaluation-Admin-Screen-Button","Company-Evaluation-Admin-Screen-Button-Text","Company-Evaluation-Admin-Screen-Button-Event",this.company_evaluation_admin_screen);          // 会社評価管理  画面
        this.set_basis_button_data(1,"自己評価管理","Self-Evaluation-Admin-Screen-Button","Self-Evaluation-Admin-Screen-Button-Text","Self-Evaluation-Admin-Screen-Button-Event",this.self_evaluation_admin_screen   );          // 自己評価管理  画面
        
    }
    
    resize = () => {
        super.resize();
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_company_evaluation_admin_screen = (set) => {this.company_evaluation_admin_screen = set;};       // 会社評価管理画面遷移
    set_self_evaluation_admin_screen    = (set) => {this.self_evaluation_admin_screen    = set;};       // 自己評価管理画面遷移
    
}


