create table users (
  id bigint generated always as identity primary key,
  telegram_id bigint unique not null,
  username text,
  balance bigint default 0,
  total_games integer default 0,
  total_wins integer default 0,
  total_losses integer default 0,
  total_profit bigint default 0,
  is_banned boolean default false,
  created_at timestamp default now()
);

create table game_history (
  id bigint generated always as identity primary key,
  telegram_id bigint not null,
  username text,
  bet bigint not null,
  multiplier numeric not null,
  result text not null,
  profit bigint not null,
  created_at timestamp default now()
);

create table coin_logs (
  id bigint generated always as identity primary key,
  telegram_id bigint not null,
  username text,
  amount bigint not null,
  action text not null,
  created_at timestamp default now()
);

create table admins (
  id bigint generated always as identity primary key,
  telegram_id bigint unique not null,
  role text default 'owner',
  created_at timestamp default now()
);
