class ScenarioHandler{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        // オブジェクト
        this.HeaderProcessing       = null;                               // ヘッダ作成オブジェクト
        this.MaineScreenCreate  = null;                               // メインフレーム作成オブジェクト
        
        // 要素
        this.maine_screen       = null;                               // メインスクリーンの要素
        
        this.show_screen        = null;                               // 現在表示している画面
        this.before_screen      = null;                               // 前画面
        
        this.MaineSelectScreen            = null;
        this.EvaluationAdminSelectScreen  = null;
        this.EvaluationOutputScreen       = null;
        this.EmployeesAdminScreen         = null;
        this.SelfEvaluationAdminScreen    = null;
        this.CompanyEvaluationAdminScreen = null;
        this.SalaryTableScreen            = null;
        this.CompanyEvaluationScreen      = null;
        this.SelfEvaluationScreen         = null;
        this.IndividualGradingChartScreen = null;
        this.SalaryTableAdminScreen       = null;
        
        this.location_list = [];                            // 画面経路格納用
        
        
        
        
        
        
        
        
        document.addEventListener('dragstart', function(event) {event.preventDefault();});          // テキストがドラッグされるのを回避
        
        // 画面モデルを作成する
        this.CreateScreenModel();
        
        // メイン画面を表示する
        this.CreateMaineSelectScreen();
        
    }
    
    // ヘッダ情報を返す
    getSystemName = () => {return "人事評価システム";};
    getUserName   = () => {return "斎藤 一郎"       ;};
    
// ============================================== [ ↓作成↓ ] ====================================================================================== //
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面のモデルを作成する                                               *
    // ************************************************************************
    CreateScreenModel = () => {
        
        // ---------------------------+
        // ヘッダ                     |
        // ---------------------------+
        this.HeaderProcessing = new HeaderProcessing()                              ;
        this.HeaderProcessing.create()                                          ;
        this.HeaderProcessing.set_back_button_event(this.TransitionBeforeScreen);
        this.HeaderProcessing.set_back_button_text ("戻る"                     );
        this.HeaderProcessing.hide_BackButton()                                 ;
        this.SettingTitle()                                                 ;
        this.SettingUserName()                                              ;
        
        // ---------------------------+
        // メインスクリーン           |
        // ---------------------------+
        this.MaineScreenProcessing = new MaineScreenProcessing()                    ;
        this.MaineScreenProcessing.create()                                     ;
        this.maine_screen      = this.MaineScreenProcessing.get_maine_frame()   ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   メイン選択画面作成                                                   *
    // ************************************************************************
    CreateMaineSelectScreen = () => {
        
        // ---------------------------+
        // メイン選択画面             |
        // ---------------------------+
        // 前表示していた画面がある場合は終了処理を行う
        if(this.show_screen != null){this.show_screen.finish();};
        // ヘッダの戻るボタンを非表示
        this.HeaderProcessing.hide_BackButton();
        // 初期化
        this.MaineSelectScreen = null;
        // 選択画面作成クラスをインスタンス化
        this.MaineSelectScreen = new MaineSelectScreen(this.maine_screen);
        // 現在表示している画面として格納
        this.show_screen       = this.MaineSelectScreen;
        // 画面経路を表示
        this.SettingLocation();
        // 画面遷移先を追加
        this.MaineSelectScreen.set_evaluation_perform_transition(this.TransitionEvaluationPerformScreen    );           // 評価実施
        this.MaineSelectScreen.set_evaluation_output_transition (this.TransitionEvaluationOutputScreen     );           // 評価出力
        this.MaineSelectScreen.set_employees_admin_transition   (this.TransitionEmployeesAdminScreen       );           // 社員管理
        this.MaineSelectScreen.set_evaluation_admin_transition  (this.TransitionEvaluationAdminSelectScreen);           // 評価管理
        this.MaineSelectScreen.set_salary_table_transition      (this.TransitionSalaryTableScreen          );           // 給与テーブル
        
        this.MaineSelectScreen.set_salary_table_admin_transition(this.TransitionSalaryTableAdminScreen)
        
        // メイン選択画面作成
        this.MaineSelectScreen.CreateScreen();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価管理画面作成                                                     *
    // ************************************************************************
    CreateEvaluationAdminSelectScreen = () => {
        
        // 初期化
        this.EvaluationAdminSelectScreen = null;
        
        // 選択画面作成クラスをインスタンス化
        this.EvaluationAdminSelectScreen = new EvaluationAdminSelectScreen(this.maine_screen);
        
        // 現在表示している画面として格納
        this.show_screen                 = this.EvaluationAdminSelectScreen;
        
        // 画面遷移先を追加
        this.EvaluationAdminSelectScreen.set_company_evaluation_admin_screen(this.TransitionCompanyEvaluationAdminScreen);      // 会社評価管理画面
        this.EvaluationAdminSelectScreen.set_self_evaluation_admin_screen   (this.TransitionSelfEvaluationAdminScreen   );      // 自己評価管理画面
        
        // 選択画面作成
        this.EvaluationAdminSelectScreen.CreateScreen();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価実施画面を作成する                                               *
    // ************************************************************************
    CreateEvaluationPerformScreen      = () => {
        
        // ---------------------------+
        // インスタンス化             |
        // ---------------------------+
        this.EvaluationPerformScreen      = new EvaluationPerformScreen( this.maine_screen                           );    // インスタンス化
        
        // ---------------------------+
        // ボタン遷移先セット         |
        // ---------------------------+
        this.EvaluationPerformScreen.set_CompanyEvaluationTransition        ( this.TransitionCompanyEvaluationScreen      );    // 会社評価画面  を遷移先背に追加
        this.EvaluationPerformScreen.set_SelfEvaluationTransition           ( this.TransitionSelfEvaluationScreen_Perform );    // 自己評価画面  を遷移先背に追加
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.EvaluationPerformScreen.CreateScreen()                                                                   ;    // 画面作成
        this.show_screen                  = this.EvaluationPerformScreen                                              ;    // 現在表示している画面としてプロパティに保存
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   評価出力画面を作成する                                               *
    // ************************************************************************
    CreateEvaluationOutputScreen       = () => {
        
        // ---------------------------+
        // インスタンス化             |
        // ---------------------------+
        this.EvaluationOutputScreen       = new EvaluationOutputScreen( this.maine_screen                                  );    // インスタンス化
        
        // ---------------------------+
        // ボタン遷移先セット         |
        // ---------------------------+
        this.EvaluationOutputScreen.set_Transition( this.TransitionIndividualGradingChartScreen_Output );    // 個人成績評価表(評価出力から来た場合) を遷移先に追加
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.EvaluationOutputScreen.CreateScreen()                                                                          ;    // 画面作成
        this.show_screen                  = this.EvaluationOutputScreen                                                     ;    // 現在表示している画面としてプロパティに保存
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   給与テーブル画面を作成する                                           *
    // ************************************************************************
    CreateSalaryTableScreen            = () => {
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.SalaryTableScreen            = new SalaryTableScreen(this.maine_screen)           ;
        this.SalaryTableScreen.CreateScreen(this.maine_screen);
        this.show_screen                  = this.SalaryTableScreen                             ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   自己評価管理画面を作成する                                           *
    // ************************************************************************
    CreateSelfEvaluationAdminScreen    = () => {
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.SelfEvaluationAdminScreen    = new SelfEvaluationAdminScreen(this.maine_screen)   ;
        this.show_screen                  = this.SelfEvaluationAdminScreen                     ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   会社評価管理画面を作成する                                           *
    // ************************************************************************
    CreateCompanyEvaluationAdminScreen = () => {
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.CompanyEvaluationAdminScreen = new CompanyEvaluationAdminScreen(this.maine_screen);
        this.show_screen                  = this.CompanyEvaluationAdminScreen                  ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   社員管理画面を作成する                                               *
    // ************************************************************************
    CreateEmployeesAdminScreen         = ()  => {
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.EmployeesAdminScreen         = new EmployeesAdminScreen(this.maine_screen)        ;
        this.show_screen                  = this.EmployeesAdminScreen                          ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   給与テーブル管理画面を作成する                                       *
    // ************************************************************************
    CreateSalaryTableAdminScreen       = () => {
        
        this.SalaryTableAdminScreen = new SalaryTableAdminScreen(this.maine_screen);
        this.show_screen                  = this.SalaryTableAdminScreen;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   会社評価画面を作成する                                               *
    // ************************************************************************
    CreateCompanyEvaluationScreen      = (Arg)  => {
        
        // ---------------------------+
        // インスタンス化             |
        // ---------------------------+
        this.CompanyEvaluationScreen      = new CompanyEvaluationScreen(this.maine_screen,Arg)     ;
        
        // ---------------------------+
        // ボタン遷移先セット         |
        // ---------------------------+
        this.CompanyEvaluationScreen.set_right_footer_button_Transition(this.TransitionSelfEvaluationScreen_Company);
        
        // ---------------------------+
        // 画面作成                   |
        // ---------------------------+
        this.CompanyEvaluationScreen.CreateScreen();
        this.show_screen                  = this.CompanyEvaluationScreen                       ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   自己評価画面を作成する                                               *
    // ************************************************************************
    CreateSelfEvaluationScreen         = (Arg)  => {
        
        this.SelfEvaluationScreen         = new SelfEvaluationScreen(this.maine_screen,Arg)        ;
        
        this.SelfEvaluationScreen.set_right_footer_button_Transition(this.TransitionIndividualGradingChartScreen_Performt);
        
        this.SelfEvaluationScreen.CreateScreen();
        this.show_screen                  = this.SelfEvaluationScreen                          ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   個人成績評価表を作成する(評価出力)                                   *
    // ************************************************************************
    CreateIndividualGradingChartScreen_Performt = (Arg)  => {
        
        this.HeaderProcessing.hide_BackButton();
        
        this.IndividualGradingChartScreen = new IndividualGradingChartScreen(this.maine_screen,Arg)        ;
        
        if(this.location_list[this.location_list.length - 2] == "会社評価画面"){
            
            this.IndividualGradingChartScreen.set_company_evaluation_button_event(function(){this.location_list = this.location_list.slice(0,this.location_list.length-3); this.TransitionCompanyEvaluationScreen     ();}.bind(this)); // 会社評価画面に遷移
            this.IndividualGradingChartScreen.set_self_evaluation_button_event   (function(){this.location_list = this.location_list.slice(0,this.location_list.length-2); this.TransitionSelfEvaluationScreen_Company();}.bind(this)); // 自己評価画面に遷移
            this.IndividualGradingChartScreen.set_finish_button_event            (function(){this.location_list = this.location_list.slice(0,this.location_list.length-4); this.TransitionEvaluationPerformScreen     ();}.bind(this)); // 評価実施画面に遷移
        }else{
            this.IndividualGradingChartScreen.set_self_evaluation_button_event   (function(){this.location_list = this.location_list.slice(0,this.location_list.length-2);this.TransitionSelfEvaluationScreen_Perform ();}.bind(this)); // 自己評価画面に遷移
            this.IndividualGradingChartScreen.set_finish_button_event            (function(){this.location_list = this.location_list.slice(0,this.location_list.length-3);this.TransitionEvaluationPerformScreen      ();}.bind(this)); // 評価実施画面に遷移
        }
        
        //this.IndividualGradingChartScreen.FooterProcessing();
        this.IndividualGradingChartScreen.CreateScreen();
        this.show_screen                  = this.IndividualGradingChartScreen                          ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   個人成績評価表を作成する(評価実施)                                   *
    // ************************************************************************
    CreateIndividualGradingChartScreen_Output = (Arg)  => {
        
        this.IndividualGradingChartScreen = new IndividualGradingChartScreen(this.maine_screen,Arg)    ;
        this.IndividualGradingChartScreen.CreateScreen();
        
        //this.IndividualGradingChartScreen.FooterProcessing();
        this.show_screen                  = this.IndividualGradingChartScreen                          ;
        
    }
    
// ============================================== [ ↑作成↑ ] ====================================================================================== //
    
    
// ============================================== [ ↓遷移↓ ] ====================================================================================== //
    
    // 画面遷移処理
    TransitionEvaluationPerformScreen               = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateEvaluationPerformScreen               );}    // 評価実施      画面
    TransitionEvaluationOutputScreen                = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateEvaluationOutputScreen                );}    // 評価出力      画面
    TransitionSalaryTableScreen                     = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateSalaryTableScreen                     );}    // 給与テーブル  画面
    TransitionEmployeesAdminScreen                  = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateEmployeesAdminScreen                  );}    // 社員管理      画面
    TransitionEvaluationAdminSelectScreen           = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateEvaluationAdminSelectScreen           );}    // 評価管理選択  画面
    TransitionSelfEvaluationAdminScreen             = () =>{ this.TransitionCommonSetting( this.TransitionEvaluationAdminSelectScreen , this.CreateSelfEvaluationAdminScreen             );}    // 自己評価管理  画面
    TransitionCompanyEvaluationAdminScreen          = () =>{ this.TransitionCommonSetting( this.TransitionEvaluationAdminSelectScreen , this.CreateCompanyEvaluationAdminScreen          );}    // 会社評価管理  画面
    TransitionSalaryTableAdminScreen                = () =>{ this.TransitionCommonSetting( this.CreateMaineSelectScreen               , this.CreateSalaryTableAdminScreen                );}    // 給与テーブル管理画面
    TransitionCompanyEvaluationScreen               = () =>{ this.TransitionCommonSetting( this.TransitionEvaluationPerformScreen     , this.CreateCompanyEvaluationScreen               );}    // 会社評価      画面
    TransitionSelfEvaluationScreen_Perform          = () =>{ this.TransitionCommonSetting( this.TransitionEvaluationPerformScreen     , this.CreateSelfEvaluationScreen                  );}    // 自己評価      画面(戻り先:評価実施)
    TransitionSelfEvaluationScreen_Company          = () =>{ this.TransitionCommonSetting( this.TransitionCompanyEvaluationScreen     , this.CreateSelfEvaluationScreen                  );}    // 自己評価      画面(戻り先:会社評価)
    TransitionIndividualGradingChartScreen_Performt = () =>{ this.TransitionCommonSetting( this.TransitionSelfEvaluationScreen_Perform, this.CreateIndividualGradingChartScreen_Performt );}    // 個人成績評価表(評価実施から来た場合)
    TransitionIndividualGradingChartScreen_Output   = () =>{ this.TransitionCommonSetting( this.TransitionEvaluationOutputScreen      , this.CreateIndividualGradingChartScreen_Output   );}    // 個人成績評価表(評価出力から来た場合)
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面遷移共通設定                                                     *
    // ************************************************************************
    TransitionCommonSetting = (before,create) =>{
        
        let Arg = "";
        
        if(this.show_screen != null && this.show_screen.pass != undefined){Arg = this.show_screen.pass();};
        
        if(this.show_screen != null && this.show_screen.finish != undefined){this.show_screen.finish();};
        
        //if(this.show_screen != null && this.show_screen.finish){this.show_screen.finish();};
        
        this.before_screen = before;
        
        this.HeaderProcessing.show_BackButton();
        
        create(Arg);
        
        this.SettingLocation();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   前の画面に戻る                                                       *
    // ************************************************************************
    TransitionBeforeScreen = () =>{
        
        let Arg = "";
        
        this.location_list = this.location_list.slice(0,this.location_list.length-2);
        
        if(this.show_screen != null && this.show_screen.finish != undefined){this.show_screen.finish();};
        
        if(this.show_screen != null && this.show_screen.ReturnPass != undefined){Arg = this.show_screen.ReturnPass();  };
        
        if(this.before_screen != null){this.before_screen(Arg);};
        
    }
    
    
// ============================================== [ ↑遷移↑ ] ====================================================================================== //
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダのタイトルを表示                                               *
    // ************************************************************************
    SettingTitle = () => {
        
        let title_HTML = `<div style="position:absolute;top:15;right:20;font:bold 35px Avenir;user-select:none;">${this.getSystemName()}</div>`;
        
        this.HeaderProcessing.get_title_frame().innerHTML = title_HTML;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダのユーザ名を表示                                               *
    // ************************************************************************
    SettingUserName = () => {
        
        let user_HTML = `<div style="transform: skewX(-30deg);position:absolute;top:3;right:30;font:bold 20px Avenir;user-select:none;">${this.getUserName()}</div>`;
        
        this.HeaderProcessing.get_user_frame().innerHTML = user_HTML;
        
    }
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ヘッダのロケーションを表示                                           *
    // ************************************************************************
    SettingLocation = () =>{
        
        this.location_list[this.location_list.length] = this.show_screen.getScreenName();
        
        let location_HTML = `<div style="position:absolute;top:10;left:20;font:bold 30px Avenir;user-select:none;">${this.location_list[this.location_list.length-1]}</div>`
        
        location_HTML += "<div style='position:absolute;top:50;left:20;font:bold 15px Avenir;user-select:none;'>";
        for(let i = 0; i <  this.location_list.length -1;i++){
            
            location_HTML += `<span>${this.location_list[i]}></span>`
            
        }
        location_HTML+="</div>"
        
        this.HeaderProcessing.get_location_frame().innerHTML = location_HTML;
        
    }
    
}
