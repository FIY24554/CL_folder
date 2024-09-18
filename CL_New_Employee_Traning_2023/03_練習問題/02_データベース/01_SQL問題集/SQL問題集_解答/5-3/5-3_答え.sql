select
	lo.location_name,
	sum(si.item_qty)
from em_t_stock_item si
left join em_m_location lo
on si.location_cd = lo.location_cd
group by lo.location_name, si.location_cd
order by si.location_cd;

