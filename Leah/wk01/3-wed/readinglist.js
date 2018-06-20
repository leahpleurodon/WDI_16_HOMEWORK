console.log("---reading list---");
var readingList = [
  {title:"The Hobbit" , author:"J.R.R. Tolkien" , alreadyRead: false},
  {title:"The Dictionary" , author:"Webster's", alreadyRead: false },
  {title:"The Davinci Code" , author:"Dan Brown" , alreadyRead: true },
  {title:"Pride and Prejudice" , author:"Jane Austen", alreadyRead:true },
  {title:"Song of Ice and Fire" , author:"George Martin" , alreadyRead: false}
];
//variable for future use, for easier reading
var currentBook;
for(var i = 0; i < readingList.length; i++){
  currentBook = readingList[i]
  if(currentBook.alreadyRead){
    console.log('You have already read "' + currentBook.title + '" by ' + currentBook.author );
  }else{
    console.log('You still need to read "' + currentBook.title + '" by ' + currentBook.author );
  }
};
