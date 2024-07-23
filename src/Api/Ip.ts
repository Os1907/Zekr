let IP = async()=>{
    try{
        const data=  await fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_API_KEY}`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default IP