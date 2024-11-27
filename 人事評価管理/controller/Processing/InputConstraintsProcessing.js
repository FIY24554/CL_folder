class InputConstraintsProcessing{
    
    constructor(){
        
        // シングルトン
        if(InputConstraintsProcessing.singleton){return InputConstraintsProcessing.singleton};
        
        InputConstraintsProcessing.singleton = this;
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テキスト入力制限                                                                          *
    // *********************************************************************************************
    TextConstraints = (e) => {
        
        // もしかしたらバイト数制限を設けるかも?
        
        //let target = e instanceof HTMLElement ? e      : e.target              ;
        //let value  = target.value == ""       ? 0      : parseInt(target.value);
        //let max    = target.max   == ""       ? 999999 : target.max            ;
        //let min    = target.min   == ""       ? 0      : target.min            ;
        //
        //if(value > max){value = max}                        ;
        //if(value < min){value = min}                        ;
        //
        //target.value = value                                ;
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   数値入力制限                                                                              *
    // *********************************************************************************************
    NumberConstraints = (e) => {
        
        let target = e instanceof HTMLElement ? e      : e.target              ;
        let value  = target.value == ""       ? 0      : parseInt(target.value);
        let max    = target.max   == ""       ? 999999 : target.max            ;
        let min    = target.min   == ""       ? 0      : target.min            ;
        
        if(value > max){value = max}                        ;
        if(value < min){value = min}                        ;
        
        target.value = value                                ;
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年数入力制限(フォーカス)                                                                  *
    // *********************************************************************************************
    AgeConstraintsFocus = (e) => {
        
        e.target.type = "number";
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年数入力制限(ノンフォーカス)                                                              *
    // *********************************************************************************************
    AgeConstraintsNonFocus = (e) => {
        
        let target = e instanceof HTMLElement ? e      : e.target              ;
        let value    = target.value == ""       ? 0     : parseInt(target.value);
        let max      = target.max   == ""       ? 99999 : target.max            ;
        let min      = target.min   == ""       ? 0     : target.min            ;
        target.type  = "string"    ;
        
        if(value > max){value = max};
        if(value < min){value = min};
        
        target.value = `${String(value)}年`;
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年月日入力制限(フォーカス)                                                                *
    // *********************************************************************************************
    DateConstraintsFocus = (e) => {
        
        e.target.type = "number";
        
    }
    
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年月日入力制限(ノンフォーカス)                                                            *
    // *********************************************************************************************
    DateConstraintsNonFocus = (e) => {
        
        let target = e instanceof HTMLElement ? e      : e.target              ;
        let value    = target.value == ""       ? 0        : String(target.value)  ;
        let max      = target.max   == ""       ? 99999999 : target.max            ;
        let min      = target.min   == ""       ? 0        : target.min            ;
        target.type  = "string"    ;
        
        if(value > max){value = max};
        if(value < min){value = min};
        
        let year  = value.length >= 4 ? value.slice(0,4) : String(new Date().getFullYear());
        let month = value.length >= 6 ? value.slice(4,6) : "04"                            ;
        let day   = value.length >= 8 ? value.slice(6,8) : "01"                            ;
        
        if(parseInt(year)  <= 0){year = String(new Date().getFullYear())};
        
        if(parseInt(month) > 12 || parseInt(month) <= 0){month = "04"};
        
        let month_last_day = new Date(parseInt(year),parseInt(month),0).getDate();
        if(parseInt(day) > month_last_day || parseInt(day) <= 0){day = "01"};
        
        target.value = `${year}年${month}月${day}日`;
        
    }
    
    
    
    
    
    
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   テキスト入力制限を登録                                                                        *
    // *********************************************************************************************
    apply_TextConstraints(elem,max = null,min = null){
        
        if(max != null){elem.max = max};
        if(min != null){elem.min = min};
        
        elem.type  = "text";
        elem.value = 0       ;
        elem.defaultvalue = 0;
        elem.Constraints  = this.NumberConstraints;
        
        elem.addEventListener("blur",this.NumberConstraints);
        
    }
    
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   数値入力制限を登録                                                                        *
    // *********************************************************************************************
    apply_NumberConstraints(elem,max = null,min = null){
        
        if(max != null){elem.max = max};
        if(min != null){elem.min = min};
        
        elem.type  = "number";
        elem.value = 0       ;
        elem.defaultvalue = 0;
        elem.Constraints  = this.NumberConstraints;
        
        elem.addEventListener("blur",this.NumberConstraints);
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年数入力制限を登録                                                                        *
    // *********************************************************************************************
    apply_AgeConstraints(elem,max = null,min = null){
        
        if(max != null){elem.max = max};
        if(min != null){elem.min = min};
        
        elem.type  = "string"    ;
        elem.value = "0年"       ;
        elem.defaultvalue = "0年";
        elem.Constraints  = this.AgeConstraintsNonFocus;
        
        elem.addEventListener("focus",this.AgeConstraintsFocus   );
        elem.addEventListener("blur" ,this.AgeConstraintsNonFocus);
        
    }
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   年月日入力制限を登録                                                                      *
    // *********************************************************************************************
    apply_DateConstraints(elem,max = null,min = null){
        
        if(max != null){elem.max = max};
        if(min != null){elem.min = min};
        
        elem.type         = "string"    ;
        elem.value        = `${String(new Date().getFullYear())}年04月01日`;
        elem.defaultvalue = `${String(new Date().getFullYear())}年04月01日`;
        elem.Constraints  = this.DateConstraintsNonFocus;
        
        elem.addEventListener("focus",this.DateConstraintsFocus   );
        elem.addEventListener("blur" ,this.DateConstraintsNonFocus);
        
    }
    
    
    
    // *********************************************************************************************
    // [処理概要]                                                                                  *
    //   イベント削除                                                                              *
    // *********************************************************************************************
    EventRemove(elem){
        
        elem.removeEventListener("blur",this.NumberConstraints       );
        elem.removeEventListener("focus",this.AgeConstraintsFocus    );
        elem.removeEventListener("blur" ,this.AgeConstraintsNonFocus );
        elem.removeEventListener("focus",this.DateConstraintsFocus   );
        elem.removeEventListener("blur" ,this.DateConstraintsNonFocus);
        
    }
    
    
    
    
    
    
    
    
    
    
}
