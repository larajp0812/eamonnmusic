import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.headers}>BIOGRAPHY</div>
      <div className={styles.divider} />
      <p>
        Irish tenor Eamonn Walsh, from Mitchelstown, Co. Cork, is establishing a
        versatile career across opera, concert and musical theatre. He recently
        completed his Masters in Music Performance at Trinity Laban
        Conservatoire of Music and Dance, graduating with First-Class Honours as
        a Kathleen Creed Scholarship recipient, following his undergraduate
        studies at Maynooth University.{" "}
      </p>
      <p>
        Eamonn was a 2025 Wild Arts Opera Young Artist, touring the UK in their
        production of The Elixir of Love and covering Nemorino, with the
        company’s final performance taking place at the iconic Holland Park
        Opera. He went on to tour with Barefoot Opera in Lucia di Lammermoor,
        singing the role of Arturo, including four performances at London’s
        Arcola Theatre, where Everything Theatre praised him as having “talent
        written all over him.” His other operatic roles include Tamino (Die
        Zauberflöte), Rodolfo (La Bohème), Ferrando (Così fan tutte), and Tom
        Rakewell (The Rake’s Progress).
      </p>

      <p>
        On the concert stage, Eamonn has appeared as a soloist in works such as
        Haydn’s Creation, Mozart’s Requiem and Handel’s Messiah, performing
        across Ireland and the UK. He has sung internationally with Vox Integra
        in Venice and with the Irish National Opera Chorus in Fidelio and
        Carmen. He also recently took part in high-profile masterclasses at
        Wigmore Hall with tenor Nicky Spence and at Hurn Court Opera with
        Patricia Rozario OBE.{" "}
      </p>
      <p>
        Beyond opera, Eamonn has a rich background in musical theatre. He
        performed as Prince Charming in the Cork Opera House panto Sleeping
        Beauty (2022) and won Best Male at the All-Ireland Musical
        Intervarsities for his performance as Jamie in Everybody’s Talking About
        Jamie (2021). He also created the role of Eabhar in the debut of Tír na
        nÓg: The Musical (Dlr Mill Theatre, Dublin, 2022).
      </p>
      <p>
        Eamonn began performing as a boy soprano at the age of ten, appearing
        nationwide with leading Irish artists including Cara O’Sullivan, Evelyn
        Grant, and Frank McNamara. He was a choral scholar at Christ Church
        Cathedral, Dublin, and a member of the Maynooth University Chamber
        Choir, performing as a soloist on RTÉ Christmas and Easter broadcasts as
        well as singing for the visit of President Michael D. Higgins at
        Maynooth University.
      </p>
      <p>
        Over the years, Eamonn’s Christmas concerts have become a much-loved
        tradition with audiences growing year after year. Last year’s show in
        Mitchelstown sold out in under 24 hours and this upcoming tour promising
        an exciting mix of Christmas favourites, classical gems and popular
        Irish folk and trad tunes.
      </p>
    </div>
  );
}
