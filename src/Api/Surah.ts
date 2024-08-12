let surah = async()=>{
    try{
        const data=  await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default surah