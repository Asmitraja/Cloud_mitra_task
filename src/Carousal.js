const data = [ {name : "Raja" , Age : 20 , Rating : 4.0 , key : 1},
                {name : "Rasi" , Age : 25 , Rating : 4.3 , key :2},
                {name : "Rasi" , Age : 28 , Rating : 4.6 , key :2},
                {name : "Abhi" , Age : 21 , Rating : 2.6 , key : 3}
]

const Carousal = ()=>{

    const filterdata = data.filter( person => person.Rating===4)
    console.log(filterdata);
    return(
        <div>
            {filterdata.map((person , index)=>
                <div key={index}>
                    <p>Name : {person.name}</p>
                    <p>Age : {person.Age}</p>
                    <p>Rating : {person.Rating}</p>
                </div>
            )}
        </div>
    )
}

export default Carousal;