// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   社員管理画面
// *****************************************************************************************************************************************************************************************************
class EmployeesAdminScreen extends AdminScreenModel{
    
    //constructor(elem){
    //    super(elem);
    //    this.Add_RegisterButtonMouseDownEvent();
    //}
    
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "社員管理画面";};
    
    // ************************************************************************
    // 社員データを取得する                                                   *
    // ************************************************************************
    getData(){
        let data = [];
        
        // 
        // 何行目かを指定
        // 
        let tier  = {
            
            "社員番号"   : "1",
            "氏名"       : "2",
            "生年月日"   : "3",
            "入社日"     : "3",
            "pt"         : "4",
            "Expt"       : "4",
            "学歴"       : "5",
            "勤続年数"   : "5",
            "IT経歴"     : "6",
            "IT以外経歴" : "6",
            "削除フラグ" : "7",
            
        };
        
        // 
        // テストデータ
        // 
        for(let i=0;i<20;i++){
            data[0] = {
                   "社員番号"  :"IS2023001",
                   "氏名"      :"斎藤 一郎",
                   "生年月日"  :"2001年",
                   "入社日"    :"2022年5月",
                   "pt"        :"1",
                   "Expt"      :"1",
                   "学歴"      :"高卒",
                   "勤続年数"  :"1",
                   "IT経歴"    :"1",
                   "IT以外経歴":"1",
                   "削除フラグ":"1",
            };
        }
        
        return {"data":data,"tier":tier};
    }
    
    // ************************************************************************
    // [処理概要]
    //   テーブルカラム作成時コールバック
    // ************************************************************************
    TableColumnCreateCallBack(td,key,frame,tr){
        
        switch(key){
            case "削除フラグ":
                return null;
            break;
        }
        
        return td;
        
    }
    
    // ************************************************************************
    // [処理概要]
    //   テーブルデータ作成時コールバック
    // ************************************************************************
    TableDataCreateCallBack(td,key,frame,tr){
        
        switch(key){
            case "削除フラグ":
                return null;
            break;
        }
        
        return td;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   インプットボックス作成時のコールバック処理                           *
    // ************************************************************************
    InputBoxCreateCallBack(elem,key,frame){
        
        switch(key){
            
            
            
            // -----------------------+
            // 削除フラグ             |
            // -----------------------+
            case "削除フラグ":
                
                // チェックボックス要素作成
                //let delete_flg          = document.createElement("input");
                //delete_flg.id           = elem.id                        ;
                //delete_flg.type         = "checkbox"                     ;
                //delete_flg.style.width  = 20                             ;
                //delete_flg.style.height = 20                             ;
                //delete_flg.style.margin = 0                              ;
                
                return null;
                
                //return delete_flg;
                
            break;
            
            // -----------------------+
            // pt                     |
            // -----------------------+
            case "pt":
                
                
                
                //elem.type = "number";
                //elem.max  = 255     ;
                //elem.min  = 0       ;
                
                this.InputConstraintsProcessing.apply_NumberConstraints(elem,255,0);
                
                
                
            break;
            
            // -----------------------+
            // Expt                   |
            // -----------------------+
            case "Expt":
                
                
                
                //elem.type = "number";
                //elem.max  = 255     ;
                //elem.min  = 0       ;
                
                this.InputConstraintsProcessing.apply_NumberConstraints(elem,255,0);
                
                
                
            break;

            
            // -----------------------+
            // 学歴                   |
            // -----------------------+
            case "学歴":
                
                // セレクト要素作成
                let academic          = document.createElement("select");
                academic.id           = elem.id                         ;
                academic.style.width  = elem.style.width                ;
                academic.style.height = elem.style.height               ;
                
                // オプション要素作成
                let option       = document.createElement("option");
                option.value     = "-" ;
                option.innerText = "-" ;
                //option.selected  = true;
                
                academic.appendChild(option);
                
                option           = document.createElement("option");
                option.value     = "高卒";
                option.innerText = "高卒";
                
                academic.appendChild(option);
                
                return academic;
                
            break;
            
            case "勤続年数":
                this.InputConstraintsProcessing.apply_AgeConstraints(elem);
            break;
            
            case "IT経歴":
                this.InputConstraintsProcessing.apply_AgeConstraints(elem);
            break;
            
            case "IT以外経歴":
                this.InputConstraintsProcessing.apply_AgeConstraints(elem);
            break;
            
            case "生年月日":
                
                this.InputConstraintsProcessing.apply_DateConstraints(elem);
                
            break;
            
            case "入社日":
                
                this.InputConstraintsProcessing.apply_DateConstraints(elem);
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]
    //   ラベル作成時コールバック処理
    // ************************************************************************
    LabelCreateCallBack(elem,key,frame){
        
        switch(key){
            
            case "削除フラグ":
                return null;
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   登録モードボタン押下時の入力欄 活性・非活性操作                      *
    // ************************************************************************
    Add_RegisterButtonMouseDownEvent(){
        
        for(let key in this.inputbox){
            
            let label     = this.inputbox[key].querySelectorAll("label");
            let inputbox_s = this.inputbox[key].querySelectorAll("input,select,textarea");
            
            for(let i = 0; i < label.length; i++){
                
                let column   = label[i].innerText;
                let inputbox = inputbox_s[i];
                
                switch(column){
                    
                    case"社員番号"  :inputbox.disabled = false;break;
                    case"氏名"      :inputbox.disabled = false;break;
                    case"生年月日"  :inputbox.disabled = false;break;
                    case"入社日"    :inputbox.disabled = false;break;
                    case"pt"        :inputbox.disabled = false;break;
                    case"Expt"      :inputbox.disabled = false;break;
                    case"学歴"      :inputbox.disabled = false;break;
                    case"勤続年数"  :inputbox.disabled = false;break;
                    case"IT経歴"    :inputbox.disabled = false;break;
                    case"IT以外経歴":inputbox.disabled = false;break;
                    //case"削除フラグ":inputbox.disabled = true ;break;
                    
                }
            
            }
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   更新モードボタン押下時の入力欄 活性・非活性                          *
    // ************************************************************************
    Add_UpdateButtonMouseDownEvent(){
        
        for(let key in this.inputbox){
            
            let label     = this.inputbox[key].querySelectorAll("label");
            let inputbox_s = this.inputbox[key].querySelectorAll("input,select,textarea");
            
            for(let i = 0; i < label.length; i++){
                
                let column   = label[i].innerText;
                let inputbox = inputbox_s[i];
                
                switch(column){
                    
                    case"社員番号"  :inputbox.disabled = true ;break;
                    case"氏名"      :inputbox.disabled = false;break;
                    case"生年月日"  :inputbox.disabled = false;break;
                    case"入社日"    :inputbox.disabled = false;break;
                    case"pt"        :inputbox.disabled = false;break;
                    case"Expt"      :inputbox.disabled = false;break;
                    case"学歴"      :inputbox.disabled = false;break;
                    case"勤続年数"  :inputbox.disabled = false;break;
                    case"IT経歴"    :inputbox.disabled = false;break;
                    case"IT以外経歴":inputbox.disabled = false;break;
                    //case"削除フラグ":inputbox.disabled = false;break;
                    
                }
            
            }
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   削除モードボタン押下時の入力欄 活性・非活性                          *
    // ************************************************************************
    Add_DeleteButtonMouseDownEvent(){
        
        for(let key in this.inputbox){
            
            let label      = this.inputbox[key].querySelectorAll("label");
            let inputbox_s = this.inputbox[key].querySelectorAll("input,select,textarea");
            
            for(let i = 0; i < label.length; i++){
                
                let column   = label[i].innerText;
                let inputbox = inputbox_s[i];
                
                switch(column){
                    
                    case"社員番号"  :inputbox.disabled = true ;break;
                    case"氏名"      :inputbox.disabled = true ;break;
                    case"生年月日"  :inputbox.disabled = true ;break;
                    case"入社日"    :inputbox.disabled = true ;break;
                    case"pt"        :inputbox.disabled = true ;break;
                    case"Expt"      :inputbox.disabled = true ;break;
                    case"学歴"      :inputbox.disabled = true ;break;
                    case"勤続年数"  :inputbox.disabled = true ;break;
                    case"IT経歴"    :inputbox.disabled = true ;break;
                    case"IT以外経歴":inputbox.disabled = true ;break;
                    //case"削除フラグ":inputbox.disabled = true ;break;
                    
                }
            
            }
            
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   更新ボタン押下時の処理                                               *
    // ************************************************************************
    UpdateButtonEventCheck(){
        
        // テーブルデータ未選択の場合
        if(this.selected_record == null){this.ShowMessagePopup("[必須] : テーブルから更新するデータを選択してください。",20,"#000000");return false;};
        
        // ---------------------------------+
        // 準備                             |
        // ---------------------------------+
        let original_data = {};
        let new_data      = {};
        let no_input_text = [];
        
        // ---------------------------------+
        // 更新前データ取得                 |
        // ---------------------------------+
        for(let key in this.selected_record){
            
            if(!(this.selected_record[key] instanceof HTMLElement)){continue;};
            
            let column =  this.selected_record[key].id.split("_")[2];
            
            original_data[column] = this.selected_record[key].innerText;
            
        }
        
        // ---------------------------------+
        // 更新後データ取得                 |
        // ---------------------------------+
        for(let key in this.inputbox){
            
            let column = this.inputbox[key].querySelectorAll("input,select,textarea");
            
            for(let InputField of column){
                
                let column =  InputField.id.split("_")[1];
                new_data[column] = InputField.value;
                
            }
            
        }
        
        // ---------------------------------+
        // エラーチェック                   |
        // ---------------------------------+
        if(original_data["社員番号"] != new_data["社員番号"]){this.ShowMessagePopup("[警告] : 更新前と更新後で社員番号が違います。",20,"red");return false;}
        
        if(new_data["社員番号"  ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 社員番号  を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["氏名"      ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 氏名      を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["生年月日"  ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 生年月日  を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["入社日"    ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 入社日    を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["pt"        ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : pt        を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["Expt"      ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : Expt      を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["学歴"      ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 学歴      を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["勤続年数"  ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : 勤続年数  を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["IT経歴"    ] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : IT経験    を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        if(new_data["IT以外経歴"] == ""){no_input_text[no_input_text.length] = []; no_input_text[no_input_text.length - 1].text = "[必須] : IT以外経験を入力してください。";no_input_text[no_input_text.length - 1].color = "red";no_input_text[no_input_text.length - 1].size ="15"};
        
        // エラーがある場合はエラーポップアップを表示
        if(no_input_text.length > 0 ){this.ShowMessagePopup(no_input_text);return false;}
        
        // 問題ない場合は更新処理確認のポップアップを表示
        return true;
        
    }
    
}
