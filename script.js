let data = [];
function renderItems(collection) {
    console.log("portfolio", collection);
    // data = collection
    // collection.forEach(function(item) {

    // });

collection.forEach(function(item) {

        let listItem
        if (item.url){
            listItem = document.createElement('a');
            listItem.href = item.url;
            listItem.setAttribute('target', '_blank');
        } else {
            listItem = document.createElement('div');
        }
        // listItem = document.createElement(item.url ? 'a' : 'div')
        // listItem = document.createElement('a');
        listItem.classList.add("portfolio");
        


        const name = document.createElement('h3');
        name.innerHTML = item.Name;
        listItem.appendChild(name);

        const itemDetails = `
            <img src="${item.image}"/>
            <p>Date: ${item.Date}</p>
            <p>Made: ${item.Made}</p>
        `;
        listItem.insertAdjacentHTML('beforeend', itemDetails);
  
        if (item.Name == "Brooklyn 99") {
            listItem.classList.add('brooklyn99');
        }

        if (item.Name == "Three Days Left to Live") {
            listItem.classList.add('tdltl');
        }

        if (item.Name == "Baby Driver") {
            listItem.classList.add('babydriver');
        }

        if (item.Name == "Villains") {
            listItem.classList.add('villains');
        }

        if (item.Name == "Story of Nessie") {
            listItem.classList.add('nessie');
        }

        if (item.Name == "Collection of Classic Books") {
            listItem.classList.add('collection');
        }

        if (item.Name == "NYC Pools") {
            listItem.classList.add('pools');
        }

        listItem.dataset.Made = item.Made;

        var collectionList = document.querySelector('.collection');
        collectionList.appendChild(listItem);
    }) 
    };

    // let filterBtns = document.querySelectorAll(".btn-filter").forEach((btn) => {
    //   btn.addEventListener("click", function (event) {
    //     console.log("weeeeee", event.target.id);

    //     let listofData = document.querySelectorAll(".portfolio");
        
    //     listofData.forEach(function searchDataFilter(item) {
    //       if (item.dataset.Made.includes(event.target.dataset.Made)) {
    //         item.classList.remove('hidden')
    //         console.log(item);
    //       } else {
    //         item.classList.add('hidden')
    //       }
    //     })
    //   })
    // })



fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(collection) {
        renderItems(collection.reverse());
    });
