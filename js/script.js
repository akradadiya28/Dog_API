let itemList = document.getElementById("itemList");

const breedList = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(list => {
            console.log("response", list);
            const data = () => {
                let listMsg = list.message;

                for (const key in listMsg) {
                    console.log(key);
                    if (listMsg[key].length === 0) {
                        // console.log(key);
                        itemList.innerHTML += `<li class="item-list">
                                    <a href="#" class="act">
                                        <span>${[key]}</span>
                                    </a>
                            </li>`;
                    } else {
                        let subList = `<ul class="dropdown-menu">`;
                        listMsg[key].forEach(sub => {
                            subList += `<li>
                                    <a href="javascript:void(0)" class="">
                                        <span>${sub}</span>
                                    </a>
                                </li>`
                        });
                        subList += `</ul>`;
                        itemList.innerHTML += `<li class="item-list"><a href="javascript:void(0)" class="dropdown pos-relative act">${key}</a> ${subList}</li>`
                    }
                }
            };
            data();
        })
        .catch((err) => {
            console.log("Error 404", err);
        });
};

// Call the function to fetch and display the list
breedList()
