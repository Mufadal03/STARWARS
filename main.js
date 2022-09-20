let id;
function getData()
{
    let search = document.querySelector("#search").value 
    
    if (search == "") document.querySelector("#result").style.display = "none"
    else document.querySelector("#result").style.display="block"
    let url = `https://swapi.dev/api/people/?search=${search}`
    Fetch(url)
    // console.log(search)
}
async function Fetch(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        display(data.results)
    } catch (err){
        console.log(err)
    }
}
function display(data)
{
    document.querySelector("#result").innerHTML=""
    if (data.length == 0) return false
    data.forEach(element => {
        let div = document.createElement("div")


        let div2 = document.createElement("div")
        div2.className="nameGender"
        let name = document.createElement("span")
        name.innerText = element.name

        name.addEventListener("click", function (element)
        {
            show(name.innerText)
            // console.log(element)
        })
        
        let gender = document.createElement("span")
        gender.innerText = element.gender
        div2.append(name,gender)
        let birth = document.createElement("small")
        birth.innerText = element.birth_year
        
        div.append(div2,birth)
        document.querySelector("#result").append(div)
    });
}

function debounce(func, delay)
{
    if (id)
    {
        clearTimeout(id)
    }
    id = setTimeout(function ()
    {
        func()
    },delay)
}

function show(el)
{
    let url2 = `https://swapi.dev/api/people/?search=${el}`
    // document.querySelector("body").innerHTML=""

    console.log(url2)
}