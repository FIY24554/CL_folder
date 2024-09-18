Drop Table If Exists em_t_stock_item;

Create Table
	em_t_stock_item(
		location_cd		varchar(5)
		,item_cd		varchar(5)
		,item_qty		numeric(3)
	);

ALTER TABLE em_t_stock_item
	ADD CONSTRAINT em_t_stock_item_pk
	PRIMARY KEY (item_cd, location_cd);

Comment on Table em_t_stock_item is 'ïiî‘ç›å…';
Comment on Column em_t_stock_item.location_cd is 'ç›å…èÍèä';
Comment on Column em_t_stock_item.item_cd is 'ïiî‘';
Comment on Column em_t_stock_item.item_qty is 'èäóLêî';