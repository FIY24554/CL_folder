Drop Table If Exists em_m_code;

Create Table
	em_m_code(
		code_type		varchar(10)
		,code_value		varchar(10)
		,code_name		varchar(20)
	);

ALTER TABLE em_m_code
	ADD CONSTRAINT em_m_code_pk
	PRIMARY KEY (code_type, code_value);

Comment on Table em_m_code is 'コードマスタ';
Comment on Column em_m_code.code_type is 'コード種別';
Comment on Column em_m_code.code_value is 'コード値';
Comment on Column em_m_code.code_name is 'コード名称';
