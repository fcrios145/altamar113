create table category
(
    category_id BIGINT auto_increment unique primary key,
    name varchar(200) not null,
    active boolean default true
)
    comment 'Categories';