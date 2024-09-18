------------------------------------------------------------------------------------------
-- 【EMS】テーブル作成SQL（CreateTable)
--
-- 名称：アクセス権限マスタ
-- ID  ：ems_t_paid_holiday
--
------------------------------------------------------------------------------------------

Drop Table If Exists ems_t_paid_holiday;

Create table
	ems_t_paid_holiday
	(
		cre_ymd									timestamp		default current_timestamp
		,cre_user_cd							varchar(10)
		,upd_ymd								timestamp		default current_timestamp
		,upd_user_cd							varchar(10)

		,apply_no								varchar(15)
		,user_cd								varchar(10)
		,apply_ymd								varchar(8)
		,workflow_status						varchar(1)
		,paid_holiday_ymd						varchar(8)
		,paid_holiday_type						varchar(1)
		,paid_holiday_reason					varchar(50)
		,paid_holiday_before					numeric(3,1)
		,paid_holiday_after						numeric(3,1)
	)
;

alter table ems_t_paid_holiday
	add constraint ems_t_paid_holiday_pk
		primary key
		(
			apply_no
		)
;


Comment on Table ems_t_paid_holiday is 'アクセス権限マスタ';

Comment on Column ems_t_paid_holiday.cre_ymd is '登録年月日';
Comment on Column ems_t_paid_holiday.cre_user_cd is '登録者コード';
Comment on Column ems_t_paid_holiday.upd_ymd is '更新年月日';
Comment on Column ems_t_paid_holiday.upd_user_cd is '更新者コード';

Comment on Column ems_t_paid_holiday.apply_no is '申請番号';
Comment on Column ems_t_paid_holiday.user_cd is 'ユーザーコード';
Comment on Column ems_t_paid_holiday.apply_ymd is '申請日';
Comment on Column ems_t_paid_holiday.workflow_status is 'ステータス';
Comment on Column ems_t_paid_holiday.paid_holiday_ymd is '有給休暇取得日';
Comment on Column ems_t_paid_holiday.paid_holiday_type is '区分';
Comment on Column ems_t_paid_holiday.paid_holiday_reason is '取得理由';
Comment on Column ems_t_paid_holiday.paid_holiday_before is '有給休暇残数(承認前)';
Comment on Column ems_t_paid_holiday.paid_holiday_after is '有給休暇残数(承認後)';
