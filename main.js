var names=["B.Prathiba","K.Samidurai","S.Sri janani","S.Sri krishnan"];
var image=["mom.jpg","dad.jpg","sis.jpg","me.jpg"] 
var position=["Mother","Father","Sister","Me"];
 var i=0;
function update()
{
  i++;
  var z=4
  if(i>z)
  {
      i = 0;
  }
  var updated_position = position[i];
  var updated_name = names[i];
  var ui=image[i];
  

  document.getElementById("position").innerHTML=updated_position;
  document.getElementById("name").innerHTML=updated_name;
  document.getElementById("Im_fam").src=ui=image;
}