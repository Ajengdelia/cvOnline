function RowRiwayatpekerjaan (props:any) {
    return (
  <div className="border-2 border-indigo-500/75 rounded-lg bg-purple-200 p-2 my-5">
  <div className="container mx-auto">
  <div className="grid grid-cols-12 gap-1">
  <div className="col-span-12 md:col-span-4">{props.Tahunkerja}</div>
  <div className="col-span-12 md:col-span-4">{props.Instansi}</div>
  <div className="col-span-12 md:col-span-4">{props.pekerjaan}</div>
  </div>
      </div>
      </div>
  );
  }

  export default function Riwayatpekerjaan() {
    return (
  <div className="container mx-auto p-2 text-center pt-20">
  <h2 className="text-2xl">Riwayat Pekerjaan</h2>
  <RowRiwayatpekerjaan Tahunkerja="2023" Instansi="Apotek Al Ma'soem" pekerjaan="kasir"/>
  <RowRiwayatpekerjaan Tahunkerja="2024" Instansi="Sapphire City Park Cafe" pekerjaan="satff accounting"/>
  <RowRiwayatpekerjaan Tahunkerja="2025" Instansi="Bank BRI" pekerjaan="teller"/>
  <RowRiwayatpekerjaan Tahunkerja="2026" Instansi="Hotel Sapphire" pekerjaan="Accounting"/>
  </div>
  );
   }