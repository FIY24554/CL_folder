select
	em_m_item.item_name,
	em_t_stock_item.item_qty
from em_t_stock_item
left join em_m_item
on em_t_stock_item.item_cd = em_m_item.item_cd
where
	em_t_stock_item.location_cd = 'CN001'
order by em_t_stock_item.item_qty;




-- 以下のようにテーブル名の横に略称を付けることもできます。

select
	mi.item_name,
	si.item_qty
from em_t_stock_item si
left join em_m_item mi
on si.item_cd = mi.item_cd
where
	si.location_cd = 'CN001'
order by si.item_qty;
