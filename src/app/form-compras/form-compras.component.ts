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
  //dui del cliente
  duiCliente: string;
  //variable para mostrar tabla de registros
  verTabla: boolean = false;
  contador: number = 1;
  //cuenta la cantidad de registros
  cantidadRegistros: number = 0;
  

  //variable con los productos a vender
  articulosTienda = [
    { "nombre": "Tortas", "precio": 2.00, "codigoProducto": "ts200", "descripcion": "Ricas tortas mexicanas" },
    { "nombre": "Pan con pollo", "precio": 1.50, "codigoProducto": "po150", "descripcion": "Panes con gallina" },
    { "nombre": "Pupusas", "precio": 0.25, "codigoProducto": "ps100", "descripcion": "Variedad de ricas pupusas" },
    { "nombre": "Hot Dogs", "precio": 1.00, "codigoProducto": "hs50", "descripcion": "Los mejores hot dogs del mundo" },
    { "nombre": "Sandwich", "precio": 0.5, "codigoProducto": "sh00", "descripcion": "Sandwiches de pollo" }
  ];

  constructor() { }

  //evento submit
  onSubmit(form) {
    //console.log(form.value.contador)
    //console.log(form);
    //console.log(form.value.nombre);
    //console.log(this.comprasRegistros);
    //validando el producto escogido para aplicar el total a pagar
    if (form.value.productoescogido == "Tortas") {
      this.totalPago = 2.00;
    } else if (form.value.productoescogido == "Pan con pollo") {
      this.totalPago = 1.50;
    } else if (form.value.productoescogido == "Pupusas") {
      this.totalPago = 0.25;
    } else if (form.value.productoescogido == "Hot Dogs") {
      this.totalPago = 1.00;
    } else if (form.value.productoescogido == "Sandwich") {
      this.totalPago = 0.5;
    }

    //validando la cantidad de visitas del cliente
    //para detectar si aplica a descuento
    if (this.comprasRegistros.length > 0) {
      //evaluando si el cliente tiene mas de dos compras
      this.comprasRegistros.forEach(function (datos) {
        if (form.value.nombre == datos.nombre) {
          form.value.contador = form.value.contador + 1;
          console.log(form.value.contador)
        }
      })
    }
    //aplicando descuento
    if (form.value.contador > 2 && form.value.contador <= 4) {
      this.descuentoCliente = 0.05;
      this.descuentoCliente = this.descuentoCliente * this.totalPago;
    } else if (form.value.contador > 4) {
      this.descuentoCliente = 0.1;
      this.descuentoCliente = this.descuentoCliente * this.totalPago;
    }
    //creando arreglo
    this.compra = {
      "nombre": form.value.nombre,
      "dui": form.value.dui,
      "productoComprado": form.value.productoescogido,
      "totalCompra": this.totalPago,
      "descuento": this.descuentoCliente
    };
    
    //añadiendo valores al arreglo
    this.comprasRegistros.push(this.compra);
    //iniciando la variable de nuevo a 1
    form.value.contador=1;

    //mostrando cantidad de registros
    this.cantidadRegistros = this.comprasRegistros.length;
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
