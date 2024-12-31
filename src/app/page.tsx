
import IdCard from '../components/card'

const data = [ 
  { 
    id: 1,
    name: 'Shayan',
    age: 14,
    rollNumber: 'A12345',
    className: 'Class 9',
  },
  { 
    id: 2,
    name: 'Shahmeer',
    age: 16,
    rollNumber: 'B67890',
    className: 'Class 11',
  },
  { 
    id: 3,
    name: 'Tayyaba',
    age: 15,
    rollNumber: 'C11223',
    className: 'Class 10',
  },
]
export default function Home(){
  return(
    <div>
    <div className="flex bg-center justify-center ">
      <div className="bg-blue-950">
      
        
      {data.map((student) => (
        <IdCard
          key={student.id}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          className={student.className}
        />
      ))}
    </div>
      </div>
    </div>
  )
}