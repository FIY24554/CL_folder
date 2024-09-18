Drop Table If Exists em_m_location;

Create Table
	em_m_location(
		location_cd			varchar(30)
		,location_name		varchar(50)
	);

ALTER TABLE em_m_location
	ADD CONSTRAINT em_m_location_pk
	PRIMARY KEY (location_cd);

Comment on Table em_m_location is '拠点マスタ';
Comment on Column em_m_location.location_cd is '拠点コード';
Comment on Column em_m_location.location_name is '拠点名';
