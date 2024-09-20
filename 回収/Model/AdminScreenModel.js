class AdminScreenModel{
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   コンストラクタ                                                                            *
    // *********************************************************************************************
    constructor(elem){
        
        this.class                            = "TableScreen"                          ;            // ログ出力用クラス名
        
        // フレーム
        this.maine_frame                      = elem                                   ;            // 画面のメインフレーム
        this.table_frame                      = null                                   ;            // テーブルのフレーム
        this.button_frame                     = null                                   ;            // ボタンのフレーム
        this.input_frame                      = null                                   ;            // インプットボックスのフレーム
        
        // ボタン
        this.register_button                  = null                                   ;            // 登録ボタンの要素
        this.update_button                    = null                                   ;            // 更新ボタンの要素
        this.delete_button                    = null                                   ;            // 削除ボタンの要素
        this.RUB_button                       = null                                   ;            // 登録・更新・削除ボタンの要素
        
        // クラス
        this.ButtonProcessing                     = null                                   ;            // ボタン作成クラス
        this.TableProcessing                      = null                                   ;            // テーブル作成クラス
        
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
        
        this.popup_min_width                  = 800                                    ;            // ポップアップの横幅
        this.popup_min_height                 = 400                                      ;            // ポップアップの縦幅
        this.popup_font_size                  = 15                                     ;            // ポップアップのフォントサイズ
        
        this.table_width                      = 700                                    ;            // テーブルの横幅
        this.table_height                     = 400                                    ;            // テーブルの縦幅
        
        this.maine_frame_width                = parseInt(this.maine_frame.style.width );            // メインフレームの横幅
        this.maine_frame_height               = parseInt(this.maine_frame.style.height);            // メインフレームの縦幅
        
        this.head_height                      = 40                                     ;            // ヘッダとの余白
        
        this.padding                          = 15                                     ;            // 余白
        
        this.selected_record                  = null                                   ;            // 選択されているレコード要素を保管する
        
        this.checkbox_judge_value             = 1                                      ;            // チェックボックス要素の時のtrue判定
        
        this.CreateScreen();                                                                        // 画面を作成する
        
    }
    
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
        
        // 登録ポップアップ設定
        this.RegisterPopupSetting();
        this.UpdatePopupSetting();
        this.DeletePopupSetting();
        
        // テーブル・インプットボックスを作成する
        this.TableProcessings();
        
        // 登録モード
        this.CreateRegisterButton();
        //
        // 削除モード
        this.CreateDeleteButton();
        //
        // 更新モード
        this.CreateUpdateButton();
        //
        // 登録・更新・削除
        this.Create_RUD_Button();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   フレーム作成                                                                              *
    // *********************************************************************************************
    CreateFrame(){
        
        // テーブルフレーム作成
        this.table_frame                 = document.createElement("div")                                                    ;
        this.table_frame.style.width     = this.table_width                                                                 ;
        this.table_frame.style.height    = this.table_height                                                                ;
        this.table_frame.style.position  = "absolute"                                                                       ;
        this.table_frame.style.top       = this.head_height + this.button_height                                            ;
        this.table_frame.style.left      = this.padding                                                                     ;
        
        // ボタンフレーム
        this.button_frame                = document.createElement("div")                                                    ;
        this.button_frame.style.width    = (this.maine_frame_width - ( this.table_width + this.padding )) - (this.padding*2);
        this.button_frame.style.height   = this.button_height + 20                                                          ;
        this.button_frame.style.position = "absolute"                                                                       ;
        this.button_frame.style.top      = this.head_height                                                                 ;
        this.button_frame.style.right    = this.padding                                                                     ;
        
        // インプットフレーム
        this.input_frame                 = document.createElement("div");
        this.input_frame.style.width     = (this.maine_frame_width - ( this.table_width + this.padding )) - (this.padding*2);
        this.input_frame.style.height    = this.table_height - parseInt(this.button_frame.style.height)                     ;
        this.input_frame.style.position  = "absolute"                                                                       ;
        this.input_frame.style.top       = this.head_height  + parseInt(this.button_frame.style.height)                     ;
        this.input_frame.style.right     = this.padding                                                                     ;
        
        // 要素入れ込み
        document.body   .appendChild(this.maine_frame );
        this.maine_frame.appendChild(this.table_frame );
        this.maine_frame.appendChild(this.button_frame);
        this.maine_frame.appendChild(this.input_frame );
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateRegisterButton(){
        
        // エラー判定
        if(this.button_frame == null){this.log("frame" ,"CreateRegisterButton");return;};
        if(this.ButtonProcessing == null){this.log("button","CreateRegisterButton");return;};
        
        // ボタン作成クラスが作成されていない場合処理を抜ける
        if(this.ButtonProcessing == null){console.log("[注意] : ")};
        
        // 登録モードボタン作成
        this.ButtonProcessing.set_width                    (this.button_width                    );
        this.ButtonProcessing.set_height                   (this.button_height                   );
        this.ButtonProcessing.set_font_size                (this.button_font_size                );
        this.ButtonProcessing.set_background_color         (this.register_button_background_color);
        this.ButtonProcessing.set_shape                    ("1vh"                                );
        this.register_button = this.ButtonProcessing.create("登録モード",0,0                     );
        this.register_button.set_event                 (this.RegisterButtonDesignEvent       );
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateUpdateButton(){
        
        // エラー判定
        if(this.button_frame == null){this.log("frame" ,"CreateUpdateButton");return;};
        if(this.ButtonProcessing == null){this.log("button","CreateUpdateButton");return;};
        
        // 更新モードボタン作成
        this.ButtonProcessing.set_width                  (this.button_width                     );
        this.ButtonProcessing.set_height                 (this.button_height                    );
        this.ButtonProcessing.set_font_size              (this.button_font_size                 );
        this.ButtonProcessing.set_background_color       (this.update_button_background_color   );
        this.ButtonProcessing.set_shape                  ("1vh"                                 );
        this.update_button = this.ButtonProcessing.create("更新モード",0,this.button_width + 10 );
        this.update_button.set_event                 (this.UpdateButtonDesignEvent);
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除モードボタン作成                                                                      *
    // *********************************************************************************************
    CreateDeleteButton(){
        
        // エラー判定
        if(this.button_frame == null){this.log("frame" ,"CreateDeleteButton");return;};
        if(this.ButtonProcessing == null){this.log("button","CreateDeleteButton");return;};
        
        // 削除モードボタン作成
        this.ButtonProcessing.set_width                  (this.button_width                         );
        this.ButtonProcessing.set_height                 (this.button_height                        );
        this.ButtonProcessing.set_font_size              (this.button_font_size                     );
        this.ButtonProcessing.set_background_color       (this.delete_button_background_color       );
        this.ButtonProcessing.set_shape                  ("1vh"                                     );
        this.delete_button = this.ButtonProcessing.create("削除モード",0,this.button_width * 2 + 20 );
        this.delete_button.set_event                 (this.DeleteButtonDesignEvent);
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録・更新・削除ボタン作成                                                                *
    // *********************************************************************************************
    Create_RUD_Button(){
        
        // エラー判定
        if(this.button_frame == null){this.log("frame" ,"Create_RUD_Button");return;};
        if(this.ButtonProcessing == null){this.log("button","Create_RUD_Button");return;};
        
        let top  = (this.maine_frame_height - this.RUD_button_height) - this.padding
        let left = (this.maine_frame_width  - this.RUD_button_width ) - this.padding
        
        // ボタン作成
        this.ButtonProcessing.set_parent_elem         (this.maine_frame            );
        this.ButtonProcessing.set_width               (this.RUD_button_width       );
        this.ButtonProcessing.set_height              (this.RUD_button_height      );
        this.ButtonProcessing.set_font_size           (this.RUD_button_font_size   );
        this.ButtonProcessing.set_background_color    ("#808080"                   );
        this.ButtonProcessing.set_shape               ("100vh"                     );
        this.RUB_button = this.ButtonProcessing.create("モード未選択",top,left     );
        this.RUB_button.set_event                 (this.RUBButtonEvent         );
        this.RUB_button.Inactive                  ();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録モードボタンイベント                                                                  *
    // *********************************************************************************************
    RegisterButtonDesignEvent = () => {
        
        // 登録モードボタンをダウン
        this.register_button.Inactive();
        this.register_button.down    ();
        
        // 更新モードボタンをアップ
        this.update_button.Activity();
        this.update_button.up      ();
        
        // 削除モードボタンをアップ
        this.delete_button.Activity();
        this.delete_button.up      ();
        
        // 登録・更新・削除ボタンを登録ボタンにする
        this.RUB_button.set_text            ("登録"                               );
        this.RUB_button.set_background_color(this.register_button_background_color);
        this.RUB_button.set_font_color      ("ffffff"                             );
        this.RUB_button.Activity            ();
        this.RUB_button.up                  ();
        
        // テーブルとインプットボックスを綺麗にする
        this.clearInputBox    ();
        this.clearSelectRecord();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新モードボタンイベント                                                                  *
    // *********************************************************************************************
    UpdateButtonDesignEvent = () => {
        
        // 登録モードボタンをアップ
        this.register_button.Activity();
        this.register_button.up      ();
        
        // 更新モードボタンをダウン
        this.update_button.Inactive();
        this.update_button.down    ();
        
        // 削除モードボタンをアップ
        this.delete_button.Activity();
        this.delete_button.up      ();
        
        // 登録・更新・削除ボタンを更新ボタンにする
        this.RUB_button.set_text            ("更新"                             );
        this.RUB_button.set_background_color(this.update_button_background_color);
        this.RUB_button.set_font_color      ("ffffff"                           );
        this.RUB_button.Activity            ();
        this.RUB_button.up                  ();
        
        // テーブルとインプットボックスを綺麗にする
        this.clearInputBox    ();
        this.clearSelectRecord();
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除モードボタンイベント                                                                  *
    // *********************************************************************************************
    DeleteButtonDesignEvent = () => {
        
        // 登録モードボタンをアップ
        this.register_button.Activity();
        this.register_button.up      ();
        
        // 更新モードボタンをアップ
        this.update_button.Activity();
        this.update_button.up      ();
        
        // 削除モードボタンをダウン
        this.delete_button.Inactive();
        this.delete_button.down    ();
        
        // 登録・更新・削除ボタンを削除ボタンにすうる
        this.RUB_button.set_text            ("削除"                             );
        this.RUB_button.set_background_color(this.delete_button_background_color);
        this.RUB_button.set_font_color      ("ffffff"                           );
        this.RUB_button.Activity            ();
        this.RUB_button.up                  ();
        
        // テーブルとインプットボックスを綺麗にする
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
            
            case "登録":
                
                this.RegisterButtonEvent();
                
            break;
            
            case "更新":
                
                this.UpdateButtonEvent();
                
            break;
            
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
        
        // 登録ポップアップテキストヘッダ作成
        this.RegisterPopup.set_text_box_text ("下記データを登録しますか？","#000000",this.popup_font_size,true);
        this.RegisterPopup.set_text_box_text ("<hr></hr>"                 ,"#000000",10                       );
        
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
        
        // 更新ポップアップテキストヘッダ作成
        this.UpdatePopup.set_text_box_text ("下記データに更新しますか？","#000000",this.popup_font_size,true);
        this.UpdatePopup.set_text_box_text ("<hr></hr>"                 ,"#000000",10                       );
        
        // 更新ポップアップにインプットボックスのデータを表示
        this.SettingInputBoxDataInThePopupComparison(this.UpdatePopup);
        
        // 更新ポップアップ表示
        this.UpdatePopup.show();
        
    };
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   削除ボタンイベント                                                                        *
    // *********************************************************************************************
    DeleteButtonEvent = () => {
        
        // 削除ポップアップテキストヘッダ作成
        this.DeletePopup.set_text_box_text ("下記データを削除しますか？","#000000",this.popup_font_size,true);
        this.DeletePopup.set_text_box_text ("<hr></hr>"                 ,"#000000",10                       );
        
        // 削除ポップアップにインプットボックスのデータを表示
        this.SettingInputBoxDataInThePopup(this.DeletePopup);
        
        // 削除ポップアップ表示
        this.DeletePopup.show();
        
    };
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   登録ポップアップの設定をする                                                              *
    // *********************************************************************************************
    RegisterPopupSetting(){
        
        // 登録ポップアップの設定
        this.RegisterPopup.set_width                (this.popup_min_width                 );
        this.RegisterPopup.set_height               (this.popup_min_height                );
        this.RegisterPopup.set_create_button_type   ("Text_Cancel"                        );        // ボタンの         タイプ選択
        this.RegisterPopup.set_text_button_text     ("登録"                               );        // テキストボタンの テキスト
        this.RegisterPopup.set_text_background_color(this.register_button_background_color);        // テキストボタンの 背景色
        this.RegisterPopup.set_text_font_color      ("#ffffff"                            );        // テキストボタンの フォントカラー
        this.RegisterPopup.set_ClickEvent           (this.RegisterPopupButtonEvent        );        // テキストボタン   押下時のイベント
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   更新ポップアップの設定をする                                                              *
    // *********************************************************************************************
    UpdatePopupSetting(){
        
        // 更新ポップアップの設定
        this.UpdatePopup.set_width                  (this.popup_min_width                 );
        this.UpdatePopup.set_height                 (this.popup_min_height                );
        this.UpdatePopup.set_create_button_type     ("Text_Cancel"                        );        // ボタンの         タイプ選択
        this.UpdatePopup.set_text_button_text       ("更新"                               );        // テキストボタンの テキスト
        this.UpdatePopup.set_text_background_color  (this.update_button_background_color  );        // テキストボタンの 背景色
        this.UpdatePopup.set_text_font_color        ("#ffffff"                            );        // テキストボタンの フォントカラー
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
        this.DeletePopup.set_create_button_type     ("Text_Cancel"                        );        // ボタンの         タイプ選択
        this.DeletePopup.set_text_button_text       ("削除"                               );        // テキストボタンの テキスト
        this.DeletePopup.set_text_background_color  (this.delete_button_background_color  );        // テキストボタンの 背景色
        this.DeletePopup.set_text_font_color        ("#ffffff"                            );        // テキストボタンの フォントカラー
        this.DeletePopup.set_ClickEvent             (this.RegisterPopupButtonEvent        );        // テキストボタン   押下時のイベント
        
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
    SettingInputBoxDataInThePopup = (popup_obj = null) => {
        
        // エラー判定
        if(popup_obj == null){return;};
        
        // 値取得・初期化
        let inputbox_actually_width = this.getInputBoxActuallyWidthAndMax();                        // インプットボックスに入力されている文字を表示したときの最大横幅を取得
        let hr_size                 = (this.popup_min_width / 10) * 9      ;                        // hrのサイズ取得
        let bottom_border_elem      = null                                 ;                        // 一番下のボーダー要素
        let OK_button_elem          = null                                 ;                        // OKボタン要素
        
        // ポップアップに表示するテキスト作成
        for(let key in  this.inputbox){                                                             // インプットボックスの行フレームごとで回す
            
            // インプットボックス要素取得
            let parent   = this.inputbox[key]                              ;
            let children = parent.querySelectorAll("input,select,textarea");
            
            for(let elem of children){                                                              // 行フレーム内のインプットボックスで回す
                
                // 値取得・初期化
                let column                = elem.id.split("_")[1]          ;                        // インプットボックスの カラム名
                let value                 = elem.value.replace(/\n/g, '')  ;                        // インプットボックスの カラムに対応したデータ
                let text_max_width        = this.popup_min_width / 2       ;                        // テキストを表示する領域の最大横幅
                let braces_padding        = 0                              ;                        // カラム名の横幅調整用
                let tier_text_list        = null                           ;                        // 改行ごとのテキスト一覧
                
                // カラムに空白を追加して大きさをそろえる
                braces_padding = (((inputbox_actually_width["max"] - inputbox_actually_width["column"][column]))) / 2 ;
                
                // チェックボックスの要素は別で値を取得
                if(elem.type == "checkbox"){ value = elem.checked ? "☑" : "□";};
                
                // 実際に表示したときの改行ごとのテキストを取得
                tier_text_list = this.GettingTextNewline(value,text_max_width);
                
                // ポップアップに表示するテキストを作成する
                for(let key in tier_text_list){                                                     // 改行ごとに取得したデータで回す
                    
                    // 値取得・初期化
                    let one_tier_value                                     ;                        // 一行分に表示するの値
                    let right_braces = column == "" ? "" : "　]　:"        ;                        // 右側のかっこ
                    let left_braces  = column == "" ? "" : "[　"           ;                        // 左側のかっこ
                    
                    // 表示するデータを取得
                    one_tier_value = tier_text_list[key]["text"];
                    
                    // 登録ポップアップにテキストを表示
                    popup_obj.set_text_box_text (     // 入れ込むHTML要素
                                                               `<span style="text-align:right; width:${text_max_width}; display:inline-block; ">                               `+
                                                               `    <span style="padding-right:${braces_padding}">${left_braces}</span>                                        `+
                                                               `    <span>${column}</span>                                                                                     `+
                                                               `    <span style="padding-left:${braces_padding}">${right_braces}</span>                                        `+
                                                               `</span>                                                                                                        `+
                                                               `<span style="text-align:left ; width:${text_max_width - 20}; display:inline-block; ">　${one_tier_value}</span>`
                                                                
                                                               // カラーとフォントサイズ指定
                                                               ,"#000000",this.popup_font_size,
                                                                
                                                          );
                    
                    // カラムを初期化
                    column = "";
                }
                
                // カラムごとにボーダーを引く
                popup_obj.set_text_box_text(`<hr style='border-top: 1px dashed #000000;align:center;width:${hr_size};margin:5 auto 5 auto;;'></hr>`,"#000000",8);
                
            }
            
        }
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   ポップアップテキストにインプットボックスに入力された値をセットする(比較あり)             *
    //   ※冗長性のためにわける                                                                   *
    // ********************************************************************************************
    SettingInputBoxDataInThePopupComparison = (popup_obj = null) => {
        
        // エラー判定
        if(popup_obj == null||this.selected_record == null){return;};
        
        // インプットボックス要素の最大文字数を取得
        let inputbox_actually_width = this.getInputBoxActuallyWidthAndMax();                        // インプットボックスに入力されている文字を表示したときの最大横幅を取
        let selected_record         = {}                                   ;                        // 現在選択されているレコードデータ格納用
        let hr_size                 = (this.popup_min_width / 10) * 9      ;                        // hrのサイズ取得
        
        // 現在選択されているレコード
        for(let value of this.selected_record){
            
            let id              = value.id.split("_")[2];                                           // idからカラム名を取得する
            selected_record[id] = value                 ;                                           // データを格納する
            
        }
        
        // 登録ポップアップに表示するテキスト作成
        for(let key in  this.inputbox){                                                             // インプットボックスの行フレームごとで回す
            
            // インプットボックス要素取得
            let parent   = this.inputbox[key]                              ;
            let children = parent.querySelectorAll("input,select,textarea");
            
            for(let elem of children){                                                              // 行フレーム内のインプットボックスで回す
                
                // 値取得・初期化
                let column                           = elem.id.split("_")[1]            ;           // インプットボックスの カラム名
                let value                            = elem.value.replace(/\n/g, '')    ;           // インプットボックスの カラムに対応したデータ
                let select_value                     = selected_record[column].innerText;           // 比較元データ
                let text_max_width                   = this.popup_min_width / 3         ;           // テキストを表示する領域の最大横幅
                let braces_padding                   = 0                                ;           // カラム名の横幅調整用
                let tier_text_list                   = null                             ;           // 改行ごとの比較テキスト一覧
                let tier_comparison_text_list        = null                             ;           // 改行ごとの比較元テキスト一覧
                let tier_text_list_length            = 0                                ;           // 改行ごとの比較テキストの改行数
                let tier_comparison_text_list_length = 0                                ;           // 改行ごとの比較元テキストの改行数
                let tier_num                         = 0                                ;           // 改行数を数える
                let arrow                            = "➡"                             ;           // 比較元～比較のやじるし
                
                // カラムに空白を追加して大きさをそろえる
                braces_padding = (((inputbox_actually_width["max"] - inputbox_actually_width["column"][column]))) / 2 ;
                
                // チェックボックスの要素は別で値を取得
                if(elem.type == "checkbox"){ value = elem.checked ? "☑" : "□";select_value = select_value == this.checkbox_judge_value ? "☑" : "□";};
                
                // 実際に表示したときの改行ごとのテキストを取得
                tier_text_list            = this.GettingTextNewline(value       ,text_max_width);
                tier_comparison_text_list = this.GettingTextNewline(select_value,text_max_width);
                
                // 改行の最大数を取得
                tier_text_list_length            = Object.keys(tier_text_list           ).length;
                tier_comparison_text_list_length = Object.keys(tier_comparison_text_list).length;
                
                // 比較元データと比較データで改行数が最大のほうを取得する
                tier_num = tier_text_list_length > tier_comparison_text_list_length ? tier_text_list_length : tier_comparison_text_list_length;
                
                // ポップアップに表示するテキストを作成する
                for(let i = 1;i <= tier_num;i++){
                    
                    // 値取得・初期化
                    let one_tier_value                             ;                                // 一行分に表示する比較データ
                    let one_tier_comparison_value                  ;                                // 一行分に表示する比較元データ
                    let right_braces = column == "" ? "" : "　]　:";                                // 右側のかっこ
                    let left_braces  = column == "" ? "" : "[　"   ;                                // 左側のかっこ
                    let color                 =  "#000000"         ;                                // 更新があった個所に色をつけるためのカラー
                    
                    // 改行数分以内のデータを取得する
                    one_tier_value            = i <= tier_text_list_length            ? tier_text_list[i]["text"]            : "";
                    one_tier_comparison_value = i <= tier_comparison_text_list_length ? tier_comparison_text_list[i]["text"] : "";
                    
                    // 値が変更されていた場合は色を変更
                    color = one_tier_value == one_tier_comparison_value ? color : "#ff0000";
                    
                    // 登録ポップアップにテキストを表示
                    popup_obj.set_text_box_text (     // 入れ込むHTML要素
                                                               `<span style="text-align:right; width:${text_max_width}; display:inline-block; ">                                             `+
                                                               `    <span style="padding-right:${braces_padding}">${left_braces}</span>                                                      `+
                                                               `    <span>${column}</span>                                                                                                   `+
                                                               `    <span style="padding-left:${braces_padding}">${right_braces}</span>                                                      `+
                                                               `</span>                                                                                                                      `+
                                                               `<span style="text-align:left ; width:${text_max_width - 20}; display:inline-block; ">　${one_tier_comparison_value}</span>   `+
                                                               `<span style="color:${color}">${arrow}<span>                                                                                  `+
                                                               `<span style="text-align:left ; width:${text_max_width - 20}; display:inline-block;color:${color} ">　${one_tier_value}</span>`
                                                                
                                                               // カラーとフォントサイズ指定
                                                               ,"#000000",this.popup_font_size,
                                                                
                                                          );
                    
                    // 矢印初期化
                    arrow = "　";
                    
                    // カラムを初期化
                    column = "";
                }
                
                // カラムごとにボーダーを引く
                popup_obj.set_text_box_text(`<hr style='border-top: 1px dashed #000000;align:center;width:${hr_size};margin:5 auto 5 auto;;'></hr>`,"#000000",8);
                
            }
            
        }
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   表示するテキストがはみ出るときにはみ出ないように改行したテキストを返す(二分岐探索)       *
    // [引数]                                                                                     *
    //   value :                                                                                  *
    //   width :                                                                                  *
    // [返り値]                                                                                   *
    //   改行したテキスト(多次元配列)                                                             *
    //   Array[]       : 改行番号                                                                 *
    //   Array[][text] : 改行番号に対応したテキスト                                               *
    // ********************************************************************************************
    GettingTextNewline = (value,text_max_width) =>{
        
        let popup_text             = value;
        let slice_text             = ""   ;
        let tier_text_list         = {}   ;
        let tier_num               = 0    ;
        let while_compulsion_stop  = 1000 ;
        let while_compulsion_count = 0    ;
        
        // ---------------------------------------+
        // 改行が必要なテキストは改行させる       |
        // ---------------------------------------+
        while(1){
            
            // 初期化
            let tier_text              = ""   ;
            let cutting_area_start     = 0    ;
            let cutting_area_end       = 0    ;
            let width_check_text       = ""   ;
            
            // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
            while_compulsion_count++;
            if(while_compulsion_count > while_compulsion_stop){break;};
            
            // ダミー要素を作成して実際のテキストの横幅を取得する
            let dummy_elem            = document.createElement("label")        ;
            dummy_elem.innerText      = popup_text                             ;
            dummy_elem.style.font     = `bold ${this.popup_font_size}px Avenir`;
            document.body.appendChild(dummy_elem)                              ;
            let text_width            = dummy_elem.offsetWidth                 ;
            dummy_elem.remove();
            
            tier_num++;                                                                     // 行を数える
            
            // ------------------------------------+
            // 改行が必要ない場合OR最後の改行の場合|
            // ------------------------------------+
            if(text_width < text_max_width - (this.popup_font_size * 3)){
                
                // 改行ごとに表示するテキストを格納
                tier_text_list[tier_num]         = {}        ;
                tier_text_list[tier_num]["text"] = popup_text;
                
                break;
                
            };
            
            slice_text = popup_text;                                                         // 現在のテキストを入れる
            
            // -----------------------------------+
            // はみ出る場合は改行処理を行う       |
            // -----------------------------------+
            while(1){
                
                // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
                while_compulsion_count++;
                if(while_compulsion_count > while_compulsion_stop){break;};
                
                // 値取得
                let cutting_area_end     = parseInt(slice_text.length / 2)                                          ;     // 二分岐探索の分岐点を取得
                slice_text               = popup_text.slice(cutting_area_start,cutting_area_start+cutting_area_end) ;     // テキストを分岐させる
                width_check_text         = tier_text + slice_text                                                   ;     // 二分岐探索で表示が確定したテキストと分岐させたテキストを組み合わせる
                
                // ダミー要素を作成して実際のテキストの横幅を取得する
                let dummy_elem            = document.createElement("label")        ;
                dummy_elem.innerText      = width_check_text                       ;
                dummy_elem.style.font     = `bold ${this.popup_font_size}px Avenir`;
                document.body.appendChild(dummy_elem)                              ;
                let text_width            = dummy_elem.offsetWidth                 ;
                dummy_elem.remove();
                
                // -----------------------------------------+
                // はみ出ない場合                           |
                // -----------------------------------------+
                if(text_width <= text_max_width - (this.popup_font_size * 3)){
                    
                    // -----------------------------------------------+
                    // 二分岐探索終了                                 |
                    // -----------------------------------------------+
                    if((cutting_area_start + cutting_area_end) - cutting_area_start <= 0 || popup_text.length <= width_check_text.length || text_width == text_max_width - this.popup_font_size){
                        
                        let slip_count = 0;
                        // -----------------------------------------------------+
                        // 二分岐探索ですり抜けたテキスト分を追加する           |
                        // -----------------------------------------------------+
                        while(1){
                            
                            // whileが規定値よりも回った場合は強制終了(バグによるwhileの永遠ループを防ぐため)
                            while_compulsion_count++;
                            if(while_compulsion_count > while_compulsion_stop){break;};
                            
                            slip_count++;
                            let slip_text = popup_text.slice( cutting_area_start , (cutting_area_start + cutting_area_end) + slip_count );
                            slip_text     = width_check_text + slip_text                                                                 ;
                            
                            // ダミー要素を作成して実際のテキストの横幅を取得する
                            let dummy_elem            = document.createElement("label")        ;
                            dummy_elem.innerText      = slip_text                              ;
                            dummy_elem.style.font     = `bold ${this.popup_font_size}px Avenir`;
                            document.body.appendChild(dummy_elem)                              ;
                            let text_width            = dummy_elem.offsetWidth                 ;
                            dummy_elem.remove();
                            
                            // ---------------------------------------------------------------------+
                            // すり抜けたテキストを足しこんであふれたひとつ前のテキストまでを追加   |
                            // ---------------------------------------------------------------------+
                            if(text_width > text_max_width - (this.popup_font_size * 3)){
                                
                                slip_count--;
                                slip_text        = popup_text.slice( cutting_area_start , (cutting_area_start + cutting_area_end) + slip_count );
                                width_check_text = width_check_text + slip_text                                                                 ;
                                break;
                            }
                            
                        }
                        
                        popup_text                       = popup_text.slice(cutting_area_start + slip_count) ;     // 改行後のテキストを取得
                        tier_text_list[tier_num]         = {}                                                ;
                        tier_text_list[tier_num]["text"] = width_check_text                                  ;
                        
                        break;
                        
                    // -----------------------------------------------+
                    // 二分岐探索続行                                 |
                    // -----------------------------------------------+
                    }else{
                        
                        // 二分岐探索の折り返しを行う
                        cutting_area_start += cutting_area_end;                             // 折り返しの分岐点を取得
                        tier_text           = width_check_text;                             // はみ出ないことが確定したテキストを取得
                        
                    }
                }
                
            }
            
        }
        
        return tier_text_list;
        
    }
    
    
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   ログ出力                                                                                  *
    // [引数]                                                                                      *
    //   ログタイプ                                                                                *
    // *********************************************************************************************
    log = (type,method) => {
        
        switch(type){
            
            case "frame"  : console.error(`[警告] : フレームが作成されていなため処理を抜けました。this.CreateFrameを実行してください。\n  [場所] : <クラス> ${this.class} <メソッド> ${method}`); break;
            case "button" : console.error(`[警告] : ボタン作成クラスが存在しないため処理を抜けました。ButtonProcessingが読み込まれていないか、インスタンス化されていません。\n  [場所] : <クラス> ${this.class} <メソッド> ${method}`);break;
            
            
        }
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テーブル・インプットボックスの作成                                                        *
    // *********************************************************************************************
    TableProcessings(){
        
        let self = this.getClass();
        
        // データ取得
        let table_data    = this.getData();
        let inputbox_data = this.ProcessingInputBoxData(table_data["data"],table_data["tier"]);
        
        // テーブル作成
        this.TableHandler.set_table_data_mousedown_event(this.TableDataClickEvent           );
        this.TableHandler.set_create_table_data_callback      (self.TableDataCreateCallBack       );
        this.TableHandler.TableProcessing                         (table_data["data"],this.table_frame);
        
        ///this.InputBoxCreateCallBack();
        
        // インプットボックス作成
        this.TableHandler.set_create_input_callback(this.InputBoxCreateCallBack   );
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
        let backgroundcolor =  this.RUB_button.get_background_color();                              // 登録・更新・削除ボタン背景色取得
        if( backgroundcolor == "#808080"  ){return;}                 ;                              // 登録・更新・削除ボタンがモード未選択の場合は処理を抜ける
        
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
                        
                        }
                        
                    };
                    
                }
                
            }
            
        }
        
        this.clearSelectRecord();
        
        this.selected_record = table_children;
        
        // 押したレコードの色を変更
        for(let elem of table_children){
            elem.style.backgroundColor  = backgroundcolor;
        };
        
    }
    
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
                    
                }else{
                    
                    elem.value = "";
                    
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
            for(let elem of this.selected_record){elem.style.backgroundColor = elem.defaultbackgroundColor;};
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

