 let Azkar = async()=>{
    try{
        const data=  await fetch(`https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default Azkar


