module.exports = function solveEquation(equation) {
  
  var y,discr,x1,x2,arr=[],a,b,c;
  
	y = equation.split(" ");
	
	 a = y[0]; 
	 b = y[3]+y[4];
	 c = y[7]+y[8];
	discr = (b*b) - (4*a*c);
	
	x1 = ((-b) + (Math.sqrt(discr)))/(2*a);
	x2 = ((-b) - (Math.sqrt(discr)))/(2*a);
	var roundX1 = Math.round(x1);
	var roundX2 = Math.round(x2);
	
	arr.push(roundX1);
	arr.push(roundX2);
	
	arr.sort(function(a,b) {return a-b});
	return arr

}
