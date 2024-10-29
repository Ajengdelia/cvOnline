import Hero from "./components/hero";
import Riwayatpendidikan from "./components/riwayatpendidikan";
import Riwayatpekerjaan from "./components/riwayatpekerjaan";
import "./ajeng-delia.css";
import SkillsList from "./components/skillslist";

export default function CVonline() {
  return (
    <section>
      <Hero />
      <Riwayatpendidikan />
      <Riwayatpekerjaan />
      <SkillsList/>
    </section>
  );
}
