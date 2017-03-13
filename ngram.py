#!/usr/bin/env python3

import collections
import random
import sys

with open(sys.argv[1], 'r') as f:
    corpus = f.read()
out_len = int(sys.argv[2])
n = int(sys.argv[3])
model = collections.defaultdict(collections.Counter)
for i in range(len(corpus) - n):
    model[corpus[i:i+n]][corpus[i+n]] += 1
out = (lambda i: corpus[i:i+n])(random.randrange(len(corpus) - n))
alt = 0
alt_uniq = 0
while len(out) < out_len:
    dist = model[out[len(out) - n:]]
    if not dist: break
    choices = list(dist.keys())
    out += random.choices(choices, [dist[k] for k in choices])[0]
    alt += sum(dist.values()) - 1
    alt_uniq += len(dist) - 1
print(out)
print(str(alt) + ' alternate branches')
print(str(alt_uniq) + ' unique alternate branches')
