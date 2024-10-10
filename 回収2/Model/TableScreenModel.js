// 
// [処理概要]
//   テーブル表示系画面の継承用モデル
// 
class TableScreenModel{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(elem){
        
        this.TableHandler = new TableHandler();                                                                   // テーブルハンドラオブジェクト
        this.table = null;
        //this.Footer_height                = new FooterProcessing().get_footer().style.height                                       ;
        
        this.maine_frame  = elem;                                                                   // メインフレーム
        this.table_frame  = null;                                                                   // テーブルフレーム
        
        this.table_width  = 1000 ;                                                                   // テーブルフレームの横幅
        this.table_height = 500  ;                                                                   // テーブルフレームの縦幅
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面を作成する                                                       *
    // ************************************************************************
    CreateScreen(){
        
        // テーブルハンドラインスタンス化
        
        
        // フレーム作成
        this.CreateFrame();
        
        // テーブル作成
        this.TableProcessing();
        
        // 画面作成後の処理
        this.CreateScreenAfterProcessing();
        
        window.addEventListener("resize",this.resize);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   フレームを作成する                                                   *
    // ************************************************************************
    CreateFrame(){
        
        let maine_frame_rect = this.maine_frame.getBoundingClientRect();
        
        // ---------------------------+
        // テーブルフレーム作成       |
        // ---------------------------+
        this.table_frame                = document.createElement("div")                               ;
        this.table_frame.style.width    = maine_frame_rect["width" ]                                  ;
        this.table_frame.style.height   = this.table_height + 100                                  ;
        //this.table_frame.style.margin   = "auto"                                                      ;
        this.table_frame.style.position = "absolute"                                                  ;
        this.table_frame.style.top      = (parseInt(this.maine_frame.style.height) - 100 - parseInt(this.table_frame.style.height )) / 2;
        this.table_frame.style.left     = (parseInt(this.maine_frame.style.width ) - parseInt(this.table_frame.style.width)) / 2;
        
        this.maine_frame.appendChild(this.table_frame);
        
        if((parseInt(this.maine_frame.style.height) - 100 - parseInt(this.table_frame.style.height )) / 2 < 0){
            this.table_frame.style.top      = 0;
        }
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルを作成する                                                   *
    // ************************************************************************
    TableProcessing(){
        
        // テーブル作成用データ取得
        let data = this.getData();
        
        // テーブル作成
        this.TableHandler.set_table_width (this.table_width );
        this.TableHandler.set_table_height(this.table_height);
        this.TableHandler.set_create_table_column_callback(this.TableColumnCreateCallBack);
        this.TableHandler.set_create_table_data_callback  (this.TableDataCreateCallBack  );
        this.TableHandler.TableProcessing(data,this.table_frame);
        this.table = this.TableHandler.get_table();
        this.table.style.position = "";
        this.table.style.margin = "auto";
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック処理                               *
    // ************************************************************************
    TableColumnCreateCallBack(elem,key,frame,tr){
        return elem;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時のコールバック処理                               *
    // ************************************************************************
    TableDataCreateCallBack(elem,key,frame,tr){
        return elem;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルを作成するためのデータを取得する                             *
    // ************************************************************************
    getData(){
        
        let data = [];
        data[0] = {"テスト":"これはてすとでエス"}
        return data;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   画面が作成された後の処理                                             *
    // ************************************************************************
    CreateScreenAfterProcessing(){
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   リサイズ                                                             *
    // ************************************************************************
    resize = () => {
        
        if((parseInt(this.maine_frame.style.height) - 100 - parseInt(this.table_frame.style.height )) / 2 >= 0){
            this.table_frame.style.top      = (parseInt(this.maine_frame.style.height) - 100 - parseInt(this.table_frame.style.height )) / 2;
        }
        //this.table_frame.style.left     = (parseInt(this.maine_frame.style.width ) - parseInt(this.table_frame.style.width)) / 2;
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   終了処理                                                             *
    // ************************************************************************
    finish(){
        this.maine_frame.innerHTML = "";
        window.removeEventListener("resize",this.resize);
    }
    
}



