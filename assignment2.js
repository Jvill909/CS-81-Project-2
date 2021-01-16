function convert(toCelcius, fro, to)
	{
	let range = " ";
	var sub;
  
	if (toCelcius == 0)
  	{
		for( i = fro; i <= to; i++)
		{
		  if(i % 2 == 0)
	  	  {
		  	sub = (i - 32) * (5/9); 
		  	range += i + "F " + "= " + sub.toFixed(2) + "C,  ";
	  		console.log(range);
	  	  }
	  	 }
	}
  	else
  	{
		for( i = fro; i <= to; i++)
		{
      		  if(i % 2 == 0)
      		  {
		    sub = i * (9/5) + 32;
	  	    range += i + "C " + "= " + sub.toFixed(2) + "F,  ";
	  	    console.log(range);
      		  }
		}
	}
	show(range);
	return range;
}