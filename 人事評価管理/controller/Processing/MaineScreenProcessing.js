class MaineScreenProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        this.header_height = new HeaderProcessing().get_header_height();
        
        this.maine_frame_width  = 1200;
        
        this.maine_frame_height = document.body.clientHeight - this.header_height ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   メインフレームを作成する                                             *
    // ************************************************************************
    create(){
        
        //document.body.style.overflow = "hidden"
        
        // メインフレーム作成
        this.maine_frame    = document.createElement("div") ;
        this.maine_frame.id = 'Maine-Frame'                  ;
        
        ///this.background_frame = document.createElement("div");
        
        //this.background_design = document.createElement("div");
        
        //this.background_frame.appendChild(this.background_design);
        
        
        
        //this.maine_frame.style.width     = this.maine_frame_width                                                           ;
        //this.maine_frame.style.height    = this.maine_frame_height                                                          ;
        //this.maine_frame.style.margin    = "auto"                                                                           ;
        //this.maine_frame.style.position  = "relative"                                                                       ;
        //this.maine_frame.style.userSelect = "none";
        
        //this.maine_frame.appendChild(this.background_frame);
        document.body   .appendChild(this.maine_frame     );
        
        //window.addEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズ                                                             *
    // ************************************************************************
    resize = () => {
        
        this.maine_frame.style.height = document.body.clientHeight - this.header_height ;        
    }
    
// ============================================== [ ↓ゲッター↓ ] ================================================================================== //
    
    get_maine_frame     = () => {return this.maine_frame                           ;};
    get_maine_frame_css = () => {return window.getComputedStyle( this.maine_frame );};
    
}
