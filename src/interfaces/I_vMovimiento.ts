export interface I_vMovimiento {
  get descripcion(): string;
  get tipo(): "Cargo" | "Abono";
  get monto(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
