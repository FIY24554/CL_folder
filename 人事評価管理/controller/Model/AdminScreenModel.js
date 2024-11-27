// 
// 
// 
class AdminScreenModel{
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   コンストラクタ                                                                            *
    // *********************************************************************************************
    constructor(elem){
        
        this.class                            = "TableScreen"                          ;            // ログ出力用クラス名
        
        // フレーム
        this.maine_frame                      = elem                                   ;            // 画面のメインフレーム
        this.admin_frame = null;
        this.table_frame                      = null                                   ;            // テーブルのフレーム
        this.button_frame                     = null                                   ;            // ボタンのフレーム
        this.input_frame                      = null                                   ;            // インプットボックスのフレーム
        
        // ボタン
        this.register_button                  = null                                   ;            // 登録ボタンの要素
        this.update_button                    = null                                   ;            // 更新ボタンの要素
        this.delete_button                    = null                                   ;            // 削除ボタンの要素
        this.RUB_button                       = null                                   ;            // 登録・更新・削除ボタンの要素
        
        // クラス
        this.ButtonProcessing                 = null                                   ;            // ボタン作成クラス
        this.TableProcessing                  = null                                   ;            // テーブル作成クラス
        this.InputConstraintsProcessing       = new InputConstraintsProcessing();
        
        // 指定用
        this.button_width                     = 100                                    ;            // ボタンの横幅
        this.button_height                    = 30                                     ;            // ボタンの縦幅
        this.button_font_size                 = 15                                     ;            // ボタンのフォントサイズ
        
        this.RUD_button_width                 = 150                                    ;            // 登録・更新・削除ボタンの横幅
        this.RUD_button_height                = 30                                     ;            // 登録・更新・削除ボタンの縦幅
        this.RUD_button_font_size             = 15                                     ;            // 登録・更新・削除ボタンのフォントサイズ
        
        this.register_button_background_color = "#12ad12"                              ;            // 登録系ボタンの背景色
        this.update_button_background_color   = "#1e50bf"                              ;            // 更新系ボタンの背景色
        this.delete_button_background_color   = "#bf0000"                              ;            // 削除系ボタンの背景色
        
        this.register_button_css              = "Register-Button"     ;
        this.register_button_text_css         = "Register-Button-Text";
        
        this.update_button_css        = "Update-Button"     ;
        this.update_button_text_css   = "Update-Button-Text";
        
        this.delete_button_css        = "Delete-Button";
        this.delete_button_text_css   = "Delete-Button-Text";
        
        this.button_inactive_css      = "Button-Inactive";
        this.button_inactive_text_css = "Button-Inactive-Text";
        
        this.RUB_button_css           = "RUB-Button"     ;
        this.RUB_button_text_css      = "RUB-Button-Text";
        
        this.RUB_mode_button_left     = 0;      // 登録モード・更新モード・削除モードの各座標
        
        this.popup_min_width                  = 800                                    ;            // ポップアップの横幅
        this.popup_min_height                 = 400                                    ;            // ポップアップの縦幅
        this.popup_font_size                  = 15                                     ;            // ポップアップのフォントサイズ
        
        this.table_width                      = 650                                    ;            // テーブルの横幅
        this.table_height                     = 500                                    ;            // テーブルの縦幅
        
        this.maine_frame_width                = parseInt(this.maine_frame.style.width );            // メインフレームの横幅
        this.maine_frame_height               = parseInt(this.maine_frame.style.height);            // メインフレームの縦幅
        
        this.head_height                      = 40                                     ;            // ヘッダとの余白
        
        this.padding                          = 15                                     ;            // 余白
        
        this.selected_record                  = null                                   ;            // 選択されているレコード要素を保管する
        
        this.checkbox_judge_value             = 1                                      ;            // チェックボックス要素の時のtrue判定
        
        this.CreateScreen();                                                                        // 画面を作成する
        
        
        
    }
    
    // 
    // 
    // 
    getClass(){return this};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   画面を作成する                                                                            *
    // *********************************************************************************************
    CreateScreen(){
        
        // フレーム作成
        this.CreateFrame();
        
        // テーブル作成ハンドラーインスタンス化
        this.TableHandler = new TableHandler(this.table_frame);
        
        // クラスインスタンス化
        if(typeof ButtonProcessing != "undefined"){this.ButtonProcessing  = new ButtonProcessing(this.button_frame)};  // ボタン作成クラス
        
        // ポップアップクラス
        this.RegisterPopup = new PopupScreenProcessing();
        this.DeletePopup   = new PopupScreenProcessing();
        this.UpdatePopup   = new PopupScreenProcessing();
        this.MessagePopup  = new PopupScreenProcessing();
        
        // 登録ポップアップ設定
        this.RegisterPopupSetting();
        this.UpdatePopupSetting();
        this.DeletePopupSetting();
        this.MessagePopupSetting();
        
        // テーブル・インプットボックスを作成する
        this.TableProcessings();
        
        // 登録モード
        this.CreateRegisterButton();
        //

        //
        // 更新モード
        this.CreateUpdateButton();
        
        // 削除モード
        this.CreateDeleteButton();
       
        //
        // 登録・更新・削除
        this.Create_RUD_Button();
        

        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   フレーム作成                                                                              *
    // *********************************************************************************************
    CreateFrame(){
        
        // -----------------------------------------------+
        // 管理画面フレーム                     |
        // -----------------------------------------------+
        this.admin_frame_margin = document.createElement("div");
        this.admin_frame_margin.classList.add('Maine-Screen-Frame-margin');
        
        // -----------------------------------------------+
        // 管理者画面フレーム疑似マージン       |
        // -----------------------------------------------+
        this.admin_frame = document.createElement("div");
        this.admin_frame.classList.add('Maine-Screen-Frame');
        
        // -----------------------------------------------+
        // 管理者画面フレームデザイン           |
        // -----------------------------------------------+
        this.admin_frame_design = document.createElement("div");
        this.admin_frame_design.classList.add('Maine-Screen-Frame-Design');
        
        // -----------------------------------------------+
        // テーブルフレーム作成                 |
        // -----------------------------------------------+
        this.table_frame                 = document.createElement("div")  ;
        this.table_frame.classList.add('Admin-Screen-Model-Table-Frame');
        
        // -----------------------------------------------+
        // ボタンフレーム
        // -----------------------------------------------+
        this.button_frame                = document.createElement("div")  ;
        this.button_frame.classList.add('Admin-Screen-Model-Button-Frame');
        
        // -----------------------------------------------+
        // インプットフレーム
        // -----------------------------------------------+
        this.input_frame                 = document.createElement("div");
        this.input_frame.classList.add('Admin-Screen-Model-Input-Frame');
        
        // -----------------------------------------------+
        // 要素入れ込み                         |
        // -----------------------------------------------+
        this.maine_frame.appendChild(this.admin_frame_margin );
        this.maine_frame.appendChild(this.admin_frame        );
        this.admin_frame.appendChild(this.admin_frame_design );
        this.admin_frame.appendChild(this.table_frame        );
        this.admin_frame.appendChild(this.button_frame       );
        this.admin_frame.appendChild(this.input_frame        );
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateRegisterButton(){
        
        // -----------------------------------------------+
        // 登録モードボタン作成                 |
        // -----------------------------------------------+
        this.ButtonProcessing.set_CSS("","","all-remove"                                   );
        this.ButtonProcessing.set_CSS(this.register_button_css          ,"button"          );
        this.ButtonProcessing.set_CSS(this.register_button_text_css     ,"text"            );
        this.ButtonProcessing.set_CSS(`${this.register_button_css}-down`,"Inactive-button" );
        
        this.register_button = this.ButtonProcessing.create ("登録モード",0,this.RUB_mode_button_left  );
        
        this.RUB_mode_button_left += parseInt(window.getComputedStyle(this.register_button).width) + 10;
        
        this.register_button.get_event_elem.addEventListener("mouseup",this.RegisterModeMouseDownEvent );
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateUpdateButton(){
        
        // -----------------------------------------------+
        // 更新モードボタン作成                 |
        // -----------------------------------------------+
        this.ButtonProcessing.set_CSS("","","all-remove"                                 );
        this.ButtonProcessing.set_CSS(this.update_button_css          ,"button"          );
        this.ButtonProcessing.set_CSS(this.update_button_text_css     ,"text"            );
        this.ButtonProcessing.set_CSS(`${this.update_button_css}-down`,"Inactive-button" );
        
        this.update_button = this.ButtonProcessing.create ("更新モード",0,this.RUB_mode_button_left);
        
        this.RUB_mode_button_left += parseInt(window.getComputedStyle(this.register_button).width) + 10;
        
        this.update_button.get_event_elem.addEventListener("mouseup",this.UpdateModeMouseDownEvent);
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateDeleteButton(){
        
        // -----------------------------------------------+
        // 削除モードボタン作成                 |
        // -----------------------------------------------+
        this.ButtonProcessing.set_CSS("","","all-remove"                                 );
        this.ButtonProcessing.set_CSS(this.delete_button_css          ,"button"          );
        this.ButtonProcessing.set_CSS(this.delete_button_text_css     ,"text"            );
        this.ButtonProcessing.set_CSS(`${this.delete_button_css}-down`,"Inactive-button" );
        
        this.delete_button = this.ButtonProcessing.create ("削除モード",0,this.RUB_mode_button_left);
        
        this.RUB_mode_button_left += parseInt(window.getComputedStyle(this.register_button).width) + 10;
        
        this.delete_button.get_event_elem.addEventListener("mouseup",this.DeleteModeMouseDownEvent    );
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録・更新・削除ボタン作成                                                                *
    // *********************************************************************************************
    Create_RUD_Button(){
        
        // ボタン作成
        this.ButtonProcessing.set_parent_elem (this.admin_frame                                );
        this.ButtonProcessing.set_CSS         ("","","all-remove"                              );
        this.ButtonProcessing.set_CSS         (this.button_inactive_css     ,"Inactive-button" );
        this.ButtonProcessing.set_CSS         (this.button_inactive_text_css,"Inactive-text"   );
        this.ButtonProcessing.set_CSS         (this.RUB_button_css          ,"button"          );
        this.ButtonProcessing.set_CSS         (this.RUB_button_text_css     ,"text"            );
        
        this.RUB_button = this.ButtonProcessing.create ("モード未選択",0,0            );
        this.RUB_button.get_event_elem.addEventListener("mouseup",this.RUBButtonEvent );
        
        // 非活性モードに変更
        this.RUB_button.Inactive();
        
        // 登録ボタンのCSSを先にセット
        this.RUB_button.set_CSS(this.register_button_css     ,"Register"     );
        this.RUB_button.set_CSS(this.register_button_text_css,"Register-Text");
        
        // 更新ボタンのCSSを先にセット
        this.RUB_button.set_CSS(this.update_button_css       ,"Update"       );
        this.RUB_button.set_CSS(this.update_button_text_css  ,"Update-Text"  );
        
        // 削除ボタンのCSSを先にセット
        this.RUB_button.set_CSS(this.delete_button_css       ,"Delete"       );
        this.RUB_button.set_CSS(this.delete_button_text_css  ,"Delete-Text"  );
        
        // 座標変更
        this.RUB_button.get_frame_elem.style.top    = "";
        this.RUB_button.get_frame_elem.style.left   = "";
        this.RUB_button.get_frame_elem.style.bottom = 15;
        this.RUB_button.get_frame_elem.style.right  = 15;
        
    }
    
    // *********************************************************************************************
    // [処理概要]
    //   
    // *********************************************************************************************
    RegisterModeMouseDownEvent = () => {
        
        this.RegisterButtonDesignEvent();
        
        this.Add_RegisterButtonMouseDownEvent();
        
    }
    
    // *********************************************************************************************
    // [処理概要]
    //   
    // *********************************************************************************************
    UpdateModeMouseDownEvent = () => {
        
        this.UpdateButtonDesignEvent();
        
        this.Add_UpdateButtonMouseDownEvent();
        
    }
    
    // *********************************************************************************************
    // [処理概要]
    //   
    // *********************************************************************************************
    DeleteModeMouseDownEvent = () => {
        
        this.DeleteButtonDesignEvent();
        
        this.Add_DeleteButtonMouseDownEvent();
        
    }
    
    // 
    // 継承用
    // 
    Add_RegisterButtonMouseDownEvent(){};
    Add_UpdateButtonMouseDownEvent  (){};
    Add_DeleteButtonMouseDownEvent  (){};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録モードボタンイベント                                                                  *
    // *********************************************************************************************
    RegisterButtonDesignEvent = () => {
        
        // -----------------------------------------------+
        // 登録モードボタンをダウン
        // -----------------------------------------------+
        this.register_button.ManualDown();
        this.register_button.Inactive  ();
        
        // -----------------------------------------------+
        // 更新モードボタンをアップ
        // -----------------------------------------------+
        this.update_button.Activity();
        this.update_button.ManualUp();
        
        // -----------------------------------------------+
        // 削除モードボタンをアップ
        // -----------------------------------------------+
        this.delete_button.Activity();
        this.delete_button.ManualUp      ();
        
        // -----------------------------------------------+
        // 登録・更新・削除ボタンを登録ボタンにする
        // -----------------------------------------------+
        this.RUB_button.Activity  ();
        this.RUB_button.ManualUp  ();
        this.RUB_button.SettingCSS(this.RUB_button              ,"Register"     ,false);
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Register-Text",false);
        this.RUB_button.SettingCSS(this.RUB_button              ,"Update"       ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Update-Text"  ,true );
        this.RUB_button.SettingCSS(this.RUB_button              ,"Delete"       ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Delete-Text"  ,true );
        this.RUB_button.Operate_Type_Button      = "Register"     ;
        this.RUB_button.Operate_Type_Button_Text = "Register-Text";
        this.RUB_button.get_text_elem.innerText  = "登録"         ;
        
        
        
        // -----------------------------------------------+
        // テーブルとインプットボックスを綺麗にする
        // -----------------------------------------------+
        this.clearInputBox    ();
        this.clearSelectRecord();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新モードボタンイベント                                                                  *
    // *********************************************************************************************
    UpdateButtonDesignEvent = () => {
        
        // -----------------------------------------------+
        // 登録モードボタンをアップ
        // -----------------------------------------------+
        this.register_button.Activity();
        this.register_button.ManualUp ();
        
        // -----------------------------------------------+
        // 更新モードボタンをダウン
        // -----------------------------------------------+
        this.update_button.Inactive  ();
        this.update_button.ManualDown();
        
        // -----------------------------------------------+
        // 削除モードボタンをアップ
        // -----------------------------------------------+
        this.delete_button.Activity();
        this.delete_button.ManualUp();
        
        // -----------------------------------------------+
        // 登録・更新・削除ボタンを更新ボタンにする
        // -----------------------------------------------+
        this.RUB_button.Activity  ();
        this.RUB_button.ManualUp  ();
        this.RUB_button.SettingCSS(this.RUB_button              ,"Register"     ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Register-Text",true );
        this.RUB_button.SettingCSS(this.RUB_button              ,"Update"       ,false);
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Update-Text"  ,false);
        this.RUB_button.SettingCSS(this.RUB_button              ,"Delete"       ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Delete-Text"  ,true );
        this.RUB_button.Operate_Type_Button      = "Update"     ;
        this.RUB_button.Operate_Type_Button_Text = "Update-Text";
        this.RUB_button.get_text_elem.innerText  = "更新"       ;
        
        // -----------------------------------------------+
        // テーブルとインプットボックスを綺麗にする
        // -----------------------------------------------+
        this.clearInputBox    ();
        this.clearSelectRecord();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除モードボタンイベント                                                                  *
    // *********************************************************************************************
    DeleteButtonDesignEvent = () => {
        
        // -----------------------------------------------+
        // 登録モードボタンをアップ
        // -----------------------------------------------+
        this.register_button.Activity();
        this.register_button.ManualUp      ();
        
        // -----------------------------------------------+
        // 更新モードボタンをアップ
        // -----------------------------------------------+
        this.update_button.Activity();
        this.update_button.ManualUp      ();
        
        // -----------------------------------------------+
        // 削除モードボタンをダウン
        // -----------------------------------------------+
        this.delete_button.Inactive();
        this.delete_button.ManualDown    ();
        
        // -----------------------------------------------+
        // 登録・更新・削除ボタンを削除ボタンにすうる
        // -----------------------------------------------+
        this.RUB_button.Activity  ();
        this.RUB_button.ManualUp  ();
        this.RUB_button.SettingCSS(this.RUB_button              ,"Register"     ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Register-Text",true );
        this.RUB_button.SettingCSS(this.RUB_button              ,"Update"       ,true );
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Update-Text"  ,true );
        this.RUB_button.SettingCSS(this.RUB_button              ,"Delete"       ,false);
        this.RUB_button.SettingCSS(this.RUB_button.get_text_elem,"Delete-Text"  ,false);
        this.RUB_button.Operate_Type_Button      = "Delete";
        this.RUB_button.Operate_Type_Button_Text = "Delete-Text";
        this.RUB_button.get_text_elem.innerText  = "削除";
        
        // -----------------------------------------------+
        // テーブルとインプットボックスを綺麗にする
        // -----------------------------------------------+
        this.clearInputBox    ();
        this.clearSelectRecord();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録・更新・削除ボタンイベント                                                            *
    // *********************************************************************************************
    RUBButtonEvent = (e) => {
        
        // 登録・更新・削除によって処理を切り替える
        switch(e.target.previousElementSibling.innerText){                                          // 押下されたボタンの兄弟要素のテキストで判定
            
            // -----------------------------------------------+
            // 登録
            // -----------------------------------------------+
            case "登録":
                
                this.RegisterButtonEvent();
                
            break;
            
            // -----------------------------------------------+
            // 更新
            // -----------------------------------------------+
            case "更新":
                
                this.UpdateButtonEvent();
                
            break;
            
            // -----------------------------------------------+
            // 削除
            // -----------------------------------------------+
            case "削除":
                
                this.DeleteButtonEvent();
                
            break;
            
        }
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録ボタンイベント                                                                        *
    // *********************************************************************************************
    RegisterButtonEvent = () =>{
        
        // 登録ポップアップにインプットボックスのデータを表示
        this.SettingInputBoxDataInThePopup(this.RegisterPopup);
        
        // 登録ポップアップ表示
        this.RegisterPopup.show();
        
    };
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新ボタンイベント                                                                        *
    //  [追加]                                                                                     *
    //    更新前更新後比較を追加するかしないか                                                     *
    // *********************************************************************************************
    UpdateButtonEvent = () => {
        
        let check = this.UpdateButtonEventCheck();
        
        if(!check){return;};
        
        // 更新ポップアップにインプットボックスのデータを表示
        this.SettingInputBoxDataInThePopup(this.UpdatePopup,true); 
        
        // 更新ポップアップ表示
        this.UpdatePopup.show();
        
    };
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除ボタンイベント                                                                        *
    // *********************************************************************************************
    DeleteButtonEvent = () => {
        
        // 削除ポップアップにインプットボックスのデータを表示
        this.SettingInputBoxDataInThePopup(this.DeletePopup);
        
        // 削除ポップアップ表示
        this.DeletePopup.show();
        
    };
    
    UpdateButtonEventCheck(){};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録ポップアップの設定をする                                                              *
    // *********************************************************************************************
    RegisterPopupSetting(){
        
        // 登録ポップアップの設定
        this.RegisterPopup.set_width                (this.popup_min_width                   );
        this.RegisterPopup.set_height               (this.popup_min_height                  );
        this.RegisterPopup.set_head_text_date       ("下記データを登録しますか？");
        this.RegisterPopup.set_create_button_type   ("Text_Cancel"                          );        // ボタンの         タイプ選択
        this.RegisterPopup.set_create_text_type     ("Two"                                  );
        this.RegisterPopup.set_text_button_css      ("Popup-Register-Button"                      );
        this.RegisterPopup.set_text_button_text_css ("Popup-Register-Button-Text"                 );
        this.RegisterPopup.set_text_button_text     ("登録"                                 );        // テキストボタンの テキスト
        //this.RegisterPopup.set_text_background_color(this.register_button_background_color  );        // テキストボタンの 背景色
        //this.RegisterPopup.set_text_font_color      ("#ffffff"                              );        // テキストボタンの フォントカラー
        this.RegisterPopup.set_ClickEvent           (this.RegisterPopupButtonEvent          );        // テキストボタン   押下時のイベント
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新ポップアップの設定をする                                                              *
    // *********************************************************************************************
    UpdatePopupSetting(){
        
        // 更新ポップアップの設定
        this.UpdatePopup.set_width                  (this.popup_min_width  * 1.3               );
        this.UpdatePopup.set_height                 (this.popup_min_height                 );
        this.UpdatePopup.set_head_text_date       ("下記データに更新しますか？");
        this.UpdatePopup.set_create_button_type     ("Text_Cancel"                        );        // ボタンの         タイプ選択
        this.UpdatePopup.set_create_text_type     ("Three"                                  );
        this.UpdatePopup.set_text_button_text       ("更新"                               );        // テキストボタンの テキスト
        //this.UpdatePopup.set_text_background_color  (this.update_button_background_color  );        // テキストボタンの 背景色
        //this.UpdatePopup.set_text_font_color        ("#ffffff"                            );        // テキストボタンの フォントカラー
        this.UpdatePopup.set_ClickEvent             (this.RegisterPopupButtonEvent        );        // テキストボタン   押下時のイベント
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除ポップアップの設定をする                                                              *
    // *********************************************************************************************
    DeletePopupSetting(){
        
        // 削除ポップアップの設定
        this.DeletePopup.set_width                  (this.popup_min_width                 );
        this.DeletePopup.set_height                 (this.popup_min_height                );
        this.DeletePopup.set_head_text_date       ("下記データを削除しますか？");
        this.DeletePopup.set_create_button_type     ("Text_Cancel"                        );        // ボタンの         タイプ選択
        this.DeletePopup.set_create_text_type     ("Two"                                  );
        this.DeletePopup.set_text_button_text       ("削除"                               );        // テキストボタンの テキスト
        //this.DeletePopup.set_text_background_color  (this.delete_button_background_color  );        // テキストボタンの 背景色
        //this.DeletePopup.set_text_font_color        ("#ffffff"                            );        // テキストボタンの フォントカラー
        this.DeletePopup.set_ClickEvent             (this.RegisterPopupButtonEvent        );        // テキストボタン   押下時のイベント
        
    }
    
    //
    //
    //
    MessagePopupSetting(){
        
        //this.MessagePopup
        
        
        //this.MessagePopup.set_head_text_date       ("下記データを削除しますか？");
        this.MessagePopup.set_create_button_type     ("OK"                        );        // ボタンの         タイプ選択
        this.MessagePopup.set_create_text_type       ("One"                                  );
        
        
        //this.MessagePopup.set_text_button_text       ("削除"                               );        // テキストボタンの テキスト
        
    }
    
    //
    //
    //
    ShowMessagePopup = (text,size = 15,color = "#000000",width = this.popup_min_width,height = this.popup_min_height) => {
        
        let delete_flg = true;
        
        this.MessagePopup.set_width                  (this.popup_min_width                 );
        this.MessagePopup.set_height                 (this.popup_min_height                );
        
        if(typeof text == "object"){
            for(let i = 0; i < text.length;i++){
                this.MessagePopup.set_text_box_text(text[i].text,text[i].color,text[i].size,i,0,delete_flg);
                delete_flg = false;
            }
        }else{
            this.MessagePopup.set_text_box_text(text,color,size,0,0,delete_flg);
        }
        
        this.MessagePopup.show();
        
    }
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録ポップアップの登録ボタン押下時のイベント                                              *
    // *********************************************************************************************
    RegisterPopupButtonEvent = () => {
        
        console.log("ok")
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新ポップアップの更新ボタン押下時のイベント                                              *
    // *********************************************************************************************
    UpdatePopupButtonEvent = () => {
        
        console.log("ok")
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除ポップアップの削除ボタン押下時のイベント                                              *
    // *********************************************************************************************
    DeletePopupButtonEvent = () => {
        
        console.log("ok")
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   ポップアップテキストにインプットボックスに入力された値をセットする                        *
    // [引数]                                                                                      *
    //   popup_obj : テキストを表示したいポップアップのオブジェクト                                *
    // *********************************************************************************************
    SettingInputBoxDataInThePopup = (popup_obj = null , comparison = false) => {
        
        let No = 0;
        
        if(popup_obj == null){return};
        
        // ポップアップに表示するテキスト作成
        for(let key in  this.inputbox){                                                             // インプットボックスの行フレームごとで回す
            
            let label = this.inputbox[key].querySelectorAll("label");
            let input = this.inputbox[key].querySelectorAll("input,select,textarea");
            
            for(let i = 0; i < label.length; i++){
                
                let column = label[i].innerText; 
                let value  = input[i].value    ;
                
                if(input[i].type == "checkbox"){
                    
                    value = "□";
                    
                    if(input[i].checked){value = "☑";};
                    
                };
                
                popup_obj.set_text_box_text(column,"#000000",15,No,0);
                popup_obj.set_text_box_text(value ,"#000000",15,No,1);
                
                if(comparison && this.selected_record != null){
                    
                    let original_value = this.selected_record[No].innerText;
                    
                    if(input[i].type == "checkbox"){
                        
                        original_value = "□";
                        
                        if(this.selected_record[No].innerText == this.checkbox_judge_value){original_value = "☑";};
                        
                    }
                    
                    popup_obj.set_text_box_text(original_value ,"#000000",15,No,1);
                    popup_obj.set_text_box_text(value          ,"#000000",15,No,2);
                    
                }
                
                No++;
                
            }
            
        }
        
    }
    
    
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   ログ出力                                                                                  *
    // [引数]                                                                                      *
    //   ログタイプ                                                                                *
    // *********************************************************************************************
    //log = (type,method) => {
    //    
    //    switch(type){
    //        
    //        case "frame"  : console.error(`[警告] : フレームが作成されていなため処理を抜けました。this.CreateFrameを実行してください。\n  [場所] : <クラス> ${this.class} <メソッド> ${method}`); break;
    //        case "button" : console.error(`[警告] : ボタン作成クラスが存在しないため処理を抜けました。ButtonProcessingが読み込まれていないか、インスタンス化されていません。\n  [場所] : <クラス> ${this.class} <メソッド> ${method}`);break;
    //        
    //        
    //    }
    //    
    //}
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブル・インプットボックスの作成                                                        *
    // *********************************************************************************************
    TableProcessings(){
        
        //let self = this.getClass();
        
        // データ取得
        let table_data    = this.getData();
        let inputbox_data = this.ProcessingInputBoxData(table_data["data"],table_data["tier"]);
        
        // テーブル作成
        this.TableHandler.set_table_css ("AdminScreenModel-Table");
        this.TableHandler.set_table_height(this.table_height);
        this.TableHandler.set_table_data_mousedown_event(this.TableDataClickEvent           );
        this.TableHandler.set_select_table(true);
        this.TableHandler.set_create_table_data_callback(this.TableDataCreateCallBack       );
        this.TableHandler.set_create_table_column_callback     (this.TableColumnCreateCallBack     );
        this.TableHandler.TableProcessing               (table_data["data"],this.table_frame);
        
        ///this.InputBoxCreateCallBack();
        
        // インプットボックス作成
        this.TableHandler.set_create_input_callback(this.InputBoxCreateCallBack.bind(this)   );
        this.TableHandler.set_create_label_callback(this.LabelCreateCallBack      );
        this.TableHandler.InputBoxProcessing           (inputbox_data,this.input_frame);
        this.inputbox = this.TableHandler.get_inputbox();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブルを押したときのイベント                                                            *
    // *********************************************************************************************
    TableDataClickEvent = (e) => {
        
        // エラー判定
        if( this.RUB_button == null){return;}                        ;                              // 登録・更新・削除ボタンが存在しない場合処理を抜ける
        let backgroundcolor =  window.getComputedStyle(this.RUB_button).background;                              // 登録・更新・削除ボタン背景色取得
        
        let skip = false;
        this.RUB_button.classList.forEach( Class => {
            
            if(Class == this.register_button_css || Class == this.button_inactive_css){ skip = true; return; };
            
        });
        
        if(skip){return;}                 ;                              // 登録・更新・削除ボタンがモード未選択の場合は処理を抜ける
        
        // 要素取得
        let target_record         = e.target.parentElement;
        let table_children        = target_record.children;
        
        // 押したデータをインプットボックスに表示する
        for(let table_data of table_children){
            
            for(let key in this.inputbox){                                                          // インプットボックスの列を回す
                
                let parent         = this.inputbox[key];
                let input_children = parent.querySelectorAll("input,select,textarea");
                
                for(let inputbox of input_children){                                                      // 列の中の子要素で回す
                    
                    // columnデータ取得
                    let table_column   = table_data.id.split("_");
                    let input_column   = inputbox  .id.split("_");
                    
                    // columnが一致するインプットボックスに選択されたデータを入れる
                    if(table_column[2] == input_column[1]){
                        
                        // inputboxのtypeによって処理を分ける
                        if(inputbox.type == "checkbox"){
                            
                            inputbox.checked = table_data.innerText == this.checkbox_judge_value ? true : false;
                            
                        }else{
                        
                            inputbox.value = table_data.innerText;
                            if(inputbox.Constraints != undefined){inputbox.Constraints(inputbox)};
                        
                        }
                        
                    };
                    
                }
                
            }
            
        }
        
        this.clearSelectRecord();
        
        this.selected_record = table_children;
        
        // 押したレコードの色を変更
        for(let elem of table_children){
            elem.style.background  = backgroundcolor;
        };
        
    }
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブルカラム作成時のコールバック処理                                                    *
    // *********************************************************************************************
    TableColumnCreateCallBack(elem,key){return elem;};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブルデータ作成時のコールバック処理                                                    *
    // *********************************************************************************************
    TableDataCreateCallBack(elem,key){return elem;};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   インプットボックス作成時のコールバック処理                                                *
    // *********************************************************************************************
    InputBoxCreateCallBack(elem,key,frame){return elem;};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   ラベル作成時のコールバック処理                                                            *
    // *********************************************************************************************
    LabelCreateCallBack(elem,key,frame){return elem;};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   インプットボックスを空にする                                                              *
    // *********************************************************************************************
    clearInputBox = () => {
        
        for(let key in  this.inputbox){
            
            let parent   = this.inputbox[key]              ;
            let children = parent.querySelectorAll("input,select,textarea");
            
            for(let elem of children){
                
                // inputboxのtypeによって処理を分ける
                if(elem.type == "checkbox"){
                    
                    elem.checked = false;
                    
                }else if(elem.tagName == "SELECT"){
                    
                    elem.selectedIndex = 0;
                    
                }else{
                    
                    elem.value = elem.defaultvalue == undefined ? "" : elem.defaultvalue;
                    
                }
                //elem.value = "";
                
            }
            
        }
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   選択されているテーブルレコードの色をもとに戻す                                            *
    // *********************************************************************************************
    clearSelectRecord = () =>{
        
        if(this.selected_record != null){
            for(let elem of this.selected_record){elem.style.background = "";};
            this.selected_record = null;
        };
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   カラムの実widthサイズとその最大サイズを求める                                             *
    // *********************************************************************************************
    getInputBoxActuallyWidthAndMax = () => {
        
        // 初期化
        let max_column           = 0 ;
        let column_size_list     = {};
        
        // カラムの実widthサイズを取得
        for(let key in  this.inputbox){                                                             // 行のフレームごとで回す
            
            // 要素取得
            let parent   = this.inputbox[key]                              ;
            let children = parent.querySelectorAll("input,select,textarea");
            
            for(let elem of children){                                                              // 行の中の要素で回す
                
                let column                    = elem.id.split("_")[1]           ;                   // カラムテキスト取得
                let dummy_elem                = document.createElement("label") ;                   // カラム実widthサイズ取得用要素作成
                    dummy_elem.innerText      = column                          ;
                    dummy_elem.style.fontSize = this.popup_font_size            ;
                document.body.appendChild  (dummy_elem)                         ;
                let size                      = dummy_elem.offsetWidth          ;                   // カラム実widthサイズ取得
                column_size_list[column]      = size                            ;                   // カラムサイズ格納リストに格納
                
                // 最大サイズ取得
                max_column            = max_column > size ? max_column : size   ;
                
                // 要素削除
                dummy_elem.remove();
                
            }
            
        }
        
        // 取得したカラム実サイズと最大サイズを返す
        return {
                "column" : column_size_list     ,
                "max"    : max_column           ,
                };
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブルに表示するデータを取得する                                                        *
    // [返り値]                                                                                    *
    //   テーブルに表示するデータ                                                                  *
    // *********************************************************************************************
    getData(){};
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   getDataで取得したデータをインプットボックスのラベル用に加工する                           *
    // *********************************************************************************************
    ProcessingInputBoxData(data,tier = null){
        
        // 初期化
        let input_box_data = [];
        let No             = 0 ;
        
        // データ加工
        for(let data_key in data[0]){                                                               // テーブル作成用データのkeyで回す
            
            // インプットボックスデータ格納
            input_box_data[No]         = {}      ;
            input_box_data[No]["data"] = data_key;
            input_box_data[No]["tier"] = No      ;
            
            // tierがセットされていない場合は次のループへ
            if(tier == null){No++;continue;};
            
            // tier取得
            for(let tier_key in tier){                                                              // テーブル作成用データの階層データのkeyで回す
                
                if(data_key == tier_key){
                    
                    input_box_data[No]["tier"] = tier[tier_key];
                    
                }
                
            }
            
            No++;
            
        }
        
        return input_box_data;
        
    }
    

    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   終了処理                                                                                  *
    // *********************************************************************************************
    finish = () =>{
        
        this.maine_frame.innerHTML = "";
        
    }
    
}
