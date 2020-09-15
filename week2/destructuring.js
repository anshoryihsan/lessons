// import View from './dataDiri/components/View';

// const DataDiri = ()=> {
//     const student = {
//         firstName: 'Tova',
//         lastName: 'Maulana Irvan',
//         nomor: 5
//     }
//     return(
//         <View 
//             student={student}
//         />
//     )
// }

//Destructuring Object
const student = {
    firstName: 'Tova',
    lastName: 'Maulana Irvan',
    nomor: 5,
    // skills: {
    //     title: 'apa',
    //     description: 'apa',
    //     number: 'apa',
    // }
    skills: [
        {title: 'apa', rate: 50},
        {title: 'aja', rate: 20},
        {title: 'ada', rate: 57},
        {title: 'asa', rate: 89},
    ]
}

const skills = student.skills.map((item, index) =>{
    console.log(item.title)
})
var {
    skills: { title, description },


} = student


// console.log(skills)
// console.log(nomor)


// const DataDiri = (student)=> {
//     const {
//         firstName,
//         lastName,
//         nomor
//     } = student

//     console.log(firstName)
//     console.log(nomor)
// }

// DataDiri(student)
//Destructuring Object End


//Destructuring Array

// const rgb = [255, 279, 50, 50, 60]

//tanpa Destructuring Array
// console.log(rgb[1])

// const [red, green, blue, , abu] = rgb

// console.log(red)

//End