import React, { useEffect, useState } from 'react'

const First = () => {
    const [data,setdata] = useState([])
    const[search,setsearch] = useState("")
    const [loading,setloading] = useState(false)


    useEffect(()=>{


        fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`).then((res)=>res.json())
        .then((res1)=>console.log(res1))
        .then((response)=>setdata(response))

    },[])
  return (
    <div>

        <input type="text" placeholder='search by name or email'
        value={search}
        onChange={(e)=>{
            setsearch(e.target.value)
        }}
        autoComplete="off"
         />

         <table>
             <thead>
                 <tr>
                     <th>
                         {" "}

                         <input type="checkbox"
                         aria-label='check box following the text input'
                          />
                          
                             
                          
                     </th>
                     <th scope='col'>Name</th>
                     <th scope='col'>Email</th>
                     <th scope='col'>Role</th>
                    <th scope='col'>Action</th>
                 </tr>
             </thead>
             <tbody>
                 {loading ? (
                     <h1>Loading...</h1>
                 ):
                 (
                     data.filter((val)=>{
                         if(search === ""){
                             return val;
                         }
                         else if(
                             val.name.toLowerCase().includes(search.toLowerCase())
                         ){
                             return val.name;

                         }
                         else if(val.email.toLowerCase().includes(search.toLocaleLowerCase())){
                             return val.email
                         }
                         else if(val.role.toLocaleLowerCase().includes(search.toLowerCase())){
                             return val.role
                         }
                     }).slice(PageVisited,PageVisited+usersPerPage)
                     .map((e,i)=>{
                         return (
                             <tr key = {i}>
                                <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </td>
                             </tr>
                         )
                     })
                 )}
             </tbody>
         </table>
        

    </div>
  )
}

export default First