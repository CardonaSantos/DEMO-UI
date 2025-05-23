interface Proveedor {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string | null;
  razonSocial: string | null;
  rfc: string | null;
  nombreContacto: string | null;
  telefonoContacto: string | null;
  emailContacto: string | null;
  pais: string | null;
  ciudad: string | null;
  codigoPostal: string | null;
  latitud: number | null;
  longitud: number | null;
  activo: boolean;
  notas: string | null;
  creadoEn: string; // En formato ISO string
  actualizadoEn: string; // En formato ISO string
}

export type ProveedorType = Proveedor;
// dame una vista para poder mapear estos Proveedores, ellos usan este type
