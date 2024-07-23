// https://api.aladhan.com/v1/timingsByCity/23-07-2024?city=Shubra%20al%20Khayma&country=egy



let slaah = async( date:string ,city:string , country:string )=>{
    try{
        const data=  await fetch(`https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}`)
       const finalResponse = await data.json();
        return finalResponse 
    }catch(err){
        return null
    }
}

export default slaah