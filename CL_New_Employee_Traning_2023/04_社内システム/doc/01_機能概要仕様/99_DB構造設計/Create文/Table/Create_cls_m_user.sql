------------------------------------------------------------------------------------------
-- 【EMS】テーブル作成SQL（CreateTable)
--
-- 名称：ユーザーマスタ
-- ID  ：ems_m_user
--
------------------------------------------------------------------------------------------

Drop Table If Exists ems_m_user;

Create table
	ems_m_user
	(
		cre_ymd									timestamp		default current_timestamp
		,cre_user_cd							varchar(10)
		,upd_ymd								timestamp		default current_timestamp
		,upd_user_cd							varchar(10)

		,user_cd								varchar(10)
		,user_name								varchar(30)
		,user_password							varchar(20)
		,dept_cd								varchar(10)
		,join_ymd								varchar(8)
		,user_position							varchar(2)
	)
;

alter table ems_m_user
	add constraint ems_m_user_pk
		primary key
		(
			user_cd
		)
;


Comment on Table ems_m_user is 'ユーザーマスタ';

Comment on Column ems_m_user.cre_ymd is '登録年月日';
Comment on Column ems_m_user.cre_user_cd is '登録者コード';
Comment on Column ems_m_user.upd_ymd is '更新年月日';
Comment on Column ems_m_user.upd_user_cd is '更新者コード';

Comment on Column ems_m_user.user_cd is 'ユーザーコード';
Comment on Column ems_m_user.user_name is 'ユーザー名';
Comment on Column ems_m_user.user_password is 'パスワード';
Comment on Column ems_m_user.dept_cd is '組織コード';
Comment on Column ems_m_user.join_ymd is '入社年月日';
Comment on Column ems_m_user.user_position is '役職';
