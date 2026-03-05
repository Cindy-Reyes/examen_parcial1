import tkinter as tk
from tkinter import messagebox

def validar_datos():
    nombre = entry_nombre.get()
    edad = entry_edad.get()

    # Prueba unitaria: validar que no estén vacíos
    if not nombre or not edad:
        messagebox.showerror("Error", "Todos los campos son obligatorios")
        return
    
    # Prueba de integración: validar que edad sea número
    try:
        edad = int(edad)
    except ValueError:
        messagebox.showerror("Error", "La edad debe ser un número")
        return
    
    # Prueba de sistema: validar rango de edad
    if edad < 0 or edad > 120:
        messagebox.showerror("Error", "Edad fuera de rango")
        return
    
    # Prueba de aceptación: mostrar éxito
    messagebox.showinfo("Éxito", f"Datos correctos:\nNombre: {nombre}\nEdad: {edad}")

# Interfaz gráfica
root = tk.Tk()
root.title("Modelo V")

tk.Label(root, text="Nombre:").grid(row=0, column=0, padx=10, pady=5)
entry_nombre = tk.Entry(root)
entry_nombre.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Edad:").grid(row=1, column=0, padx=10, pady=5)
entry_edad = tk.Entry(root)
entry_edad.grid(row=1, column=1, padx=10, pady=5)

btn_validar = tk.Button(root, text="Validar", command=validar_datos)
btn_validar.grid(row=2, column=0, columnspan=2, pady=10)

root.mainloop()