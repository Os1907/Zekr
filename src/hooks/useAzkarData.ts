import Azkar from '@/Api/Azkar';
import Zekr from '@/Types/Azkar';
import { useState, useEffect } from 'react';

export const useAzkarData = (pathName:string) => {
  const [data, setData] = useState<Zekr[]>([]);

  const countiue: Zekr[] = [
    {
      category: 'أذكار الصباح',
      count: '1',
      description: "",
      reference: '',
      content: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ."
    },
    {
      category: 'أذكار الصباح',
      count: '3',
      description: "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين).",
      reference: '',
      content: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"
    },
    {
      category: 'أذكار الصباح',
      count: '3',
      description: "",
      reference: '',
      content: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. "
    },
    {
      category: 'أذكار الصباح',
      count: '3',
      description: "",
      reference: '',
      content: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. "
    },
    {
      category: 'أذكار الصباح',
      count: '1',
      description: "",
      reference: '',
      content: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، ربّ أسألك خير ما في هذا اليوم وخير ما بعده وأعوذ بك من شر ما في هذا اليوم وشر ما بعده ربّ أعوذ بك من الكسل وسوء الكبر، ربّ أعوذ بك من عذاب في النار وعذاب في القبر."
    }
  ];

  async function getData() {
    if(pathName == "Morning"){
    const MorningZekration = await Azkar();
    let Morining = MorningZekration["أذكار الصباح"];
    let MangedData = [...Morining];
    let arranged: any = MangedData.splice(0, 1)[0];
    let FinalArranged: Zekr[] | undefined = [...arranged, ...countiue, ...MangedData];
    setData(FinalArranged);
  }else if (pathName == "Evening") {
    const EveningZekration = await Azkar();
    let Evening = EveningZekration["أذكار المساء"];
    let MangedData = [...Evening];
    setData(MangedData);
  }
  }
  useEffect(() => {
    getData();
  }, []);

  return data;
};
