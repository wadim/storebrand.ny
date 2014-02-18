#!/usr/bin/env bash
# v1.0

set -e

cat head.html > log.html

options="--all -500"
messages_command="git log --pretty=tformat:'%s' ${options[@]}"
lines_command="git log --pretty=tformat:'</span><a href=\"#%h\">%h</a> - <span class=\"date\">[%cr]</span> <span class=\"tags\">%d</span> __XX123XX__ <span class=\"author\">&lt;<a href=\"mailto:%ae\">%an</a>&gt;</span></li>' --graph ${options[@]}"

# damn bash arrays
OLDIFS=$IFS
IFS=$'\n'

messages=($(bash -c "$messages_command"))
lines=($(bash -c "$lines_command"))

IFS=$OLDIFS

mlen=${#messages[@]}
llen=${#lines[@]}

for (( i=0; i<${mlen}; i++ )); do
  message=$(perl -MHTML::Entities -e '$msg=encode_entities($ARGV[1]);$l=$ARGV[0];$l =~ s/__XX123XX__/$msg/;print $l;' "${lines[$i]}" "${messages[$i]}")
  echo -n "<li><span class=\"graph\">$message" >> log.html
done
