using System;
using System.Collections.Generic;

// Definición de la clase base "Coche"
class Coche
{
    public string Marca { get; set; }
    public string Modelo { get; set; }
    public int Año { get; set; }

    public Coche(string marca, string modelo, int año)
    {
        Marca = marca;
        Modelo = modelo;
        Año = año;
    }

    public virtual void MostrarInformacion()
    {
        Console.WriteLine($"Coche: {Marca} {Modelo}, Año {Año}");
    }
}

// Definición de una subclase "CocheDeportivo" que hereda de "Coche"
class CocheDeportivo : Coche
{
    public CocheDeportivo(string marca, string modelo, int año) : base(marca, modelo, año)
    {
    }

    // Sobrescribe el método MostrarInformacion para mostrar información específica de CocheDeportivo
    public override void MostrarInformacion()
    {
        Console.WriteLine($"Coche Deportivo: {Marca} {Modelo}, Año {Año}");
    }
}

class Program
{
    static void Main()
    {
        // Crear objetos de Coche y CocheDeportivo
        Coche coche1 = new Coche("Toyota", "Camry", 2022);
        Coche coche2 = new CocheDeportivo("Ferrari", "488 GTB", 2023);

        // Mostrar información de los coches
        coche1.MostrarInformacion();
        coche2.MostrarInformacion();

        // Ejemplo de utilización de lista de Coches
        List<Coche> listaCoches = new List<Coche>
        {
            new Coche("Honda", "Civic", 2021),
            new CocheDeportivo("Porsche", "911", 2022)
        };

        Console.WriteLine("\nLista de Coches:");
        foreach (Coche coche in listaCoches)
        {
            coche.MostrarInformacion();
        }
    }
}
