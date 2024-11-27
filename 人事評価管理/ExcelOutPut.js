// ****************************************************************************************************************************************************************************************************
// [処理概要]
//   データをエクセルに出力する
// ****************************************************************************************************************************************************************************************************
class ExcelOutPut{
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   コンストラクタ                                                       *
    // ************************************************************************
    constructor(){
        
        // -----------------+
        // シングルトン     |
        // -----------------+
        if(ExcelOutPut.Singleton){ return ExcelOutPut.Singleton; };
        ExcelOutPut.Singleton = this                              ;
        
        // -----------------+
        // 初期化           |
        // -----------------+
        this.format_file     = null               ;                                                 // フォーマットファイルのファイルパス
        this.file_name       = "Excel_Export_File";                                                 // 作成するファイルの名前
        
    }
    
    // ************************************************************************
    // [処理概要]                                                             *
    //   データをエクセルに出力                                               *
    // ************************************************************************
    OutPut = async (data = null) => {
        
        // エラー処理
        if(data == null || this.format_file == null){return;};
        
        // -------------------------------------+
        // ブック作成                           |
        // -------------------------------------+
        const workbook      = new   ExcelJS.Workbook  ()                ;                           // 新しいワークブック作成
        const res           = await fetch             (this.format_file);                           // フォーマットファイルをバイナリで読込み
        const format_binaly = await res.arrayBuffer   ()                ;                           // バイナリを操作可能なようにarrayBufferに変換
        
        // -------------------------------------+
        // ブックにフォーマットのデータをコピー |
        // -------------------------------------+
        await workbook.xlsx.load                   (format_binaly);                                 // フォーマットファイル読込み
        const format_sheet = workbook.getWorksheet (1)            ;                                 // フォーマットシート取得
        
        // -------------------------------------+
        // データをもとにシート作成             |
        // -------------------------------------+
        for(let value of data){
            
            // シート作成
            const new_sheet = workbook.addWorksheet(`${value.sheet_name}`);
            
            // -------------------------------------------+
            // 列の横幅をフォーマットからコピー           |
            // -------------------------------------------+
            for(let colmn of format_sheet.columns){                                                 // 列で回す
                
                new_sheet.getColumn(colmn._number).width = colmn.width;
                
            }
            
            // -------------------------------------------+
            // 行の縦幅をフォーマットからコピー           |
            // -------------------------------------------+
            format_sheet.eachRow((row, rowNumber) => {                                              // 行で回す
                
                new_sheet.getRow(rowNumber).height = row.height;
                
            });
            
            // -------------------------------------------+
            // セル結合をフォーマットからコピー           |
            // -------------------------------------------+
            for(let key in format_sheet._merges){
                
                // 結合開始地点
                const start_cell_r = format_sheet._merges[key].model.top                    ;
                const start_cell_c = format_sheet._merges[key].model.left                   ;
                const start_cell   = format_sheet.getCell(start_cell_r,start_cell_c).address;
                
                // 結合終了地点
                const end_cell_r   = format_sheet._merges[key].model.bottom                 ;
                const end_cell_c   = format_sheet._merges[key].model.right                  ;
                const end_cell     = format_sheet.getCell(end_cell_r,end_cell_c).address    ;
                
                // 結合処理
                new_sheet.mergeCells(`${start_cell}:${end_cell}`)                           ;
                
            }
            
            // -------------------------------------------+
            // シートのスタイルをフォーマットからコピー   |
            // -------------------------------------------+
            for(let column = 1;column<=format_sheet.columnCount;column++){                          // 列で回す
                
                for(let row = 1;row <= format_sheet.rowCount;row++){                                // 行で回す
                    
                    new_sheet.getCell(row,column).style  = format_sheet.getCell(row,column).style ; // セルのスタイル
                    new_sheet.getCell(row,column).value  = format_sheet.getCell(row,column).value ; // セルのテキスト
                    new_sheet.getCell(row,column).numFmt = format_sheet.getCell(row,column).numFmt; // セルの書式設定
                    
                }
                
            }
            
            // -------------------------------------------+
            // シートにデータを入れ込む                   |
            // -------------------------------------------+
            for(let key in value){                                                                  // データで回す
                
                if(key == 'sheet_name'){continue}                          ;
                new_sheet.getCell(value[key].cell).value = value[key].value;
                
            }
            
            // -------------------------------------------+
            // 印刷情報をフォーマットからコピー           |
            // -------------------------------------------+
            new_sheet.pageSetup.fitToPage = format_sheet.pageSetup.fitToPage;                       // 印刷の拡大・縮小
            new_sheet.pageSetup.paperSize = format_sheet.pageSetup.paperSize;                       // 印刷紙のサイズ
            
        }
        
        // フォーマットシートを削除
        workbook.removeWorksheet(format_sheet.id);
        
        // ----------------------------------------+
        // ダウンロードリンクを作成してダウンロード|
        // ----------------------------------------+
        const buffer  = await workbook.xlsx.writeBuffer()                       ;                   // バイナリデータに変換
        const blob    = new Blob([buffer], { type: 'application/octet-stream' });                   // バイナリデータをBlobに変換
        const link    = document.createElement('a')                             ;                   // ダウンロード用要素作成
        link.href     = URL.createObjectURL(blob)                               ;                   // ダウンロード用要素にリンクを設定
        link.download = `${this.file_name}.xlsx`                                ;                   // ダウンロードファイル名を設定
        document.body.appendChild(link)                                         ;                   // 作成した要素を入れ込み
        link.click()                                                            ;                   // クリックしてダウンロード
        document.body.removeChild(link)                                         ;                   // 要素を削除
        
    }
    
// ============================================== [ ↓セッター↓ ] ================================================================================== //
    
    set_format_file     = (set) => { this.format_file     = set; };
    set_file_name       = (set) => { this.file_name       = set; };
    
}
