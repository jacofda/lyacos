export interface TeamMember {
  img: string;
  name: string;
  slug: string;
  position: string;
  description: string;
  order: number;
}

export const items = [
  {
    img: 'anastassios-psilojannopoulos.webp',
    name: 'Dr. Anastassios Psilojannopoulos',
    slug: 'anastassios-psilojannopoulos',
    position: 'Chairman of the Board',
    order: 1,
    description:
      'Anastassios Psilojannopoulos holds degrees in Classical Philology, History of Science and Philosophy of Technology. His doctoral thesis at Humboldt University focuses on works on Metaphysics and Logic published from 1687 to 1777 in relation to Kant’s Critique of Pure Reason. His international publications include papers on the early German Enlightenment as well as annotated translations of Brecht, Schopenhauer, Kafka, Marx, and Kautsky. He has also  translated a number of books on Ancient History and Byzantine Education as well as German detective literature.',
  },
  {
    img: 'vaios-ntafos.webp',
    name: 'Dr. Vaios Ntafos',
    slug: 'vaios-ntafos',
    position: 'Vice-Chairman, Secretary',
    description:
      'Vaios Ntafos is an editor and translator. He studied Political Sciences at the National and Kapodistrian University of Athens and Philosophy at the University of Toulouse. He holds a PhD in Philosophy and translates from French and English. Since 2107 he has been running the publishing house Amolgos in Athens, focusing on Philosophy, History of Ideas and Theatre. His scientific interests are primarily centered on European history and philosophy of the 17th and 18th centuries. He defines himself as an independent scholar in bleak times.',
    order: 2,
  },

  {
    img: 'robert-zaller.webp',
    name: 'Prof. Robert Zaller',
    slug: 'robert-zaller',
    position: 'Honorary Vice-Chairman, USA',
    description:
      'Robert Zaller, historian, critic, and poet, is Distinguished University Professor of History at Drexel University, Philadelphia, USA.  A student of Tudor-Stuart England and early modern Europe, he is also a critic of American and European literature, and his numerous books have been published by major university and commercial houses including Cambridge, Stanford, HarperCollins, and Longmans.  He has also devoted himself to the work of Dimitris Lyacos in various forums.  His most recent books include The Discourse of Legitimacy in Early Modern England; Robinson Jeffers and the American Sublime; and Speaking to Power (verse).  With his wife, the late Lili Bita, he translated Thirty Years in the Rain:  The Selected Poetry of Nikiforos Vrettakos.',
    order: 4,
  },

  {
    img: 'andrew-barrett.webp',
    name: 'Andrew Barrett',
    slug: 'andrew-barrett',
    position: 'Advisor, USA',
    description:
      'Andrew Barrett is a translator and musician, who lives in Detroit, Michigan. He translates from the ancient Greek and modern Greek. He has translated Dimitris Lyacos’ Until the Victim Becomes our Own, the follow-up and fourth part to the Poena Damni trilogy. His interviews with Dimitris concerning the composition and themes of Until the Victim Becomes our Own have appeared in Bomb and 3:AM Magazine. He is one of forty-two translators who contributed to a new translation of the Dionysiaca of Nonnus, published by The University of Michigan Press in 2022. His translations have appeared in Image, 3:AM Magazine, Words without Borders, MAYDAY, Anomalous Press and others. He attended the Banff International Translation Centre in 2011 and the Bread Loaf Translator’s Conference in 2019. He teaches ancient Greek mythology at Wayne State University.',
    order: 4,
  },

  {
    img: 'shao-xueping.webp',
    name: 'Dr. Shao Xueping',
    slug: 'shao-xueping',
    position: 'Advisor, China',
    description:
      'Critic, columnist, translator, director, and deputy general secretary of Shakespeare Association of China. Educated at Fujian Normal University, Peking University and Tsinghua University, she has been working with the School of English and International Studies of Beijing Foreign Studies University since 2013. She has published a dozen theses on the plays  by William Shakespeare and John Webster, and her Chinese translation of Shakespeare’s Coriolanus and A Midsummer Night’s Dream were published by Foreign Language Teaching and Research Press in 2015 and 2016. In 2017, her English translation of Relationship between the Central Government and Local Governments of Contemporary China (当代中国的中央地方关系) was published by China Social Sciences Press and Springer. Her English translation of Chinese Narratology (中国叙事学) is to be published by Routledge.',
    order: 5,
  },

  {
    img: 'annalisa-bottacin.webp',
    name: 'Prof. Annalisa Bottacin',
    slug: 'annalisa-bottacin',
    position: 'Honorary Member, Italy',
    description:
      'Annalisa-Angelika Bottacin Mertzios is Associate Professor of French Language and Literature at the Universities of Venice and Trieste, member of Ateneo Veneto and scientific director of various Foundations and Associations including the Stendhal Centers in Paris, Grenoble and Milan. She was among the founders of the historic Florentine magazine “Il Portolano”. She loves to define herself as a &quot;Stendhaliana&quot;: her critical journey that started with her degree thesis spans over four decades during which she has produced a number of books and articles on Stendhal and also discovered some of his unpublished works. Her most recent contribution is “Lamiel, Stendhal&#39;s last novel”(2023). Her academic work ranges from the period of the Enlightenment with studies on Jacques Cazotte, to the nineteenth century, where in addition to Stendhal, she was the editor of the first Italian edition of Théophile Gautier&#39;s Voyage en Italie. She has also written a number of papers on 20th century theater and is the author of three novels.',
    order: 6,
  },

  {
    img: 'arzu-eker.webp',
    name: 'Dr. Arzu Eker',
    slug: 'arzu-eker',
    position: 'Advisor, Turkey',
    description:
      'Arzu Eker holds a PhD from Boğaziçi University/Aristotelian University in Thessaloniki in Translation Studies. Her dissertation examines literary journalism and translation as dynamics in the recontextualization of traveling fiction with a special focus on Orhan Pamuk’s Pre-Nobel novels in English translation and their reception in reviews. A freelance translator, she has contributed a number of scholarly articles to international journals and participated in major conferences and also taught academic English, translation and translation theory at Turkish and Greek universities. She is the translator of Dimitris Lyacos’s books into Turkish.',
    order: 7,
  },
  {
    img: 'elli-ligyrou-lyacos.webp',
    name: 'Elli Ligyrou-Lyacos',
    slug: 'elli-ligyrou-lyacos',
    position: 'Executive Chairwoman',
    description:
      'Elli Ligyrou-Lyacos has a career spanning over 30 years in cinema as Assistant Director and Make-Up Artist. She has participated in more than 3000 productions including feature films, documentaries and advertising. Since 2012 she is the partner of Dimitris Lyacos. They married in 2019.',
    order: 8,
  },
  {
    img: 'anthimos-tsentekidis.webp',
    name: 'Anthimos Tsentekidis',
    slug: 'anthimos-tsentekidis',
    position: 'Treasurer',
    description:
      'Since 2014 Anthimos Tsentekidis has been a Senior Insurance Consultant in collaboration with major insurance companies. A former table tennis champion, he is also running Table Tennis Club APS ILION. In his free time he explores heavy metal’s love affair with literature.',
    order: 9,
  },
  {
    img: 'penny-papadopoulou.webp',
    name: 'Penny Papadopoulou',
    slug: 'penny-papadopoulou',
    position: 'Public Relations',
    description:
      'Penny Papadopoulou is a classical guitar soloist. For the past twenty years she has been teaching in Conservatories across Athens and participated in numerous seminars. She has a special interest in musico-literary studies, the common origin of music and poetry and multi-medial works that testify to a sisterhood between the arts.',
    order: 10,
  },
  {
    img: 'eugene-attia.webp',
    name: 'Eugene Attia',
    slug: 'eugene-attia',
    position: 'Translations Coordinator',
    description:
      'Eugene Attia is a philologist with a first degree on Archeology & History of Art and postgraduate studies on tendencies in modern linguistics as well as media discourse and communication. Her latest work focuses on gender issues in contemporary Greek literature. She loves Kazantzakis and cats.',
    order: 11,
  },
  {
    img: 'kostas-lioumas.webp',
    name: 'Kostas Lioumas',
    slug: 'kostas-lioumas',
    position: 'Legal Representation',
    description:
      'Costas Lioumas is a Greek Lawyer registered with the Athens Bar Association since 1995 and appointed at the Athens Supreme Court. He has 25 years of experience in Property, Administrative and Real Estate Law. He is a former President and, currently, member of the Council of The Rizarios Foundation.',
    order: 12,
  },
];
