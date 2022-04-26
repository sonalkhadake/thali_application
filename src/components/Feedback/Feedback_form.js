import  { useForm } from 'react-hook-form'

function Feedback_form() {
    const { register, 
    handleSubmit,
     formState: { errors } ,
     reset  } = useForm()
    // const formRef= useRef()
    const submit=(data)=>{
        (JSON.stringify(data))
        console.log(data)
        alert(JSON.stringify(data))
        // formRef.current.reset()
        reset();

    }
    
  return (<>
    <div className='container'>
        <form   onSubmit={handleSubmit(submit)}>
            <h2>Submit Comment</h2>
            <div className='textfield'>
                <label>Rating</label>
                <br></br>
                <select className='Rating'{...register('Rating', { required: {value: true, message: ' Rating is required' }})}>
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                {errors.Rating && (<p className='para'>{errors.Rating.message}</p>)}
                {/* <input type="number" {...register('Rating', { required: { value: true, message: 'Enter a Rating'} })} placeholder='Enter your Rating' />
                {errors.Rating && (<div><p className='para'>Enter rating in between 1 to 5</p></div>)} */}
            </div>
            <div className='textfield'>
                <label>Your Name</label>
                <br></br>
                <input type="text" {...register('Name', { required: { value: true, message: 'Enter your Name'}, 
                minLength: { value: 2, message: 'Length of character should be greater than 2'} })} placeholder='Enter your name'/>
                {errors.Name && (<p className='para'>{errors.Name.message}</p>)}
            </div>
            

            <div className='textfield'>
                <label>Comment:</label>
                <br></br>
                <textarea type="text" {...register('comment', { required: { value: true, message: 'Enter your comment'}, 
                minLength: { value: 10, message: 'Length of character should be greater than 10'} })} placeholder='Enter your comment' />
                 {errors.comment && (<p className='para'> {errors.comment.message}</p>)}
            </div>
            <div >
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>

    </div>
  </>)
}

export default Feedback_form