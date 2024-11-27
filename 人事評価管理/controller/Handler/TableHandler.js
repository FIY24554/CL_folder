// *****************************************************************************************************************************************************************************************************
// 
// [処理概要]
//   テーブルハンドラ
//
// [コンストラクタ]
//   [引数]
//     なし
//
// [メソッド]
// 
//   < this.TableProcessing >
//     [処理概要]
//       テーブルを作成する
//     [引数]
//       Arg1 : テーブル作成に使用するデータ
//       Arg2 : 作成したテーブルを入れる要素
//
//   < this.
// 
//
// 
class TableHandler{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        this.inputbox = null;
        
        this.create_table_column_callback = null;
        this.create_table_event_callback  = null;
        this.create_table_callback        = null;
        this.create_label_callback        = null;
        this.create_input_callback        = null;
        
        // テーブルスタイル指定
        this.table_width = 700;
        this.table_height= 500;
        
        this.table_td_odd_color  = "#f0f8ff";
        this.table_td_even_color = "#ffff89";
        
        // テーブル作成クラスインスタンス化
        this.TableProcessingo_Obj = null             ;
        this.TableProcessingo_Obj = new TableProcessing();
        
        // インプットボックス作成クラスインスタンス化
        this.InputBoxProcessing_Obj = null                ;
        this.InputBoxProcessing_Obj = new InputBoxProcessing();
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルを作成する                                                   *
    // [引数]                                                                 *
    //   data : 作成するテーブルのデータ                                      *
    //   elem : 作成したテーブルを入れる要素                                  *
    // ************************************************************************
    TableProcessing(data,elem=null,id=""){
        
        // 作成したテーブルを入れ込む要素が指定されている場合は入れ込み
        if(elem != null){this.TableProcessingo_Obj.set_table_parent(elem);};
        
        // テーブルのスタイルを指定
        this.TableProcessingo_Obj.set_table_max_width    (this.table_width );
        this.TableProcessingo_Obj.set_table_max_height   (this.table_height);
        //this.TableProcessingo_Obj.set_table_td_odd_color (this.table_td_odd_color);
        //this.TableProcessingo_Obj.set_table_td_even_color(this.table_td_even_color);
        
        // コールバック処理を指定
        this.TableProcessingo_Obj.set_table_data_callback  (this.TableProcessingDataCallBack  );
        this.TableProcessingo_Obj.set_table_column_callback(this.TableProcessingColumnCallBack);
        
        // テーブル作成
        this.TableProcessingo_Obj.create(data,id);
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルデータ作成時のコールバック                                   *
    // [引数]                                                                 *
    //   elem : テーブルデータの要素                                          *
    //   key  : 作成したテーブルデータのカラム名                              *
    // ************************************************************************
    TableProcessingDataCallBack = (elem,key,frame,tr) => {
        
        // コールバック処理
        if(this.table_data_mousedown_event != null){elem.addEventListener("mousedown",this.table_data_mousedown_event );};
        if(this.table_data_mouseup_event   != null){elem.addEventListener("mouseup"  ,this.table_data_mouseup_event   );};
        if(this.table_data_mouseover_event != null){elem.addEventListener("mouseover",this.table_data_mouseover_event );};
        if(this.table_data_mouseout_event  != null){elem.addEventListener("mouseout" ,this.table_data_mouseout_event  );};
        if(this.create_table_data_callback != null){elem = this.create_table_data_callback(elem,key,frame,tr          );};
        
        return elem;
        
    };
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   テーブルカラム作成時のコールバック                                   *
    // ************************************************************************
    TableProcessingColumnCallBack = (elem,key,frame,tr) => {
        
        // コールバック処理
        if(this.create_table_column_callback != null){elem = this.create_table_column_callback(elem,key,frame,tr)};
        
        return elem;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   インプットボックス作成                                               *
    // ************************************************************************
    InputBoxProcessing(data,elem=null){
        
        // 作成したインプットボックスを入れ込む要素が指定されている場合は入れ込み
        if(elem != null){this.InputBoxProcessing_Obj.set_parent_elem(elem)};
        
        // コールバック指定
        this.InputBoxProcessing_Obj.set_create_label_callback(this.create_label_callback);
        this.InputBoxProcessing_Obj.set_create_input_callback(this.create_input_callback);
        
        // インプットボックス作成
        this.InputBoxProcessing_Obj.create(data);
        
        // インプットボックス取得
        this.inputbox = this.InputBoxProcessing_Obj.get_inputbox();
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_table_data_mousedown_event       = (set) => { this.table_data_mousedown_event   = set;}; // テーブルデータマウスダウン時のコールバック
    set_table_data_mouseup_event         = (set) => { this.table_data_mouseup_event     = set;}; // テーブルデータマウスアップ時のコールバック
    set_table_data_mouseover_event       = (set) => { this.table_data_mouseover_event   = set;}; // テーブルデータマウスオーバー時のコールバック
    set_table_data_mouseout_event        = (set) => { this.table_data_mouseout_event    = set;}; // テーブルデータマウスアウト時のコールバック
    set_create_table_data_callback       = (set) => { this.create_table_data_callback   = set;}; // テーブルデータ作成時のコールバック
    set_create_label_callback            = (set) => { this.create_label_callback        = set;}; // ラベル作成時のコールバック
    set_create_input_callback            = (set) => { this.create_input_callback        = set;}; // インプットボックス作成時のコールバック
    set_create_table_column_callback     = (set) => { this.create_table_column_callback = set;}; // テーブルカラム作成時のコールバック
    set_table_td_odd_color               = (set) => { this.TableProcessingo_Obj.set_table_td_odd_color (set);};// 奇数
    set_table_td_even_color              = (set) => { this.TableProcessingo_Obj.set_table_td_even_color(set);};// 偶数
    set_table_width                      = (set) => { this.table_width                  = set;};
    set_table_height                     = (set) => { this.table_height                 = set;};
    set_select_table                     = (set) => { this.TableProcessingo_Obj.set_select_table = set;};
    set_table_css                        = (set) => { this.TableProcessingo_Obj.set_table_css(set);};
    
    
// ============================================== [ ↑セッター↑ ] ================================================================================== //
    
// ============================================== [ ↓ゲッター↓ ] ================================================================================== //
    
    get_inputbox            = () => {return this.inputbox                        ;};
    get_table               = () => {return this.TableProcessingo_Obj.get_table();};
    get_table_td_odd_color  = () => {return this.table_td_odd_color              ;};
    get_table_td_even_color = () => {return this.table_td_even_color             ;};
    
    
    // ===[直接接続] ===//
    direct_table = () => { return this.TableProcessingo_Obj};
    
}
