from shutil import copyfile
import os

def copying():
    file = input("What JSON do you want to use to generate the diagram? ")
    original = './public/example-api.json'
    copyfile(file, original)

copying()
