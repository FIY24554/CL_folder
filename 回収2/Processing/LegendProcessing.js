
class LegendProcessing{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        this.maine_fram             = elem;
        //maine_fram_rect        = this.maine_fram.getBoundingClientRect();
        
        this.Legend_frame           = null;
        this.Legend_width           = 200;
        this.Legend_height          = 500;
        
        this.Legend_tag             = null;
        this.Legend_tag_height      = 25;
        
        this.Legend_tag_scaling     = null;
        this.Legend_tag_title       = null;
        this.Legend_tag_title_text  = "";
        
        this.Legend_event_frame     = null;
        
        this.Legend_screen          = null;

        this.Legend_backgroundColor = "#dddddd";
        this.Legend_font_color      = "#777777";
        
        this.difference_x           = 0;
        this.difference_y           = 0;
        
        this.mousedown_time         = 0;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレームと凡例を作成する                                             *
    // ************************************************************************
    create = (top,left) =>{
        
        this.CreateFrame(top,left);
        
        this.CreateLegend();
        
        // イベント付与
        this.Legend_event_frame.addEventListener("mousedown",this.PreparingMove    );
        this.Legend_event_frame.addEventListener("mouseup"  ,this.LegendHideAndShow);
        document               .addEventListener("mouseup"  ,this.CleaningUpMove   );
        //window                 .addEventListener("resize"   ,this.resize           );
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例のフレームを作成する
    // ************************************************************************
    CreateFrame = (top=0,left=0) =>{
        
        // ---------------------------+
        // 凡例フレーム               |
        // ---------------------------+
        this.Legend_frame                    = document.createElement("div");
        this.Legend_frame.style.width        = this.Legend_width            ;
        this.Legend_frame.style.position     = "fixed"                      ;
        this.Legend_frame.style.top          = top                          ;
        this.Legend_frame.style.left         = left                         ;
        this.Legend_frame.style.zIndex       = 10;
        this.Legend_frame.style.border       = "solid 2px #555555"          ;
        this.Legend_frame.style.boxShadow    = "0 1px 3px 0 black"          ;
        this.Legend_frame.style.borderBottom = "solid 6px #555555"          ;
        this.Legend_frame.style.opacity      = 0.95                          ;
        this.maine_fram.appendChild             (this.Legend_frame)           ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例を作成する                                                       *
    // ************************************************************************
    CreateLegend = () =>{
        
        // ---------------------------+
        // 凡例タグ                   |
        // ---------------------------+
        this.Legend_tag                          = document.createElement("div")              ;
        this.Legend_tag.style.width              = this.Legend_width                          ;
        this.Legend_tag.style.height             = this.Legend_tag_height                     ;
        this.Legend_tag.style.backgroundColor    = this.Legend_backgroundColor                ;
        this.Legend_tag.style.borderBottom       = "solid 1px #555555"                        ;
        this.Legend_frame.appendChild             (this.Legend_tag)                           ;
        
        // ---------------------------+
        // テキスト縦幅計算用ダミー   |
        // ---------------------------+
        let dummy                                = document.createElement("div")              ;
        dummy.innerText                          = "-"                                        ;
        dummy.style.font                         = "bold 20px sans-serif"                     ;
        this.Legend_frame.appendChild             (dummy)                                     ;
        let scaling_text_height                  = dummy.getBoundingClientRect()["height"]    ;
        dummy.style.font                         = "bold 18px sans-serif"                     ;
        let title_text_height                    = dummy.getBoundingClientRect()["height"]    ;
        dummy.remove();
        
        // ---------------------------+
        // 凡例タグ拡張縮小           |
        // ---------------------------+
        this.Legend_tag_scaling                  = document.createElement("div")              ;
        this.Legend_tag_scaling.innerText        = "-"                                        ;
        this.Legend_tag_scaling.style.userSelect = "none"                                     ;
        this.Legend_tag_scaling.style.color      = this.Legend_font_color                     ;
        this.Legend_tag_scaling.style.font       = "bold 20px sans-serif"                     ;
        this.Legend_tag_scaling.style.position   = "absolute"                                 ;
        this.Legend_tag_scaling.style.top        = (this.Legend_tag_height - scaling_text_height) / 2 ;
        this.Legend_tag_scaling.style.right      = 10                                         ;
        this.Legend_tag.appendChild               (this.Legend_tag_scaling)                   ;
        
        // ---------------------------+
        // 凡例タグタイトル           |
        // ---------------------------+
        this.Legend_tag_title                    = this.Legend_tag_scaling.cloneNode()        ;
        this.Legend_tag_title.innerText          = this.Legend_tag_title_text                 ;
        this.Legend_tag_title.style.left         = 10                                         ;
        this.Legend_tag_title.style.top        = (this.Legend_tag_height - title_text_height) / 2 ;
        this.Legend_tag_title.style.font         = "bold 15px sans-serif"                     ;
        this.Legend_tag.appendChild               (this.Legend_tag_title)                     ;
        
        // ---------------------------+
        // 凡例タグイベントフレーム   |
        // ---------------------------+
        this.Legend_event_frame                  = document.createElement("div")              ;
        this.Legend_event_frame.style.width      = this.Legend_width                          ;
        this.Legend_event_frame.style.height     = this.Legend_tag_height                     ;
        this.Legend_event_frame.style.position   = "absolute"                                 ;
        this.Legend_event_frame.style.top        = 0                                          ;
        this.Legend_frame.appendChild             (this.Legend_event_frame)                   ;
        
        // ---------------------------+
        // 凡例タグスクリーン         |
        // ---------------------------+
        this.Legend_screen                       = document.createElement("div")              ;
        this.Legend_screen.style.userSelect      = "none"                                     ;
        this.Legend_screen.style.width           = this.Legend_width                          ;
        this.Legend_screen.style.height          = this.Legend_height - this.Legend_tag_height;
        this.Legend_screen.style.font            = "bold 15px sans-serif"                     ;
        this.Legend_screen.style.color           = this.Legend_font_color                     ;
        this.Legend_screen.style.backgroundColor = this.Legend_backgroundColor                ;
        this.Legend_frame.appendChild              (this.Legend_screen)                       ;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   移動処理の後処理(凡例タグMouseUp時の処理                             *
    // ************************************************************************
    CleaningUpMove = (e) =>{
        document.removeEventListener("mousemove",this.Move);
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   移動処理を行うための準備(凡例タグMouseDown時の処理                   *
    // ************************************************************************
    PreparingMove = (e) =>{
        
        let Legend = this.Legend_frame.getBoundingClientRect();
        this.mousedown_time = Date.now();
        
        this.difference_x = Legend["left"] - e.clientX;
        this.difference_y = Legend["top" ] - e.clientY;
        
        document.addEventListener("mousemove",this.Move);
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   移動処理(documentMouseMove時の処理)                                  *
    // ************************************************************************
    Move = (e) =>{
        
        let Legend = this.Legend_frame.getBoundingClientRect();
        let maine_fram_rect        = this.maine_fram.getBoundingClientRect();
        
        // 上下判定
        if(
            e.pageY + this.difference_y + Legend["height"] <  maine_fram_rect["top"] + maine_fram_rect["height"] &&
            e.pageY + this.difference_y                      >  maine_fram_rect["top"]
        )
        {
            this.Legend_frame.style.top  = e.pageY + this.difference_y;
        
        }else{
            
            if(e.pageY + this.difference_y + Legend["height"] >= maine_fram_rect["top"] + maine_fram_rect["height"]){this.Legend_frame.style.top = maine_fram_rect["top"] + maine_fram_rect["height"] - Legend["height"]};
            if(e.pageY + this.difference_y                      <= maine_fram_rect["top"]                         ){this.Legend_frame.style.top =  maine_fram_rect["top"]                                             };
            
        };
        
        // 左右判定
        if(
            e.pageX + this.difference_x + Legend["width"]  <  maine_fram_rect["left"] + maine_fram_rect["width"] &&
            e.pageX + this.difference_x                      >  maine_fram_rect["left"]
        )
        {
            this.Legend_frame.style.left  = e.pageX + this.difference_x;
        
        }else{
            
            if(e.pageX + this.difference_x + Legend["width"] >= maine_fram_rect["left"] + maine_fram_rect["width"] ){this.Legend_frame.style.left = maine_fram_rect["left"] + maine_fram_rect["width"] - Legend["width"]};
            if(e.pageX + this.difference_x                     <= maine_fram_rect["left"]                         ){this.Legend_frame.style.left = maine_fram_rect["left"]                                              };
            
        };
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   凡例を表示・非表示(凡例タグMouseUp時の処理)                          *
    // ************************************************************************
    LegendHideAndShow = () =>{
        
        if(Date.now() - this.mousedown_time > 200){return;};
        
        if(this.Legend_screen.style.display == "none"){
            
            this.Legend_screen.style.display = "";
            this.Legend_tag_scaling.innerText = "－";
            
        }else{
            this.Legend_screen.style.display = "none";
            this.Legend_tag_scaling.innerText = "+";
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズ時の処理                                                     *
    // ************************************************************************
    //resize = () => {
    //    
    //    maine_fram_rect        = this.maine_fram.getBoundingClientRect();
    //    
    //}
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish = () => {
        
        document               .removeEventListener("mouseup"  ,this.CleaningUpMove   );
        document               .removeEventListener("mousemove",this.Move             );
        //window                 .removeEventListener("resize"   ,this.resize           );
        this.Legend_frame.remove()                                                     ;
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_Legend_width          = (set) => {this.Legend_width            = set;};
    set_Legend_height         = (set) => {this.Legend_height           = set;};
    set_HTML                  = (set) => {this.Legend_screen.innerHTML = set;};
    set_Legend_tag_title_text = (set) => {this.Legend_tag_title_text   = set;};
    
    get_Legend = () => {return this.Legend_frame;};
    get_Legend_screen = () => {return this.Legend_screen;};
    
}




