export interface Zekr {
    category: string;
    count: string;
    description: string;
    reference: string;
    content: string;
  }
  


 export  interface TimeSince {
    years: number;
    months: number;
    days: number;
  }
 export interface SalahTime {
    [key: string]: string;
  }





 export interface Surah {
    name: string;
    name_translations: {
      ar: string;
      en: string;
      id: string;
    };
    number_of_ayah: number;
    number_of_surah: number;
    place: string;
    recitations: [{
      name:string;
      audio_url:string
    }];
    type: string;
    verses:[{
      number:number;
      text:string;
      translation_en:string;
      translation_id:string
    }]
  }
  
  export interface Iparams{
    params:{
    id:number;
    }
  }
 