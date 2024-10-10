class MaineScreenProcessing{
    
    // 
    // [処理概要]
    //   コンストラクタ
    // 
    constructor(){
        
        this.header_height = new HeaderProcessing().get_header_height();
        
        this.maine_frame_width  = 1200;
        
        this.maine_frame_height = document.body.clientHeight - this.header_height ;
        
    }
    
    // 
    // [処理概要]
    //   メインフレームを作成する
    // 
    create(){
        
        document.body.style.overflow = "hidden"
        
        // メインフレーム作成
        this.maine_frame                 = document.createElement("div")                                                    ;
        this.maine_frame.style.width     = this.maine_frame_width                                                           ;
        this.maine_frame.style.height    = this.maine_frame_height                                                          ;
        this.maine_frame.style.margin    = "auto"                                                                           ;
        this.maine_frame.style.position  = "relative"                                                                       ;
        this.maine_frame.style.userSelect = "none";
        
        document.body   .appendChild(this.maine_frame );
        
        window.addEventListener("resize",this.resize);
        
    }
    
    resize = () => {
        
        this.maine_frame.style.height = document.body.clientHeight - this.header_height ;        
    }
    
    
    
    get_maine_frame  = () => {return this.maine_frame;};
    
}



