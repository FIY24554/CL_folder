------------------------------------------------------------------------------------------
-- 【EMS】テーブル作成SQL（CreateTable)
--
-- 名称：システムパラメータ
-- ID  ：ems_m_parameter_system
--
------------------------------------------------------------------------------------------

Drop Table If Exists ems_m_parameter_system;

Create table
	ems_m_parameter_system
	(
		cre_ymd									timestamp		default current_timestamp
		,cre_user_cd							varchar(10)
		,upd_ymd								timestamp		default current_timestamp
		,upd_user_cd							varchar(10)

		,parameter_key							varchar(30)
		,parameter_value						varchar(50)
		,note_text								varchar(50)
	)
;

alter table ems_m_parameter_system
	add constraint ems_m_parameter_system_pk
		primary key
		(
			parameter_key
		)
;


Comment on Table ems_m_parameter_system is 'システムパラメータ';

Comment on Column ems_m_parameter_system.cre_ymd is '登録年月日';
Comment on Column ems_m_parameter_system.cre_user_cd is '登録者コード';
Comment on Column ems_m_parameter_system.upd_ymd is '更新年月日';
Comment on Column ems_m_parameter_system.upd_user_cd is '更新者コード';

Comment on Column ems_m_parameter_system.parameter_key is 'パラメータキー';
Comment on Column ems_m_parameter_system.parameter_value is 'パラメータ値';
Comment on Column ems_m_parameter_system.note_text is 'パラメータ説明';
