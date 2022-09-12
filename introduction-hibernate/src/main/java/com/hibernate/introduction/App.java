package com.hibernate.introduction;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.hibernate.introduction.modelo.Mascota;

public class App {
    public static void main(String[] args) {
        // Crear objeto que permita fabricar sesiones
        SessionFactory factory = new Configuration()
                .configure("cfg.xml")
                .addAnnotatedClass(Mascota.class)
                .buildSessionFactory();

        // Abrir sessión
        Session session = factory.openSession();

        // Preparar la sesión para crear transacciones
        session.beginTransaction();
        try {
            /**** Crear objetos *****/
            // Mascota mascota_4 = new Mascota("Copo", "Giraldo", "FreshPudoll",
            // "http://fake-photo", "Blanco");
            // Mascota mascota_2 = new Mascota("Dulce", "Medina", "Bulldog",
            // "http://fake-photo", "Ninguna");
            // Mascota mascota_3 = new Mascota("Firulais", "Jimenez", "Criollo",
            // "http://fake-photo", "Agresivo");
            // Mascota mascota_4 = new Mascota("Brandom", "Tercer", "Beagle",
            // "http://fake-photo", "Jugueton");

            // Guardar los objetos

            // session.persist(mascota_4);
            // // Enviar datos a la BD
            // session.getTransaction().commit();

            /***** Buscar entidad/registro/mascota ********/

            // Mascota mascota = session.byId(Mascota.class).load(6);
            // System.out.println(mascota);
            // // Eliminar
            // session.remove(mascota);
            // session.getTransaction().commit();

            // Mascota mascota = session.find(Mascota.class, 4);
            // System.out.println(mascota);

            // // Actualizar
            // mascota.setNombre("Brandom");
            // mascota.setApellido("Tercero");
            // mascota.setRaza("Beagle Ingles");
            // mascota.setObservacion("Jugueton");

            // session.merge(mascota);
            // session.getTransaction().commit();

            // List<Mascota> mascotas = session.createQuery("from mascotas",
            // Mascota.class).list();

            // for (int i = 0; i < mascotas.size(); i++) {
            // System.out.println(mascotas.get(i));
            // }

        } catch (Exception e) {
            e.printStackTrace();
        }
        // Cerrar sesión
        session.close();
    }
}
