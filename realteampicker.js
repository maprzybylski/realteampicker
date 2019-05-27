var x=0;
var array=new Array();
var rand=0;
var howManyTeams;
var array2=new Array();

function add_el_to_arr()
{
    array[x]=document.getElementById("text1").value;
    x++;
    document.getElementById("text1").value="";
}

function create_teams()
{
    howManyTeams=document.getElementById("text2").value;
    if(howManyTeams>4){
        alert('Max 4 teams support :(');
        window.location.reload(true);
    }
    else {
var res=array.length%howManyTeams;
if(res!=0){
array.push("dodatkowy");
}
for(var z=0;z<howManyTeams;z++)
{
    array2[z]=new Array();
}
var c=0;
for(var y=((array.length)/howManyTeams);y!=0;y--)
{
    for(var z=0;z<howManyTeams;z++)
    {
        rand= Math.floor((Math.random()*(array.length-1)));            
        array2[z][c]=array[rand];
        array.splice(rand,1);
    }
    c++;
}
display_arr();
}
}

function display_arr()
{
    var e="";
    for(var y=0;y<array2.length;y++)
    {
        e+="Team "+(y+1)+"<br/>"+"----------"+"<br/>";
        for(var z=0;z<array2[y].length;z++)
        {
            e+=array2[y][z]+"<br/>";
        }
        e+="----------"+"<br/>";
    }
    document.getElementById("Result").innerHTML=e;
}