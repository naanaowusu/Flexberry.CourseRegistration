docker build --no-cache -f SQL\Dockerfile.PostgreSql -t course registration/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t course registration/app ../..
