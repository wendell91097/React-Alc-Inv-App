import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseType, choosePrice, chooseProof, chooseOrigin, chooseVintage, chooseDescription } from '../redux/slices/rootSlice';

interface BeverageFormProps {
  id?: string[],
}

function BeverageForm( props: BeverageFormProps ) {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = ( data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if(props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.name} , ${props.id}`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseType(data.type));
      dispatch(choosePrice(data.price));
      dispatch(chooseProof(data.proof));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseVintage(data.vintage));
      dispatch(chooseDescription(data.description));


      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }

  return (
      <form onSubmit={ handleSubmit(onSubmit) } className="col w-full"> 
        <div className="flex flex-row justify-evenly w-full">
          <div className="col p-2">
            <div>
              <label htmlFor="name">Name</label>
              <Input {...register('name')} name='name' placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <Input {...register('type')} name='type' placeholder="Type"/>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Input {...register('price')} name='price' placeholder="Price"/>
            </div>
            <div>
              <label htmlFor="proof">Proof</label>
              <Input {...register('proof')} name='proof' placeholder="Proof"/>
            </div>
          </div>
          <div className="col p-2">
            <div>
              <label htmlFor="origin">Origin</label>
              <Input {...register('origin')} name='origin' placeholder="Origin"/>
            </div>
            <div>
              <label htmlFor="vintage">Vintage/Year (Optional)</label>
              <Input {...register('vintage')} name='vintage' placeholder="Vintage/Year"/>
            </div>
            <div>
              <label htmlFor="description">Description (Optional)</label>
              <Input {...register('description')} name='description' placeholder="Description"/>
            </div>
          </div>
        </div>
        <div className="flex p-1">
          <button className="flex justify-start ml-11 m-4 bg-slate-300 p-2 rounded hover:bg-slate-800 text-black hover:text-white">
            Submit
          </button>
        </div>
      </form>
  )
}

export default BeverageForm