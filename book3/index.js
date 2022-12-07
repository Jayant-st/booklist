function checkuspas()
{
  let usname =document.getElementById("userName").value;
  let pas=document.getElementById("pass").value;
  if(usname=="Admin" && pas=="1234567"){
    window.location="editlist.html";
  }else{
    alert("please enter valid user name and password");
    document.getElementById("userName").focus();
    document.getElementById("userName").value="";
    document.getElementById("pass").value="";
  }
}
function onlyView()
{
  document.getElementById("logIn").style.display="none";
  var a=JSON.parse(localStorage.getItem('bookListL'));
  if(!a){
    document.getElementById("onlyV").innerHTML="<h3>No data</h3>";
  }else{
    var bookList=JSON.parse(localStorage.getItem('bookListL'));
    var show1="";
    document.getElementById("onlyV").innerHTML=show1;
    show1="<h2>BOOK LIST</h2><table><tr><th>S.No</th><th>Book Name</th><th>Author</th><th>ISBN</th></tr>";
    bookList.forEach(function(data1,index){
      show1+="<tr>"+"<td>"+(index+1)+"</td>"+"<td>"+data1.title+"</td><td>"+data1.author+"</td><td>"+data1.isbn+"</td></tr>";
    });
    show1+="</table>";
    console.log(show1);
    document.getElementById("onlyV").innerHTML=show1;
  }
}
