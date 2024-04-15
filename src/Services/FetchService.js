import { useState, useEffect } from "react";
const API = "https://openlibrary.org";
  export const FetchService={
  //Retreive a book by Author
  // const byAuthor = async (Authorname = '9780140328721') => {
  //   //  const href=`https://openlibrary.org/search/authors.json?q=${author.key}}`
  //   // const response = await fetch(`${API}/search/authors.json?q=${Authorname}.json`);

  // }
  //Retreive a book by isbn
  // const byISBN = async (isbn = '9780140328721') => {
  //   //"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data";
  //   const URL = `${API}/isbn/${isbn}.json`;
  //   fetchdata(URL);
  // }
  //Retreive a book by title
  async bytitle(title = 'lord of the rigns',setData){

    await  fetch( `${API}/search.json?q=${title}`)
    .then(res=>res.json())
    .then(data=> setData(data.docs))

  },
    // //Retreive an array of books by subject
  async bysubject(subject = 'general',setData){

    await  fetch(`${API}/subjects/${subject.toLowerCase()}.json?details=true`)
    .then(res=>res.json())
    .then(data=> setData(data.works))

  },

  
};

