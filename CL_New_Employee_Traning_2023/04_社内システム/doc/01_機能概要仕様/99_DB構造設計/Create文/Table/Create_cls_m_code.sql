------------------------------------------------------------------------------------------
-- 【EMS】テーブル作成SQL（CreateTable)
--
-- 名称：コードマスタ
-- ID  ：ems_m_code
--
------------------------------------------------------------------------------------------

Drop Table If Exists ems_m_code;

Create Table
	ems_m_code
	(
		cre_ymd									timestamp		default current_timestamp
		,cre_user_cd							varchar(10)
		,upd_ymd								timestamp		default current_timestamp
		,upd_user_cd							varchar(10)

		,code_type								varchar(30) 
		,code_value								varchar(50)
		,code_name								varchar(50)
		,code_shortname							varchar(20)
		,sort_key								numeric(3,2)
	)
;

alter table ems_m_code
	add constraint ems_m_code_pk
		primary key
		(
			code_type
			,code_value
		)
;

Comment on Table ems_m_code is 'アクセス権限マスタ';

Comment on Column ems_m_code.cre_ymd is '登録年月日';
Comment on Column ems_m_code.cre_user_cd is '登録者コード';
Comment on Column ems_m_code.upd_ymd is '更新年月日';
Comment on Column ems_m_code.upd_user_cd is '更新者コード';

Comment on Column ems_m_code.code_type is 'コード分類';
Comment on Column ems_m_code.code_value is 'コード値';
Comment on Column ems_m_code.code_name is 'コード名称';
Comment on Column ems_m_code.code_shortname is 'コード略称';
Comment on Column ems_m_code.sort_key is 'ソートキー';
