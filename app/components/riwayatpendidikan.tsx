function RowRiwayat (props:any) {
    return (
  <div className="border-2 border-indigo-500/75 rounded-lg bg-purple-200 p-2 my-5">
  <div className="container mx-auto">
  <div className="grid grid-cols-12 gap-1">
  <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
  <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
  <div className="col-span-12 md:col-span-4">{props.tahun}</div>
  </div>
      </div>
      </div>
  );
  }

  export default function Riwayatpendidikan() {
    return (
  <div className="container mx-auto p-2 text-center pt-20">
  <h2 className="text-2xl">Riwayat Pendidikan</h2>
  
  <RowRiwayat jenjang="SD" sekolah="SDN 2 Malangnengah" tahun="2009-2015"/>
  <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Cisarua" tahun="2015-2018"/>
  <RowRiwayat jenjang="SMA" sekolah="SMKN 1 Sumedang" tahun="2018-2021"/>
  <RowRiwayat jenjang="Prodi Komputerisasi Akuntansi" sekolah="Universitas Masoem" tahun="2022-Sekarang"/>
  </div>
  );
   }