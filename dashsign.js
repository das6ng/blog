function dashSign(ctx,centerX,centerY,radius){
	ctx.lineWidth =2;
	ctx.transform(1,0,-0.4,1,0,0);
	
	var thita = (3/7.0)*Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX-radius*Math.cos(thita), centerY+radius*Math.sin(thita));
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX-radius, centerY);
    ctx.stroke();

    ctx.beginPath();
    //ctx.arc(centerX, centerY-(radius/2), (radius/2), 0.5*Math.PI,1.5*Math.PI);
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX+(radius/2)*Math.cos(thita), centerY-(radius/2)*Math.sin(thita), (radius/2), Math.PI-thita,2*Math.PI-thita);
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX-(radius/2)*Math.cos(thita), centerY+(radius/2)*Math.sin(thita), (radius/2), 2*Math.PI-thita,Math.PI-thita);
    ctx.stroke();
}