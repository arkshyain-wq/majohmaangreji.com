/**
 * Majoh Ma Angreji — Studytime With Arkshya
 * Complete Demo Comic Batches & PDF Library Data (Batches 01 to 13, Pages 1 to 50)
 */

const COMIC_BATCHES = [
  {
    id: 1,
    batchNum: '01',
    batchName: 'Batch 01',
    pagesRange: 'Pages 01–04',
    pagesCount: 4,
    titleEn: 'The Bell, Butterfly and First Clue',
    titleGu: 'ઘંટડી, પતંગિયું અને પહેલો સંકેત',
    pdfFile: 'Batch_01_Pages_01-04_The_Bell_Butterfly_and_First_Clue.pdf',
    pdfSize: '15.6 MB',
    cover: 'assets/pdf_previews/batch_01_cover.jpg',
    pages: [
      'assets/comic_pages/batch_01_page_01.jpg',
      'assets/comic_pages/batch_01_page_02.jpg',
      'assets/comic_pages/batch_01_page_03.jpg',
      'assets/comic_pages/batch_01_page_04.jpg'
    ],
    act: 'act1',
    actLabel: 'Act 1: School & Clues',
    standards: 'Std 1–3',
    tags: ['Greetings', 'Bicycle Parts', 'Mystery Clue 1', 'Masti Nagar'],
    summary: 'The school bell rings at Masti Nagar! Buckoo spots an extraordinary clue, and the English learning adventure starts with bicycles, friends, and morning greetings.',
    keyVocabulary: ['Bicycle (સાઇકલ)', 'Bell (ઘંટડી)', 'Wheels (પૈડાં)', 'Explorers (શોધકો)', 'Good morning (સુપ્રભાત)']
  },
  {
    id: 2,
    batchNum: '02',
    batchName: 'Batch 02',
    pagesRange: 'Pages 05–08',
    pagesCount: 4,
    titleEn: 'Wheels, Games and Mischief',
    titleGu: 'પૈડાં, રમતો અને મસ્તી',
    pdfFile: 'Batch_02_Pages_05-08_Wheels_Games_and_Mischief.pdf',
    pdfSize: '15.8 MB',
    cover: 'assets/pdf_previews/batch_02_cover.jpg',
    pages: [
      'assets/comic_pages/batch_02_page_01.jpg',
      'assets/comic_pages/batch_02_page_02.jpg',
      'assets/comic_pages/batch_02_page_03.jpg',
      'assets/comic_pages/batch_02_page_04.jpg'
    ],
    act: 'act1',
    actLabel: 'Act 1: School & Clues',
    standards: 'Std 1–3',
    tags: ['Playground Games', 'Movement', 'Action Verbs', 'Fun'],
    summary: 'Out on the school grounds! Arkshya and friends hop, race, and roll through playground games while learning action verbs and playful English dialogue.',
    keyVocabulary: ['Run (દોડવું)', 'Jump (કૂદવું)', 'Spin (ગોળ ફરવું)', 'Playground (મેદાન)', 'Together (સાથે)']
  },
  {
    id: 3,
    batchNum: '03',
    batchName: 'Batch 03',
    pagesRange: 'Pages 09–11',
    pagesCount: 3,
    titleEn: 'First, Next, Finally and Action Parade',
    titleGu: 'પ્રથમ, પછી, આખરે અને ક્રિયા પરેડ',
    pdfFile: 'Batch_03_Pages_09-11_First_Next_Finally_and_Action_Parade.pdf',
    pdfSize: '11.7 MB',
    cover: 'assets/pdf_previews/batch_03_cover.jpg',
    pages: [
      'assets/comic_pages/batch_03_page_01.jpg',
      'assets/comic_pages/batch_03_page_02.jpg',
      'assets/comic_pages/batch_03_page_03.jpg'
    ],
    act: 'act1',
    actLabel: 'Act 1: School & Clues',
    standards: 'Std 2–4',
    tags: ['Story Sequencing', 'Action Parade', 'Time Words', 'Grammar'],
    summary: 'Master the art of storytelling sequence! Children learn how to describe their routines step-by-step using First, Next, Then, and Finally.',
    keyVocabulary: ['First (પહેલાં)', 'Next (પછી)', 'Finally (આખરે)', 'March (કૂચ કરવી)', 'Listen (સાંભળવું)']
  },
  {
    id: 4,
    batchNum: '04',
    batchName: 'Batch 04',
    pagesRange: 'Pages 12–16',
    pagesCount: 5,
    titleEn: 'Discovery Train and CH Clue',
    titleGu: 'શોધ યાત્રા ટ્રેન અને "CH" સંકેત',
    pdfFile: 'Batch_04_Pages_12-16_Discovery_Train_and_CH_Clue.pdf',
    pdfSize: '19.0 MB',
    cover: 'assets/pdf_previews/batch_04_cover.jpg',
    pages: [
      'assets/comic_pages/batch_04_page_01.jpg',
      'assets/comic_pages/batch_04_page_02.jpg',
      'assets/comic_pages/batch_04_page_03.jpg',
      'assets/comic_pages/batch_04_page_04.jpg',
      'assets/comic_pages/batch_04_page_05.jpg'
    ],
    act: 'act1',
    actLabel: 'Act 1: School & Clues',
    standards: 'Std 2–5',
    tags: ['Phonics "CH"', 'Train Adventure', 'Sound Words', 'Teamwork'],
    summary: 'Choo-choo! The Discovery Train rolls through the school as students unlock phonics patterns for the "CH" sound (Chalk, Chair, Cheer, Child).',
    keyVocabulary: ['Train (ટ્રેન)', 'Cheer (ઉત્સાહ વધારવો)', 'Chalk (ચોક)', 'Track (પાટો)', 'Whistle (સીટી)']
  },
  {
    id: 5,
    batchNum: '05',
    batchName: 'Batch 05',
    pagesRange: 'Pages 17–19',
    pagesCount: 3,
    titleEn: 'Our Town and Its Helpers',
    titleGu: 'આપણું નગર અને મદદગારો',
    pdfFile: 'Batch_05_Pages_17-19_Our_Town_and_Its_Helpers.pdf',
    pdfSize: '11.8 MB',
    cover: 'assets/pdf_previews/batch_05_cover.jpg',
    pages: [
      'assets/comic_pages/batch_05_page_01.jpg',
      'assets/comic_pages/batch_05_page_02.jpg',
      'assets/comic_pages/batch_05_page_03.jpg'
    ],
    act: 'act2',
    actLabel: 'Act 2: Town & Nature',
    standards: 'Std 2–5',
    tags: ['Community Helpers', 'Occupations', 'Gratitude', 'Social Studies'],
    summary: 'Stepping into Masti Nagar town! Children meet doctors, postmen, sanitation workers, and teachers, learning how to show respect and thank community helpers.',
    keyVocabulary: ['Doctor (ડૉક્ટર)', 'Teacher (શિક્ષક)', 'Police (પોલીસ)', 'Helper (મદદગાર)', 'Thank you (આભાર)']
  },
  {
    id: 6,
    batchNum: '06',
    batchName: 'Batch 06',
    pagesRange: 'Pages 20–24',
    pagesCount: 5,
    titleEn: 'Birdsong and Crow Colours',
    titleGu: 'પંખીઓનો કલરવ અને કાગડાના રંગો',
    pdfFile: 'Batch_06_Pages_20-24_Birdsong_and_Crow_Colours.pdf',
    pdfSize: '19.5 MB',
    cover: 'assets/pdf_previews/batch_06_cover.jpg',
    pages: [
      'assets/comic_pages/batch_06_page_01.jpg',
      'assets/comic_pages/batch_06_page_02.jpg',
      'assets/comic_pages/batch_06_page_03.jpg',
      'assets/comic_pages/batch_06_page_04.jpg',
      'assets/comic_pages/batch_06_page_05.jpg'
    ],
    act: 'act2',
    actLabel: 'Act 2: Town & Nature',
    standards: 'Std 1–4',
    tags: ['Bird Names', 'Vibrant Colors', 'Listening Skills', 'Nature'],
    summary: 'A symphony of nature! Arkshya and Buckoo listen to melodious birdsong, discover peacock green, parrot red, and solve an intriguing crow riddle.',
    keyVocabulary: ['Feathers (પીંછા)', 'Chirp (ચીં-ચીં કરવું)', 'Crow (કાગડો)', 'Wings (પાંખો)', 'Sky (આકાશ)']
  },
  {
    id: 7,
    batchNum: '07',
    batchName: 'Batch 07',
    pagesRange: 'Pages 25–28',
    pagesCount: 4,
    titleEn: 'Clever Monkey and Wrapper Mystery',
    titleGu: 'ચતુર વાંદરો અને કચરાનું રહસ્ય',
    pdfFile: 'Batch_07_Pages_25-28_Clever_Monkey_and_Wrapper_Mystery.pdf',
    pdfSize: '15.4 MB',
    cover: 'assets/pdf_previews/batch_07_cover.jpg',
    pages: [
      'assets/comic_pages/batch_07_page_01.jpg',
      'assets/comic_pages/batch_07_page_02.jpg',
      'assets/comic_pages/batch_07_page_03.jpg',
      'assets/comic_pages/batch_07_page_04.jpg'
    ],
    act: 'act2',
    actLabel: 'Act 2: Town & Nature',
    standards: 'Std 2–5',
    tags: ['Cleanliness', 'Prepositions', 'Animal Fun', 'Environment'],
    summary: 'A naughty monkey drops candy wrappers! The discovery squad learns prepositions (in, on, under, behind) while cleaning up and restoring nature.',
    keyVocabulary: ['Dustbin (કચરાપેટી)', 'Under (નીચે)', 'Behind (પાછળ)', 'Monkey (વાંદરો)', 'Clean (સ્વચ્છ)']
  },
  {
    id: 8,
    batchNum: '08',
    batchName: 'Batch 08',
    pagesRange: 'Pages 29–31',
    pagesCount: 3,
    titleEn: 'The Clue We Could Hear',
    titleGu: 'સંભળાયો તે રહસ્યમય સંકેત',
    pdfFile: 'Batch_08_Pages_29-31_The_Clue_We_Could_Hear.pdf',
    pdfSize: '11.2 MB',
    cover: 'assets/pdf_previews/batch_08_cover.jpg',
    pages: [
      'assets/comic_pages/batch_08_page_01.jpg',
      'assets/comic_pages/batch_08_page_02.jpg',
      'assets/comic_pages/batch_08_page_03.jpg'
    ],
    act: 'act2',
    actLabel: 'Act 2: Town & Nature',
    standards: 'Std 2–5',
    tags: ['Sensory Words', 'Sound Effects', 'Curiosity', 'Listening'],
    summary: 'Close your eyes and listen! Exploring onomatopoeia and sound descriptors — rustling leaves, gentle ripples, ringing bells, and murmuring streams.',
    keyVocabulary: ['Whisper (ધીમેથી બોલવું)', 'Echo (પડઘો)', 'Loud (મોટેથી)', 'Quiet (શાંત)', 'Hear (સાંભળવું)']
  },
  {
    id: 9,
    batchNum: '09',
    batchName: 'Batch 09',
    pagesRange: 'Pages 32–35',
    pagesCount: 4,
    titleEn: 'Fly Journey and Names We Respect',
    titleGu: 'ઉડાન યાત્રા અને આદરણીય નામો',
    pdfFile: 'Batch_09_Pages_32-35_Fly_Journey_and_Names_We_Respect.pdf',
    pdfSize: '14.9 MB',
    cover: 'assets/pdf_previews/batch_09_cover.jpg',
    pages: [
      'assets/comic_pages/batch_09_page_01.jpg',
      'assets/comic_pages/batch_09_page_02.jpg',
      'assets/comic_pages/batch_09_page_03.jpg',
      'assets/comic_pages/batch_09_page_04.jpg'
    ],
    act: 'act2',
    actLabel: 'Act 2: Town & Nature',
    standards: 'Std 3–5',
    tags: ['Polite Manners', 'Respectful Greetings', 'Directions', 'Values'],
    summary: 'Taking flight over town landmarks! Children practice speaking with politeness and respect: "Excuse me", "May I", and honoring elders in fluent English.',
    keyVocabulary: ['Respect (આદર)', 'Pardon (ક્ષમા)', 'Please (કૃપા કરીને)', 'Welcome (સ્વાગત)', 'Elder (વડીલ)']
  },
  {
    id: 10,
    batchNum: '10',
    batchName: 'Batch 10',
    pagesRange: 'Pages 36–39',
    pagesCount: 4,
    titleEn: 'Clouds, Drops and Water Words',
    titleGu: 'વાદળો, ટીપાં અને જળના શબ્દો',
    pdfFile: 'Batch_10_Pages_36-39_Clouds_Drops_and_Water_Words.pdf',
    pdfSize: '14.8 MB',
    cover: 'assets/pdf_previews/batch_10_cover.jpg',
    pages: [
      'assets/comic_pages/batch_10_page_01.jpg',
      'assets/comic_pages/batch_10_page_02.jpg',
      'assets/comic_pages/batch_10_page_03.jpg',
      'assets/comic_pages/batch_10_page_04.jpg'
    ],
    act: 'act3',
    actLabel: 'Act 3: Discovery & Finale',
    standards: 'Std 2–5',
    tags: ['Weather Words', 'Water Cycle', 'Rain Songs', 'Nature'],
    summary: 'The monsoon sky darkens with silver clouds! Learning rain vocabulary, puddle splashing, water cycles, and Gujarati-English poetic expressions.',
    keyVocabulary: ['Cloud (વાદળ)', 'Raindrop (વરસાદનું ટીપું)', 'Thunder (ગડગડાટ)', 'Puddle (ખાબોચિયું)', 'Flow (વહેવું)']
  },
  {
    id: 11,
    batchNum: '11',
    batchName: 'Batch 11',
    pagesRange: 'Pages 40–43',
    pagesCount: 4,
    titleEn: 'One Country, Many Helping Hands',
    titleGu: 'એક દેશ, અનેક મદદગાર હાથ',
    pdfFile: 'Batch_11_Pages_40-43_One_Country_Many_Helping_Hands.pdf',
    pdfSize: '15.3 MB',
    cover: 'assets/pdf_previews/batch_11_cover.jpg',
    pages: [
      'assets/comic_pages/batch_11_page_01.jpg',
      'assets/comic_pages/batch_11_page_02.jpg',
      'assets/comic_pages/batch_11_page_03.jpg',
      'assets/comic_pages/batch_11_page_04.jpg'
    ],
    act: 'act3',
    actLabel: 'Act 3: Discovery & Finale',
    standards: 'Std 3–5',
    tags: ['Unity in Diversity', 'Patriotism', 'Helping Hands', 'Team Spirit'],
    summary: 'Celebrating the beauty of India\'s rich cultures and languages! Teamwork, helping hands, and unity come alive through engaging dialogues.',
    keyVocabulary: ['Country (દેશ)', 'Nation (રાષ્ટ્ર)', 'Together (એકસાથે)', 'Help (મદદ)', 'Friendship (મિત્રતા)']
  },
  {
    id: 12,
    batchNum: '12',
    batchName: 'Batch 12',
    pagesRange: 'Pages 44–47',
    pagesCount: 4,
    titleEn: 'The Last Clue and Curtain',
    titleGu: 'આખરી સંકેત અને રહસ્યનો પર્દો',
    pdfFile: 'Batch_12_Pages_44-47_The_Last_Clue_and_Curtain.pdf',
    pdfSize: '15.5 MB',
    cover: 'assets/pdf_previews/batch_12_cover.jpg',
    pages: [
      'assets/comic_pages/batch_12_page_01.jpg',
      'assets/comic_pages/batch_12_page_02.jpg',
      'assets/comic_pages/batch_12_page_03.jpg',
      'assets/comic_pages/batch_12_page_04.jpg'
    ],
    act: 'act3',
    actLabel: 'Act 3: Discovery & Finale',
    standards: 'Std 3–5',
    tags: ['Mystery Climax', 'Stage Curtain', 'Celebration', 'Confidence'],
    summary: 'All clues connect! The discovery team gathers on the stage of Masti Nagar School to open the mysterious glowing chest.',
    keyVocabulary: ['Curtain (પર્દો)', 'Treasure (ખજાનો)', 'Solve (ઉકેલવું)', 'Stage (મંચ)', 'Bravo (શાબાશ)']
  },
  {
    id: 13,
    batchNum: '13',
    batchName: 'Batch 13',
    pagesRange: 'Pages 48–50',
    pagesCount: 3,
    titleEn: 'Every Word Opens a World',
    titleGu: 'દરેક શબ્દ ખોલે છે એક નવી દુનિયા',
    pdfFile: 'Batch_13_Pages_48-50_Every_Word_Opens_a_World.pdf',
    pdfSize: '11.5 MB',
    cover: 'assets/pdf_previews/batch_13_cover.jpg',
    pages: [
      'assets/comic_pages/batch_13_page_01.jpg',
      'assets/comic_pages/batch_13_page_02.jpg',
      'assets/comic_pages/batch_13_page_03.jpg'
    ],
    act: 'act3',
    actLabel: 'Act 3: Discovery & Finale',
    standards: 'Std 1–5',
    tags: ['Grand Finale', 'Inspiration', 'Speak English', 'Arkshya Promise'],
    summary: 'The grand conclusion! "ગુજરાતીમાં સમજીએ, અંગ્રેજીમાં બોલીએ!" — empowering children to speak English without fear, full of joy and pride.',
    keyVocabulary: ['World (દુનિયા)', 'Speak (બોલવું)', 'Proud (ગર્વ)', 'Dream (સ્વપ્ન)', 'Learn (શીખવું)']
  }
];

if (typeof window !== 'undefined') {
  window.COMIC_BATCHES = COMIC_BATCHES;
}
