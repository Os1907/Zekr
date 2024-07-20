let surah = async()=>{
    try{
        const data=  await fetch(`https://api.alquran.cloud/v1/surah`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default surah