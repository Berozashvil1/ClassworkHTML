export async function getPost(url){
    let data=await fetch(url);
    let result=await data.json();
    return result;
}


export async function createPost(url){
    fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}