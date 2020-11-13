create table user
(
    user_id BIGINT auto_increment unique primary key ,
    user_name varchar(100) not null,
    password varchar(256) not null,
    enabled boolean not null
)
    comment 'User table for authentication';
create table role
(
    role_id BIGINT auto_increment unique primary key ,
    role varchar(100) not null
)
    comment 'Role table for authentication roles';
create table role_user
(
    user_id bigint not null,
    role_id bigint not null,
    constraint role_user_role_role_id_fk
        foreign key (role_id) references role (role_id),
    constraint role_user_user_user_id_fk
        foreign key (user_id) references user (user_id)
)
    comment 'Conjunction table to manage roles per user';