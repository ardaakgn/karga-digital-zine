export type Magazine = {
  id: number;
  title: string;
  description: string;
  date: string;
  pdf: string;
};

export const magazines: Magazine[] = [
  {
    id: 1,
    title: "Karga — Sayı 1",
    description: "İlk sayımız: başlangıç ve manifesto. Kanatların altındaki sessizlik.",
    date: "12.01.2025",
    pdf: "/pdfs/karga-sayi-1.pdf",
  },
];
