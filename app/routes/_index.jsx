import React, {useState} from "react"
import imagen from "../../public/img/BTS.jpg"
import styles from "~/styles/artistas.css"


export function meta() {
  return [ 
  (
      {
          title:"BTS",
          description: "BTS biografia, albums singles y streams"
      }
  )
]
}


export function links() {
  return [
    {
      rel:"stylesheets",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

export default function Index() {

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return (
    <main className="contenedor artistas">
      <h2 className="heading">BTS</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre BTS"/>
        <div>
       
          <p> Record-breaking South Korean boy band BTS (aka Bangtan Boys) deliver an energetic blend of dance-pop and hip-hop with deeply introspective lyrics that helped them build a devoted global following while also making them one of the most successful Korean exports in the world. Debuting in the early 2010s with their Skool trilogy, they steadily expanded their audience until breaking into the mainstream consciousness with the Love Yourself series. After the platinum-certified Love Yourself: Tear became their first number one effort outside of their home country, the compilation Love Yourself: Answer found them topping charts in Canada and Japan. By 2020, international fervor reached a peak with their fourth release, Map of the Soul: 7, which topped the charts in over 20 countries. Hitting another milestone that summer, BTS became the first all-South Korean act to top the U.S. singles chart with their retro-disco track "Dynamite" from their chart-topping fifth set, Be. The following year, they notched three more Billboard number ones, including "Butter" and the  collaboration "My Universe." A sprawling anthology, Proof, which chronicled their first decade, landed in the summer of 2022</p>
          <div className={mostrarComponente ? "show-element" : null} >
          {mostrarComponente && <span> 
          <p> Formed by producer Bang Si Hyuk, the septet's lineup includes  (), team leader and rapper; Jin (Kim Seokjin), singer; Suga (Min Yoongi), rapper;  (), rapper and choreographer; Jimin (Jimin Park), singer and choreographer; V (Kim Taehyung), singer; and  (Jungkook Jeon), singer, rapper, and choreographer. In addition to production and composition, the members of BTS also write their own lyrics, which tackle topics like mental health, self-acceptance, and empowerment. With their youthful blend of club-worthy dance anthems, stirring love ballads, and aggressive rapping, BTS connected with a devoted fan base (dubbed "ARMY") and set themselves apart from the K-pop industrial machine when they debuted in 2013 with the first installment of their "School Trilogy" series, 2 Cool 4 Skool. A few months later, they released the second EP of the saga, O!RUL8,2? The trilogy was completed with Skool Luv Affair, which was released around Valentine's Day in 2014</p>
          <p> Later that year, BTS issued their full-length debut album, Dark & Wild, featuring the single "Danger." As their fan base grew and international tours sold out, they released The Most Beautiful Moment in Life, Pt. 1 in April 2015 and the follow-up, Pt. 2, some months later in November. They embarked on a massive world tour as The Most Beautiful Moment in Life, Pt. 2 topped a record-setting six international music charts, including Billboard's World Albums chart. After four weeks, they set a record as the first K-pop act to achieve such a feat</p>

          <p> The group continued to break records with the release of their sophomore LP, Wings. Released in late 2016, Wings not only became the first BTS effort to debut atop both the Korean album and song charts, but they were the third K-pop act to land in the Canadian Hot 100. However, the album's impact was most apparent on the Billboard charts. The best showing to date for a K-pop act, Wings debuted in the Top 30 of the Billboard 200 -- both their highest U.S. chart debut and most sales to date -- making BTS the first K-pop artists with three albums to enter the main album charts. (Wings became their sixth Top Three hit -- and second number one -- on the World Albums chart.) They also became the first K-pop act to spend four weeks on the charts. Wings continued the artistic and creative growth for the septet, featuring seven solo tracks that showcased the personality of each member. Four months later, BTS re-released the album as You Never Walk Alone. The updated version added four new songs to the original Wings track listing, including the singles "Spring Day" and "Not Today." With their presence in the United States continuing to expand, the group went on to win the Top Social Artist Award at the 2017 Billboard Music Awards. Their fifth EP, Love Yourself: Her, arrived that September and became the first K-pop album to debut in the Billboard 200's Top Ten, entering the chart at number seven</p>

          <p> In early 2018, BTS received their first double-platinum certifications in Japan and became the first Korean act to receive two gold certifications in the U.S. That spring, they issued their third Japanese LP, Face Yourself, which featured Japanese versions of tracks from Wings and Love Yourself: Her. The set -- which included just two previously unreleased songs -- debuted just outside the Top 40 on the Billboard 200. The next month, BTS released their third official full-length, Love Yourself: Tear, which included the single "Fake Love." Days later, they returned to the Billboard Music Awards, performing and winning Top Social Artist for the second year in a row. Their Billboard success continued when Love Yourself: Tear soared to the top of the Billboard 200, becoming the first foreign-language chart-topper on the U.S. chart in over a decade. BTS repeated the feat that summer with the conclusion to the trilogy, Love Yourself: Answer. The compilation featured a handful of new tracks, including lead single "Idol," packaged with previously released songs from Her and Tear, as well as some remixes and a -assisted version of "Idol." For their contributions to spreading Korea's cultural influence around the world, each member of BTS was awarded cultural merit medals by government officials, the youngest recipients to ever be granted the honor</p>

          <p> Riding the international success of the Love Yourself series, the boys closed the era with a sold-out global stadium tour, which primed them for the start of the next BTS wave: Map of the Soul: Persona. The first single from the 2019 album, "Persona," showcased a solo  referencing both Carl Jung and BTS' own 2014 track "Intro: Skool Luv Affair," while the follow-up "Boy with Luv" recruited American singer . While "Boy with Luv" climbed into the Top Ten of the Hot 100, the album topped the Billboard 200, becoming BTS' third number one in a year. Before the next official release, the band found themselves the focus of a mobile game, BTS World. The accompanying companion album, BTS World: Original Soundtrack, included a new track by the crew, as well as a trio of collaborations with guests , , and . Not an official BTS album per se, the bulk of the set featured instrumental compositions by Kang Minkook, who wrote one theme song per BTS member, and showcased tracks by Korean indie duo Okdal and  labelmate . Despite not being an actual BTS effort, the soundtrack still managed to land at number 72 on the Billboard 200 while simultaneously topping the Korean charts</p>

          <p> After a brief hiatus from the spotlight, BTS returned in earnest in 2020. The same week that Love Yourself: Answer became the first South Korean album to be certified platinum in the U.S., they joined  on the Grammy Awards stage to perform 's "Seoul Town Road" version of the rapper's hit single. The following month, the group released their fourth Korean-language LP and second number one U.S. hit, Map of the Soul: 7. The set merged highlights from Map of the Soul: Persona with over a dozen new tracks, including the single "Black Swan" and collaborations with  and  ("Louder Than Bombs") and  (the digital-only "On"). They extended the Map of the Soul era in 2020 with their fourth Japanese-language effort, Map of the Soul: 7 - The Journey, which reimagined tracks from Map of the Soul: 7, Map of the Soul: Persona, and Love Yourself: Answer for their Japanese fans. As for English-speaking fans, the group released their first track sung entirely in that language later in the summer. The disco-funk "Dynamite" broke streaming records within hours of release and debuted atop the Billboard Hot 100, making BTS the first all-South Korean act to top the U.S. chart. The same week, the group made their first appearance on the MTV Video Music Awards, performing "Dynamite" for a virtual audience. The track was the first taste of their next album era, which was inaugurated with the November release of Be. Recorded while in quarantine during the COVID-19 pandemic, the effort featured increased input by each member of the septet, which included songwriting, production, and overall design. The same week that Be became their fifth album to debut atop the Billboard 200, BTS also scored their second consecutive number one single with "Life Goes On." To cap off a banner year, South Korea's National Assembly passed a revised law that pushed the age for mandatory military service from 28 to 30, sparing Jin an early hiatus from the group and allowing them to continue contributing to South Korea's GDP, of which almost $5 billion was attributed to BTS in 2019</p>

          <p> In February 2021, BTS performed an MTV Unplugged set, which featured stripped-down takes on songs from Be ("Dynamite," "Telepathy," "Blue & Grey," and "Life Goes On") as well as a faithful rendition of 's "Fix You." Months later, the group returned with the -penned single "Film Out" from their Japanese-language compilation BTS, The Best. By the time summer rolled around, the boys were ready with another English-language single, the Grammy-nominated "Butter." Released in May, the track broke a streaming premiere record after amassing over 20 million views in an hour and went on to become the group's fourth chart-topper on the Billboard Hot 100. Various remixes were released in "Hotter," "Sweeter," and "Cooler" versions -- as well as a standalone cut featuring a  verse -- which kept the track planted at number one for weeks. Eventually released as a multi-format physical single, it was paired with the -penned song "Permission to Dance," which hit number one in the U.S. and across Asia. Their third U.S. chart-topper of 2021 arrived in September when they joined  for "My Universe" from the English band's Music of the Spheres. Capping yet another banner year, they took home Artist of the Year, Favorite Pop Group, and Favorite Pop Song at that November's American Music Awards. That same month, BTS kicked off the U.S. portion of their Permission to Dance on Stage concert series in Los Angeles, concluding months later in April 2022 in Las Vegas. Just days before that Vegas residency, they performed "Butter" at the 64th Grammy Awards. That May, they took home an additional trio of Billboard Music Awards, making them the group with the most awards in the history of the show. Weeks later, BTS visited the White House to speak with President Joe Biden about the surge in Asian American hate crimes. In early June, the group celebrated their first decade together with the three-disc compilation Proof, which featured a handful of new tracks (including the top 20 Hot 100 single "Yet to Come") spread over a best-of disc, a disc of curated tracks personally chosen by each member, and a disc of demos and unreleased songs. A single, "The Planet," arrived in May 2023 as part of the soundtrack to the animated film Bastions. ~ Neil Z. Yeung, Rovi</p>
          </span> }
         </div>
        </div>
        <button
          className="button"
          onClick={() => setMostrarComponente(!mostrarComponente)}>
            {mostrarComponente ? `Leer menos`: `Leer mas`}
          </button>
      </div>
    </main>
  )
}
 