select
	mi.item_name,
	sum(si.item_qty)
from em_t_stock_item si
left join em_m_item mi
on si.item_cd = mi.item_cd
group by mi.item_name
order by sum desc;