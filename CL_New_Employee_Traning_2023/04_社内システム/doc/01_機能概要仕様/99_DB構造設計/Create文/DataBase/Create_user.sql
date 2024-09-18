Drop User If Exists ems_user;
Drop ROLE If Exists ems_user;
CREATE USER ems_user WITH PASSWORD 'ems_user';
ALTER ROLE ems_user SUPERUSER;