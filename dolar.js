fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function passing the url of the API as a parameter
  .then((resp) => resp.json())
  .then(function (resp) {
    // Your code for handling the data you get from the API
    let contenido = "<ul>";
    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i].title);

      contenido += "<li class='card'> Titulo: " + resp[i].title + "</li>";

      //mete en consola el string resp.title
    }
    contenido += "</ul>";
    let nodo = document.getElementById("container");
    nodo.innerHTML = contenido;
  });
