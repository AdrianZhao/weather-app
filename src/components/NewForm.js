import { useForm } from "react-hook-form";
function NewForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className="new-form center-div" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="name-wrapper">
          <label>Name</label>
          <div>
            <input 
              type='name' 
              {...register('name', { 
                required: { 
                  value: true, 
                  message: "Name is reuqired"
                }
              })} 
            />
          </div>
          <p>{errors.name?.message}</p>
        </div>
        <div className="email-wrapper">
          <label>Email</label>
          <div>
            <input 
              type='email' 
              {...register('email', { 
                pattern: { 
                  value: /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/, 
                  message: "Invalid email format"
                }
              })} 
            />
          </div>
          <p>{errors.email?.message}</p>
        </div>
        <div className="comment-wrapper">
         <label>Comment</label>
          <div>
            <textarea 
              {...register('comment', { 
                pattern: { 
                  value: true, 
                  message: "Comment is reuqired"
                }
              })} 
            />
          </div>
          <p>{errors.comment?.message}</p>
        </div>
        <div>
          <label>Country</label>
          <div className="selectdiv">
            <select {...register('Country')} required className="my-select-menu">
              <option value='usa'>USA</option>
              <option value='canada'>Canada</option>
              <option value='meow'>Meow</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button" type="submit">
        <span>Submit</span>
      </button>
    </form>
  )
}

export default NewForm