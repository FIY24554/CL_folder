// ****************************************************************************************************************************************************************************************************
// [処理概要]
//   会社評価管理画面
// ****************************************************************************************************************************************************************************************************
class CompanyEvaluationAdminScreen extends AdminScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面名を返す                                                         *
    // ************************************************************************
    getScreenName = () =>{return "会社評価画面";};
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   会社評価データ取得                                                   *
    // ************************************************************************
    getData(){
        
        let data = [];
        let tier = {
                "会社評価コード":1,
                "技官区分"      :2,
                "業資区分"      :2,
                "pt"            :3,
                "Expt"          :3,
                "摘要"          :4,
                "備考"          :5,
        };
        for(let i=0;i<20;i++){
            data[i] = {"会社評価コード":"T001",
                       "技官区分"      :"AS",
                       "業資区分"      : "PY",
                       "pt"            : 1,
                       "Expt"          : 1,
                       "摘要"          :"基本情報",
                       "備考"          :"これは0ptです。",
                       };
        }
        
        return {"data":data,"tier":tier};
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ラベル作成時のコールバック処理                                       *
    // ************************************************************************
    LabelCreateCallBack(elem,key,frame){
        
        switch(key){
            
            // -----------------------+
            // 摘要                   |
            // -----------------------+
            case "摘要":
                
                elem.style.verticalAlign = "top";
                
                
            break;
            
            // -----------------------+
            // 備考                   |
            // -----------------------+
            case "備考":
                
                elem.style.verticalAlign = "top";
                
            break;
            
        }
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   インプットボックス作成時のコールバック                               *
    // ************************************************************************
    InputBoxCreateCallBack(elem,key,frame){
        
        switch(key){
            
            // -----------------------+
            // 技官区分               |
            // -----------------------+
            case "技官区分":
                
                // セレクト要素作成
                let engineer              = document.createElement("select");
                engineer.id               = elem.id                         ;
                engineer.style.width      = elem.style.width                ;
                engineer.style.height     = elem.style.height               ;
                
                // オプション要素作成
                let engineer_option       = document.createElement("option");
                engineer_option.value     = "-"                             ;
                engineer_option.innerText = "-"                             ;
                
                engineer.appendChild(engineer_option);
                
                engineer_option           = document.createElement("option");
                engineer_option.value     = "AS"                            ;
                engineer_option.innerText = "AS"                            ;
                
                engineer.appendChild(engineer_option);
                
                return engineer;
                
            break;
            
            // -----------------------+
            // 業資区分               |
            // -----------------------+
            case "業資区分":
                
                // セレクト要素作成
                let achievement              = document.createElement("select");
                achievement.id               = elem.id                         ;
                achievement.style.width      = elem.style.width                ;
                achievement.style.height     = elem.style.height               ;
                
                // オプション要素作成
                let achievement_option       = document.createElement("option");
                achievement_option.value     = "-"                             ;
                achievement_option.innerText = "-"                             ;
                
                achievement.appendChild(achievement_option);
                
                achievement_option           = document.createElement("option");
                achievement_option.value     = "PY"                            ;
                achievement_option.innerText = "PY"                            ;
                
                achievement.appendChild(achievement_option);
                
                return achievement;
                
            break;
            
            // -----------------------+
            // 摘要                   |
            // -----------------------+
            case "摘要":
                
                let summary        = document.createElement("textarea");
                
                summary.id                  = elem.id   ;
                summary.style.width         = elem.style.width;
                summary.style.height        = 200       ;
                summary.style.width         = 325;
                
                return summary;
                
            break;
            
            // -----------------------+
            // 備考                   |
            // -----------------------+
            case "備考":
                
                let remark        = document.createElement("textarea");
                
                remark.id                  = elem.id   ;
                remark.style.width         = elem.style.width;
                remark.style.height        = 200       ;
                remark.style.width         = 325;
                
                return remark;
                
            break;
            
        }
        
        return elem;
        
    }
    
}
