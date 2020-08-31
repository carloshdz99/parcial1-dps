import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-compras',
  templateUrl: './form-compras.component.html',
  styleUrls: ['./form-compras.component.css']
})
export class FormComprasComponent implements OnInit {
  //ver estudiantes
  estudiantebool: boolean = false;
  //variables de registro
  nombre: string;
  productoEscogido: string;
  //elementos del arreglo
  compra: any;
  //arreglo de compras
  comprasRegistros = [];
  //total a pagar
  totalPago: number;
  //descuento a cliente
  descuentoCliente: number = 0;
  porcentajeDescuento: string ="0%";
  //dui del cliente
  duiCliente: string;
  //variable para mostrar tabla de registros
  verTabla: boolean = false;
  contador: number = 1;
  //cuenta la cantidad de registros
  cantidadRegistros: number = 0;
  

  //variable con los productos a vender
  articulosTienda = [
    { "nombre": "Taladro", "precio": 150, "codigoProducto": "to200", "descripcion": "Potente taladro de 800W" },
    { "nombre": "Plancha", "precio": 16.50, "codigoProducto": "pa150", "descripcion": "Plancha a vapor" },
    { "nombre": "Ventilador", "precio": 54.95, "codigoProducto": "vr100", "descripcion": "Ventilador de pared" },
    { "nombre": "Lamina de hierro", "precio": 25.38, "codigoProducto": "lo50", "descripcion": "Lamina de hierro" },
    { "nombre": "Lampara", "precio": 11.95, "codigoProducto": "la00", "descripcion": "Lampara para cabeza" }
  ];

  constructor() { }

  //evento submit
  onSubmit(form) {
    //console.log(form.value.contador)
    //console.log(form);
    //console.log(form.value.nombre);
    //console.log(this.comprasRegistros);
    //validando el producto escogido para aplicar el total a pagar
    if (form.value.productoescogido == "Taladro") {
      this.totalPago = 150;
    } else if (form.value.productoescogido == "Plancha") {
      this.totalPago = 16.50;
    } else if (form.value.productoescogido == "Ventilador") {
      this.totalPago = 54.95;
    } else if (form.value.productoescogido == "Lamina de hierro") {
      this.totalPago = 25.38;
    } else if (form.value.productoescogido == "Lampara") {
      this.totalPago = 11.95;
    }
    //validando la cantidad de visitas del cliente
    //para detectar si aplica a descuento
    if (this.comprasRegistros.length > 0) {
      //evaluando si el cliente tiene mas de dos compras
      this.comprasRegistros.forEach(function (datos) {
        if (form.value.dui == datos.dui) {
          form.value.contador = form.value.contador + 1;
          console.log(form.value.duiCliente)
        }
      })
    }
    //aplicando descuento
    if (form.value.contador > 2 && form.value.contador <= 4) {
      this.porcentajeDescuento="5%";
      this.descuentoCliente = 0.05;
      this.descuentoCliente = Math.round((this.descuentoCliente * this.totalPago)*100)/100;
    } else if (form.value.contador > 4) {
      this.porcentajeDescuento="10%";
      this.descuentoCliente = 0.1;
      this.descuentoCliente = Math.round((this.descuentoCliente * this.totalPago)*100)/100;
    }

    this.totalPago = Math.round((this.totalPago - this.descuentoCliente)*100)/100;
    //creando arreglo
    this.compra = {
      "nombre": form.value.nombre,
      "dui": form.value.dui,
      "productoComprado": form.value.productoescogido,
      "totalCompra": this.totalPago,
      "porcentajeDescuento": this.porcentajeDescuento,
      "descuento": this.descuentoCliente
    };
    
    //añadiendo valores al arreglo
    this.comprasRegistros.push(this.compra);
    //iniciando la variable de nuevo a 1
    form.value.contador=1;

    //mostrando cantidad de registros
    this.cantidadRegistros = this.comprasRegistros.length;
    this.porcentajeDescuento="0%";
    this.descuentoCliente=0;
  }

  //ver tabla de registros
  verTablaR() {
    this.verTabla = true;
    this.cantidadRegistros = this.comprasRegistros.length;
  }
  //ocultar tabla
  nverTablaR() {
    this.verTabla = false;
  }
  verEstudiantes(){
    this.estudiantebool = true;
  }
  nverEstudiantes(){
    this.estudiantebool = false;
  }

  ngOnInit(): void {
  }

}
