def extraer_lineas_con_palabra(nombre_archivo, palabra_buscada, archivo_salida='salida.txt'):
    palabra_buscada = palabra_buscada.lower()
    lineas_encontradas = []

    with open(nombre_archivo, 'r', encoding='utf-8') as archivo:
        for linea in archivo:
            if palabra_buscada in linea.lower():
                lineas_encontradas.append(linea.strip())

    with open(archivo_salida, 'w', encoding='utf-8') as salida:
        for linea in lineas_encontradas:
            salida.write(linea + '\n')

    print(f"Se encontraron {len(lineas_encontradas)} línea(s) con la palabra '{palabra_buscada}' y se guardaron en '{archivo_salida}'.")

# Ejemplo de uso
nombre_archivo = 'C:/Users/santi/Downloads/logs.txt'          # Cambia esto por la ruta a tu archivo
palabra_buscada = 'xfail'         # Cambia por la palabra que buscas

extraer_lineas_con_palabra(nombre_archivo, palabra_buscada)
