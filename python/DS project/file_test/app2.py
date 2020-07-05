import os
import shutil
from tkinter import *
import tkinter as tk

# https://www.youtube.com/watch?v=lOIJIk_maO4  .exe

root= tk.Tk()

canvas1 = tk.Canvas(root, width = 400, height = 300)
canvas1.pack()

var1 = tk.StringVar()
label2 = tk.Label( root, textvariable=var1 )
var1.set("ARANGE YOUR FILES HERE")

canvas1.create_window(200, 50, window=label2)

var = tk.StringVar()
label = tk.Label( root, textvariable=var )
var.set("ENTER path:")


canvas1.create_window(100, 140, window=label)

entry1 = tk.Entry (root) 
canvas1.create_window(200, 140, window=entry1)

def getSquareRoot ():  
    x1 = entry1.get()

    #file process
     
    path = x1;
    list_ = os.listdir(path)
    for file_ in list_:
        name,ext = os.path.splitext(file_)
        
        print(name)
        ext = ext[1:]
        if ext == '':
            continue
        if os.path.exists(path+'/'+ext):
            shutil.move(path+'/'+file_,path+'/'+ext+'/'+file_)
        else:
            os.makedirs(path+'/'+ext)
            shutil.move(path+'/'+file_,path+'/'+ext+'/'+file_)


    #file process end
   
button1 = tk.Button(text='SUBMIT', command=getSquareRoot)
canvas1.create_window(200, 180, window=button1)

root.mainloop()


