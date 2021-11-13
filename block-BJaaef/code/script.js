let ul = document.querySelector('ul')
let allPeople =got.houses.map((a)=> a.people.map((a) => a)).flat()
allPeople.forEach(people => {
    let li = document.createElement('li');
    let div= document.createElement('div')
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let btn = document.createElement('a');
    
    img.src = people.image;
    h2.innerText = people.name;
    div.append(img,h2);
    p.innerText = people.description;
    btn.innerText = 'Learn More!'

li.append(div,p,btn)
ul.append(li)

})