import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
             <div className='mt-5'>
        
        <div className='grid  grid-cols-5 gap-3'>
        <div>
          <label className='block'>To</label>
          <input type="text"  name='productName' className='mt-2 focus:border-orange-400 pt-2 pl-2 outline-none rounded pb-2 w-48	 border border-slate-300' type='text'/>
          </div>
          <div>
          <label className='block'>Date</label>
          <input type="text" placeholder='Current Date'  name='orginalPrice' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text'/>
          </div>
          <div>
          <label className='block'>Due Date</label>
          <input type="number"  name='sellPrice' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text'/>
          </div>
          <div>
              <label className='block'>Invoice Number</label>
              <input type="text" name='attributes' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text' />
          </div>
          <div>
              <label className='block'>Referance</label>
              <input type="text" name='attributes' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text' />
          </div>
        </div>

        <div className='flex justify-between'>
        <div>
              <label className="block">. </label>
              <input type="text" name='attributes' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text' />
          </div>        <div>
              <label className='block'>Tax Assurance</label>
              <input type="text" name='attributes' className='mt-2 pt-2 pl-2 focus:border-orange-400 outline-none rounded pb-2 w-48	 border border-slate-300' type='text' />
          </div>
        </div>

      {/* Table Design */}
      <table class="border-collapse w-full mt-4  bg-slate-100">
  <thead>
    <tr className='border border-slate-300'>
      <th className=' border border-slate-300'>Item</th>
                <th className=' border border-slate-300'>Description</th>
                <th className=' border border-slate-300'>Quentity</th>
                <th className=' border border-slate-300'>Unite Price</th>
                <th className=' border border-slate-300'>Discount</th>
                <th className=' border border-slate-300'>Account</th>
                <th>Tax</th>
    </tr>
  </thead>
  <tbody>
    <tr className=''>
      <td class=""><input type="text" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300' type='text' />
</td>
      <td class=""><input type="text" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-72	 border border-slate-300' type='text' />
</td>
      <td class=""><input  type="number" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit border border-slate-300'  />
</td>
      <td class=""><input type="number" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-20	 border border-slate-300' placeholder='1.0' />
</td>
      <td class=""><input type="text" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-20	 border border-slate-300' type='text' />
</td>
    <td>  <select class="ui dropdown pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-fit	 border border-slate-300">
    <option value="$">USD (United States Dollar)</option>
                <option value="£">GBP (British Pound Sterling)</option>
                <option value="¥">JPY (Japanese Yen)</option>
                <option value="$">CAD (Canadian Dollar)</option>
                <option value="$">AUD (Australian Dollar)</option>
                <option value="$">SGD (Singapore Dollar)</option>
                <option value="¥">CNY (Chinese Renminbi)</option>
                <option value="₿">BTC (Bitcoin)</option>
</select></td>
      <td class=""><input type="text" name='attributes' className=' pt-2 pl-2 focus:border-orange-400 outline-none  pb-2 w-48	 border border-slate-300' type='text' />
</td>
    </tr>
    
  </tbody>
</table>

        <div className='mt-5 grid w-full grid-cols-4'>
        <div className="form-group ">
                                  <label className='block' for="status"> Item in stock *</label>
                                  <input className='mt-2 focus:border-orange-400 pt-3 border-slate-300 pl-3 outline-none rounded pb-3 w-72 border' type='number'/>

              </div>
        </div>

         {/*  */}

          <div className="mt-10 gap-2">
                                  <button type='submit' href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</button>
                                  <button type='button' href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</button>
       </div>

          

      </div>
        </form>
        </div>
    );
};

export default Form;