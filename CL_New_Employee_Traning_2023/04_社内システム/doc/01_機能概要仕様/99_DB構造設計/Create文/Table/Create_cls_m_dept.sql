------------------------------------------------------------------------------------------
-- 【EMS】テーブル作成SQL（CreateTable)
--
-- 名称：組織マスタ
-- ID  ：ems_m_dept
--
------------------------------------------------------------------------------------------

Drop Table If Exists ems_m_dept;

Create table
	ems_m_dept
	(
		cre_ymd									timestamp		default current_timestamp
		,cre_user_cd							varchar(10)
		,upd_ymd								timestamp		default current_timestamp
		,upd_user_cd							varchar(10)

		,dept_cd								varchar(10)
		,dept_name								varchar(30)
	)
;

alter table ems_m_dept
	add constraint ems_m_dept_pk
		primary key
		(
			dept_cd
		)
;


Comment on Table ems_m_dept is '組織マスタ';

Comment on Column ems_m_dept.cre_ymd is '登録年月日';
Comment on Column ems_m_dept.cre_user_cd is '登録者コード';
Comment on Column ems_m_dept.upd_ymd is '更新年月日';
Comment on Column ems_m_dept.upd_user_cd is '更新者コード';

Comment on Column ems_m_dept.dept_cd is '組織コード';
Comment on Column ems_m_dept.dept_name is '組織名';
