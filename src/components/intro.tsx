function Intro() {


  return (
    <div className="tracking-tighter" style={{fontFamily:'Ubuntu mono'}}>
  <div className='grid grid-cols-12 w-screen gap-x-4 mt-7'>
    <div className='col-span-8 text-4xl text-end sm:col-span-7 sm:text-8xl'>
    Frontend <br/>
    </div>
    <div className=' sm:pt-10 sm:pl-24 col-span-4 text-xs pt-2 sm:col-span-5 sm:text-sm '>
    /Based in <br/> Gurgaon, India
    </div> 
   <div
  className='col-span-10 text-4xl text-center sm:text-start sm:text-8xl sm:ml-[21rem] f'
  style={{ color: '#00FF7F' }}
>
  Developer
</div>

    <div className='mt-7 text-lg text-right sm:mr-96 col-span-12 mx-8'>
  I code <i><b>so spicy,</b></i> 
  <i><b> even the <span className="text-red-600 italic">bugs</span></b></i> run away.
</div>
 </div>
  </div>
  );
}

export default Intro;
