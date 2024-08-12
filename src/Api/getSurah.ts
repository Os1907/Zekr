// 
let getSurah = async(number:number)=>{
    try{
        const data=  await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${number}.json`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default getSurah