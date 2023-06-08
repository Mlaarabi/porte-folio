const Skill = ({skillName, progress }) => {
     
 
    return <div className="mb-3">
    <div className='flex justify-between mb-4'>
      <h3 className='text-xs font-medium '> { skillName} </h3>
      <span > {progress}% </span>
    </div>
    <div className='h-[5px] rounded bg-green-200 '>
      <span
       className='h-[5px] rounded block bg-green-500 ' style={{ width: `${progress}%` }} >
          
      </span>
    </div>
</div>
}

export default Skill 