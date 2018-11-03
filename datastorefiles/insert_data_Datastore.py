import sys
from google.cloud import datastore
client = datastore.Client(namespace="quiz")

def insert_data_into_datastore(kind,each_row):
    book = datastore.Entity(client.key(kind,each_row['id']))
    book['book_name'] = each_row['book_name']
    book['class']=each_row['class']
    book['link_to_book']=each_row['link_to_book']
    book['sorter']=each_row['sorter']
    book['subject']=each_row['subject']
    client.put(book)

import json
f = open(sys.argv[1]).read()
data = json.loads(f)
for each_row in data:
    insert_data_into_datastore('books',each_row)

