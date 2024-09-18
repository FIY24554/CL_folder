select
	t1.location_name
	,t1.item_type_name
	,t1.item_qty
from (
	select
		ml.location_cd
		,ml.location_name
		,mi.item_type
		,mc.code_name as item_type_name
		,sum(si.item_qty) as item_qty
	from em_m_location ml
	inner join em_t_stock_item si
	on ml.location_cd = si.location_cd
	inner join em_m_item mi
	on si.item_cd = mi.item_cd
	inner join em_m_code mc
	on mi.item_type = mc.code_value
	and mc.code_type = 'item_type'
	group by ml.location_cd, ml.location_name, mi.item_type, mc.code_name
) t1
where
	t1.item_qty >= 30
order by location_cd, item_type desc