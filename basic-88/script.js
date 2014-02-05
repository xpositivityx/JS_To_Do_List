document.getElementById("myBtn").onclick=function(){adder()};

function adder()
{
    var id1 = makeid();
    var id2 = makeid();
    var id3 = makeid();

    var getIt = document.getElementById('txtFld').value;
    
    var para=document.createElement("p");
        para.setAttribute('id', id2);
        para.setAttribute('class','paragraph');
    
    var node=document.createTextNode(getIt);
        para.appendChild(node);
    
    var check=document.createElement('input');
        check.setAttribute('type','checkbox');
        check.setAttribute('id',id1);
        check.setAttribute('class','checker');
        check.onclick = function(){killer(id1,id2,id3)};
        
    var br = document.createElement('br');
        br.setAttribute('class','paragraph');
        br.setAttribute('id',id3);
    var element=document.getElementById("div1");
        element.appendChild(check);
        element.appendChild(para);
        element.appendChild(br);        
    
document.getElementById('txtFld').value = ' ';
    
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function killer(id1,id2,id3) {
    var all = [id1,id2,id3];
    for(i=0;i<all.length;i++)
    {
    var fst = document.getElementById(all[i])
    fst.parentNode.removeChild(fst);
    };
};