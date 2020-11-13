create table plate
(
    plate_id BIGINT auto_increment unique primary key,
    category_id_fk BIGINT not null,
    description varchar(512) not null,
    active boolean default true null,
    name varchar(128) not null,
    constraint category_id_fk
        foreign key (category_id_fk) references category (category_id)

)
    comment 'Plates table';

