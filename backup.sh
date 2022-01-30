#!/bin/bash
#
# Author: Pierre Dahmani
# Created: 12.01.2022
#
# Description: Creates a backup of the current psql cluster. Works for alpine
# based psql.

# NOTE(pierre): backups dir currently hardcoded. can adapt via env variables.
pg_dumpall --clean -U "$POSTGRES_USER" > /backups/db-dump-$(dat -Iseconds).sql
