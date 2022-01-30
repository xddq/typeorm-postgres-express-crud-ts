#!/bin/bash
#
# Author: Pierre Dahmani
# Created: 12.01.2022
#
# Description: deletes all backups that are older than the max age for a given
# path.

# MAYBE(pierre): also set via env vars with sane defaults.
MAX_AGE_IN_DAYS=5
BACKUP_PATH="/backups"

find "$BACKUP_PATH" -type f -mtime "$MAX_AGE_IN_DAYS" | xargs rm

