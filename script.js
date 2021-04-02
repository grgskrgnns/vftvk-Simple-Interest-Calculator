function compute()
{
    p = document.getElementById("principal").value;
	
	if ((p === '') || (p <= 0)) {
      alert('Please enter a positive number');
	  document.getElementById("principal").focus();
	} else {

		r = document.getElementById("rate").value;
		
		y = document.getElementById("years").value;
		
		res = p*r*y/100.0;
		
		n = Number(new Date().getFullYear()) + Number(y);
		
		
		
		document.getElementById('mypara').innerHTML = 'if you deposit <mark>' +p+ '</mark></br>at an interest rate of <mark>'+r
		+' %</mark></br>You will receive an amount of <mark>'+res+'</mark>,</br>in the year <mark>'+n+'</mark>';
	}
    
}
        
