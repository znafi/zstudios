interface CalendlyWidget {
  initPopupWidget: (options: { url: string }) => void;
  showPopupWidget: (url: string) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}
