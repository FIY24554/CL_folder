



// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   メイン画面
// *****************************************************************************************************************************************************************************************************
class MaineSelectScreen extends SelectScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        // 親コンストラクタ呼び出し
        super(elem);
        
        // 基本ボタンのスタイル変更
        this.set_basis_button_shape     ( "1vh" );
        this.set_basis_button_font_size ( 25    );
        this.set_basis_button_width     ( 400   );
        this.set_basis_button_height    ( 100   );
        
        // フッターボタンのスタイル変更
        this.set_footer_button_width    ( 300   );
        this.set_footer_button_height   ( 50    );
        this.set_footer_button_font_size( 18    );
        this.set_footer_button_shape    ( "1vh" );
        
        
        
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
        
        // 遷移用ボタンを作成
        this.SettingBasisButtonData();
        this.SettingFooterButtonData();
        
        // 画面作成
        super.CreateScreen();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   基本ボタンデータセット                                               *
    // ************************************************************************
    SettingBasisButtonData(){
        
        this.set_basis_button_data(1,"評 価 実 施","#bf4c00","#ffffff",this.evaluation_perform_transition);
        this.set_basis_button_data(1,"評 価 出 力","#5a4abd","#ffffff",this.evaluation_output_transition );
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フッターボタンセット                                                 *
    // ************************************************************************
    SettingFooterButtonData(){
        
        this.set_footer_button_data("社 員 管 理"      ,"#4a7b52","#ffffff",this.employees_admin_transition );
        this.set_footer_button_data("評 価 管 理"      ,"#4a7b52","#ffffff",this.evaluation_admin_transition);
        this.set_footer_button_data("給 与 テ ー ブ ル","#4a7b52","#ffffff",this.salary_table_transition    );
        
    }
    
    resize = () => {
        super.resize();
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_evaluation_perform_transition = (set) => {this.evaluation_perform_transition = set;};       // 評価実施画面遷移
    set_evaluation_output_transition  = (set) => {this.evaluation_output_transition  = set;};       // 評価出力画面遷移
    set_employees_admin_transition    = (set) => {this.employees_admin_transition    = set;};       // 社員管理画面遷移
    set_evaluation_admin_transition   = (set) => {this.evaluation_admin_transition   = set;};       // 評価管理画面遷移
    set_salary_table_transition       = (set) => {this.salary_table_transition       = set;};       // 給与テーブル遷移
    
    
}



