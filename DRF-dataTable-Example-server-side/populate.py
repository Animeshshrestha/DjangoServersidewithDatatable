import os
import random

from faker import Faker
from faker.providers import job
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'drf_table_ex.settings')


import django
django.setup()

from musics.models import Music

def create_user(N):
	fake = Faker()
	fake.add_provider(job)
	for _ in range(N):
		song = fake.job()
		singer = fake.name()
		Music.objects.create(song=song,singer=singer)



create_user(500)
print("DOne")		
