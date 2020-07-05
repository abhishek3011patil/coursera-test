import os
import shutil
import tkinter as tk

root= tk.Tk()

canvas1 = tk.Canvas(root, width = 400, height = 300)
canvas1.pack()

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


