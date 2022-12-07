var a=JSON.parse(localStorage.getItem('bookListL'));
var al=0;
var te=0;
if(!a){
var bookList=[];    //change done
}else{
  var bookList=JSON.parse(localStorage.getItem('bookListL'));
  viewData();
}
document.getElementById("add1").addEventListener("click",function(){
  // localStorage.clear();
  if(al===1){
bookList[te].title=document.getElementById("titleh").value;
bookList[te].author=document.getElementById("authorh").value;
bookList[te].isbn=document.getElementById("isbnh").value;
   al=0;
 }else{
   let a12=document.getElementById("titleh").value;
   let a34=document.getElementById("authorh").value;
   let a56=document.getElementById("isbnh").value;
   bookList.push({
     title:a12,author:a34,isbn:a56
   });
 }
  saveData();
  viewData();
});
function saveData(){
  localStorage.clear();
  // title
        localStorage.setItem('bookListL',JSON.stringify(bookList));
}
// for view
function viewData() {
  var show1="";
  document.getElementById("viewSection").innerHTML=show1;
  show1="<table><tr><th>S.No</th><th>Book Name</th><th>Author</th><th>ISBN</th><th>Delete</th><th>Edit</th></tr>";
  bookList.forEach(function(data1,index){
    show1+="<tr>"+"<td>"+(index+1)+"</td>"+"<td>"+data1.title+"</td><td>"+data1.author+"</td><td>"+data1.isbn+"</td>"+"<td><span class='del1' onclick='deleteData("+index+")'>delete</span></td>"+"<td><span class='del1' onclick='editData("+index+")'>edit</span></td>"+"</tr>";
  });
  show1+="</table>";
  console.log(show1);
  document.getElementById("viewSection").innerHTML=show1;
  // console.log(title1);
  // console.log(author1);
  // console.log(isbn1);
}
function deleteData(del){
  bookList.splice(del,1);
  saveData();
  viewData();
}
function editData(edi){
  document.getElementById("titleh").value=bookList[edi].title;
 document.getElementById("authorh").value=bookList[edi].author;
 document.getElementById("isbnh").value=bookList[edi].isbn;
  al=1;
  te=edi;
 saveData();
 viewData();
}
// document.getElementById("add1").addEventListener("click",function(){
//   localStorage.clear();
// });
