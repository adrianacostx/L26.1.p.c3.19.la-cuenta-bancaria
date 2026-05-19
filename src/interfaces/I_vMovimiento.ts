export interface I_vMovimiento {
  get descripcion(): string;
  get tipo(): "cargo" | "abono";
  get monto(): number;
  onCancelar(callback: () => void): void;
  onAceptar(callback: () => void): void;
  mostrar(): void;
  ocultar(): void;
}
