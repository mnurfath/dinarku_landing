-- Run in Supabase SQL Editor or via: supabase db push

create table if not exists public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.early_access_signups
  add constraint early_access_signups_email_unique unique (email);

alter table public.early_access_signups
  add constraint early_access_signups_gmail_only
  check (email ~* '^[a-z0-9._%+-]+@gmail\.com$');

create index if not exists idx_early_access_signups_email
  on public.early_access_signups (email);

alter table public.early_access_signups enable row level security;

create policy "Allow anonymous signups"
  on public.early_access_signups
  for insert
  to anon
  with check (email ~* '^[a-z0-9._%+-]+@gmail\.com$');
