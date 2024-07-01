interface TimeSince {
    years: number;
    months: number;
    days: number;
  }
export default function timeSince(startDate: Date): TimeSince {
    const now = new Date();
    const start = new Date(startDate);
    const diffTime = Math.abs(now.getTime() - start.getTime());
  
    const diffYears = now.getFullYear() - start.getFullYear();
    const diffMonths = now.getMonth() - start.getMonth();
    const diffDays = now.getDate() - start.getDate();
  
    let years = diffYears;
    let months = diffMonths;
    let days = diffDays;
  
    // Adjust months and years if necessary
    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // get days in previous month
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    return { years,  months,  days,}
    
  }
  

  