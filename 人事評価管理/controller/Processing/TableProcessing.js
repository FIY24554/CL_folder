// ****************************************************************************************************************************************************************************************************
//                                                                                                                                                                                                    *
// [処理概要]                                                                                                                                                                                         *
//   データをもとにテーブルを作成するクラス                                                                                                                                                           *
//                                                                                                                                                                                                    *
// [コンストラクタ]                                                                                                                                                                                   *
//   [引数]                                                                                                                                                                                           *
//     なし                                                                                                                                                                                           *
//                                                                                                                                                                                                    *
// [メソッド]                                                                                                                                                                                         *
//                                                                                                                                                                                                    *
//  < this.create >                                                                                                                                                                                   *
//   [処理概要]                                                                                                                                                                                       *
//     テーブルを作成する                                                                                                                                                                             *
//   [引数]                                                                                                                                                                                           *
//     Arg1 : テーブルを作成するための多次元は配列データ                                                                                                                                              *
//     Arg2 : id重複防止用(idをkeyから取得しているため重複する場合は指定して回避)                                                                                                                     *
//       ※Arg2を指定しないことも可能                                                                                                                                                                 *
//   [Arg1の多次元配列について]                                                                                                                                                                       *
//   array[num][key]                                                                                                                                                                                  *
//     num : テーブルのレコード番号(0からテーブルのレコード数分)                                                                                                                                      *
//     key : テーブルのカラムごとの値(キーはテーブルのカラム名で、値はテーブルのカラムに対応した値)                                                                                                   *
//                                                                                                                                                                                                    *
// [セッター]                                                                                                                                                                                         *
//                                                                                                                                                                                                    *
//  < this.set_table_max_width       > :  テーブルの最大横サイズ                                                                                                                                      *
//  < this.set_table_max_height      > :  テーブルの最大縦サイズ                                                                                                                                      *
//  < this.set_table_top             > :  テーブルのtop座標                                                                                                                                           *
//  < this.set_table_left            > :  テーブルのleft座標                                                                                                                                          *
//  < this.set_table_column_color    > :  テーブルのカラムの背景カラー                                                                                                                                *
//  < this.set_table_td_odd_color    > :  テーブルの奇数レコードデータの背景カラー                                                                                                                    *
//  < this.set_table_td_even_color   > :  テーブルの偶数レコードデータの背景カラー                                                                                                                    *
//  < this.set_table_column_callback > :  テーブルのカラム作成後の追加処理                                                                                                                            *
//  < this.set_table_data_callback   > :  テーブルの1レコード作成後の追加処理                                                                                                                         *
//  < this.set_table_font_size       > :  テーブルデータのフォントサイズ                                                                                                                              *
//  < this.set_table_font            > :  テーブルのフォント                                                                                                                                          *
//  < this.set_table_parent          > :  作成したテーブルを入れる要素                                                                                                                                *
//  < this.set_select_color          > :  テーブルデータにマウスオーバーしたときの色                                                                                                                  *
//  < this.set_select_table          > :  テーブルデータにマウスオーバーしたときに色を変更かどうか                                                                                                    *
//                                                                                                                                                                                                    *
// [ゲッター]                                                                                                                                                                                         *
//  < this.get_table > : 作成したテーブルを取得                                                                                                                                                       *
//                                                                                                                                                                                                    *
// ****************************************************************************************************************************************************************************************************
class TableProcessing{
    
    // ******************************************************************************************************
    // [処理概要]                                                                                           *
    //   コンストラクタ                                                                                     *
    // ******************************************************************************************************
    constructor(){
        
        this.class_name            = "TableProcessing" ;                                                // ログ出力用クラス名
        
        this.table_max_width       = 0           ;                                                // テーブルの最大横サイズ
        this.table_max_height      = 0           ;                                                // テーブルの最大縦サイズ
        
        this.table_top             = 0             ;                                                // テーブルのtop座標
        this.table_left            = 0             ;                                                // テーブルのleft座標
        
        this.table_column_color    = "#93c9ff"     ;                                                // テーブルのカラムの背景カラー
        this.table_td_odd_color    = "#f0f8ff"     ;                                                // テーブルの奇数レコードデータの背景カラー
        this.table_td_even_color   = "#f0f8ff"     ;                                                // テーブルの偶数レコードデータの背景カラー
        
        this.table_column_callback = null          ;                                                // テーブルのカラム作成後の追加処理
        this.table_data_callback   = null          ;                                                // テーブルの1レコード作成後の追加処理
        
        this.table                 = null          ;                                                // テーブル要素を格納する
        
        this.table_font_size       = 15            ;                                                // テーブルデータのフォントサイズ
        this.table_font            = "sans-serif"  ;                                                // テーブルのフォント
        
        this.table_parent          = null          ;
        
        this.set_select_color = "#00ffff";
        
        this.set_select_table = false;
        
        this.table_css = null;
        
        
        // ここから追加
        
        this.table_data_odd_class   = "Table-Data-Odd"   ;
        this.table_data_even_class  = "Table-Data-Even"  ;
        this.table_data_nomal_class = "Table-Data-Normal";
        
        this.isEligible_odd_even = true;
        
        
    }
    
    // ******************************************************************************************************
    // [処理概要]                                                                                           *
    //   テーブルを作成する                                                                                 *
    // [引数]                                                                                               *
    //   data : テーブルを作成に使用するデータが入った多次元配列                                            *
    //   id   : id重複防止用(idをkeyから取得しているため重複する場合は指定して回避                          *
    // [dataの多次元配列について]                                                                           *
    //   array[num][key]                                                                                    *
    //     num : テーブルのレコード番号(0からテーブルのレコード数分)                                        *
    //     key : テーブルのカラムごとの値(キーはテーブルのカラム名で、値はテーブルのカラムに対応した値)     *
    // ******************************************************************************************************
    create(data=null,id=""){
        
        // エラーチェック
        if(this.table_parent == null){this.log("no-parent"  ,"create"                                 );return;};
        if(data              == null){this.log("versatility","create","第一引数が指定されていません。");return;};
        
        // 要素作成
        let table                  = document.createElement("table");                               // テーブル要素作成
        let table_body             = document.createElement("tbody");                               // テーブルボディ要素作成
        let table_column_tr        = document.createElement("tr"   );                               // テーブルカラム要素作成
        
        // プロパティに格納
        this.table = table
        
        // 先に入れ込み
        table_body       .appendChild(table_column_tr);
        table            .appendChild(table_body     );
        this.table_parent.appendChild(table          );
        
        // テーブルスタイル
        table.classList.add("TableProcessing-Table");
        if(this.table_css != null){table.classList.add(this.table_css);};
        table.addEventListener("contextmenu",function(e){e.preventDefault();});
        
        table.style.borderCollapse = "collapse"            ;                                        // 要素間の隙間を埋める
        table.style.overflow       = "auto"                ;                                        // データがはみ出た場合はスクロールバー表示
        table.style.display        = "block"               ;                                        // テーブル要素の表示形式をblockにする(これを指定しないとスクロールバーが表示されない)
        table.style.whiteSpace     = "nowrap"              ;                                        // データがはみ出る場合に勝手に改行をしないように指定
        table.style.position       = "absolute"            ;
        table.style.border         = "3px solid black"     ;
        table.style.boxShadow      = "0 1px 3px 0 black"   ;
        table.style.borderBottom   = "5px solid #404040"   ;
        
        // カラムスタイル
        table_column_tr.style.position     = "sticky"         ;
        table_column_tr.style.top          = -1               ;
        table_column_tr.style.borderBottom = "2px solid black";
        
        // ---------------------------+
        // テーブル内要素作成         |
        // ---------------------------+
        for( let i = 0; i < data.length ; i++){                                                     // テーブルのレコードごとに回す
            
            // テーブルTR要素作成
            let table_tr = document.createElement("tr");
            table_tr.id  = `tr_${id}_${i}`             ;
            
            for( let key in data[i]){                                                               // テーブルのカラムごとに回す
                
                // --------------------------------+
                // 初回はテーブルのカラムを作成する|
                // --------------------------------+
                if(i == 0){
                    
                    // カラム要素作成
                    let table_column_th                   = document.createElement("th") ;
                    
                    // テーブルカラムのスタイル
                    table_column_th.id                    = `th_${id}_${key}`                                  ;
                    table_column_th.innerText             = key                                                ;
                    table_column_th.classList.add("Table-Column");
                    //table_column_th.style.font            = `bold ${this.table_font_size}px ${this.table_font}`;
                    //table_column_th.style.userSelect      = "none"                                             ;
                    //table_column_th.style.border          = "1px solid black"                                  ;
                    //table_column_th.style.background      = this.table_column_color                            ;
                    
                    // 追加処理(コールバック関数を呼び出し)
                    if(this.table_column_callback != null){table_column_th = this.table_column_callback(table_column_th,key,table_body,table_column_tr);};
                    
                    // 入れ込み
                    if(table_column_th != null || table_column_th != undefined){table_column_tr.appendChild(table_column_th);};
                    
                }
                
                // -----------------------------+
                // テーブルデータ作成           |
                // -----------------------------+
                
                // テーブルデータ要素作成
                let table_td                    = document.createElement("td");
                

                
                // テーブルデータのスタイル
                table_td.id                     = `td_${id}_${key}_${i}`                                          ;
                //table_td.classList.add("Table-Data");
                table_td.innerText              = data[i][key]                                                    ;
                //table_td.style.font             = `bold ${this.table_font_size}px ${this.table_font}`             ;
                //table_td.style.userSelect       = "none";                                                         ;
                //table_td.style.border           = "1px solid black"                                               ;
                //table_td.style.background       = i % 2 == 0 ? this.table_td_even_color : this.table_td_odd_color ;      // 作成するレコードが奇数レコードの場合、偶数レコードの場合で背景色を変更する
                //table_td.defaultbackground      = table_td.style.background;
                
                     if(i % 2 == 0 && this.isEligible_odd_even){table_td.classList.add(this.table_data_odd_class  );}
                else if(i % 2 == 1 && this.isEligible_odd_even){table_td.classList.add(this.table_data_even_class );}
                else if(this.isEligible_odd_even == false     ){table_td.classList.add(this.table_data_nomal_class);}
                
                // 追加処理(コールバック関数を呼び出し)
                if(this.table_data_callback != null){table_td = this.table_data_callback(table_td,key,table_body,table_tr);};
                
                // 入れ込み
                if(table_td != null || table_td != undefined){
                    
                    table_tr.appendChild(table_td);
                    
                    if(this.set_select_table){
                        table_td.addEventListener("mouseover",this.SelectChengeColorEvent)
                        table_td.addEventListener("mouseout" ,this.SelectRevertColorEvent)
                    };
                    
                };
                
                
                
            }
            
            // 完成した1レコード分のテーブルデータを入れ込み
            table_body.appendChild(table_tr);
            
        }
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   マウスホバーしている要素の色を変更する                                                   *
    // ********************************************************************************************
    SelectChengeColorEvent = (e) => {
        
        let target   = e.target             ;
        //let id       = target.id.split("_");
        //let No       = id[3];
        //    id       = id[1];
        let stop = 20;
        let count = 0;
        let parent   = target.parentNode;
        while(1){if(parent.nodeName == "TR"){break;}else{parent = parent.parentNode};if(stop < count){break;}count++;};
        let color    = "";
        let children = "";
        if(parent == null){return;};
        children     = parent.children  ;
        color        = window.getComputedStyle(children[0]).background.match(/rgb\(\d+, \d+, \d+\)/)[0];
        let chenge_color = this.ChangeColor(color,-45);
        
        
        
        //console.log(children[0])
        
        for(let elem of children){
            elem.style.background = chenge_color;
            elem.defaultbackground = color;
        }
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   マウスアウトしたときに要素の色をもとに戻す                                               *
    // ********************************************************************************************
    SelectRevertColorEvent = (e) => {
        
        let target   = e.target             ;
        //let id       = target.id.split("_");
        //let No       = id[3];
        //    id       = id[1];
        let stop = 20;
        let count = 0;
        let parent   = target.parentNode;
        while(1){if(parent.nodeName == "TR"){break;}else{parent = parent.parentNode};if(stop < count){break;}count++;};
        if(parent == null){return;};
        let children = parent.children;
        
        
        
        for(let elem of children){
            elem.style.background = children[0].defaultbackground;
            //console.log(target.defaultbackground)
        }
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   カラーコードを16進数からRGBに変換する                                                    *
    // ********************************************************************************************
    ChengeColorCodeHexadecimalToRGB = (color) => {
        
        let dummy                   = document.createElement("div");
        dummy.style.background      = color                        ;
        color                       = dummy.style.background       ;
        dummy.remove()                                             ;
        
        return color                                               ;
        
    }
    
    // ********************************************************************************************
    // [処理概要]                                                                                 *
    //   カラーコードを濃くするまたは薄くする                                                     *
    // [引数]                                                                                     *
    //   color : カラーコード                                                                     *
    //   value : 値              正の値 : 薄くなる    負の値 : 濃くなる                           *
    // ********************************************************************************************
    ChangeColor(color,value = 0){
        
        if(color.slice(0,3) != "rgb"){ return "white"; };                                             // カラーコードでない場合はすべて白にする
        
        color = color.replace("rgb","").replace("(","").replace(")","").split(",");
        
        // R G B 取得
        let R = parseInt(color[0]);
        let G = parseInt(color[1]);
        let B = parseInt(color[2]);
        
        // 引数value分足して16進数に戻す
        R = R + value > 255 || R + value > 0 ? R + value: R;
        G = G + value > 255 || G + value > 0 ? G + value: G;
        B = B + value > 255 || B + value > 0 ? B + value: B;
        
        // カラーコードを返す
        return `rgb(${R},${G},${B})`;
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   ログ出力用                                                           *
    // [引数]                                                                 *
    //   type : 出力するログのタイプ                                          *
    // ************************************************************************
    log(type,method,text = ""){
        
        switch(type){
            
            case "no-parent"   : console.error(`[警告] : 作成したテーブルを入れ込む要素が指定されていません。set_table_parentを実行して要素を指定してください。\n  [場所] : <クラス> ${this.class_name} <メソッド> ${method}`);break;
            case "versatility" : console.error(`[警告] : ${text}                                                                                               \n  [場所] : <クラス> ${this.class_name} <メソッド> ${method}`);break;
            
        }
        
    }
    
//  ================================== [ ↓セッター↓ ] =========================================================================================================== //
    
    set_table_max_width       = (set) => { this.table_max_width       = set; };                     // テーブルの最大横サイズ
    set_table_max_height      = (set) => { this.table_max_height      = set; };                     // テーブルの最大縦サイズ
    set_table_top             = (set) => { this.table_top             = set; };                     // テーブルのtop座標
    set_table_left            = (set) => { this.table_left            = set; };                     // テーブルのleft座標
    set_table_column_color    = (set) => { this.table_column_color    = set; };                     // テーブルのカラムの背景カラー
    set_table_td_odd_color    = (set) => { this.table_td_odd_color    = set; };                     // テーブルの奇数レコードデータの背景カラー
    set_table_td_even_color   = (set) => { this.table_td_even_color   = set; };                     // テーブルの偶数レコードデータの背景カラー
    set_table_column_callback = (set) => { this.table_column_callback = set; };                     // テーブルのカラム作成後の追加処理
    set_table_data_callback   = (set) => { this.table_data_callback   = set; };                     // テーブルの1レコード作成後の追加処理
    set_table_font_size       = (set) => { this.table_font_size       = set; };                     // テーブルデータのフォントサイズ
    set_table_font            = (set) => { this.table_font            = set; };                     // テーブルのフォント
    set_table_parent          = (set) => { this.table_parent          = set; };                     // 作成したテーブル要素を入れる要素
    set_select_color          = (set) => { this.select_color          = set; };                     // テーブルデータにマウスオーバーしたときの色
    set_select_table          = (set) => { this.select_table          = set; };                     // テーブルデータにマウスオーバーしたときに色を変更かどうか
    
    set_table_css = (set) => { this.table_css = set; };
    
    // ここから追加
    set_isEligible_odd_even = (set) => { this.isEligible_odd_even = set };
    
//  ================================== [ ↑セッター↑ ] =========================================================================================================== //
    
    
//  ================================== [ ↓ゲッター↓ ] =========================================================================================================== //
    
    
    
    
    
    get_table_data_odd_class   = () => { return this.table_data_odd_class  };
    get_table_data_even_class  = () => { return this.table_data_even_class };
    get_table_data_nomal_class = () => {return this.table_data_nomal_class;};
    
    
    
    
    get_table = () => {return this.table;};                                                         // 作成したテーブルを取得
    
}

