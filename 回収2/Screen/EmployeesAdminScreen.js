
// *****************************************************************************************************************************************************************************************************
// [処理概要]
//   社員管理画面
// *****************************************************************************************************************************************************************************************************
class EmployeesAdminScreen extends AdminScreenModel{
    
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
        let tier  = {
            
            "社員番号"   : "1",
            "氏名"       : "1",
            "生年月日"   : "2",
            "入社日"     : "2",
            "pt"         : "3",
            "Expt"       : "3",
            "学歴"       : "4",
            "勤続年数"   : "4",
            "IT経歴"     : "5",
            "IT以外経歴" : "5",
            "削除フラグ" : "6",
            
        };
        
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
                let delete_flg          = document.createElement("input");
                delete_flg.id           = elem.id                        ;
                delete_flg.type         = "checkbox"                     ;
                delete_flg.style.width  = 20                             ;
                delete_flg.style.height = 20                             ;
                delete_flg.style.margin = 0                              ;
                
                return delete_flg;
                
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
                option.value     = "-";
                option.innerText = "-";
                
                academic.appendChild(option);
                
                option           = document.createElement("option");
                option.value     = "高卒";
                option.innerText = "高卒";
                
                academic.appendChild(option);
                
                return academic;
                
            break;
            
        }
        
        return elem;
        
    }
    
}



